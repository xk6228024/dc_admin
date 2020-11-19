<!-- 广告发布 -->
<template>
    <div class="advertRelease" id="advertRelease">
        <breadcrumb :breadList="['产品管理', '广告发布']">
            <label>广告位置：</label>
            <el-select v-model="advertType" clearable placeholder="请选择">
                <el-option
                v-for="item in advertTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <label>关键词：</label>
            <el-input class="search-text w160" v-model="searchKey" clearable placeholder="请输入标题"></el-input>
            <label>状态：</label>
            <el-select class="w120" v-model="advertStatus" clearable placeholder="请选择">
                <el-option
                v-for="item in advertStatusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">广告时间段:</label>
                <el-date-picker
                    v-model="dateRegion"
                    type="daterange"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    value-format="yyyy-MM-dd"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="search">查询</el-button>
            </div>
            <el-button class="fr mt17" type="primary" @click="addAdv()" >新增广告</el-button>
            <el-button class="fr mt17" @click="exportTable">导出报表</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                v-loading="loading"
                :data="tableData"
                class="tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="4%">
                </el-table-column>
                <el-table-column
                prop="adTypeText"
                align="left"
                min-width="8%"
                label="广告位置">
                </el-table-column>
                <el-table-column
                prop="adTitle"
                align="left"
                min-width="12%"
                label="标题">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="广告时间段">
                    <template slot-scope="scope">
                        {{scope.row.startTime}} 到 {{scope.row.endTime}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="8%"
                label="发布时间">
                    <template slot-scope="scope">
                        {{scope.row.createTime}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="5%"
                label="状态">
                    <template slot-scope="scope">
                        <!-- {{scope.row.statusText}} -->
                        <span v-if="scope.row.status==0">未开始</span>
                        <span v-if="scope.row.status==1">进行中</span>
                        <span v-if="scope.row.status==2">已结束</span>
                        <span v-if="scope.row.status==3">已暂停</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="updateTime"
                align="left"
                min-width="8%"
                label="实际结束时间">
                    <template slot-scope="scope">
                        {{scope.row.lastTime}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="12%"
                label="备注">
                </el-table-column>
                <el-table-column
                prop="createUserName"
                align="left"
                min-width="5%"
                label="操作人">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="/[0123]/.test(scope.row.status)" @click="advertDetail(scope.row.adId, 1)" type="text" size="small">详情</el-button>
                        <el-button v-if="scope.row.status === 0" @click="advertDetail(scope.row.adId)" type="text" size="small">编辑</el-button>
                        <el-button v-if="scope.row.status === 0" @click="deleteAdvert(scope.row.adId)" type="text" size="small">删除</el-button>
                        <el-button v-if="scope.row.status === 1" @click="changeAdvertStatus(scope.row.adId, 3)" type="text" size="small">暂停</el-button>
                        <el-button v-if="scope.row.status === 3" @click="changeAdvertStatus(scope.row.adId, 1)" type="text" size="small">启用</el-button>
                        <el-button v-if="scope.row.status === 1 || scope.row.status === 3" @click="closeAd(scope.row.adId, 1)" type="text" size="small">结束</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <modal
            :title="adId ? '编辑广告发布' : '新增广告发布'"
            :width="650"
            :alert="advertAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon ref="advertForm" label-width="132px" class="form">
                <el-form-item label="广告位置：" prop="adType">
                    <el-radio-group v-model="ruleForm.adType" @change="adTypeChange">
                        <el-radio :label="1">跑马灯文字广告</el-radio>
                        <el-radio :label="2">弹出窗口广告</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item v-if="ruleForm.adType === 1" label="广告标题：" prop="adTitleLong" :rules="$validate({required:true})">
                    <el-input
                        type="textarea"
                        maxlength="80"
                        :resize="'none'"
                        placeholder="字数控制在80字内哈~"
                        v-model="ruleForm.adTitleLong">
                    </el-input>
                </el-form-item>
                <el-form-item v-if="ruleForm.adType === 2" label="广告标题：" prop="adTitle" :rules="$validate({required:true})">
                    <el-input
                        v-model="ruleForm.adTitle"
                        maxlength="18"
                        placeholder="字数控制在18字内哈~">
                    </el-input>
                </el-form-item>
                <el-form-item v-if="ruleForm.adType === 2" label="正文内容：" prop="adContent" :rules="$validate({required:true})">
                    <el-input type="textarea" :resize="'none'" maxlength="60" v-model="ruleForm.adContent"
                    placeholder="字数控制在60字内哈~"></el-input>
                </el-form-item>
                <el-form-item v-if="ruleForm.adType === 2" label="图片：" prop="adPic" :rules="$validate({required:true})">
                    <el-upload
                        class="avatar-uploader"
                        v-model="ruleForm.adPic"
                        action="http://sz.qxjgxt.com/api/external/attachment/file/upload"
                        :show-file-list="true"
                        :on-remove="removeUploadImg"
                        :on-success="uploadSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="ruleForm.adPic" :src="ruleForm.adPic" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <div class="avatar-uploader-tips">
                        <h6>点击<span v-html="ruleForm.adPic ? '图片重新' : '”+”号'"></span>上传图片</h6>
                        <p>建议尺寸：320x180px <br />支持JPG、JPEG、GIF、PNG格式，小于2M</p>
                    </div>
                </el-form-item>
                <el-form-item label="广告时间段：" prop="dateRegion" :rules="$validate({required:true})">
                    <el-date-picker
                        v-model="ruleForm.dateRegion"
                        type="daterange"
                        :picker-options="pickerOptions"
                        range-separator="至"
                        start-placeholder="开始日期"
                        class="search-text vam"
                        value-format="timestamp"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="跳转链接：" prop="adHref">
                    <el-input  maxlength="180" v-model="ruleForm.adHref"></el-input>
                </el-form-item>
                <el-form-item label="发布对象：">
                    <el-radio-group v-model="ruleForm.isShareAll">
                        <el-radio :label="1">所有用户</el-radio>
                        <el-radio :label="0">指定用户</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item v-show="ruleForm.isShareAll === 0" label="指定城市：" prop="city">
                    <el-select
                    v-model="ruleForm.city"
                    multiple
                    :collapse-tags="ruleForm.city.length > 4"
                    filterable
                    placeholder="请选择城市">
                        <el-option
                        v-for="item in cityList"
                        :key="item.cityId"
                        :label="item.cityName"
                        :value="item.cityId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item v-show="ruleForm.isShareAll === 0" label="指定品牌：" prop="vehicleBrand">
                    <el-select
                    v-model="ruleForm.vehicleBrand"
                    :collapse-tags="ruleForm.vehicleBrand.length > 4"
                    multiple
                    filterable
                    placeholder="请选择品牌">
                        <el-option-group
                        v-for="(val, key) in brandList"
                        :key="key"
                        :label="key">
                            <el-option
                                v-for="item in brandList[key]"
                                :key="item.carBrandId"
                                :label="item.carBrandName"
                                :value="item.carBrandId">
                            </el-option>
                        </el-option-group>
                    </el-select>
                </el-form-item>
                <el-form-item v-show="ruleForm.isShareAll === 0" label="企业类型：" prop="businessCategory">
                    <el-select v-model="ruleForm.businessCategory" multiple filterable placeholder="请选择企业类型">
                        <el-option
                        v-for="item in enterpriseTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </modal>
        <modal
            :title="'广告查看详情'"
            :width="650"
            :alert="advertDetailView"
            :showBtn="false"
            @alertCancel="advertDetailViewClose">
            <table class="detail-table">
                <tr>
                    <td class="name">广告位置</td>
                    <td class="value">{{advertDetailData.adType | advertTypeFilter}}</td>
                </tr>
                <tr>
                    <td class="name">广告标题</td>
                    <td class="value">{{advertDetailData.adTitle}}</td>
                </tr>
                <tr v-if="advertDetailData.adType === 2">
                    <td class="name textarea">正文内容</td>
                    <td class="value">{{advertDetailData.adContent}}</td>
                </tr>
                <tr v-if="advertDetailData.adType === 2">
                    <td class="name">图片</td>
                    <td class="value textarea">
                        <div class="advert-image-wrap">
                            <img v-if="advertDetailData.adPic" :src="advertDetailData.adPic">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="name">广告时间段</td>
                    <td class="value">{{advertDetailData.startTime | filterTime('yyyy-mm-dd')}} 到 {{advertDetailData.endTime | filterTime('yyyy-mm-dd')}}</td>
                </tr>
                <tr>
                    <td class="name">跳转链接</td>
                    <td class="value">{{advertDetailData.adHref}}</td>
                </tr>
                <tr>
                    <td class="name">发布对象</td>
                    <td class="value">{{advertDetailData.isShareAll === 1 ? '所有用户' : '指定用户'}}</td>
                </tr>
                <tr v-if="advertDetailData.isShareAll === 0">
                    <td class="name">指定城市</td>
                    <td class="value">{{advertDetailData.city}}</td>
                </tr>
                <tr v-if="advertDetailData.isShareAll === 0">
                    <td class="name">指定品牌</td>
                    <td class="value">{{advertDetailData.vehicleBrand}}</td>
                </tr>
                <tr v-if="advertDetailData.isShareAll === 0">
                    <td class="name">企业类型</td>
                    <td class="value">{{advertDetailData.businessCategory | enterpriseTypeFilter}}</td>
                </tr>
            </table>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import { setNum } from '@/utils/utils.js'
export default {
    name: 'advertRelease',
    data () {
        return {
            dateRegion: [],
            total: 0,
            searchKey: '',
            pageNum: 1,
            pageSize: 10,
            advertAlert: false,
            sendData: false, // 防重复提交
            advertDetailView: false, // 查看广告详情
            cityList: [ // 城市列表
            ],
            loading: false,
            advertType: '',
            advertTypeList: [ // 广告位置
                {
                    label: '跑马灯文字广告',
                    value: 1
                },
                {
                    label: '弹出窗口广告',
                    value: 2
                }
            ],
            advertStatus: '',
            advertStatusList: [ // 广告状态
                {
                    label: '未开始',
                    value: 0
                },
                {
                    label: '进行中',
                    value: 1
                },
                {
                    label: '已结束',
                    value: 2
                },
                {
                    label: '已暂停',
                    value: 3
                }
            ],
            enterpriseTypeList: [ // 企业类型
                {
                    label: '一类企业',
                    value: '1'
                },
                {
                    label: '二类企业',
                    value: '2'
                },
                {
                    label: '三类企业',
                    value: '3'
                }
            ],
            adId: '', // 当前广告ID
            brandList: {}, // 品牌列表
            initBrandList: [], // 初始品牌数据
            ruleForm: {
                adTitle: '', // 广告标题
                adTitleLong: '', // 长广告标题
                adType: 1, // 广告位置
                adContent: '', // 广告正文
                adPic: '', // 企业类型
                adHref: '', // 链接
                isShareAll: 1,
                city: '', // 城市
                dateRegion: [], // 时间段
                vehicleBrand: '', // 品牌
                businessCategory: '' // 企业类型
            },
            advertDetailData: {
                adTitle: '', // 广告标题
                adType: 1, // 广告位置
                adContent: '', // 广告正文
                adPic: '', // 企业类型
                adHref: '', // 链接
                isShareAll: 1,
                city: '', // 城市
                dateRegion: [], // 时间段
                vehicleBrand: '', // 品牌
                businessCategory: '' // 企业类型
            },
            pickerOptions: { // 日期范围时间限制
                disabledDate (time) {
                    return time.getTime() < Date.now() - 8.64e7
                }
            },
            tableData: [
            ]
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    filters: {
        advertTypeFilter (value) {
            const advertTypeList = [
                {
                    label: '跑马灯文字广告',
                    value: 1
                },
                {
                    label: '弹出窗口广告',
                    value: 2
                }
            ]
            for (let i = 0; i < advertTypeList.length; i++) {
                if (advertTypeList[i].value === value) {
                    return advertTypeList[i].label
                }
            }
        },
        enterpriseTypeFilter (value) {
            const enterpriseTypeList = [
                {
                    label: '一类企业',
                    value: '1'
                },
                {
                    label: '二类企业',
                    value: '2'
                },
                {
                    label: '三类企业',
                    value: '3'
                }
            ]
            for (let i = 0; i < enterpriseTypeList.length; i++) {
                if (enterpriseTypeList[i].value === value) {
                    return enterpriseTypeList[i].label
                }
            }
        }
    },
    computed: {
    },
    watch: {
        '$store.state.refreshList': {
            handler (val) {
                if (val.includes(this.$el.className)) {
                    this.getDataList()
                    this.$store.commit('delRefreshList', this.$el.className)
                }
            },
            deep: true
        }
    },
    created () {
        this.findAdvertList()
        this.findCityList()
        this.findBrandList()
    },
    methods: {
        addAdv () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('advertRelease:add')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('advertReleaseDetail')
        },
        // 导出报表
        exportTable () {
            let href = `${window.uploadURL}advertisement/export?searchKey=${this.searchKey}&status=${this.advertStatus}&adType=${this.advertType}`
            console.log(href)
            if (this.dateRegion && this.dateRegion.length) {
                href = href + '&startDate=' + this.dateRegion[0]
                href = href + '&endDate=' + this.dateRegion[1]
            }
            window.open(href)
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.findAdvertList()
        },
        // 获取城市列表
        findCityList () {
            this.$get('comm/citys/cjl/ent', {})
                .then(res => {
                    this.cityList = res.data
                })
        },
        // 获取品牌列表
        findBrandList () {
            this.$post('advertisement/brandlist ', {})
                .then(res => {
                    this.initBrandList = [...res.data]
                    res.data.forEach(item => {
                        item.initial = window.pinyinUtil.getFirstLetter(item.carBrandName).substr(0, 1)
                    })
                    // 按首字母排序
                    let brandList = res.data.sort(function (objA, objB) {
                        if (objA.initial > objB.initial) {
                            return 1
                        } else if (objA.initial < objB.initial) {
                            return -1
                        } else {
                            return 0
                        }
                    })
                    // 将同字母类型进行分类
                    let obj = {}
                    brandList.forEach(item => {
                        if (!obj[item.initial]) {
                            obj[item.initial] = [item]
                        } else {
                            obj[item.initial].push(item)
                        }
                    })
                    this.brandList = obj
                })
        },
        // 获取广告列表
        findAdvertList () {
            let obj = {
                searchKey: this.searchKey,
                status: this.advertStatus,
                adType: this.advertType
            }
            if (this.dateRegion && this.dateRegion.length) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            } else {
                obj.startDate = ''
                obj.endDate = ''
            }
            this.loading = true
            this.$post('advertisement/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res.code === 0) {
                        this.total = res.total
                        this.tableData = setNum(res.data, this.pageNum, this.pageSize)
                    }
                    this.loading = false
                })
                .catch(e => {
                    this.loading = false
                })
        },
        // 上传成功
        uploadSuccess (res) {
            this.ruleForm.adPic = res.data
        },
        // 上传之前
        beforeAvatarUpload (file) {
            const isJPG = /jpeg|png|gif/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/GIF/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        // 删除图片
        removeUploadImg (file, fileList) {
            this.ruleForm.adPic = ''
            console.log(file, fileList)
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.findAdvertList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.findAdvertList()
        },
        // 当广告类型改变时清空校验情况
        adTypeChange (val) {
            this.$refs.advertForm.clearValidate()
        },
        // 暂停或启用广告
        changeAdvertStatus (adId, status) {
            this.$post('advertisement/updatestatus', {
                data: {
                    adId,
                    status
                }
            })
                .then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功！'
                        })
                        this.findAdvertList()
                    } else {
                        this.$alert(res.message)
                    }
                })
        },
        // 删除广告
        deleteAdvert (adId) {
            this.$confirm('确认删除该条广告吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('advertisement/delete', {
                    data: {
                        adId
                    }
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.findAdvertList()
                            this.$message({
                                type: 'success',
                                message: '删除成功！'
                            })
                        }
                    })
            }).catch(() => {})
        },
        // 结束广告
        closeAd (adId) {
            this.$confirm('确认结束该条广告吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('advertisement/close', {
                    data: {
                        adId
                    }
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.findAdvertList()
                            this.$message({
                                type: 'success',
                                message: '操作成功！'
                            })
                        }
                    })
            }).catch(() => {})
        },
        // 新增广告弹窗确认
        alertConfirm () {
            this.$refs['advertForm'].validate((valid) => {
                if (valid) {
                    let msg, url
                    let advertData = {
                        data: {
                            adType: this.ruleForm.adType,
                            adTitle: this.ruleForm.adType === 1 ? this.ruleForm.adTitleLong : this.ruleForm.adTitle,
                            startTime: this.ruleForm.dateRegion[0],
                            endTime: this.ruleForm.dateRegion[1] + (1000 * 60 * 60 * 24 - 1000),
                            adHref: this.ruleForm.adHref,
                            isShareAll: this.ruleForm.isShareAll
                        }
                    }
                    // 弹窗广告参数
                    if (this.ruleForm.adType === 2) {
                        advertData.data.adPic = this.ruleForm.adPic
                        advertData.data.adContent = this.ruleForm.adContent
                    } else {
                        advertData.data.adPic = ''
                        advertData.data.adContent = ''
                    }
                    // 指定用户参数
                    if (this.ruleForm.isShareAll === 0) {
                        advertData.data.vehicleBrand = this.ruleForm.vehicleBrand + ''
                        advertData.data.businessCategory = this.ruleForm.businessCategory + ''
                        advertData.data.city = this.ruleForm.city + ''
                    } else {
                        advertData.data.vehicleBrand = ''
                        advertData.data.businessCategory = ''
                        advertData.data.city = ''
                    }
                    if (this.adId) {
                        msg = '编辑成功'
                        url = 'advertisement/edit'
                        advertData.data.adId = this.adId
                    } else {
                        msg = '添加成功'
                        url = 'advertisement/add'
                    }
                    if (this.sendData) {
                        return
                    }
                    this.sendData = true
                    this.$post(url, advertData)
                        .then(res => {
                            if (res.code === 0) {
                                this.findAdvertList()
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                this.alertCancel()
                            }
                            this.sendData = false
                        })
                        .catch(e => {
                            this.sendData = false
                        })
                } else {
                    this.$alert('请填写正确的广告信息！')
                    return false
                }
            })
        },
        // 新增广告弹窗关闭
        alertCancel () {
            this.ruleForm = {
                adTitle: '', // 广告标题
                adTitleLong: '', // 广告长标题
                adContent: '', // 广告正文
                adPic: '', // 企业类型
                adHref: '', // 链接
                adType: 1, // 广告位置
                isShareAll: 1, // 指定用户类型
                city: [], // 城市
                dateRegion: [], // 时间段
                vehicleBrand: [], // 品牌
                businessCategory: [] // 企业类型
            }
            this.adId = ''
            this.advertAlert = false
            this.$refs.advertForm.clearValidate()
        },
        // 广告详情
        advertDetail (adId, view) {
            if (view) {
                // 权限校验**********************************************************
                if (!this.$checkAuth('advertRelease:view')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
                // this.advertDetailView = true
                this.$router.push('/advDetail?id=' + adId)
            } else {
                // 权限校验**********************************************************
                if (!this.$checkAuth('advertRelease:edit')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
                // this.advertAlert = true
                this.$router.push('/advertReleaseDetail?id=' + adId)
            }
            // this.$post('advertisement/view', {
            //     data: {
            //         adId
            //     }
            // })
            //     .then(res => {
            //         if (res.code === 0) {
            //             if (view) {
            //                 res.data.vehicleBrand = this.brandIdToName(res.data.vehicleBrand)
            //                 res.data.city = this.cityIdToName(res.data.city)
            //                 this.advertDetailData = res.data
            //             } else {
            //                 res.data.businessCategory = res.data.businessCategory ? res.data.businessCategory.split(',') : []
            //                 res.data.city = res.data.city ? res.data.city.split(',') : []
            //                 res.data.vehicleBrand = res.data.vehicleBrand ? this.brandIdToList(res.data.vehicleBrand) : []
            //                 res.data.dateRegion = [res.data.startTime, res.data.endTime]
            //                 if (res.data.adType === 1) {
            //                     res.data.adTitleLong = res.data.adTitle
            //                     res.data.adTitle = ''
            //                 } else {
            //                     res.data.adTitleLong = ''
            //                 }
            //                 this.ruleForm = res.data
            //                 this.adId = adId
            //             }
            //         }
            //     })
        },
        // 品牌ID转换数字列表
        brandIdToList (str) {
            let brandIdList = []
            str && str.split(',').forEach(item => {
                brandIdList.push(item - 0)
            })
            return brandIdList
        },
        // 品牌ID转换名字列表
        brandIdToName (str) {
            let brandNameList = []
            str && str.split(',').forEach(id => {
                this.initBrandList.forEach(item => {
                    if ((id - 0) === item.carBrandId) {
                        brandNameList.push(item.carBrandName)
                    }
                })
            })
            return brandNameList + ''
        },
        // 城市ID列表转换
        cityIdToName (str) {
            let cityNameList = []
            str && str.split(',').forEach(id => {
                this.cityList.forEach(item => {
                    if (id === item.cityId) {
                        cityNameList.push(item.cityName)
                    }
                })
            })
            return cityNameList + ''
        },
        // 关闭广告详情
        advertDetailViewClose () {
            this.advertDetailView = false
        }
    }
}
</script>

<style lang='less' scoped>
#advertRelease {
    .w160 {
        width:160px;
    }
    .w120 {
        width:120px;
    }
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .avatar-uploader, .avatar-uploader-tips {
        vertical-align: middle;
    }
    .avatar-uploader-tips {
        display: inline-block;
        width: 236px;
        margin-left: 16px;
        h6 {
            color:#778CA2;
            font-size: 14px;
        }
        p {
            color: #98A9BC;
            font-size: 12px;
            line-height: 22px;
        }
    }
    .form {
        padding-right: 40px;
    }
    .detail-table {
        margin: 3px 40px 0px 40px;
        border-top: 1px solid #E8ECEF;
        border-left: 1px solid #E8ECEF;
        td {
            border-right: 1px solid #E8ECEF;
            border-bottom: 1px solid #E8ECEF;
            height: 44px;
        }
        .name {
            width: 120px;
            text-align: center;
        }
        .value {
            width: 418px;
            padding: 0 16px;
            .advert-image-wrap {
                border: 1px solid #E8ECEF;
                padding: 6px;
                width: 146px;
                height: 76px;
                img {
                    width: 146px;
                    height: 76px;
                }
            }
            &.textarea {
                padding: 10px 16px;
            }
        }
    }
}
</style>
<style lang="less">
#advertRelease {
    .avatar-uploader{
        height: 100px;
        display: inline-block;
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 90px;
            width:160px;
            img {
                width:100%;
                height: 100%;
            }
        }
        .el-upload-list {
            position: absolute;
            bottom: -20px;
            left: 10px;
        }
        .el-upload:hover {
            border-color: #4D7CFE;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 160px;
            height: 90px;
            line-height: 90px;
            text-align: center;
        }
    }
    .form {
        .el-select {
            width: 100%;
        }
        .el-input__inner {
            width: 100%;
        }
        .el-date-editor{
            .el-range-input {
                width: 41%;
            }
        }
    }
    .el-popover {
        height: initial;
        width: initial;
        overflow: auto;
    }
}
</style>

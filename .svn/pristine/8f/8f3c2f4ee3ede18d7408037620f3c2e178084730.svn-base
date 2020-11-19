<!-- 广告发布 -->
<template>
    <div class="advertRelease" id="advertRelease" v-loading="showLoading">
        <h3 class="detail-title">广告详情
            <el-button class="fr back" @click="goBack" style="margin-right:0;">返回</el-button>
        </h3>
        <table class="detail-table" style="margin-top:20px;">
            <tr>
                <td class="name">广告位置：</td>
                <td class="value">{{advertDetailData.adType | advertTypeFilter}}</td>
            </tr>
            <tr>
                <td class="name">广告标题：</td>
                <td class="value">{{advertDetailData.adTitle}}</td>
            </tr>
            <tr v-if="advertDetailData.adType === 2">
                <td class="name textarea">正文内容：</td>
                <td class="value">{{advertDetailData.adContent}}</td>
            </tr>
            <tr v-if="advertDetailData.adType === 2">
                <td class="name">图片：</td>
                <td class="value textarea">
                    <div class="advert-image-wrap">
                        <img v-if="advertDetailData.adPic" :src="advertDetailData.adPic" @click="$lookImg(advertDetailData.adPic)">
                    </div>
                </td>
            </tr>
            <tr>
                <td class="name">广告时间段：</td>
                <td class="value">{{advertDetailData.startTime | filterTime('yyyy-mm-dd')}} 到 {{advertDetailData.endTime | filterTime('yyyy-mm-dd')}}</td>
            </tr>
            <tr>
                <td class="name">跳转链接：</td>
                <td class="value">{{advertDetailData.adHref}}</td>
            </tr>
            <tr>
                <td class="name">发布对象：</td>
                <td class="value">{{advertDetailData.isShareAll === 1 ? '所有用户' : '指定用户'}}</td>
            </tr>
            <tr v-if="advertDetailData.isShareAll === 0">
                <td class="name">指定城市：</td>
                <td class="value">{{advertDetailData.cityText}}</td>
            </tr>
            <tr v-if="advertDetailData.isShareAll === 0">
                <td class="name">指定品牌：</td>
                <td class="value">{{advertDetailData.vehicleBrandText}}</td>
            </tr>
            <tr v-if="advertDetailData.isShareAll === 0">
                <td class="name">企业类型：</td>
                <td class="value">{{advertDetailData.businessCategoryText}}</td>
            </tr>
            <tr>
                <td class="name">操作人：</td>
                <td class="value">{{advertDetailData.createUserName}}</td>
            </tr>
            <tr v-if="advertDetailData.publishTime">
                <td class="name">发布时间：</td>
                <td class="value">{{advertDetailData.publishTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</td>
            </tr>
            <tr>
                <td class="name">状态：</td>
                <td class="value">{{advertDetailData.statusText}}</td>
            </tr>
            <tr v-if="advertDetailData.remark">
                <td class="name">备注：</td>
                <td class="value">{{advertDetailData.remark}}</td>
            </tr>
            <!-- <tr v-if="advertDetailData.isShareAll === 0">
                <td class="name">备注</td>
                <td class="value">{{advertDetailData.remark}}</td>
            </tr> -->
        </table>
        <div>
            <el-button class="back" @click="checkEnv" style="margin-top:20px;margin-left:40px;margin-bottom:30px;">查看覆盖企业</el-button>
        </div>
        <modal
            :title="'查看覆盖企业'"
            :width="1000"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <breadcrumb>
                    <!-- <label for="">所属区域:</label>
                    <el-select class="w100" clearable v-model="areaId"  placeholder="请选择">
                        <el-option
                        v-for="item in areaList"
                        :key="item.sysAreaId"
                        :label="item.areaName"
                        clearable
                        :value="item.sysAreaId">
                        </el-option>
                    </el-select>
                    <label for="">城市:</label>
                    <el-select class="w100" clearable v-model="regionId" placeholder="请选择">
                        <el-option
                        v-for="item in cityList2"
                        :key="item.regionId"
                        :label="item.regionName"
                        clearable
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                    <label for="">企业类型:</label>
                    <el-select class="w100" clearable v-model="envType" placeholder="请选择">
                        <el-option
                        v-for="item in enterpriseTypeList"
                        :key="item.value"
                        :label="item.label"
                        clearable
                        :value="item.value">
                        </el-option>
                    </el-select> -->
                    <label for="">企业名称:</label>
                    <el-input style="width:200px;" clearable class="search-text" v-model="entName" placeholder="企业名称"></el-input>
                    <el-button class="search" @click="search">查询</el-button>
                </breadcrumb>
                <div style="padding:0 40px;">
                    <el-table
                        border
                        :data="envList"
                        ref="multipleTable"
                        class="tableBorder"
                        height="300"
                        >
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        width="80">
                        </el-table-column>
                        <el-table-column
                        prop="province"
                        align="left"
                        width="80"
                        label="省份">
                        </el-table-column>
                        <el-table-column
                        prop="city"
                        align="left"
                        width="80"
                        label="城市">
                        </el-table-column>
                        <el-table-column
                        prop="district"
                        align="left"
                        width="80"
                        label="区域">
                        </el-table-column>
                        <el-table-column
                        prop="entCat"
                        align="left"
                        width="100"
                        label="企业类型">
                        </el-table-column>
                        <el-table-column
                        prop="entFullName"
                        align="left"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="brandName"
                        align="left"
                        label="主修品牌">
                        </el-table-column>
                    </el-table>
                    <div class="pagination clearfix">
                        <el-pagination
                            class="fr"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="pageNum"
                            :page-sizes="[10, 20, 30, 40, 50, 100]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper, slot"
                            :total="total">
                        </el-pagination>
                        <p class="bottom-data fl" style="">覆盖企业总数：{{allTotal}}</p>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name: 'advDetail',
    data () {
        return {
            showLoading: false,
            allTotal: '',
            envList: [],
            showAlert: false,
            entName: '',
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
        Breadcrumb,
        Modal
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
            if (!value) return ''
            let str = ''
            if (value.indexOf(1) !== -1) str += '一类企业  '
            if (value.indexOf(2) !== -1) str += '二类企业  '
            if (value.indexOf(3) !== -1) str += '三类企业  '
            return str
        }
    },
    computed: {
    },
    created () {
        // this.findAdvertList()
        this.advertDetail(this.$route.query.id)
        this.findCityList()
        this.findBrandList()
    },
    methods: {
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getEnvList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getEnvList()
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getEnvList()
        },
        checkEnv () {
            this.pageNum = 1
            this.pageSize = 10
            this.showAlert = true
            this.getEnvList()
        },
        getEnvList () {
            console.log(this.advertDetailData)
            this.$post('advertisement/findadvertents?page=' + this.pageNum + '&size=' + this.pageSize, {
                cityList: this.advertDetailData.cityList ? this.advertDetailData.cityList.split(',') : [],
                vehicleBrandList: this.advertDetailData.vehicleBrandList ? this.advertDetailData.vehicleBrandList.split(',') : [],
                entName: this.entName,
                isShareAll: this.advertDetailData.isShareAll,
                businessCategory: this.advertDetailData.businessCategory ? this.advertDetailData.businessCategory.split(',') : []
            }).then(res => {
                // console.log(this.pageNum, this.pageSize)
                this.envList = this.$setNum(res.data, this.pageNum, this.pageSize)
                this.total = res.total
                this.allTotal = res.allTotal
            })
        },
        alertConfirm () {
            this.pageNum = 1
            this.pageSize = 10
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
            this.envList = []
        },
        goBack () {
            this.$router.push('/advertRelease')
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
        // 广告详情
        advertDetail (adId, view = 1) {
            this.showLoading = true
            this.$post('advertisement/view', {
                data: {
                    adId
                }
            })
                .then(res => {
                    this.showLoading = false
                    if (res.code === 0) {
                        if (view) {
                            res.data.cityList = res.data.city
                            res.data.vehicleBrandList = res.data.vehicleBrand
                            res.data.vehicleBrand = this.brandIdToName(res.data.vehicleBrand)
                            res.data.city = this.cityIdToName(res.data.city)
                            this.advertDetailData = res.data
                        } else {
                            res.data.businessCategory = res.data.businessCategory ? res.data.businessCategory.split(',') : []
                            res.data.city = res.data.city ? res.data.city.split(',') : []
                            res.data.vehicleBrand = res.data.vehicleBrand ? this.brandIdToList(res.data.vehicleBrand) : []
                            res.data.dateRegion = [res.data.startTime, res.data.endTime]
                            if (res.data.adType === 1) {
                                res.data.adTitleLong = res.data.adTitle
                                res.data.adTitle = ''
                            } else {
                                res.data.adTitleLong = ''
                            }
                            this.ruleForm = res.data
                            this.adId = adId
                        }
                    }
                })
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
    .pagination {
        position: relative;
        .bottom-data {
            color:#98A9BC;
            font-weight: normal;
            line-height: 36px;
            color:#98A9BC;
            font-weight: normal;
            margin-top: 20px;
        }
    }
    .alert-content {
        padding-top: 0;
    }
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 36px;
        border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#666666;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
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
        // border-top: 1px solid #E8ECEF;
        // border-left: 1px solid #E8ECEF;
        td {
            // border-right: 1px solid #E8ECEF;
            // border-bottom: 1px solid #E8ECEF;
            height: 36px;
        }
        .name {
            width: 120px;
            text-align: center;
            color: #252631;
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
    .alert-content {
        padding-top: 0;
    }
}
</style>

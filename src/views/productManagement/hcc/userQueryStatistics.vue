<!-- 用户查询统计 -->
<template>
    <div class="userQueryStatistics">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-select class="w120_input" clearable v-model="areaId" placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.sysAreaId"
                :label="item.areaName"
                clearable
                :value="item.sysAreaId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" clearable v-model="regionId" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                clearable
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">关键词:</label>
            <el-input style="width:160px;" clearable class="search-text" v-model="enterpriseNamekey" placeholder="手机号"></el-input>
            <label for="">认证状态:</label>
            <el-select class="w120_input" clearable v-model="certStatus" placeholder="请选择">
                <el-option
                v-for="item in certStatusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">创建时间:</label>
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
            <el-button class="fr mt17 hhide" type="primary" @click="$router.push('/agentEdit')">创建代理</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="loading"
                style="width: 100%;minHeight:600px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="areaRegionName"
                align="left"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="mobile"
                align="left"
                width="150"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="rechargeMoney"
                align="left"
                label="充值金额统计">
                </el-table-column>
                <el-table-column
                prop="consumeMoney"
                align="left"
                label="消费金额统计">
                </el-table-column>
                <el-table-column
                prop="balance"
                align="left"
                label="账户余额">
                </el-table-column>
                <el-table-column
                prop="agentAccount"
                align="left"
                width="150"
                label="上级代理账号">
                </el-table-column>
                <el-table-column
                prop="isCertifiedText"
                align="left"
                label="认证状态">
                </el-table-column>
                <el-table-column
                prop="deleteText"
                align="left"
                label="使用状态">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                width="150"
                label="注册时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                width="120"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="editDetail(scope.row.userId)" type="text" size="small" :disabled="!$checkAuth('sys:user:view')">编辑</el-button>
                        <el-button @click="goDetail(scope.row.userId)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">查看</el-button>
                        <el-button v-if="scope.row.deleteFlag==-1" @click="enableStatus(scope.row.userId, 1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">启用</el-button>
                        <el-button v-else @click="enableStatus(scope.row.userId, -1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">禁用</el-button>
                    </template>
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
                <p class="bottom-data fl" style="">本期数据&nbsp;&nbsp;&nbsp;总用户数量：{{userCount}}人</p>
            </div>
        </div>
        <modal
            :title="'用户信息查看'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">用户信息</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">注册手机号码：</td>
                        <td class="tal fontColor">{{info.mobile}}</td>
                        <td class="tar" width="150">联系人：</td>
                        <td class="tal fontColor" width="270">{{info.customerContact}}</td>
                    </tr>
                    <tr>
                        <td class="tar">联系电话：</td>
                        <td class="tal fontColor">{{info.customerMobile}}</td>
                        <td class="tar">客户单位：</td>
                        <td class="tal fontColor">{{info.customerUnit}}</td>
                    </tr>
                    <tr>
                        <td class="tar">注册时间：</td>
                        <td class="tal fontColor">{{info.registerTime|filterTime('yyyy-MM-dd')}}</td>
                        <td class="tar">上级代理账号：</td>
                        <td class="tal fontColor">{{info.agentAccount}}</td>
                    </tr>
                    <tr>
                        <td class="tar">认证状态：</td>
                        <td class="tal fontColor">{{info.isCertifiedText}}</td>
                        <td class="tar">所属城市：</td>
                        <td class="tal fontColor">{{info.provinceName}}{{info.cityName}}{{info.regionName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">详细地址：</td>
                        <td class="tal fontColor" colspan="3">{{info.address}}</td>
                    </tr>
                </table>
            </div>
        </modal>
        <modal
            :title="'用户资料编辑'"
            :width="650"
            :alert="showAlert2"
            @alertConfirm="alertConfirm2"
            @alertCancel="alertCancel2">
            <div class="alertInner">
                <el-form ref="form" class="form"  :model="form" label-width="110px">
                    <el-form-item label="注册手机号：" prop="mobile" :rules="$validate({required:true,type:'phone'})">
                        <el-input type="text" class="name" v-model="form.mobile"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="用户密码：" prop="password" :rules="$validate({required:true,max:6,type:'EN'})">
                        <el-input type="text" class="name" v-model="form.password"></el-input>
                    </el-form-item> -->
                    <div>
                        <el-form-item label="所属城市：" class="dlb" prop="province" :rules="$validate({required:true})">
                            <el-select class="small_input w150" v-model="form.province" @change="provinceChange" placeholder="请选择">
                                <el-option
                                v-for="item in provinceList"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="city" class="small-input dlb" :rules="$validate({required:true})">
                            <el-select class="small_input w150" v-model="form.city" @change="cityChange" placeholder="请选择">
                                <el-option
                                v-for="item in cityList"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                                </el-option>
                        </el-select>
                        </el-form-item>
                        <el-form-item v-if="info.isCertified===1&&showRegionList" prop="region" class="small-input dlb" :rules="$validate({required:true})">
                            <el-select class="small_input w150" v-model="form.region" placeholder="请选择">
                                <el-option
                                v-for="item in regionList"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <el-form-item label="联系电话：" prop="customerMobile" :rules="form.isCertified===0?$validate({type:'tel'}):$validate({required:true,type:'tel'})">
                        <el-input type="tel" class="name" v-model="form.customerMobile"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人：" prop="customerContact" :rules="form.isCertified===0?$validate({max:12}):$validate({required:true,max:12})">
                        <el-input type="text" class="name" v-model="form.customerContact"></el-input>
                    </el-form-item>
                    <el-form-item label="客户单位：" prop="customerUnit" :rules="form.isCertified===0?$validate({max:50}):$validate({required:true,max:50})">
                        <el-input type="text" class="name" v-model="form.customerUnit"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="详细地址：" prop="address" :rules="$validate({max:50})">
                        <el-input type="text" class="name" v-model="form.address"></el-input>
                    </el-form-item> -->
                    <el-form-item label="上级代理：" prop="agentId" >
                        <el-select  class="w460" v-model="form.agentId" placeholder="请选择">
                            <el-option
                            v-for="item in agentList"
                            :key="item.agentId"
                            :label="item.agentAccount"
                            clearable
                            :value="item.agentId">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="注册时间：" prop="registerTime">
                        <el-input type="text" class="name" disabled v-model="form.registerTime"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import { filterTime } from '@/utils/filterTime.js'
export default {
    name: 'userQueryStatistics',
    data () {
        return {
            showRegionList: true,
            userCount: '',
            info: {},
            form: {
                provinceId: '',
                cityId: '',
                regionId: '',
                userId: '',
                password: '',
                mobile: '',
                customerContact: '',
                customerMobile: '',
                customerUnit: '',
                province: '',
                registerTime: '',
                city: '',
                region: '',
                address: '',
                agentId: ''
            },
            showAlert: false,
            showAlert2: false,
            loading: false,
            areaList: [],
            cityList: [],
            provinceList: [],
            // cityList: [],
            regionList: [],
            reginList1: [],
            reginList2: [],
            reginList3: [],
            agentList: [],
            regionId: '',
            areaId: '', // 大区Id
            areaIds: '',
            enterpriseNamekey: '',
            auditRadio: '1', // 弹窗审核结果
            certStatus: '',
            certStatusList: [
                {
                    value: 0,
                    label: '未认证'
                },
                {
                    value: 1,
                    label: '已认证'
                },
                {
                    value: 2,
                    label: '审核中'
                },
                {
                    value: 3,
                    label: '认证不通过'
                }
            ],
            dateRegion: [],
            value: '',
            options: [],
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    created () {
        this.getAreaList()
        this.getDataList()
        this.getReginList1()
        this.getAgentList()
    },
    watch: {
        areaId (val) {
            this.regionId = ''
            this.cityList = []
            if (!val) return
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.regionId = ''
                    this.cityList = res.data
                }
            })
        }
    },
    methods: {
        provinceChange () {
            let val = this.form.province
            console.log(val)
            if (val) {
                this.getCityList(val)
                this.form.city = ''
                this.form.region = ''
            } else {
                this.cityList = []
                this.form.city = ''
                this.form.region = ''
            }
        },
        cityChange () {
            let val = this.form.city
            if (val) {
                this.getRegionList(val)
                this.form.region = ''
            } else {
                this.cityList = []
                this.form.region = ''
            }
        },
        getAgentList () {
            this.$post('agent/agentlist', {
                searchKey: ''
            }).then(res => {
                if (res.code === 0) {
                    console.log(res.code)
                    this.agentList = res.data
                }
            })
        },
        // 获取城市列表
        getCityList (id) {
            this.$get('list/regioncityList?provinceRegionId=' + id).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        // 获取区域列表
        getRegionList (id) {
            this.$get('list/regionList?cityId=' + id).then(res => {
                if (res.code === 0) {
                    this.regionList = res.data
                    if (!this.regionList.length) {
                        this.showRegionList = false
                    } else {
                        this.showRegionList = true
                    }
                }
            })
        },
        getReginList1 () {
            this.$get('list/regionProvinceList?type=1').then(res => {
                if (res.code === 0) {
                    this.provinceList = res.data
                }
            })
        },
        // 获取省列表
        getReginList2 (id) {
            this.$get('list/regioncityList?provinceRegionId=' + id).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        // 获取城市列表
        // getReginList3 (id) {
        //     this.$get('list/regionList?cityId=' + id).then(res => {
        //         if (res.code === 0) {
        //             this.regionList = res.data
        //         }
        //     })
        // },
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                auditStatus: this.certStatus,
                searchKey: this.enterpriseNamekey,
                areaRegion: this.areaId,
                city: this.regionId
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            }
            this.$post('bus/user/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data.data, this.pageNum, this.pageSize)
                        this.total = res.data.total
                        this.userCount = res.data.userCount.userCount
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 打开详情
        goDetail (id) {
            // this.$router.push('/agentDetail?id=' + id)
            this.$post('/bus/user/view', {
                data: {
                    id: id
                }
            }).then(res => {
                if (res.code === 0) {
                    this.info = res.data
                }
            })
            this.showAlert = true
        },
        // 打开编辑
        editDetail (id) {
            this.$post('/bus/user/view', {
                data: {
                    id: id
                }
            }).then(res => {
                if (res.code === 0) {
                    res.data.province = ''
                    res.data.city = ''
                    res.data.region = ''
                    this.info = res.data
                    this.form = res.data
                    this.form.registerTime = filterTime('yyyy-MM-dd', this.form.registerTime)
                    this.form.province = this.form.provinceId
                    this.form.city = this.form.cityId
                    this.form.region = this.form.regionId
                    if (this.form.province) {
                        this.$get('list/regioncityList?provinceRegionId=' + this.form.province).then(res => {
                            if (res.code === 0) {
                                this.cityList = res.data
                            }
                        })
                    }
                    if (this.form.city) {
                        this.$get('list/regionList?cityId=' + this.form.city).then(res => {
                            if (res.code === 0) {
                                this.regionList = res.data
                                if (!this.regionList.length) {
                                    this.showRegionList = false
                                } else {
                                    this.showRegionList = true
                                }
                            }
                        })
                    }
                }
            })
            // this.$router.push('/agentEdit?id=' + id)
            this.showAlert2 = true
        },
        alertConfirm () {
            this.showAlert = false
        },
        alertCancel () {
            this.showAlert = false
        },
        alertConfirm2 () {
            // this.showAlert2 = false
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.provinceId = this.form.province
                    this.form.cityId = this.form.city
                    this.form.regionId = this.form.region
                    this.$post('bus/user/edit', this.form).then(res => {
                        if (res.code === 0) {
                            this.alertCancel2()
                            this.$message({
                                message: '保存成功！',
                                type: 'success'
                            })
                            this.getDataList()
                        }
                    })
                }
            })
        },
        alertCancel2 () {
            this.showAlert2 = false
            this.form = {
                provinceId: '',
                cityId: '',
                regionId: '',
                userId: '',
                password: '',
                mobile: '',
                customerContact: '',
                customerMobile: '',
                customerUnit: '',
                province: '',
                registerTime: '',
                city: '',
                region: '',
                address: '',
                agentId: ''
            }
        },
        // 启用
        enableStatus (id, type) {
            this.$post('bus/user/updatestatus', {
                data: {
                    id: id,
                    deleteFlag: type
                }
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        message: '操作成功！',
                        type: 'success'
                    })
                    this.getDataList()
                    // this.alertCancel2()
                }
            })
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        }
    }
}
</script>

<style lang='less' scoped>
.userQueryStatistics {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .tips {
        position: absolute;
        top: 0;
        line-height: 40px;
        color: #98A9BC;
        font-size: 14px;
        font-weight: normal;
    }
    .alertInner {
        padding: 0 40px;
        table {
            width: 100%;
            border: none;
            line-height: 44px;
            td {
                padding: 0 10px;
                box-sizing: border-box;
            }
            .blueTilte {
                background: rgb(242, 244, 246);
            }
            .resonInput {
                line-height: 36px;
                width: 600px;
                border: none;
                outline: none;
            }
            .importantIcon {
                color: red;
                margin-right: 4px;
            }
        }
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
}
</style>
<style lang='less'>
.userQueryStatistics {
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w200_input {
        width: 220px;
    }
    .w120_input {
        width: 100px;
    }
    .el-pagination {
        position: relative;
    }
    .w150 {
        width: 146px;
    }
    .w460 {
        width: 460px;
    }
    .small-input {
        .el-form-item__content {
            margin-left: 10px!important;
        }
    }
}
</style>

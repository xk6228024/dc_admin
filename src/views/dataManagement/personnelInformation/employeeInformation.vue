<!-- 权限管理 -->
<template>
    <div class="employeeInformation">
        <breadcrumb>
           <!-- <label for="">省份:</label>
            <el-select class="w120_input" v-model="province" clearable placeholder="请选择">
                <el-option
                v-for="item in provinceList"
                :key="item.regionId"
                :label="item.regionName"
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" v-model="city" clearable placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                :value="item.regionId">
                </el-option>
            </el-select> -->
            <label for="">关键词:</label>
            <el-input style="width:160px;" class="search-text" v-model="searchText" placeholder="姓名/手机号"></el-input>
            <div class="dlb">
                <label for="">创建时间:</label>
                <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    value-format="timestamp"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="pageNum=1;pageSize=10;getList()">查询</el-button>
            </div>
            <el-button class="fr mt17 hhide">导出报表</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="loading"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="80">
                </el-table-column>
                <!-- <el-table-column
                prop="provinceName"
                align="left"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                label="城市">
                </el-table-column> -->
                <el-table-column
                prop="employeName"
                align="left"
                label="姓名">
                </el-table-column>
                <el-table-column
                prop="employeGender"
                align="left"
                label="性别">
                </el-table-column>
                <!-- <el-table-column
                prop="employeName"
                align="left"
                label="用户名">
                </el-table-column> -->
                <el-table-column
                prop="employeMobile"
                align="left"
                label="手机号">
                </el-table-column>
                <el-table-column
                prop="employePosition"
                align="left"
                label="职位">
                </el-table-column>
                <!-- <el-table-column
                prop="employeSkill"
                align="left"
                label="擅长技能">
                </el-table-column> -->
                <el-table-column
                prop="employeEntrydate"
                align="left"
                label="工作年限">
                <template slot-scope="scope">
                    <span>{{scope.row.employeEntrydate ? (new Date().getFullYear() - new Date(scope.row.employeEntrydate).getFullYear()) : '--'}}</span>
                </template>
                </el-table-column>
                <!-- <el-table-column
                prop="enterpriseName"
                align="left"
                label="目前所属企业">
                </el-table-column> -->
                <el-table-column
                prop="createTime"
                align="left"
                label="创建时间">
                <template slot-scope="scope">
                    <span>{{scope.row.createTime|filterTime('yyyy-mm-dd')}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="goDetail(scope.row.employeId, scope.row.enterpriseName)" type="text" size="small">详情</el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper, slot"
                :total="total">
            </el-pagination>
        </div>
        <!-- 从业人员信息 -->
        <modal
            :title="'从业人员基本信息'"
            :width="924"
            :alert="showAlert"
            :showBtn="false"
            @alertCancel="alertCancel">
            <div class="table-info">
                <div class="info-th">
                    <div class="cell">基础信息</div>
                </div>
                <div class="info-tr base-h clearfix">
                    <div class="base-h-l fl">
                        <img v-if="info.employeAvatar" :src="info.employeAvatar">
                        <div v-else style="background:#F2F4F6;width:100%;height:100%;line-height:100px;text-align:center" >
                            <img style="width:48px;height:48px;" class="vam" src="../../../assets/img/default.png">
                        </div>
                    </div>
                    <div class="base-h-r">
                        <div class="user-name">
                            <span class="name-s">{{info.employeName}}</span>
                            <span class="name-u">用户名：{{info.employeName}}</span>
                        </div>
                        <div class="user-info clearfix">
                            <div class="info-li fl" v-if="info.employeMobile">
                                <img class="info-icon" src="../../../assets/images/icon-phone.png" alt="">
                                <span class="info-span">{{info.employeMobile}}</span>
                            </div>
                            <div class="info-li fl" v-if="info.employeMail">
                                <img class="info-icon" src="../../../assets/images/icon-email.png" alt="">
                                <span class="info-span">{{info.employeMail}}</span>
                            </div>
                            <!-- <div class="info-li fl" v-if="enterpriseName">
                                <img class="info-icon" src="../../../assets/images/icon-business.png" alt="">
                                <span class="info-span">{{enterpriseName}}</span>
                            </div> -->
                            <div class="info-li fl">
                                <img class="info-icon" src="../../../assets/images/icon-sex.png" alt="">
                                <span class="info-span">{{info.employeGender?'女':'男'}}<span v-if="info.old">({{info.old}}岁)·</span>{{info.employeBirthday|filterTime('yyyy/mm/dd')}} <span v-if="info.employeEntrydate">· 工龄{{info.employeEntrydate}}年</span></span>
                            </div>
                            <div class="info-li fl" v-if="info.employeIdcardnumberAddr">
                                <img class="info-icon" src="../../../assets/images/icon-address.png" alt="">
                                <span class="info-span">{{info.employeIdcardnumberAddr}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-th">详细信息</div>
                <div class="info-tr">
                    <table class="info-detail" style="width: 100%;">
                        <tr>
                            <td class="table_td tdtext" width="150">
                                <div class="cell">员工属性：</div>
                            </td>
                            <td class="table_td" width="270">
                                <div class="cell">{{info.employeIncumbencyStatus}}</div>
                            </td>
                             <td class="table_td tdtext" width="150">
                                <div class="cell">职位：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.employePosition}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td tdtext">
                                <div class="cell">工种：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.employeWorkType}}</div>
                            </td>
                             <td class="table_td tdtext">
                                <div class="cell">身份证号码：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.employeIdcardnumber}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td tdtext">
                                <div class="cell">身份证地址：</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{info.employeIdcardnumberAddr}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td tdtext">
                                <div class="cell">上岗证编号：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.employeCertNo}}</div>
                            </td>
                             <td class="table_td tdtext">
                                <div class="cell">毕业证号：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.employeCert}}</div>
                            </td>
                        </tr>
                        <!-- <tr>
                            <td class="table_td tdtext">
                                <div class="cell">擅长技能：</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{info.employeSkill}}</div>
                            </td>
                        </tr> -->
                        <tr>
                            <td class="table_td tdtext">
                                <div class="cell">个人介绍：</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{info.employeRecomment}}</div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="info-th">创建信息</div>
                <div class="info-tr">
                    <table class="info-detail" style="width: 100%;">
                        <tr>
                            <td class="table_td tdtext">
                                <div class="cell">信息来源：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.dataSourceName}}</div>
                            </td>
                             <td class="table_td tdtext">
                                <div class="cell">创建日期：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.createTime|filterTime('yyyy-mm-dd')}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td tdtext">
                                <div class="cell">更新时间：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.createTime|filterTime('yyyy-mm-dd')}}</div>
                            </td>
                             <td class="table_td tdtext">
                                <div class="cell">创建企业：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{info.enterpriseName}}</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'employeeInformation',
    data () {
        return {
            loading: false,
            enterpriseName: '',
            info: '',
            provinceList: [],
            province: '',
            cityList: [],
            city: '',
            searchText: '',
            value6: '',
            radio: '1',
            input: '',
            imageUrl: '',
            value: '',
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    watch: {
        province (val) {
            if (val) {
                this.getCityList(val)
            } else {
                this.cityList = []
                this.city = ''
            }
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getProvinceList()
        this.getList()
    },
    methods: {
        getCityList (val) {
            this.$get('list/regioncityList?provinceRegionId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        // 获取省份列表
        getProvinceList () {
            this.$get('list/regionProvinceList?type=1').then(res => {
                if (res.code === 0) {
                    this.provinceList = res.data
                }
            })
        },
        getList () {
            if (!this.$checkAuth('entStaff:list')) {
                this.$alert('您没有该权限')
                return
            }
            this.loading = true
            // console.log(this.value6)
            let regionIds = []
            if (this.city) {
                regionIds = [this.city]
            } else if (this.province) {
                regionIds = this.cityList.map(e => { return e.regionId })
            }
            this.$post(`entStaff/list?size=${this.pageSize}&page=${this.pageNum}`, {
                city: regionIds,
                endDate: this.value6 ? (this.value6[1] + 24 * 60 * 60 * 1000 - 1) : '',
                startDate: this.value6 ? this.value6[0] : '',
                searchKeyword: this.searchText
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                }
                this.loading = false
            }).catch(err => {
                console.log(err)
                this.loading = false
            })
        },
        goDetail (id, enterpriseName) {
            if (!this.$checkAuth('entStaff:info')) {
                this.$alert('您没有该权限')
                return
            }
            this.enterpriseName = enterpriseName
            // this.$router.push(`/transportOfEnterpriseDetail?id=${id}`)
            this.$get('entStaff/info?employeId=' + id).then(res => {
                if (res.code === 0) {
                    this.info = res.data
                    if (this.info.employeIncumbencyStatus === 0) {
                        this.info.employeIncumbencyStatus = '在职'
                    }
                    if (this.info.employeIncumbencyStatus === 1) {
                        this.info.employeIncumbencyStatus = '离职'
                    }
                    if (this.info.employeIncumbencyStatus === 2) {
                        this.info.employeIncumbencyStatus = '兼职'
                    }
                    if (this.info.employeBirthday) {
                        this.info.old = new Date().getFullYear() - new Date(this.info.employeBirthday).getFullYear()
                    }
                    if (this.info.employeEntrydate) {
                        this.info.employeEntrydate = new Date().getFullYear() - new Date(this.info.employeEntrydate).getFullYear()
                    }
                    this.showAlert = true
                }
            })
        },
        search () {},
        alertConfirm () {},
        alertCancel () {
            this.info = ''
            this.showAlert = false
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getList()
        }
    }
}
</script>

<style lang='less' scoped>
.employeeInformation {
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
    .table-info {
        font-size: 14px;
        padding: 0 40px;
        .info-th {
            padding: 12px 0;
            color: #666666;
            text-align: center;
            border: 1px solid #E8ECEF;
            background: #F8FAFB;
            .cell {
                padding: 0 10px;
                box-sizing: border-box;
                white-space: normal;
                word-break: break-all;
            }
        }
        .base-h {
            height: 120px;
            padding: 24px;
            .base-h-l {
                border: 1px solid rgba(0,0,0,0.15);
                border-radius: 4px;
                width: 120px;
                height: 120px;
                padding: 9px;
                box-sizing: border-box;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .base-h-r {
                margin-left: 144px;
                .user-name {
                    height: 40px;
                    line-height: 40px;
                }
                .name-s {
                    font-size: 18px;
                    color: #252631;
                }
                .name-u {
                    margin-left: 8px;
                    font-size: 14px;
                    color: #778CA2;
                }
                .info-li {
                    height: 40px;
                    line-height: 40px;
                    margin-right: 40px;
                    .info-icon {
                        display: inline-block;
                        vertical-align: middle;
                        width: 24px;
                        height: 24px;
                        margin-right: 8px;
                    }
                    .info-span {
                        color: #252631;
                    }
                }
            }
        }
        .info-tr {
            border-right: 1px solid #E8ECEF;
            border-left: 1px solid #E8ECEF;
            .info-detail {
                .table_td {
                    color: #252631;
                    padding: 10px 0;
                    border-right: 1px solid #e5ebf1;
                    border-bottom: 1px solid #e5ebf1;
                }
                .cell {
                    padding: 0 10px;
                }
                .tdtext {
                    width: 150px;
                    text-align: right;
                    color: #666666;
                }
            }
        }
        .table-td {
            color: #252631;
            padding: 12px 0;
            text-align: center;
            border-right: 1px solid #E8ECEF;
            border-bottom: 1px solid #E8ECEF;
            .cell {
                padding: 0 10px;
                box-sizing: border-box;
                white-space: normal;
                word-break: break-all;
            }
        }
    }
}
</style>
<style lang='less'>
.employeeInformation {
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
}
</style>

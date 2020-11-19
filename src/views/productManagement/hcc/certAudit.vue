<!-- 认证审核 -->
<template>
    <div class="certAudit">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-select class="w120_input" clearable v-model="areaRegion" @change="getCityList" placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.sysAreaId"
                :label="item.areaName"
                clearable
                :value="item.sysAreaId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" clearable v-model="city" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                clearable
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">关键词:</label>
            <el-input style="width:210px;" clearable class="search-text" v-model="searchKey" placeholder="手机号码/联系人/客户单位"></el-input>
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
                <label for="">注册时间:</label>
                <el-date-picker
                    clearable
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
                <el-button class="fr mt17 hhide">导出报表</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="computeHeight tableBorder"
                v-loading="loading"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="areaRegionName"
                align="left"
                min-width="8%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="city"
                align="left"
                min-width="8%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="nickName"
                align="left"
                min-width="10%"
                label="用户昵称">
                </el-table-column>
                <el-table-column
                prop="customerMobile"
                align="left"
                min-width="10%"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="customerMobile"
                align="left"
                min-width="10%"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="customerContact"
                align="left"
                min-width="10%"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="customerUnit"
                align="left"
                min-width="20%"
                label="客户单位">
                </el-table-column>
                <el-table-column
                prop="certifiedIsText"
                align="left"
                min-width="6%"
                label="认证状态">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="12%"
                label="注册时间">
                    <template slot-scope="scope">
                        {{scope.row.createTime | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="6%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.id)" type="text" size="small" :disabled="!$checkAuth('userAudit:view')">详情</el-button>
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
        <modal
            :title="'用户认证审核'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">基本信息</td>
                    </tr>
                    <tr>
                        <td class="tar">注册手机号码：</td>
                        <td class="tal fontColor">{{detailTable.registerPhone}}</td>
                        <td class="tar" width="150">联系电话：</td>
                        <td class="tal fontColor" width="270">{{detailTable.customerMobile}}</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">客户单位：</td>
                        <td class="tal fontColor" colspan="3" width="270">{{detailTable.customerUnit}}</td>
                    </tr>
                    <tr>
                        <td class="tar">联系人：</td>
                        <td class="tal fontColor">{{detailTable.customerContact}}</td>
                        <td class="tar">所属城市：</td>
                        <td class="tal fontColor">{{detailTable.customerCity}}</td>
                    </tr>
                    <tr>
                        <td class="tar">注册时间：</td>
                        <td class="tal fontColor">{{detailTable.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</td>
                        <td class="tar">上级代理账号：</td>
                        <td class="tal fontColor">{{detailTable.agentAccount}}</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr v-if="detailTable.certifiedIs2===2">
                        <td class="tar fontColor"><span class="importantIcon">*</span>审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            <el-radio v-model="detailTable.certifiedIs" :label="1">审核通过</el-radio>
                            <el-radio v-model="detailTable.certifiedIs" :label="3">审核不通过</el-radio>
                        </td>
                    </tr>
                    <tr v-if="detailTable.certifiedIs2!==2">
                        <td class="tar fontColor">审核结果：</td>
                        <td colspan="3" class="tal fontColor" v-if="detailTable.certifiedIs2===1">
                            已认证
                        </td>
                        <td colspan="3" class="tal fontColor" v-if="detailTable.certifiedIs2===3">
                            认证失败
                        </td>
                        <td colspan="3" class="tal fontColor" v-if="detailTable.certifiedIs2===0">
                            未认证
                        </td>
                    </tr>
                    <tr v-if="detailTable.certifiedIs2===2">
                        <td class="tar fontColor"><span class="importantIcon">*</span>原因：</td>
                        <td colspan="3" class="tal fontColor">
                            <input maxlength="50" style="height:36px;" type="text" class="resonInput" v-model="detailTable.auditRemark" placeholder="说点什么吧~">
                        </td>
                    </tr>
                    <tr v-if="detailTable.certifiedIs2!==2">
                        <td class="tar fontColor">原因：</td>
                        <td colspan="3" class="tal fontColor" style="word-break:break-all;">
                            {{detailTable.auditRemark}}
                        </td>
                    </tr>
                </table>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'certAudit',
    data () {
        return {
            loading: false,
            areaList: [],
            cityList: [],
            city: '',
            areaRegion: '', // 大区Id
            searchKey: '',
            certStatus: '',
            certStatusList: [
                // {
                //     value: 0,
                //     label: '未认证'
                // },
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
                    label: '认证失败'
                }
            ],
            dateRegion: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            detailTable: {
                customerMobile: '', // 注册手机号
                customerUnit: '', // 客户单位
                customerContact: '', // 联系电话
                customerCity: '', // 所属城市
                applyTime: '', // 注册时间
                certifiedIs: '', // 审核结果
                auditor: '', //
                auditRemark: '', // 审核原因
                id: '' // 用户认证ID
            },
            tableData: []
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getAreaList()
        this.getDataList()
    },
    filters: {
        // 活动状态过滤
        statusFilter (value) {
            if (!value) return ''
            switch (value) {
            case 0:
                return '未认证'
            case 1:
                return '已认证'
            case 2:
                return '审核中'
            case 3:
                return '认证失败'
            }
        }
    },
    methods: {
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                }
            })
        },
        // 获取城市列表
        getCityList () {
            this.city = ''
            if (!this.areaRegion) {
                return
            }
            this.$get('ent_recharge/areaCity?areaId=' + this.areaRegion).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                searchKey: this.searchKey,
                status: this.certStatus,
                areaRegion: this.areaRegion,
                city: this.city
            }
            if (this.dateRegion && this.dateRegion.length) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            } else {
                obj.startDate = ''
                obj.endDate = ''
            }
            this.$post(`userAudit/find?page=${this.pageNum}&size=${this.pageSize}`, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 打开详情弹窗
        goDetail (id) {
            this.showAlert = true
            this.$post('userAudit/view', {
                data: {
                    id
                }
            })
                .then(res => {
                    if (res && res.code === 0) {
                        this.detailTable = res.data
                        this.detailTable.certifiedIs2 = this.detailTable.certifiedIs
                        // console.log(this.detailTable)
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 弹窗确认
        alertConfirm () {
            if (this.detailTable.certifiedIs2 !== 2) {
                this.alertCancel()
                return
            }
            if (this.detailTable.certifiedIs !== 3 && this.detailTable.certifiedIs !== 1) {
                this.$alert('请选择审核结果！', '提示')
                return
            }
            if (!this.detailTable.auditRemark) {
                this.$alert('请填写审核原因！', '提示')
                return
            }
            if (this.detailTable.auditRemark.length > 50) {
                this.$alert('审核原因长度不能超过50字', '提示')
                return
            }
            this.$post('userAudit/audit', {
                data: {
                    id: this.detailTable.id,
                    userId: this.detailTable.userId,
                    auditRemark: this.detailTable.auditRemark,
                    certifiedIs: this.detailTable.certifiedIs
                }
            }).then(res => {
                if (res.code === 0) {
                    this.alertCancel()
                    this.getDataList()
                    this.$message({
                        type: 'success',
                        message: '审核成功'
                    })
                }
            })
        },
        // 弹窗取消
        alertCancel () {
            this.showAlert = false
            this.detailTable = {
                customerMobile: '',
                customerUnit: '',
                customerContact: '',
                customerCity: '',
                applyTime: '',
                certifiedIs: '',
                auditor: '',
                auditRemark: '',
                id: ''
            }
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
.certAudit {
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
}
</style>
<style lang='less'>
.certAudit {
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

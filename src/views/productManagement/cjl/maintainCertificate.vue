
<template>
    <div class="maintainCertificate" id="maintainCertificate">
        <breadcrumb>
            <div>
                <label for="">所在区域:</label>
                <el-cascader
                    placeholder="请选择"
                    v-model="areaId"
                    clearable
                    :options="allCityList"
                    change-on-select
                    filterable>
                </el-cascader>
                <label>经营类别:</label>
                <el-select class="w120_input" clearable v-model="regionId" placeholder="请选择">
                    <el-option
                    v-for="item in jylbList"
                    :key="item.value"
                    :label="item.label"
                    clearable
                    :value="item.value">
                    </el-option>
                </el-select>
                <label for="">发放日期:</label>
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
                <label for="">合格证编号:</label>
                <el-input style="width:160px;" class="search-text" v-model="enterpriseNamekey" placeholder="请输入合格证编号"></el-input>
                <div>
                    <label for="">企业名称:</label>
                    <el-input style="width:160px;" class="search-text" v-model="enterpriseNamekey" placeholder="请输入企业名称"></el-input>
                    <el-button class="search" type="primary" @click="search">查 询</el-button>
                    <!-- <el-button class="fr mt17"  type="primary" :disabled="!$checkAuth('cjl:certificate:add')" @click="showAlert = true">发放合格证</el-button> -->
                    <el-button class="fr mt17">导出</el-button>
                </div>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="50px">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                label="维修企业名称">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateS"
                align="left"
                label="经营类别">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateE"
                align="left"
                label="累计发放数量">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                label="累计使用数量">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                label="累计未使用数量">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                label="操作">
                    <template slot-scope="scope">
                        <!-- <el-button @click="goSetting(scope.row.cityDomain)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">详情</el-button> -->
                        <el-button @click="changeStatus(scope.row.cityDomain, 0)" type="text" size="small">发放合格证</el-button>
                        <el-button @click="openRecord(scope.row.cityDomain, 1)" type="text" size="small">备案记录</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination clearfix">
                <el-pagination
                    style="float:right"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNum"
                    :page-sizes="[10, 20, 30, 40, 50, 100]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper, slot"
                    :total="total">
                </el-pagination>
            </div>
        </div>
        <modal
            :title="'合格证备案记录'"
            :width="1100"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <breadcrumb>
                    <div>
                        <label for="">发放日期:</label>
                        <el-date-picker
                            v-model="dateRegion"
                            unlink-panels
                            type="monthrange"
                            range-separator="至"
                            start-placeholder="开始月份"
                            end-placeholder="结束月份"
                            class="search-text vam"
                            value-format="yyyy-MM">
                        </el-date-picker>
                    </div>
                </breadcrumb>
                <el-table
                    border
                    :data="recordTable"
                    style="width: 100%;">
                    <el-table-column
                    prop="num"
                    align="left"
                    label="序号"
                    min-width="50px">
                    </el-table-column>
                    <el-table-column
                    prop="enterpriseName"
                    align="left"
                    label="开始编号">
                    </el-table-column>
                    <el-table-column
                    prop="enterpriseCertificateS"
                    align="left"
                    label="结束编号">
                    </el-table-column>
                    <el-table-column
                    prop="enterpriseCertificateE"
                    align="left"
                    label="发放数量">
                    </el-table-column>
                    <el-table-column
                    prop="enterpriseCertificateNum"
                    align="left"
                    label="已使用数量">
                    </el-table-column>
                    <el-table-column
                    prop="createName"
                    align="left"
                    label="未使用数量">
                    </el-table-column>
                    <el-table-column
                    prop="createName"
                    align="left"
                    label="发放操作人">
                    </el-table-column>
                    <el-table-column
                    prop="createName"
                    align="left"
                    label="发放时间">
                    </el-table-column>
                </el-table>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'maintainCertificate',
    data () {
        return {
            searchList: [],
            jylbList: [
                {
                    value: '01',
                    label: '一类机动车维修'
                },
                {
                    value: '02',
                    label: '二类机动车维修'
                },
                {
                    value: '03',
                    label: '三类机动车维修'
                },
                {
                    value: '04',
                    label: '一类摩托车维修'
                },
                {
                    value: '05',
                    label: '二类摩托车维修'
                },
                {
                    value: '06',
                    label: '危险货物运输车辆维修'
                }
            ],
            allCityList: [],
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaId: '',
            enterpriseNamekey: '',
            dateRegion: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [
                {
                    num: 1
                }
            ],
            recordTable: [
                {
                    num: 1
                }
            ]
        }
    },
    // computed: {
    //     enterpriseCertificateNum () {
    //         return this.form.enterpriseCertificateE - this.form.enterpriseCertificateS + 1
    //     }
    // },
    components: {
        Modal,
        Breadcrumb
    },
    created () {
        // this.getAreaList()
        // this.getDataList()
        // this.getAllCity()
    },
    methods: {
        changeStatus (cityDomain, status) {
            this.$post('syscity/status', {
                data: {
                    cityDomain,
                    deleteStatus: status
                }
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getDataList()
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                entName: this.enterpriseNamekey,
                startTime: this.dateRegion && this.dateRegion[0],
                endTime: this.dateRegion && this.dateRegion[1]
            }
            this.$post('product/cjl/certificate/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
        // 打开弹窗
        openRecord (id) {
            this.showAlert = true
        },
        // 弹窗确认
        alertConfirm () {
            this.showAlert = false
        },
        // 弹窗取消
        alertCancel () {
            this.showAlert = false
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
.maintainCertificate {
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
        padding: 0 40px 20px;
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
    .bottom-data {
        color:#98A9BC;
        font-weight: normal;
    }
    .pagination {
        position: relative;
        .bottom-data {
            line-height: 36px;
            color:#98A9BC;
            font-weight: normal;
            margin-top: 20px;
            // position: absolute;
            // left:0;
            // top: 9px;
        }
    }
}
</style>
<style lang='less'>
.maintainCertificate {
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
#maintainCertificate {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

<!-- 权限管理 -->
<template>
    <div class="riskData">
        <search v-model='searchValue' :options='searchOption' @search='search()'></search>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="loading"
                style="width: 100%;min-height:550px;;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="inspectTypeText"
                align="left"
                min-width="8%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="vehicleVin"
                align="left"
                min-width="10%"
                label="VIN码">
                </el-table-column>
                <el-table-column
                prop="vehicleVin22"
                align="left"
                min-width="10%"
                label="上传企业">
                </el-table-column>
                <el-table-column
                prop="riskTime"
                align="left"
                min-width="15%"
                label="出险时间">
                <template slot-scope="scope">
                    <span>{{scope.row.riskTime | filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="description"
                align="left"
                min-width="20%"
                label="事故描述">
                </el-table-column>
                <el-table-column
                prop="claimAmount"
                align="left"
                min-width="8%"
                label="理赔金额">
                </el-table-column>
                <el-table-column
                prop="maintenanceAmount"
                align="left"
                min-width="8%"
                label="维修金额">
                </el-table-column>
                <el-table-column
                prop="materialAmount"
                align="left"
                min-width="8%"
                label="材料金额">
                </el-table-column>
                <el-table-column
                prop="otherAmount"
                align="left"
                min-width="8%"
                label="其他金额">
                </el-table-column>
                <el-table-column
                prop="repairDetail"
                align="left"
                min-width="10%"
                label="维修详情">
                </el-table-column>
                <el-table-column
                prop="materiaUse"
                align="left"
                min-width="10%"
                label="材料详情">
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
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
import Search from '@/components/search'
export default {
    name: 'riskData',
    data () {
        return {
            searchOption: [
                {
                    label: '车辆类型',
                    type: 'select',
                    list: [],
                    key: 'userName1'
                },
                {
                    label: '上传企业',
                    type: 'input',
                    key: 'userName'
                }
            ],
            searchValue: {},
            loading: false,
            searchKeyword: '',
            searchKeyword2: '',
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Search
    },
    created () {
        // this.search()
    },
    watch: {
    },
    methods: {
        // 获取所有数据
        search () {
            this.loading = true
            let obj = {
                vehicleSearchKey: this.searchKeyword,
                enterpriseName: this.searchKeyword2
            }
            this.$post('riskRecord/lists?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
        },
        goDetail (id) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('datamanage:stastic:inspect:view')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push(`/detectionDataDetail?id=${id}`)
        },
        // search () {
        //     this.pageNum = 1
        //     this.pageSize = 10
        //     this.getDataList()
        // },
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
.riskData {
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
.riskData {
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

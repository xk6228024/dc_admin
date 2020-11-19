<!-- 权限管理 -->
<template>
    <div class="environmentalReport">
        <breadcrumb>
            <label for="">车辆信息:</label>
            <el-input style="width:160px;" class="search-text" v-model="searchKey" placeholder="车牌号码/VIN码"></el-input>
            <div class="dlb">
                <label for="">上传企业:</label>
                <el-input style="width:160px;" class="search-text" v-model="enterprise" placeholder="企业名称"></el-input>
                <el-button type="primary" class="search" @click="search">查询</el-button>
            </div>
            <!-- <el-button class="fr mt17 hhide">导出报表</el-button> -->
        </breadcrumb>
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
                prop="testno"
                align="left"
                min-width="10%"
                label="环保检测编号">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="5%"
                label="检测类别">
                    <template slot-scope="scope">
                        <span :index="scope.row.fueltype">环保检测</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="license"
                align="left"
                min-width="5%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="vin"
                align="left"
                min-width="8%"
                label="VIN码">
                </el-table-column>
                <el-table-column
                prop="qiymch"
                align="left"
                min-width="14%"
                label="上传企业">
                </el-table-column>
                <!-- <el-table-column
                prop="inspectDate"
                align="left"
                min-width="8%"
                label="送检日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.detectDate | filterTime('yyyy-mm-dd')}}</span>
                    </template>
                </el-table-column> -->
                <!-- <el-table-column
                prop="inspectCompletedTime"
                align="left"
                min-width="8%"
                label="竣工日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.inspectCompletedTime | filterTime('yyyy-mm-dd')}}</span>
                    </template>
                </el-table-column> -->
                <el-table-column
                prop="ownerId"
                align="left"
                min-width="4%"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="goDetail(scope.row.id)" type="text" size="small">详情</el-button>
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
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
// import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'environmentalReport',
    data () {
        return {
            loading: false,
            searchKey: '',
            enterprise: '',
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Breadcrumb
    },
    created () {
        this.getDataList()
    },
    watch: {
    },
    methods: {
        // 获取所有数据
        getDataList () {
            if (!this.$checkAuth('environmentalreport:find')) {
                this.$alert('您没有该权限')
                return
            }
            this.loading = true
            let obj = {
                searchKey: this.searchKey,
                enterprise: this.enterprise
            }
            this.$post('environmentalreport/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
            if (!this.$checkAuth('environmentalreport:view')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('testReport?id=' + id)
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
.environmentalReport {
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
.environmentalReport {
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

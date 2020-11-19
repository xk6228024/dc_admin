<!-- 权限管理 -->
<template>
    <div class="carData">
        <breadcrumb>
            <!-- <label for="">关键词语:</label> -->
            <el-input style="width:260px;" class="search-text" v-model="searchKeyword" placeholder="车牌号码/VIN码"></el-input>
            <el-button type="primary" class="search" @click="search">查 询</el-button>
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
                prop="vehicle_license_plate"
                align="left"
                min-width="5%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="licenseColor"
                align="left"
                min-width="4%"
                label="车牌颜色">
                </el-table-column>
                <el-table-column
                prop="vehicleVin"
                align="left"
                min-width="8%"
                label="VIN码">
                </el-table-column>
                <el-table-column
                prop="vehicleUse"
                align="left"
                min-width="5%"
                label="车辆性质">
                </el-table-column>
                <el-table-column
                prop="vahicleBrandAndSeries"
                align="left"
                min-width="12%"
                label="品牌车系">
                </el-table-column>
                <el-table-column
                prop="vehicle_owner_name"
                align="left"
                min-width="10%"
                label="车主">
                </el-table-column>
                <el-table-column
                prop="vehicleType"
                align="left"
                min-width="5%"
                label="车辆类型">
                </el-table-column>
                <el-table-column
                prop="ownerId"
                align="left"
                min-width="8%"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="goDetail(scope.row.vehicle_id)" type="text" size="small">详情</el-button>
                    <el-button @click="goReport(scope.row.vehicle_id)" type="text" size="small">车况报告</el-button>
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
    name: 'carData',
    data () {
        return {
            loading: false,
            searchKeyword: '',
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: [
            ]
        }
    },
    components: {
        Breadcrumb
    },
    created () {
        this.getDataList()
        // console.log(this.$route.name)
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
    methods: {
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                vehicleSearchKey: this.searchKeyword
            }
            this.$post('vehicle/p/lists?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        // this.tableData.push({})
                        this.total = res.total
                    }
                    this.loading = false
                })
            // setTimeout(() => {
            //     this.loading = false
            // }, 1000)
        },
        goDetail (id) {
            if (!this.$checkAuth('datamanage:vehicle:view')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push(`/carDataDetail?id=${id}`)
        },
        goReport (id) {
            if (!this.$checkAuth('datamanage:vehicle:condition')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push(`/vehicleConditionReport?id=${id}`)
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
.carData {
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
.carData {
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

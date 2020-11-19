<!-- 权限管理 -->
<template>
    <div class="maintenanceStatisticsDetail">
        <div class="table" style="padding-top:30px;">
            <el-table
                :data="tableData"
                border
                style="width: 100%;minHeight:600px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="60">
                </el-table-column>
                <el-table-column
                prop="roleName"
                align="left"
                label="省市区">
                     <template slot-scope="scope">
                         {{scope.row.provinceName + scope.row.cityName + scope.row.regionName}}
                     </template>
                </el-table-column>
                <el-table-column
                prop="allEntCount"
                align="left"
                label="新增企业数量">
                </el-table-column>
                <el-table-column
                prop="allFixCount"
                align="left"
                label="企业维修数量">
                    <template slot-scope="scope">
                         <el-button @click="goDetail(scope.row.enterpriseId)" type="text" size="small">{{scope.row.allFixCount}}</el-button>
                     </template>
                </el-table-column>
                <el-table-column
                prop="oneTypeEntCount"
                align="left"
                label="一类新增企业数量">
                </el-table-column>
                <el-table-column
                prop="oneTypeFixCount"
                align="left"
                label="一类企业维修数量">
                    <template slot-scope="scope">
                         <el-button @click="goDetail(scope.row.enterpriseId)" type="text" size="small">{{scope.row.allFixCount}}</el-button>
                     </template>
                </el-table-column>
                <el-table-column
                prop="towTypeEntCount"
                align="left"
                label="二类新增企业数量">
                </el-table-column>
                <el-table-column
                prop="towTypeFixCount"
                align="left"
                label="二类企业维修数量">
                    <template slot-scope="scope">
                         <el-button @click="goDetail(scope.row.enterpriseId)" type="text" size="small">{{scope.row.allFixCount}}</el-button>
                     </template>
                </el-table-column>
                <el-table-column
                prop="threeTypeEntCount"
                align="left"
                label="三类新增企业数量">
                </el-table-column>
                <el-table-column
                prop="threeTypeFixCount"
                align="left"
                label="三类企业维修数量">
                    <template slot-scope="scope">
                         <el-button @click="goDetail(scope.row.enterpriseId)" type="text" size="small">{{scope.row.allFixCount}}</el-button>
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
// import Breadcrumb from '@/components/Breadcrumb'
// import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'maintenanceStatisticsDetail',
    data () {
        return {
            personList: [],
            person: [],
            region: [],
            allCityList: [],
            propsOption: {
                checkStrictly: true,
                label: 'regionName',
                children: 'childList',
                value: 'regionCode'
            },
            daterange: [],
            input: '',
            value: '',
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
    },
    created () {
        this.getDataList()
    },
    methods: {
        goDetail () {},
        getDataList () {
            this.$post('/statisticAnalysis/entFix/region/fixs?page=' + this.pageNum + '&size=' + this.pageSize, {
                servicerIds: (this.$route.query.servicerIds && this.$route.query.servicerIds.split(',')) || [],
                queryStartDate: this.$route.query.queryStartDate || '',
                queryEndDate: this.$route.query.queryEndDate || '',
                province: this.$route.query.province || '',
                city: this.$route.query.city || '',
                region: this.$route.query.region || '',
                enterpriseCategory: this.$route.query.enterpriseCategory
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                }
            })
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
.maintenanceStatisticsDetail {
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
.maintenanceStatisticsDetail {
    .hackSelect {
        .el-select__tags {
            margin-top: 8px;
        }
    }
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w200_input {
        width: 220px;
    }
    .w120_input {
        width: 120px;
    }
    .el-pagination {
        position: relative;
    }
}
</style>

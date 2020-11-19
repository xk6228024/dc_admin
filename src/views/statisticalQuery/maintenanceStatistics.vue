<!-- 权限管理 -->
<template>
    <div class="maintenanceStatistics">
        <breadcrumb>
            <label for="">所属区域:</label>
             <el-cascader
                :props="propsOption"
                placeholder="请选择"
                v-model="region"
                clearable
                :options="allCityList"
                filterable
                >
            </el-cascader>
            <label for="">查询时间:</label>
            <el-date-picker
                v-model="daterange"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                class="search-text vam"
                end-placeholder="结束日期">
            </el-date-picker>
            <label>运营人员：</label>
            <el-select class="searchIpt hackSelect" style="line-height: 40px;" collapse-tags multiple clearable v-model="person" filterable placeholder="请选择">
                <el-option
                v-for="item in personList"
                :key="item.areaUserId"
                :label="item.areaUserName"
                clearable
                :value="item.areaUserId">
                </el-option>
            </el-select>
            <el-button class="search" @click="search">查询</el-button>
            <!-- <el-button class="fr mt17">导出报表</el-button> -->
        </breadcrumb>
        <div class="table">
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
                         <el-button @click="goDetail()" type="text" size="small">{{scope.row.allFixCount}}</el-button>
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
                         <el-button @click="goDetail('01')" type="text" size="small">{{scope.row.allFixCount}}</el-button>
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
                         <el-button @click="goDetail('02')" type="text" size="small">{{scope.row.allFixCount}}</el-button>
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
                         <el-button @click="goDetail('03')" type="text" size="small">{{scope.row.allFixCount}}</el-button>
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
    name: 'maintenanceStatistics',
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
        Breadcrumb
    },
    created () {
        this.getAllCity()
        this.$post('/workUser/name', {
            areaUserId: ''
        }).then(res => {
            this.personList = res.data
        })
        this.$get('/comm/datasource').then(res => {
            if (res.code === 0) {
                this.sourceList = res.data
            }
        })
        this.getDataList()
    },
    methods: {
        goDetail (type) {
            this.$router.push(`/maintenanceStatisticsDetail?servicerIds=${this.person}&queryStartDate=${(this.daterange && this.daterange[0]) || ''}&queryEndDate=${(this.daterange && this.daterange[1]) || ''}&province=${this.region[0] || ''}&city=${this.region[1] || ''}&region=${this.region[2] || ''}&enterpriseCategory=${type}`)
        },
        getDataList () {
            this.$post('/statisticAnalysis/entFix/region/count?page=' + this.pageNum + '&size=' + this.pageSize, {
                servicerIds: this.person,
                queryStartDate: this.daterange && this.daterange[0],
                queryEndDate: this.daterange && this.daterange[1],
                province: this.region && this.region[0],
                city: this.region && this.region[1],
                region: this.region && this.region[2],
                page: this.pageNum,
                size: this.pageSize
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                }
            })
        },
        getAllCity () {
            this.$get('/comm/citys/dc/tree').then(res => {
                if (res.code === 0) {
                    this.allCityList = res.data
                }
            })
        },
        search () {
            this.pageNum = 1
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
.maintenanceStatistics {
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
.maintenanceStatistics {
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

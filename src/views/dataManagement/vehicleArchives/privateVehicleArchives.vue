<!-- 权限管理 -->
<template>
    <div class="privateVehicleArchives">
        <breadcrumb>
            <label for="">省份:</label>
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
            </el-select>
            <label for="">关键词:</label>
            <el-input style="width:160px;" clearable class="search-text" v-model="searchText" placeholder="车牌号码/VIN码"></el-input>
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
                style="width: 100%;minHeight:600px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="proviceName"
                align="left"
                min-width="10%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="vehicleLicensePlate"
                align="left"
                min-width="10%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="licenseColor"
                align="left"
                min-width="10%"
                label="车牌颜色">
                </el-table-column>
                <!-- <el-table-column
                prop="vehicleBrandName"
                align="left"
                label="品牌">
                </el-table-column>
                <el-table-column
                prop="vehicleSeriesName"
                align="left"
                label="车系">
                </el-table-column>
                <el-table-column
                prop="vehicleModelName"
                align="left"
                label="车型">
                </el-table-column> -->
                <!-- <el-table-column
                prop="remark"
                align="left"
                label="年限">
                </el-table-column> -->
                <!-- <el-table-column
                prop="vehicleOwnerName"
                align="left"
                label="车主名称">
                </el-table-column> -->
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="创建时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime|filterTime('yyyy-mm-dd')}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="remark"
                min-width="5%"
                align="left"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="goDetail(scope.row.vehicleId)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">查看</el-button>
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
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'privateVehicleArchives',
    data () {
        return {
            loading: false,
            value6: '',
            radio: '1',
            input: '',
            imageUrl: '',
            value: '',
            searchText: '', // 搜索内容
            provinceList: [],
            province: '',
            cityList: [],
            city: '',
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Breadcrumb
    },
    created () {
        this.getList()
        this.getProvinceList()
    },
    watch: {
        province (val) {
            if (val) {
                this.getCityList(val)
            } else {
                this.cityList = []
            }
            this.city = ''
        }
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
        goDetail (id) {
            this.$router.push(`/privateVehicleDetail?id=${id}`)
        },
        getList () {
            this.loading = true
            let regionIds = []
            if (this.city) {
                regionIds = [this.city]
            } else if (this.province) {
                regionIds = this.cityList.map(e => { return e.regionId })
            }
            this.$post(`vehicle/p/list?size=${this.pageSize}&page=${this.pageNum}`, {
                regionIds: regionIds,
                endTime: this.value6 ? (this.value6[1] + 24 * 60 * 60 * 1000 - 1) : '',
                startTime: this.value6 ? this.value6[0] : '',
                vehicleLicensePlate: this.searchText
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
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
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
.privateVehicleArchives {
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
.privateVehicleArchives {
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

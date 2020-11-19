<!-- 运输企业档案 -->
<template>
    <div class="transportOfEnterpriseArchives">
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
            <el-input style="width:160px;" class="search-text" v-model="enterpriseNamekey" placeholder="企业名称/联系人"></el-input>
            <div class="dlb">
                <label for="">创建时间:</label>
                <el-date-picker
                    v-model="dateRegion"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    value-format="timestamp"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="search">查询</el-button>
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
                width="80">
                </el-table-column>
                <el-table-column
                prop="enterpriseProvince"
                align="left"
                width="120"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="enterpriseCity"
                align="left"
                width="120"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                label="企业名称">
                </el-table-column>
                <!-- <el-table-column
                prop="enterpriseLinkName"
                align="left"
                label="联系人">
                </el-table-column> -->
                <el-table-column
                prop="enterpriseLinkMobile"
                align="left"
                width="210"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="enterpriseOperatingState"
                align="left"
                width="100"
                label="经营状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.enterpriseOperatingState==='1'">营业</span>
                        <span v-if="scope.row.enterpriseOperatingState==='2'">停业</span>
                        <span v-if="scope.row.enterpriseOperatingState==='3'">整顿</span>
                        <span v-if="scope.row.enterpriseOperatingState==='4'">停业整顿</span>
                        <span v-if="scope.row.enterpriseOperatingState==='5'">歇业</span>
                        <span v-if="scope.row.enterpriseOperatingState==='6'">注销</span>
                        <span v-if="scope.row.enterpriseOperatingState==='7'">其他</span>
                    </template>
                </el-table-column>
                <!-- <el-table-column
                prop="createTime"
                align="left"
                label="经营类别">
                </el-table-column> -->
                <el-table-column
                prop="createTime"
                align="left"
                width="180"
                label="创建时间">
                </el-table-column>
                <el-table-column
                prop="enterpriseId"
                align="left"
                width="100"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="goDetail(scope.row.enterpriseId)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">查看</el-button>
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
    name: 'transportOfEnterpriseArchives',
    data () {
        return {
            loading: false,
            provinceList: [],
            province: '',
            cityList: [],
            city: '',
            enterpriseNamekey: '',
            dateRegion: [],
            value: '',
            options: [
                {
                    value: 1,
                    label: '深圳'
                }
            ],
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
    watch: {
        province (val) {
            this.city = ''
            if (val) {
                this.getCityList(val)
            } else {
                this.cityList = []
            }
        }
    },
    created () {
        this.getDataList()
        this.getProvinceList()
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
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                enterpriseTypeId: '3',
                enterpriseProvince: this.province,
                enterpriseCity: this.city,
                searchKeyword: this.enterpriseNamekey || '',
                enterpriseBusinessCategory: this.operatingStatekey || ''
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1] + 24 * 60 * 60 * 1000 - 1
            }
            this.$post('enterprise/findenterprise?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
        goDetail (id) {
            this.$router.push(`/transportOfEnterpriseDetail?id=${id}`)
        },
        search () {
            // console.log(111)
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
.transportOfEnterpriseArchives {
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
.transportOfEnterpriseArchives {
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

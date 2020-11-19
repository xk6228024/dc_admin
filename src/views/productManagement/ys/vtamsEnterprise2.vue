<template>
    <div class="enterprise-open">
        <search v-model='searchValue' :options='searchOption' @search='getTableData()' :hasExport="true" @exportFuc="exportFuc">
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="$router.push('/cityOpenDetail2')">新建城市开通</el-button>
        </search>
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
                min-width="5%" />
                <el-table-column
                prop="cityConfigMarketAreaName"
                label="区域"
                min-width="10%" />
                <el-table-column
                prop="cityConfigProvinceName"
                label="省份"
                min-width="10%" />
                <el-table-column
                prop="cityConfigCityName"
                label="城市"
                min-width="10%" />
                <!-- <el-table-column
                prop="enterpriseRegionName"
                label="地区"
                min-width="10%" /> -->
                <!-- <el-table-column
                prop="enterpriseName"
                label="企业名称"
                min-width="20%" />
                <el-table-column
                prop="enterpriseLinkName"
                label="负责人"
                min-width="10%" />
                <el-table-column
                prop="enterpriseLinkMobile"
                label="联系电话"
                min-width="10%" /> -->
                <el-table-column
                prop="cityConfigStatusName"
                align="left"
                min-width="6%"
                label="状态" >
                    <!-- <template slot-scope="scope">
                        <span>{{ scope.row.enterprisestatus === 1 ? '开通' : '关闭' }}</span>
                    </template> -->
                </el-table-column>
                <el-table-column
                prop="createName"
                label="操作人"
                min-width="6%" />
                <el-table-column
                prop="createTime"
                label="更新时间"
                min-width="12%" />
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="6%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="$router.push(`/cityOpenDetail2?id=${scope.row.cityConfigId}`)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsEnterprise:edit')">详情</el-button>
                        <!-- <el-button type="text" size="small" @click="$router.push(`/enterpriseOpenDetailOnlyLook?id=${scope.row.enterpriseId}`)"
                        :disabled="!$checkAuth('vtamsEnterprise:view')">查看</el-button> -->
                        <!-- <el-button v-if="scope.row.enterprisestatus === -1" @click="changeStatus(scope.row.enterpriseId, 1)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsEnterprise:status')">开通</el-button>
                        <el-button v-if="scope.row.enterprisestatus === 1" @click="changeStatus(scope.row.enterpriseId, -1)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsEnterprise:status')">关闭</el-button> -->
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
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Search from '@/components/search'
export default {
    name: 'vtamsEnterprise2',
    components: {
        // Breadcrumb
        Search
    },
    data () {
        return {
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'region'
                },
                {
                    label: '状态',
                    type: 'select',
                    list: [
                        {
                            label: '开通',
                            value: '1'
                        },
                        {
                            label: '关闭',
                            value: '0'
                        }
                    ],
                    key: 'cityConfigStatus'
                },
                {
                    label: '城市名称',
                    type: 'input',
                    key: 'cityConfigCityName'
                }
            ],
            searchValue: {},
            allCityList: [], // 城市
            region: '', // 选中城市
            tableData: [
                {
                    num: 1
                }
            ],
            loading: false,
            pageNum: 1,
            pageSize: 10,
            total: 0
        }
    },
    created () {
        // this.getAllCity()
        this.getTableData()
    },
    methods: {
        exportFuc (val) {
            console.log(val)
            // this.$get('/sysCityConfig/export')
            // window.open('/sysCityConfig/export')
            window.open(`${window.exportUrl}sysCityConfig/export?cityConfigMarketArea=${(this.searchValue.region && this.searchValue.region[0]) || ''}&cityConfigProvince=${(this.searchValue.region && this.searchValue.region[1]) || ''}&cityConfigCity=${(this.searchValue.region && this.searchValue.region[2]) || ''}&cityConfigStatus=${this.searchValue.cityConfigStatus || ''}&cityConfigCityName=${this.searchValue.cityConfigCityName || ''}`)
        },
        getTableData (clear) {
            // if (!this.$checkAuth('vtamsEnterprise:list')) {
            //     this.$alert('没有查询权限！', '提示')
            //     return
            // }
            if (clear) {
                this.pageNum = 1
            }
            this.loading = true
            this.$get(`/sysCityConfig/list?page=${this.pageNum}&size=${this.pageSize}`, {
                cityConfigMarketArea: this.searchValue.region && this.searchValue.region[0],
                cityConfigProvince: this.searchValue.region && this.searchValue.region[1],
                cityConfigCity: this.searchValue.region && this.searchValue.region[2],
                cityConfigStatus: this.searchValue.cityConfigStatus,
                cityConfigCityName: this.searchValue.cityConfigCityName
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data.records, this.pageNum, this.pageSize)
                    this.total = res.data.total
                }
                this.loading = false
            }).catch(e => {
                this.loading = false
            })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.getTableData(1)
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getTableData()
        },
        changeStatus (enterpriseId, val) {
            this.$get(`/ent/vtams/status/${enterpriseId}`, {
                status: val
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getTableData()
                }
            })
        },
        downloadTable () {
            window.open(`${window.exportUrl}ent/vtams/export?enterpriseProvince=${(this.region && this.region[0]) || ''}&enterpriseCity=${(this.region && this.region[1]) || ''}`)
        }
    }
}
</script>

<style lang="less" scoped>
.enterprise-open {
    .table {
        margin: 20px;
        margin-top: 0;
    }
}
</style>

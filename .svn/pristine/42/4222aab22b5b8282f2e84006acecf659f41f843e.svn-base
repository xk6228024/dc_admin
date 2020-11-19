<template>
    <div class="enterprise-open">
        <!-- <breadcrumb>
            <label>所在区域：</label>
            <el-cascader
            placeholder="请选择"
            v-model="region"
            clearable
            :options="allCityList"
            change-on-select
            filterable />
            <el-button class="search" type="primary" @click="getTableData(1)">查 询</el-button>
            <el-button class="fr mt17"  type="primary" @click="$router.push(`/enterpriseOpenDetail`)"
            :disabled="!$checkAuth('vtamsEnterprise:add')">新增</el-button>
            <el-button class="fr mt17" @click="downloadTable"
            :disabled="!$checkAuth('vtamsEnterprise:export')">导出</el-button>
        </breadcrumb> -->
        <search v-model='searchValue' :options='searchOption' @search='getTableData()'>
             <el-button class="fr mt17" size="mini" type="primary" @click="$router.push(`/cjlEnterpriseArchivesDetail?entType=${entType}`)"
            :disabled="!$checkAuth('vtamsEnterprise:add')">新增开通企业</el-button>
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
                prop="enterpriseName"
                label="企业名称"
                min-width="20%" />
                <el-table-column
                prop="cityName"
                label="城市"
                min-width="10%" />
                <el-table-column
                prop="districtName"
                label="地区"
                min-width="10%" />
                <el-table-column
                prop="linkName"
                label="联系人"
                min-width="10%" />
                <el-table-column
                prop="linkMobile"
                label="联系电话"
                min-width="10%" />
                <el-table-column
                prop="enterpriseStatusName"
                align="left"
                min-width="10%"
                label="状态" >
                    <!-- <template slot-scope="scope">
                        <span>{{ scope.row.enterprisestatus === 1 ? '开通' : '关闭' }}</span>
                    </template> -->
                </el-table-column>
                <el-table-column
                prop="updateTime"
                align="left"
                min-width="12%"
                label="更新时间" >
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="15%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="$router.push(`/cjlEnterpriseArchivesDetail?id=${scope.row.enterpriseId}&entType=${entType}`)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsEnterprise:edit')">编辑</el-button>
                        <!-- <el-button type="text" size="small" @click="$router.push(`/enterpriseOpenDetailOnlyLook?id=${scope.row.enterpriseId}`)"
                        :disabled="!$checkAuth('vtamsEnterprise:view')">查看</el-button> -->
                        <el-button v-if="scope.row.enterprisestatus === -1" @click="changeStatus(scope.row.enterpriseId, 1)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsEnterprise:status')">开通</el-button>
                        <el-button v-if="scope.row.enterprisestatus === 1" @click="changeStatus(scope.row.enterpriseId, -1)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsEnterprise:status')">关闭</el-button>
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
    name: 'vtamsEnterprise',
    components: {
        // Breadcrumb
        Search
    },
    data () {
        return {
            entType: 1,
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'region'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'entName'
                },
                {
                    label: '企业状态',
                    type: 'select',
                    key: 'status',
                    list: [
                        {
                            label: '营业',
                            value: '01'
                        },
                        {
                            label: '停业',
                            value: '02'
                        },
                        {
                            label: '整改',
                            value: '03'
                        },
                        {
                            label: '整改',
                            value: '04'
                        },
                        {
                            label: '歇业',
                            value: '05'
                        },
                        {
                            label: '注销',
                            value: '06'
                        },
                        {
                            label: '其他',
                            value: '99'
                        }
                    ]
                },
                {
                    label: '企业状态',
                    type: 'select',
                    key: 'identifyStatus',
                    list: [
                        {
                            label: '审核失败',
                            value: '-1'
                        },
                        {
                            label: '待审核',
                            value: '00'
                        },
                        {
                            label: '已审核',
                            value: '01'
                        }
                    ]
                }
            ],
            searchValue: {},
            allCityList: [], // 城市
            region: '', // 选中城市
            tableData: [],
            loading: false,
            pageNum: 1,
            pageSize: 10,
            total: 0
        }
    },
    created () {
        this.entType = this.$route.query.entType
        this.getAllCity()
        this.getTableData()
    },
    watch: {
        '$route.query.entType' (val) {
            this.entType = this.$route.query.entType
            this.getTableData()
        }
    },
    methods: {
        getAllCity () {
            this.$get('list/regionProvinceList').then(res => {
                if (res.code === 0) {
                    let arr = []
                    res.data.forEach(e => {
                        if (e.regionType === 1) {
                            e.children = []
                            e.label = e.regionName
                            e.value = e.regionId
                            arr.push(e)
                            res.data.forEach(m => {
                                if (m.parentId === e.regionId) {
                                    m.label = m.regionName
                                    m.value = m.regionId
                                    e.children.push(m)
                                }
                            })
                        }
                    })
                    this.allCityList = arr
                }
            })
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
            this.$post(`/operation/ent/list?page=${this.pageNum}&size=${this.pageSize}`, {
                provinceCode: this.searchValue.region && this.searchValue.region[1],
                cityCode: this.searchValue.region && this.searchValue.region[2],
                // districtCode: this.searchValue.region && this.searchValue.region[2],
                typeId: this.entType - 0,
                ...this.searchValue
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                    // this.loading = false
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

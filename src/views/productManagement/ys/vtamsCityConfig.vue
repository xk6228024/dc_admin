<template>
    <div class="city-open">
        <breadcrumb>
            <label>选择城市：</label>
            <el-cascader
            placeholder="请选择"
            v-model="region"
            clearable
            :options="allCityList"
            change-on-select
            filterable />
            <el-button class="search" type="primary" @click="getTableData(1)">查 询</el-button>
            <el-button class="fr mt17"  type="primary" @click="$router.push(`/cityOpenDetail`)"
            :disabled="!$checkAuth('vtamsCityConfig:add')">新增开通</el-button>
            <el-button class="fr mt17" @click="downloadTable"
            :disabled="!$checkAuth('vtamsCityConfig:export')">导出</el-button>
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
                min-width="5%" />
                <el-table-column
                prop="cityConfigVtamsProvince"
                label="省份"
                min-width="10%" />
                <el-table-column
                prop="cityConfigVtamsCity"
                label="城市"
                min-width="10%" />
                <el-table-column
                prop="cityConfigVtamsServicerName"
                label="服务人员"
                min-width="10%" />
                <el-table-column
                prop="cityConfigVtamsServicerTel"
                label="服务电话"
                min-width="10%" />
                <el-table-column
                prop="cityConfigVtamsDomain"
                label="访问域名"
                min-width="10%" />
                <el-table-column
                prop="createTime"
                label="初次开通时间"
                min-width="10%" />
                <el-table-column
                prop="cityConfigPayMethod"
                label="扣费方式"
                min-width="10%" />
                <el-table-column
                prop="cityConfigVtamsStatus"
                align="left"
                min-width="10%"
                label="状态" />
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="15%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="$router.push(`/cityOpenDetail?id=${scope.row.cityCode}`)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsCityConfig:edit,vtamsCityConfig:view')">编辑</el-button>
                        <el-button v-if="scope.row.cityConfigVtamsStatus === '关闭'" @click="changeStatus(scope.row.cityCode, 0)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsCityConfig:status')">开通</el-button>
                        <el-button v-if="scope.row.cityConfigVtamsStatus === '开通'" @click="changeStatus(scope.row.cityCode, 1)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsCityConfig:status')">关闭</el-button>
                        <el-button v-if="scope.row.cityCode" @click="$router.push(`/vehicleMaintenanceConfig?id=${scope.row.cityCode}`)" type="text" size="small"
                        :disabled="!$checkAuth('vtamsCityConfig:photo:list')">维护配置</el-button>
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
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name: 'vtamsCityConfig',
    components: {
        Breadcrumb
    },
    data () {
        return {
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
        this.getAllCity()
        this.getTableData()
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
            if (!this.$checkAuth('vtamsCityConfig:list')) {
                this.$alert('没有查询权限！', '提示')
                return
            }
            if (clear) {
                this.pageNum = 1
            }
            this.loading = true
            this.$post(`/cityConfig/vtams/list?page=${this.pageNum}&size=${this.pageSize}`, {
                provinceCode: this.region && this.region[0],
                cityCode: this.region && this.region[1]
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                    this.loading = false
                }
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
        changeStatus (code, val) {
            this.$get(`/cityConfig/vtams/status/${code}?status=${val ? 'close' : 'open'}`)
                .then(res => {
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
            window.open(`${window.exportUrl}cityConfig/vtams/export?provinceCode=${this.region && this.region[0]}&cityCode=${this.region && this.region[1]}`)
        }
    }
}
</script>

<style lang="less" scoped>
.city-open {
    .table {
        margin: 20px;
        margin-top: 0;
    }
}
</style>

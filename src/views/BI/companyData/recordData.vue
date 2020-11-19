
<template>
    <div class="certificateProvide" id="certificateProvide">
        <search v-model='searchValue' :options='searchOption' @search='search()'></search>
        <div class="table tableWrap">
            <el-table
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="20%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="经营类别">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="14%"
                label="备案时间">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="审核人">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="审核时间">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="$router.push('/recordDataDetail?'+scope.row.id)" type="text" size="small">详情</el-button>
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
// import Modal from '@/components/Modal'
import Search from '@/components/search'
export default {
    name: 'certificateProvide',
    data () {
        return {
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '备案状态',
                    type: 'select',
                    list: [
                        {
                            label: '已备案',
                            value: '1'
                        },
                        {
                            label: '未备案',
                            value: '2'
                        }
                    ],
                    key: 'userName'
                },
                {
                    label: '经营类别',
                    typeList: 'bussinessCategory',
                    type: 'select',
                    key: 'userName'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '起始日期',
                    type: 'date',
                    key: 'userN1ame'
                }
            ],
            searchValue: {},
            loading: false,
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    computed: {
    },
    components: {
        Search
    },
    created () {
        this.getDataList()
    },
    methods: {
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = this.searchValue
            this.$post('product/cjl/certificate/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        res.data = [{}]
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
        },
        iin () {
            this.$confirm('车辆数据导入失败,请重新导入。', '提示', {
                confirmButtonText: '重新导入',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '导入成功!'
                })
            }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消删除'
                // })
            })
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
</style>
<style lang='less'>
</style>

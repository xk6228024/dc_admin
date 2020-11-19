
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
                prop="a1"
                align="left"
                min-width="10%"
                label="单据编号">
                </el-table-column>
                <el-table-column
                prop="a2"
                align="left"
                min-width="10%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="a3"
                align="left"
                min-width="10%"
                label="经营类别">
                </el-table-column>
                <el-table-column
                prop="a4"
                align="left"
                min-width="10%"
                label="废物类别">
                </el-table-column>
                <el-table-column
                prop="a5"
                align="left"
                min-width="10%"
                label="废物代码">
                </el-table-column>
                <el-table-column
                prop="a6"
                align="left"
                min-width="10%"
                label="废物名称">
                </el-table-column>
                <el-table-column
                prop="a7"
                align="left"
                min-width="10%"
                label="数量(kg)">
                </el-table-column>
                <el-table-column
                prop="a8"
                align="left"
                min-width="10%"
                label="废物特性">
                </el-table-column>
                <el-table-column
                prop="a9"
                align="left"
                min-width="10%"
                label="废物形态">
                </el-table-column>
                <el-table-column
                prop="a11"
                align="left"
                min-width="10%"
                label="包装方式">
                </el-table-column>
                <el-table-column
                prop="a12"
                align="left"
                min-width="10%"
                label="台账日期">
                </el-table-column>
                <el-table-column
                prop="a13"
                align="left"
                min-width="10%"
                label="联单状态">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="$router.push('/wasteDataDetail?'+scope.row.id)" type="text" size="small">详情</el-button>
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
                    label: '经营类别',
                    type: 'select',
                    typeList: 'bussinessCategory',
                    key: 'userNamae1'
                },
                {
                    label: '废物类别',
                    type: 'select',
                    list: [],
                    key: 'userName1'
                },
                {
                    label: '废物代码',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '台账状态',
                    type: 'select',
                    list: [],
                    key: 'userName1'
                },
                {
                    label: '维修企业',
                    type: 'input',
                    key: 'userName11'
                },
                {
                    label: '台账日期',
                    type: 'date',
                    list: [],
                    key: 'userNdame1'
                }
            ],
            searchValue: {},
            loading: false,
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: [
                {
                    num: '01',
                    a1: 'SKII9912213123',
                    a2: '宝安区红星修理厂',
                    a3: '二类',
                    a4: 'HW113',
                    a5: '90-11-33',
                    a6: '废空滤器',
                    a7: '21.12',
                    a8: '腐蚀性',
                    a9: '固态',
                    a11: '袋装',
                    a12: '2020-01-21',
                    a13: '未生成'
                },
                {
                    num: '02',
                    a1: 'SKII9912213123',
                    a2: '宝安区红星修理厂',
                    a3: '二类',
                    a4: 'HW113',
                    a5: '90-11-33',
                    a6: '废空滤器',
                    a7: '21.12',
                    a8: '腐蚀性',
                    a9: '固态',
                    a11: '袋装',
                    a12: '2020-01-21',
                    a13: '未生成'
                },
                {
                    num: '03',
                    a1: 'SKII9912213123',
                    a2: '宝安区红星修理厂',
                    a3: '二类',
                    a4: 'HW113',
                    a5: '90-11-33',
                    a6: '废空滤器',
                    a7: '21.12',
                    a8: '腐蚀性',
                    a9: '固态',
                    a11: '袋装',
                    a12: '2020-01-21',
                    a13: '未生成'
                }
            ]
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
            // this.loading = true
            // let obj = this.searchValue
            // this.$post('product/cjl/certificate/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
            //     .then(res => {
            //         if (res && res.code === 0) {
            //             res.data = [{}]
            //             this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
            //             this.total = res.total
            //         }
            //         this.loading = false
            //     }).catch(() => {
            //         this.loading = false
            //     })
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

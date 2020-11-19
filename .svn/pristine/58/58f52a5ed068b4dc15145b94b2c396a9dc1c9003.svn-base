
<template>
    <div class="certificateProvide" id="certificateProvide">
        <search v-model='searchValue' :options='searchOption' @search='search()' :isdisabled="true">
            <!-- <el-button size="mini" type="primary" @click="$router.push('/wasteBind')">绑定</el-button> -->
        </search>
        <div class="table tableWrap">
            <el-table
                :data="tableData"
                v-loading="loading"
                :show-summary="true"
                class=""
                style="width: 100%;">
                <!-- <el-table-column
                type="selection"
                width="55">
                </el-table-column> -->
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
                label="统计日期">
                    <template slot-scope="scope">
                        <span :vas="scope.row.id" v-if="searchValue.date">{{searchValue.date[0]}}~{{searchValue.date[0]}}</span>
                        <span v-else>--</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="beginMoney"
                align="left"
                min-width="10%"
                label="实际期初金额">
                </el-table-column>
                <el-table-column
                prop="calculationBeginMoney"
                align="left"
                min-width="12%"
                label="计算所得期初金额">
                <template slot="header" slot-scope="scope">
                    计算所得期初金额
                    <el-tooltip class="item" effect="dark" :a="scope.row" content="期末余额+消费-充值" placement="bottom">
                        <i class="el-icon-warning-outline"></i>
                    </el-tooltip>
                </template>
                </el-table-column>
                <el-table-column
                prop="recharge"
                align="left"
                min-width="10%"
                label="充值记录总数">
                </el-table-column>
                <el-table-column
                prop="rechargeCount"
                align="left"
                min-width="10%"
                label="充值总额">
                </el-table-column>
                <el-table-column
                prop="consumeCount"
                align="left"
                min-width="10%"
                label="消费记录总数">
                </el-table-column>
                <el-table-column
                prop="consume"
                align="left"
                min-width="10%"
                label="消费总额">
                </el-table-column>
                <el-table-column
                prop="endMoney"
                align="left"
                min-width="10%"
                label="期末金额">
                </el-table-column>
            </el-table>
            <el-tag type="success" class="wp100 mt20">
                <i class="el-icon-success"></i>
                查询记录：{{tableData.length}}条 &nbsp;&nbsp;&nbsp;&nbsp; 本期累计充值总额： {{total2.toFixed(2)}} &nbsp;&nbsp;&nbsp;&nbsp;   本期累计消费总额： {{total3.toFixed(2)}}
                <!-- <span class="fr c9 pointer" @click.stop="">导出>></span> -->
            </el-tag>
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
        <BreadFoot :breadArr="[{title:'综合信息',path:''},{title:'财务报表',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/financialStatements')">返回</el-button>
        </BreadFoot>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import BreadFoot from '@/components/BreadFoot'
// import Modal from '@/components/Modal'
import Search from '@/components/search'
export default {
    name: 'financialStatementsDetail',
    data () {
        return {
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'region'
                },
                {
                    label: '企业类型',
                    type: 'select',
                    list: [
                        {
                            value: '1',
                            label: '维修企业'
                        },
                        {
                            value: '2',
                            label: '检测企业'
                        },
                        {
                            value: '3',
                            label: '运输企业'
                        }
                    ],
                    key: 'typeId'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'entName'
                },
                {
                    label: '起始时间',
                    type: 'date',
                    valueFormat: 'yyyy-MM-dd',
                    list: [],
                    key: 'date'
                }
            ],
            total2: 0,
            total3: 0,
            searchValue: {},
            loading: false,
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: [
            ]
        }
    },
    computed: {
    },
    components: {
        BreadFoot,
        Search
    },
    created () {
        // this.getDataList()
        if (this.$route.query.entName) {
            this.$set(this.searchValue, 'entName', this.$route.query.entName)
        }
        if (this.$route.query.typeId) {
            this.$set(this.searchValue, 'typeId', this.$route.query.typeId)
        }
        if (this.$route.query.region) {
            // console.log(this.$route.query.region)
            this.$set(this.searchValue, 'region', this.$route.query.region.split(','))
        }
        if (this.$route.query.date) {
            // console.log(this.$route.query.region)
            this.$set(this.searchValue, 'date', this.$route.query.date.split(','))
        }
        this.getDataList()
    },
    methods: {
        handleSelectionChange (val) {
            console.log(val)
        },
        // 获取所有数据
        getDataList (clear) {
            if (clear) this.pageNum = 1
            this.$post('/financial/report/detailList?page=' + this.pageNum + '&size=' + this.pageSize, {
                // provinceCode: this.searchOption.region && this.searchOption.region[0],
                // cityCode: this.searchOption.region && this.searchOption.region[0],
                // districtCode: this.searchOption.region && this.searchOption.region[0],
                // entName: this.searchOption.entName,
                // typeId: this.searchOption.typeId,
                entId: this.$route.query.id,
                startDate: this.searchValue.date && this.searchValue.date[0],
                endDate: this.searchValue.date && this.searchValue.date[1]
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                    this.total2 = 0
                    this.total3 = 0
                    this.tableData.forEach(e => {
                        this.total2 += (e.recharge - 0)
                        this.total3 += (e.consume - 0)
                    })
                }
            })
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

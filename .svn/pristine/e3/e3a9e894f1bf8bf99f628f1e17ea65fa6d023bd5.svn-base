
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
                label="订单时间">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="汇款流水号">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="10%"
                label="订单编号">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="10%"
                label="金额">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="20%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="汇款类型">
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
                        <el-button @click="iin(scope.row.id)" type="text" size="small">详情</el-button>
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
        <modal
            :title="'待入库审核详情'"
            :width="900"
            :alert="showAlert"
            confirmText="通过审核"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner alertWrap">
                <h4 class="mb20 fwb">订单信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">订单编号：</span>
                        <span class="c6">SZZ546548222132</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">订单时间：</span>
                        <span class="c6">2020-02-01 13:22:21</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">状态：</span>
                        <span class="c6">未审核</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">企业名称：</span>
                        <span class="c6">团风县宏达汽车服务中心</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">所在城市：</span>
                        <span class="c6">华中/湖北/黄冈</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">还款类型：</span>
                        <span class="c6">识别卡购买</span>
                    </el-col>
                </el-row>
                <br><br>
                <h4 class="mb20 fwb">线下汇款信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">汇款日期：</span>
                        <span class="c6">2020-02-21</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">汇款金额：</span>
                        <span class="c6">5000.00</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">汇款流水号：</span>
                        <span class="c6">12313254545441210</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">汇款凭证：</span>
                        <span class="c6"><img src="../../assets/images/chaojili.png" class="imgBoder pointer" width="100" height="100" @click="$lookImg('../../../assets/images/chaojili.png')" style="vertical-align:text-top;"></span>
                    </el-col>
                </el-row>
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import Search from '@/components/search'
export default {
    name: 'offlineRemittance',
    data () {
        return {
            showAlert: false,
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '汇款类型',
                    type: 'select',
                    list: [],
                    key: 'userNam1e'
                },
                {
                    label: '企业类型',
                    type: 'select',
                    list: [],
                    key: 'userNam1e'
                },
                {
                    label: '状态',
                    type: 'select',
                    key: 'userName',
                    list: [
                        {
                            label: '全部',
                            value: ''
                        },
                        {
                            label: '已审核',
                            value: 1
                        },
                        {
                            label: '未审核',
                            value: 0
                        }
                    ]
                },
                {
                    label: '更新日期',
                    type: 'date',
                    key: 'userName'
                },
                {
                    label: '汇款流水号',
                    type: 'input',
                    key: 'userName'
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
        Modal,
        Search
    },
    created () {
        this.getDataList()
    },
    methods: {
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = this.searchValue
            this.$post('product/cjl/certificate/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        // res.data = [{}]
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
        },
        iin () {
            this.showAlert = true
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

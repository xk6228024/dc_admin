
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
                label="所在城市">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="检测企业">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="10%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="10%"
                label="车牌颜色">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="车辆类型">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="20%"
                label="车辆单位">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="检测类别">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="检测日期">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="8%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="归档状态">
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
            :title="'检测归档详情'"
            :width="900"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner alertWrap">
                <h4 class="mb20 fwb">车辆信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车牌号码：</span>
                        <span class="c6">粤B99999</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车牌颜色：</span>
                        <span class="c6">黄色</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车辆类别：</span>
                        <span class="c6">大型货车</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车主单位：</span>
                        <span class="c6">团风县宏达汽车服务中心</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">VIN码：</span>
                        <span class="c6">VWWDD13259912</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">发动机号：</span>
                        <span class="c6">1249999</span>
                    </el-col>
                </el-row>
                <br><br>
                <h4 class="mb20 fwb">检测作业信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">检测类别：</span>
                        <span class="c6">登记评定</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">汇款日期：</span>
                        <span class="c6">2020-1-1</span>
                    </el-col>
                </el-row>
                <br><br>
                <h4 class="mb20 fwb">检测作业信息</h4>
                <img src="../../../assets/images/chaojili.png" class="imgBoder pointer" width="100" height="100" @click="$lookImg('../../../assets/images/chaojili.png')">
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import Search from '@/components/search'
export default {
    name: 'certificateProvide',
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
                    label: '车牌号码',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '车牌颜色',
                    type: 'select',
                    typeList: 'plateColor',
                    key: 'userName'
                },
                {
                    label: '车主单位',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '检测企业',
                    type: 'input',
                    key: 'userName'
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
                            label: '已归档',
                            value: 1
                        },
                        {
                            label: '未归档',
                            value: 0
                        }
                    ]
                },
                {
                    label: '归档状态',
                    type: 'select',
                    key: 'userName',
                    list: [
                        {
                            label: '全部',
                            value: ''
                        },
                        {
                            label: '已归档',
                            value: 1
                        },
                        {
                            label: '未归档',
                            value: 0
                        }
                    ]
                },
                {
                    label: '检测日期',
                    type: 'date',
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

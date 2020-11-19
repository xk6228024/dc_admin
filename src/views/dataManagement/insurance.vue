
<template>
    <div class="insurance" id="insurance">
        <search v-model='searchValue' :options='searchOption' @search='search()'></search>
        <div class="table tableWrap">
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
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="VIN码">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="10%"
                label="上传企业">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="20%"
                label="投保时间">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="投保类型">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="数据来源">
                </el-table-column>
                <el-table-column
                prop=""
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="showAlert=true;editId=scope.row.enterpriseId" type="text" size="small">详情</el-button>
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
            :title="'保险详细信息'"
            :width="555"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <el-row>
                    <el-col :span="12" class="mb20">
                        <span class="c3">上传企业：</span>
                        <span class="c6">平安汽车保险宝安分公司</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">投保时间：</span>
                        <span class="c6">2020-11-22</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">投保类型：</span>
                        <span class="c6">商业险</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">交强险：</span>
                        <span class="c6">20000.00</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">车损险：</span>
                        <span class="c6">1000.00</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">第三者责任险：</span>
                        <span class="c6">20000.00</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">不计免赔：</span>
                        <span class="c6">1000.00</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">玻璃险：</span>
                        <span class="c6">20000.00</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">车上人员责任险：</span>
                        <span class="c6">--</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">全车盗抢险：</span>
                        <span class="c6">--</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">车身划痕险：</span>
                        <span class="c6">--</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">无过责任险：</span>
                        <span class="c6">--</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">自然损失险：</span>
                        <span class="c6">--</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">涉水险：</span>
                        <span class="c6">--</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">其他险：</span>
                        <span class="c6">--</span>
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
    name: 'insurance',
    data () {
        return {
            showAlert: false,
            searchOption: [
                {
                    label: '车辆信息',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '上传企业',
                    type: 'input',
                    key: 'userNam2'
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
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
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
.insurance {
    .alertInner {
        padding: 0 40px;
    }
}
</style>
<style lang='less'>
</style>

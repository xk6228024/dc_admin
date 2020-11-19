
<template>
    <div class="certificateProvide" id="certificateProvide">
        <search v-model='searchValue' :options='searchOption' @search='search()'></search>
        <div class="table tableWrap">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="充值统计" name="first">
                    <el-table
                        :data="tableData"
                        v-loading="loading"
                        show-summary
                        class="tableBorder"
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
                        label="银行流水号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="订单编号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="充值方式">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="充值类型">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="充值金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="充值时间">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="状态">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="8%"
                        label="变更前金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="变更后金额">
                        </el-table-column>
                        <!-- <el-table-column
                        prop="chargeTime"
                        align="left"
                        min-width="8%"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button @click="iin(scope.row.id)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="服务交易统计" name="second">
                    <el-table
                        :data="tableData"
                        show-summary
                        v-loading="loading"
                        class="tableBorder"
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
                        label="订单编号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="服务类型">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="服务名称">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="原价">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="优惠价">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="实结金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="购买用户">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="8%"
                        label="购买时间">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="核销时间">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="状态">
                        </el-table-column>
                        <!-- <el-table-column
                        prop="chargeTime"
                        align="left"
                        min-width="8%"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button @click="iin(scope.row.id)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="转账统计" name="third">
                    <el-table
                        :data="tableData"
                        v-loading="loading"
                        show-summary
                        class="tableBorder"
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
                        label="银行流水号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="订单编号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="申请提现金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="转账金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="申请时间">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="银行名称">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="银行开户行">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="8%"
                        label="银行账号">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="开户人">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="转账日期">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="状态">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="备注">
                        </el-table-column>
                        <!-- <el-table-column
                        prop="chargeTime"
                        align="left"
                        min-width="8%"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button @click="iin(scope.row.id)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="消费统计" name="fourth">
                    <el-table
                        :data="tableData"
                        v-loading="loading"
                        show-summary
                        class="tableBorder"
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
                        label="订单编号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="业务类型">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="消费金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="交易时间">
                        </el-table-column>
                        <el-table-column
                        prop="chargeTime"
                        align="left"
                        min-width="8%"
                        label="操作">
                            <template slot-scope="scope">
                                <el-button @click.stop="scope.row.id" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="开票统计" name="fiveth">
                    <el-table
                        :data="tableData"
                        show-summary
                        v-loading="loading"
                        class="tableBorder"
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
                        label="订单编号">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="社会信用代码">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="开票金额">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="开票类型">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="申请时间">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="联系人">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="联系电话">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="8%"
                        label="接收邮箱">
                        </el-table-column>
                        <el-table-column
                        prop="createTime"
                        align="left"
                        min-width="10%"
                        label="开票状态">
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
                </el-tab-pane>
            </el-tabs>
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
            title="开票详情"
            :width="900"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner alertWrap">
                <h4 class="mb20 fwb">车辆信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">发票类型：</span>
                        <span class="c6">增值税电子发票</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">企业名称：</span>
                        <span class="c6">团风县汽车服务中心</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">企业联系电话：</span>
                        <span class="c6">132654888121</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车主单位：</span>
                        <span class="c6">深圳市大飞梦断大酒店</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">社会信用代码：</span>
                        <span class="c6">VWWDD13259912</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">联系人：</span>
                        <span class="c6">田小娥</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">收票邮箱：</span>
                        <span class="c6">245421224244@qq.com</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">联系手机：</span>
                        <span class="c6">13265475786</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">开户行：</span>
                        <span class="c6">中国银行</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">银行账号：</span>
                        <span class="c6">4210798519133454215</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">开户行名称：</span>
                        <span class="c6">深圳支行</span>
                    </el-col>
                    <el-col :span="24" class="mb20">
                        <el-form :model="form" ref="form"  label-width="60px" class="mb20">
                            <el-form-item label="备注：" prop="enterpriseCertificateS" >
                                <el-input
                                    clearable
                                    maxlength="12"
                                    size="mini"
                                    class=""
                                    :rows="3"
                                    resize="none"
                                    disabled
                                    type="textarea"
                                    v-model="form.text"
                                    placeholder="请输入">
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <br>
                <h4 class="mb20 fwb">充值信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">订单编号：</span>
                        <span class="c6">Wx4546489112313212</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">支付方式：</span>
                        <span class="c6">支付宝</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">充值金额：</span>
                        <span class="c6">5000.00</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车主单位：</span>
                        <span class="c6">2020-2-1 13:11:11</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">是否开票：</span>
                        <span class="c6">是</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">所属城市：</span>
                        <span class="c6">深圳</span>
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
    name: 'certificateProvide',
    data () {
        return {
            form: {
                text: '备1注1信1息'
            },
            activeName: 'first',
            showAlert: false,
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '企业类型',
                    type: 'select',
                    list: [],
                    key: 'userName'
                },
                {
                    label: '订单编号',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '订单日期',
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

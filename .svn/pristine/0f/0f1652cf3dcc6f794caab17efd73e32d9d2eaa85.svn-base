<!-- 消费查询统计 -->
<template>
    <div class="consumeQuery">
        <breadcrumb>
            <label for="">关键词:</label>
            <el-input style="width:160px;" clearable class="search-text" v-model="searchKey" placeholder="订单编号/手机号"></el-input>
            <label for="">订单状态:</label>
            <el-select class="w120_input" clearable v-model="orderStatus" placeholder="请选择">
                <el-option
                v-for="item in orderStatusList"
                :key="item.id"
                :label="item.name"
                clearable
                :value="item.id">
                </el-option>
            </el-select>
            <!-- <label for="">优惠方式:</label>
            <el-select class="w120_input" clearable v-model="benefitType" placeholder="请选择">
                <el-option
                v-for="item in benefitTypeList"
                :key="item.id"
                :label="item.name"
                clearable
                :value="item.id">
                </el-option>
            </el-select> -->
            <div class="dlb">
                <label for="">下单时间:</label>
                <el-date-picker
                    v-model="dateRegion"
                    type="daterange"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    value-format="yyyy-MM-dd"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="search">查询</el-button>
            </div>
            <el-button class="fr mt17" @click="exportTable">导出报表</el-button>
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
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="orderNo"
                align="left"
                min-width="12%"
                label="订单编号">
                </el-table-column>
                <el-table-column
                prop="nickName"
                align="left"
                min-width="8%"
                label="用户昵称">
                </el-table-column>
                <el-table-column
                prop="mobile"
                align="left"
                min-width="8%"
                label="注册手机号">
                </el-table-column>
                <el-table-column
                prop="vin"
                align="left"
                min-width="10%"
                label="查询VIN码">
                </el-table-column>
                <el-table-column
                prop="productName"
                align="left"
                min-width="12%"
                label="商品名称">
                </el-table-column>
                <el-table-column
                prop="realMoney"
                align="left"
                min-width="5%"
                label="交易金额">
                </el-table-column>
                <el-table-column
                prop="remainMoney"
                align="left"
                min-width="5%"
                label="账号余额">
                </el-table-column>
                <el-table-column
                prop="type"
                align="left"
                min-width="8%"
                label="金额类型">
                    <template slot-scope="scope">
                        <span>{{scope.row.typeText}}</span>
                        <!-- <span v-if="scope.row.type==1">普通</span>
                        <span v-if="scope.row.type==2">优惠</span>
                        <span v-if="scope.row.type==3">赠送</span>
                        <span v-if="scope.row.type==4">维修</span>
                        <span v-if="scope.row.type==5">碰撞</span>
                        <span v-if="scope.row.type==6">综合</span>
                        <span v-if="scope.row.type==7">退款</span>
                        <span v-if="scope.row.type==8">充值</span>
                        <span v-if="scope.row.type==9">赠送</span>
                        <span v-if="scope.row.type==10">充值</span>
                        <span v-if="scope.row.type==10">充值</span> -->
                    </template>
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="下单时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="payStatusText"
                align="left"
                min-width="5%"
                label="订单状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.refundStatusText&&scope.row.refundStatus!=0">{{scope.row.refundStatusText}}</span>
                        <span v-else> {{scope.row.payStatusText}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="7%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.id)" type="text" size="small" :disabled="!$checkAuth('sys:user:view')">详情</el-button>
                        <el-button v-if="scope.row.refundStatus==2" @click="goRefund(scope.row.id)" type="text" size="small" :disabled="!$checkAuth('sys:user:view')">退款</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination clearfix">
                <el-pagination
                    class="fr"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNum"
                    :page-sizes="[10, 20, 30, 40, 50, 100]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper, slot"
                    :total="total">
                </el-pagination>
                <p class="bottom-data fl" style="">本期数据&nbsp;&nbsp;&nbsp;总消费用户：{{userCount}}人&nbsp;&nbsp;&nbsp;总交易金额：{{totalMoney}}元</p>
            </div>
        </div>
        <modal
            :title="'订单详情'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">订单信息</td>
                    </tr>
                    <tr>
                        <td class="tar">订单编号：</td>
                        <td class="tal fontColor">{{detailObj.orderNo}}</td>
                        <td class="tar">商品类型：</td>
                        <td class="tal fontColor" width="270">{{detailObj.productTypeText}}</td>
                    </tr>
                    <tr>
                        <td class="tar">下单时间：</td>
                        <td class="tal fontColor" width="270">{{detailObj.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</td>
                        <td class="tar">商品名称：</td>
                        <td class="tal fontColor" width="270">{{detailObj.productName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">订单状态：</td>
                        <td class="tal fontColor" width="270">
                            <span v-if="detailObj.isRefund!=0">{{detailObj.isRefund == 1 ? '已退款' : '退款失败'}}</span>
                            <span v-else> {{detailObj.payStatus ? '已支付' : '未支付'}}</span>
                        </td>
                        <td class="tar">查询VIN码：</td>
                        <td class="tal fontColor" width="270">{{detailObj.vin}}</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">支付信息</td>
                    </tr>
                    <tr>
                        <td class="tar">支付时间：</td>
                        <td class="tal fontColor">{{detailObj.payTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</td>
                        <!-- <td class="tar">原价金额：</td>
                        <td class="tal fontColor">{{detailObj.goodsMoney}}</td> -->
                        <td class="tar">支付方式：</td>
                        <td class="tal fontColor">{{detailObj.payTypeText}}</td>
                    </tr>
                    <!-- <tr>
                        <td class="tar">优惠方式：</td>
                        <td class="tal fontColor">{{detailObj.orderNo}}</td>
                        <td class="tar">优惠金额：</td>
                        <td class="tal fontColor">{{detailObj.orderNo}}</td>
                    </tr> -->
                    <tr>
                        <!-- <td class="tar">支付方式：</td>
                        <td class="tal fontColor">{{detailObj.payTypeText}}</td> -->
                        <td class="tar">实付金额：</td>
                        <td class="tal fontColor" colspan="3">{{detailObj.realTotalMoney}}</td>
                        <!-- <td class="tar">折扣金额：</td>
                        <td class="tal fontColor">{{detailObj.discountMoney}}</td> -->
                    </tr>
                    <!-- <tr>
                        <td class="tar">实付金额：</td>
                        <td class="tal fontColor" colspan="3">{{detailObj.realTotalMoney}}</td>
                    </tr> -->
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">用户信息</td>
                    </tr>
                    <tr>
                        <td class="tar">注册手机号码：</td>
                        <td class="tal fontColor">{{detailObj.registerPhone}}</td>
                        <td class="tar">联系人：</td>
                        <td class="tal fontColor">{{detailObj.customerContact}}</td>
                    </tr>
                    <tr>
                        <td class="tar">联系电话：</td>
                        <td class="tal fontColor">{{detailObj.customerMobile}}</td>
                        <td class="tar">客户单位：</td>
                        <td class="tal fontColor">{{detailObj.customerUnit}}</td>
                    </tr>
                    <!-- <tr>
                        <td class="tar">账户余额：</td>
                        <td class="tal fontColor" colspan="3">{{detailObj.remainMoney}}</td>
                        <td class="tar">用户等级：</td>
                        <td class="tal fontColor">{{detailObj.orderNo}}</td>
                    </tr> -->
                </table>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'consumeQuery',
    data () {
        return {
            detailObj: {}, // 详情
            loading: false,
            totalMoney: '', // 总金额
            userCount: '', // 总用户数
            orderStatus: '',
            orderStatusList: [ // 订单状态
                {
                    id: 1,
                    name: '已支付'
                },
                {
                    id: 2,
                    name: '待付款'
                },
                {
                    id: 3,
                    name: '已完成'
                },
                {
                    id: 4,
                    name: '已取消'
                },
                {
                    id: 5,
                    name: '已退款'
                },
                {
                    id: 6,
                    name: '退款失败'
                }
            ],
            benefitTypeList: [ // 优惠类型
                {
                    id: 1,
                    name: '红包'
                },
                {
                    id: 2,
                    name: '优惠券'
                }
            ],
            benefitType: '',
            areaId: '', // 大区Id
            searchKey: '',
            dateRegion: [], // 下单时间
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getDataList()
    },
    methods: {
        goRefund (id) {
            this.$confirm('确定退款吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(res => {
                this.$post('order/refund', {
                    data: {
                        id: id
                    }
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }).catch(() => {})
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                searchKey: this.searchKey,
                startDate: this.startDate,
                endDate: this.endDate,
                // benefitType: this.benefitType,
                orderStatus: this.orderStatus
            }
            if (this.dateRegion && this.dateRegion.length) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            } else {
                obj.startDate = ''
                obj.endDate = ''
            }
            this.$post('order/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data.data, this.pageNum, this.pageSize)
                        this.total = res.data.total
                        this.userCount = res.data.userCount
                        this.totalMoney = res.data.totalMoney
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 打开详情弹窗
        goDetail (id) {
            this.showAlert = true
            this.$post('order/view', {
                data: {
                    id: id
                }
            })
                .then(res => {
                    if (res && res.code === 0) {
                        this.detailObj = res.data
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        // 弹窗确认
        alertConfirm () {
            this.alertCancel()
        },
        // 弹窗取消
        alertCancel () {
            this.showAlert = false
        },
        // 导出报表
        exportTable () {
            let href = `${window.uploadURL}order/export?searchKey=${this.searchKey}&benefitType=${this.benefitType}&orderStatus=${this.orderStatus}`
            if (this.dateRegion && this.dateRegion.length) {
                href = href + '&startDate=' + this.dateRegion[0]
                href = href + '&endDate=' + this.dateRegion[1]
            }
            window.open(href)
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
.consumeQuery {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .tips {
        position: absolute;
        top: 0;
        line-height: 40px;
        color: #98A9BC;
        font-size: 14px;
        font-weight: normal;
    }
    .alertInner {
        padding: 0 40px;
        table {
            width: 100%;
            border: none;
            line-height: 44px;
            td {
                padding: 0 10px;
                box-sizing: border-box;
            }
            .blueTilte {
                background: rgb(242, 244, 246);
            }
            .resonInput {
                line-height: 36px;
                width: 600px;
                border: none;
                outline: none;
            }
            .importantIcon {
                color: red;
                margin-right: 4px;
            }
        }
    }
    .pagination {
        position: relative;
        .bottom-data {
            color:#98A9BC;
            font-weight: normal;
            line-height: 36px;
            color:#98A9BC;
            font-weight: normal;
            margin-top: 20px;
        }
    }
}
</style>
<style lang='less'>
.consumeQuery {
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w200_input {
        width: 220px;
    }
    .w120_input {
        width: 100px;
    }
    .el-pagination {
        position: relative;
    }
}
</style>

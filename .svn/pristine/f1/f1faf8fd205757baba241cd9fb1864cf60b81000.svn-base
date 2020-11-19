
<template>
    <div class="off-lineRemittance" id="off-lineRemittance">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-cascader
                placeholder="请选择"
                v-model="areaId"
                clearable
                :options="allCityList"
                change-on-select
                filterable>
            </el-cascader>
            <label for="">汇款流水号:</label>
            <el-input style="width:160px;" class="search-text" v-model="enterpriseNamekey" placeholder=""></el-input>
            <label for="">汇款类型:</label>
            <el-select class="w120_input" clearable v-model="chargeStatus" placeholder="请选择">
                <el-option
                v-for="item in [{value:1,label:'充值'},{value:2,label:'识别卡购买'}]"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">选择日期:</label>
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
                <el-button class="search" @click="search">查 询</el-button>
            </div>
            <div class="dlb fr">
                <el-button style="visibility:hidden;" class="fr mt17"  type="primary"  @click="$router.push('/inspectionCityOpenDetail')">导出</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="tableBorder"
                @selection-change="handleSelectionChange"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="remittanceDate"
                align="left"
                min-width="12%"
                label="订单时间">
                    <template slot-scope="scope">{{scope.row.remittanceDate|filterTime('yyyy-mm-dd hh:ff:ss')}}</template>
                </el-table-column>
                <el-table-column
                prop="serialNumber"
                align="left"
                min-width="12%"
                label="汇款流水号">
                </el-table-column>
                <el-table-column
                prop="orderNo"
                align="left"
                min-width="8%"
                label="订单编号">
                </el-table-column>
                <el-table-column
                prop="remittanceAmount"
                align="left"
                min-width="10%"
                label="汇款金额">
                </el-table-column>
                <el-table-column
                prop="areaName"
                align="left"
                min-width="8%"
                label="大区">
                </el-table-column>
                <el-table-column
                prop="provinceName"
                align="left"
                min-width="8%"
                label="省份">
                </el-table-column>
                 <el-table-column
                prop="cityName"
                align="left"
                min-width="8%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="12%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="remittanceType"
                align="left"
                min-width="8%"
                label="汇款类型">
                </el-table-column>
                <el-table-column
                prop="auditStatus"
                align="left"
                min-width="8%"
                label="状态">
                    <!-- <template slot-scope="scope">
                        <span v-if="scope.row.deleteStatus==1">充值</span>
                        <span v-if="scope.row.deleteStatus==2">识别卡购买</span>
                    </template> -->
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="getDetail(scope.row.remittanceId)" type="text" size="small"
                        :disabled="!$checkAuth('remittance:offline:view')">详情</el-button>
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
                <!-- <p class="bottom-data fl" style="">本期数据&nbsp;&nbsp;&nbsp;总充值用户：{{userCount}}人&nbsp;&nbsp;&nbsp;总充值金额：{{chargeMoneyCount}}元</p> -->
            </div>
        </div>
        <modal
            :title="'订单详情'"
            :width="900"
            :alert="showAlert"
            confirmText="审核通过"
            :showBtn="detailObj.auditStatus!=='已审核'"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_box clearfix">
                <h5>订单信息</h5>
                <div class="clearfix">
                    <div class="detail_item">
                        <label for="">订单编号：</label>
                        <span>{{detailObj.orderNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">创建时间：</label>
                        <span>{{detailObj.remittanceDate|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">状态：</label>
                        <span>{{detailObj.auditStatus}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">所在城市：</label>
                        <span>{{detailObj.provinceName}}{{detailObj.cityName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">汇款类型：</label>
                        <span>{{detailObj.remittanceType}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">企业名称：</label>
                        <span>{{detailObj.enterpriseName}}</span>
                    </div>
                </div>
                <h5>线下汇款信息</h5>
                <div class="clearfix">
                    <div class="detail_item">
                        <label for="">汇款日期：</label>
                        <span>{{detailObj.remittanceDate|filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">汇款金额：</label>
                        <span>{{detailObj.remittanceAmount}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">汇款流水号：</label>
                        <span>{{detailObj.serialNumber}}</span>
                    </div>
                    <div class="detail_item detail_item2">
                        <label for="">汇款凭证：</label>
                        <span class="dlb">
                            <img
                                :src="detailObj.remittanceDocumentUrl"
                                v-if="detailObj.remittanceDocumentUrl"
                                @click="$lookImg(detailObj.remittanceDocumentUrl)"
                                width="100"
                                height="100"
                                class="imgBoder">
                            <!-- <img src="../../../assets/images/cheliangshuju.png" class="imgBoder"> -->
                        </span>
                    </div>
                </div>
            </div>
        </modal>
        <modal
            :title="'订单详情'"
            :width="900"
            :alert="showAlert2"
            @alertConfirm="alertConfirm2"
            @alertCancel="alertCancel2">
            <div class="detail_box clearfix">
                <h5>订单信息</h5>
                <div class="clearfix">
                    <div class="detail_item">
                        <label for="">订单编号：</label>
                        <span>{{form.enterpriseName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">创建时间：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付方式：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付类型：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">状态：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">所在城市：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">购买数量：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付金额：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">发卡数量：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">入库数量：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">企业名称：</label>
                        <span>{{form.enterpriseAddress}}</span>
                    </div>
                </div>
                <h5>
                    识别卡发放记录
                    <div class="h_tabs">
                        <div :class="{'active': detailIndex===1}" @click="detailIndex=1">已绑定车辆识别卡</div>
                        <div :class="{'active': detailIndex===2}" @click="detailIndex=2">未绑定车辆识别卡</div>
                    </div>
                </h5>
                <div class="card_info">
                    <p>1,识别卡ID,03123232FFFSS 桂A8888 黄色</p>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'off-lineRemittance',
    data () {
        return {
            detailObj: {},
            detailIndex: 1,
            showAlert2: false,
            form: {},
            allCityList: [],
            multipleSelection: [],
            chargeStatus: '',
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaId: '', // 大区Id
            enterpriseNamekey: '',
            auditRadio: '1', // 弹窗审核结果
            certStatus: 0,
            certStatusList: [
                {
                    value: 0,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '通过'
                },
                {
                    value: 2,
                    label: '未通过'
                }
            ],
            dateRegion: [],
            value: '',
            options: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [
                {}
            ]
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        // this.getAreaList()
        // if ()
        this.getDataList()
        this.getAllCity()
    },
    watch: {
    },
    methods: {
        getDetail (id) {
            if (process.env.VUE_APP_MODE === 'show') {
                this.showAlert = true
            } else {
                this.$get('/remittance/offline/' + id).then(res => {
                    if (res.code === 0) {
                        this.detailObj = res.data
                        this.showAlert = true
                    }
                })
            }
        },
        // 表格多选事件
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        getAllCity () {
            this.$get('comm/citys/areas/tree').then(res => {
                if (res.code === 0) {
                    res.data.forEach(e => {
                        e.label = e.areaName
                        e.value = e.areaCode
                        e.children && e.children.forEach(f => {
                            f.label = f.provinceName
                            f.value = f.provinceCode
                            f.children && f.children.forEach(g => {
                                g.label = g.cityName
                                g.value = g.cityCode
                            })
                        })
                    })
                    this.allCityList = res.data
                }
            })
        },
        changeStatus (cityDomain, status) {
            this.$post('syscity/status', {
                data: {
                    cityDomain,
                    deleteStatus: status
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
        },
        // 检测线设置
        goSetting (id) {
            this.$router.push('/cjlEnterpriseArchivesDetail?id=' + id)
        },
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                    localStorage.areaList = JSON.stringify(res.data)
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                startTime: this.dateRegion[0],
                endTime: this.dateRegion[1],
                areaCode: this.areaId[0],
                provinceCode: this.areaId[1],
                cityCode: this.areaId[2],
                serialNumber: this.enterpriseNamekey,
                remittanceType: this.chargeStatus
            }
            this.$post('/remittance/offline/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
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
        },
        // 弹窗确认
        alertConfirm () {
            if (!this.$checkAuth('remittance:offline:audit')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            // this.showAlert = false
            this.$get('/remittance/offline/audit/' + this.detailObj.remittanceId).then(res => {
                if (res.code === 0) {
                    this.$message({
                        message: '审核成功',
                        type: 'success'
                    })
                    this.showAlert = false
                    this.getDataList()
                }
            })
        },
        // 弹窗取消
        alertCancel () {
            this.showAlert = false
        },
        alertConfirm2 () {
            this.alertCancel2()
        },
        alertCancel2 () {
            this.showAlert2 = false
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
.off-lineRemittance {
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
    .detail_box {
        padding: 0 70px;
        h5 {
            font-size: 16px;
            color: #000000;
            font-weight: 500;
            line-height: 30px;
            margin-bottom: 20px;
        }
        .detail_item {
            float: left;
            width: 33%;
            // margin-bottom: 20px;
            min-height: 40px;
            label {
                color: #262626;
            }
            span {
                color: #595959;
            }
            img {
                vertical-align: top;
                cursor: pointer;
                margin-right: 30px;
            }
        }
        .detail_item2 {
            width: 66%;
        }
        .h_tabs {
            display: inline-block;
            color: #595959;
            font-size: 14px;
            // margin-left: 20px;
            div {
                display: inline-block;
                width: 150px;
                margin-left: 20px;
                text-align: center;
                border-bottom: 1px solid #D9D9D9;
                cursor: pointer;
                &.active {
                    color: #4D7CFE;
                    border-bottom: 2px solid #4D7CFE;
                }
            }
        }
        .card_info {
            height: 150px;
            border: 1px solid #dddddd;
            border-radius: 5px;
            p {
                line-height: 26px;
                padding-left: 10px;
            }
        }
        .ipt {
            width: 550px;
            vertical-align: top;
        }
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
    .bottom-data {
        color:#98A9BC;
        font-weight: normal;
    }
    .pagination {
        position: relative;
        .bottom-data {
            line-height: 36px;
            color:#98A9BC;
            font-weight: normal;
            margin-top: 20px;
            // position: absolute;
            // left:0;
            // top: 9px;
        }
    }
}
</style>
<style lang='less'>
.off-lineRemittance {
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
#off-lineRemittance {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

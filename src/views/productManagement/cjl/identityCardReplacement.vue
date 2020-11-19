
<template>
    <div class="identityCardReplacement" id="identityCardReplacement">
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
            <label for="">订单号:</label>
            <el-input style="width:160px;" class="search-text" v-model="searchKey" placeholder=""></el-input>
            <label for="">状态:</label>
            <el-select class="w120_input" clearable v-model="chargeStatus" placeholder="请选择">
                <el-option
                v-for="item in [{value:'ToAudit',label:'待审核'},{value:'ToCard',label:'待发卡'},{value:'finished',label:'已完结'}]"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">日期范围:</label>
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
                <el-button class="fr mt17" icon="el-icon-plus" :disabled="!$checkAuth('rfid:reissue:add')" type="primary"  @click="showAlert=true">新增补发</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                @selection-change="handleSelectionChange"
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
                prop="reissueNo"
                align="left"
                min-width="12%"
                label="补发订单编号">
                </el-table-column>
                <el-table-column
                prop="reissueTime"
                align="left"
                min-width="12%"
                label="补发单创建时间">
                </el-table-column>
                <el-table-column
                prop="areaName"
                align="left"
                min-width="8%"
                label="区域">
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
                prop="orderNum"
                align="left"
                min-width="5%"
                label="购买数量">
                </el-table-column>
                <el-table-column
                prop="orderInputNum"
                align="left"
                min-width="5%"
                label="发卡数量">
                </el-table-column>
                <el-table-column
                prop="reissueInputNum"
                align="left"
                min-width="5%"
                label="补发数量">
                </el-table-column>
                <!-- <el-table-column
                prop="orderPerson"
                align="left"
                min-width="6%"
                label="采购人">
                </el-table-column> -->
                <el-table-column
                prop="reissueRemark"
                align="left"
                min-width="10%"
                label="补发说明">
                </el-table-column>
                <el-table-column
                prop="reissuePersonName"
                align="left"
                min-width="6%"
                label="补发人">
                </el-table-column>
                <el-table-column
                prop="reissueStatus"
                align="left"
                min-width="6%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="6%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.reissueStatus==='待发卡'" @click="sendCard(scope.row.reissueNo)" type="text" size="small"
                        :disabled="!$checkAuth('rfid:reissue:release')">发卡</el-button>
                        <el-button v-if="scope.row.reissueStatus==='待审核'" @click="getDetail(scope.row.reissueNo, 2)" type="text" size="small"
                        :disabled="!$checkAuth('rfid:reissue:audit')">审核</el-button>
                        <el-button v-if="scope.row.reissueStatus==='已完结'" @click="getDetail(scope.row.reissueNo, 1)" type="text" size="small"
                        :disabled="!$checkAuth('rfid:reissue:view')">详情</el-button>
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
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
                </el-pagination>
            </div>
        </div>
        <modal
            :title="'新建识别卡补发单'"
            :width="900"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_box clearfix">
                <h5>订单信息
                    <el-input
                        style="width:216px;margin-left:40px;"
                        placeholder="请输入采购订单编号"
                        v-model="searchText">
                        <i slot="suffix" class="el-input__icon el-icon-search" @click="searchOrder" style="cursor:pointer;"></i>
                    </el-input>
                </h5>
                <div class="clearfix">
                    <div class="detail_item">
                        <label for="">订单编号：</label>
                        <span>{{detailObj.orderNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">创建时间：</label>
                        <span>{{detailObj.createTime}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付方式：</label>
                        <span>{{detailObj.paymentMethod}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">状态：</label>
                        <span>{{detailObj.orderStatusName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">所在城市：</label>
                        <span>{{detailObj.cityName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">购买数量：</label>
                        <span>{{detailObj.orderNumber}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">发卡数量：</label>
                        <span>{{detailObj.inputNumber}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">企业名称：</label>
                        <span>{{detailObj.enterpriseName}}</span>
                    </div>
                </div>
                <h5>补发识别卡</h5>
                <div class="clearfix detail_item detail_item3">
                    <label style="display:inline-block;width:75px;"><span class="red">*</span>补发数量：</label>
                    <el-input
                        style="width:240px;margin-left:20px;"
                        type="number"
                        placeholder="请输入补发数量"
                        v-model="searchText2">
                    </el-input>
                </div>
                <div class="clearfix detail_item detail_item3">
                    <label  style="display:inline-block;width:75px;">补发说明：</label>
                    <el-input
                        style="width:660px;vertical-align:top;margin-left:20px;"
                        type="textarea"
                        placeholder="请输入补发说明"
                        v-model="searchText3">
                    </el-input>
                </div>
            </div>
        </modal>
        <modal
            :title="'审核补发单'"
            :width="900"
            :alert="showAlert2"
            @alertConfirm="alertConfirm2"
            :confirmText="'审核'"
            @alertCancel="alertCancel2">
            <div class="detail_box clearfix">
                <h5>订单信息</h5>
                <div class="clearfix">
                    <div class="detail_item detail_item3">
                        <label for="">关联订单编号：</label>
                        <span>{{detailObj.orderNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">补发订单编号：</label>
                        <span>{{detailObj.reissueNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">创建时间：</label>
                        <span>{{detailObj.createTime}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付方式：</label>
                        <span>{{detailObj.paymentMethod}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">状态：</label>
                        <span>{{detailObj.orderStatusName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">所在城市：</label>
                        <span>{{detailObj.cityName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">购买数量：</label>
                        <span>{{detailObj.orderNumber}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">发卡数量：</label>
                        <span>{{detailObj.inputNumber}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">企业名称：</label>
                        <span>{{detailObj.enterpriseName}}</span>
                    </div>
                </div>
                <h5>补发信息</h5>
                <div class="clearfix">
                    <div class="detail_item detail_item3">
                        <label for="">补发数量：</label>
                        <span>{{detailObj.reissueNum}}</span>
                    </div>
                    <div class="detail_item detail_item3">
                        <label for="">补发说明：</label>
                        <span>{{detailObj.reissueRemark}}</span>
                    </div>
                </div>
            </div>
        </modal>
        <modal
            :title="'补发识别卡'"
            :width="900"
            :alert="showAlert3"
            @alertConfirm="alertConfirm3"
            @alertCancel="alertCancel3">
            <div class="detail_box clearfix" style="padding-bottom:0;">
                <h5>订单信息</h5>
                <div class="clearfix">
                    <div class="detail_item detail_item3">
                        <label for="">关联订单编号：</label>
                        <span>{{detailObj.orderNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">补发订单编号：</label>
                        <span>{{detailObj.reissueNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">创建时间：</label>
                        <span>{{detailObj.createTime | filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付方式：</label>
                        <span>{{detailObj.paymentMethod}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">支付类型：</label>
                        <span>{{detailObj.paymentType}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">状态：</label>
                        <span>{{detailObj.orderStatusName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">所在城市：</label>
                        <span>{{detailObj.cityName}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">购买数量：</label>
                        <span>{{detailObj.orderNumber}}</span>
                    </div>
                    <div class="detail_item detail_item2">
                        <label for="">企业名称：</label>
                        <span>{{detailObj.enterpriseName}}</span>
                    </div><div class="detail_item">
                        <label for="">补发数量：</label>
                        <span>{{detailObj.reissueNum}}</span>
                    </div>
                    <div class="detail_item detail_item2">
                        <label for="">补发说明：</label>
                        <span>{{detailObj.reissueRemark}}</span>
                    </div>
                </div>
                <h5>识别卡发放</h5>
                <div class="clearfix">
                    <div class="detail_item detail_item2 detail_item3 detail_itemS">
                        <label>串口号：</label>
                        <el-input style="width:140px" placeholder="请输入" v-model="commPort"></el-input>
                        <label>设备ID：</label>
                        <el-input style="width:140px" placeholder="请输入" v-model="deviceId"></el-input>
                        <label>读卡器：</label>
                        <el-select style="width:140px" clearable v-model="deviceName" placeholder="请选择">
                            <el-option
                            v-for="item in [{value:'ZK',label:'中科'},{value:'JT',label:'捷通'}]"
                            :key="item.value"
                            :label="item.label"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button size="mini" class="btn" type="primary" plain @click="readCard(deviceName,commPort,deviceId)">连接设备</el-button>
                    </div>
                </div>
                <div class="clearfix">
                    <el-form :model="form3"  ref="form3">
                        <el-form-item  prop="text">
                            <div class="detail_item detail_item3" style="margin-top:15px;">
                                <label for="">操作提示：</label>
                                <div class="text_info" ref="readCardInfo" v-html="readCardInfo"></div>
                                <p class="handle_info">已发卡 {{this.detailObj.reissueInputNum}}</p>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </modal>
        <div id="JieTong"></div>
        <object style="position: absolute; top: 0;" width="0" height="0" id="ZhongCheRfid" classid="clsid:FAF6299A-CA50-4D91-9F31-B8FB1D4E1164" >
        </object>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import toReadCard from '@/utils/readCard.js'
export default {
    name: 'identityCardReplacement',
    data () {
        return {
            isDetail: false,
            deviceName: '',
            commPort: '',
            deviceId: '',
            readCardInfo: '',
            form3: {},
            searchText2: '',
            searchText3: '',
            detailObj: {},
            searchText: '',
            detailIndex: 1,
            showAlert2: false,
            showAlert3: false,
            form: {},
            allCityList: [],
            multipleSelection: [],
            chargeStatusList: [
                {
                    label: '成功',
                    value: 1
                },
                {
                    label: '失败',
                    value: 0
                }
            ],
            chargeStatus: '',
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            areaId: '', // 大区Id
            searchKey: '',
            dateRegion: [],
            value: '',
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [
            ]
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        // this.getAreaList()
        this.getDataList()
        this.getAllCity()
    },
    methods: {
        readCard (deviceName, commPort, deviceId) {
            this.readCardInfo += '<p>连接设备.....</p>'
            let res = toReadCard({ deviceName, commPort, deviceId })
            if (res.code === 200) {
                this.$post(`/product/cjl/rfid/reissue/orders/release/${this.detailObj.reissueNo}/${res.content}`).then(response => {
                    if (response.code === 0) {
                        this.readCardInfo += `<p class="green">识别卡录入,识别卡ID：${res.content}</p>`
                        this.detailObj.reissueInputNum += 1
                    } else {
                        this.readCardInfo += `<p>${response.msg}</p>`
                    }
                    this.$nextTick(() => {
                        this.$refs.readCardInfo.scrollTop = this.$refs.readCardInfo.scrollHeight
                    })
                })
            } else {
                this.readCardInfo += `<p>${res.content}</p>`
                this.$nextTick(() => {
                    this.$refs.readCardInfo.scrollTop = this.$refs.readCardInfo.scrollHeight
                })
            }
        },
        sendCard (id) {
            this.$get(`product/cjl/rfid/reissue/orders/reissue/${id}`).then(res => {
                if (res.code === 0) {
                    this.detailObj = res.data
                    this.showAlert3 = true
                }
            })
        },
        getDetail (id, type) {
            this.isDetail = type === 1
            this.$get(`product/cjl/rfid/reissue/orders/reissue/${id}`).then(res => {
                if (res.code === 0) {
                    this.detailObj = res.data
                    this.showAlert2 = true
                }
            })
        },
        searchOrder () {
            // console.log(111)
            if (!this.searchText) {
                this.$alert('请输入采购订单编号', '提示')
                return
            }
            this.$get(`product/cjl/rfid/reissue/orders/card/${this.searchText}`).then(res => {
                if (res.code === 0) {
                    this.detailObj = res.data || ''
                }
            })
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
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                areaCode: this.areaId[0],
                provinceCode: this.areaId[1],
                cityCode: this.areaId[2],
                status: this.chargeStatus,
                startTime: this.dateRegion[0],
                orderNo: this.searchKey,
                endTime: this.dateRegion[1]
            }
            this.$post('product/cjl/rfid/reissue/orders/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
            // this.showAlert = false
            if (!this.detailObj.orderNo) {
                this.$alert('请搜索订单信息', '提示')
                return
            }
            if (!this.searchText2) {
                this.$alert('请填写补发数量', '提示')
                return
            }
            this.$post('product/cjl/rfid/reissue/orders/add', {
                reissueNum: this.searchText2 - 0,
                reissueRemark: this.searchText3,
                orderNo: this.detailObj.orderNo
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    })
                    this.alertCancel()
                    this.getDataList()
                }
            })
        },
        // 弹窗取消
        alertCancel () {
            this.searchText = ''
            this.searchText2 = ''
            this.searchText3 = ''
            this.detailObj = {}
            this.showAlert = false
        },
        alertConfirm2 () {
            // this.alertCancel2()
            this.$post(`/product/cjl/rfid/reissue/orders/audit/${this.detailObj.reissueNo}`).then(res => {
                if (res.code === 0) {
                    this.alertCancel2()
                    this.getDataList()
                }
            })
        },
        alertCancel2 () {
            this.showAlert2 = false
            this.detailObj = {}
        },
        alertConfirm3 () {
            this.alertCancel3()
        },
        alertCancel3 () {
            this.getDataList()
            this.showAlert3 = false
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
.identityCardReplacement {
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
        label {
            color: #262626;
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
        .detail_item3 {
            width: 100%;
        }
        .detail_itemS {
            label {
                display: inline-block;
                width: 70px;
                text-align: right;
            }
            .btn {
                margin-left: 20px;
                vertical-align: top;
            }
        }
        .text_info {
            width: 620px;
            display: inline-block;
            vertical-align: top;
            height: 80px;
            border: 1px solid #dddddd;
            overflow-y: auto;
            line-height: 20px;
            padding: 10px 20px;
        }
        .handle_info {
            padding-left: 80px;
            color: #52C31A;
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
.identityCardReplacement {
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
#identityCardReplacement{
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

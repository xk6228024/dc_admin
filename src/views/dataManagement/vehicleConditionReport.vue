<!-- 权限管理 -->
<template>
    <div class="vehicleConditionReport detailPage">
        <div class="detail_header">
            <el-button class="goBack btn" @click="close">关闭</el-button>
            <!-- <h1>维修数据详情</h1> -->
        </div>
        <div class="detail_content" v-loading="loading">
            <div class="detail_model">
                <h4>基本信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>车牌号码：</label>
                        <span>{{vehicleInfo.vehicleLicensePlate}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车牌颜色：</label>
                        <span>{{vehicleInfo.licenseColor}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车身颜色：</label>
                        <span>{{vehicleInfo.vehicleBodyColor}}</span>
                    </div>
                    <div class="detail_item">
                        <label>品牌车系：</label>
                        <span>{{vehicleInfo.vehicleBrandAndModel}}</span>
                    </div>
                    <div class="detail_item">
                        <label>VIN码：</label>
                        <span>{{vehicleInfo.vehicleVin}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆性质：</label>
                        <span>{{vehicleInfo.vehicleUseName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆类型(国标)：</label>
                        <span>{{vehicleInfo.vehicleType}}</span>
                    </div>
                    <div class="detail_item">
                        <label>发动机号：</label>
                        <span>{{vehicleInfo.vehicleEngineNumber}}</span>
                    </div>
                    <div class="detail_item">
                        <label>燃油类型：</label>
                        <span>{{vehicleInfo.vehicleFuelCategoryName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆注册日期：</label>
                        <span>{{vehicleInfo.vehicleDrivingLicenseRecorddate | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>行驶证发放日期：</label>
                        <span>{{vehicleInfo.vehicleDrivingLicenseDateofissue | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>数据来源：</label>
                        <span>{{vehicleInfo.dataSourceName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车主姓名：</label>
                        <span>{{vehicleOwnerInfo.ownerName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系电话：</label>
                        <span>{{vehicleOwnerInfo.ownerMobile}}</span>
                    </div>
                    <div class="detail_item">
                        <label>所属运输企业：</label>
                        <span>{{vehicleInfo.enterpriseName}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model noBorder">
                <h4>维修记录</h4>
                <el-table
                    border
                    :data="list1"
                    class="tableBorder"
                    style="width: 100%;">
                     <el-table-column
                    prop="num"
                    align="left"
                    label="序号"
                    min-width="6%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectCode"
                    align="left"
                    label="维修类别"
                    min-width="8%">
                    <template slot-scope="scope">
                        <span>{{scope.row.vehicleFixCategory | fixTypeFilter}}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="companyName"
                    align="left"
                    min-width="18%"
                    label="上传企业">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectHours"
                    align="left"
                    min-width="10%"
                    label="上传日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime | filterTime('yyyy-mm-dd')}}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="维修日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.vehicleFixDate | filterTime('yyyy-mm-dd')}}</span>
                    </template>
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="结算日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.balanceDate | filterTime('yyyy-mm-dd')}}</span>
                    </template>
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="出厂日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.vehicleFixFactoryDate | filterTime('yyyy-mm-dd')}}</span>
                    </template>
                    </el-table-column>
                     <el-table-column
                    prop="totalFee"
                    align="left"
                    min-width="8%"
                    label="结算金额">
                    </el-table-column>
                    <el-table-column
                    prop="fixMileage"
                    align="left"
                    min-width="8%"
                    label="送修里程">
                    </el-table-column>
                    <el-table-column
                    prop="repairName"
                    align="left"
                    min-width="7%"
                    label="送修人">
                    </el-table-column>
                    <el-table-column
                    prop="repairTel"
                    align="left"
                    min-width="9%"
                    label="送修人电话">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixDescription"
                    align="left"
                    min-width="15%"
                    label="故障描述">
                    </el-table-column>
                    <el-table-column
                    prop="sourceName"
                    align="left"
                    min-width="8%"
                    label="数据来源">
                    </el-table-column>
                    <el-table-column
                    prop="ownerMobile"
                    align="left"
                    min-width="8%"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail1(scope.row.vehicleFixId)" type="text" size="small">详情</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="detail_model noBorder">
                <h4>检测记录</h4>
                <el-table
                    border
                    :data="list2"
                    class="tableBorder"
                    style="width: 100%;">
                     <el-table-column
                    prop="num"
                    align="left"
                    label="序号"
                    min-width="6%">
                    </el-table-column>
                    <el-table-column
                    prop="enterpriseName"
                    align="left"
                    label="上传企业"
                    min-width="15%">
                    </el-table-column>
                    <el-table-column
                    prop="inspectTypeText"
                    align="left"
                    min-width="8%"
                    label="检测类别">
                    </el-table-column>
                    <el-table-column
                    prop="inspectId"
                    align="left"
                    min-width="8%"
                    label="检测编号">
                    </el-table-column>
                    <el-table-column
                    prop="reuslt"
                    align="left"
                    min-width="8%"
                    label="检测结果">
                    </el-table-column>
                     <!-- <el-table-column
                    prop=""
                    align="left"
                    min-width="8%"
                    label="送检日期">
                    </el-table-column> -->
                     <el-table-column
                    prop="inspectDate"
                    align="left"
                    min-width="8%"
                    label="检测日期">
                    </el-table-column>
                     <el-table-column
                    prop="inspectCompletedTime"
                    align="left"
                    min-width="8%"
                    label="竣工日期">
                    </el-table-column>
                    <el-table-column
                    prop="lineName"
                    align="left"
                    min-width="5%"
                    label="工位">
                    </el-table-column>
                    <el-table-column
                    prop="dataSource"
                    align="left"
                    min-width="8%"
                    label="数据来源">
                    </el-table-column>
                    <el-table-column
                    prop="ownerMobile"
                    align="left"
                    min-width="8%"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail2(scope.row.inspectId)" type="text" size="small">详情</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="detail_model noBorder">
                <h4>出险记录</h4>
                <el-table
                    border
                    :data="list3"
                    class="tableBorder"
                    style="width: 100%;">
                     <el-table-column
                    prop="num"
                    align="left"
                    label="序号"
                    min-width="6%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectCode111"
                    align="left"
                    label="上传企业"
                    min-width="12%">
                    </el-table-column>
                    <el-table-column
                    prop="riskTime"
                    align="left"
                    min-width="10%"
                    label="出险时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.riskTime | filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="description"
                    align="left"
                    min-width="15%"
                    label="事故描述">
                    </el-table-column>
                    <el-table-column
                    prop="claimAmount"
                    align="left"
                    min-width="8%"
                    label="理赔金额">
                    </el-table-column>
                     <el-table-column
                    prop="maintenanceAmount"
                    align="left"
                    min-width="8%"
                    label="维修金额">
                    </el-table-column>
                     <el-table-column
                    prop="materialAmount"
                    align="left"
                    min-width="8%"
                    label="材料金额">
                    </el-table-column>
                     <el-table-column
                    prop="otherAmount"
                    align="left"
                    min-width="8%"
                    label="其它金额">
                    </el-table-column>
                    <el-table-column
                    prop="repairDetail"
                    align="left"
                    min-width="8%"
                    label="维修详情">
                    </el-table-column>
                    <el-table-column
                    prop="materiaUse"
                    align="left"
                    min-width="8%"
                    label="材料详情">
                    </el-table-column>
                    <el-table-column
                    prop="dataSourceName"
                    align="left"
                    min-width="8%"
                    label="数据来源">
                    </el-table-column>
                </el-table>
            </div>
            <div class="detail_model noBorder">
                <h4>保险记录</h4>
                <el-table
                    border
                    :data="list4"
                    class="tableBorder"
                    style="width: 100%;">
                     <el-table-column
                    prop="num"
                    align="left"
                    label="序号"
                    min-width="4%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectCode"
                    align="left"
                    label="上传企业"
                    min-width="18%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectName"
                    align="left"
                    min-width="8%"
                    label="投保时间">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectHours"
                    align="left"
                    min-width="8%"
                    label="投保类别">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="数据来源">
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="附件">
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail4(scope.row.vehicleFixId)" type="text" size="small">详情</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="detail_model noBorder">
                <h4>估值记录</h4>
                <el-table
                    border
                    :data="list5"
                    class="tableBorder"
                    style="width: 100%;">
                     <el-table-column
                    prop="num"
                    align="left"
                    label="序号"
                    min-width="6%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectCode"
                    align="left"
                    label="上传企业"
                    min-width="18%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectName"
                    align="left"
                    min-width="8%"
                    label="评估时间">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectHours"
                    align="left"
                    min-width="8%"
                    label="新车报价">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="上牌时间">
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="成交价">
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="行驶里程">
                    </el-table-column>
                     <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="成交日期">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="城市">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="类别">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="数据来源">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleFixProjectPrice"
                    align="left"
                    min-width="8%"
                    label="操作">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <modal
            :title="'保险详细信息'"
            :width="720"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_content">
                <el-row>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">上传企业：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">投保时间：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">投保类型：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">交强险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">车损险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">第三者责任险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">不计免赔：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">玻璃险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">车上人员责任险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">全车盗抢险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">车身划痕险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">无过责任险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">自燃损失险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">涉水险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="model_item">
                            <label for="">其他险：</label>
                            <span>{{aaaaaaa}}</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import { setNum } from '@/utils/utils.js'
import Modal from '@/components/Modal'
import { carBodyColor } from '@/utils/type.js'
export default {
    name: 'vehicleConditionReport',
    data () {
        return {
            aaaaaaa: '',
            carBodyColor,
            showAlert: false,
            // vehicleFixParts: [],
            // vehicleFixProject: [],
            // vehicleFixOtherfee: [],
            // vehicleFixInfo: {},
            list: [],
            list1: [],
            list2: [],
            list3: [],
            list4: [],
            list5: [],
            vehicleInfo: {},
            vehicleOwnerInfo: {},
            loading: false
        }
    },
    components: {
        Modal
    },
    filters: {
        fixTypeFilter (val) {
            if (val === '01') {
                return '零件修理'
            }
            if (val === '02') {
                return '汽车小修'
            }
            if (val === '03') {
                return '总成修理'
            }
            if (val === '04') {
                return '汽车大修'
            }
            if (val === '05') {
                return '日常维护'
            }
            if (val === '06') {
                return '一级维护'
            }
            if (val === '07') {
                return '二级维护'
            }
            return val
        }
    },
    created () {
        this.loading = true
        this.$get(`vehicle/condition/${this.$route.query.id}`).then(res => {
            this.loading = false
            if (!res.data) return
            this.vehicleInfo = res.data.vehicleInfo || {}
            // this.list3 = this.$setNum(res.data.insuranceDatas || [], 1, 999)
            this.vehicleOwnerInfo = res.data.vehicleOwnerInfo || {}
        }).catch(e => {
            this.loading = false
        })
        this.$post('inspect/find?page=1&size=99', { vehicleId: this.$route.query.id })
            .then(res => {
                if (res && res.code === 0) {
                    this.list2 = this.$setNum(res.data, 1, 999)
                }
            }).catch(() => {
            })
        this.$post('repair/find?page=1&size=99', { vehicleId: this.$route.query.id })
            .then(res => {
                if (res && res.code === 0) {
                    this.list1 = this.$setNum(res.data, 1, 999)
                }
            }).catch(() => {
            })
        this.$post('riskRecord/lists?page=1&size=99', {})
            .then(res => {
                if (res && res.code === 0) {
                    this.list3 = this.$setNum(res.data, 1, 999)
                }
            }).catch(() => {
            })
    },
    methods: {
        // 关闭页面
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/carData'
            })
        },
        goDetail1 (id) {
            this.$router.push(`/maintenanceDataDetail?id=${id}&sourcePage=${this.$route.query.id}`)
        },
        goDetail2 (id) {
            this.$router.push(`/detectionDataDetail?id=${id}&sourcePage=${this.$route.query.id}`)
        },
        goDetail4 (id) {
            this.showAlert = true
        },
        alertConfirm () {
            this.showAlert = false
        },
        alertCancel () {
            this.showAlert = false
        }
    }
}
</script>
<style lang="less" scoped>
    .detail_content {
        .model_item {
            margin-bottom: 10px;
        }
    }
</style>

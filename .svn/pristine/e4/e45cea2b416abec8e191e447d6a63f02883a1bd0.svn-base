<!-- 权限管理 -->
<template>
    <div class="operatingVehicleDetail">
        <el-button class="goBack" @click="$router.push('/operatingVehicleArchives')">返回</el-button>
        <el-tabs v-model="activeName" class="tab_group" type="card" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="tab1">
                <div class="tab1 inner">
                    <h4 style="padding-top:10px;">车辆号码信息</h4>
                    <table class="detailTable" width="100%">
                        <tr>
                            <td >序列</td>
                            <td>车牌号码</td>
                            <td >颜色</td>
                            <td>注册(变更)日期</td>
                            <td rowspan="99" >车辆照片</td>
                            <td rowspan="99" style="min-width:50px">
                                <img :src="info.technologyInfo.vehicleTechnologyVehiclepic" @click="$lookImg(info.technologyInfo.vehicleTechnologyVehiclepic)"  width="102" height="102">
                            </td>
                        </tr>
                        <tr style="color:#252631" v-for="(item, index) in info.plateNoInfo" :key="item.id">
                            <td>{{index===0?'首次核发':('牌号变更'+index)}}</td>
                            <td>{{item.vehicleLicensePlate}}</td>
                            <td>{{item.licenseColor}}</td>
                            <td>{{item.vehicleLicensePlateDate|filterTime('yyyy-mm-dd')}}</td>
                        </tr>
                        <tr style="color:#252631" v-if="!info.plateNoInfo.length">
                            <td colspan="4">暂无数据</td>
                        </tr>
                        <!-- <tr style="color:#252631">
                            <td>牌号变更</td>
                            <td>粤AAAAAA</td>
                            <td>蓝色</td>
                            <td>2018-2-1</td>
                        </tr> -->
                    </table>
                    <h4>道路运输证信息</h4>
                    <table class="detailTable" width="100%">
                        <tr>
                            <td>序列</td>
                            <td>业户名称</td>
                            <td>道路运输证号</td>
                            <td>经营范围</td>
                            <td>发证日期</td>
                        </tr>
                        <tr style="color:#252631" v-for="(item,index) in info.certificateInfo" :key="item.id">
                            <td>{{index===0?'首次核发':('名称变更'+index)}}</td>
                            <td>{{item.businessName}}</td>
                            <td>{{item.certificateNo}}</td>
                            <td>{{item.scope}}</td>
                            <td>{{item.date|filterTime('yyyy-mm-dd')}}</td>
                        </tr>
                        <tr style="color:#252631" v-if="!info.certificateInfo.length">
                            <td colspan="5">暂无数据</td>
                        </tr>
                        <!-- <tr style="color:#252631">
                            <td>名称变更</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                        </tr> -->
                    </table>
                    <h4>车辆配置及主要技术参数信息</h4>
                    <table class="detailTable" width="100%">
                        <tr>
                            <td class="label" width="150">车辆类别：</td>
                            <td class="value">{{info.technologyInfo.a}}</td>
                            <td class="label" width="150">车辆类型：</td>
                            <td class="value">{{info.technologyInfo.vehicleType}}</td>
                            <td class="label" width="150">品牌车系：</td>
                            <td class="value">{{info.technologyInfo.vehicleBrand}}-{{info.technologyInfo.vehicleSeries}}</td>
                            <td class="label" width="150">车辆型号：</td>
                            <td class="value">{{info.technologyInfo.vehicleModel}}</td>
                        </tr>
                        <tr>
                            <td class="label">制造厂名：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyManufactureName}}</td>
                            <td class="label">出厂日期：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyProductDate|filterTime('yyyy-mm-dd')}}</td>
                            <td class="label">国产/进口：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyDomesticImport}}</td>
                            <td class="label">VIN(或车架)号：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyVin}}</td>
                        </tr>
                        <tr>
                            <td class="label">底盘型号：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyChassisModel}}</td>
                            <td class="label">车辆外廓尺寸：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyDimensions}}</td>
                            <td class="label">货箱内尺寸或容积：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyContainer}}</td>
                            <td class="label">总质量：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyTotalMass}}</td>
                        </tr>
                        <tr>
                            <td class="label">整备质量：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyUnladenMass}}</td>
                            <td class="label">准牵引质量：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyDraw}}</td>
                            <td class="label">核定载质量：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyApprovedLoad}}</td>
                            <td class="label">核定载客：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyApprovedCarry}}</td>
                        </tr>
                        <tr>
                            <td class="label">发动机型号：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyEngineType}}</td>
                            <td class="label">发动机号码：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyEngineNo}}</td>
                            <td class="label">发动机排量：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyEngineDisplacement}}</td>
                            <td class="label">发动机净功率：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyEnginePower}}</td>
                        </tr>
                        <tr>
                            <td class="label">排放标准：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyEmissionStandard}}</td>
                            <td class="label">电池类型：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyBatteryType}}</td>
                            <td class="label">驱动电机型号：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyDrivingMotor}}</td>
                            <td class="label">电机功率：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyMotorPower}}</td>
                        </tr>
                        <tr>
                            <td class="label">动力类型：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyPowerType}}</td>
                            <td class="label">车轴数量：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyAxleNum}}</td>
                            <td class="label">轴距：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyWheelbase}}</td>
                            <td class="label">轮胎数/规格：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyTiresSpecifications}}</td>
                        </tr>
                        <tr>
                            <td class="label">行车制动方式：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyBrakingMode}}</td>
                            <td class="label">制动器形式：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyBrakeType}}</td>
                            <td class="label">制动防抱死系统(ABS)：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyAbs}}</td>
                            <td class="label">变速器形式：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyTransmission}}</td>
                        </tr>
                        <tr>
                            <td class="label">缓速器：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyRetarder}}</td>
                            <td class="label">空调系统：</td>
                            <td class="value">{{info.technologyInfo.vehicleTechnologyAirConditioner}}</td>
                            <td class="label">卫星定位装置：</td>
                            <td class="value" colspan="3">{{info.technologyInfo.vehicleTechnologySatellitePositioning}}</td>
                        </tr>
                        <tr>
                            <td class="label">备注：</td>
                            <td class="value" colspan="7">{{info.technologyInfo.a}}</td>
                        </tr>
                    </table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="维护/维修记录" name="tab2">
                <div class="tab2 inner plr0">
                    <el-table
                        :data="list1"
                        border
                        style="width: 100%;minHeight:600px;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        width="60">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixCategory"
                        align="left"
                        label="维护/维修类别">
                        </el-table-column>
                        <!-- <el-table-column
                        prop="remark"
                        align="left"
                        label="故障描述">
                        </el-table-column> -->
                        <el-table-column
                        prop="vehicleFixUnit"
                        align="left"
                        label="维修单位">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixBalanceNumber"
                        align="left"
                        label="合格证编号">
                        </el-table-column>
                        <!-- <el-table-column
                        prop="remark"
                        align="left"
                        label="送修日期">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="送修里程">
                        </el-table-column> -->
                        <el-table-column
                        prop="vehicleFixDate"
                        align="left"
                        label="维护日期">
                        <template slot-scope="scope">
                            <span>{{scope.row.vehicleFixDate|filterStrTime}}</span>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="检测评定记录" name="tab5">
                <div class="tab4 inner plr0">
                    <el-table
                        :data="list3"
                        border
                        style="width: 100%;minHeight:600px;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        width="60">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleDetectioneValuateCategory"
                        align="left"
                        label="检测/评定类型">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleDetectioneValuateUnit"
                        align="left"
                        label="检测/评定单位">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleDetectioneValuateDate"
                        align="left"
                        label="检测/评定日期">
                            <template slot-scope="scope">
                                <span>{{scope.row.vehicleDetectioneValuateDate|filterTime('yyyy-mm-dd')}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        prop="vehicleDetectioneValuateValiditydate"
                        align="left"
                        label="检测有效期">
                            <template slot-scope="scope">
                                <span>{{scope.row.vehicleDetectioneValuateValiditydate|filterTime('yyyy-mm-dd')}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        prop="vehicleDetectioneValuateReportNumber"
                        align="left"
                        label="报告编号">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleDetectioneValuateBak"
                        align="left"
                        label="备注">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="配件更换记录" name="tab3">
                <div class="tab3 inner plr0">
                    <el-table
                        :data="list2"
                        border
                        style="width: 100%;minHeight:600px;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        width="60">
                        </el-table-column>
                        <el-table-column
                        prop="vehiclePartsName"
                        align="left"
                        label="配件名称">
                        </el-table-column>
                        <el-table-column
                        prop="vehiclePartsNumber"
                        align="left"
                        label="配件编码">
                        </el-table-column>
                        <el-table-column
                        prop="vehiclePartsNum"
                        align="left"
                        label="数量">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixUnit"
                        align="left"
                        label="维修单位">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixBalanceNumber"
                        align="left"
                        label="结算编号">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleChangePartsDate"
                        align="left"
                        label="更换日期">
                        <template slot-scope="scope">
                            <span>{{scope.row.vehicleChangePartsDate|filterTime('yyyy-mm-dd')}}</span>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="行驶里程记录" name="tab6">
                <div class="tab4 inner plr0">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%;minHeight:600px;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        width="60">
                        </el-table-column>
                        <el-table-column
                        prop="roleName"
                        align="left"
                        label="登记日期">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="本次登记行驶里程(Km)">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="累计行驶里程(Km)">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="机损事故记录" name="tab7">
                <div class="tab4 inner plr0">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%;minHeight:600px;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        width="60">
                        </el-table-column>
                        <el-table-column
                        prop="roleName"
                        align="left"
                        label="事故时间">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="事故地点">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="事故性质">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="车辆损坏情况">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="理赔金额(元)">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'operatingVehicleDetail',
    data () {
        return {
            activeName: 'tab1',
            list3: [],
            list1: [],
            list2: [],
            info: {
                certificateInfo: '',
                plateNoInfo: '',
                technologyInfo: ''
            },
            tableData: []
        }
    },
    components: {
    },
    created () {
        this.$get(`vehicle/y/info?vehicleId=${this.$route.query.id}&type=info`).then(res => {
            if (res.code === 0) {
                this.info = res.data
            }
        })
        this.$get(`vehicle/y/info?vehicleId=${this.$route.query.id}&type=fixInfo`).then(res => {
            if (res.code === 0) {
                this.list1 = this.$setNum(res.data, 1, 99)
            }
        })
        this.$get(`vehicle/y/info?vehicleId=${this.$route.query.id}&type=parts`).then(res => {
            if (res.code === 0) {
                this.list2 = this.$setNum(res.data, 1, 99)
            }
        })
        this.$get(`vehicle/y/info?vehicleId=${this.$route.query.id}&type=check`).then(res => {
            if (res.code === 0) {
                this.list3 = this.$setNum(res.data, 1, 99)
            }
        })
    },
    methods: {
        handleClick () {
            console.log(1)
        }
    }
}
</script>

<style lang='less' scoped>
.operatingVehicleDetail {
    position: relative;
    padding: 20px;
    .tab_group {
        margin-top: 10px;
    }
    .inner {
        padding: 20px;
        padding-top: 0;
    }
    .img_group {
        .label {
            float: left;
            line-height: 120px;
        }
        .value {
            float: left;
            margin-left: 10px;
            img {
                width: 102px;
                height: 102px;
                padding: 9px;
                border: 1px solid #eeeeee;
                border-radius: 4px;
                margin-right: 35px;
            }
        }
    }
    .tab1 {
        h4 {
            font-size: 14px;
            // line-height: 50px;
            padding: 20px 0 10px;
            color: #252631;
        }
        .tab1_item {
            width: 33%;
            float: left;
            line-height: 40px;
            .value {
                color: #666666;
                margin-left: 5px;
            }
        }
    }
}
</style>
<style lang='less'>
.operatingVehicleDetail {
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
    .goBack {
        position: absolute;
        right: 20px;
        height: 36px;
        line-height: 1;
        width: 78px;
        z-index: 3;
        padding: 0;
    }
}
</style>

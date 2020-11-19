<!-- 权限管理 -->
<template>
    <div class="privateVehicleDetail">
        <el-button class="goBack" @click="$router.push('/privateVehicleArchives')">返回</el-button>
        <el-tabs v-model="activeName" class="tab_group" type="card" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="tab1">
                <div class="tab1 inner">
                    <h4 style="padding-top:10px;">车辆信息</h4>
                    <div class="tab1_group clearfix pl20">
                        <div class="tab1_item">
                            <span class="label">车牌号码：</span>
                            <span class="value">{{info.vehicleLicensePlate}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">车牌颜色：</span>
                            <span class="value">{{info.licenseColor}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">VIN码：</span>
                            <span class="value">{{info.vehicleVin}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">车辆类型：</span>
                            <span class="value">{{info.vehicleTypeName}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">使用性质：</span>
                            <span class="value">{{info.vehicleUseText}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">车主：</span>
                            <span class="value">{{info.vehicleOwnerName}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">燃料类别：</span>
                            <span class="value">{{info.vehicleFuelCategoryName}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">发动机号码：</span>
                            <span class="value">{{info.vehicleEngineNumber}}</span>
                        </div>
                        <!-- <div class="tab1_item">
                            <span class="label">品牌车系：</span>
                            <span class="value">{{info.brandAndSeries}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">车辆型号：</span>
                            <span class="value">{{info.vehicleModelName}}</span>
                        </div> -->
                        <!-- <div class="tab1_item">
                            <span class="label">送修人：</span>
                            <span class="value">XXXXXXX</span>
                        </div> -->
                        <div class="tab1_item">
                            <span class="label">联系电话：</span>
                            <span class="value">{{info.ownerMobile}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">行驶证登记日期：</span>
                            <span class="value">{{info.recordDate|filterTime('yyyy-mm-dd')}}</span>
                        </div>
                        <div class="tab1_item">
                            <span class="label">行驶证发证日期：</span>
                            <span class="value">{{info.issueDate|filterTime('yyyy-mm-dd')}}</span>
                        </div>
                    </div>
                    <div class="img_group clearfix" v-if="info.imgs">
                        <span class="label">车辆照片：</span>
                        <div class="value">
                            <!-- <img v-for="pic in info.imgs" :key="pic.id" @click="$lookImg(pic)" :src="pic" alt=""> -->
                            <img  @click="$lookImg(info.imgs)" :src="info.imgs">
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="维护/修理记录" name="tab2">
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
                        label="维护/修理类别">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixDescription"
                        align="left"
                        label="故障描述">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixUnit"
                        align="left"
                        label="承修单位">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixCertificateNumber"
                        align="left"
                        label="竣工合格证单号">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixDate"
                        align="left"
                        label="送修日期">
                        <template slot-scope="scope">
                            <span>{{scope.row.vehicleFixDate-0|filterTime('yyyy-mm-dd')}}</span>
                        </template>
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixMileage"
                        align="left"
                        label="送修里程">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixBalanceDate"
                        align="left"
                        label="结算日期">
                        <template slot-scope="scope">
                            <span>{{scope.row.vehicleFixBalanceDate|filterTime('yyyy-mm-dd')}}</span>
                        </template>
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
                        prop="vehicleFixPartsName"
                        align="left"
                        label="配件名称">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixPartsNumber"
                        align="left"
                        label="配件编码">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleFixPartsNum"
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
                        prop="vehicleFixPartsDate"
                        align="left"
                        label="更换日期">
                        <template slot-scope="scope">
                            <span>{{scope.row.vehicleFixPartsDate|filterTime('yyyy-mm-dd')}}</span>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="行驶里程记录" name="tab4">
                <div class="tab4 inner">
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
                        label="本次登记行驶里程">
                        </el-table-column>
                        <el-table-column
                        prop="remark"
                        align="left"
                        label="累计行驶里程(Km)">
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane> -->
        </el-tabs>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'privateVehicleDetail',
    data () {
        return {
            activeName: 'tab1',
            info: {}, // 基础信息
            list1: [], // 维修记录
            list2: [], // 配件记录
            tableData: [{}]
        }
    },
    components: {
    },
    created () {
        this.$get(`/vehicle/p/info?vehicleId=${this.$route.query.id}&type=info`).then(res => {
            if (res.code === 0) {
                this.info = res.data
            }
        })
        this.$get(`vehicle/p/info?vehicleId=${this.$route.query.id}&type=fixInfo`).then(res => {
            if (res.code === 0) {
                this.list1 = this.$setNum(res.data, 1, 999)
            }
        })
        this.$get(`vehicle/p/info?vehicleId=${this.$route.query.id}&type=parts`).then(res => {
            if (res.code === 0) {
                this.list2 = this.$setNum(res.data, 1, 999)
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
.privateVehicleDetail {
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
            color: #252631;
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
            .label {
                color: #252631;
            }
            .value {
                color: #666666;
                margin-left: 5px;
            }
        }
    }
}
</style>
<style lang='less'>
.privateVehicleDetail {
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

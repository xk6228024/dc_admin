<template>
    <el-dialog
        title="机动车维修竣工出厂合格证（电子）"
        :visible.sync="value"
        :close-on-click-modal="false"
        :before-close="() => $emit('input', false)"
        width="1060px"
        top="15vh"
        id="certificate">
        <el-row>
            <el-col :span="8">
                <div class="item">
                    <div class="item-title tac">
                        机动车维修竣工出厂合格证<br />（电子）
                    </div>
                    <div class="logo">
                        <img src="@/assets/images/certificate-logo.png" alt="">
                    </div>
                    <div class="main-title tac">合<br>格<br>证</div>
                    <div class="certificate-num tac">{{data.vehicleFixCertificateNumber}}</div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="item mid">
                    <div class="item-title">
                        机动车维修竣工出厂合格证（电子）
                    </div>
                    <div class="certificate-num">{{data.vehicleFixCertificateNumber}}</div>
                    <div class="tips bold">该车按维修合同维修，经检验合格，准予出厂。</div>
                    <div class="text-item">
                        <div class="label">托修方</div>
                        <div class="value">{{data.vehicleFixRepairName}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">车牌号码</div>
                        <div class="value">{{data.vehicleLicensePlate}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">车型</div>
                        <div class="value">{{data.vehicleTypeName}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">发动机型号</div>
                        <div class="value">{{data.vehicleEngineNumber}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">底盘(车身)号</div>
                        <div class="value">{{data.vehicleTechnologyChassisModel}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">维修类别</div>
                        <div class="value">{{data.vehicleFixCategory}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">维修合同编号</div>
                        <div class="value"></div>
                    </div>
                    <div class="text-item">
                        <div class="label">出厂里程表示值</div>
                        <div class="value">{{data.vehicleFixFactoryMileage}}km</div>
                    </div>
                    <div class="text-item">
                        <div class="label">进厂日期</div>
                        <div class="value">{{data.vehicleFixDate | filterDate}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">接车日期</div>
                        <div class="value">{{data.vehicleFixDate | filterDate}}</div>
                    </div>
                    <div class="text-item">
                        <div class="label">出厂日期</div>
                        <div class="value">{{data.vehicleFixFactoryDate | filterTime('yyyy-mm-dd')}}</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="item right noborder">
                    <div class="item-title">
                        机动车维修竣工出厂合格证（电子）
                    </div>
                    <div class="certificate-num">{{data.vehicleFixCertificateNumber}}</div>
                    <div class="tips">该车按维修合同进行维修，本厂对维修竣工的车辆实行质量保证，质量保证期为车辆行驶<span class="quality">{{data.qaVehicleMileage}}</span>公里或者<span class="quality">{{data.qaVehicleUseDay}}</span>日。在托修单位严格执行走合同规定、合理使用、 正常维护的情况下，出现的维修质量问题，凭此卡随竣工出厂合格证，由本厂负责包修，免返修工料费和工时费，在原维修类别期限内修竣交托修方。</div>
                    <div class="back-title">返修情况记录</div>
                    <div class="text-item">
                        <div class="label">次数</div>
                        <div class="value"></div>
                    </div>
                    <div class="text-item">
                        <div class="label">返修项目</div>
                        <div class="value"></div>
                    </div>
                    <div class="text-item">
                        <div class="label">返修日期</div>
                        <div class="value"></div>
                    </div>
                    <div class="text-item">
                        <div class="label">修竣日期</div>
                        <div class="value"></div>
                    </div>
                    <div class="text-item">
                        <div class="label">送修人</div>
                        <div class="value"></div>
                    </div>
                    <div class="text-item">
                        <div class="label">质检员</div>
                        <div class="value"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="$emit('input', false)">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { filterStrTime } from '@/utils/filterTime.js'
export default {
    name: 'certificate',
    props: ['value', 'data'],
    data () {
        return {
        }
    },
    filters: {
        filterDate (val) {
            if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(val)) {
                return val.replace(/\s.+$/, '')
            }
            if (/^\d{14}$/.test(val)) {
                return filterStrTime(val.slice(0, 8))
            }
            if (/^\d{7,8}$/.test(val)) {
                return filterStrTime(val)
            }
            return val
        }
    }
}
</script>

<style lang='less' scoped>
#certificate {
    .item {
        padding: 8px 20px;
        border-right: 1px dashed #ccc;
        font-size: 14px;
        color: #333;
        &.noborder {
            border-right: none;
        }
        .item-title {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            line-height:30px;
        }
        .logo {
            text-align: center;
            margin-top: 48px;
            margin-bottom: 20px
        }
        .main-title {
            font-size: 34px;
            font-weight: bold;
            color: #333;
            margin-bottom: 28px;
            line-height: 58px;
        }
        .text-item {
            margin-bottom: 10px;
            overflow: auto;
            .label {
                float: left;
                width: 98px;
                text-align-last:justify;
                text-align:justify;
                text-justify:distribute-all-lines;
            }
            .value {
                margin-left: 114px;
                border-bottom: 1px solid #333;
                min-height: 19px;
            }
        }
    }
    .mid {
        .certificate-num {
            margin: 8px 0;
        }
        .tips {
            margin-bottom: 32px;
        }
    }
    .right {
        .certificate-num {
            margin: 7px 0;
        }
        .tips {
            line-height: 24px;
            .quality {
                padding: 0 16px;
                border-bottom: 1px solid #333;
            }
        }
        .back-title {
            margin: 12px 0 6px 0;
            font-weight: bold;
            font-size: 15px;
        }
    }
}
</style>

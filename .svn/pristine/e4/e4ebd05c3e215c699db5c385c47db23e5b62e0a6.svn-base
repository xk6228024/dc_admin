<template>
    <div class="testReport">
        <div class="content">
            <!-- <tool-bar title="在用车检验（测）报告">
                <el-button class="submit_btn notice-btn" icon="el-icon-tickets" type="primary" @click="print">打印</el-button>
                <button class="back_btn" @click="$router.go(-1)">返回</button>
            </tool-bar> -->
            <div class="test-report-title">
                在用车检验（测）报告
            </div>
            <!-- 汽车 -->
            <div v-if="qiyou" class="wrap">
                <div class="table-alert">
                    <div class="head">
                        <span>报告编号: {{ info.testno }}</span>
                        <span>检验日期: {{ info.jyrq | formatTime }}</span>
                        <span>计量认证证号: </span>
                    </div>
                    <table class="table-wrap" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                        <tr>
                            <td class="s-title br" colspan="6">1 基本信息</td>
                        </tr>
                        <tr>
                            <td>检验机构名称：</td>
                            <td class="br" colspan="5">{{ info.qiymch }}</td>
                        </tr>
                        <tr>
                            <td>号牌号码</td>
                            <td>{{ info.license }}</td>
                            <td>燃料类型</td>
                            <td>{{ info.fueltype | filterCommonA(powerType) }}</td>
                            <td>基准质量（kg）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>车辆识别代号（VIN）</td>
                            <td>{{ info.vin }}</td>
                            <td>最大总质量（kg）</td>
                            <td></td>
                            <td>发动机号码</td>
                            <td class="br">{{ info.engineno }}</td>
                        </tr>
                        <tr>
                            <td>发动机型号</td>
                            <td></td>
                            <td>发动机排量（L）</td>
                            <td></td>
                            <td>气缸数</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>驱动电机型号</td>
                            <td></td>
                            <td>储能装置型号</td>
                            <td></td>
                            <td>电池容量</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>催化转化器型号</td>
                            <td></td>
                            <td>额定转速（r/min）</td>
                            <td></td>
                            <td>座位数（人）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>车辆型号</td>
                            <td>{{ info.vehiclemodel }}</td>
                            <td>燃油型式</td>
                            <td></td>
                            <td>驱动方式</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>累计行驶里程（km）</td>
                            <td></td>
                            <td>变速器型式</td>
                            <td></td>
                            <td>OBD</td>
                            <td class="br">{{ info.obdjg === '1' ? '有' : '无' }}</td>
                        </tr>
                        <tr>
                            <td>初次登记日期</td>
                            <td>{{ info.registerdate }}</td>
                            <td>检测方法</td>
                            <td>{{ info.testtype | filterCommon(testType) }}</td>
                            <td>车牌颜色</td>
                            <td class="br">{{ info.licensetype | filterCommon(plateColor) }}</td>
                        </tr>
                        <tr>
                            <td>车主姓名（单位）</td>
                            <td colspan="3"></td>
                            <td>联系电话（手机）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>品牌/型号</td>
                            <td colspan="3"></td>
                            <td>使用性质</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>车辆生产企业</td>
                            <td colspan="3"></td>
                            <td>车辆出厂日期</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">环境参数</td>
                        </tr>
                        <tr>
                            <td>环境温度（℃）</td>
                            <td></td>
                            <td>大气压（kPa）</td>
                            <td></td>
                            <td>相对湿度（%）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">检测设备信息</td>
                        </tr>
                        <tr>
                            <td>分析仪生产企业</td>
                            <td colspan="2"></td>
                            <td>分析仪检定日期</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td>分析仪名称</td>
                            <td class="br" colspan="5"></td>
                        </tr>
                        <tr>
                            <td>底盘测功机生产企业</td>
                            <td colspan="2"></td>
                            <td>底盘测功机型号</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td>OBD诊断仪生产企业</td>
                            <td colspan="2"></td>
                            <td>OBD诊断仪型号</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">2 外观检验</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align: center;">检查项目</td>
                            <td style="text-align: center;">是</td>
                            <td style="text-align: center;">否</td>
                            <td class="br" style="text-align: center;">备注</td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆机械状况是否良好</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">排气污染控制装置是否齐全，正常</td>
                            <td></td>
                            <td></td>
                            <td class="br">否决项目</td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆是否存在烧机油或者严重冒黑烟现象</td>
                            <td></td>
                            <td></td>
                            <td class="br">否决项目</td>
                        </tr>
                        <tr>
                            <td colspan="3">曲轴箱通风系统是否正常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">燃油蒸发控制系统是否正常</td>
                            <td></td>
                            <td></td>
                            <td class="br">否决项目</td>
                        </tr>
                        <tr>
                            <td colspan="3">车上仪表工作是否正常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">有无可能影响安全或引起测试偏差的机械的故障</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆进、排气系统是否有任何泄漏</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆的发动机、变速箱和冷却系统等有无明显的液体渗漏</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否带OBD系统</td>
                            <td>{{ info.obdjg === '1' ? '是' : '' }}</td>
                            <td>{{ info.obdjg !== '1' ? '否' : '' }}</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">轮胎气压是否正常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">轮胎是否干燥、清洁</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否关闭车上空调、暖风等附属设备</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否已经中断车辆上可能影响测试正常进行的功能，如 ARS、ESP、EPC牵引力控制或自动制动系统等</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆油箱和油品是否异常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否适合工况法检测</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="two-col">
                                <div class="clearfix">
                                    <p class="fl s-title p1" style="width: 50%;margin: 0px;text-algin: left;">外观检验结果</p>
                                    <p class="fr" style="width: 50%;margin: 0px;text-algin: left;">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </p>
                                </div>
                            </td>
                            <td class="br" colspan="3">检验员：</td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">3 OBD检查</td>
                        </tr>
                        <tr>
                            <td rowspan="5">OBD故障指示器</td>
                            <td colspan="2">OBD系统故障指示器</td>
                            <td class="br" colspan="3">
                                <input type="checkbox" disabled :checked="info.zhishdzt === '1'"/><span class="cb-text">合格</span>
                                <input type="checkbox" disabled :checked="info.zhishdzt !== '1'"/><span class="cb-text">不合格</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" colspan="2">通信</td>
                            <td class="br" colspan="3">
                                <input type="checkbox" disabled :checked="info.txzt === '1'"/><span class="cb-text">通讯成功</span>
                                <input type="checkbox" disabled :checked="info.txzt !== '1'"/><span class="cb-text">通讯不成功</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="br" colspan="3">
                                通讯不成功的（填写以下原因）:
                                <input type="checkbox" disabled :checked="info.txyy === '1'"/>接口损坏
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '2'"/>找不到接口
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '3'"/>连接后不能通信
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">OBD系统故障指示器报警</td>
                            <td class="br" colspan="3">
                                <input type="checkbox"/><span class="cb-text">有</span>
                                <input type="checkbox"/><span class="cb-text">无</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">故障代码及故障信息（若故障指示器报警）</td>
                            <td class="br" colspan="3">{{ info.gzhdmxinx }}</td>
                        </tr>
                        <tr>
                            <td rowspan="2">就绪状态</td>
                            <td colspan="2" rowspan="2">就绪状态未完成项目</td>
                            <td class="br" colspan="3">
                                <input type="checkbox" disabled :checked="info.jxzt === '1'"/><span class="cb-text">有</span>
                                <input type="checkbox" disabled :checked="info.jxzt !== '1'"/><span class="cb-text">无</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="br" colspan="3">
                                如有就绪未完成的，填写以下项目<br/>
                                <input type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('1') !== -1"/>催化器
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('2') !== -1"/>氧传感器
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('3') !== -1"/>氧传感器加热器
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('4') !== -1"/>废气再循环(EGR)/可变气门VVT
                            </td>
                        </tr>
                        <tr>
                            <td>其他信息</td>
                            <td class="br" colspan="5">MIL灯点亮后的行驶里程（km）：{{ info.xshlch }}</td>
                        </tr>
                        <tr>
                            <td rowspan="3">CAL ID / CVN 信息</td>
                            <td>发动机控制单元</td>
                            <td>CAL ID</td>
                            <td>{{ info.fdjcalid }}</td>
                            <td>CVN</td>
                            <td class="br">{{ info.fdjcvn }}</td>
                        </tr>
                        <tr>
                            <td>后处理控制单元（如适用）</td>
                            <td>CAL ID</td>
                            <td>{{ info.hchlcalid }}</td>
                            <td>CVN</td>
                            <td class="br">{{ info.hchlcvn }}</td>
                        </tr>
                        <tr>
                            <td>其他控制单元（如适用）</td>
                            <td>CAL ID</td>
                            <td>{{ info.qtcalid }}</td>
                            <td>CVN</td>
                            <td class="br">{{ info.qtcvn }}</td>
                        </tr>
                        <tr>
                            <td class="s-title">OBD检查结果</td>
                            <td colspan="2">
                                <input type="checkbox" disabled :checked="info.obdjg === '1'"/>合格
                                <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.obdjg !== '1'"/>不合格
                            </td>
                            <td class="br" colspan="3">检验员：</td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">4 排气污染物检测</td>
                        </tr>
                        <tr>
                            <td class="s-title">检测方法</td>
                            <td class="br" colspan="5">
                                <input type="checkbox" disabled :checked="info.testtype === '1'"/>双怠速
                                <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.testtype === '2'"/>稳态工况法
                                <input style="margin-left: 30px;" type="checkbox"/>简易瞬态工况法
                            </td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">检验结果内容</td>
                        </tr>
                        <tr>
                            <td>排气污染物检测</td>
                            <td class="br" colspan="5" style="padding: 0px;">
                                <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                    <tr>
                                        <td colspan="6" class="ss-title ntb nlb nrb">双怠速</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" class="nlb"></td>
                                        <td rowspan="2">过量空气系数（λ）</td>
                                        <td colspan="2">低怠速</td>
                                        <td colspan="2">高怠速</td>
                                    </tr>
                                    <tr>
                                        <td>CO(%)</td>
                                        <td>HC(10⁻⁶)</td>
                                        <td>CO(%)</td>
                                        <td>HC(10⁻⁶)</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">实测值</td>
                                        <td>{{ info.lambda }}</td>
                                        <td>{{ info.lscoresult }}</td>
                                        <td>{{ info.lshcresult }}</td>
                                        <td>{{ info.hscoresult }}</td>
                                        <td>{{ info.hshcresult }}</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb nbb">限值</td>
                                        <td class="nbb">{{ `${info.lambdadown || ''}~${info.lambdaup || ''}` }}</td>
                                        <td class="nbb">{{ info.lscolimit }}</td>
                                        <td class="nbb">{{ info.lshclimit }}</td>
                                        <td class="nbb">{{ info.hscolimit }}</td>
                                        <td class="nbb">{{ info.hshclimit }}</td>
                                    </tr>
                                    <tr>
                                        <td class="ss-title nlb" colspan="6">简易瞬态工况法</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">&nbsp;</td>
                                        <td class="nrb nbb" rowspan="3" colspan="5" style="padding: 0px;">
                                            <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                                <tr>
                                                    <td class="ntb nlb">HC(g/km)</td>
                                                    <td class="ntb">CO(g/km)</td>
                                                    <td class="ntb nrb">NOx(g/km)</td>
                                                </tr>
                                                <tr>
                                                    <td class="nlb">&nbsp;</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="nlb nbb">&nbsp;</td>
                                                    <td class="nbb"></td>
                                                    <td class="nbb"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">实测值</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb nbb">限值</td>
                                    </tr>
                                    <tr>
                                        <td class="ss-title nlb" colspan="6">稳态工况法</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">&nbsp;</td>
                                        <td rowspan="4" colspan="5" style="padding: 0px;">
                                            <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                                <tr>
                                                    <td class="ntb nlb" colspan="3">ASM5025</td>
                                                    <td class="ntb nrb" colspan="3">ASM2540</td>
                                                </tr>
                                                <tr>
                                                    <td class="nlb">HC(10⁻⁶)</td>
                                                    <td>CO(%)</td>
                                                    <td>NO(10⁻⁶)</td>
                                                    <td>HC(10⁻⁶)</td>
                                                    <td>CO(%)</td>
                                                    <td class="nrb">NO(10⁻⁶)</td>
                                                </tr>
                                                <tr>
                                                    <td class="nlb">&nbsp;{{ info.hc5025 }}</td>
                                                    <td>{{ info.co5025 }}</td>
                                                    <td>{{ info.no5025 }}</td>
                                                    <td>{{ info.hc2540 }}</td>
                                                    <td>{{ info.co2540 }}</td>
                                                    <td>{{ info.no2540 }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="nlb nbb">&nbsp;{{ info.hc5025limit }}</td>
                                                    <td class="nbb">{{ info.co5025limit }}</td>
                                                    <td class="nbb">{{ info.no5025limit }}</td>
                                                    <td class="nbb">{{ info.hc2540limit }}</td>
                                                    <td class="nbb">{{ info.co2540limit }}</td>
                                                    <td class="nbb">{{ info.no2540limit }}</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">实测值</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">限值</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb" style="text-align: left;">结果判定</td>
                                        <td colspan="5" style="text-align: left;">
                                            <input type="checkbox"/>合格
                                            <input style="margin-left: 30px;" type="checkbox"/>不合格
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="nlb nbb" colspan="6" style="text-align: left;">检验员：</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>燃油蒸发测试</td>
                            <td class="br" colspan="5" style="padding: 0px;">
                                <table class="table-wrap nesting-table2" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                    <tr>
                                        <td class="ntb nlb">加油口测试</td>
                                        <td class="ntb" colspan="2">
                                            <input type="checkbox"/>合格
                                            <input style="margin-left: 30px;" type="checkbox"/>不合格
                                        </td>
                                        <td class="ntb" >油箱盖测试</td>
                                        <td class="ntb" colspan="2">
                                            <input type="checkbox"/>合格
                                            <input style="margin-left: 30px;" type="checkbox"/>不合格
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">判定结果</td>
                                        <td colspan="5">
                                            <input type="checkbox"/>合格
                                            <input style="margin-left: 30px;" type="checkbox"/>不合格
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="nlb" colspan="6">检验员：</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="s-title">排气污染物检测结果</td>
                            <td class="br" colspan="5">
                                <input type="checkbox"/>合格
                                <input style="margin-left: 30px;" type="checkbox"/>不合格
                            </td>
                        </tr>
                        <tr>
                            <td class="s-title">授权签字人</td>
                            <td class="br" colspan="5"></td>
                        </tr>
                        <tr>
                            <td class="s-title">批准人</td>
                            <td colspan="2"></td>
                            <td>单位盖章</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="s-title br bb" colspan="6">注：依据标准《汽油车污染物排放限值及测量方法(双怠速法及简易工况法)》（GB18285-2018）</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 柴油 -->
            <div v-else class="wrap">
                <div class="table-alert">
                    <div class="head">
                        <span>报告编号: {{ info.testno }}</span>
                        <span>检验日期: {{ info.jyrq | formatTime }}</span>
                        <span>计量认证证号: </span>
                    </div>
                    <table class="table-wrap" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                        <tr>
                            <td class="s-title br" colspan="6">1 基本信息</td>
                        </tr>
                        <tr>
                            <td>检验机构名称：</td>
                            <td class="br" colspan="5">{{ info.qiymch }}</td>
                        </tr>
                        <tr>
                            <td>号牌号码</td>
                            <td>{{ info.license }}</td>
                            <td>燃料类型</td>
                            <td>{{ info.fueltype | filterCommonA(powerType) }}</td>
                            <td>基准质量（kg）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>车辆识别代号（VIN）</td>
                            <td>{{ info.vin }}</td>
                            <td>OBD</td>
                            <td>{{ info.obdjg === '1' ? '有' : '无' }}</td>
                            <td>发动机号码</td>
                            <td class="br">{{ info.engineno }}</td>
                        </tr>
                        <tr>
                            <td>储能装置型号</td>
                            <td></td>
                            <td>SCR</td>
                            <td></td>
                            <td>发动机排量（L）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>发动机额定功率（kw）</td>
                            <td></td>
                            <td>DPF</td>
                            <td></td>
                            <td>DPF型号</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>额定转速（r/min）</td>
                            <td></td>
                            <td>SCR型号</td>
                            <td></td>
                            <td>初次登记日期</td>
                            <td class="br">{{ info.registerdate }}</td>
                        </tr>
                        <tr>
                            <td>驱动电机型号</td>
                            <td></td>
                            <td>发动机型号</td>
                            <td></td>
                            <td>电池容量</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>最大设计总质量（kg）</td>
                            <td></td>
                            <td>燃料类型</td>
                            <td>{{ info.fueltype | filterCommonA(powerType) }}</td>
                            <td>变速器型式</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>累计行驶里程（km）</td>
                            <td></td>
                            <td>燃油型式</td>
                            <td></td>
                            <td>驱动方式</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>车辆类型</td>
                            <td></td>
                            <td>检测方法</td>
                            <td>{{ info.testtype | filterCommon(testType) }}</td>
                            <td>车牌颜色</td>
                            <td class="br">{{ info.licensetype | filterCommon(plateColor) }}</td>
                        </tr>
                        <tr>
                            <td>车主姓名（单位）</td>
                            <td colspan="3"></td>
                            <td>联系电话（手机）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>品牌/型号</td>
                            <td colspan="3"></td>
                            <td>使用性质</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td>车辆生产企业</td>
                            <td colspan="3"></td>
                            <td>车辆出厂日期</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">环境参数</td>
                        </tr>
                        <tr>
                            <td>环境温度（℃）</td>
                            <td></td>
                            <td>大气压（kPa）</td>
                            <td></td>
                            <td>相对湿度（%）</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">检测设备信息</td>
                        </tr>
                        <tr>
                            <td>分析仪生产企业</td>
                            <td colspan="2"></td>
                            <td>分析仪检定日期</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td>分析仪名称</td>
                            <td colspan="2"></td>
                            <td>检测线编号</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td>底盘测功机生产企业</td>
                            <td colspan="2"></td>
                            <td>底盘测功机型号</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td>OBD诊断仪生产企业</td>
                            <td colspan="2"></td>
                            <td>OBD诊断仪型号</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">2 外观检验</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="text-align: center;">检查项目</td>
                            <td style="text-align: center;">是</td>
                            <td style="text-align: center;">否</td>
                            <td class="br" style="text-align: center;">备注</td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆机械状况是否良好</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">排气污染控制装置是否齐全，正常</td>
                            <td></td>
                            <td></td>
                            <td class="br">否决项目</td>
                        </tr>
                        <tr>
                            <td colspan="3">发动机燃油系统采用电控泵</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车上仪表工作是否正常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆是否存在烧机油或者严重冒黑烟现象</td>
                            <td></td>
                            <td></td>
                            <td class="br">否决项目</td>
                        </tr>
                        <tr>
                            <td colspan="3">有无可能影响安全或引起测试偏差的机械的故障</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆进、排气系统是否有任何泄漏</td>
                            <td></td>
                            <td></td>
                            <td class="br">否决项目</td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆的发动机、变速箱和冷却系统等有无明显的液体渗漏</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否带OBD系统</td>
                            <td>{{ info.obdjg === '1' ? '是' : '' }}</td>
                            <td>{{ info.obdjg !== '1' ? '否' : '' }}</td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">轮胎气压是否正常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">轮胎是否干燥、清洁</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否关闭车上空调、暖风等附属设备</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否已经中断车辆上可能影响测试正常进行的功能，如 ARS、ESP、EPC牵引力控制或自动制动系统等</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">车辆油箱和油品是否异常</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3">是否适合工况法检测</td>
                            <td></td>
                            <td></td>
                            <td class="br"></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="two-col">
                                <div class="clearfix">
                                    <p class="fl s-title p1" style="width: 50%;margin: 0px;text-algin: left;">外观检验结果</p>
                                    <p class="fr" style="width: 50%;margin: 0px;text-algin: left;">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </p>
                                </div>
                            </td>
                            <td class="br" colspan="3">检验员：</td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">3 OBD检查</td>
                        </tr>
                        <tr>
                            <td rowspan="4">OBD故障指示器</td>
                            <td rowspan="2" colspan="2">通信</td>
                            <td class="br" colspan="3">
                                <input type="checkbox" disabled :checked="info.txzt === '1'"/><span class="cb-text">通讯成功</span>
                                <input type="checkbox" disabled :checked="info.txzt !== '1'"/><span class="cb-text">通讯不成功</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="br" colspan="3">
                                通讯不成功的（填写以下原因）:
                                <input type="checkbox" disabled :checked="info.txyy === '1'"/>接口损坏
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '2'"/>找不到接口
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '3'"/>连接后不能通信
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">OBD系统故障指示器报警及故障码</td>
                            <td class="br" colspan="3">
                                <input type="checkbox"/><span class="cb-text">有</span>
                                <input type="checkbox"/><span class="cb-text">无</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">故障代码及故障信息（若故障指示器报警）</td>
                            <td class="br" colspan="3">{{ info.gzhdmxinx }}</td>
                        </tr>
                        <tr>
                            <td rowspan="2">就绪状态</td>
                            <td colspan="2" rowspan="2">就绪状态未完成项目</td>
                            <td class="br" colspan="3">
                                <input type="checkbox" disabled :checked="info.jxzt === '1'"/><span class="cb-text">有</span>
                                <input type="checkbox" disabled :checked="info.jxzt !== '1'"/><span class="cb-text">无</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="br" colspan="3">
                                如有就绪未完成的，填写以下项目<br/>
                                <input type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('5') !== -1"/>SCR
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('6') !== -1"/>POC
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('7') !== -1"/>DOC
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('8') !== -1"/>DPF
                                <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('9') !== -1"/>废气再循环(EGR)
                            </td>
                        </tr>
                        <tr>
                            <td>其他信息</td>
                            <td class="br" colspan="5">MIL灯点亮后的行驶里程（km）：{{ info.xshlch }}</td>
                        </tr>
                        <tr>
                            <td rowspan="3">CAL ID / CVN 信息</td>
                            <td>发动机控制单元</td>
                            <td>CAL ID</td>
                            <td>{{ info.fdjcalid }}</td>
                            <td>CVN</td>
                            <td class="br">{{ info.fdjcvn }}</td>
                        </tr>
                        <tr>
                            <td>后处理控制单元（如适用）</td>
                            <td>CAL ID</td>
                            <td>{{ info.hchlcalid }}</td>
                            <td>CVN</td>
                            <td class="br">{{ info.hchlcvn }}</td>
                        </tr>
                        <tr>
                            <td>其他控制单元（如适用）</td>
                            <td>CAL ID</td>
                            <td>{{ info.qtcalid }}</td>
                            <td>CVN</td>
                            <td class="br">{{ info.qtcvn }}</td>
                        </tr>
                        <tr>
                            <td class="s-title">OBD检查结果</td>
                            <td colspan="2">
                                <input type="checkbox" disabled :checked="info.obdjg === '1'"/>合格
                                <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.obdjg !== '1'"/>不合格
                            </td>
                            <td class="br" colspan="3">检验员：</td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">4 排气污染物检测</td>
                        </tr>
                        <tr>
                            <td class="s-title">检测方法</td>
                            <td class="br" colspan="5">
                                <input type="checkbox" disabled :checked="info.testtype === '3'"/>自由加速法
                                <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.testtype === '4'"/>加载减速法
                                <input style="margin-left: 30px;" type="checkbox"/>林格曼黑度法
                            </td>
                        </tr>
                        <tr>
                            <td class="s-title br" colspan="6">检验结果内容</td>
                        </tr>
                        <tr>
                            <td rowspan="2">排气污染物检测</td>
                            <td class="br" colspan="5" style="padding: 0px;">
                                <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                    <tr>
                                        <td colspan="7" class="ss-title ntb nlb nrb">自由加速</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" class="nlb">额定转速 （r/min）</td>
                                        <td rowspan="2">实测转速 （r/min）</td>
                                        <td colspan="3">三次烟度测量值（m⁻¹）</td>
                                        <td>平均值（m⁻¹）</td>
                                        <td>限值（m⁻¹）</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">{{ `${info.raterevdown || ''}~${info.raterevup || ''}` }}</td>
                                        <td>{{ info.rev100 }}</td>
                                        <td>{{ info.smokek1 }}</td>
                                        <td>{{ info.smokek2 }}</td>
                                        <td>{{ info.smokek3 }}</td>
                                        <td>{{ info.smokeavg }}</td>
                                        <td>{{ info.smokeklimit }}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="br" colspan="5"  style="padding: 0px;">
                                <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                    <tr>
                                        <td colspan="4" class="ss-title ntb nlb nrb">加载减速</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="nlb">转速</td>
                                        <td colspan="2">最大轮边功率</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">额定转速</td>
                                        <td>实测（修正）VelMaxHP</td>
                                        <td>实测（kw）</td>
                                        <td>限值（kw）</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb">-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="nlb">烟度</td>
                                        <td colspan="2">氮氧化物NOx</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" rowspan="3"  style="padding: 0px;">
                                            <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                                <tr>
                                                    <td class="ntb nlb"></td>
                                                    <td class="ntb">100%点</td>
                                                    <td class="ntb nrb">80%点</td>
                                                </tr>
                                                <tr>
                                                    <td class="nlb">实测值</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td class="nbb nlb">限值</td>
                                                    <td class="nbb"></td>
                                                    <td class="nbb"></td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td></td>
                                        <td>80%点</td>
                                    </tr>
                                    <tr>
                                        <td>实测值</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>限值</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td colspan="4"  class="ss-title nlb">林格曼黑度法</td>
                                    </tr>
                                    <tr>
                                        <td class="nlb nbb">明显可见烟度</td>
                                        <td class="nbb"></td>
                                        <td class="nbb">林格曼黑度（级）</td>
                                        <td class="nbb"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="s-title">检测结果</td>
                            <td colspan="5" class="two-col br">
                                <div class="clearfix">
                                    <p class="fl" style="width: 50%;text-algin: left;">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </p>
                                    <p class="fr" style="width: 50%;text-algin: left;">检验员：</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="s-title">检验机构地址及电话</td>
                            <td class="br" colspan="5"></td>
                        </tr>
                        <tr>
                            <td class="s-title">授权签字人</td>
                            <td class="br" colspan="5"></td>
                        </tr>
                        <tr>
                            <td class="s-title">批准人</td>
                            <td colspan="2"></td>
                            <td>单位盖章</td>
                            <td class="br" colspan="2"></td>
                        </tr>
                        <tr>
                            <td class="s-title br bb" colspan="6">注：依据标准《汽油车污染物排放限值及测量方法(双怠速法及简易工况法)》（GB18285-2018）</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 打印的  汽油 -->
            <div v-if="qiyou" class="table-alert table-fixed" id="certificatePrint">
                <h3>在用车检验（测）报告</h3>
                <div class="head">
                    <span>报告编号: {{ info.testno }}</span>
                    <span>检验日期: {{ info.jyrq | formatTime }}</span>
                    <span>计量认证证号: </span>
                </div>
                <table class="table-wrap" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td class="s-title br" colspan="6">1 基本信息</td>
                    </tr>
                    <tr>
                        <td>检验机构名称：</td>
                        <td class="br" colspan="5">{{ info.qiymch }}</td>
                    </tr>
                    <tr>
                        <td>号牌号码</td>
                        <td>{{ info.license }}</td>
                        <td>燃料类型</td>
                        <td>{{ info.fueltype | filterCommonA(powerType) }}</td>
                        <td>基准质量（kg）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>车辆识别代号（VIN）</td>
                        <td>{{ info.vin }}</td>
                        <td>最大总质量（kg）</td>
                        <td></td>
                        <td>发动机号码</td>
                        <td class="br">{{ info.engineno }}</td>
                    </tr>
                    <tr>
                        <td>发动机型号</td>
                        <td></td>
                        <td>发动机排量（L）</td>
                        <td></td>
                        <td>气缸数</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>驱动电机型号</td>
                        <td></td>
                        <td>储能装置型号</td>
                        <td></td>
                        <td>电池容量</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>催化转化器型号</td>
                        <td></td>
                        <td>额定转速（r/min）</td>
                        <td></td>
                        <td>座位数（人）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>车辆型号</td>
                        <td>{{ info.vehiclemodel }}</td>
                        <td>燃油型式</td>
                        <td></td>
                        <td>驱动方式</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>累计行驶里程（km）</td>
                        <td></td>
                        <td>变速器型式</td>
                        <td></td>
                        <td>OBD</td>
                        <td class="br">{{ info.obdjg === '1' ? '有' : '无' }}</td>
                    </tr>
                    <tr>
                        <td>初次登记日期</td>
                        <td>{{ info.registerdate }}</td>
                        <td>检测方法</td>
                        <td>{{ info.testtype | filterCommon(testType) }}</td>
                        <td>车牌颜色</td>
                        <td class="br">{{ info.licensetype | filterCommon(plateColor) }}</td>
                    </tr>
                    <tr>
                        <td>车主姓名（单位）</td>
                        <td colspan="3"></td>
                        <td>联系电话（手机）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>品牌/型号</td>
                        <td colspan="3"></td>
                        <td>使用性质</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>车辆生产企业</td>
                        <td colspan="3"></td>
                        <td>车辆出厂日期</td>
                        <td class="br"  ></td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">环境参数</td>
                    </tr>
                    <tr>
                        <td>环境温度（℃）</td>
                        <td></td>
                        <td>大气压（kPa）</td>
                        <td></td>
                        <td>相对湿度（%）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">检测设备信息</td>
                    </tr>
                    <tr>
                        <td>分析仪生产企业</td>
                        <td colspan="2"></td>
                        <td>分析仪检定日期</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td>分析仪名称</td>
                        <td class="br" colspan="5"></td>
                    </tr>
                    <tr>
                        <td>底盘测功机生产企业</td>
                        <td colspan="2"></td>
                        <td>底盘测功机型号</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td>OBD诊断仪生产企业</td>
                        <td colspan="2"></td>
                        <td>OBD诊断仪型号</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">2 外观检验</td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: center;">检查项目</td>
                        <td style="text-align: center;">是</td>
                        <td style="text-align: center;">否</td>
                        <td class="br" style="text-align: center;">备注</td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆机械状况是否良好</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">排气污染控制装置是否齐全，正常</td>
                        <td></td>
                        <td></td>
                        <td class="br">否决项目</td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆是否存在烧机油或者严重冒黑烟现象</td>
                        <td></td>
                        <td></td>
                        <td class="br">否决项目</td>
                    </tr>
                    <tr>
                        <td colspan="3">曲轴箱通风系统是否正常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">燃油蒸发控制系统是否正常</td>
                        <td></td>
                        <td></td>
                        <td class="br">否决项目</td>
                    </tr>
                    <tr>
                        <td colspan="3">车上仪表工作是否正常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">有无可能影响安全或引起测试偏差的机械的故障</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆进、排气系统是否有任何泄漏</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆的发动机、变速箱和冷却系统等有无明显的液体渗漏</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否带OBD系统</td>
                        <td>{{ info.obdjg === '1' ? '是' : '' }}</td>
                        <td>{{ info.obdjg !== '1' ? '否' : '' }}</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">轮胎气压是否正常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">轮胎是否干燥、清洁</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否关闭车上空调、暖风等附属设备</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否已经中断车辆上可能影响测试正常进行的功能，如 ARS、ESP、EPC牵引力控制或自动制动系统等</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆油箱和油品是否异常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否适合工况法检测</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="two-col bb">
                            <div class="clearfix">
                                <p class="fl s-title p1" style="width: 50%;margin: 0px;text-algin: left;">外观检验结果</p>
                                <p class="fr" style="width: 50%;margin: 0px;text-algin: left;">
                                    <input type="checkbox"/>合格
                                    <input style="margin-left: 30px;" type="checkbox"/>不合格
                                </p>
                            </div>
                        </td>
                        <td class="br bb" colspan="3">检验员：</td>
                    </tr>
                </table>
                <div class="pageSeparator"></div>
                <table class="table-wrap" style="padding-top: 30px" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td class="s-title br" colspan="6">3 OBD检查</td>
                    </tr>
                    <tr>
                        <td rowspan="5">OBD故障指示器</td>
                        <td colspan="2">OBD系统故障指示器</td>
                        <td class="br" colspan="3">
                            <input type="checkbox" disabled :checked="info.zhishdzt === '1'"/><span class="cb-text">合格</span>
                            <input type="checkbox" disabled :checked="info.zhishdzt !== '1'"/><span class="cb-text">不合格</span>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2" colspan="2">通信</td>
                        <td class="br" colspan="3">
                            <input type="checkbox" disabled :checked="info.txzt === '1'"/><span class="cb-text">通讯成功</span>
                            <input type="checkbox" disabled :checked="info.txzt !== '1'"/><span class="cb-text">通讯不成功</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="br" colspan="3">
                            通讯不成功的（填写以下原因）:
                            <input type="checkbox" disabled :checked="info.txyy === '1'"/>接口损坏
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '2'"/>找不到接口
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '3'"/>连接后不能通信
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">OBD系统故障指示器报警</td>
                        <td class="br" colspan="3">
                            <input type="checkbox"/><span class="cb-text">有</span>
                            <input type="checkbox"/><span class="cb-text">无</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">故障代码及故障信息（若故障指示器报警）</td>
                        <td class="br" colspan="3">{{ info.gzhdmxinx }}</td>
                    </tr>
                    <tr>
                        <td rowspan="2">就绪状态</td>
                        <td colspan="2" rowspan="2">就绪状态未完成项目</td>
                        <td class="br" colspan="3">
                            <input type="checkbox" disabled :checked="info.jxzt === '1'"/><span class="cb-text">有</span>
                            <input type="checkbox" disabled :checked="info.jxzt !== '1'"/><span class="cb-text">无</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="br" colspan="3">
                            如有就绪未完成的，填写以下项目<br/>
                            <input type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('1') !== -1"/>催化器
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('2') !== -1"/>氧传感器
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('3') !== -1"/>氧传感器加热器
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('4') !== -1"/>废气再循环(EGR)/可变气门VVT
                        </td>
                    </tr>
                    <tr>
                        <td>其他信息</td>
                        <td class="br" colspan="5">MIL灯点亮后的行驶里程（km）：{{ info.xshlch }}</td>
                    </tr>
                    <tr>
                        <td rowspan="3">CAL ID / CVN 信息</td>
                        <td>发动机控制单元</td>
                        <td>CAL ID</td>
                        <td>{{ info.fdjcalid }}</td>
                        <td>CVN</td>
                        <td class="br">{{ info.fdjcvn }}</td>
                    </tr>
                    <tr>
                        <td>后处理控制单元（如适用）</td>
                        <td>CAL ID</td>
                        <td>{{ info.hchlcalid }}</td>
                        <td>CVN</td>
                        <td class="br">{{ info.hchlcvn }}</td>
                    </tr>
                    <tr>
                        <td>其他控制单元（如适用）</td>
                        <td>CAL ID</td>
                        <td>{{ info.qtcalid }}</td>
                        <td>CVN</td>
                        <td class="br">{{ info.qtcvn }}</td>
                    </tr>
                    <tr>
                        <td class="s-title">OBD检查结果</td>
                        <td colspan="2">
                            <input type="checkbox" disabled :checked="info.obdjg === '1'"/>合格
                            <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.obdjg !== '1'"/>不合格
                        </td>
                        <td class="br" colspan="3">检验员：</td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">4 排气污染物检测</td>
                    </tr>
                    <tr>
                        <td class="s-title">检测方法</td>
                        <td class="br" colspan="5">
                            <input type="checkbox" disabled :checked="info.testtype === '1'"/>双怠速
                            <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.testtype === '2'"/>稳态工况法
                            <input style="margin-left: 30px;" type="checkbox"/>简易瞬态工况法
                        </td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">检验结果内容</td>
                    </tr>
                    <tr>
                        <td>排气污染物检测</td>
                        <td class="br" colspan="5" style="padding: 0px;">
                            <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                <tr>
                                    <td colspan="6" class="ss-title ntb nlb nrb">双怠速</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" class="nlb"></td>
                                    <td rowspan="2">过量空气系数（λ）</td>
                                    <td colspan="2">低怠速</td>
                                    <td colspan="2">高怠速</td>
                                </tr>
                                <tr>
                                    <td>CO(%)</td>
                                    <td>HC(10⁻⁶)</td>
                                    <td>CO(%)</td>
                                    <td>HC(10⁻⁶)</td>
                                </tr>
                                <tr>
                                    <td class="nlb">实测值</td>
                                    <td>{{ info.lambda }}</td>
                                    <td>{{ info.lscoresult }}</td>
                                    <td>{{ info.lshcresult }}</td>
                                    <td>{{ info.hscoresult }}</td>
                                    <td>{{ info.hshcresult }}</td>
                                </tr>
                                <tr>
                                    <td class="nlb nbb">限值</td>
                                    <td class="nbb">{{ `${info.lambdadown || ''}~${info.lambdaup || ''}` }}</td>
                                    <td class="nbb">{{ info.lscolimit }}</td>
                                    <td class="nbb">{{ info.lshclimit }}</td>
                                    <td class="nbb">{{ info.hscolimit }}</td>
                                    <td class="nbb">{{ info.hshclimit }}</td>
                                </tr>
                                <tr>
                                    <td class="ss-title nlb" colspan="6">简易瞬态工况法</td>
                                </tr>
                                <tr>
                                    <td class="nlb">&nbsp;</td>
                                    <td class="nrb nbb" rowspan="3" colspan="5" style="padding: 0px;">
                                        <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                            <tr>
                                                <td class="ntb nlb">HC(g/km)</td>
                                                <td class="ntb">CO(g/km)</td>
                                                <td class="ntb nrb">NOx(g/km)</td>
                                            </tr>
                                            <tr>
                                                <td class="nlb">&nbsp;</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td class="nlb nbb">&nbsp;</td>
                                                <td class="nbb"></td>
                                                <td class="nbb"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nlb">实测值</td>
                                </tr>
                                <tr>
                                    <td class="nlb nbb">限值</td>
                                </tr>
                                <tr>
                                    <td class="ss-title nlb" colspan="6">稳态工况法</td>
                                </tr>
                                <tr>
                                    <td class="nlb">&nbsp;</td>
                                    <td rowspan="4" colspan="5" style="padding: 0px;">
                                        <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                            <tr>
                                                <td class="ntb nlb" colspan="3">ASM5025</td>
                                                <td class="ntb nrb" colspan="3">ASM2540</td>
                                            </tr>
                                            <tr>
                                                <td class="nlb">HC(10⁻⁶)</td>
                                                <td>CO(%)</td>
                                                <td>NO(10⁻⁶)</td>
                                                <td>HC(10⁻⁶)</td>
                                                <td>CO(%)</td>
                                                <td class="nrb">NO(10⁻⁶)</td>
                                            </tr>
                                            <tr>
                                                <td class="nlb">&nbsp;{{ info.hc5025 }}</td>
                                                <td>{{ info.co5025 }}</td>
                                                <td>{{ info.no5025 }}</td>
                                                <td>{{ info.hc2540 }}</td>
                                                <td>{{ info.co2540 }}</td>
                                                <td>{{ info.no2540 }}</td>
                                            </tr>
                                            <tr>
                                                <td class="nlb nbb">&nbsp;{{ info.hc5025limit }}</td>
                                                <td class="nbb">{{ info.co5025limit }}</td>
                                                <td class="nbb">{{ info.no5025limit }}</td>
                                                <td class="nbb">{{ info.hc2540limit }}</td>
                                                <td class="nbb">{{ info.co2540limit }}</td>
                                                <td class="nbb">{{ info.no2540limit }}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nlb">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="nlb">实测值</td>
                                </tr>
                                <tr>
                                    <td class="nlb">限值</td>
                                </tr>
                                <tr>
                                    <td class="nlb" style="text-align: left;">结果判定</td>
                                    <td colspan="5" style="text-align: left;">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nlb nbb" colspan="6" style="text-align: left;">检验员：</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>燃油蒸发测试</td>
                        <td class="br" colspan="5" style="padding: 0px;">
                            <table class="table-wrap nesting-table2" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                <tr>
                                    <td class="ntb nlb">加油口测试</td>
                                    <td class="ntb" colspan="2">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </td>
                                    <td class="ntb" >油箱盖测试</td>
                                    <td class="ntb" colspan="2">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nlb">判定结果</td>
                                    <td colspan="5">
                                        <input type="checkbox"/>合格
                                        <input style="margin-left: 30px;" type="checkbox"/>不合格
                                    </td>
                                </tr>
                                <tr>
                                    <td class="nlb" colspan="6">检验员：</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="s-title">排气污染物检测结果</td>
                        <td class="br" colspan="5">
                            <input type="checkbox"/>合格
                            <input style="margin-left: 30px;" type="checkbox"/>不合格
                        </td>
                    </tr>
                    <tr>
                        <td class="s-title">授权签字人</td>
                        <td class="br" colspan="5"></td>
                    </tr>
                    <tr>
                        <td class="s-title">批准人</td>
                        <td colspan="2"></td>
                        <td>单位盖章</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td class="s-title br bb" colspan="6">注：依据标准《汽油车污染物排放限值及测量方法(双怠速法及简易工况法)》（GB18285-2018）</td>
                    </tr>
                </table>
            </div>
            <!-- 打印的  柴油 -->
            <div v-else class="table-alert table-fixed" id="certificatePrint">
                <h3>在用车检验（测）报告</h3>
                <div class="head">
                    <span>报告编号: {{ info.testno }}</span>
                    <span>检验日期: {{ info.jyrq | formatTime }}</span>
                    <span>计量认证证号: </span>
                </div>
                <table class="table-wrap" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td class="s-title br" colspan="6">1 基本信息</td>
                    </tr>
                    <tr>
                        <td>检验机构名称：</td>
                        <td class="br" colspan="5">{{ info.qiymch }}</td>
                    </tr>
                    <tr>
                        <td>号牌号码</td>
                        <td>{{ info.license }}</td>
                        <td>燃料类型</td>
                        <td>{{ info.fueltype | filterCommonA(powerType) }}</td>
                        <td>基准质量（kg）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>车辆识别代号（VIN）</td>
                        <td>{{ info.vin }}</td>
                        <td>OBD</td>
                        <td>{{ info.obdjg === '1' ? '有' : '无' }}</td>
                        <td>发动机号码</td>
                        <td class="br">{{ info.engineno }}</td>
                    </tr>
                    <tr>
                        <td>储能装置型号</td>
                        <td></td>
                        <td>SCR</td>
                        <td></td>
                        <td>发动机排量（L）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>发动机额定功率（kw）</td>
                        <td></td>
                        <td>DPF</td>
                        <td></td>
                        <td>DPF型号</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>额定转速（r/min）</td>
                        <td></td>
                        <td>SCR型号</td>
                        <td></td>
                        <td>初次登记日期</td>
                        <td class="br">{{ info.registerdate }}</td>
                    </tr>
                    <tr>
                        <td>驱动电机型号</td>
                        <td></td>
                        <td>发动机型号</td>
                        <td></td>
                        <td>电池容量</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>最大设计总质量（kg）</td>
                        <td></td>
                        <td>燃料类型</td>
                        <td>{{ info.fueltype | filterCommonA(powerType) }}</td>
                        <td>变速器型式</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>累计行驶里程（km）</td>
                        <td></td>
                        <td>燃油型式</td>
                        <td></td>
                        <td>驱动方式</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>车辆类型</td>
                        <td></td>
                        <td>检测方法</td>
                        <td>{{ info.testtype | filterCommon(testType) }}</td>
                        <td>车牌颜色</td>
                        <td class="br">{{ info.licensetype | filterCommon(plateColor) }}</td>
                    </tr>
                    <tr>
                        <td>车主姓名（单位）</td>
                        <td colspan="3"></td>
                        <td>联系电话（手机）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>品牌/型号</td>
                        <td colspan="3"></td>
                        <td>使用性质</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td>车辆生产企业</td>
                        <td colspan="3"></td>
                        <td>车辆出厂日期</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">环境参数</td>
                    </tr>
                    <tr>
                        <td>环境温度（℃）</td>
                        <td></td>
                        <td>大气压（kPa）</td>
                        <td></td>
                        <td>相对湿度（%）</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">检测设备信息</td>
                    </tr>
                    <tr>
                        <td>分析仪生产企业</td>
                        <td colspan="2"></td>
                        <td>分析仪检定日期</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td>分析仪名称</td>
                        <td colspan="2"></td>
                        <td>检测线编号</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td>底盘测功机生产企业</td>
                        <td colspan="2"></td>
                        <td>底盘测功机型号</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td>OBD诊断仪生产企业</td>
                        <td colspan="2"></td>
                        <td>OBD诊断仪型号</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">2 外观检验</td>
                    </tr>
                    <tr>
                        <td colspan="3" style="text-align: center;">检查项目</td>
                        <td style="text-align: center;">是</td>
                        <td style="text-align: center;">否</td>
                        <td class="br" style="text-align: center;">备注</td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆机械状况是否良好</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">排气污染控制装置是否齐全，正常</td>
                        <td></td>
                        <td></td>
                        <td class="br">否决项目</td>
                    </tr>
                    <tr>
                        <td colspan="3">发动机燃油系统采用电控泵</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车上仪表工作是否正常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆是否存在烧机油或者严重冒黑烟现象</td>
                        <td></td>
                        <td></td>
                        <td class="br">否决项目</td>
                    </tr>
                    <tr>
                        <td colspan="3">有无可能影响安全或引起测试偏差的机械的故障</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆进、排气系统是否有任何泄漏</td>
                        <td></td>
                        <td></td>
                        <td class="br">否决项目</td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆的发动机、变速箱和冷却系统等有无明显的液体渗漏</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否带OBD系统</td>
                        <td>{{ info.obdjg === '1' ? '是' : '' }}</td>
                        <td>{{ info.obdjg !== '1' ? '否' : '' }}</td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">轮胎气压是否正常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">轮胎是否干燥、清洁</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否关闭车上空调、暖风等附属设备</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否已经中断车辆上可能影响测试正常进行的功能，如 ARS、ESP、EPC牵引力控制或自动制动系统等</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">车辆油箱和油品是否异常</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3">是否适合工况法检测</td>
                        <td></td>
                        <td></td>
                        <td class="br"></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="two-col bb">
                            <div class="clearfix">
                                <p class="fl s-title p1" style="width: 50%;margin: 0px;text-algin: left;">外观检验结果</p>
                                <p class="fr" style="width: 50%;margin: 0px;text-algin: left;">
                                    <input type="checkbox"/>合格
                                    <input style="margin-left: 30px;" type="checkbox"/>不合格
                                </p>
                            </div>
                        </td>
                        <td class="br bb" colspan="3">检验员：</td>
                    </tr>
                </table>
                <div class="pageSeparator"></div>
                <table class="table-wrap" style="padding-top: 30px" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td class="s-title br" colspan="6">3 OBD检查</td>
                    </tr>
                    <tr>
                        <td rowspan="4">OBD故障指示器</td>
                        <td rowspan="2" colspan="2">通信</td>
                        <td class="br" colspan="3">
                            <input type="checkbox" disabled :checked="info.txzt === '1'"/><span class="cb-text">通讯成功</span>
                            <input type="checkbox" disabled :checked="info.txzt !== '1'"/><span class="cb-text">通讯不成功</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="br" colspan="3">
                            通讯不成功的（填写以下原因）:
                            <input type="checkbox" disabled :checked="info.txyy === '1'"/>接口损坏
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '2'"/>找不到接口
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.txyy === '3'"/>连接后不能通信
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">OBD系统故障指示器报警及故障码</td>
                        <td class="br" colspan="3">
                            <input type="checkbox"/><span class="cb-text">有</span>
                            <input type="checkbox"/><span class="cb-text">无</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">故障代码及故障信息（若故障指示器报警）</td>
                        <td class="br" colspan="3">{{ info.gzhdmxinx }}</td>
                    </tr>
                    <tr>
                        <td rowspan="2">就绪状态</td>
                        <td colspan="2" rowspan="2">就绪状态未完成项目</td>
                        <td class="br" colspan="3">
                            <input type="checkbox" disabled :checked="info.jxzt === '1'"/><span class="cb-text">有</span>
                            <input type="checkbox" disabled :checked="info.jxzt !== '1'"/><span class="cb-text">无</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="br" colspan="3">
                            如有就绪未完成的，填写以下项目<br/>
                            <input type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('5') !== -1"/>SCR
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('6') !== -1"/>POC
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('7') !== -1"/>DOC
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('8') !== -1"/>DPF
                            <input style="margin-left: 20px;" type="checkbox" disabled :checked="info.jxyy && info.jxyy.indexOf('9') !== -1"/>废气再循环(EGR)
                        </td>
                    </tr>
                    <tr>
                        <td>其他信息</td>
                        <td class="br" colspan="5">MIL灯点亮后的行驶里程（km）：{{ info.xshlch }}</td>
                    </tr>
                    <tr>
                        <td rowspan="3">CAL ID / CVN 信息</td>
                        <td>发动机控制单元</td>
                        <td>CAL ID</td>
                        <td>{{ info.fdjcalid }}</td>
                        <td>CVN</td>
                        <td class="br">{{ info.fdjcvn }}</td>
                    </tr>
                    <tr>
                        <td>后处理控制单元（如适用）</td>
                        <td>CAL ID</td>
                        <td>{{ info.hchlcalid }}</td>
                        <td>CVN</td>
                        <td class="br">{{ info.hchlcvn }}</td>
                    </tr>
                    <tr>
                        <td>其他控制单元（如适用）</td>
                        <td>CAL ID</td>
                        <td>{{ info.qtcalid }}</td>
                        <td>CVN</td>
                        <td class="br">{{ info.qtcvn }}</td>
                    </tr>
                    <tr>
                        <td class="s-title">OBD检查结果</td>
                        <td colspan="2">
                            <input type="checkbox"  disabled :checked="info.obdjg === '1'"/>合格
                            <input style="margin-left: 30px;" type="checkbox"  disabled :checked="info.obdjg !== '1'"/>不合格
                        </td>
                        <td class="br" colspan="3">检验员：</td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">4 排气污染物检测</td>
                    </tr>
                    <tr>
                        <td class="s-title">检测方法</td>
                        <td class="br" colspan="5">
                            <input type="checkbox" disabled :checked="info.testtype === '3'"/>自由加速法
                            <input style="margin-left: 30px;" type="checkbox" disabled :checked="info.testtype === '4'"/>加载减速法
                            <input style="margin-left: 30px;" type="checkbox"/>林格曼黑度法
                        </td>
                    </tr>
                    <tr>
                        <td class="s-title br" colspan="6">检验结果内容</td>
                    </tr>
                    <tr>
                        <td rowspan="2">排气污染物检测</td>
                        <td class="br" colspan="5" style="padding: 0px;">
                            <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                <tr>
                                    <td colspan="7" class="ss-title ntb nlb nrb">自由加速</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" class="nlb">额定转速 （r/min）</td>
                                    <td rowspan="2">实测转速 （r/min）</td>
                                    <td colspan="3">三次烟度测量值（m⁻¹）</td>
                                    <td>平均值（m⁻¹）</td>
                                    <td>限值（m⁻¹）</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td class="nlb">{{ `${info.raterevdown || ''}~${info.raterevup || ''}` }}</td>
                                    <td>{{ info.rev100 }}</td>
                                    <td>{{ info.smokek1 }}</td>
                                    <td>{{ info.smokek2 }}</td>
                                    <td>{{ info.smokek3 }}</td>
                                    <td>{{ info.smokeavg }}</td>
                                    <td>{{ info.smokeklimit }}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="br" colspan="5"  style="padding: 0px;">
                            <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                <tr>
                                    <td colspan="4" class="ss-title ntb nlb nrb">加载减速</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="nlb">转速</td>
                                    <td colspan="2">最大轮边功率</td>
                                </tr>
                                <tr>
                                    <td class="nlb">额定转速</td>
                                    <td>实测（修正）VelMaxHP</td>
                                    <td>实测（kw）</td>
                                    <td>限值（kw）</td>
                                </tr>
                                <tr>
                                    <td class="nlb">-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="nlb">烟度</td>
                                    <td colspan="2">氮氧化物NOx</td>
                                </tr>
                                <tr>
                                    <td colspan="2" rowspan="3"  style="padding: 0px;">
                                        <table class="table-wrap nesting-table" width='100%' border='0px' cellpadding='0' cellspacing='0'>
                                            <tr>
                                                <td class="ntb nlb"></td>
                                                <td class="ntb">100%点</td>
                                                <td class="ntb nrb">80%点</td>
                                            </tr>
                                            <tr>
                                                <td class="nlb">实测值</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td class="nbb nlb">限值</td>
                                                <td class="nbb"></td>
                                                <td class="nbb"></td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td></td>
                                    <td>80%点</td>
                                </tr>
                                <tr>
                                    <td>实测值</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>限值</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="4"  class="ss-title nlb">林格曼黑度法</td>
                                </tr>
                                <tr>
                                    <td class="nlb nbb">明显可见烟度</td>
                                    <td class="nbb"></td>
                                    <td class="nbb">林格曼黑度（级）</td>
                                    <td class="nbb"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="s-title">检测结果</td>
                        <td colspan="5" class="two-col br">
                            <div class="clearfix">
                                <p class="fl" style="width: 50%;text-algin: left;">
                                    <input type="checkbox"/>合格
                                    <input style="margin-left: 30px;" type="checkbox"/>不合格
                                </p>
                                <p class="fr" style="width: 50%;text-algin: left;">检验员：</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="s-title">检验机构地址及电话</td>
                        <td class="br" colspan="5"></td>
                    </tr>
                    <tr>
                        <td class="s-title">授权签字人</td>
                        <td class="br" colspan="5"></td>
                    </tr>
                    <tr>
                        <td class="s-title">批准人</td>
                        <td colspan="2"></td>
                        <td>单位盖章</td>
                        <td class="br" colspan="2"></td>
                    </tr>
                    <tr>
                        <td class="s-title br bb" colspan="6">注：依据标准《汽油车污染物排放限值及测量方法(双怠速法及简易工况法)》（GB18285-2018）</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import { plateColor, powerType, testType } from '@/utils/type.js'
export default {
    name: 'testReport',
    components: {
    },
    data () {
        return {
            qiyou: false,
            info: {},
            plateColor,
            powerType,
            testType
        }
    },
    created () {
        var url = ''
        if (this.$route.query.id) {
            url = 'environmentalreport/view/' + this.$route.query.id
        }
        if (this.$route.query.vehicleFixId) {
            url = 'repair/environmentalReport/' + this.$route.query.vehicleFixId
        }
        this.$post(url, {})
            .then(res => {
                if (res.code === 0) {
                    if (res.data && res.data.data) {
                        let data = res.data.data
                        this.qiyou = data.fueltype === 'B' ? 0 : 1
                        data.jxyy = (data.jxyy && data.jxyy.split(',')) || []
                        this.info = data
                    }
                }
            })
    },
    filters: {
        formatTime (val) {
            if (!val) {
                return ''
            }
            return val.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6')
        }
    },
    methods: {
        print () {
            let iframe = document.getElementById('print-iframe')
            if (iframe) {
                document.body.removeChild(iframe)
            }
            let el = document.getElementById('certificatePrint')
            iframe = document.createElement('iframe')
            iframe.setAttribute('id', 'print-iframe')
            iframe.setAttribute('style', 'background:#fff;position:absolute;width:0px;height:0px;left:-500px;top:0px;')
            document.body.appendChild(iframe)
            iframe.contentDocument.body.innerHTML = `
                <style type='text/css'>
                    .pageSeparator{visibility:hidden; page-break-after:always; overflow:hidden; height:0px;}
                    .clearfix:after{
                        display: block;
                        clear: both;
                        content: "";
                        visibility: hidden;
                        height: 0;
                    }
                    h3 {
                        font-size: 26px;
                        text-align: center;
                        margin: 0;
                        margin-bottom: 15px;
                    }
                    .clearfix{
                        zoom:1;
                    }
                    .fl {
                        float: left;
                    }
                    .fr {
                        float: right;
                    }
                    .table-alert {
                        padding: 20px;
                        font-family: Microsoft YaHei, sans-serif;
                        box-sizing: border-box;
                    }
                    .table-alert .head {
                        width: 100%;
                        padding: 5px 0;
                        text-align: left;
                    }
                    .table-alert .head > span {
                        display: inline-block;
                        min-width: 180px;
                        padding-right: 20px;
                        font-size:12px;
                        font-weight:400;
                        color:#333;
                        line-height:20px;
                    }
                    .table-alert .table-wrap {
                        border-color: #999;
                        table-layout: fixed;
                    }
                    .table-alert .table-wrap .nesting-table td {
                        text-align: center;
                    }
                    .table-alert .table-wrap .nesting-table2 td {
                        text-align: left;
                    }
                    .table-alert .table-wrap tr{
                        page-break-inside: avoid !important;
                    }
                    .table-alert .table-wrap td {
                        text-align: left;
                        font-size:12px;
                        font-weight:400;
                        color:#333;
                        line-height:20px;
                        padding: 0px;
                        padding-left: 3px;
                        border-top: 1px solid #999;
                        border-left: 1px solid #999;
                    }
                    .table-alert .table-wrap td .two-col {
                        padding: 0px;
                    }
                    .table-alert .table-wrap td .two-col > div > p {
                        line-height: 20px;
                        padding: 0px;
                        box-sizing: border-box;
                    }
                    .table-alert .table-wrap td .two-col > div .p1 {
                        border-right: 1px solid #999;
                    }
                    .table-alert .table-wrap td input[type="checkbox"] {
                        width: 10px;
                        height: 10px;
                        vertical-align: middle;
                        margin-right: 3px;
                    }
                    .table-alert .table-wrap td .cb-text {
                        display: inline-block;
                        width: 80px;
                    }
                    .table-alert .table-wrap .tc {
                        text-align: center;
                    }
                    .table-alert .table-wrap .s-title {
                        font-size:12px;
                        font-weight:600;
                        color:rgba(51,51,51,1);
                        line-height:20px;
                    }
                    .table-alert .table-wrap .ss-title {
                        font-size:12px;
                        font-weight:500;
                        color:rgba(0,0,0,1);
                        line-height:20px;
                    }
                    .br {
                        border-right: 1px solid #999;
                    }
                    .bb {
                        border-bottom: 1px solid #999;
                    }
                    .bt {
                        border-top: 1px solid #999;
                    }
                    .ntb {
                        border-top: none !important;
                    }
                    .nbb {
                        border-bottom: none !important;
                    }
                    .nrb {
                        border-right: none !important;
                    }
                    .nlb {
                        border-left: none !important;
                    }
                    @page {
                        margin: 15px;
                    }
                </style>
                <div class="table-alert">${el.innerHTML}</div>
            `
            let resumeWindow = iframe.contentWindow
            if (!window.showModalDialog) {
                resumeWindow.print()
            } else {
                // 兼容IE8,不加前面这两句,只能打印出整个页面的预览效果,并不是简历原件的内容
                console.log('ie-------------------------')
                resumeWindow.document.body.className += ' ext-ie'
                resumeWindow.document.execCommand('print', false, null)
                resumeWindow.print()
            }
        }
    }
}
</script>

<style lang="less" scoped>
.table-fixed {
    position: fixed;
    top: -10000px;
    left: -10000px;
}
.table-alert {
    width: 1000px;
    padding: 20px;
    margin: 0 auto;
    box-sizing: border-box;
    .head {
        width: 100%;
        padding: 5px 0;
        text-align: left;
        > span {
            display: inline-block;
            min-width: 180px;
            padding-right: 20px;
            font-size:12px;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:22px;
        }
    }
    .table-wrap {
        border-color: rgba(232,232,232,1);
        table-layout: fixed;
        &.nesting-table td {
            text-align: center;
        }
        &.nesting-table2 td {
            text-align: left;
        }
        td {
            text-align: left;
            font-size:12px;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:22px;
            padding: 5px 10px;
            border-top: 1px solid rgba(232,232,232,1);
            border-left: 1px solid rgba(232,232,232,1);
            &.two-col {
                padding: 0px;
                > div > p {
                    line-height: 22px;
                    padding: 5px 10px;
                    box-sizing: border-box;
                    &:nth-child(1) {
                        border-right: 1px solid rgba(232,232,232,1);
                    }
                }
            }
            input[type="checkbox"] {
                vertical-align: middle;
                margin-right: 3px;
            }
            .cb-text {
                display: inline-block;
                width: 80px;
            }
        }
        .br {
            border-right: 1px solid rgba(232,232,232,1);
        }
        .bb {
            border-bottom: 1px solid rgba(232,232,232,1);
        }
        .tc {
            text-align: center;
        }
        .ntb {
            border-top: none;
        }
        .nbb {
            border-bottom: none;
        }
        .nrb {
            border-right: none;
        }
        .nlb {
            border-left: none;
        }
        .s-title {
            font-size:12px;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:22px;
        }
        .ss-title {
            font-size:12px;
            font-weight:500;
            color:rgba(0,0,0,1);
            line-height:22px;
        }
    }
}
.testReport {
    background-color: #fff;
    .test-report-title {
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        margin: 20px;
    }
    .tab-box {
        border: 1px solid #dddddd;
    }
    .page_box {
        background: #f7f8f9;
        padding-top: 10px;
        height: 53px;
        border: 1px solid #dddddd;
        border-top: none;
    }
    .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        top: 0;
    }
    .wrap {
        border-top: 1px solid #ddd;
    }
}
</style>

<style lang="less">
.testReport {
    .el-tabs--border-card{
        border: none;
        box-shadow: none;
        width: 100%;
    }
    .el-tabs__header{
        background-color: #fff;
        margin: 0px;
    }
    .car-info .el-input {
        width: 345px;
    }
    .car-info .el-input__inner {
        height: 34px;
    }
    .el-table .blue {
        background: #F0F5F8;
    }
    .audit-btn .el-textarea {
        width: 500px;
    }
    .audit-btn .el-textarea__inner {
        width: 500px;
        height: 78px;
        resize: none;
    }
    .el-tabs--card >.el-tabs__header .el-tabs__nav {
        border: none;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        margin-left: 20px;
        border-radius: 0;
    }
    .el-tabs__item {
        width: 128px;
        height: 52px;
        line-height: 52px;
        padding: 0 30px;
    }
    .el-textarea__inner {
        resize: none;
        height: 68px;
    }
    .el-tabs__content {
        position: absolute;
        top:0;
        bottom: 0;
        width: 100%;
        left: 0;
    }
}
</style>

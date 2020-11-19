<!-- 权限管理 -->
<template>
    <div class="detectionDataDetail detailPage">
        <div class="detail_header" style="">
            <el-button class="goBack btn" @click="close">关闭</el-button>
            <!-- <h1>维修数据详情</h1> -->
        </div>
        <div class="detail_content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="基本信息" name="first">
                    <div class="detail_model">
                        <h4>车辆信息</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>车牌号码：</label>
                                <span>{{info.vehicleLicensePlate}}</span>
                            </div>
                            <div class="detail_item">
                                <label>车牌颜色：</label>
                                <span>{{info.vehicleLicensePlateColor|filterCommon(plateColor)}}</span>
                            </div>
                            <div class="detail_item">
                                <label>车辆类别：</label>
                                <span>{{info.vehicleTypeName}}</span>
                            </div>
                            <div class="detail_item">
                                <label>车主单位：</label>
                                <span>{{info.vehicleOwnerName}}</span>
                            </div>
                            <div class="detail_item">
                                <label>车架号：</label>
                                <span>{{info.vehicleVin}}</span>
                            </div>
                            <!-- <div class="detail_item">
                                <label>车身颜色：</label>
                                <span>{{info.vehicleBodyColor}}</span>
                            </div>
                            <div class="detail_item">
                                <label>VIN码：</label>
                                <span>{{info.vehicleVin}}</span>
                            </div>
                            <div class="detail_item">
                                <label>品牌车系：</label>
                                <span>{{obj.vehicleBrandName}}-{{obj.vehicleSeriesName}}</span>
                            </div> -->
                            <!-- <div class="detail_item">
                                <label>车主：</label>
                                <span>{{info.vehicleOwnerName}}</span>
                            </div> -->
                        </div>
                    </div>
                    <div class="detail_model">
                        <h4>检测信息</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>检测企业：</label>
                                <span>{{info.enterpriseName}}</span>
                            </div>
                            <div class="detail_item">
                                <label>检测类别：</label>
                                <span>{{info.inspectTypeName}}</span>
                            </div>
                            <div class="detail_item">
                                <label>检测编号：</label>
                                <span>{{info.inspectId}}</span>
                            </div>
                            <div class="detail_item">
                                <label>检测结果：</label>
                                <span>{{info.inspectResult}}</span>
                            </div>
                            <div class="detail_item">
                                <label>工位：</label>
                                <span>{{info.inspectLineName}}</span>
                            </div>
                            <div class="detail_item">
                                <label>检测日期：</label>
                                <span>{{info.inspectDate | filterTime('yyyy-mm-dd')}}</span>
                            </div>
                            <!-- <div class="detail_item">
                                <label>检测类型：</label>
                                <span>{{info.inspectType==1?'等级评定':'二级维护'}}</span>
                            </div>
                            <div class="detail_item">
                                <label>检验结论：</label>
                                <span>{{info.detectResult}}</span>
                            </div>
                            <div class="detail_item">
                                <label>送检时间：</label>
                                <span>{{info.inspectDate|filterTime('yyyy-mm-dd')}}</span>
                            </div>
                            <div class="detail_item">
                                <label>竣工时间：</label>
                                <span>{{info.inspectCompletedTime}}</span>
                            </div>
                            <div class="detail_item">
                                <label>作业检测线：</label>
                                <span>{{info.inspectLineName}}</span>
                            </div>
                            <div class="detail_item">
                                <label>流水号(省网)：</label>
                                <span>{{info.provinceDetectsn}}</span>
                            </div>
                            <div class="detail_item">
                                <label>校验码(省网)：</label>
                                <span>{{info.provinceCheckcode}}</span>
                            </div> -->
                        </div>
                    </div>
                    <div class="detail_model noBorder">
                        <h4>图片信息</h4>
                        <div class="clearfix">
                            <div class="img_box">
                                <img v-if="info.inspectPicSafeMarkUrl" :src="info.inspectPicSafeMarkUrl" @click="$lookImg(info.inspectPicSafeMarkUrl)">
                                <img v-else src="../../assets/images/img_photo.png"  alt="">
                                <p>安检合格标识</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.inspectPicSafeCheckUrl" :src="info.inspectPicSafeCheckUrl" @click="$lookImg(info.inspectPicSafeCheckUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>安检报告单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.inspectPicDrivinglicenseUrl" :src="info.inspectPicDrivinglicenseUrl" @click="$lookImg(info.inspectPicDrivinglicenseUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>行驶证</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.inspectPicEnvironmentalInspectUrl" :src="info.inspectPicEnvironmentalInspectUrl" @click="$lookImg(info.inspectPicEnvironmentalInspectUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>环检检验记录单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.jcImagePowerUrl" :src="info.jcImagePowerUrl" @click="$lookImg(info.jcImagePowerUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>工位动力照片</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.jcImageLightUrl" :src="info.jcImageLightUrl" @click="$lookImg(info.jcImageLightUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>工位灯光照片</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.jcImageBrakeUrl" :src="info.jcImageBrakeUrl" @click="$lookImg(info.jcImageBrakeUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>工位制动照片</p>
                            </div>
                            <div class="img_box">
                                <img v-if="info.inspectPicCertificateNoUrl" :src="info.inspectPicCertificateNoUrl" @click="$lookImg(info.inspectPicCertificateNoUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>道路运输经营许可证</p>
                            </div>
                           <!--  <div class="img_box">
                                <img v-if="pic.inspectPicStationUrl" :src="pic.inspectPicStationUrl" alt="" @click="$lookImg(pic.inspectPicStationUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>工位照片</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicIdcardUrl" :src="pic.inspectPicIdcardUrl" alt="" @click="$lookImg(pic.inspectPicIdcardUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>送检人身份证</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicDrivinglicenseUrl" :src="pic.inspectPicDrivinglicenseUrl" alt="" @click="$lookImg(pic.inspectPicDrivinglicenseUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>行驶证</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicCertificateNoUrl" :src="pic.inspectPicCertificateNoUrl" alt="" @click="$lookImg(pic.inspectPicCertificateNoUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>车辆道路经营许可证</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicSafePersonUrl" :src="pic.inspectPicSafePersonUrl" alt="" @click="$lookImg(pic.inspectPicSafePersonUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>安检人工检验单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicAllInspectionUrl" :src="pic.inspectPicAllInspectionUrl" alt="" @click="$lookImg(pic.inspectPicAllInspectionUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>综检报告单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicSafeMarkUrl" :src="pic.inspectPicSafeMarkUrl" alt="" @click="$lookImg(pic.inspectPicSafeMarkUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>安检合格标志</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicNacktscannerUrl" :src="pic.inspectPicNacktscannerUrl" alt="" @click="$lookImg(pic.inspectPicNacktscannerUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>安检仪器报告单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicManualUrl" :src="pic.inspectPicManualUrl" alt="" @click="$lookImg(pic.inspectPicManualUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>人工检验记录单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicPerformanceUrl" :src="pic.inspectPicPerformanceUrl" alt="" @click="$lookImg(pic.inspectPicPerformanceUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>性能检验记录单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicSafeCheckUrl" :src="pic.inspectPicSafeCheckUrl" alt="" @click="$lookImg(pic.inspectPicSafeCheckUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>安检报告单</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicRoadTransportCertUrl" :src="pic.inspectPicRoadTransportCertUrl" alt="" @click="$lookImg(pic.inspectPicRoadTransportCertUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>道路运输证</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicRoadTransportCertStandardUrl" :src="pic.inspectPicRoadTransportCertStandardUrl" alt="" @click="$lookImg(pic.inspectPicRoadTransportCertStandardUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>道路运输达标车辆记录表</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicEnvironmentalInspectUrl" :src="pic.inspectPicEnvironmentalInspectUrl" alt="" @click="$lookImg(pic.inspectPicEnvironmentalInspectUrl)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>环保检测记录单第1页</p>
                            </div>
                            <div class="img_box">
                                <img v-if="pic.inspectPicEnvironmentalInspect2Url" :src="pic.inspectPicEnvironmentalInspect2Url" alt="" @click="$lookImg(pic.inspectPicEnvironmentalInspect2Url)">
                                <img v-else src="../../assets/images/img_photo.png" >
                                <p>环保检测记录单第2页</p>
                            </div> -->
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="检验数据" name="second">
                    <table class="table-more-table" style="width: 100%;">
                        <tr style="background:#F8FAFB;">
                            <th class="table_th th_short" colspan="3">项 目</th>
                            <th class="table_th" colspan="11">检验结果</th>
                            <th class="table_th th_short">判定</th>
                        </tr>
                        <tr>
                            <td class="table_td" rowspan="2" colspan="3">
                                <div class="cell">动力性</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">达标功率kW：</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">额定车速km/h：</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">加载力N：</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">稳定车速km/h：</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.power_standardPower}}&nbsp;</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.power_ratedSpeed}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.power_ratedSpeed}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.power_loadingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.power_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.power_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.power_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.power_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.power_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.power_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="3">
                                <div class="cell">燃料经济性</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">等速百公里油耗标准限值： {{testRecordData.fueleconomy_speedFuelPerHundredKm}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">L/100km</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">实测值： {{testRecordData.fueleconomy_measuredValue}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">L/100km</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.fueleconomy_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.fueleconomy_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.fueleconomy_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.fueleconomy_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.fueleconomy_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.fueleconomy_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <!-- 原始数据 -->
                        <tr>
                            <td class="table_td width-short0" rowspan="26">
                                <div class="cell">制动性</div>
                            </td>
                            <td class="table_td width-short0" rowspan="23">
                                <div class="cell">台架检验</div>
                            </td>
                            <td class="table_td width-short0" rowspan="8">
                                <div class="cell">原始数据</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">车轴</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">水平称重轮荷daN</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">复荷台称重轴荷 daN</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">动态轮荷daN</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">行车制动力daN</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">驻车制动力daN</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short">
                                <div class="cell">左轮</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">右轮</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">复荷台称重轴荷 daN</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">左轮</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">右轮</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">左轮</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">右轮</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">左轮</div>
                            </td>
                            <td class="table_td width-short">
                                <div class="cell">右轮</div>
                            </td>
                        </tr>
                        <!-- 一轴 -->
                        <tr>
                            <td class="table_td">
                                <div class="cell">一轴</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_leftHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_rightHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_axleLoadOfCompoundTable}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.bid1_leftDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_rightDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_leftDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_rightDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_leftParkBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid1_rightParkBrakeForce}}</div>
                            </td>
                            <td class="table_td" rowspan="6">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">二轴</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_leftHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_rightHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_axleLoadOfCompoundTable}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.bid2_leftDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_rightDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_leftDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_rightDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_leftParkBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid2_rightParkBrakeForce}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">三轴</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_leftHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_rightHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_axleLoadOfCompoundTable}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.bid3_leftDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_rightDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_leftDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_rightDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_leftParkBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid3_rightParkBrakeForce}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">四轴</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_leftHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_rightHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_axleLoadOfCompoundTable}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.bid4_leftDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_rightDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_leftDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_rightDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_leftParkBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid4_rightParkBrakeForce}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">五轴</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_leftHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_rightHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_axleLoadOfCompoundTable}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.bid5_leftDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_rightDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_leftDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_rightDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_leftParkBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid5_rightParkBrakeForce}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">六轴</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_leftHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_rightHorizontalLoadWheel}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_axleLoadOfCompoundTable}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.bid6_leftDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_rightDynamicWheelLoad}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_leftDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_rightDriveBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_leftParkBrakeForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bid6_rightParkBrakeForce}}</div>
                            </td>
                        </tr>
                        <!-- 整车 -->
                        <tr>
                            <td class="table_td" rowspan="7">
                                <div class="cell">整车</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">单车</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">水平称重  {{testRecordData.bwv_horizontalweight}} daN</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">整车制动率   {{testRecordData.bwv_wholevehiclebrakerate}} %</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">驻车制动率   {{testRecordData.bwv_parkbrakerate}} %</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bwv_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bwv_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bwv_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bwv_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bwv_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" rowspan="6">
                                <div class="cell">汽车列车</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="2">
                                <div class="cell">水平称重 {{testRecordData.bwvs1_horizontalWeight}} daN</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="2">
                                <div class="cell">整车制动率</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">牵</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwvs1_vehicleBrakeRateTractor}}%</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">驻车制动率%</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">{{testRecordData.vinNo}}</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">制动协调时间s</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">{{testRecordData.bwvs1_brakeCoordinateTime}}</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell" v-if="testRecordData.bwvs1_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bwvs1_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bwvs1_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bwvs1_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bwvs1_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">挂</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwvs1_vehicleBrakeRateTrailer}} %</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" rowspan="3">
                                <div class="cell">制动时序</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell"></div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">1轴</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">2轴</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">3轴</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">4轴</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">5轴</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">6轴</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">时间s</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">轴制动力达到5%静态轴荷</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwst_axle1}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwst_axle2}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwst_axle3}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwst_axle4}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwst_axle5}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwst_axle6}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bwst_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bwst_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bwst_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bwst_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bwst_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">时序</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">轴制动力达到5%静态轴荷</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bws_axle1}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bws_axle2}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bws_axle3}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bws_axle4}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bws_axle5}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bws_axle6}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bws_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bws_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bws_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bws_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bws_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="4">
                                <div class="cell">整车制动率比 % （牵引车/列车）</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwvs2_brakeRateTractorTrain}}</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">整车制动率比 % （挂车/列车）</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bwvs2_brakeRateTrailerTrain}}</div>
                            </td>
                        </tr>
                        <!-- 单轴 -->
                        <tr>
                            <td class="table_td" rowspan="8">
                                <div class="cell">单轴</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">车轴</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="3">
                                <div class="cell">轴制动率%</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="3">
                                <div class="cell">制动不平衡率%</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">车轮阻滞率%</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">车轮阻滞率%</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short2">
                                <div class="cell">左轮</div>
                            </td>
                            <td class="table_td width-short2">
                                <div class="cell">右轮</div>
                            </td>
                            <td class="table_td width-short2">
                                <div class="cell">左轮</div>
                            </td>
                            <td class="table_td width-short2">
                                <div class="cell">右轮</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">一轴</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle1_axleBrakeRate}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle1_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle1_leftMaxProcessDiff}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle1_rightRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle1_leftRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle1_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bsle1_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bsle1_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bsle1_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bsle1_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bsle1_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">二轴</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle2_axleBrakeRate}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle2_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle2_leftMaxProcessDiff}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle2_rightRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle2_leftRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle2_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bsle2_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bsle2_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bsle2_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bsle2_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bsle2_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">三轴</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle3_axleBrakeRate}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle3_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle3_leftMaxProcessDiff}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle3_rightRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle3_leftRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle3_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bsle3_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bsle3_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bsle3_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bsle3_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bsle3_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">四轴</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle4_axleBrakeRate}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle4_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle4_leftMaxProcessDiff}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle4_rightRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle4_leftRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle4_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bsle4_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bsle4_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bsle4_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bsle4_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bsle4_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">五轴</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle5_axleBrakeRate}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle5_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle5_leftMaxProcessDiff}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle5_rightRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle5_leftRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle5_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bsle5_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bsle5_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bsle5_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bsle5_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bsle5_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">六轴</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle6_axleBrakeRate}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.bsle6_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle6_leftMaxProcessDiff}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle6_rightRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle6_leftRetardingForce}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.bsle6_brakeUnbalanceRate}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.bsle6_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.bsle6_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.bsle6_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.bsle6_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.bsle6_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <!-- 路试 -->
                        <tr>
                            <td class="table_td" rowspan="3">
                                <div class="cell">路试</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="2">
                                <div class="cell">行车制动</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">初速度：{{testRecordData.brtb_initialVelocity}} km/h</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">试车道宽度：{{testRecordData.brtb_laneWidth}} m</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">制动距离：{{testRecordData.brtb_brakeDistance}} m</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell" v-if="testRecordData.brtb_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.brtb_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.brtb_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.brtb_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.brtb_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="4">
                                <div class="cell">MFDD： {{testRecordData.brtb_mfdd}} m/s²</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">制动稳定性：{{testRecordData.brtb_brakeStability}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">汽车列车制动协调时间：{{testRecordData.brtb_brakeCoordinateTime}} s</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="2">
                                <div class="cell">驻车制动</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">驻车坡度：{{testRecordData.brtp_parkSlope}} %</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">不少于5min坡道驻车情况：{{testRecordData.brtp_parkResult}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.brtp_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.brtp_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.brtp_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.brtp_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.brtp_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                    </table>
                    <table class="table-more-table" style="width: 100%;border-top:0;">
                        <!-- 排放性 汽油车-->
                        <tr>
                            <td class="table_td width-short0" rowspan="8">
                                <div class="cell">排放性</div>
                            </td>
                            <td class="table_td width-short0" rowspan="4">
                                <div class="cell">汽油车</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">双怠速法</div>
                            </td>
                            <td class="table_td" colspan="6">
                                <div class="cell">稳态工况</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="4">
                                <div class="cell">简易瞬态工况</div>
                            </td>
                            <td class="table_td th_short" rowspan="2">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="3">
                                <div class="cell">高怠速</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">低怠速</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">5025</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">2540</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short3">
                                <div class="cell">CO %</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HC 10-6</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">λ</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">CO %</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HC 10-6</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">CO %</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HC 10-6</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HO 10-6</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">CO %</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HC 10-6</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HO 10-6</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">CO g/km</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HC g/km</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">NO g/km</div>
                            </td>
                            <td class="table_td width-short3">
                                <div class="cell">HC+NO g/km</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_highCo}}&nbsp;</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_highHc}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_highL}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_lowCo}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_lowHc}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_co5025}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_hc5025}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_no5025}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_co2540}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_hc2540}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_no2540}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_vmasCo}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_vmasHc}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_vmasNo}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.es_vmasHcNo}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.es_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.es_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.es_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.es_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.es_evaluate==='4'">未检验</div>
                            </td>
                        </tr>
                        <!-- 柴油车 -->
                        <tr>
                            <td class="table_td width-short0" rowspan="4">
                                <div class="cell">柴油车</div>
                            </td>
                            <td class="table_td" colspan="8">
                                <div class="cell">自由加速法</div>
                            </td>
                            <td class="table_td" colspan="7">
                                <div class="cell">加载减速工况</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short0" colspan="4">
                                <div class="cell">光吸收系数 m -1</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">滤纸研读 BSU</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">光吸收系数 m</div>
                            </td>
                            <td class="table_td" colspan="4" rowspan="2">
                                <div class="cell">实测最大轮边功率 /kW</div>
                            </td>
                            <td class="table_td th_short" rowspan="2">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">1</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">2</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">3</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">平均</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">1</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">2</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">3</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">平均</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">100%</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">90%</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">80%</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_ratio1==='1'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_ratio1">&nbsp;</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_ratio2==='1'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_ratio2"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_ratio3==='1'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_ratio3"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_ratioBalance==='1'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_ratioBalance"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_smoke1==='2'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_smoke1"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_smoke2==='2'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_smoke2"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_smoke3==='2'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_smoke3"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.essv_smokeBalance==='2'">{{testRecordData.vinNo}}</div>
                                <div class="cell" v-if="!testRecordData.essv_smokeBalance"></div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.essv_ratio100}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.essv_ratio90}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">{{testRecordData.essv_ratio80}}</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">{{testRecordData.essv_maxWheelSidePower}}</div>
                            </td>
                            <td class="table_td th_short">
                                <div class="cell" v-if="testRecordData.essv_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.essv_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.essv_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.essv_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.essv_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.essv_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <!-- 悬架 -->
                        <tr>
                            <td class="table_td width-short0" rowspan="2">
                                <div class="cell">悬架</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">前轴 后轴</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">左吸收率：{{testRecordData.sss_efficiencyOfLeftAxle}} %</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">右吸收率：{{testRecordData.sss_efficiencyOfRightAxle}} %</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">左右差：{{testRecordData.sss_absorbRateDifOfAxle}} %</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.sss_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.sss_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.sss_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.sss_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.sss_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.sss_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="5">
                                <div class="cell">左吸收率：{{testRecordData.sss1_efficiencyOfLeftAxle}} %</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">右吸收率：{{testRecordData.sss1_efficiencyOfRightAxle}} %</div>
                            </td>
                            <td class="table_td" colspan="5">
                                <div class="cell">左右差：{{testRecordData.sss1_absorbRateDifOfAxle}} %</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.sss1_absorbRateDifOfAxle==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.sss1_absorbRateDifOfAxle==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.sss1_absorbRateDifOfAxle==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.sss1_absorbRateDifOfAxle==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.sss1_absorbRateDifOfAxle==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.sss1_absorbRateDifOfAxle==='N'">不适用项</div>
                            </td>
                        </tr>
                        <!-- 前照灯 -->
                        <tr>
                            <td class="table_td width-short0" rowspan="6">
                                <div class="cell">前照灯</div>
                            </td>
                            <td class="table_td" rowspan="2">
                                <div class="cell">项目</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">灯高 mm</div>
                            </td>
                            <td class="table_td" rowspan="2" colspan="3">
                                <div class="cell">远光光强 cd</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">远光偏移</div>
                            </td>
                            <td class="table_td" colspan="4">
                                <div class="cell">近光偏移</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="2">
                                <div class="cell">近光</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">远光</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">垂直 H</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">水平 mm/10m</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">垂直 H</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">水平 mm/10m</div>
                            </td>
                            <td class="table_td">
                                <div class="cell">/</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">左外</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml1_nearLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml1_farLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.ml1_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml1_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml1_farLightHOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml1_nearLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml1_nearLightHOffset}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.ml1_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.ml1_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.ml1_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.ml1_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.ml1_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.ml1_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">左内</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml2_nearLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml2_farLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.ml2_nearLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml2_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml2_farLightHOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml2_nearLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml2_nearLightHOffset}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.ml2_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.ml2_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.ml2_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.ml2_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.ml2_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.ml2_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">右外</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml3_nearLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml3_farLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.ml3_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml3_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml3_farLightHOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml3_nearLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml3_nearLightHOffset}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.ml3_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.ml3_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.ml3_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.ml3_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.ml3_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.ml3_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td">
                                <div class="cell">右内</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml4_nearLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml4_farLightLampHight}}</div>
                            </td>
                            <td class="table_td" colspan="3">
                                <div class="cell">{{testRecordData.ml4_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml4_farLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml4_farLightHOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml4_nearLightVOffset}}</div>
                            </td>
                            <td class="table_td" colspan="2">
                                <div class="cell">{{testRecordData.ml4_nearLightHOffset}}</div>
                            </td>
                            <td class="table_td">
                                <div class="cell" v-if="testRecordData.ml4_evaluate==='1'">符合一级要求</div>
                                <div class="cell" v-if="testRecordData.ml4_evaluate==='2'">符合二级要求</div>
                                <div class="cell" v-if="testRecordData.ml4_evaluate==='0'">合格</div>
                                <div class="cell" v-if="testRecordData.ml4_evaluate==='-1'">不合格</div>
                                <div class="cell" v-if="testRecordData.ml4_evaluate==='4'">未检验</div>
                                <div class="cell" v-if="testRecordData.ml4_evaluate==='N'">不适用项</div>
                            </td>
                        </tr>
                        <!-- 车速表 -->
                        <tr>
                            <td class="table_td width-short0">
                                <div class="cell">车速表</div>
                            </td>
                            <td class="table_td" colspan="16">
                                <div class="cell"> km / h</div>
                            </td>
                            <td class="table_td">
                                <div class="cell"></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short0" rowspan="2">
                                <div class="cell">侧滑量</div>
                            </td>
                            <td class="table_td" colspan="16">
                                <div class="cell">第一转向轮 m / km</div>
                            </td>
                            <td class="table_td">
                                <div class="cell"></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td" colspan="16">
                                <div class="cell">第二转向轮 m / km</div>
                            </td>
                            <td class="table_td">
                                <div class="cell"></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short0">
                                <div class="cell">喇叭</div>
                            </td>
                            <td class="table_td" colspan="16">
                                <div class="cell">声压级 dB (A)</div>
                            </td>
                            <td class="table_td">
                                <div class="cell"></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short0">
                                <div class="cell">不合格项汇总</div>
                            </td>
                            <td class="table_td" colspan="17">
                                <div class="cell" style="text-align:left;"></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="table_td width-short0">
                                <div class="cell">检验工位照片</div>
                            </td>
                            <td class="table_td" colspan="17">
                                <div class="cell" style="text-align:left;">
                                    <div class="table-image" style="display: inline-block;width:300px;height:220px; margin-left:30px;" v-if="testRecordData.imageUrl3">
                                        <img style="width:300px; height:220px;" @click="$lookImg(testRecordData.imageUrl1)" :src="testRecordData.imageUrl1">
                                    </div>
                                    <div class="table-image" style="display: inline-block;width:300px;height:220px;margin-left:30px;" v-if="testRecordData.imageUrl3">
                                        <img style="width:300px; height:220px;" @click="$lookImg(testRecordData.imageUrl2)" :src="testRecordData.imageUrl2">
                                    </div>
                                    <div class="table-image" style="display: inline-block;width:300px;height:220px;margin-left:30px;" v-if="testRecordData.imageUrl3">
                                        <img style="width:300px; height:220px;" @click="$lookImg(testRecordData.imageUrl3)" :src="testRecordData.imageUrl3">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </el-tab-pane>
                <el-tab-pane label="人工检验结果" name="third">
                    <table class="table-more-table" style="width: 100%;">
                            <tr style="background:#F8FAFB;color:#666;">
                                <th class="table_th th_short">序号</th>
                                <th class="table_th th_short">检验项目</th>
                                <th class="table_th">判定</th>
                                <th class="table_th">不符合项目</th>
                            </tr>
                            <tr>
                                <td class="table_td">
                                    <div class="cell">1</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">唯一性认定</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="manualTesting.m1_evaluate==='1'">符合一级要求</div>
                                    <div class="cell" v-if="manualTesting.m1_evaluate==='2'">符合二级要求</div>
                                    <div class="cell" v-if="manualTesting.m1_evaluate==='0'">合格</div>
                                    <div class="cell" v-if="manualTesting.m1_evaluate==='-1'">不合格</div>
                                    <div class="cell" v-if="manualTesting.m1_evaluate==='4'">未检验</div>
                                    <div class="cell" v-if="manualTesting.m1_evaluate==='N'">不适用项</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{manualTesting.m1_unqualifieditem}}</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_td">
                                    <div class="cell">2</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">故障信息诊断</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="manualTesting.m2_evaluate==='1'">符合一级要求</div>
                                    <div class="cell" v-if="manualTesting.m2_evaluate==='2'">符合二级要求</div>
                                    <div class="cell" v-if="manualTesting.m2_evaluate==='0'">合格</div>
                                    <div class="cell" v-if="manualTesting.m2_evaluate==='-1'">不合格</div>
                                    <div class="cell" v-if="manualTesting.m2_evaluate==='4'">未检验</div>
                                    <div class="cell" v-if="manualTesting.m2_evaluate==='N'">不适用项</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{manualTesting.m2_unqualifieditem}}</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_td">
                                    <div class="cell">3</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">外观检查</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="manualTesting.m3_evaluate==='1'">符合一级要求</div>
                                    <div class="cell" v-if="manualTesting.m3_evaluate==='2'">符合二级要求</div>
                                    <div class="cell" v-if="manualTesting.m3_evaluate==='0'">合格</div>
                                    <div class="cell" v-if="manualTesting.m3_evaluate==='-1'">不合格</div>
                                    <div class="cell" v-if="manualTesting.m3_evaluate==='4'">未检验</div>
                                    <div class="cell" v-if="manualTesting.m3_evaluate==='N'">不适用项</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{manualTesting.m2_unqualifieditem}}</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_td">
                                    <div class="cell">4</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">运行检查</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="manualTesting.m4_evaluate==='1'">符合一级要求</div>
                                    <div class="cell" v-if="manualTesting.m4_evaluate==='2'">符合二级要求</div>
                                    <div class="cell" v-if="manualTesting.m4_evaluate==='0'">合格</div>
                                    <div class="cell" v-if="manualTesting.m4_evaluate==='-1'">不合格</div>
                                    <div class="cell" v-if="manualTesting.m4_evaluate==='4'">未检验</div>
                                    <div class="cell" v-if="manualTesting.m4_evaluate==='N'">不适用项</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{manualTesting.m4_unqualifieditem}}</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_td">
                                    <div class="cell">5</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">底盘检查</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="manualTesting.m5_evaluate==='1'">符合一级要求</div>
                                    <div class="cell" v-if="manualTesting.m5_evaluate==='2'">符合二级要求</div>
                                    <div class="cell" v-if="manualTesting.m5_evaluate==='0'">合格</div>
                                    <div class="cell" v-if="manualTesting.m5_evaluate==='-1'">不合格</div>
                                    <div class="cell" v-if="manualTesting.m5_evaluate==='4'">未检验</div>
                                    <div class="cell" v-if="manualTesting.m5_evaluate==='N'">不适用项</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{manualTesting.m5_unqualifieditem}}</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_td">
                                    <div class="cell">6</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">核查评定</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="manualTesting.m6_evaluate==='1'">符合一级要求</div>
                                    <div class="cell" v-if="manualTesting.m6_evaluate==='2'">符合二级要求</div>
                                    <div class="cell" v-if="manualTesting.m6_evaluate==='0'">合格</div>
                                    <div class="cell" v-if="manualTesting.m6_evaluate==='-1'">不合格</div>
                                    <div class="cell" v-if="manualTesting.m6_evaluate==='4'">未检验</div>
                                    <div class="cell" v-if="manualTesting.m6_evaluate==='N'">不适用项</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{manualTesting.m6_unqualifieditem}}</div>
                                </td>
                            </tr>
                        </table>
                   <!--  <el-table
                        border
                        :data="tableData"
                        class="tableBorder"
                        style="width: 100%;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="检验项目"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="判定"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="不符合项目"
                        min-width="5%">
                        </el-table-column>
                    </el-table> -->
                </el-tab-pane>
                <el-tab-pane label="性能检验结果" name="fourth">
                    <table class="table-more-table" style="width: 100%;">
                            <tr style="background:#F8FAFB">
                                <th class="table_th th_short">序号</th>
                                <th class="table_th">检验项目</th>
                                <th class="table_th">检验数据</th>
                                <th class="table_th">标准限值</th>
                                <th class="table_th th_short">判定</th>
                               <!--  <th class="table_th th_short">序号</th>
                                <th class="table_th">检验项目</th>
                                <th class="table_th">检验数据</th>
                                <th class="table_th">标准限值</th>
                                <th class="table_th th_short">判定</th> -->
                            </tr>
                            <tr v-for="(item, index) in performanceTesting" :key="index">
                                <td class="table_td">
                                    <div class="cell">{{item.num}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{item.itemName1}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{item.detectData1}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{item.standardValue1}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="item.unqualifiedItem1==='1'">符合一级要求</div>
                                    <div class="cell" v-if="item.unqualifiedItem1==='2'">符合二级要求</div>
                                    <div class="cell" v-if="item.unqualifiedItem1==='0'">合格</div>
                                    <div class="cell" v-if="item.unqualifiedItem1==='-1'">不合格</div>
                                    <div class="cell" v-if="item.unqualifiedItem1==='4'">未检验</div>
                                    <div class="cell" v-if="item.unqualifiedItem1==='N'">不适用项</div>
                                </td>
                                <!-- <td class="table_td">
                                    <div class="cell">{{item.rowNum2}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{item.itemName2}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{item.detectData2}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell">{{item.standardValue2}}</div>
                                </td>
                                <td class="table_td">
                                    <div class="cell" v-if="item.unqualifiedItem2==='1'">符合一级要求</div>
                                    <div class="cell" v-if="item.unqualifiedItem2==='2'">符合二级要求</div>
                                    <div class="cell" v-if="item.unqualifiedItem2==='0'">合格</div>
                                    <div class="cell" v-if="item.unqualifiedItem2==='-1'">不合格</div>
                                    <div class="cell" v-if="item.unqualifiedItem2==='4'">未检验</div>
                                    <div class="cell" v-if="item.unqualifiedItem2==='N'">不适用项</div>
                                </td> -->
                            </tr>
                        </table>
                    <!-- <el-table
                        border
                        :data="tableData"
                        class="tableBorder"
                        style="width: 100%;">
                        <el-table-column
                        prop="num"
                        align="left"
                        label="序号"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="检验项目"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="检验数据"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="标准限值"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="num"
                        align="left"
                        label="判定"
                        min-width="5%">
                        </el-table-column>
                    </el-table> -->
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import { setNum } from '@/utils/utils.js'
import { plateColor, carBodyColor } from '@/utils/type.js'
export default {
    name: 'detectionDataDetail',
    data () {
        return {
            performanceTesting: [],
            manualTesting: {},
            tableData: [],
            testRecordData: {},
            activeName: 'first',
            plateColor,
            obj: {},
            carBodyColor,
            info: {},
            pic: {}
        }
    },
    components: {
    },
    created () {
        if (!this.$checkAuth('inspect:view')) {
            this.$alert('您没有该权限')
            return
        }
        // this.$post('inspect/view', {
        //     data: {
        //         inspectId: this.$route.query.id
        //     }
        // }).then(res => {
        //     this.info = res.data.inspectInfo || {}
        //     this.pic = res.data.busInspectPic || {}
        //     this.obj = res.data
        // })
        this.$get(`inspect/view/base/${this.$route.query.id}`).then(res => {
            if (res.data) {
                this.info = res.data
            }
        })
        this.$get(`inspect/view/jcdetectrecord/${this.$route.query.id}`).then(res => {
            if (res.code === 0) {
                this.testRecordData = res.data || {}
            }
        })
        this.$get(`inspect/view/zhJcdetectrecord/${this.$route.query.id}`).then(res => {
            // console.log(res)
            if (res.code === 0) {
                // this.performanceTesting = res.data
                this.testRecordData = res.data.baseInfo || {}
                this.performanceTesting = this.$setNum(res.data.performanceList || [], 1, 999)
                if (res.data.manualList && res.data) {
                    this.manualTesting = res.data.manualList[0] || {}
                }
            }
        })
    },
    methods: {
        // 关闭页面
        close () {
            if (this.$route.query.sourcePage) {
                this.$store.dispatch('closePage', {
                    nextPath: `/vehicleConditionReport?id=${this.$route.query.sourcePage}`
                })
            } else {
                this.$store.dispatch('closePage', {
                    nextPath: '/detectionData'
                })
            }
        }
    }
}
</script>

<style lang='less' scoped>
.detectionDataDetail {
    .detail_model {
        .img_box {
            cursor: pointer;
            float: left;
            margin-right: 32px;
            margin-top: 10px;
            img {
                width: 88px;
                height: 88px;
                padding: 8px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 4px;
            }
            p {
                text-align: center;
            }
        }
    }
    .table-more-table {
        border: 1px solid #EBEEF5;
        .table_th {
            color: #666;
            padding: 10px 0;
            text-align: center;
            border-right: 1px solid #EBEEF5;
            border-bottom: 1px solid #EBEEF5;
        }
        .table_td {
            color: #323b4e;
            padding: 10px 0;
            text-align: center;
            border-right: 1px solid #EBEEF5;
            border-bottom: 1px solid #EBEEF5;
        }
        .th_short {
            width: 120px;
        }
        .width-short0 {
            width: 40px;
        }
        .width-short {
            width: 98px;
        }
        .width-short2 {
        }
        .width-short3 {
            width: 80px;
        }
        .cell {
            padding: 0 10px;
            box-sizing: border-box;
            white-space: normal;
            word-break: break-all;
        }
    }
}
</style>
<style lang="less">
.detectionDataDetail {
    .el-tabs__header {
        line-height: 68px;
    }
}
</style>

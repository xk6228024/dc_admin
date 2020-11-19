<!-- 企业数据详情-不可编辑 -->
<template>
    <div class="maintenanceOfEnterpriseDetail detailPage" id="maintenanceOfEnterpriseDetail">
        <div class="detail_header">
            <!-- <el-button type="primary" class="btn" v-if="!edit" @click="toEdit">编 辑</el-button> -->
            <el-button type="primary" class="btn" v-if="edit" @click="saveData">保 存</el-button>
            <el-button class="goBack btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content" v-loading="loading">
            <div class="detail_model" v-show="!edit">
                <h4>基本信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <span class="label">企业名称：</span>
                        <span class="value">{{detailData.enterpriseName}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">企业简称：</span>
                        <span class="value">{{detailData.enterpriseJcShortName}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">企业类型：</span>
                        <span class="value">{{detailData.enterpriseFixTypeName}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">主营项目：</span>
                        <span class="value">{{detailData.enterpriseMainprojectIds|mainCampTypeFilter}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">所在地区：</span>
                        <span class="value">
                            <!-- {{detailData.enterpriseAddrProvinceName}} /
                            {{detailData.enterpriseAddrCityName}} /
                            {{detailData.enterpriseAddrDistrictName}} -->
                            {{detailData.provinceCityRegion}}
                        </span>
                    </div>
                    <div class="detail_item">
                        <span class="label">维修经营类别：</span>
                        <span>{{detailData.enterpriseBusinessCategory | serviceTypeFilter}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">社会信用代码：</span>
                        <span class="value">{{detailData.enterpriseCreditIdentifier}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">许可证号：</span>
                        <span class="value">{{detailData.enterpriseBusinessCertificate}}</span>
                    </div>
                    <!-- <div class="detail_item" v-if="detailData.enterpriseTypeId === '2'">
                        <span class="label">检测站等级：</span>
                        <span class="value">{{detailData.enterpriseJcGrade | jcGradeFilter}}</span>
                    </div> -->
                    <div class="detail_item">
                        <span class="label">许可证有效期：</span>
                        <span class="value">{{detailData.enterpriseCertificateE}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">负责人：</span>
                        <span class="value">{{detailData.enterpriseOwner}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">负责人电话：</span>
                        <span class="value">{{detailData.enterpriseOwnerPhone}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">负责人身份证号码：</span>
                        <span class="value">{{detailData.enterpriseLinkIdcardnumber}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">联系人：</span>
                        <span class="value">{{detailData.enterpriseLinkName}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">联系人电话：</span>
                        <span class="value">{{detailData.enterpriseLinkMobile}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">联系人身份证号码：</span>
                        <span class="value">{{detailData.enterpriseOwnerIdcardnumber}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">业务电话：</span>
                        <span class="value">{{detailData.enterpriseBusinessPhone}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">营业时间：</span>
                        <span class="value">{{detailData.enterpriseJcBusinessS}} ~ {{detailData.enterpriseJcBusinessE}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">邮政编码：</span>
                        <span class="value">{{detailData.enterprisePostalcode}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">经营地址：</span>
                        <span class="value">{{detailData.enterpriseOperatingAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">开业日期：</span>
                        <span class="value">{{detailData.enterpriseCreateSiteTime|filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item" style="width:100%;">
                        <span class="label">经营范围：</span>
                        <span class="value">{{detailData.enterpriseOperationArea}}</span>
                    </div>
                    <div class="detail_item" style="width:100%;">
                        <span class="label">企业介绍：</span>
                        <span class="value">{{detailData.enterpriseIntroduction}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model" style="border:none;" v-show="!edit">
                <h4>拓展信息</h4>
                <div class="second clearfix">
                    <div class="clearfix">
                        <div class="detail_item">
                            <span class="label">地图经纬度：</span>
                            <span class="value">{{detailData.enterpriseAddrX}} ; {{detailData.enterpriseAddrY}}</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">电子邮箱：</span>
                            <span class="value">{{detailData.enterpriseRegisterEmail}}</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">企业网站：</span>
                            <span class="value">{{detailData.enterpriseSiteUrl}}</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">尾气治理站：</span>
                            <span class="value" v-if="detailData.enterpriseTailGasTreatmentStationIs==='0'">否</span>
                            <span class="value" v-if="detailData.enterpriseTailGasTreatmentStationIs==='1'">是</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">连锁或集团经营企业：</span>
                            <span class="value" v-if="detailData.enterpriseChainOrGroupIs==='0'">否</span>
                            <span class="value" v-if="detailData.enterpriseChainOrGroupIs==='1'">是</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">4S或特约维修点：</span>
                            <span class="value" v-if="detailData.enterprise4SSpecialMaintenanceIs==='0'">否</span>
                            <span class="value" v-if="detailData.enterprise4SSpecialMaintenanceIs==='1'">是</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">质量保障里程(公里)：</span>
                            <span class="value">{{detailData.enterpriseQaMileage}}</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">质量保障日期(天数)：</span>
                            <span class="value">{{detailData.enterpriseQaDay}}</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">企业注册资本(万元)：</span>
                            <span class="value">{{detailData.enterpriseRegisteredCapital || '--'}}</span>
                        </div>
                        <div class="detail_item" style="width:100%;">
                            <span class="label">主修品牌：</span>
                            <span class="value">{{detailData.enterpriseMajorBrandName}}</span>
                        </div>
                        <div class="detail_item">
                            <span class="label">企业LOGO图片</span>
                            <div style="height:124px;">
                                <div class="item-image-wrap" v-if="detailData.enterprisePicUrl">
                                    <img class="item-image" :src="detailData.enterprisePicUrl"
                                    @click="$lookImg(detailData.enterprisePicUrl)">
                                </div>
                                <div class="item-image-wrap" v-else>
                                    <div class="nophoto">
                                        <img src="@/assets/images/nophoto.png">
                                        <p>暂无图片</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detail_item" style="width:67%;">
                            <span class="label">门店照片</span>
                            <div style="min-height:124px;">
                                <div class="item-image-wrap" v-for="(item, index) in detailData.enterpriseStoresImages" :key="index">
                                    <img class="item-image" :src="item"
                                    @click="$lookImg(item)">
                                </div>
                                <div class="item-image-wrap" v-if="!detailData.enterpriseStoresImages.length">
                                    <div class="nophoto">
                                        <img src="@/assets/images/nophoto.png">
                                        <p>暂无图片</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detail_item">
                            <span class="label">许可证照片</span>
                            <div style="height:124px;">
                                <div class="item-image-wrap" v-if="detailData.enterpriseBusinessPermit">
                                    <img class="item-image" :src="detailData.enterpriseBusinessPermit"
                                    @click="$lookImg(detailData.enterpriseBusinessPermit)">
                                </div>
                                <div class="item-image-wrap" v-else>
                                    <div class="nophoto">
                                        <img src="@/assets/images/nophoto.png">
                                        <p>暂无图片</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detail_item">
                            <span class="label">营业执照照片</span>
                            <div style="height:124px;">
                                <div class="item-image-wrap" v-if="detailData.enterpriseBusinessLicense">
                                    <img class="item-image" :src="detailData.enterpriseBusinessLicense"
                                    @click="$lookImg(detailData.enterpriseBusinessLicense)">
                                </div>
                                <div class="item-image-wrap" v-else>
                                    <div class="nophoto">
                                        <img src="@/assets/images/nophoto.png">
                                        <p>暂无图片</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="detail_model" style="border:none;" v-show="!edit">
                <h4>其他信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <span class="label">检测企业省网编码：</span>
                        <span class="value">{{detailData.enterpriseJcCoding}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">电子健康档案省网账号：</span>
                        <span class="value">{{detailData.enterpriseProvinceUser}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">电子健康档案省网密码：</span>
                        <span class="value">{{detailData.enterpriseProvincePass}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">占地面积(㎡)：</span>
                        <span class="value">{{detailData.enterpriseJcAreaCovered}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">检测企业主检测面积(㎡)：</span>
                        <span class="value">{{detailData.enterpriseJcMainCheckArea}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">检测企业辅助面积(㎡)：</span>
                        <span class="value">{{detailData.enterpriseJcAuxiliaryArea}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">检测企业停车场面积(㎡)：</span>
                        <span class="value">{{detailData.enterpriseJcParkingArea}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">检测企业试车道大小：</span>
                        <span class="value">{{detailData.enterpriseJcTestLaneSize}}</span>
                    </div>
                    <div class="detail_item">
                        <span class="label">检测企业设备总台数：</span>
                        <span class="value">{{detailData.enterpriseJcEquipmentTotal}}</span>
                    </div>
                </div>
            </div> -->
            <div class="edit_content" v-show="edit">
                <el-form :model="detailData" ref="form" class="form">
                    <div class="detail_model">
                        <h4>基本信息</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>企业名称</label>
                                <el-form-item prop="enterpriseName">
                                    <el-input
                                        :disabled="true"
                                        class="edit_input"
                                        maxlength="30"
                                        v-model.trim="detailData.enterpriseName"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>企业简称<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseJcShortName" :rules="$validate({required:true})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="30"
                                        v-model="detailData.enterpriseJcShortName"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>企业类型<span class="required">(不可编辑)</span></label>
                                <el-form-item prop="enterpriseTypeName" :rules="$validate({required:true})">
                                    <el-input
                                        class="edit_input"
                                        :disabled="true"
                                        v-model="detailData.enterpriseTypeName"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>所在地区<span class="required">(必填)</span></label>
                                <el-form-item prop="addr" :rules="$validate({required:true, type: 'array'})">
                                    <el-cascader :props="props" :options="options"
                                        ref="region"
                                        v-model="detailData.addr"
                                        class="edit_input"
                                        @change="regionChange">
                                    </el-cascader>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <div class="detail_item_empty" v-if="detailData.enterpriseTypeId === '2'"></div>
                                <label v-if="detailData.enterpriseTypeId === '1'">
                                    维修经营类别<span class="required">(维修企业必填)</span>
                                </label>
                                <el-form-item prop="enterpriseBusinessCategory"
                                v-if="detailData.enterpriseTypeId === '1'"
                                :rules="$validate({required:detailData.enterpriseTypeId === '1'})">
                                    <el-select v-model="detailData.enterpriseBusinessCategory"
                                    :disabled="detailData.enterpriseTypeId === '2'"
                                    placeholder="请选择">
                                        <el-option
                                            v-for="item in serviceTypeList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <div class="detail_item_empty" v-if="detailData.enterpriseTypeId === '1'"></div>
                                <label v-if="detailData.enterpriseTypeId === '2'">
                                    检测站等级<span class="required">(检测企业必填)</span>
                                </label>
                                <el-form-item prop="enterpriseJcGrade"
                                v-if="detailData.enterpriseTypeId === '2'"
                                :rules="$validate({required:detailData.enterpriseTypeId === '2'})">
                                    <el-select v-model="detailData.enterpriseJcGrade"
                                    :disabled="detailData.enterpriseTypeId === '1'"
                                    placeholder="请选择">
                                        <el-option
                                            v-for="item in enterpriseJcGradeList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>社会信用代码<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseCreditIdentifier"
                                :rules="$validate({required:true, type: 'enterpriseCreditIdentifier'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="18"
                                        v-model.trim="detailData.enterpriseCreditIdentifier"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>许可证号<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseBusinessCertificate"
                                :rules="$validate({required:true, type: 'enterpriseBusinessCertificate'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="12"
                                        v-model.trim="detailData.enterpriseBusinessCertificate"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>许可证有效期</label>
                                <el-form-item prop="enterpriseCertificate">
                                    <el-date-picker
                                    v-model="detailData.enterpriseCertificate"
                                    type="daterange"
                                    unlink-panels
                                    value-format="yyyy-MM-dd"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>负责人<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseOwner" :rules="$validate({required:true})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="25"
                                        v-model.trim="detailData.enterpriseOwner"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>负责人电话<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseOwnerPhone" :rules="$validate({required:true, type: 'phone'})">
                                    <el-input
                                        class="edit_input"
                                        onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
                                        maxlength="11"
                                        v-model="detailData.enterpriseOwnerPhone"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>负责人身份证号码</label>
                                <el-form-item prop="enterpriseLinkIdcardnumber" :rules="$validate({type: 'idcard'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="18"
                                        v-model.trim="detailData.enterpriseLinkIdcardnumber"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>联系人<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseLinkName" :rules="$validate({required:true})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="25"
                                        v-model.trim="detailData.enterpriseLinkName"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>联系人电话<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseLinkMobile" :rules="$validate({required:true, type: 'phone'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="11"
                                        onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
                                        v-model="detailData.enterpriseLinkMobile"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>联系人身份证号码</label>
                                <el-form-item prop="enterpriseOwnerIdcardnumber" :rules="$validate({type: 'idcard'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="18"
                                        v-model="detailData.enterpriseOwnerIdcardnumber"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>业务电话<span class="required">(必填)</span></label>
                                <el-form-item prop="enterpriseBusinessPhone"
                                :rules="$validate({required:true, type: 'tel', message: '请输入正确的业务电话'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="15"
                                        v-model.trim="detailData.enterpriseBusinessPhone"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>营业时间</label>
                                <el-form-item prop="enterpriseJcBusiness">
                                    <el-time-picker
                                        is-range
                                        v-model="detailData.enterpriseJcBusiness"
                                        value-format="HH:mm:ss"
                                        range-separator="至"
                                        start-placeholder="开始时间"
                                        end-placeholder="结束时间"
                                        placeholder="选择时间范围">
                                    </el-time-picker>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>邮政编码</label>
                                <el-form-item prop="enterprisePostalcode" :rules="$validate({type: 'num'})">
                                    <el-input
                                        class="edit_input"
                                        onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
                                        v-model="detailData.enterprisePostalcode"
                                        maxlength="6"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>经营地址</label>
                                <el-form-item prop="enterpriseOperatingAddress">
                                    <el-input
                                        class="edit_input"
                                        maxlength="50"
                                        v-model.trim="detailData.enterpriseOperatingAddress"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>经营范围</label>
                                <el-form-item prop="enterpriseOperationArea">
                                    <el-input
                                        class="edit_input"
                                        maxlength="250"
                                        v-model.trim="detailData.enterpriseOperationArea"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>开业日期</label>
                                <el-form-item prop="enterpriseCreateSiteTime">
                                    <el-date-picker
                                        class="edit_input"
                                        v-model="detailData.enterpriseCreateSiteTime"
                                        type="date"
                                        value-format="timestamp"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="detail_item" style="width:92.5%;">
                                <label>企业介绍</label>
                                <el-form-item prop="enterpriseIntroduction">
                                    <el-input
                                        type="textarea"
                                        :rows="3"
                                        maxlength="300"
                                        v-model="detailData.enterpriseIntroduction"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                    <div class="detail_model">
                        <h4>拓展信息</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>地图经纬度</label>
                                <el-form-item prop="enterpriseAddrX">
                                    <div class="map-location" @click="showMap">
                                        {{detailData.enterpriseAddrX}},{{detailData.enterpriseAddrY}}
                                        <i class="el-icon-location-outline"></i>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>电子邮箱</label>
                                <el-form-item prop="enterpriseRegisterEmail" :rules="$validate({type: 'email'})">
                                    <el-input
                                        class="edit_input"
                                        v-model.trim="detailData.enterpriseRegisterEmail"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>企业网站</label>
                                <el-form-item prop="enterpriseSiteUrl">
                                    <el-input
                                        class="edit_input"
                                        maxlength="150"
                                        v-model.trim="detailData.enterpriseSiteUrl"
                                        placeholder="请输入">
                                        <template slot="prepend">Http://</template>
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>尾气治理站</label>
                                <el-form-item prop="enterpriseTailGasTreatmentStationIs">
                                    <el-select class="edit_input" v-model="detailData.enterpriseTailGasTreatmentStationIs" placeholder="请选择">
                                        <el-option
                                        v-for="item in radioSelect"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>连锁或集团经营企业</label>
                                <el-form-item prop="enterpriseChainOrGroupIs">
                                    <el-select class="edit_input" v-model="detailData.enterpriseChainOrGroupIs" placeholder="请选择">
                                        <el-option
                                        v-for="item in radioSelect"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>4S或特约维修点</label>
                                <el-form-item prop="enterprise4SSpecialMaintenanceIs">
                                    <el-select class="edit_input" v-model="detailData.enterprise4SSpecialMaintenanceIs" placeholder="请选择">
                                        <el-option
                                        v-for="item in radioSelect"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>质量保障里程(公里)</label>
                                <el-form-item prop="enterpriseQaMileage" :rules="$validate({type: 'floatNumber'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="15"
                                        v-model="detailData.enterpriseQaMileage"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>质量保障日期(天数)</label>
                                <el-form-item prop="enterpriseQaDay" :rules="$validate({type: 'num'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="7"
                                        v-model="detailData.enterpriseQaDay"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>企业注册资本(万元)</label>
                                <el-form-item prop="enterpriseRegisteredCapital" :rules="$validate({type: 'floatNumber'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="20"
                                        v-model="detailData.enterpriseRegisteredCapital"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item" style="width:92.5%">
                                <label>主修品牌</label>
                                <el-form-item prop="enterpriseMajorBrand">
                                    <el-select
                                    style="width:100%;"
                                    v-model="detailData.enterpriseMajorBrand"
                                    multiple
                                    filterable
                                    placeholder="请选择">
                                        <el-option-group
                                        v-for="(val, key) in brandList"
                                        :key="key"
                                        :label="key">
                                            <el-option
                                                v-for="item in brandList[key]"
                                                :key="item.carBrandId"
                                                :label="item.carBrandName"
                                                :value="item.carBrandId">
                                            </el-option>
                                        </el-option-group>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>企业LOGO图片<span class="required">(可上传1张)</span></label>
                                <el-form-item prop="enterprisePicUrl">
                                    <el-upload
                                        v-if="!detailData.enterprisePicUrl"
                                        class="image-upload"
                                        :accept="'image/png,image/jpeg'"
                                        :show-file-list="false"
                                        :action="uploadURL + 'attachment/file/upload'"
                                        :on-success="handleSuccess1"
                                        :before-upload="beforeUpload">
                                        <i class="el-icon-plus"></i>
                                        <p>支持jpg/png格式<br/>小于2M</p>
                                    </el-upload>
                                    <div v-else class="image-pic">
                                        <img :src="detailData.enterprisePicUrl" @click="$lookImg(detailData.enterprisePicUrl)" class="pic">
                                        <i class="el-icon-error" @click="clearImage('enterprisePicUrl')"></i>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="detail_item" style="width:67%;">
                                <label>门店照片<span class="required">(可上传5张)</span></label>
                                <el-form-item prop="enterpriseStoresImages">
                                    <div class="image-pic"
                                        v-for="(item, index) in detailData.enterpriseStoresImages" :key="index">
                                        <img :src="item" @click="$lookImg(item)" class="pic">
                                        <i class="el-icon-error" @click="clearImage('enterpriseStoresImages', index)" ></i>
                                    </div>
                                    <el-upload
                                        :show-file-list="false"
                                        v-if="detailData.enterpriseStoresImages.length < 5"
                                        class="image-upload"
                                        :accept="'image/png,image/jpeg'"
                                        :action="uploadURL + 'attachment/file/upload'"
                                        :on-success="handleSuccess2"
                                        :before-upload="beforeUpload">
                                        <i class="el-icon-plus"></i>
                                        <p>支持jpg/png格式<br/>小于2M</p>
                                    </el-upload>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>许可证照片<span class="required">(可上传1张)</span></label>
                                <el-form-item prop="enterpriseBusinessPermit">
                                    <el-upload
                                        v-if="!detailData.enterpriseBusinessPermit"
                                        class="image-upload"
                                        :accept="'image/png,image/jpeg'"
                                        :show-file-list="false"
                                        :action="uploadURL + 'attachment/file/upload'"
                                        :on-success="handleSuccess3"
                                        :before-upload="beforeUpload">
                                        <i class="el-icon-plus"></i>
                                        <p>支持jpg/png格式<br/>小于2M</p>
                                    </el-upload>
                                    <div v-else class="image-pic">
                                        <img :src="detailData.enterpriseBusinessPermit"
                                        @click="$lookImg(detailData.enterpriseBusinessPermit)" class="pic">
                                        <i class="el-icon-error"
                                        @click="clearImage('enterpriseBusinessPermit')" ></i>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>营业执照照片<span class="required">(可上传1张)</span></label>
                                <el-form-item prop="enterpriseBusinessLicense">
                                    <el-upload
                                        v-if="!detailData.enterpriseBusinessLicense"
                                        class="image-upload"
                                        :accept="'image/png,image/jpeg'"
                                        :show-file-list="false"
                                        :action="uploadURL + 'attachment/file/upload'"
                                        :on-success="handleSuccess4"
                                        :before-upload="beforeUpload">
                                        <i class="el-icon-plus"></i>
                                        <p>支持jpg/png格式<br/>小于2M</p>
                                    </el-upload>
                                    <div v-else class="image-pic">
                                        <img :src="detailData.enterpriseBusinessLicense"
                                        @click="$lookImg(detailData.enterpriseBusinessLicense)" class="pic">
                                        <i class="el-icon-error"
                                        @click="clearImage('enterpriseBusinessLicense')" ></i>
                                    </div>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                    <div class="detail_model">
                        <h4>其他信息</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>检测企业省网编码</label>
                                <el-form-item prop="enterpriseJcCoding">
                                    <el-input
                                        class="edit_input"
                                        maxlength="50"
                                        v-model.trim="detailData.enterpriseJcCoding"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>电子健康档案省网账号</label>
                                <el-form-item prop="enterpriseProvinceUser">
                                    <el-input
                                        maxlength="50"
                                        class="edit_input"
                                        v-model.trim="detailData.enterpriseProvinceUser"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>电子健康档案省网密码</label>
                                <el-form-item prop="enterpriseProvincePass" style="padding-right:20%;">
                                    <el-input
                                        style="display: block;margin-right: 90px;width:auto;"
                                        class="edit_input"
                                        maxlength="50"
                                        v-model.trim="detailData.enterpriseProvincePass"
                                        placeholder="请输入">
                                    </el-input>
                                    <el-button plain class="test" @click="testPass">测试</el-button>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>占地面积(㎡)</label>
                                <el-form-item prop="enterpriseJcAreaCovered" :rules="$validate({type: 'floatNumber'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="10"
                                        v-model="detailData.enterpriseJcAreaCovered"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>检测企业主检测面积(㎡)</label>
                                <el-form-item prop="enterpriseJcMainCheckArea" :rules="$validate({type: 'floatNumber'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="10"
                                        v-model="detailData.enterpriseJcMainCheckArea"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>检测企业辅助面积(㎡)</label>
                                <el-form-item prop="enterpriseJcAuxiliaryArea" :rules="$validate({type: 'floatNumber'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="10"
                                        v-model="detailData.enterpriseJcAuxiliaryArea"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>检测企业停车场面积(㎡)</label>
                                <el-form-item prop="enterpriseJcParkingArea" :rules="$validate({type: 'floatNumber'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="10"
                                        v-model="detailData.enterpriseJcParkingArea"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>检测企业试车道大小</label>
                                <el-form-item prop="enterpriseJcTestLaneSize">
                                    <el-input
                                        class="edit_input"
                                        maxlength="7"
                                        v-model="detailData.enterpriseJcTestLaneSize"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>检测企业设备总台数</label>
                                <el-form-item prop="enterpriseJcEquipmentTotal" :rules="$validate({type: 'num'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="8"
                                        v-model="detailData.enterpriseJcEquipmentTotal"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
        <modal :alert="alert" :width="650" :height="576" :title="'地图定位'" @alertConfirm="alertConfirm" @alertCancel="alertCancel">
            <div class="map-content">
                <el-row :gutter="16">
                    <el-col :span="4" class="map-input" style="padding-right: 0;text-align:right;"><label>定位地址：</label></el-col>
                    <el-col :span="16">
                        <el-input class="map-input" v-model="positionAddr" placeholder="请输入"></el-input>
                    </el-col>
                    <el-col :span="4"><el-button type="primary" class="map-input" @click="mapSearch">获取定位</el-button></el-col>
                </el-row>
                <el-row :gutter="16" style="margin-top:14px;">
                    <el-col :span="4" class="map-input" style="padding-right: 0;text-align:right;">
                        <label>经度：</label>
                    </el-col>
                    <el-col :span="8" class="map-input">
                        <span>{{center.lng || '无'}}</span>
                    </el-col>
                    <el-col :span="4" class="map-input" style="text-align:right;">
                        <label>纬度：</label>
                    </el-col>
                    <el-col :span="8" class="map-input">
                        <span>{{center.lat || '无'}}</span>
                    </el-col>
                </el-row>
                <baidu-map class="map_box" @click="mapClick" :center="center"
                    :scroll-wheel-zoom="true" :double-click-zoom="true" :zoom="15">
                    <bm-view class="map_view"></bm-view>
                    <bm-marker class="" :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                    </bm-marker>
                    <bm-local-search :keyword="BMkeyword" :panel="false" :selectFirstResult="true"
                    :auto-viewport="true"  @searchcomplete="searchcomplete"></bm-local-search>
                </baidu-map>
            </div>
        </modal>
    </div>
</template>

<script>
import axios from 'axios'
import modal from '@/components/Modal.vue'
import { jcGradeList, mainCampType } from '@/utils/type.js'
// 初次进入或者修改地区保存省市区数据
let cityList = []
let regionList = []
let provinceList = []
export default {
    name: 'maintenanceOfEnterpriseDetail',
    data () {
        return {
            zoom: 15,
            enterpriseId: '', // 企业ID
            enterprise: {},
            detailData: {
                enterpriseBusinessPermit: '',
                enterpriseBusinessLicense: '',
                enterprisePicUrl: '',
                enterpriseStoresImages: []
            }, // 全部数据
            alert: false,
            loading: false, // 加载中
            loaded: false, // 已加载
            isEdit: false, // 已修改过内容
            brandList: {}, // 主修品牌
            center: { // 坐标经纬度
                lng: 116.409,
                lat: 39.915526
            },
            positionAddr: '',
            positionAddrX: '',
            positionAddrY: '',
            BMkeyword: '', // 百度搜索关键词
            serviceTypeList: [
                {
                    value: '01',
                    label: '一类维修经营业务'
                },
                {
                    value: '02',
                    label: '二类维修经营业务'
                },
                {
                    value: '03',
                    label: '三类维修经营业务'
                }
            ],
            enterpriseJcGradeList: jcGradeList,
            options: [],
            props: {
                lazy: true,
                value: 'regionId',
                label: 'regionName',
                lazyLoad (node, resolve) {
                    const { level, value } = node
                    if (level === 1) {
                        axios.get('list/regioncityList?provinceRegionId=' + value).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = false
                            })
                            cityList = res.data.data
                            resolve(res.data.data)
                        })
                    }
                    if (level === 2) {
                        axios.get('list/regionList?cityId=' + value).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = true
                            })
                            regionList = res.data.data
                            resolve(res.data.data)
                        })
                    }
                }
            },
            uploadURL: window.uploadURL,
            radioSelect: [
                {
                    value: '0',
                    label: '否'
                },
                {
                    value: '1',
                    label: '是'
                }
            ],
            edit: false,
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556718509&di=ad0de25c93a172532d171aec8c976704&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.pcauto.com.cn%2Fprice%2Fcsrm%2F10211%2Fpic%2F20021124_03_honda_element_500.jpg'
        }
    },
    components: {
        modal
    },
    watch: {
        detailData: {
            handler () {
                if (this.loaded) {
                    this.isEdit = true
                }
            },
            deep: true
        }
    },
    created () {
        this.enterpriseId = this.$route.query.id
        this.getData()
    },
    methods: {
        splitTime (time) {
            if (!time) return ''
            if (time.split(' ').length === 1) {
                return time.split(':')[0] + ':' + time.split(':')[1]
            } else if (time.split(' ').length === 2) {
                let times = time.split(' ')[1]
                return times.split(':')[0] + ':' + times.split(':')[1]
            }
        },
        imageOnload (e) {
            const radio = e.target.width / e.target.height
            if (radio >= 1) {
                e.target.style.width = '100%'
                e.target.style.height = 'auto'
            } else {
                e.target.style.width = 'auto'
                e.target.style.height = '100%'
            }
        },
        mapClick ({ point }) {
            this.center.lng = point.lng
            this.center.lat = point.lat
        },
        testPass () {
            if (!this.detailData.enterpriseProvinceUser) {
                this.$alert('请输入电子健康档案省网账号', '提示')
                return
            }
            if (!this.detailData.enterpriseProvincePass) {
                this.$alert('电子健康档案省网密码', '提示')
                return
            }
            this.$post('/enterprise/loginprovincesite', {
                username: this.detailData.enterpriseProvinceUser,
                password: this.detailData.enterpriseProvincePass
            }).then(res => {
                if (res.data.access_token) {
                    this.$alert('账号密码测试正确', '提示')
                } else {
                    this.$alert('账号密码错误', '提示')
                }
            })
        },
        // 进入编辑
        toEdit () {
            // 权限校验**********************************************************
            // if (!this.$checkAuth('datamanage:stastic:enterprise:edit')) {
            //     this.$msg({
            //         type: 'error',
            //         message: '你没有该项权限'
            //     })
            //     return
            // }
            this.edit = true
            this.$refs.form.clearValidate()
        },
        // 将图片字符串转换成对象数组
        strTofileList (str, type) {
            if (str) {
                if (!type) {
                    return str.split(',')
                } else {
                    return str.split(',').map(item => {
                        return {
                            url: item
                        }
                    })
                }
            } else {
                return []
            }
        },
        // 保存数据
        saveData () {
            // if (!this.$checkAuth('enterprise:edit')) {
            //     this.$alert('您没有该权限')
            //     return
            // }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let data = JSON.parse(JSON.stringify(this.detailData))
                    data.enterpriseAddrProvince = data.addr[0]
                    data.enterpriseAddrCity = data.addr[1]
                    data.enterpriseAddrDistrict = data.addr[2]
                    data.enterpriseAddrX = data.enterpriseAddrX + ''
                    data.enterpriseAddrY = data.enterpriseAddrY + ''
                    data.enterpriseCertificateS = data.enterpriseCertificate[0]
                    data.enterpriseCertificateE = data.enterpriseCertificate[1]
                    data.enterpriseJcBusinessS = data.enterpriseJcBusiness[0]
                    data.enterpriseJcBusinessE = data.enterpriseJcBusiness[1]
                    if (/1/.test(data.enterpriseBusinessCategory)) {
                        data.enterpriseBusinessCategoryName = '一类维修经营业务'
                    }
                    if (/2/.test(data.enterpriseBusinessCategory)) {
                        data.enterpriseBusinessCategoryName = '二类维修经营业务'
                    }
                    if (/3/.test(data.enterpriseBusinessCategory)) {
                        data.enterpriseBusinessCategoryName = '三类维修经营业务'
                    }
                    data.enterpriseMajorBrand = data.enterpriseMajorBrand + ''
                    data.enterpriseJcEquipmentTotal = data.enterpriseJcEquipmentTotal - 0
                    data.enterpriseQaDay = data.enterpriseQaDay - 0
                    data.enterpriseRegisteredCapital = data.enterpriseRegisteredCapital - 0
                    console.log(data)
                    this.$post('enterprise/edit', data)
                        .then(res => {
                            if (res.code === 0) {
                                this.edit = false
                                this.$message({
                                    type: 'success',
                                    message: '保存成功'
                                })
                                this.getData()
                            } else {
                                this.$alert(res.msg)
                            }
                        })
                } else {
                    this.$alert('保存失败，请输入必填字段', '提示')
                }
            })
        },
        // 获取所有数据
        getData () {
            // if (!this.$checkAuth('enterprise:view')) {
            //     this.$alert('您没有该权限')
            //     return
            // }
            this.loading = true
            this.$get('enterprise/view/' + this.enterpriseId)
                .then(res => {
                    if (res && res.code === 0) {
                        // 图片格式转换
                        if (res.data.enterprisePicUrl && res.data.enterprisePicUrl.indexOf('http') === -1) {
                            res.data.enterprisePicUrl = 'http://' + res.data.enterprisePicUrl
                        }
                        if (res.data.enterpriseBusinessLicense && res.data.enterpriseBusinessLicense.indexOf('http') === -1) {
                            res.data.enterpriseBusinessLicense = 'http://' + res.data.enterpriseBusinessLicense
                        }
                        if (res.data.enterpriseBusinessPermit && res.data.enterpriseBusinessPermit.indexOf('http') === -1) {
                            res.data.enterpriseBusinessPermit = 'http://' + res.data.enterpriseBusinessPermit
                        }
                        if (res.data.enterpriseStoresImages && typeof res.data.enterpriseStoresImages === 'string') {
                            res.data.enterpriseStoresImages = res.data.enterpriseStoresImages.split(',')
                        } else if (Object.prototype.toString.call(res.data.enterpriseStoresImages) !== '[object Array]') {
                            res.data.enterpriseStoresImages = []
                        }
                        let arr = []
                        res.data.enterpriseStoresImages.forEach(e => {
                            if (e.indexOf('http') === -1) {
                                e = 'http://' + e
                                arr.push(e)
                            } else {
                                arr.push(e)
                            }
                        })
                        res.data.enterpriseStoresImages = arr
                        // 省市区格式转换
                        const { enterpriseAddrProvince, enterpriseAddrCity, enterpriseAddrDistrict } = res.data
                        if (enterpriseAddrProvince && enterpriseAddrCity && enterpriseAddrDistrict) {
                            res.data.addr = [enterpriseAddrProvince, enterpriseAddrCity, enterpriseAddrDistrict]
                        } else {
                            res.data.addr = []
                        }
                        // res.data.enterpriseMainprojectIds = '1,2'
                        // 经纬度转换
                        res.data.enterpriseAddrX = res.data.enterpriseAddrX - 0
                        res.data.enterpriseAddrY = res.data.enterpriseAddrY - 0
                        // 日期转换
                        res.data.enterpriseCertificate = [res.data.enterpriseCertificateS || '', res.data.enterpriseCertificateE || '']
                        res.data.enterpriseJcBusiness = [res.data.enterpriseJcBusinessS || '', res.data.enterpriseJcBusinessE || '']
                        // res.data.enterpriseCreateSiteTime = res.data.enterpriseCreateSiteTime || ''
                        // 品牌转换
                        if (res.data.enterpriseMajorBrand) {
                            if (res.data.enterpriseMajorBrand === 'null') {
                                res.data.enterpriseMajorBrand = []
                            } else {
                                res.data.enterpriseMajorBrand = res.data.enterpriseMajorBrand.split(',').map(item => {
                                    return item - 0
                                })
                                res.data.enterpriseMajorBrandName = res.data.enterpriseMajorBrand.map(item => {

                                })
                            }
                        } else {
                            res.data.enterpriseMajorBrand = []
                        }
                        res.data.enterpriseMajorBrandName = ''
                        this.detailData = res.data
                        this.showAddr(res.data)
                        this.findBrandList()
                        setTimeout(() => {
                            this.$refs.form.clearValidate()
                        })
                    } else {
                        this.loading = false
                    }
                })
                .catch(e => {
                    this.loading = false
                })
        },
        // 所在地市回显
        showAddr (res) {
            this.$get('list/regionProvinceList?type=1')
                .then(regionProvinceList => {
                    let provinceIndex = 0
                    regionProvinceList.data.forEach((item, index) => {
                        item.leaf = false
                        item.children = []
                        if (item.regionId === res.enterpriseAddrProvince) {
                            provinceIndex = index
                        }
                    })
                    let options = regionProvinceList.data
                    provinceList = regionProvinceList.data
                    // 如果返回信息没有省市区信息则退出
                    if (!res.enterpriseAddrProvince || !res.enterpriseAddrCity || !res.enterpriseAddrDistrict) {
                        this.loading = false
                        this.options = options
                        return
                    }
                    this.$get('list/regioncityList?provinceRegionId=' + res.enterpriseAddrProvince)
                        .then(regioncityList => {
                            let cityIndex = 0
                            regioncityList.data.forEach((item, index) => {
                                item.leaf = false
                                item.children = []
                                if (item.regionId === res.enterpriseAddrCity) {
                                    cityIndex = index
                                }
                            })
                            options[provinceIndex].children = regioncityList.data
                            cityList = regioncityList.data
                            this.$get('list/regionList?cityId=' + res.enterpriseAddrCity)
                                .then(regionListData => {
                                    let regionIndex = 0
                                    regionListData.data.forEach((item, index) => {
                                        item.leaf = true
                                        if (item.regionId === res.enterpriseAddrDistrict) {
                                            regionIndex = index
                                        }
                                    })
                                    options[provinceIndex].children[cityIndex].children = regionListData.data
                                    regionList = regionListData.data
                                    this.options = options
                                    this.loading = false
                                    this.$set(this.detailData, 'enterpriseAddrProvinceName', options[provinceIndex].regionName)
                                    this.$set(this.detailData, 'enterpriseAddrCityName', options[provinceIndex].children[cityIndex].regionName)
                                    this.$set(this.detailData, 'enterpriseAddrDistrictName', options[provinceIndex].children[cityIndex].children[regionIndex].regionName)
                                    this.loaded = true
                                    this.loading = false
                                })
                        })
                })
                .catch(e => {
                    this.loading = false
                })
        },
        // 选取地市列表
        regionChange (list) {
            this.detailData.enterpriseAddrProvince = list[0]
            this.detailData.enterpriseAddrCity = list[1]
            this.detailData.enterpriseAddrDistrict = list[2]
            this.detailData.enterpriseAddrProvinceName = provinceList.filter(item => { return item.regionId === list[0] })[0].regionName
            this.detailData.enterpriseAddrCityName = cityList.filter(item => { return item.regionId === list[1] })[0].regionName
            this.detailData.enterpriseAddrDistrictName = regionList.filter(item => { return item.regionId === list[2] })[0].regionName
        },
        // 获取品牌列表
        findBrandList () {
            this.$post('advertisement/brandlist ', {})
                .then(res => {
                    let brandName = []
                    this.initBrandList = [...res.data]
                    res.data.forEach(item => {
                        item.initial = window.pinyinUtil.getFirstLetter(item.carBrandName).substr(0, 1)
                        this.detailData.enterpriseMajorBrand.forEach(brandId => {
                            if (item.carBrandId === brandId) {
                                brandName.push(item.carBrandName)
                            }
                        })
                    })
                    this.$set(this.detailData, 'enterpriseMajorBrandName', brandName + '')
                    // 按首字母排序
                    let brandList = res.data.sort(function (objA, objB) {
                        if (objA.initial > objB.initial) {
                            return 1
                        } else if (objA.initial < objB.initial) {
                            return -1
                        } else {
                            return 0
                        }
                    })
                    // 将同字母类型进行分类
                    let obj = {}
                    brandList.forEach(item => {
                        if (!obj[item.initial]) {
                            obj[item.initial] = [item]
                        } else {
                            obj[item.initial].push(item)
                        }
                    })
                    this.brandList = obj
                })
        },
        // 地图弹窗确认
        alertConfirm () {
            this.alert = false
            this.$set(this.detailData, 'enterpriseAddrX', this.center.lng)
            this.$set(this.detailData, 'enterpriseAddrY', this.center.lat)
        },
        // 打开地图弹窗
        showMap () {
            this.alert = true
            setTimeout(() => {
                this.center = {
                    lng: this.detailData.enterpriseAddrX - 0,
                    lat: this.detailData.enterpriseAddrY - 0
                }
            })
        },
        // 关闭地图弹窗
        alertCancel () {
            this.alert = false
        },
        // 搜索百度地图
        mapSearch () {
            // 遍历地址信息,匹配省市区
            this.BMkeyword = this.positionAddr
        },
        // 搜索回调函数
        searchcomplete (res) {
            if (!res) {
                return
            }
            if (!res.Ir.length) {
                this.$message.error('未找到您输入的位置信息!')
            }
            if (res && res.Ir.length > 0) {
                this.center.lng = res.Ir[0].point.lng
                this.center.lat = res.Ir[0].point.lat
            }
        },
        // 清除图片
        clearImage (pic, index) {
            if (typeof index === 'number') {
                this.detailData[pic].splice(index, 1)
            } else {
                this.$set(this.detailData, pic, '')
            }
        },
        beforeUpload (file) {
            const isJPG = /jpeg|png/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        handleSuccess1 (res, file, fileList) {
            if (res.data) {
                this.$set(this.detailData, 'enterprisePicUrl', res.data)
            } else {
                this.$alert('服务器错误，上传失败')
            }
        },
        handleSuccess2 (res, file, fileList) {
            if (res.data) {
                this.detailData.enterpriseStoresImages.push(res.data)
            } else {
                this.$alert('服务器错误，上传失败')
            }
        },
        handleSuccess3 (res, file, fileList) {
            if (res.data) {
                this.$set(this.detailData, 'enterpriseBusinessPermit', res.data)
            } else {
                this.$alert('服务器错误，上传失败')
            }
        },
        handleSuccess4 (res, file, fileList) {
            if (res.data) {
                this.$set(this.detailData, 'enterpriseBusinessLicense', res.data)
            } else {
                this.$alert('服务器错误，上传失败')
            }
        },
        setImageData (attr, fileList) {
            console.log(fileList)
            this.$message({
                type: 'success',
                message: '操作成功'
            })
            this.detailData[attr] = fileList.map(item => {
                if (item.response) {
                    return item.response.data
                } else if (item.url) {
                    return item.url
                }
            })
        },
        // 关闭页面
        close () {
            if (this.isEdit && this.edit) {
                this.$confirm('当前页面未保存，是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.edit = false
                    this.$store.dispatch('closePage', {
                        nextPath: '/maintenanceOfEnterpriseArchives'
                    })
                }).catch(() => {
                })
            } else {
                this.edit = false
                this.$store.dispatch('closePage', {
                    nextPath: '/maintenanceOfEnterpriseArchives',
                    refresh: 'maintenanceOfEnterpriseArchives'
                })
            }
        }
    },
    filters: {
        mainCampTypeFilter (val) {
            if (val) {
                const list = val.split(',')
                let newlist = []
                for (let i = 0; i < mainCampType.length; i++) {
                    for (let j = 0; j < list.length; j++) {
                        if (mainCampType[i].value === list[j]) {
                            newlist.push(mainCampType[i].label)
                        }
                    }
                }
                return newlist + ''
            }
        },
        serviceTypeFilter (val) {
            if (/1/.test(val)) {
                return '一类维修经营业务'
            }
            if (/2/.test(val)) {
                return '二类维修经营业务'
            }
            if (/3/.test(val)) {
                return '三类维修经营业务'
            }
        },
        jcGradeFilter (val) {
            if (val === 'A') {
                return 'A级站'
            }
            if (val === 'B') {
                return 'B级站'
            }
            if (val === 'C') {
                return 'C级站'
            }
        }
    }
}
</script>

<style lang='less' scoped>
.maintenanceOfEnterpriseDetail {
    position: relative;
    .detail_item_empty {
        height: 76px;
    }
    .test {
        position: absolute;
        right: 0;
        top: 2px;
        height: 32px;
        width: 78px;
        padding: 0;
    }
    .image-upload {
        width: 120px;
        height: 120px;
        border: 1px dashed #c0ccda;
        border-radius: 4px;
        line-height: 20px;
        background: #fbfdff;
        transition: all .2s;
        text-align: center;
        display: inline-block;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
            border: 1px dashed #4D7CFE;
        }
        .el-icon-plus {
            font-size: 26px;
            color: #8c939d;
        }
        p {
            font-size: 12px;
            color:#8c8c8c;
        }
    }
    .image-pic {
        padding: 8px;
        width: 104px;
        height: 104px;
        position: relative;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        margin-bottom: 10px;
        display: inline-block;
        margin-right: 20px;
        .pic {
            width: 100%;
            height: 100%;
        }
        .el-icon-error {
            position: absolute;
            top: 2px;
            left: 95px;
            font-size: 18px;
            cursor: pointer;
            display: none;
            background: #ececec;
            border-radius: 50%;
        }
        &:hover {
            .el-icon-error {
                display: block;
            }
        }
    }
    .image-upload, .image-pic {
        vertical-align: middle;
    }
    .show-image {
        background-size: cover;
        width: 600px;
        height: 480px;
    }
    .nophoto {
        text-align: center;
        color: #BFBFBF;
        font-size: 14px;
        line-height: 22px;
        padding-top: 24px;
    }
    .item-image-wrap {
        padding: 8px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        display: inline-block;
        margin-right: 20px;
        width: 100px;
        height: 100px;
        .item-image {
            width: 100px;
            height: 100px;
            cursor: pointer;
        }
    }
    .map-location {
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        height: 30px;
        line-height: 30px;
        width: 80%;
        padding: 0 15px;
        box-sizing: border-box;
        cursor: pointer;
        i {
            float: right;
            margin-top: 7px;
        }
    }
    .map_box {
        margin-top: 4px;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        padding: 10px;
        .map_view {
            width:530px;
            height:280px;
        }
    }
    .map-content {
        padding: 10px 50px 24px 50px;
        border-bottom: 1px solid #D9D9D9;
        .map-input {
            height: 32px;
            line-height: 32px;
            padding: 0;
        }
    }
}
</style>
<style lang="less">
.maintenanceOfEnterpriseDetail {
    .BMap_mask {
        cursor: auto;
    }
    .el-upload {
        width: 120px;
        height: 95px;
        padding-top: 25px;
    }
    .el-upload--picture-card {
        width: 120px;
        height: 120px;
        line-height: 120px;
    }
    .el-upload-list--picture-card {
        display: inline-block;
        min-height: 131px;
        .el-upload-list__item {
            width: 118px;
            height: 118px;
            margin: 0 8px 0 0;
        }
    }
    .el-upload-list__item.is-success .el-upload-list__item-status-label {
        display: none;
    }
    .el-select {
        width: 80%;
        height: 32px;
        .el-input__inner {
            height: 32px !important;
        }
    }
    .el-date-editor {
        width: 80%;
        .el-range__close-icon {
            line-height: 26px;
        }
    }
    .el-dialog {
        min-height: 60%;
        text-align: center;
    }
    .el-cascader {
        line-height: 32px;
    }
}
</style>

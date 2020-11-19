<!-- 编辑代理商 -->
<template>
    <div class="inspectionCityOpenDetail" id="cityOpenDetail2">
        <h3 class="detail-title">开通城市信息<el-button class="fr back" @click="goBack">返回</el-button></h3>
        <el-form ref="form" class="form" :inline="true" :model="form" label-width="150px">
            <div class="form_header">
                开通城市配置
            </div>
            <div class="form_content">
                <el-form-item label="选择开通城市：" label-width="150px" prop="region" :rules="$validate({required:true})">
                    <!-- <el-select v-model="form.marketAreaId" style="width:350px;" placeholder="城市">
                        <el-option
                        v-for="item in areaList"
                        :key="item.areaId"
                        :label="item.areaName"
                        :value="item.areaId">
                        </el-option>
                    </el-select> -->
                    <el-cascader
                        style="width:350px;"
                        placeholder="请选择"
                        v-model="form.region"
                        clearable
                        :options="allCityList2"
                        change-on-select
                        filterable>
                    </el-cascader>
                </el-form-item>
                <el-form-item label="状态：" label-width="150px" prop="cityConfigStatus" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigStatus" style="width:350px;" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form_header">
                维修企业开通
            </div>
            <div class="form_content">
                <el-form-item label="规则：" label-width="150px" class="mb20" prop="cityConfigFixRule" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigFixRule" style="width:350px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'城市版'},{value:1,label:'基线版'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form_header">
                徽标配置
            </div>
            <div class="form_content">
                <el-form-item prop="cityConfigFixLogoEntrecord" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        备
                        <el-tooltip class="icon_item" effect="dark"  content="备案申报" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoEntrecord" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoEntrecordRule" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigFixLogoEntrecordRule" style="width:160px;"  placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:1,label:'深圳备案'},{value:2,label:'肇庆备案'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoAssociation" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        协
                        <el-tooltip class="icon_item" effect="dark"  content="协会会员" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoAssociation" style="width:160px;"  placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoAssociationRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoAssociationRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoVip" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        会
                        <el-tooltip class="icon_item" effect="dark"  content="养车修车网会员" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoVip" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoVipRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoVipRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoAuthenticate" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        认
                        <el-tooltip class="icon_item" effect="dark"  content="技师认证" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoAuthenticate" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoAuthenticateRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoAuthenticateRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogo4sAuthenticate" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        4S
                        <el-tooltip class="icon_item" effect="dark"  content="4S店认证" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogo4sAuthenticate" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogo4sAuthenticateRule" :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogo4sAuthenticateRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoM" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        M
                        <el-tooltip class="icon_item" effect="dark"  content="M站备案申报" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoM" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoMRule" :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoMRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoInsure" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        保
                        <el-tooltip class="icon_item" effect="dark"  content="具备机动车保险销售资质" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoInsure" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoInsureRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoInsureRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoOfficialVehicle" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        公
                        <el-tooltip class="icon_item" effect="dark"  content="公务车定点维修" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoOfficialVehicle" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoOfficialVehicleRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoOfficialVehicleRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoAuthorizeBrand" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        授
                        <el-tooltip class="icon_item" effect="dark"  content="品牌授权销售" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoAuthorizeBrand" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoAuthorizeBrandRule" :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoAuthorizeBrandRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoSchool" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        实
                        <el-tooltip class="icon_item" effect="dark"  content="汽车维修学校实训基地" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoSchool" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoSchoolRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoSchoolRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixLogoSolidWaste" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        固
                        <el-tooltip class="icon_item" effect="dark"  content="具有'四废'物质收集、处理措施" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixLogoSolidWaste" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixLogoSolidWasteRule" :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixLogoSolidWasteRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form_header">
                商业功能配置
            </div>
            <div class="form_content">
                <el-form-item prop="cityConfigFixBsVehicleInsurance" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        车辆保险
                        <el-tooltip class="icon_item" effect="dark"  content="备案申报" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixBsVehicleInsurance" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixBsVehicleInsuranceRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixBsVehicleInsuranceRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixBsEtcRecharge" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        ETC充值
                        <el-tooltip class="icon_item" effect="dark" content="ETC卡充值" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixBsEtcRecharge" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixBsEtcRechargeRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixBsEtcRechargeRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item prop="cityConfigFixBsOilCardRecharge" :rules="$validate({required:true})">
                    <label class="form_label">
                        <span class="red">*</span>
                        油卡充值
                        <el-tooltip class="icon_item" effect="dark" content="加油卡充值" placement="top">
                            <img class="vam" src="../../../assets/img/tips.png">
                        </el-tooltip>
                        ：
                    </label>
                    <el-select v-model="form.cityConfigFixBsOilCardRecharge" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规则：" label-width="150px" prop="cityConfigFixBsOilCardRechargeRule"  :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixBsOilCardRechargeRule" style="width:160px;" :disabled="true" placeholder="请选择">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form_header">
                运输车维护配置
            </div>
            <div class="form_content">
                <el-form-item  label="运输车维护：" label-width="150px" prop="cityConfigFixFix2" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigFixFix2" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="合格证发放规则：" label-width="150px" prop="cityConfigFixCertificate" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigFixCertificate" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:1,label:'南宁模式'},{value:2,label:'肇庆模式'},{value:3,label:'深圳模式'},{value:4,label:'手动填写模式'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item  label="维护超期锁定：" label-width="150px" prop="cityConfigFixOverdueLock" :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigFixOverdueLock" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="锁定区域：" label-width="150px" prop="cityConfigFixOverdueLockRegion" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigFixOverdueLockRegion" style="width:160px;" placeholder="请选择" multiple  collapse-tags :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in regionList"
                            :key="item.regionId"
                            :label="item.regionName"
                            :value="item.regionId"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item  label="识别卡购买：" label-width="150px" prop="cityConfigFixIdcardPurchase" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigFixIdcardPurchase" style="width:160px;" placeholder="请选择"  :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="识别卡价格：" label-width="150px" prop="cityConfigFixIdcardPrice" :rules="$validate({required:false})">
                    <el-input v-model="form.cityConfigFixIdcardPrice"  style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus"></el-input>
                </el-form-item>
                <br/>
                <el-form-item  label="二级维护竣工合格证样式：" label-width="220px" prop="cityConfigFixCertificateStyleUrl" :rules="$validate({required:true})">
                    <el-input v-model="form.cityConfigFixCertificateStyleUrl" style="width:410px;" placeholder="请录入维护竣工合格证地址（系统将校验地址准确性）" :disabled="!form.cityConfigStatus"></el-input>
                    &nbsp;&nbsp;&nbsp;&nbsp;<el-button size="small" @click="preview(form.cityConfigFixCertificateStyleUrl)">预览</el-button>
                </el-form-item>
                <br/>
                <el-form-item  label="新版维护竣工合格证样式：" label-width="220px" prop="cityConfigFixCertificateNewStyleUrl" :rules="$validate({required:''})">
                    <el-input v-model="form.cityConfigFixCertificateNewStyleUrl" style="width:410px;" placeholder="请录入尾气治理合格证地址（系统将校验地址准确性）" :disabled="!form.cityConfigStatus"></el-input>
                    &nbsp;&nbsp;&nbsp;&nbsp;<el-button size="small"  @click="preview(form.cityConfigFixCertificateNewStyleUrl)">预览</el-button>
                </el-form-item>
                <br/>
                <el-form-item  label="尾气治理合格证样式：" class="mb20" label-width="220px" prop="cityConfigFixCertificateGasStyleUrl" :rules="$validate({required:''})">
                    <el-input v-model="form.cityConfigFixCertificateGasStyleUrl" style="width:410px;" placeholder="请录入尾气治理合格证地址（系统将校验地址准确性）" :disabled="!form.cityConfigStatus"></el-input>
                    &nbsp;&nbsp;&nbsp;&nbsp;<el-button size="small"  @click="preview(form.cityConfigFixCertificateGasStyleUrl)">预览</el-button>
                </el-form-item>
            </div>
            <div class="form_header">
                运输企业开通
            </div>
            <div class="form_content">
                <el-form-item  label="规则：" class="mb20" label-width="150px" prop="cityConfigTransportRule" :rules="$validate({required:false})">
                    <el-select v-model="form.cityConfigTransportRule" style="width:480px;"  placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'城市版'},{value:1,label:'基线版'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form_header">
                运输企业配置
            </div>
            <div class="form_content">
                <el-form-item  label="运输企业开通：" label-width="150px" prop="cityConfigTransportOpen" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigTransportOpen" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="等级评定超期锁定：" label-width="150px" prop="cityConfigTransportGradeOverdueLock" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigTransportGradeOverdueLock" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item  label="归集服务费配置：" label-width="150px" prop="cityConfigTransportAgreementType" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigTransportAgreementType" style="width:96px;margin-right:8px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:1,label:'按条'},{value:2,label:'按车'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                    <el-button size="small" @click="showConfig" :disabled="!form.cityConfigStatus">配置</el-button>
                </el-form-item>
                <el-form-item  label="车辆维护作业配置：" label-width="150px" prop="cityConfigTransportPhoto" :rules="$validate({required:''})">
                    <el-button size="small" @click="showConfig2" :disabled="!form.cityConfigStatus">配置</el-button>
                </el-form-item>
                <br/>
                <el-form-item  label="识别卡购买：" label-width="150px" prop="cityConfigTransportIdcardPurchase" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigTransportIdcardPurchase" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="识别卡价格：" label-width="150px" prop="cityConfigTransportIdcardPrice" :rules="$validate({required:''})">
                    <el-input v-model="form.cityConfigTransportIdcardPrice" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus"></el-input>
                </el-form-item>
                <br/>
                <el-form-item  label="车辆建档审核：" label-width="150px" prop="cityConfigTransportCreateVehicleAudit" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigTransportCreateVehicleAudit" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="车辆综合查询：" label-width="150px" prop="cityConfigTransportCreateVehicleSearch" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigTransportCreateVehicleSearch" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
            </div>
            <div class="form_header">
                检测企业开通
            </div>
            <div class="form_content">
                <el-form-item  label="规则：" class="mb20" label-width="150px" prop="cityConfigInspectRule" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigInspectRule" style="width:480px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'城市版'},{value:1,label:'基线版'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form_header">
                检测企业配置
            </div>
            <div class="form_content">
                <el-form-item  label="检测企业开通：" label-width="150px" prop="cityConfigInspectOpen" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigInspectOpen" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="允许创建车辆档案：" label-width="150px" prop="cityConfigInspectCreateVehicle" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigInspectCreateVehicle" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item  label="判断车辆锁定状态：" label-width="150px" prop="cityConfigInspectGradeOverdueLock" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigInspectGradeOverdueLock" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label="识别卡购买：" label-width="150px" prop="cityConfigInspectIdcardPurchase" :rules="$validate({required:true})">
                    <el-select v-model="form.cityConfigInspectIdcardPurchase" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus">
                        <el-option
                            v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            clearable >
                        </el-option>
                    </el-select>
                </el-form-item>
                <br/>
                <el-form-item  label="识别卡价格：" label-width="150px" prop="cityConfigInspectIdcardPrice" :rules="$validate({required:true})">
                    <el-input v-model="form.cityConfigInspectIdcardPrice" style="width:160px;" placeholder="请选择" :disabled="!form.cityConfigStatus"></el-input>
                </el-form-item>
                <br/>
            </div>
            <div class="form_header" v-if="form.cityConfigStatus">
                作业图片数据项配置
            </div>
            <div class="table_box" style="" v-if="form.cityConfigStatus">
                <table class="myTable" border="none">
                    <tr>
                        <td width="480">
                            <label class="label" for="">作业现场图片:</label>
                            <el-radio v-model="form.cityConfigInspectStation" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectStation" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectStation" :label="2">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">送检人身份证:</label>
                            <el-radio v-model="form.cityConfigInspectIdcard" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectIdcard" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectIdcard" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">综合性能检测报告单:</label>
                            <el-radio v-model="form.cityConfigInspectAllInspection" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectAllInspection" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectAllInspection" :label="2">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">人工检验记录单:</label>
                            <el-radio v-model="form.cityConfigInspectManual" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectManual" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectManual" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">性能检验记录单:</label>
                            <el-radio v-model="form.cityConfigInspectPerformance" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectPerformance" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectPerformance" :label="2">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">安检合格标识:</label>
                            <el-radio v-model="form.cityConfigInspectSafeMark" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectSafeMark" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectSafeMark" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">环保检验记录单第一页:</label>
                            <el-radio v-model="form.cityConfigInspectEnvironmentalInspect" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectEnvironmentalInspect" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectEnvironmentalInspect" :label="2">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">环保检验记录单第二页:</label>
                            <el-radio v-model="form.cityConfigInspectEnvironmentalInspect2" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectEnvironmentalInspect2" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectEnvironmentalInspect2" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">道路运输证:</label>
                            <el-radio v-model="form.cityConfigInspectRoadTransportCert" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectRoadTransportCert" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectRoadTransportCert" :label="2">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">道路运输达标核查记录表:</label>
                            <el-radio v-model="form.cityConfigInspectRoadTransportCertStandard" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectRoadTransportCertStandard" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectRoadTransportCertStandard" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">安检报告单:</label>
                            <el-radio v-model="form.cityConfigInspectSafeCheck" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectSafeCheck" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectSafeCheck" :label="2">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">安检人工检验单:</label>
                            <el-radio v-model="form.cityConfigInspectSafePerson" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectSafePerson" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectSafePerson" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">安检仪器报告单:</label>
                            <el-radio v-model="form.cityConfigInspectNacktscanner" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectNacktscanner" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectNacktscanner" :label="2">隐藏</el-radio>
                        </td>
                        <!-- <td width="480">
                            <label class="label" for="">营运证:</label>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="-1">隐藏</el-radio>
                        </td> -->
                        <!-- <td width="480">
                            <label class="label" for="">环检检测报告:</label>
                            <el-radio v-model="form.inspectPicStation" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicStation" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicStation" :label="2">隐藏</el-radio>
                        </td> -->
                        <td width="480">
                            <label class="label" for="">营运证:</label>
                            <el-radio v-model="form.cityConfigInspectCertificateNo" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectCertificateNo" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectCertificateNo" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <!-- <td width="480">
                            <label class="label" for="">营运证:</label>
                            <el-radio v-model="form.cityConfigInspectCertificateNo" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectCertificateNo" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectCertificateNo" :label="2">隐藏</el-radio>
                        </td> -->
                        <td width="480">
                            <label class="label" for="">车辆行驶证:</label>
                            <el-radio v-model="form.cityConfigInspectDrivinglicense" :label="0">非必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectDrivinglicense" :label="1">必填</el-radio>
                            <el-radio v-model="form.cityConfigInspectDrivinglicense" :label="2">隐藏</el-radio>
                        </td>
                    </tr>
                </table>
            </div>
        </el-form>
        <div class="btn" style="padding-left:40px;">
            <el-button @click="save" type="primary" :disabled="!$checkAuth('vtisSysCity:edit')">保存</el-button>
        </div>
        <modal
            :title="'二级维护检验信息归档'"
            :width="750"
            :alert="showAlert"
            @alertConfirm="confirmOk"
            @alertCancel="confirmCancel">
            <div class="detail_box alertBox clearfix" style="padding-bottom:0;">
                <div class="alertTitle">
                    <span class="red">*</span>
                    二级维护检验信息归档：
                </div>
                <div class="alertForm">
                    <label for="">金额：</label>
                    <el-input-number v-model="forms.cityAgreementFix2TotalFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">运输企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementFix2TransportFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">维修企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementFix2FixFee" controls-position="right" disabled style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元
                </div>
                 <div class="alertTitle">
                    <span class="red">*</span>
                    运输车辆维护检验信息归集：
                </div>
                <div class="alertForm">
                    <label for="">金额：</label>
                    <el-input-number v-model="forms.cityAgreementFix2TestTotalFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">运输企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementFix2TestTransportFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0" ></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">维修企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementFix2TestFixFee" controls-position="right" disabled style="width:100px" size="small" @change="handleChange" :min="0" ></el-input-number>
                    元
                </div>
                 <div class="alertTitle">
                    <span class="red">*</span>
                    等级评定信息归集：
                </div>
                <div class="alertForm">
                    <label for="">金额：</label>
                    <el-input-number v-model="forms.cityAgreementGradeTotalFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0" ></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">运输企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementGradeTransportFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">维修企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementGradeFixFee" controls-position="right" disabled style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元
                </div>
                 <div class="alertTitle">
                    <span class="red">*</span>
                    异地维护/检测记录信息归集：
                </div>
                <div class="alertForm">
                    <label for="">金额：</label>
                    <el-input-number v-model="forms.cityAgreementOthercityTotalFee" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                    元&nbsp;&nbsp;&nbsp;&nbsp;
                    <label for="">运输企业分摊费用：</label>
                    <el-input-number v-model="forms.cityAgreementOthercityTransportFee" disabled controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0"></el-input-number>
                </div>
            </div>
        </modal>
        <modal
            :title="'二级维护检验信息归档'"
            :width="750"
            :alert="showAlert2"
            @alertConfirm="confirmOk2"
            @alertCancel="confirmCancel2">
            <div class="detail_box alertBox clearfix" style="padding-bottom:0;">
                <div class="alertTitle">
                    <span class="red">*</span>
                    二级维护检验信息归档：
                </div>
                <div class="alertForm">
                    <br>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;<el-radio v-model="radio" :label="1">包月</el-radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;<el-radio v-model="radio" :label="2">包记录</el-radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;<el-radio v-model="radio" label="32">包年</el-radio>
                    </div>
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<label for="">费用：</label>
                    <el-input-number v-model="form.num" controls-position="right" style="width:100px" size="small" @change="handleChange" :min="0" :max="100"></el-input-number>
                </div>
                <div class="alertTitle">
                    <!-- <span class="red">*</span> -->
                    按车打包收费期限：
                </div>
                <div class="alertForm">
                    <br>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;<el-radio v-model="radio" :label="1">自动归档</el-radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;<el-radio v-model="radio" :label="2">手动归档</el-radio>
                    </div>
                </div>
            </div>
        </modal>
        <modal
            :title="'按车打包收费配置项'"
            :width="600"
            :alert="showAlert3"
            @alertConfirm="confirmOk3"
            @alertCancel="confirmCancel3">
            <div class="detail_box alertBox clearfix" style="padding-bottom:0;">
                <el-form ref="forms" class="form" :inline="false" :model="forms" label-width="200px">
                    <el-form-item label="按车打包收费(包年)：" prop="cityAgreementYearFee" :rules="$validate({required:true})">
                        <el-input-number v-model="forms.cityAgreementYearFee" controls-position="right" style="width:200px" size="small" @change="handleChange" :min="0" ></el-input-number>
                    </el-form-item>
                    <el-form-item label="归档方式："  prop="cityAgreementYearMode" :rules="$validate({required:false})">
                        <el-input v-model="forms.cityAgreementYearMode2" controls-position="right" style="width:200px" size="small" placeholder="自动归档" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="是否可代付："  prop="cityAgreementYearAgentPay" :rules="$validate({required:true})">
                        <el-radio v-model="forms.cityAgreementYearAgentPay" :label="1">是</el-radio>
                        <el-radio v-model="forms.cityAgreementYearAgentPay" :label="0">否</el-radio>
                    </el-form-item>
                    <el-form-item label="是否锁定代付企业：" prop="cityAgreementYearAgentPayLock" :rules="$validate({required:true})">
                        <el-radio v-model="forms.cityAgreementYearAgentPayLock" :label="1">是</el-radio>
                        <el-radio v-model="forms.cityAgreementYearAgentPayLock" :label="0">否</el-radio>
                    </el-form-item>
                    <el-form-item label="维修企业作业传输费：" prop="cityAgreementYearFixFee" :rules="$validate({required:true})">
                        <el-input-number v-model="forms.cityAgreementYearFixFee" controls-position="right" style="width:200px" size="small" @change="handleChange" :min="0" ></el-input-number>
                    </el-form-item>
                    <el-form-item label="检测企业作业传输费：" prop="cityAgreementYearInspectFee" :rules="$validate({required:true})">
                        <el-input-number v-model="forms.cityAgreementYearInspectFee" controls-position="right" style="width:200px" size="small" @change="handleChange" :min="0" ></el-input-number>
                    </el-form-item>
                </el-form>
            </div>
        </modal>
        <modal
            :title="'预览'"
            :width="750"
            :alert="showAlert4"
            @alertConfirm="showAlert4=false"
            @alertCancel="showAlert4=false">
            <iframe :src="previewUrl" frameborder="0" style="width:100%;height:400px;"></iframe>
        </modal>
    </div>
</template>

<script>
// import { CodeToText } from 'element-china-area-data'
import Modal from '@/components/Modal'
export default {
    name: 'cityOpenDetail2',
    data () {
        return {
            previewUrl: '',
            showAlert4: false,
            regionList: [],
            forms: {
                cityAgreementFix2TotalFee: 12,
                cityAgreementFix2TransportFee: 6,
                cityAgreementFix2FixFee: 6,
                cityAgreementFix2TestTotalFee: 12,
                cityAgreementFix2TestTransportFee: 6,
                cityAgreementFix2TestFixFee: 6,
                cityAgreementGradeTotalFee: 12,
                cityAgreementGradeTransportFee: 6,
                cityAgreementGradeFixFee: 6,
                cityAgreementOthercityTotalFee: 6,
                cityAgreementOthercityTransportFee: 6,
                cityAgreementYearFee: '',
                cityAgreementYearMode: 1,
                cityAgreementYearAgentPay: 1,
                cityAgreementYearAgentPayLock: 1,
                cityAgreementYearFixFee: '',
                cityAgreementYearInspectFee: ''
            },
            allCityList2: [],
            form2: {},
            showAlert: false,
            showAlert2: false,
            showAlert3: false,
            areaList: [], // 大区列表
            radio: 1,
            uploadUrl: window.uploadURL,
            dateRegion: [],
            valite: true,
            form: {
                cityConfigStatus: 1,
                cityConfigFixRule: 1,
                cityConfigFixLogoEntrecord: 1,
                cityConfigFixLogoEntrecordRule: 1,
                cityConfigFixLogoAssociation: 1,
                cityConfigFixLogoAssociationRule: '',
                cityConfigFixLogoVip: 1,
                cityConfigFixLogoVipRule: '',
                cityConfigFixLogoAuthenticate: 1,
                cityConfigFixLogoAuthenticateRule: '',
                cityConfigFixLogo4sAuthenticate: 1,
                cityConfigFixLogo4sAuthenticateRule: '',
                cityConfigFixLogoM: 1,
                cityConfigFixLogoMRule: '',
                cityConfigFixLogoInsure: 1,
                cityConfigFixLogoInsureRule: '',
                cityConfigFixLogoOfficialVehicle: 1,
                cityConfigFixLogoOfficialVehicleRule: '',
                cityConfigTransportGradeOverdueLock: 1,
                cityConfigFixLogoAuthorizeBrand: 1,
                cityConfigFixLogoAuthorizeBrandRule: '',
                cityConfigFixLogoSchool: 1,
                cityConfigFixLogoSchoolRule: '',
                cityConfigFixLogoSolidWaste: 1,
                cityConfigFixLogoSolidWasteRule: '',
                cityConfigFixBsVehicleInsurance: 1,
                cityConfigFixBsVehicleInsuranceRule: '',
                cityConfigFixBsEtcRecharge: 1,
                cityConfigFixBsEtcRechargeRule: '',
                cityConfigFixBsOilCardRecharge: 1,
                cityConfigFixBsOilCardRechargeRule: '',
                cityConfigFixFix2: 1,
                cityConfigFixCertificate: 4,
                cityConfigFixOverdueLock: 1,
                cityConfigFixOverdueLockRegion: [],
                cityConfigFixIdcardPurchase: 1,
                cityConfigFixIdcardPrice: '',
                cityConfigFixCertificateStyleUrl: '',
                cityConfigFixCertificateNewStyleUrl: '',
                cityConfigFixCertificateGasStyleUrl: '',
                cityConfigTransportRule: 1,
                cityConfigTransportOpen: 1,
                cityConfigTransportAgreementType: 1,
                cityConfigTransportPhoto: '',
                cityConfigTransportIdcardPurchase: 1,
                cityConfigTransportIdcardPrice: '',
                cityConfigTransportCreateVehicleAudit: 1,
                cityConfigTransportCreateVehicleSearch: 1,
                cityConfigInspectRule: 1,
                cityConfigInspectOpen: 1,
                cityConfigInspectCreateVehicle: 1,
                cityConfigInspectGradeOverdueLock: 1,
                cityConfigInspectIdcardPurchase: 1,
                cityConfigInspectIdcardPrice: 1,
                cityConfigInspectStation: 1,
                cityConfigInspectIdcard: 1,
                cityConfigInspectAllInspection: 1,
                cityConfigInspectManual: 1,
                cityConfigInspectPerformance: 1,
                cityConfigInspectSafeMark: 1,
                cityConfigInspectEnvironmentalInspect: 1,
                cityConfigInspectEnvironmentalInspect2: 1,
                cityConfigInspectRoadTransportCert: 1,
                cityConfigInspectRoadTransportCertStandard: 1,
                cityConfigInspectSafeCheck: 1,
                cityConfigInspectSafePerson: 1,
                cityConfigInspectNacktscanner: 1,
                cityConfigInspectCertificateNo: 1,
                cityConfigInspectDrivinglicense: 1
            },
            provinceList: [],
            cityList: []
        }
    },
    components: {
        Modal
    },
    watch: {
        'form.region' (val) {
            if (val && val.length && val.length >= 3) {
                this.$get('/list/regionList', {
                    cityId: val[2]
                }).then(res => {
                    if (res.code === 0) {
                        this.regionList = res.data
                    }
                })
            }
        },
        'forms.cityAgreementFix2TotalFee' (val) {
            this.forms.cityAgreementFix2FixFee = this.forms.cityAgreementFix2TotalFee - this.forms.cityAgreementFix2TransportFee
        },
        'forms.cityAgreementFix2TransportFee' (val) {
            this.forms.cityAgreementFix2FixFee = this.forms.cityAgreementFix2TotalFee - this.forms.cityAgreementFix2TransportFee
        },
        'forms.cityAgreementFix2TestTotalFee' (val) {
            this.forms.cityAgreementFix2TestFixFee = this.forms.cityAgreementFix2TestTotalFee - this.forms.cityAgreementFix2TestTransportFee
        },
        'forms.cityAgreementFix2TestTransportFee' (val) {
            this.forms.cityAgreementFix2TestFixFee = this.forms.cityAgreementFix2TestTotalFee - this.forms.cityAgreementFix2TestTransportFee
        },
        'forms.cityAgreementGradeTotalFee' (val) {
            this.forms.cityAgreementGradeFixFee = this.forms.cityAgreementGradeTotalFee - this.forms.cityAgreementGradeTransportFee
        },
        'forms.cityAgreementGradeTransportFee' (val) {
            this.forms.cityAgreementGradeFixFee = this.forms.cityAgreementGradeTotalFee - this.forms.cityAgreementGradeTransportFee
        },
        'forms.cityAgreementOthercityTotalFee' (val) {
            this.forms.cityAgreementOthercityTransportFee = this.forms.cityAgreementOthercityTotalFee
        }
    },
    computed: {
        allCityList () {
            return this.$store.state.allCityList
        }
    },
    created () {
        // this.$refs['form'].resetFields()
        this.getProvinceList()
        this.$get('/comm/notOpenCities/areas/tree', {
            cityConfigId: this.$route.query.id,
            depth: 2
        }).then(res => {
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
                this.allCityList2 = res.data
                if (this.$route.query.id) {
                    this.getDetail()
                }
            }
        })
    },
    methods: {
        preview (url) {
            if (!url) return
            this.previewUrl = url
            this.showAlert4 = true
        },
        getDetail () {
            this.$get(`/sysCityConfig/view/${this.$route.query.id}`).then(res => {
                if (res.code === 0) {
                    // this.form = res.data[0]
                    res.data[0].region = [res.data[0].cityConfigMarketArea, res.data[0].cityConfigProvince, res.data[0].cityConfigCity]
                    res.data[0].cityConfigFixOverdueLockRegion = res.data[0].cityConfigFixOverdueLockRegion.split(',')
                    // this.$set(this.form, 'region', [res.data[0].cityConfigMarketArea, res.data[0].cityConfigProvince, res.data[0].cityConfigCity])
                    this.form = res.data[0]
                    if (res.data[0].sysCityAgreement) {
                        this.forms = res.data[0].sysCityAgreement
                    }
                    // console.log(this.form)
                }
            })
        },
        handleChange () {},
        showConfig () {
            if (!this.form.cityConfigTransportAgreementType) {
                this.$message.warning('请先选择归集服务费配置类型')
                return
            }
            if (this.form.cityConfigTransportAgreementType - 0 === 2) {
                this.showAlert3 = true
            } else {
                this.showAlert = true
            }
        },
        showConfig2 () {
            // this.showAlert2 = true
            if (this.form.region && this.form.region.length && this.form.region.length >= 3) {
                this.$router.push('/vehicleMaintenanceConfig?id=' + this.form.region[2])
            } else {
                this.$message.warning('请先选择城市')
            }
        },
        confirmOk () {
            this.confirmCancel()
        },
        confirmCancel () {
            this.showAlert = false
        },
        confirmOk2 () {
            this.confirmCancel2()
        },
        confirmCancel2 () {
            this.showAlert2 = false
        },
        confirmOk3 () {
            this.confirmCancel3()
        },
        confirmCancel3 () {
            this.showAlert3 = false
        },
        provinceChange () {
            let val = this.form.provinceId
            if (val) {
                this.getCityList(val)
                this.form.cityId = ''
                this.cityList = []
            } else {
                this.cityList = []
                this.form.cityId = ''
            }
        },
        // cityChange () {
        //     let val = this.form.agentCity
        //     if (val) {
        //         this.getRegionList(val)
        //         this.form.agentRegion = ''
        //     } else {
        //         this.cityList = []
        //         this.form.agentRegion = ''
        //     }
        // },
        save () {
            if (this.form.region.length < 3) {
                this.$message.warning('请先选择城市')
                return
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let url, msg
                    if (this.$route.query.id) {
                        this.form.cityDomain = this.$route.query.id
                        url = 'sysCityConfig/edit'
                        msg = '编辑成功！'
                    } else {
                        url = 'sysCityConfig/add'
                        msg = '添加成功！'
                    }
                    let obj = {}
                    obj.sysCityConfig = this.form
                    obj.SysCityAgreement = this.forms
                    obj.sysCityConfig.cityConfigFixOverdueLockRegion = this.form.cityConfigFixOverdueLockRegion.join(',')
                    if (this.form.region.length) {
                        obj.sysCityConfig.cityConfigMarketArea = this.form.region[0]
                        obj.sysCityConfig.cityConfigProvince = this.form.region[1]
                        obj.sysCityConfig.cityConfigCity = this.form.region[2]
                    }
                    this.$post(url, obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                this.$store.dispatch('closePage', {
                                    nextPath: '/vtamsEnterprise2',
                                    refresh: 'vtamsEnterprise2'
                                })
                            }
                        })
                }
            })
        },
        goBack () {
            // this.$router.push('/inspectionCityOpen')
            this.$store.dispatch('closePage', {
                nextPath: '/vtamsEnterprise2'
            })
        },
        // 获取省列表
        getProvinceList (id) {
            this.areaId = id
            this.$get('list/regionProvinceList?type=1').then(res => {
                if (res.code === 0) {
                    this.provinceList = res.data
                }
            })
        },
        // 获取城市列表
        getCityList (id) {
            this.$get('list/regioncityList?provinceRegionId=' + id).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
// #cityOpenDetail2 {
//     .el-input__inner {
//         line-height: 33px;
//         height: inherit;
//     }
// }
.inspectionCityOpenDetail {
    overflow: auto;
    h5 {
        color: #252631;
        font-size: 14px;
    }
    .detail-title {
        height: 74px;
        line-height: 74px;
        padding: 0 36px;
        // border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color: #666666;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
    }
    .form {
        // margin-top: 30px;
        color: #666;
        .item-title {
            color: #252631;
            font-size: 14px;
            margin-left: 56px;
            line-height: 50px;
            margin-top: 10px;
        }
        .w120 {
            width: 120px;
        }
        .small-input {
            .el-select {
                width: 110px;
            }
        }
        .myTable {
            border: none!important;
            line-height: 44px;
            .label {
                display: inline-block;
                width: 160px;
                text-align: right;
                padding-right: 20px;
            }
            td {
                border: none!important;
            }
        }
    }
    .btn {
        margin: 20px 0 40px;
        // padding: 6px 0 20px 116px;
        .el-button {
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
    }
    .form_header {
        height: 54px;
        line-height: 54px;
        background: #FAFAFA;
        border-top: 1px solid #EBEBEB;
        border-bottom: 1px solid #EBEBEB;
        padding-left: 24px;
    }
    .form_content {
        padding-top: 20px;
        .form_label {
            padding-right: 12px;
            width: 138px;
            text-align: right;
            display: inline-block;
        }
    }
    .mb20 {
        margin-bottom: 20px!important;
    }
    .alertBox {
        padding: 0 25px;
        .alertTitle {
            color: #333333;
            font-weight: bold;
            margin: 5px 0;
        }
        .alertForm {
            padding: 10px 0;
        }
    }
}
</style>
<style lang="less">
.inspectionCityOpenDetail {
    .el-input-number.is-controls-right .el-input-number__increase {
        margin-top: 1px;
    }
    .el-input-number.is-controls-right .el-input-number__decrease {
        bottom: 2px;
    }
    .el-form {
        .el-form-item:last-child {
            margin-bottom: 20px;
        }
    }
    .name {
        .el-input__inner {
            width: 160px;
        }
    }
    .w350 {
        width: 160px;
    }
    .w260 {
        width: 260px;
    }
    .w300 {
        width: 300px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
}
#cityOpenDetail2 {
    .el-input__inner {
        line-height: inherit;
        height: inherit;
    }
}
</style>

<!-- 权限管理 -->
<template>
    <div class="carDataDetail detailPage" @click="closeShowBolds" v-loading="showLoading">
        <div class="detail_header">
            <el-button type="primary" class="btn" @click="editAction" v-if="pageType==='detail'">编 辑</el-button>
            <el-button type="primary" class="btn" @click="saveAction" v-if="pageType==='edit'">保 存</el-button>
            <el-button class="goBack btn" @click="close">关 闭</el-button>
            <!-- <h1>车辆数据详情</h1> -->
        </div>
        <div class="detail_content" v-show="pageType === 'detail'" >
            <div class="detail_model">
                <h4>基本信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>车牌号码：</label>
                        <span>{{form.vehicleInfo.vehicleLicensePlate}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车牌颜色：</label>
                        <span>{{form.vehicleInfo.vehicleLicensePlateColor | filterCommon(plateColor)}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车身颜色：</label>
                        <span>{{form.vehicleInfo.vehicleBodyColorName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>品牌车系：</label>
                        <span>{{form.vehicleInfo.vehicleBrandAndModel}}</span>
                    </div>
                    <div class="detail_item">
                        <label>VIN码：</label>
                        <span>{{form.vehicleInfo.vehicleVin}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆性质：</label>
                        <span>{{form.vehicleInfo.vehicleUseName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆类型(国标)：</label>
                        <span>{{form.vehicleInfo.vehicleType}}</span>
                    </div>
                    <div class="detail_item">
                        <label>发动机号：</label>
                        <span>{{form.vehicleInfo.vehicleEngineNumber}}</span>
                    </div>
                    <div class="detail_item">
                        <label>燃油类型：</label>
                        <span>{{form.vehicleInfo.vehicleFuelCategoryName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆注册日期：</label>
                        <span>{{form.vehicleInfo.vehicleDrivingLicenseRecorddate | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>行驶证发证日期：</label>
                        <span>{{form.vehicleInfo.vehicleDrivingLicenseDateofissue | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>数据来源：</label>
                        <span>{{form.vehicleInfo.dataSourceName}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>
                    车辆营运信息
                    <el-button size="small" plain class="h4_btn" @click="checkDetail">车辆技术参数</el-button>
                </h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>所属运输企业：</label>
                        <span>{{form.vehicleWorkInfo.enterpriseName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆类型(营运)：</label>
                        <span>{{form.vehicleWorkInfo.vehicleTypeName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>道路运输证号：</label>
                        <span>{{form.vehicleWorkInfo.vehicleTransportCertificateNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label>道路运输证发证日期：</label>
                        <span>{{form.vehicleWorkInfo.createTime | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>管理归属区域：</label>
                        <span>{{form.vehicleWorkInfo.area}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>车主信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>车主名称：</label>
                        <span>{{form.vehicleOwnerInfo.ownerName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车主类型：</label>
                        <span>{{form.vehicleOwnerInfo.ownerTypeString}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系电话：</label>
                        <span>{{form.vehicleOwnerInfo.ownerMobile}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系地址：</label>
                        <span>{{form.vehicleOwnerInfo.ownerAddress}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_content edit_content" v-show="pageType === 'edit'">
            <el-form :model="form" ref="form" class="form">
                <div class="detail_model">
                    <h4>基本信息</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>车牌号码<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleLicensePlate"  >
                                <el-input
                                    disabled
                                    class="edit_input"
                                    v-model="form.vehicleInfo.vehicleLicensePlate"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车牌颜色<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleLicensePlateColor" >
                                <el-select clearable class="edit_input" disabled v-model="form.vehicleInfo.vehicleLicensePlateColor">
                                    <el-option
                                    v-for="item in plateColor"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车身颜色<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleBodyColor" :rules="$validate({required:true})">
                                <el-select clearable class="edit_input" v-model="form.vehicleInfo.vehicleBodyColor">
                                    <el-option
                                    v-for="item in carBodyColor"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>品牌车系<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.modelList" :rules="$validate({required:true,type:'array'})" style="height:36px;">
                                <selectCarModal
                                    class="edit_input"
                                    v-model="form.vehicleInfo.modelList"
                                    :modelName2="form.vehicleInfo.vehicleBrandAndModel"
                                    :showBolds="showBolds">
                                </selectCarModal>
                                <!-- <el-cascader filterable :props="props2" class="edit_input" :options="options2" v-model="form.vehicleInfo.modelList" @change="handleChange2"></el-cascader> -->
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>VIN码<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleVin" :rules="$validate({required:true,type:'EN'})">
                                <el-input
                                    class="edit_input"
                                    maxlength="17"
                                    v-model="form.vehicleInfo.vehicleVin"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车辆性质<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleUse" :rules="$validate({required:true})">
                                <el-select clearable class="edit_input" v-model="form.vehicleInfo.vehicleUse">
                                    <el-option
                                    v-for="item in vehicleUseList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车辆类型(国标)<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleTypeId" :rules="$validate({required:true})">
                                <el-select clearable class="edit_input" v-model="form.vehicleInfo.vehicleTypeId">
                                    <el-option
                                    v-for="item in carTypeGuo2"
                                    :key="item.vehicle_type_id"
                                    :label="item.vehicle_type_name"
                                    :value="item.vehicle_type_id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>发动机号</label>
                            <el-form-item prop="vehicleInfo.vehicleEngineNumber" :rules="$validate({type:'EN',max:8})">
                                <el-input
                                    class="edit_input"
                                    maxlength="8"
                                    type="number"
                                    v-model="form.vehicleInfo.vehicleEngineNumber"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>燃油类型<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleFuelCategoryId" :rules="$validate({required:true})">
                                <el-select clearable class="edit_input" v-model="form.vehicleInfo.vehicleFuelCategoryId">
                                    <el-option
                                    v-for="item in powerType"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车辆注册日期<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleDrivingLicenseRecorddate" :rules="$validate({required:true})">
                                <el-date-picker
                                value-format="timestamp"
                                class="edit_input"
                                v-model="form.vehicleInfo.vehicleDrivingLicenseRecorddate"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>行驶证发证日期<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleInfo.vehicleDrivingLicenseDateofissue" :rules="$validate({required:true})">
                                <el-date-picker
                                value-format="timestamp"
                                class="edit_input"
                                v-model="form.vehicleInfo.vehicleDrivingLicenseDateofissue"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>数据来源</label>
                            <el-form-item prop="vehicleInfo.vehicleSourceCode">
                                <el-input
                                    disabled
                                    class="edit_input"
                                    v-model="form.vehicleInfo.dataSourceName"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
                <div class="detail_model">
                    <h4>
                        车辆营运信息
                        <el-button size="small" plain class="h4_btn" @click="checkDetail">车辆技术参数</el-button>
                    </h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>所属运输企业<span class="required">(营运车辆必填)</span></label>
                            <el-form-item prop="vehicleWorkInfo.enterpriseName" :rules="form.vehicleInfo.vehicleUse=='01'?$validate({required:true,msg:'请选择所属企业'}):[]">
                                <el-select
                                    v-model.trim="form.vehicleWorkInfo.enterpriseName"
                                    class="edit_input"
                                    filterable
                                    remote
                                    clearable
                                    reserve-keyword
                                    placeholder="请输入关键词"
                                    @change="searchListChange"
                                    @focus="remoteMethod('')"
                                    :remote-method="remoteMethod"
                                    :loading="searchLoading">
                                    <el-option
                                    v-for="item in searchList"
                                    :key="item.enterpriseId"
                                    :label="item.enterpriseName"
                                    :value="item.enterpriseName">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车辆类型(营运)<span class="required">(营运车辆必填)</span></label>
                            <el-form-item prop="vehicleWorkInfo.vehicleTechnologyTypeId" :rules="form.vehicleInfo.vehicleUse=='01'?$validate({required:true}):[]">
                                <el-select clearable class="edit_input" ref="focus_input" v-model="form.vehicleWorkInfo.vehicleTechnologyTypeId">
                                    <el-option
                                    v-for="item in carTypeGuo1"
                                    :key="item.vehicle_type_id"
                                    :label="item.vehicle_type_name"
                                    :value="item.vehicle_type_id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>道路运输证号<span class="required">(营运车辆必填)</span></label>
                            <el-form-item prop="vehicleWorkInfo.vehicleTransportCertificateNo" :rules="form.vehicleInfo.vehicleUse=='01'?$validate({required:true,type:'EN'}):$validate({type:'EN'})">
                                <el-input
                                    clearable
                                    maxlength="12"
                                    class="edit_input"
                                    v-model="form.vehicleWorkInfo.vehicleTransportCertificateNo"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>道路运输证发证日期<span class="required">(营运车辆必填)</span></label>
                            <el-form-item prop="vehicleWorkInfo.createTime" :rules="form.vehicleInfo.vehicleUse=='01'?$validate({required:true}):[]">
                                <el-date-picker
                                value-format="timestamp"
                                class="edit_input"
                                v-model="form.vehicleWorkInfo.createTime"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>管理归属区域<span class="required">(营运车辆必填)</span></label>
                            <el-form-item class="" prop="vehicleWorkInfo.areaList" :rules="form.vehicleInfo.vehicleUse=='01'?$validate({required:true,type:'array1'}):[]">
                                <el-cascader :props="props" class="edit_input" :options="options" v-model="form.vehicleWorkInfo.areaList" @change="handleChange"></el-cascader>
                            </el-form-item>
                        </div>
                    </div>
                </div>
                <div class="detail_model">
                    <h4>车主信息</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>车主名称<span class="required">(必填)</span></label>
                            <el-form-item prop="vehicleOwnerInfo.ownerName" :rules="$validate({required:true,msg:'请选择车主'})">
                                <!-- <el-autocomplete
                                    class="edit_input"
                                    ref="search_input"
                                    v-model="form.vehicleOwnerInfo.ownerName"
                                    :fetch-suggestions="querySearchAsync2"
                                    placeholder="请选择车主"
                                    @select="handleSelect2">
                                    <template slot-scope="{ item }">
                                        <div>{{item.ownerName}}</div>
                                    </template>
                                </el-autocomplete> -->
                                <el-select
                                    v-model.trim="form.vehicleOwnerInfo.ownerName"
                                    class="edit_input"
                                    filterable
                                    remote
                                    @focus="remoteMethod2('')"
                                    reserve-keyword
                                    placeholder="请输入关键词"
                                    @change="searchListChange2"
                                    :remote-method="remoteMethod2"
                                    :loading="searchLoading2">
                                    <el-option
                                    v-for="item in searchList2"
                                    :key="item.ownerId"
                                    :label="item.ownerName"
                                    :value="item.ownerName">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>车主类型：</label>
                            <el-form-item prop="vehicleOwnerInfo.ownerTypeString">
                                <el-input
                                    disabled
                                    class="edit_input"
                                    v-model="form.vehicleOwnerInfo.ownerTypeString"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>联系电话：</label>
                            <el-form-item prop="vehicleOwnerInfo.ownerMobile">
                                <el-input
                                    disabled
                                    class="edit_input"
                                    v-model="form.vehicleOwnerInfo.ownerMobile"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>联系地址：</label>
                            <el-form-item prop="vehicleOwnerInfo.ownerAddress">
                                <el-input
                                    disabled
                                    class="edit_input"
                                    v-model="form.vehicleOwnerInfo.ownerAddress"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </el-form>
        </div>
        <modal
            :title="'查看技术参数'"
            :width="1020"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_content">
                <div class="detail_model noBorder">
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>国产/进口：</label>
                            <span>{{otherForm.vehicleTechnologyDomesticImport | filterCommon(domesticList)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>总质量(kg)：</label>
                            <span>{{otherForm.vehicleTechnologyTotalMass}}</span>
                        </div>
                        <div class="detail_item">
                            <label>整备质量：</label>
                            <span>{{otherForm.vehicleTechnologyUnladenMass}}</span>
                        </div>
                        <div class="detail_item">
                            <label>准牵引质量(kg)：</label>
                            <span>{{otherForm.vehicleTechnologyDraw}}</span>
                        </div>
                        <div class="detail_item">
                            <label>核定载质量(kg)：</label>
                            <span>{{otherForm.vehicleTechnologyApprovedLoad}}</span>
                        </div>
                        <div class="detail_item">
                            <label>核定载客：</label>
                            <span>{{otherForm.vehicleTechnologyApprovedCarry}}</span>
                        </div>
                        <div class="detail_item">
                            <label>发动机型号：</label>
                            <span>{{otherForm.vehicleTechnologyEngineType}}</span>
                        </div>
                        <div class="detail_item">
                            <label>底盘型号：</label>
                            <span>{{otherForm.vehicleTechnologyChassisModel}}</span>
                        </div>
                        <div class="detail_item">
                            <label>发动机排量：</label>
                            <span>{{otherForm.vehicleTechnologyEngineDisplacement}}</span>
                        </div>
                        <div class="detail_item">
                            <label>排放标准：</label>
                            <span>{{otherForm.vehicleTechnologyEmissionStandard | filterCommon(discharge)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>电池类型：</label>
                            <span>{{otherForm.vehicleTechnologyBatteryType | filterCommon(batteryType)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>电机功率：</label>
                            <span>{{otherForm.vehicleTechnologyMotorPower}}</span>
                        </div>
                        <div class="detail_item">
                            <label>动力类型：</label>
                            <span>{{otherForm.vehicleTechnologyPowerType | filterCommon(technologyPowerType)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>车轴数量：</label>
                            <span>{{otherForm.vehicleTechnologyAxleNum}}</span>
                        </div>
                        <div class="detail_item">
                            <label>轴距(Mm)：</label>
                            <span>{{otherForm.vehicleTechnologyWheelbase}}</span>
                        </div>
                        <div class="detail_item">
                            <label>轮胎数/规格：</label>
                            <span>{{otherForm.vehicleTechnologyTiresSpecifications}}</span>
                        </div>
                        <div class="detail_item">
                            <label>行车制动方式：</label>
                            <span>{{otherForm.vehicleTechnologyBrakingMode | filterCommon(brakingMode)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>制动器形式：</label>
                            <span>{{otherForm.vehicleTechnologyBrakeType | filterCommon(brakeType)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>制动防抱死系统(ABS)：</label>
                            <span>{{otherForm.vehicleTechnologyAbs==='01'?'有':'无'}}</span>
                        </div>
                        <div class="detail_item">
                            <label>变速器形式：</label>
                            <span>{{otherForm.vehicleTechnologyTransmission | filterCommon(transmission)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>缓速器：</label>
                            <span>{{otherForm.vehicleTechnologyRetarder | filterCommon(retarder)}}</span>
                        </div>
                        <div class="detail_item">
                            <label>空调系统：</label>
                            <span>{{otherForm.vehicleTechnologyAirConditioner==='01'?'有':'无'}}</span>
                        </div>
                        <div class="detail_item">
                            <label>卫星定位系统：</label>
                            <span>{{otherForm.vehicleTechnologySatellitePositioning==='01'?'有':'无'}}</span>
                        </div>
                        <div class="detail_item">
                            <label>车辆外廓尺寸：</label>
                            <span>{{otherForm.vehicleTechnologyDimensions}}</span>
                        </div>
                        <div class="detail_item">
                            <label>货箱内尺寸或容积：</label>
                            <span>{{otherForm.vehicleTechnologyContainer}}</span>
                        </div>
                        <div class="detail_item">
                            <label>挂车类型：</label>
                            <span>{{otherForm.vehicleTechnologyTrailerType}}</span>
                        </div>
                        <div class="detail_item">
                            <label>挂车号牌：</label>
                            <span>{{otherForm.vehicleTechnologyTrailerPlate}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        <modal
            :title="'编辑技术参数'"
            :width="1020"
            :alert="showAlert2"
            @alertConfirm="alertConfirm2"
            @alertCancel="alertCancel2">
            <div class="detail_content edit_content">
                <div class="detail_model noBorder">
                    <div class="clearfix">
                        <el-form :model="otherForm" ref="otherForm" class="form">
                            <div class="detail_item">
                                <label>国产/进口：</label>
                                <el-form-item prop="vehicleTechnologyDomesticImport">
                                    <el-select
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyDomesticImport" placeholder="请选择">
                                        <el-option
                                        v-for="item in domesticList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>总质量(kg)：</label>
                                <el-form-item prop="vehicleTechnologyTotalMass" :rules="$validate({max:8})">
                                    <el-input
                                        type="number"
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyTotalMass"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>整备质量：</label>
                                <el-form-item prop="vehicleTechnologyUnladenMass" :rules="$validate({max:8})">
                                    <el-input
                                        type="number"
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyUnladenMass"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>准牵引质量(kg)：</label>
                                <el-form-item prop="vehicleTechnologyDraw" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyDraw"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>核定载质量(kg)：</label>
                                <el-form-item prop="vehicleTechnologyApprovedLoad" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyApprovedLoad"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>核定载客：</label>
                                <el-form-item prop="vehicleTechnologyApprovedCarry" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyApprovedCarry"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>发动机型号：</label>
                                <el-form-item prop="vehicleTechnologyEngineType" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyEngineType"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>底盘型号：</label>
                                <el-form-item prop="vehicleTechnologyChassisModel" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyChassisModel"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>发动机排量：</label>
                                <el-form-item prop="vehicleTechnologyEngineDisplacement" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyEngineDisplacement"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>排放标准：</label>
                                <el-form-item prop="vehicleTechnologyEmissionStandard">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyEmissionStandard" placeholder="请选择">
                                        <el-option
                                        v-for="item in discharge"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>电池类型：</label>
                                <el-form-item prop="vehicleTechnologyBatteryType">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyBatteryType" placeholder="请选择">
                                        <el-option
                                        v-for="item in batteryType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>电机功率：</label>
                                <el-form-item prop="vehicleTechnologyMotorPower" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyMotorPower"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>动力类型：</label>
                                <el-form-item prop="vehicleTechnologyPowerType">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyPowerType" placeholder="请选择">
                                        <el-option
                                        v-for="item in technologyPowerType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>车轴数量：</label>
                                <el-form-item prop="vehicleTechnologyAxleNum" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyAxleNum"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>轴距(Mm)：</label>
                                <el-form-item prop="vehicleTechnologyWheelbase" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyWheelbase"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>轮胎数/规格：</label>
                                <el-form-item prop="vehicleTechnologyTiresSpecifications" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyTiresSpecifications"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>行车制动方式：</label>
                                <el-form-item prop="vehicleTechnologyBrakingMode">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyBrakingMode" placeholder="请选择">
                                        <el-option
                                        v-for="item in brakingMode"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>制动器形式：</label>
                                <el-form-item prop="vehicleTechnologyBrakeType">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyBrakeType" placeholder="请选择">
                                        <el-option
                                        v-for="item in brakeType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>制动防抱死系统(ABS)：</label>
                                <el-form-item prop="vehicleTechnologyAbs">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyAbs" placeholder="请选择">
                                        <el-option
                                        v-for="item in [{value: '01', label: '有'}, {value: '02', label: '无'}]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>变速器形式：</label>
                                <el-form-item prop="vehicleTechnologyTransmission">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyTransmission" placeholder="请选择">
                                        <el-option
                                        v-for="item in transmission"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>缓速器：</label>
                                <el-form-item prop="vehicleTechnologyRetarder">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyRetarder" placeholder="请选择">
                                        <el-option
                                        v-for="item in retarder"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>空调系统：</label>
                                <el-form-item prop="vehicleTechnologyAirConditioner">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologyAirConditioner" placeholder="请选择">
                                        <el-option
                                        v-for="item in [{value: '01', label: '有'}, {value: '02', label: '无'}]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>卫星定位系统：</label>
                                <el-form-item prop="vehicleTechnologySatellitePositioning">
                                    <el-select class="edit_input" v-model="otherForm.vehicleTechnologySatellitePositioning" placeholder="请选择">
                                        <el-option
                                        v-for="item in [{value: '01', label: '有'}, {value: '02', label: '无'}]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>车辆外廓尺寸：</label>
                                <el-form-item prop="vehicleTechnologyDimensions" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        type="number"
                                        v-model="otherForm.vehicleTechnologyDimensions"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>货箱内尺寸或容积：</label>
                                <el-form-item prop="vehicleTechnologyContainer" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyContainer"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>挂车类型：</label>
                                <el-form-item prop="vehicleTechnologyTrailerType" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyTrailerType"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>挂车号牌：</label>
                                <el-form-item prop="vehicleTechnologyTrailerPlate" :rules="$validate({max:8})">
                                    <el-input
                                        class="edit_input"
                                        v-model="otherForm.vehicleTechnologyTrailerPlate"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                        </el-form>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import axios from 'axios'
import { plateColor, carTypeGuo, powerType, carBodyColor } from '@/utils/type.js'
import Modal from '@/components/Modal'
import selectCarModal from '@/components/selectCarModal2'
export default {
    name: 'carDataDetail',
    data () {
        return {
            showLoading: true,
            showBolds: true,
            searchList: [], // 下拉搜索列表
            searchList2: [],
            searchLoading: false,
            searchLoading2: false,
            copyForm: '',
            carBodyColor,
            vehicleUseList: [
                {
                    value: '02',
                    label: '非营运车辆'
                },
                {
                    value: '01',
                    label: '营运车辆'
                }
            ],
            domesticList: [
                {
                    value: '01',
                    label: '国产'
                },
                {
                    value: '02',
                    label: '进口'
                }
            ],
            batteryType: [
                {
                    value: '01',
                    label: '蓄电池'
                },
                {
                    value: '02',
                    label: '燃料电池'
                }
            ],
            discharge: [ // 排放标准
                {
                    value: '01',
                    label: '国Ⅱ'
                },
                {
                    value: '02',
                    label: '国Ⅲ'
                },
                {
                    value: '03',
                    label: '国Ⅳ'
                },
                {
                    value: '04',
                    label: '国Ⅴ'
                },
                {
                    value: '05',
                    label: '国Ⅵ'
                }
            ],
            technologyPowerType: [
                {
                    value: '01',
                    label: '前置前驱'
                },
                {
                    value: '02',
                    label: '后置后驱'
                },
                {
                    value: '03',
                    label: '前置后驱'
                },
                {
                    value: '04',
                    label: '全轮驱动'
                }
            ],
            brakingMode: [
                {
                    value: '01',
                    label: '行车制动器'
                },
                {
                    value: '02',
                    label: '驻车制动器'
                }
            ],
            brakeType: [
                {
                    value: '01',
                    label: '盘式制动器'
                },
                {
                    value: '02',
                    label: '鼓式制动器'
                }
            ],
            transmission: [ // 变速器形式
                {
                    value: '01',
                    label: '自动变速器'
                },
                {
                    value: '02',
                    label: '手动变速器'
                },
                {
                    value: '03',
                    label: '无级变速器'
                },
                {
                    value: '04',
                    label: '手自一体化'
                },
                {
                    value: '05',
                    label: '双离合变速器'
                }
            ],
            retarder: [ // 缓速器形式
                {
                    value: '01',
                    label: '电涡流缓速器'
                },
                {
                    value: '02',
                    label: '液力缓速器'
                }
            ],
            powerType,
            carTypeGuo,
            carTypeGuo1: [],
            carTypeGuo2: [],
            plateColor,
            form: {
                vehicleInfo: {
                    modelList: []
                },
                vehicleOwnerInfo: {},
                vehicleWorkInfo: {}
            },
            otherForm: {},
            pageType: 'detail',
            showAlert: false,
            showAlert2: false,
            options: [],
            props: {
                lazy: true,
                value: 'regionId',
                label: 'regionName',
                lazyLoad (node, resolve) {
                    const { level, value } = node
                    // console.log(level)
                    if (level === 1) {
                        axios.get('list/regioncityList?provinceRegionId=' + value).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = false
                            })
                            resolve(res.data.data)
                        })
                    }
                    if (level === 2) {
                        axios.get('list/regionList?cityId=' + value).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = true
                            })
                            resolve(res.data.data)
                        })
                    }
                }
            },
            options2: [],
            props2: {
                lazy: true,
                value: 'brandId',
                label: 'brandName',
                lazyLoad (node, resolve) {
                    const { level, value } = node
                    // console.log(level)
                    if (level === 1) {
                        axios.post('/basVehicle/getAllVehicleSeries', {
                            vehicleBrandId: value
                        }).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = false
                                item.brandId = item.serisId
                                item.brandName = item.serisName
                            })
                            resolve(res.data.data)
                        })
                    }
                    if (level === 2) {
                        axios.post('basVehicle/getAllVehicleModel', {
                            vehicleSeriesId: value
                        }).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = true
                                item.brandId = item.modelId
                                item.brandName = item.serisName
                            })
                            resolve(res.data.data)
                        })
                    }
                }
            }
        }
    },
    watch: {
        'form.vehicleInfo.vehicleVin' (val) {
            // console.log(val + '13213123s')
        },
        'form.vehicleInfo.vehicleUse' (val) {
            // console.log(val)
            if (val === '01') {
                setTimeout(() => {
                    // this.$refs.form.validateField(['vehicleWorkInfo.enterpriseName'])
                    // this.$refs.form.validateField(['vehicleWorkInfo.vehicleTechnologyTypeId'])
                    this.$refs.form.validateField(['vehicleWorkInfo.enterpriseName', 'vehicleWorkInfo.vehicleTechnologyTypeId', 'vehicleWorkInfo.vehicleTransportCertificateNo', 'vehicleWorkInfo.createTime', 'vehicleWorkInfo.areaList'])
                }, 400)
            } else {
                this.$refs.form.clearValidate(['vehicleWorkInfo.enterpriseName', 'vehicleWorkInfo.vehicleTechnologyTypeId', 'vehicleWorkInfo.vehicleTransportCertificateNo', 'vehicleWorkInfo.createTime', 'vehicleWorkInfo.areaList'])
            }
        },
        'form.vehicleWorkInfo.enterpriseName' (val) {
            this.$refs.form.validateField(['vehicleWorkInfo.enterpriseName'])
        },
        'form.vehicleWorkInfo.vehicleTechnologyTypeId' (val) {
            this.$refs.form.validateField(['vehicleWorkInfo.vehicleTechnologyTypeId'])
        },
        'form.vehicleWorkInfo.vehicleTransportCertificateNo' (val) {
            this.$refs.form.validateField(['vehicleWorkInfo.vehicleTransportCertificateNo'])
        },
        'form.vehicleWorkInfo.createTime' (val) {
            this.$refs.form.validateField(['vehicleWorkInfo.createTime'])
        },
        'form.vehicleWorkInfo.areaList' (val) {
            this.$refs.form.validateField(['vehicleWorkInfo.areaList'])
        }
    },
    components: {
        selectCarModal,
        Modal
    },
    created () {
        if (!this.$checkAuth('vehicle:p:vehicleInfo')) {
            this.$alert('您没有该权限')
            return
        }
        // this.remoteMethod2('')
        // this.remoteMethod('')
        this.getData()
        this.getOtherData()
        // this.$post('/basVehicle/getAllVehiclebrand', {}).then(res => {
        //     this.options2 = res.data
        // })
        this.$get('list/selectAllVehicleType').then(res => {
            this.carTypeGuo1 = res.data.filter(e => {
                return e.vehicle_type === 1
            })
            this.carTypeGuo2 = res.data.filter(e => {
                return e.vehicle_type === 2
            })
        })
    },
    methods: {
        closeShowBolds () {
            this.showBolds = false
        },
        remoteMethod222 () {
            // console.log(122211)
        },
        // 下来搜索查询
        remoteMethod (query) {
            // console.log(11111)
            // if (!query.trim()) return
            this.searchLoading = true
            this.$get('enterprise/selectEnterpriseByName?enterpriseName=' + query).then(res => {
                this.searchList = res.data || []
                this.searchLoading = false
            })
        },
        // 下来搜索赋值
        searchListChange (val) {
            if (!val) {
                this.form.vehicleWorkInfo.enterpriseId = ''
            }
            // console.log(val)
            this.searchList.forEach(e => {
                if (e.enterpriseName === val) {
                    this.form.vehicleWorkInfo.enterpriseId = e.enterpriseId
                }
            })
        },
        // 下来搜索查询
        remoteMethod2 (query) {
            // if (!query.trim()) return
            this.searchLoading2 = true
            this.$get('list/findAllOwnerName?ownerName=' + (query || '')).then(res => {
                this.searchList2 = res.data || []
                this.searchLoading2 = false
            })
        },
        // 下来搜索赋值
        searchListChange2 (val) {
            // console.log(val)
            this.searchList2.forEach(e => {
                if (e.ownerName === val) {
                    this.form.vehicleOwnerInfo.ownerId = e.ownerId
                    this.$post(`vehicleowner/view/${e.ownerId}?ownerId=` + e.ownerId).then(res => {
                        this.form.vehicleOwnerInfo.ownerTypeString = res.owner.ownerTypeName
                        this.form.vehicleOwnerInfo.ownerMobile = res.owner.ownerMobile
                        this.form.vehicleOwnerInfo.ownerAddress = res.owner.ownerAddress
                    })
                }
            })
        },
        // 选择城市
        handleChange (list) {
            this.form.vehicleWorkInfo.province = list[0]
            this.form.vehicleWorkInfo.city = list[1]
            this.form.vehicleWorkInfo.region = list[2]
        },
        handleChange2 (list) {
            // console.log(list)
            // this.form.vehicleWorkInfo.rrovince = list[0]
            // this.form.vehicleWorkInfo.city = list[1]
            // this.form.vehicleWorkInfo.region = list[2]
        },
        // 企业搜索
        querySearchAsync (queryString, cb) {
            // console.log(val)
            if (!queryString) return
            this.$get('enterprise/selectEnterpriseByName?enterpriseName=' + queryString).then(res => {
                this.entList = res.data || []
                if (!this.entList.length) {
                }
                cb(this.entList)
            })
        },
        // 车主搜索
        querySearchAsync2 (queryString, cb) {
            // console.log(val)
            if (!queryString) return
            this.$get('list/findAllOwnerName?ownerName=' + queryString).then(res => {
                this.entList = res.data || []
                if (!this.entList.length) {
                    // this.$refs.focus_input.focus()
                }
                cb(this.entList)
            })
        },
        // 选择企业
        handleSelect (val) {
            // console.log(val)
            this.form.vehicleWorkInfo.enterpriseName = val.enterpriseName
            this.form.vehicleWorkInfo.enterpriseId = val.enterpriseId
        },
        // handleSelect2 (val) {
        //     // console.log(val)
        //     this.form.vehicleOwnerInfo.ownerName = val.ownerName
        //     this.form.vehicleOwnerInfo.ownerId = val.ownerId
        //     this.$refs.form.validateField(['vehicleOwnerInfo.ownerId'])
        //     this.$get('/vehicle/p/selectOwnerDetail?ownerId=' + val.ownerId).then(res => {
        //         this.form.vehicleOwnerInfo.ownerTypeString = res.data.ownerTypeString
        //         this.form.vehicleOwnerInfo.ownerMobile = res.data.ownerMobile
        //         this.form.vehicleOwnerInfo.ownerAddress = res.data.ownerAddress
        //     })
        // },
        getOtherData () {
            this.$get('/vehicle/p/vehicleTechnology?vehicleId=' + this.$route.query.id).then(res => {
                if (res.data) {
                    for (const key in res.data) {
                        if (typeof res.data[key] === 'number') {
                            // console.log(res.data[key])
                            res.data[key] += ''
                        }
                    }
                }
                this.otherForm = res.data || {}
                this.form.vehicleTechnologyDto = this.otherForm
            })
        },
        closeAction () {
            if (this.pageType === 'edit') {
                this.pageType = 'detail'
                this.getData()
            } else {
                this.$router.push('/carData')
            }
        },
        // 关闭页面
        close () {
            if (this.pageType === 'edit') {
                this.$confirm('当前页面未保存，是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('closePage', {
                        nextPath: '/carData'
                    })
                }).catch(() => {
                })
            } else {
                this.$store.dispatch('closePage', {
                    nextPath: '/carData',
                    refresh: 'carData'
                })
            }
        },
        saveAction () {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    this.form.vehicleTechnologyDto = this.otherForm
                    this.form.vehicleWorkInfo.province = this.form.vehicleWorkInfo.areaList[0]
                    this.form.vehicleWorkInfo.city = this.form.vehicleWorkInfo.areaList[1]
                    this.form.vehicleWorkInfo.region = this.form.vehicleWorkInfo.areaList[2]
                    this.form.vehicleInfo.vehicleOwnerId = this.form.vehicleOwnerInfo.ownerId
                    this.form.vehicleInfo.vehicleOwnerName = this.form.vehicleOwnerInfo.ownerName
                    // res.data.vehicleInfo.modelList = [res.data.vehicleInfo.vehicleBrandId, res.data.vehicleInfo.vehicleSeriesId, res.data.vehicleInfo.vehicleModelId]
                    this.form.vehicleInfo.vehicleBrandId = this.form.vehicleInfo.modelList[0]
                    this.form.vehicleInfo.vehicleSeriesId = this.form.vehicleInfo.modelList[1]
                    this.form.vehicleInfo.vehicleModelId = this.form.vehicleInfo.modelList[2]
                    this.form.vehicleOwnerDto = this.form.vehicleOwnerInfo
                    this.form.vehicleDataBase = this.form.vehicleWorkInfo
                    // this.form.vehicleWorkInfo.vehicleId = this.form.vehicleInfo.vehicleId
                    this.$post('vehicle/p/vehicleInfo/update', this.form).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '保存成功'
                            })
                            this.pageType = 'detail'
                            this.getData()
                            this.$store.commit('setRefreshList', 'carData')
                        }
                    })
                } else {
                    this.$alert('保存失败，请输入正确的内容', '提示')
                }
            })
        },
        editAction () {
            if (!this.$checkAuth('datamanage:vehicle:edit')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.pageType = 'edit'
        },
        showAddr2 (res) {
            this.$post('basVehicle/getAllVehiclebrand', {})
                .then(regionProvinceList => {
                    this.options2 = regionProvinceList.data
                    let provinceIndex = 0
                    regionProvinceList.data.forEach((item, index) => {
                        item.leaf = false
                        item.children = []
                        if (item.brandId === res.data.vehicleInfo.vehicleBrandId) {
                            provinceIndex = index
                        }
                    })
                    let options = regionProvinceList.data
                    if (!res.data.vehicleInfo.vehicleBrandId || !res.data.vehicleInfo.vehicleSeriesId || !res.data.vehicleInfo.vehicleModelId) {
                        this.loading = false
                        this.options2 = options
                        return
                    }
                    this.$post('basVehicle/getAllVehicleSeries', {
                        vehicleBrandId: res.data.vehicleInfo.vehicleBrandId
                    })
                        .then(regioncityList => {
                            let cityIndex = 0
                            regioncityList.data.forEach(item => {
                                item.brandId = item.serisId
                                item.brandName = item.serisName
                            })
                            regioncityList.data.forEach((item, index) => {
                                item.leaf = false
                                item.children = []
                                if (item.brandId === res.data.vehicleInfo.vehicleSeriesId) {
                                    cityIndex = index
                                }
                            })
                            options[1].children = regioncityList.data
                            options[provinceIndex].children = regioncityList.data
                            this.$post('basVehicle/getAllVehicleModel', {
                                vehicleSeriesId: res.data.vehicleInfo.vehicleSeriesId
                            })
                                .then(regionList => {
                                    regionList.data.forEach(item => {
                                        item.brandId = item.modelId
                                        item.brandName = item.serisName
                                    })
                                    regionList.data.forEach((item, index) => {
                                        item.leaf = true
                                    })
                                    options[provinceIndex].children[cityIndex].children = regionList.data
                                    this.options2 = options
                                    this.loading = false
                                })
                        })
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
                        if (item.regionId === res.data.vehicleWorkInfo.province) {
                            provinceIndex = index
                        }
                    })
                    let options = regionProvinceList.data
                    if (!res.data.vehicleWorkInfo.province || !res.data.vehicleWorkInfo.city || !res.data.vehicleWorkInfo.region) {
                        this.loading = false
                        this.options = options
                        return
                    }
                    this.$get('list/regioncityList?provinceRegionId=' + res.data.vehicleWorkInfo.province)
                        .then(regioncityList => {
                            let cityIndex = 0
                            regioncityList.data.forEach((item, index) => {
                                item.leaf = false
                                item.children = []
                                if (item.regionId === res.data.vehicleWorkInfo.city) {
                                    cityIndex = index
                                }
                            })
                            options[provinceIndex].children = regioncityList.data
                            this.$get('list/regionList?cityId=' + res.data.vehicleWorkInfo.city)
                                .then(regionList => {
                                    regionList.data.forEach((item, index) => {
                                        item.leaf = true
                                    })
                                    options[provinceIndex].children[cityIndex].children = regionList.data
                                    this.options = options
                                    this.loading = false
                                    // console.log(this.options)
                                })
                        })
                })
        },
        getData () {
            this.showLoading = true
            this.$post('vehicle/p/vehicleInfo', {
                data: {
                    vehicleId: this.$route.query.id
                }
            }).then(res => {
                if (!res.data.vehicleInfo) res.data.vehicleInfo = {}
                if (!res.data.vehicleOwnerInfo) res.data.vehicleOwnerInfo = {}
                if (!res.data.vehicleWorkInfo) res.data.vehicleWorkInfo = {}
                if (res.data.vehicleWorkInfo.province && res.data.vehicleWorkInfo.city && res.data.vehicleWorkInfo.region) {
                    res.data.vehicleWorkInfo.areaList = [res.data.vehicleWorkInfo.province, res.data.vehicleWorkInfo.city, res.data.vehicleWorkInfo.region]
                } else {
                    res.data.vehicleWorkInfo.areaList = []
                }
                res.data.vehicleInfo.modelList = [res.data.vehicleInfo.vehicleBrandId, res.data.vehicleInfo.vehicleSeriesId, res.data.vehicleInfo.vehicleModelId]
                if (!res.data.vehicleInfo.vehicleBrandId || !res.data.vehicleInfo.vehicleSeriesId || !res.data.vehicleInfo.vehicleModelId) {
                    res.data.vehicleInfo.modelList = []
                }
                this.$nextTick(() => {
                    this.$refs.form.validateField(['vehicleInfo.modelList'])
                })
                // console.log(res.data.vehicleInfo.modelList)
                this.showAddr(res)
                // this.showAddr2(res)
                // console.log(this.form)
                this.form = res.data
                this.copyForm = JSON.stringify(this.form)
                // if (!this.form.vehicleInfo) this.form.vehicleInfo = {}
                // if (!this.form.vehicleOwnerInfo) this.form.vehicleOwnerInfo = {}
                // if (!this.form.vehicleWorkInfo) this.form.vehicleWorkInfo = {}
                this.showLoading = false
            })
        },
        // 查看技术参数详情
        checkDetail () {
            // console.log(this.form.vehicleTechnologyDto)
            // if (this.form.vehicleTechnologyDto) {
            //     this.otherForm = this.form.vehicleTechnologyDto
            // } else {
            //     this.getOtherData()
            // }
            if (this.pageType === 'detail') {
                this.showAlert = true
            } else {
                this.showAlert2 = true
            }
        },
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        },
        alertConfirm2 () {
            // this.$post('vehicle/p/vehicleTechnology/update', this.otherForm).then(res => {
            //     if (res.code === 0) {
            //         this.$message({
            //             type: 'success',
            //             message: '保存成功'
            //         })
            //     }
            // })
            this.$refs['otherForm'].validate((valid) => {
                if (valid) {
                    this.form.vehicleTechnologyDto = this.otherForm
                    this.showAlert2 = false
                } else {
                    this.$alert('保存失败，请输入正确的内容', '提示')
                }
            })
        },
        alertCancel2 () {
            // this.form.vehicleTechnologyDto = null
            this.getOtherData()
            this.showAlert2 = false
        }
    }
}
</script>

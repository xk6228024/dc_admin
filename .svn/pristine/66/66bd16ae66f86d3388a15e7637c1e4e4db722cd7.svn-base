<!-- 备案信息查询 -->
<template>
    <div class="recordDataDetail">
        <div class="content">
            <el-tabs type="card" v-model="tabIndex" @tab-click="changeTabs">
                <el-tab-pane label="基本信息" name="tab1" class="basic-info clearfix">
                    <div class="tab_inner">
                        <div class="info-title">备案信息</div>
                        <div class="info-content">
                            <el-row>
                                <el-col :span="8">
                                    <div class="item-name">所属辖区局：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.enterpriseJurisdiction}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">备案类型：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.enterpriseRecordType}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">备案编号：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.enterpriseCoding}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">录入时间：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.createTime}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">录入人姓名：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.createName}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">状态：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.enterpriseOperatingState}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">审核时间：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.enterpriseAuditDate}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">审核人姓名：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.auditName}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">审核状态：</div>
                                    <div class="item-value">{{info.enterpriseRecordBaseDto.auditStatus}}</div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="tab_inner">
                        <div class="info-title">企业信息</div>
                        <div class="info-content">
                            <el-row>
                                <el-col :span="8">
                                    <div class="item-name">单位名称：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseName}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">统一社会信用代码：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseCreditIdentifier}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">企业性质：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseEconomicCategory}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">单位法人：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseLegalPerson}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">法人证件号码：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseLegalPersonIdcardnumber}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">联系电话：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseLegalPersonPhone}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">业户类别：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseTypeId}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">经营类型：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseBusinessCategory}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">业务类型：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseBusinessType}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">是否从事燃气汽车维修：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseFuelVehicleRepairIs}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">是否从事新能源汽车维修：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseNewPowerRepairIs}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">是否连锁经营：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseChainOrGroupOperationIs}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">经营种类项目：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseProjectCategory}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">注册地址：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseRegisterAddress}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">经营地址：</div>
                                    <div class="item-value">{{this.info.enterpriseRecordBaseDto.enterpriseOperatingAddress}}</div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="经营场地" name="tab2" class="basic-info clearfix">
                    <div class="tab_inner">
                        <div class="info-content">
                            <el-row>
                                <el-col :span="8">
                                    <div class="item-name">场地所属：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.operateWorkspaceOner}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">经营场所总面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.operateWorkspaceTotalSize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">停车厂面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.operateWorkspaceParkingspaceSize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">生产厂房面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.operateWorkspaceFactorySize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">接待室面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.operateWorkspaceReceptionroomSize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">总成维修车间面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.operateWorkspaceRepairroomSize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">危险货物运输车辆专业停车场地面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.dangerousstaffTransportVehicleParkingspaceSize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">危险货物运输车辆作业专业维修车间面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.dangerousstaffTransportVehicleRepairspaceSize}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">燃气汽车维修专业维修厂房面积(m²)：</div>
                                    <div class="item-value">{{this.info.enterpriseOperateWorkspaceDto.gasfuelTransportVehicleRepairspaceSize}}</div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="安全制度" name="tab3" class="basic-info clearfix">
                    <div class="tab_inner">
                        <div class="info-content">
                            <el-row>
                                <el-col :span="8">
                                    <div class="item-name">质量管理制度：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.qualityManageInstitution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">安全生产管理制度：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.produceManageInstitution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">车辆维修档案管理制度：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.vehicleFixdocumentManageInstitution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">人员培训制度：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.personTrainingInstitution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">设备管理制度：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.equipmentManageInstitution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">配件管理制度：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.fixingpartManageInstitution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">突发事件应急预案：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.emergencyPreventionSolution}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">安全操作规程材料：</div>
                                    <div class="item-value">{{this.info.enterpriseSecurityInstitutionDto.securityOperationRulesMerterial}}</div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="设施设备" name="tab4" class="basic-info clearfix">
                    <div class="tab_inner">
                        <div class="info-content">
                            <el-row>
                                <el-col :span="8">
                                    <div class="item-name">仪表工具：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.instrumentTool}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">通用设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.universalEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">专用设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.specialEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">检测设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.detectEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">综合小修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.comprehensiveMinorrepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">发动机修理设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.engineRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">车身维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.vehicleBodyRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">四轮定位检测调整设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.wheelsPositionDetectEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">电气系统维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.gasSystemRepairRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">自动变速器维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.autoChangingspeedRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">轮胎动平衡及修补设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.wheelsAutoBalancingRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">机动车润滑与养护设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.vehicleSmoothProdectEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">车辆美容装潢设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.vehicleBeautyDecorationEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">喷油泵、喷油器维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.injectorRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">曲轴修磨设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.crankAxleRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">散热器维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.radiatorRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">气缸镗磨设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.cylinderRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">空调维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.airconditionerRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">车辆玻璃安装及维护设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.vehicleGlassRepairEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">危险货物运输设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.dangerousstaffTransportEquipment}}</div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="item-name">摩托车维修设备：</div>
                                    <div class="item-value">{{this.info.enterpriseEquipmentsDto.motorcycleRepairEquipment}}</div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="环保信息" name="tab5" class="basic-info clearfix">
                    <div class="table_inner">
                        <el-table
                        :data="info.enterpriseEnvironmentProdectionitemsDto"
                        :header-cell-style="{'background':'rgba(250,250,250,1)','text-align':'center','width':'100%'}"
                        border
                        >
                            <el-table-column
                            prop="num"
                            label="序号"
                            align="center"
                            width="100">
                            <template slot-scope="scope">
                                {{scope.$index + 1}}
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="label"
                            label="环保要求"
                            align="left">
                            </el-table-column>
                            <el-table-column
                            prop="result"
                            label="检查结果"
                            width="200"
                            align="center">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="人员信息" name="tab6" class="basic-info clearfix">
                    <div class="table_inner">
                        <el-table
                        :data="info.personPage.records"
                        :header-cell-style="{'background':'rgba(250,250,250,1)','text-align':'center'}"
                        border
                        style="width:100%;">
                            <el-table-column
                            prop="num"
                            label="序号"
                            width="80"
                            align="center">
                            <template slot-scope="scope">
                                {{scope.$index + 1}}
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="personName"
                            label="姓名"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="educationDegree"
                            label="文化程度"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="personPost"
                            label="岗位"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="personIdcardNumber"
                            label="身份证号"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="personMobile"
                            label="手机号码"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="personEducationMajor"
                            label="所学专业"
                            align="center">
                            </el-table-column>
                            <el-table-column
                            prop="result"
                            label="操作"
                            width="100"
                            align="center">
                            <template slot-scope="scope">
                                <el-button type="text" :disabled="!$checkAuth('datamanage:enterpriseRecord:person:view')" @click="$router.push('/recordPerson?id=' + scope.row.personId)">详情</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                        <!-- <div class="page">
                            <el-pagination
                                :current-page.sync="pageNum"
                                background
                                :page-sizes="[10, 15, 20]"
                                :page-size="pageSize"
                                layout="prev, pager, next, sizes,  jumper, total"
                                :total="total"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                            />
                        </div> -->
                    </div>
                </el-tab-pane>
                <el-tab-pane label="文件信息" name="tab7" class="basic-info clearfix">
                    <div class="tab_inner">
                        <div class="info-title">备案信息</div>
                        <div class="info-content clearfix">
                            <div class="img_item" v-for="item in info.imgList1" :key="item.id">
                                <div class="img_border" @click="$lookImg(item.url)">
                                    <img :src="item.url">
                                </div>
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab_inner">
                        <div class="info-title">经营场地</div>
                        <div class="info-content clearfix">
                            <div class="img_item" v-for="item in info.imgList2" :key="item.id">
                                <div class="img_border" @click="$lookImg(item.url)">
                                    <img :src="item.url">
                                </div>
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab_inner">
                        <div class="info-title">安全制度</div>
                        <div class="info-content clearfix">
                            <div class="img_item" v-for="item in info.imgList3" :key="item.id">
                                <div class="img_border" @click="$lookImg(item.url)">
                                    <img :src="item.url">
                                </div>
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab_inner">
                        <div class="info-title">设施设备</div>
                        <div class="info-content clearfix">
                            <div class="img_item" v-for="item in info.imgList4" :key="item.id">
                                <div class="img_border" @click="$lookImg(item.url)">
                                    <img :src="item.url">
                                </div>
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
// import BreadFoot from '@/components/BreadFoot.vue'
export default {
    name: 'recordDataDetail',
    components: {
    },
    data () {
        return {
            pageNum: 1,
            total: 0,
            pageSize: 10,
            breadArr: [
                { title: '档案管理', path: '' }, { title: '企业备案信息', path: '' }
            ],
            tabIndex: 'tab1',
            info: {
                enterpriseRecordBaseDto: {},
                enterpriseEnvironmentProdectionitemsDto: [],
                enterpriseEquipmentsDto: {},
                enterpriseOperateWorkspaceDto: {},
                enterpriseProveAttachmentsDto: {},
                enterpriseSecurityInstitutionDto: {},
                personPage: {
                    records: []
                }
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData () {
            this.$get(`enterpriseRecord/view/${this.$route.query.id}`).then(res => {
                this.info = res.data
                console.log(this.info)
                !this.info.enterpriseRecordBaseDto && (this.info.enterpriseRecordBaseDto = {})
                console.log(this.info.enterpriseRecordBaseDto)
                !this.info.enterpriseOperateWorkspaceDto && (this.info.enterpriseOperateWorkspaceDto = {})
                !this.info.enterpriseSecurityInstitutionDto && (this.info.enterpriseSecurityInstitutionDto = {})
                !this.info.enterpriseEquipmentsDto && (this.info.enterpriseEquipmentsDto = {})
                !this.info.enterpriseProveAttachmentsDto && (this.info.enterpriseProveAttachmentsDto = {})
                !this.info.enterpriseEnvironmentProdectionitemsDto && (this.info.enterpriseEnvironmentProdectionitemsDto = [])
                !this.info.personPage.records && (this.info.personPage.records = [])
                // this.info.personPage.records = [{}]
                // console.log(this.info.personPage.records)
                this.info.enterpriseEnvironmentProdectionitemsDto = [
                    {
                        label: '应具有废油、废液、废气、废水（以下简称“四废”）、废蓄电池、废轮胎、含石棉废料及有害垃圾等物质集中收集、有效处理和保持环境整洁的环境保护管理制度，并有效执行。有害物质存储区域应界定清楚，必要时应有。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.wastedStaffPrevention
                    },
                    {
                        label: '作业环境以及按生产工艺配置的处理“四废”及采光、通风、吸尘、净化、消声等设施，均应符合环境保护的有关规定。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.environment4itemsWastedPrevention
                    },
                    {
                        label: '涂漆车间应设有专用的废水排放及处理设施，采用干打磨工艺的，应有粉尘收集装置和除尘设备，并应设有通风设备。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.ventilatingSystemProtection
                    },
                    {
                        label: '摩托车维修产生的废弃物，其收集、存放和处理应符合国家有关的环保规定。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.motocycleFixWastedPrevention
                    },
                    {
                        label: '调试车间或调试工位应设置汽车尾气收集净化装置。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.workstationVehicleGasCleaner
                    },
                    {
                        label: '是否有干打磨工艺。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.isHavingDryGrindingProcess
                    },
                    {
                        label: '是否有调试车间或工位。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.isHavingDebugingWorkstation
                    },
                    {
                        label: '是否有涂漆车间。',
                        result: this.info.enterpriseEnvironmentProdectionitemsDto.isHavingPaintingWorkstation
                    }
                ]
                console.log(this.info.enterpriseEnvironmentProdectionitemsDto)
                this.info.imgList1 = [
                    {
                        url: this.info.enterpriseProveAttachmentsDto.enterpriseLegalPersonIdcardPic,
                        name: '法人身份证'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.noNationProductContract,
                        name: '不产固废承诺书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.chainOperateContractCopyfile,
                        name: '连锁经营协议书副本'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.chainOperateWorkingStandardManageManual,
                        name: '连锁经营的作业标准和管理 手册'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.chainOperateToVehicleRepairConditionContract,
                        name: '连锁经营服务网点符合机动车 维修经营相应条件的承诺书'
                    }
                ]
                this.info.imgList2 = [
                    {
                        url: this.info.enterpriseProveAttachmentsDto.enterpriseHeaderPic,
                        name: '企业门头照片'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.enterpriseLandusePropertyProveMaterial,
                        name: '土地使用权及产权证明材料'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.enterpriseLanduseFile,
                        name: '土地使用权'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.enterpriseRentProveFile,
                        name: '租赁合同或租赁备案证明'
                    }
                ]
                this.info.imgList3 = [
                    {
                        url: this.info.enterpriseProveAttachmentsDto.qualityManageInstitution,
                        name: '质量管理制度'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.produceManageInstitution,
                        name: '安全生产管理制度'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.vehicleFixdocumentManageInstitution,
                        name: '车辆维修档案管理制度'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.personTrainingInstitution,
                        name: '人员培训制度'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.equipmentManageInstitution,
                        name: '设备管理制度'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.fixingpartManageInstitution,
                        name: '配件管理制度'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.emergencyPreventionSolution,
                        name: '突发事件应急预案'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.securityOperationRulesMerterial,
                        name: '安全操作规程材料'
                    }
                ]
                this.info.imgList4 = [
                    {
                        url: this.info.enterpriseProveAttachmentsDto.cylinderPressureTableVerificationCert,
                        name: '气缸压力表检定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.oilPressureTableVerificationCert,
                        name: '液压油压力表检定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.fuelPressureTableVerificationCert,
                        name: '燃油压力表检定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.gasPressureTableVerificationCert,
                        name: '气体压力及流量检测仪检定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.tailGasAnalizeVerificationCert,
                        name: '尾气分析仪或不透光烟度计检 定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.vehicleFontLightVerificationCert,
                        name: '汽车前照灯检测设备检定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.sideSlipTesterVerificationCert,
                        name: '侧滑试验台检定证书'
                    },
                    {
                        url: this.info.enterpriseProveAttachmentsDto.breakPerformingCheckerVerificationCert,
                        name: '制动性能检验设备检定证书'
                    }
                ]
            })
        },
        changeTabs (index) {},
        queryData () {},
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.queryData()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.queryData()
        }
    }
}
</script>
<style lang="less">
.recordDataDetail {
    .table_inner {
        padding: 20px;
        background: #ffffff;
    }
    .tab_inner {
        background: #ffffff;
        border-bottom: 20px solid #edf0f5;
        .info-title {
            padding: 0 30px;
            height: 54px;
            line-height: 54px;
            text-align: left;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            border-bottom: 1px solid #E9E9E9;
        }
        .info-content {
            padding: 24px 30px;
            font-size: 14px;
            .item-name, .item-value {
                display: inline-block;
                margin-bottom: 16px;
                font-size: 14px;
            }
            .item-name {
                color: #333;
            }
            .item-value {
                color: #666;
            }
        }
        .img_item {
            cursor: pointer;
            float: left;
            margin-right: 45px;
            margin-bottom: 15px;
            width: 162px;
            .img_border {
                width: 144px;
                padding: 8px;
                height: 144px;
                border: 1px solid rgba(0,0,0,0.15);
                border-radius: 4px;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            p {
                color: #666666;
                margin-top: 10px;
            }
        }
    }
    .tab_inner:last-of-type {
        border-bottom: 0;
    }
    .el-tabs__content {
        padding-bottom: 20px;
    }
    .el-tabs--card>.el-tabs__header {
        background: #EDF0F5;
        border: none;
        margin: 0;
        .el-tabs__nav {
            border: none;
        }
        .el-tabs__item {
            box-sizing: border-box;
            border: none;
            border-radius:3px 3px 0px 0px;
            background: #FFF;
            margin-right: 10px;
            border-top: 3px solid #FFF;
            &.is-active {
                color: #1890FF;
                border-top: 3px solid #3E94FE;
            }
        }
    }
}
</style>

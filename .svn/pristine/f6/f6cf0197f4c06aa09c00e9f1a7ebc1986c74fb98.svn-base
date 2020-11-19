<!-- 权限管理 -->
<template>
    <div class="regulatorSell">
        <breadcrumb :breadList="['系统设置', '外延设备管理']">
            <label for="">所属区域:</label>
            <el-select class="w120_input" clearable v-model="areaId" placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.sysAreaId"
                :label="item.areaName"
                clearable
                :value="item.sysAreaId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" clearable v-model="regionId" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                clearable
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">企业类型:</label>
            <el-select class="w120_input" clearable v-model="entType" placeholder="请选择">
                <el-option
                v-for="item in entTypeList"
                :key="item.is"
                :label="item.typeName"
                clearable
                :value="item.id">
                </el-option>
            </el-select>
            <label for="">企业名称:</label>
            <el-input style="width:160px;" clearable class="search-text" v-model="entName" placeholder=""></el-input>
            <!-- <br> -->
            <!-- <div class="dlb">
                <label for="">销售类型:</label>
                <el-select class="w120_input" v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    clearable
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> -->
            <div class="dlb">
                <label for="">查询时间:</label>
                <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="getList">查询</el-button>
            </div>
            <el-button class="fr mt17" type="primary" @click="showAlert = true">添加外延设备</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%;minHeight:600px">
                <!-- <el-table-column
                type="selection"
                width="55">
                </el-table-column> -->
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="areaName"
                align="left"
                label="区域"
                min-width="8%">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                label="城市"
                min-width="6%">
                </el-table-column>
                <el-table-column
                prop="deviceName"
                align="left"
                min-width="15%"
                label="产品名称">
                </el-table-column>
                <el-table-column
                prop="entName"
                align="left"
                label="企业名称"
                min-width="15%">
                </el-table-column>
                <el-table-column
                prop="num"
                align="left"
                min-width="5%"
                label="数量">
                </el-table-column>
                <el-table-column
                prop="price"
                align="left"
                min-width="6%"
                label="单价">
                </el-table-column>
                <el-table-column
                prop="discount"
                align="left"
                min-width="5%"
                label="折扣">
                </el-table-column>
                <el-table-column
                prop="payMonney"
                align="left"
                min-width="6%"
                label="已收金额">
                </el-table-column>
                <el-table-column
                prop="payTypeName"
                align="left"
                min-width="8%"
                label="付款方式">
                </el-table-column>
                <el-table-column
                prop="payTime"
                align="left"
                min-width="10%"
                label="缴费日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.payTime|filterTime('yyyy-mm-dd')}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="statusText"
                align="left"
                min-width="8%"
                label="审核状态">
                </el-table-column>
                <el-table-column
                prop="passPeople"
                align="left"
                min-width="8%"
                label="经办人">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="13%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="lookDetail(scope.row)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')" style="margin-left:10px;">查看</el-button>
                        <el-button @click="aduitDetail(scope.row)" v-if="scope.row.statusText==='待审核'" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">审核</el-button>
                        <el-button @click="eidtDetail(scope.row)" v-if="scope.row.statusText==='待审核'"  type="text" size="small" :disabled="!$checkAuth('sys:role:update')">编辑</el-button>
                        <!-- <el-button @click="roleEdit(scope.row.roleId)" v-if="scope.row.statusText==='待审核'"  type="text" size="small" :disabled="!$checkAuth('sys:role:update')">删除</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <modal
            :title="'新增销售记录'"
            :subTitle="'(如新增的城市业务需要新设备,请先在销售设备管理里面进行新增)'"
            :width="884"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon ref="addForm" label-width="120px" style="" class="form clearfix">
                <el-form-item class="fl" label="销售区域:" prop="cityRegion" required :rules="$validate({required:true,msg:'请选择城市'})">
                    <div class="dlb" style="margin-right:10px;">
                        <el-select class="small_input" ref="focus_input" v-model="regin1" @change="regin2='';ruleForm.cityRegion='';getReginList2(regin1)" placeholder="请选择">
                            <el-option
                            v-for="item in reginList1"
                            :key="item.sysAreaId"
                            :label="item.areaName"
                            clearable
                            :value="item.sysAreaId">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dlb" style="margin-right:10px;">
                        <el-select class="small_input" v-model="regin2" @change="ruleForm.cityRegion='';getReginList3(regin2)" placeholder="请选择">
                            <el-option
                            v-for="item in reginList2"
                            :key="item.regionProvinceId"
                            :label="item.name"
                            :value="item.regionProvinceId">
                        </el-option>
                    </el-select>
                    </div>
                    <div class="dlb" style="">
                        <el-select class="small_input" v-model="ruleForm.cityRegion" placeholder="请选择">
                            <el-option
                            v-for="item in reginList3"
                            :key="item.regionCityId"
                            :label="item.text"
                            :value="item.regionCityId">
                            </el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item class="fl" label="企业类型:" prop="entType" :rules="$validate({required:true})">
                    <el-select class="w320_input" v-model="ruleForm.entType" placeholder="企业类型">
                        <el-option
                        v-for="item in entTypeList"
                        :key="item.id"
                        :label="item.typeName"
                        clearable
                        :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="fl" label="企业名称:" prop="entName" :rules="$validate({required:true,msg:'请选择企业'})">t> -->
                    <el-autocomplete
                        ref="search_input"
                        class="w760_input"
                        v-model="showEntName"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请选择企业"
                        @select="handleSelect">
                        <template slot-scope="{ item }">
                            <div>{{item.entName}}</div>
                        </template>
                    </el-autocomplete>
                </el-form-item>
                <el-form-item class="fl" label="产品名称:" prop="epitaxyDeviceId" :rules="$validate({required:true})">
                    <el-select class="w320_input" @change="changeDevice" v-model="ruleForm.epitaxyDeviceId" placeholder="请选择">
                        <el-option
                        v-for="item in deviceList"
                        :key="item.epitaxyDeviceId"
                        :label="item.deviceName"
                        clearable
                        :value="item.epitaxyDeviceId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="fl" label="产品型号:" prop="epitaxyDeviceModelId" :rules="$validate({required:true})">
                    <el-select class="w320_input" v-model="ruleForm.epitaxyDeviceModelId" placeholder="请选择">
                        <el-option
                        v-for="item in modelList"
                        :key="item.modelIds"
                        :label="item.modelNames"
                        clearable
                        :value="item.modelIds">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="fl" label="销售数量:" prop="num" :rules="$validate({required:true,type:'number'})">
                    <el-input class="w320_input" type="age" v-model.number="ruleForm.num" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="fl" label="销售单价:" prop="price" :rules="$validate({required:true})">
                    <el-input class="w320_input" type="number" v-model="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item class="fl" label="销售折扣:" prop="discount" :rules="$validate({required:true,type:'discount'})">
                    <el-input class="w320_input" type="number" v-model="ruleForm.discount"></el-input>
                </el-form-item>
                <el-form-item class="fl" label="付款方式:" prop="payType" :rules="$validate({required:true})">
                    <el-select class="w320_input" v-model="ruleForm.payType" placeholder="请选择">
                        <el-option
                        v-for="item in payTypeList"
                        :key="item.typeId"
                        :label="item.typeName"
                        clearable
                        :value="item.typeId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="fl" label="缴费日期:" prop="payTime" :rules="$validate({required:true})">
                    <el-date-picker
                        value-format= 'timestamp'
                        class="w320_input"
                        v-model="ruleForm.payTime"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item class="fl" label="经办人:" prop="passPeople" :rules="$validate({required:true})">
                    <el-input class="w320_input" v-model="ruleForm.passPeople"></el-input>
                </el-form-item>
                <el-form-item class="fl" label="已收金额:" prop="payMonney" >
                    <el-input class="w320_input" :disabled="true" v-model="realPrice"></el-input>
                </el-form-item>
                <el-form-item class="fl" label="备注:" prop="remark">
                    <el-input class="w320_input" v-model="ruleForm.remark"></el-input>
                </el-form-item>
            </el-form>
        </modal>
        <modal
            :title="'审核外延设备销售信息'"
            :width="924"
            :alert="showAuditAlert"
            @alertConfirm="alertConfirmAudit"
            @alertCancel="alertCancelAudit">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">企业信息</td>
                    </tr>
                    <tr>
                        <td width="150" class="tar">销售区域：</td>
                        <td width="270" class="tal fontColor">{{info.areaNames}}</td>
                        <td width="150" class="tar">企业类型：</td>
                        <td class="tal fontColor">{{info.entTypeName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal fontColor">{{info.entName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">产品名称：</td>
                        <td class="tal fontColor">{{info.deviceName}}</td>
                        <td class="tar">产品型号：</td>
                        <td class="tal fontColor">{{info.deviceModelName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">销售数量：</td>
                        <td class="tal fontColor">{{info.num}}</td>
                        <td class="tar">销售单价：</td>
                        <td class="tal fontColor">{{info.price}}</td>
                    </tr>
                    <tr>
                        <td class="tar">销售折扣：</td>
                        <td class="tal fontColor">{{info.discount}}</td>
                        <td class="tar">付款方式：</td>
                        <td class="tal fontColor">{{info.payTypeName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">缴费日期：</td>
                        <td class="tal fontColor">{{info.payTime}}</td>
                        <td class="tar">经办人：</td>
                        <td class="tal fontColor">{{info.passPeople}}</td>
                    </tr>
                    <tr>
                        <td class="tar">已收金额：</td>
                        <td colspan="3" class="tal fontColor">{{info.payMonney}}</td>
                    </tr>
                    <tr>
                        <td class="tar">备注：</td>
                        <td colspan="3" class="tal fontColor">{{info.remark}}</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr>
                        <td class="tar fontColor"><span class="importantIcon">*</span>审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            <el-radio v-model="aduitRadio" label="1">审核通过</el-radio>
                            <el-radio v-model="aduitRadio" label="2">审核不通过</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="tar fontColor"><span class="importantIcon">*</span>原因：</td>
                        <td colspan="3" class="tal fontColor">
                            <input style="height:36px;" type="text" class="resonInput" placeholder="说点什么吧~" v-model="aduitText">
                        </td>
                    </tr>
                </table>
            </div>
        </modal>
        <modal
            :title="'查看外延设备销售信息'"
            :width="924"
            :alert="showDetailAlert"
            :showBtn="false"
            @alertConfirm="alertConfirmDetail"
            @alertCancel="alertCancelDetail">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">企业信息</td>
                    </tr>
                    <tr>
                        <td width="150" class="tar">销售区域：</td>
                        <td width="270" class="tal fontColor">{{info.areaNames}}</td>
                        <td width="150" class="tar">企业类型：</td>
                        <td class="tal fontColor">{{info.entTypeName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal fontColor">{{info.entName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">产品名称：</td>
                        <td class="tal fontColor">{{info.deviceName}}</td>
                        <td class="tar">产品型号：</td>
                        <td class="tal fontColor">{{info.deviceModelName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">销售数量：</td>
                        <td class="tal fontColor">{{info.num}}</td>
                        <td class="tar">销售单价：</td>
                        <td class="tal fontColor">{{info.price}}</td>
                    </tr>
                    <tr>
                        <td class="tar">销售折扣：</td>
                        <td class="tal fontColor">{{info.discount}}</td>
                        <td class="tar">付款方式：</td>
                        <td class="tal fontColor">{{info.payTypeName}}</td>
                    </tr>
                    <tr>
                        <td class="tar">缴费日期：</td>
                        <td class="tal fontColor">{{info.payTime}}</td>
                        <td class="tar">经办人：</td>
                        <td class="tal fontColor">{{info.passPeople}}</td>
                    </tr>
                    <tr>
                        <td class="tar">已收金额：</td>
                        <td colspan="3" class="tal fontColor">{{info.payMonney}}</td>
                    </tr>
                    <tr>
                        <td class="tar">备注：</td>
                        <td colspan="3" class="tal fontColor">{{info.remark}}</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr>
                        <td class="tar">审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            {{info.statusText}}
                        </td>
                    </tr>
                    <tr v-if="info.passCause">
                        <td class="tar">原因：</td>
                        <td colspan="3" class="tal fontColor">
                            {{info.passCause}}
                        </td>
                    </tr>
                    <tr v-if="info.passCause">
                        <td class="tar">审核人：</td>
                        <td class="tal fontColor">{{info.passUser}}</td>
                        <td class="tar">审核时间：</td>
                        <td class="tal fontColor">{{info.passTime}}</td>
                    </tr>
                </table>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'regulatorSell',
    data () {
        return {
            showEntName: '', // 搜索企业名称
            entList: [], // 搜索企业列表
            entTypeList: [], // 企业类型列表
            payTypeList: [], // 支付方式
            modelList: [], // 设备型号列表
            deviceList: [], // 设备列表
            reginList1: [], // 大区
            reginList2: [], // 省
            reginList3: [], // 城市
            regin1: '',
            regin2: '',
            regin3: '',
            cityId: '',
            cityList: [],
            areaId: '', // 大区Id
            regionId: '', // 城市ID
            entName: '',
            entType: '',
            areaList: [],
            state4: '',
            value6: [],
            aduitRadio: '1',
            aduitText: '',
            showDetailAlert: false,
            showAuditAlert: false,
            input: '',
            imageUrl: '',
            value: '',
            options: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            info: {}, // 查看详情
            ruleForm: {
                cityRegion: '',
                deviceName: '', // 添加角色名称
                discount: '', // 添加角色备注
                entId: '', // 企业id
                entName: '', // 企业名称
                entType: '', // 企业类型
                epitaxyDeviceId: '', // 设备产品Id
                epitaxyDeviceModelId: '', // 设备型号Id
                num: '', // 数量
                passPeople: '', // 经办人
                payMonney: '', // 已付金额
                payTime: '',
                payType: '',
                price: '',
                remark: '',
                sysAreaId: ''
            },
            tableData: []
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    computed: {
        realPrice () {
            if (this.ruleForm.discount && this.ruleForm.num && this.ruleForm.price) {
                return this.ruleForm.discount * this.ruleForm.num * this.ruleForm.price
            }
            return ''
        }
    },
    created () {
        this.getList()
        this.getAreaList()
        this.getReginList1()
        this.getDeviceList()
        this.getEntTypeList()
        this.getPayTypeList()
    },
    watch: {
        areaId (val) {
            this.regionId = ''
            if (!val) return
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        areaId2 (val) {

        }
    },
    methods: {
        getEntTypeList () {
            this.$get('list/entTypeList').then(res => {
                if (res.code === 0) {
                    this.entTypeList = res.data
                }
            })
        },
        getPayTypeList () {
            this.$get('list/typeList?type=1').then(res => {
                if (res.code === 0) {
                    this.payTypeList = res.data
                }
            })
        },
        // 切换设备
        changeDevice () {
            // console.log(this.ruleForm.epitaxyDeviceId)
            if (!this.ruleForm.epitaxyDeviceId) return
            let device = this.deviceList.find(e => {
                return this.ruleForm.epitaxyDeviceId === e.epitaxyDeviceId
            })
            console.log(device)
            let arr = device.modelIds.split(',')
            this.modelList = []
            arr.forEach((e, index) => {
                this.modelList.push({
                    modelNames: device.modelNames.split(',')[index],
                    modelIds: device.modelIds.split(',')[index]
                })
            })
        },
        // 获取设备列表
        getDeviceList () {
            this.$post(`device/list?size=${this.pageSize}&page=${this.pageNum}`, {})
                .then(res => {
                    if (res.code === 0) {
                        this.deviceList = res.data
                    }
                })
        },
        getReginList1 () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.reginList1 = res.data
                }
            })
        },
        // 获取省列表
        getReginList2 (id) {
            this.areaId = id
            this.$get('list/areaRegionProvinceList?areaId=' + id).then(res => {
                if (res.code === 0) {
                    this.reginList2 = res.data
                }
            })
        },
        // 获取城市列表
        getReginList3 (id) {
            this.$get('list/areaRegionCityList?areaId=' + this.areaId + '&provinceId=' + id).then(res => {
                if (res.code === 0) {
                    this.reginList3 = res.data
                }
            })
        },
        lookDetail (info) {
            this.$get('deviceSell/seeDeviceSell?epitaxyDeviceSellId=' + info.epitaxyDeviceSellId)
                .then(res => {
                    if (res.code === 0) {
                        this.info = res.data
                    }
                })
            this.showDetailAlert = true
        },
        aduitDetail (info) {
            this.$get('deviceSell/seeDeviceSell?epitaxyDeviceSellId=' + info.epitaxyDeviceSellId)
                .then(res => {
                    if (res.code === 0) {
                        this.info = res.data
                        this.aduitId = res.data.epitaxyDeviceSellId
                    }
                })
            this.showAuditAlert = true
        },
        eidtDetail (info) {
            console.log(info)
            this.eiditId = info.epitaxyDeviceSellId
            this.$get('deviceSell/deviceSellInfo?epitaxyDeviceSellId=' + info.epitaxyDeviceSellId)
                .then(res => {
                    if (res.code === 0) {
                        this.getReginList2(res.data.sysAreaId)
                        this.getReginList3(res.data.province)
                        this.showEntName = res.data.entName
                        this.regin2 = res.data.province
                        // setTimeout(() => {
                        //     this.regin2 = res.data.province
                        // }, 1000)
                        // console.log(this.regin2)
                        this.ruleForm = {
                            cityRegion: res.data.cityRegion + '',
                            deviceName: res.data.deviceName, // 添加角色名称
                            discount: res.data.discount, // 添加角色备注
                            entId: res.data.entId, // 企业id
                            entName: res.data.entName, // 企业名称
                            entType: res.data.entType, // 企业类型
                            epitaxyDeviceId: res.data.epitaxyDeviceId, // 设备产品Id
                            epitaxyDeviceModelId: res.data.epitaxyDeviceModelId, // 设备型号Id
                            num: res.data.num, // 数量
                            passPeople: res.data.passPeople, // 经办人
                            payMonney: res.data.payMonney, // 已付金额
                            payTime: res.data.payTime,
                            payType: res.data.payType,
                            province: res.data.province,
                            price: res.data.price,
                            remark: res.data.remark,
                            sysAreaId: res.data.sysAreaId
                        }
                        this.regin1 = res.data.sysAreaId
                        this.changeDevice()
                        // this.regin2 = res.data.regionProvinceId
                    }
                })
            this.showAlert = true
        },
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                }
            })
        },
        handleSelect (val) {
            // console.log(val)
            this.ruleForm.entId = val.entId
            this.ruleForm.entName = val.entName
            this.showEntName = val.entName
        },
        querySearchAsync (queryString, cb) {
            // console.log(val)
            this.$post('deviceSell/findEntInfo', {
                regionId: this.ruleForm.cityRegion,
                entName: queryString,
                entType: this.ruleForm.entType
            }).then(res => {
                this.entList = res.data || []
                if (!this.entList.length) {
                    this.$refs.focus_input.focus()
                }
                cb(this.entList)
            })
        },
        // 获取列表数据
        getList () {
            this.$post(`deviceSell/list?size=${this.pageSize}&page=${this.pageNum}`, {
                endTime: this.value6[1],
                startTime: this.value6[0],
                entName: this.entName,
                entType: this.entType,
                epitaxyDeviceId: '',
                regionId: this.regionId
            })
                .then(res => {
                    if (res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                })
        },
        alertConfirmDetail () {
            this.showDetailAlert = false
        },
        alertCancelDetail () {
            this.info = {}
            this.showEntName = ''
            this.showDetailAlert = false
        },
        alertConfirmAudit () {
            // this.showAuditAlert = false
            if (!this.aduitText) {
                this.$alert('请填写原因', '提示')
                return
            }
            this.$post('deviceSell/passDeviceSell', {
                epitaxyDeviceSellId: this.aduitId,
                passCause: this.aduitText,
                status: this.aduitRadio - 0
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getList()
                    this.alertCancelAudit()
                }
            })
        },
        alertCancelAudit () {
            this.aduitId = ''
            this.aduitText = ''
            this.aduitRadio = '1'
            this.showAuditAlert = false
        },
        // 删除型号
        delPart (index) {
            this.partList.splice(index, 1)
        },
        // 增加型号
        addPart () {
            this.partList.push({
                name: '',
                price: ''
            })
        },
        changeStatus () {},
        search () {},
        handleAvatarSuccess () {},
        beforeAvatarUpload () {},
        handleSizeChange () {},
        handleCurrentChange () {},
        // 确认新增
        alertConfirm () {
            this.$refs['addForm'].validate((valid) => {
                let obj = {
                    cityRegion: this.ruleForm.cityRegion,
                    deviceName: this.ruleForm.deviceName, // 添加角色名称
                    discount: this.ruleForm.discount, // 添加角色备注
                    entId: this.ruleForm.entId, // 企业id
                    entName: this.ruleForm.entName, // 企业名称
                    entType: this.ruleForm.entType, // 企业类型
                    epitaxyDeviceId: this.ruleForm.epitaxyDeviceId, // 设备产品Id
                    epitaxyDeviceModelId: this.ruleForm.epitaxyDeviceModelId, // 设备型号Id
                    num: this.ruleForm.num, // 数量
                    passPeople: this.ruleForm.passPeople, // 经办人
                    payMonney: this.realPrice, // 已付金额
                    payTime: this.ruleForm.payTime,
                    payType: this.ruleForm.payType,
                    province: this.regin2,
                    price: this.ruleForm.price,
                    remark: this.ruleForm.remark,
                    sysAreaId: this.regin1
                }
                if (valid) {
                    if (!this.eiditId) {
                        this.$post('deviceSell/addDeviceSell', obj).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.getList()
                                this.alertCancel()
                            }
                        })
                    } else {
                        obj.epitaxyDeviceSellId = this.eiditId
                        this.$post('deviceSell/editDeviceSell', obj).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.getList()
                                this.alertCancel()
                            }
                        })
                    }
                } else {
                    this.$alert('请填写正确的信息！')
                    return false
                }
            })
        },
        alertCancel () {
            this.ruleForm = {
                cityRegion: '',
                deviceName: '', // 添加角色名称
                discount: '', // 添加角色备注
                entId: '', // 企业id
                entName: '', // 企业名称
                entType: '', // 企业类型
                epitaxyDeviceId: '', // 设备产品Id
                epitaxyDeviceModelId: '', // 设备型号Id
                num: '', // 数量
                passPeople: '', // 经办人
                payMonney: '', // 已付金额
                payTime: '',
                payType: '',
                price: '',
                remark: '',
                sysAreaId: ''
            }
            this.showEntName = ''
            this.regin2 = ''
            this.regin1 = ''
            this.eiditId = ''
            this.showAlert = false
        }
    }
}
</script>

<style lang='less' scoped>
.regulatorSell {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .alertInner {
        padding: 0 40px;
        table {
            width: 100%;
            border: none;
            line-height: 44px;
            td {
                padding: 0 10px;
                box-sizing: border-box;
            }
            .blueTilte {
                background: rgb(242, 244, 246);
                font-weight: 600;
            }
            .resonInput {
                line-height: 36px;
                width: 600px;
                border: none;
                outline: none;
            }
            .importantIcon {
                color: red;
                margin-right: 4px;
            }
        }
    }
}
</style>
<style lang='less'>
.regulatorSell {
    .small_input {
        margin-right: 10px;
        .el-input__inner {
            width: 94px;
        }
    }
    .small_input:last-of-type {
        margin-right: 0;
    }
    .w120_input {
        width: 100px;
    }
    .w320_input {
        width: 300px!important;
    }
    .w760_input {
        width: 720px;
    }
    .breadcrumb label {
        // width: 70px;
        display: inline-block;
        text-align: right;
    }
    .fontColor {
        .el-radio__label {
            color: #252631;
        }
    }
    .el-form-item {
        height: 36px;
    }
}
</style>

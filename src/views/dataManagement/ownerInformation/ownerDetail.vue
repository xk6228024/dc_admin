<!-- 车主详情 -->
<template>
    <div class="ownerDetail detailPage">
        <div class="detail_header">
            <el-button type="primary" class="btn" v-if="!edit" @click="toEdit">编 辑</el-button>
            <el-button type="primary" class="btn" v-if="edit" @click="saveData">保 存</el-button>
            <el-button class="goBack btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content" v-loading="loading">
            <div class="detail_model" v-show="!edit">
                <h4>基本信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>车主名称：</label>
                        <span>{{owner.ownerName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>车主类型：</label>
                        <span>{{owner.ownerTypeName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>数据来源：</label>
                        <span>{{owner.ownerSourceName}}</span>
                    </div>
                    <div class="detail_item" v-if="owner.ownerType === 1">
                        <label>性别：</label>
                        <span>{{owner.ownerGender | genderFilter}}</span>
                    </div>
                    <div class="detail_item" v-if="owner.ownerType === 1">
                        <label>身份证号码：</label>
                        <span>{{owner.ownerIdcard}}</span>
                    </div>
                    <div class="detail_item" v-if="owner.ownerType === 1">
                        <label>出生日期：</label>
                        <span>{{owner.ownerBirthday | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model" v-if="!edit">
                <h4>联系方式</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>联系手机：</label>
                        <span>{{owner.ownerMobile}}</span>
                    </div>
                    <div class="detail_item">
                        <label>QQ号：</label>
                        <span>{{owner.ownerQq}}</span>
                    </div>
                    <div class="detail_item">
                        <label>微信号：</label>
                        <span>{{owner.ownerWechat}}</span>
                    </div>
                    <div class="detail_item">
                        <label>所在地市：</label>
                        <span v-if="!owner.ownerProvinceName && !owner.ownerCityName && !owner.ownerRegionName"></span>
                        <span v-else>{{owner.ownerProvinceName}}/{{owner.ownerCityName}}{{owner.ownerRegionName&&'/'}}{{owner.ownerRegionName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系地址：</label>
                        <span>{{owner.ownerAddress}}</span>
                    </div>
                    <div class="detail_item">
                        <label>邮政编码：</label>
                        <span>{{owner.ownerPostcode}}</span>
                    </div>
                </div>
            </div>
            <div class="edit_content" v-show="edit">
                <el-form :model="owner" ref="form" class="form">
                    <div class="detail_model">
                        <h4>基本信息</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>车主名称<span class="required">(必填)</span></label>
                                <el-form-item prop="ownerName" :rules="$validate({required:true})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="25"
                                        v-model="owner.ownerName"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>车主类型<span class="required">(必填)</span></label>
                                <el-form-item prop="ownerType" :rules="$validate({required:true})">
                                    <el-select
                                        class="edit_input"
                                        v-model="owner.ownerType">
                                        <el-option
                                        v-for="item in ownerTypeList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>数据来源</label>
                                <el-form-item prop="ownerSource">
                                    <el-select
                                        :disabled="true"
                                        class="edit_input"
                                        v-model="owner.ownerSource">
                                        <el-option
                                        v-for="item in dataSource"
                                        :key="item.dataSourceCode"
                                        :label="item.dataSourceName"
                                        :value="item.dataSourceCode">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item" v-if="owner.ownerType === 1">
                                <label>性别<span class="required">(必填)</span></label>
                                <el-form-item prop="ownerGender" :rules="$validate({required:true})">
                                    <el-select
                                        class="edit_input"
                                        v-model="owner.ownerGender"
                                        placeholder="请输入">
                                        <el-option
                                            v-for="item in ownerGenderList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item" v-if="owner.ownerType === 1">
                                <label>身份证号码</label>
                                <el-form-item prop="ownerIdcard" :rules="$validate({type: 'idcard'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="18"
                                        v-model="owner.ownerIdcard"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item" v-if="owner.ownerType === 1">
                                <label>出生日期</label>
                                <el-form-item prop="ownerBirthday">
                                    <el-date-picker
                                        class="edit_input"
                                        value-format="timestamp"
                                        v-model="owner.ownerBirthday"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                    <div class="detail_model">
                        <h4>联系方式</h4>
                        <div class="clearfix">
                            <div class="detail_item">
                                <label>联系手机</label>
                                <el-form-item prop="ownerMobile">
                                    <el-input
                                        :disabled="true"
                                        class="edit_input"
                                        maxlength="11"
                                        v-model="owner.ownerMobile"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>QQ号</label>
                                <el-form-item prop="ownerQq" :rules="$validate({type: 'qq'})">
                                    <el-input
                                        class="edit_input"
                                        maxlength="15"
                                        v-model.number="owner.ownerQq"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>微信号</label>
                                <el-form-item prop="ownerWechat">
                                    <el-input
                                        maxlength="20"
                                        class="edit_input"
                                        v-model="owner.ownerWechat"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>所在地市</label>
                                <el-form-item prop="addr">
                                    <el-cascader :props="props" :options="options"
                                    ref="region"
                                    v-model="owner.addr"
                                    class="edit_input"
                                    @change="handleChange">
                                    </el-cascader>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>联系地址</label>
                                <el-form-item prop="ownerAddress">
                                    <el-input
                                        maxlength="50"
                                        class="edit_input"
                                        v-model.trim="owner.ownerAddress"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="detail_item">
                                <label>邮政编码</label>
                                <el-form-item prop="ownerPostcode" :rules="$validate({type: 'num'})">
                                    <el-input
                                        maxlength="6"
                                        class="edit_input"
                                        v-model.number="owner.ownerPostcode"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                </el-form>
            </div>
            <div class="detail_model noBorder">
                <h4>所属车辆</h4>
                <el-table
                    border
                    :data="tableData"
                    class="tableBorder"
                    style="width: 100%;">
                    <el-table-column
                    prop="vehicleLicensePlate"
                    align="left"
                    label="车牌号码"
                    min-width="5%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleVin"
                    align="left"
                    min-width="8%"
                    label="车辆VIN码">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleBrand"
                    align="left"
                    min-width="8%"
                    label="品牌车系">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleUse"
                    align="left"
                    min-width="8%"
                    label="车辆性质">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleLicensePlateColor"
                    align="left"
                    min-width="10%"
                    label="车牌颜色">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
let cityList = []
let regionList = []
let provinceList = []
export default {
    name: 'ownerDetail',
    data () {
        return {
            edit: true,
            loading: false,
            loaded: false, // 已加载
            isEdit: false, // 已修改过内容
            options: [],
            dataSource: [],
            owner: {
                ownerAddress: '',
                ownerBirthday: '',
                ownerCity: '',
                ownerCityName: '',
                ownerId: '',
                ownerIdcard: '',
                ownerMobile: '',
                ownerName: '',
                ownerProvince: '',
                ownerProvinceName: '',
                ownerQq: '',
                ownerRegionName: '',
                ownerSource: '',
                ownerType: '',
                ownerWechat: ''
            },
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
            ownerTypeList: [
                {
                    value: 1,
                    label: '个人车主'
                },
                {
                    value: 2,
                    label: '企业车主'
                }
            ],
            ownerGenderList: [
                {
                    value: 0,
                    label: '女'
                },
                {
                    value: 1,
                    label: '男'
                }
            ],
            tableData: []
        }
    },
    components: {
    },
    watch: {
        owner: {
            handler () {
                if (this.loaded) {
                    this.isEdit = true
                }
            },
            deep: true
        }
    },
    created () {
        this.edit = false
        this.getOwnerDetail()
        this.getDataSource()
    },
    methods: {
        // 保存车主数据
        saveData () {
            // if (!this.$checkAuth('vehicleowner:edit')) {
            //     this.$alert('您没有该权限')
            //     return
            // }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let obj = this.owner
                    obj.ownerId = this.$route.query.id
                    this.loading = true
                    this.$post('vehicleowner/edit', obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功'
                                })
                                this.getOwnerDetail()
                                this.edit = false
                            } else {
                                this.$alert(res.msg)
                            }
                            this.$store.commit('setRefreshList', 'ownerInformation')
                            this.loading = false
                        })
                } else {
                    this.$alert('保存失败，请输入必填字段', '提示')
                }
            })
        },
        // 获取车主数据
        getOwnerDetail () {
            // if (!this.$checkAuth('vehicleowner:view')) {
            //     this.$alert('您没有该权限')
            //     return
            // }
            // 权限校验**********************************************************
            if (!this.$checkAuth('vehicleowner:view')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.loading = true
            this.$post(`vehicleowner/view/${this.$route.query.id}`)
                .then(res => {
                    if (res.code === 0) {
                        const { ownerProvince, ownerCity, ownerRegion } = res.owner
                        if (ownerProvince && ownerCity && ownerRegion) {
                            res.owner.addr = [ownerProvince, ownerCity, ownerRegion]
                        } else {
                            res.owner.addr = []
                        }
                        this.owner = res.owner
                        this.tableData = res.vehicles
                        this.showAddr(res)
                        setTimeout(() => {
                            this.$refs.form.clearValidate()
                        })
                    }
                    this.loading = false
                }).catch(() => {
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
                        if (item.regionId === res.owner.ownerProvince) {
                            provinceIndex = index
                        }
                    })
                    let options = regionProvinceList.data
                    provinceList = regionProvinceList.data
                    if (!res.owner.ownerProvince || !res.owner.ownerCity || !res.owner.ownerRegion) {
                        this.loading = false
                        this.loaded = true
                        this.options = options
                        return
                    }
                    this.$get('list/regioncityList?provinceRegionId=' + res.owner.ownerProvince)
                        .then(regioncityList => {
                            let cityIndex = 0
                            regioncityList.data.forEach((item, index) => {
                                item.leaf = false
                                item.children = []
                                if (item.regionId === res.owner.ownerCity) {
                                    cityIndex = index
                                }
                            })
                            options[provinceIndex].children = regioncityList.data
                            cityList = regioncityList.data
                            this.$get('list/regionList?cityId=' + res.owner.ownerCity)
                                .then(regionListData => {
                                    let regionIndex = 0
                                    regionListData.data.forEach((item, index) => {
                                        item.leaf = true
                                        if (item.regionId === res.owner.ownerRegion) {
                                            regionIndex = index
                                        }
                                    })
                                    options[provinceIndex].children[cityIndex].children = regionListData.data
                                    regionList = regionListData.data
                                    this.options = options
                                    this.loading = false
                                    this.$set(this.owner, 'ownerProvinceName', options[provinceIndex].regionName)
                                    this.$set(this.owner, 'ownerCityName', options[provinceIndex].children[cityIndex].regionName)
                                    this.$set(this.owner, 'ownerRegionName', options[provinceIndex].children[cityIndex].children[regionIndex].regionName)
                                    this.loaded = true
                                })
                        })
                })
        },
        // 选取地市列表
        handleChange (list) {
            this.owner.ownerProvince = list[0]
            this.owner.ownerCity = list[1]
            this.owner.ownerRegion = list[2]
            console.log(cityList)
            this.owner.ownerProvinceName = provinceList.filter(item => { return item.regionId === list[0] })[0].regionName
            this.owner.ownerCityName = cityList.filter(item => { return item.regionId === list[1] })[0].regionName
            this.owner.ownerRegionName = regionList.filter(item => { return item.regionId === list[2] })[0].regionName
        },
        // 获取数据来源
        getDataSource () {
            this.$get('datasource/view')
                .then(res => {
                    this.dataSource = res.data.filter(m => {
                        return m.dataSourceName
                    })
                    console.log(this.dataSource)
                })
        },
        // 进入编辑
        toEdit () {
            // 权限校验**********************************************************
            // if (!this.$checkAuth('datamanage:stastic:owner:edit')) {
            //     this.$msg({
            //         type: 'error',
            //         message: '你没有该项权限'
            //     })
            //     return
            // }
            if (!this.$checkAuth('datamanage:stastic:owner:edit')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.edit = true
            this.$refs.form.clearValidate()
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
                        nextPath: '/ownerInformation'
                    })
                }).catch(() => {
                })
            } else {
                this.edit = false
                this.$store.dispatch('closePage', {
                    nextPath: '/ownerInformation',
                    refresh: 'ownerInformation'
                })
            }
        }
    },
    filters: {
        genderFilter (value) {
            if (value === 0) {
                return '女'
            } else if (value === 1) {
                return '男'
            } else {
                return ''
            }
        }
    }
}
</script>

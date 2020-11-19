<!-- 编辑代理商 -->
<template>
    <div class="inspectionCityOpenDetail">
        <h3 class="detail-title">开通城市信息<el-button class="fr back" @click="goBack">返回</el-button></h3>
        <el-form ref="form" class="form" :inline="true" :model="form" label-width="150px">
            <div>
                <el-form-item label="开通城市：" label-width="150px" class="small-input" required="required" prop="provinceId" :rules="$validate({required:true})">
                    <el-select v-model="form.provinceId" style="width:170px;" placeholder="省份" @change="provinceChange">
                        <el-option
                        v-for="item in provinceList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="cityId" class="small-input" :rules="valite?$validate({required:true}):$validate({max:999})">
                    <el-select v-model="form.cityId" style="width:170px;" placeholder="城市">
                        <el-option
                        v-for="item in cityList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="系统访问地址：" label-width="150px" prop="cityDomain" :rules="$validate({required:true,max:30})">
                    <el-input type="text" class="w350" v-model="form.cityDomain" :disabled="$route.query.id?true:false">
                        <template slot="append">.qxjgxt.com</template>
                    </el-input>
                </el-form-item>
                <br>
                <el-form-item label="所属区域：" label-width="150px" prop="marketAreaId" :rules="$validate({required:true})">
                    <el-select v-model="form.marketAreaId" style="width:350px;" placeholder="城市">
                        <el-option
                        v-for="item in areaList"
                        :key="item.areaId"
                        :label="item.areaName"
                        :value="item.areaId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="服务支持人员：" label-width="150px" prop="cityServicePersonName" :rules="$validate({required:true,max:15})">
                    <el-input type="text" class="name" v-model="form.cityServicePersonName"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="服务支持电话：" label-width="150px" prop="cityServicePersonTel" :rules="$validate({required:true,max:15,type:'EN'})">
                    <el-input type="text" class="name" v-model="form.cityServicePersonTel"></el-input>
                </el-form-item>
                <el-form-item label="服务投诉电话：" label-width="150px" prop="cityServiceComplaintTel" :rules="$validate({required:true,max:15,type:'EN'})">
                    <el-input type="text" class="name" v-model="form.cityServiceComplaintTel"></el-input>
                </el-form-item>
            </div>
            <div class="table_box" style="margin:0 40px;border-top:1px dashed #E8ECEF">
                <h5 style="margin:20px 0;">作业图片数据项配置</h5>
                <table class="myTable">
                    <tr>
                        <td width="480">
                            <label class="label" for="">作业现场图片:</label>
                            <el-radio v-model="form.inspectPicStation" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicStation" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicStation" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">送检人身份证:</label>
                            <el-radio v-model="form.inspectPicIdcard" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicIdcard" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicIdcard" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">综合性能检测报告单:</label>
                            <el-radio v-model="form.inspectPicAllInspection" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicAllInspection" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicAllInspection" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">人工检验记录单:</label>
                            <el-radio v-model="form.inspectPicManual" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicManual" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicManual" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">性能检验记录单:</label>
                            <el-radio v-model="form.inspectPicPerformance" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicPerformance" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicPerformance" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">安检合格标识:</label>
                            <el-radio v-model="form.inspectPicSafeMark" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicSafeMark" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicSafeMark" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">环保检验记录单第一页:</label>
                            <el-radio v-model="form.inspectPicEnvironmentalInspectl" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicEnvironmentalInspectl" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicEnvironmentalInspectl" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">环保检验记录单第二页:</label>
                            <el-radio v-model="form.inspectPicEnvironmentalInspect2" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicEnvironmentalInspect2" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicEnvironmentalInspect2" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">道路运输证:</label>
                            <el-radio v-model="form.inspectPicRoadTransportCert" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicRoadTransportCert" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicRoadTransportCert" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">道路运输达标核查记录表:</label>
                            <el-radio v-model="form.inspectPicRoadTransportCertStandard" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicRoadTransportCertStandard" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicRoadTransportCertStandard" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">安检报告单:</label>
                            <el-radio v-model="form.inspectPicSafeCheck" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicSafeCheck" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicSafeCheck" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">安检人工检验单:</label>
                            <el-radio v-model="form.inspectPicSafePerson" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicSafePerson" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicSafePerson" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td width="480">
                            <label class="label" for="">安检仪器报告单:</label>
                            <el-radio v-model="form.inspectPicNacktscanner" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicNacktscanner" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicNacktscanner" :label="-1">隐藏</el-radio>
                        </td>
                        <td width="480">
                            <label class="label" for="">营运证:</label>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="-1">隐藏</el-radio>
                        </td>
                        <!-- <td width="480">
                            <label class="label" for="">环检检测报告:</label>
                            <el-radio v-model="form.inspectPicStation" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicStation" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicStation" :label="-1">隐藏</el-radio>
                        </td> -->
                    </tr>
                    <tr>
                        <!-- <td width="480">
                            <label class="label" for="">营运证:</label>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicCertificateNo" :label="-1">隐藏</el-radio>
                        </td> -->
                        <td width="480">
                            <label class="label" for="">车辆行驶证:</label>
                            <el-radio v-model="form.inspectPicDrivinglicense" :label="0">非必填</el-radio>
                            <el-radio v-model="form.inspectPicDrivinglicense" :label="1">必填</el-radio>
                            <el-radio v-model="form.inspectPicDrivinglicense" :label="-1">隐藏</el-radio>
                        </td>
                    </tr>
                </table>
            </div>
        </el-form>
        <div class="btn" style="padding-left:40px;">
            <el-button @click="save" type="primary" :disabled="!$checkAuth('vtisSysCity:edit')">保存</el-button>
            <!-- <el-button @click="returnStep">上一步</el-button> -->
        </div>
    </div>
</template>

<script>
// import { CodeToText } from 'element-china-area-data'
export default {
    name: 'inspectionCityOpenDetail',
    data () {
        return {
            areaList: [], // 大区列表
            radio: '1',
            uploadUrl: window.uploadURL,
            dateRegion: [],
            valite: true,
            form: {
                provinceId: '',
                cityId: '',
                cityDomain: '',
                marketAreaId: '',
                cityServicePersonName: '',
                cityServicePersonTel: '',
                cityServiceComplaintTel: '',
                inspectPicStation: 0,
                inspectPicIdcard: 0,
                inspectPicDrivinglicense: 0,
                inspectPicCertificateNo: 0,
                inspectPicAllInspection: 0,
                inspectPicSafePerson: 0,
                inspectPicSafeMark: 0,
                inspectPicNacktscanner: 0,
                inspectPicManual: 0,
                inspectPicPerformance: 0,
                inspectPicSafeCheck: 0,
                inspectPicRoadTransportCert: 0,
                inspectPicRoadTransportCertStandard: 0,
                inspectPicEnvironmentalInspectl: 0,
                inspectPicEnvironmentalInspect2: 0
            },
            provinceList: [],
            cityList: [],
            regionList: []
        }
    },
    components: {
    },
    watch: {
    },
    created () {
        // this.$refs['form'].resetFields()
        this.getProvinceList()
        this.$get('comm/area').then(res => {
            this.areaList = res.data
        })
        if (this.$route.query.id) {
            this.$post('vtis/syscity/view', {
                data: {
                    cityDomain: this.$route.query.id
                }
            }).then(res => {
                this.$refs['form'].resetFields()
                if (res.data.provinceId) {
                    this.getCityList(res.data.provinceId)
                }
                this.form = res.data
            })
        }
    },
    methods: {
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
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let url, msg
                    if (this.$route.query.id) {
                        this.form.cityDomain = this.$route.query.id
                        url = 'vtis/syscity/edit'
                        msg = '编辑成功！'
                    } else {
                        url = 'vtis/syscity/add'
                        msg = '添加成功！'
                    }
                    this.$post(url, { data: this.form })
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                this.$store.dispatch('closePage', {
                                    nextPath: '/inspectionCityOpen',
                                    refresh: 'inspectionCityOpen'
                                })
                            }
                        })
                }
            })
        },
        goBack () {
            // this.$router.push('/inspectionCityOpen')
            this.$store.dispatch('closePage', {
                nextPath: '/inspectionCityOpen'
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
.inspectionCityOpenDetail {
    overflow: auto;
    h5 {
        color: #252631;
        font-size: 14px;
    }
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 36px;
        border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#666666;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
    }
    .form {
        margin-top: 30px;
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
            line-height: 44px;
            .label {
                display: inline-block;
                width: 160px;
                text-align: right;
                padding-right: 20px;
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
            width: 350px;
        }
    }
    .w350 {
        width: 350px;
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
</style>

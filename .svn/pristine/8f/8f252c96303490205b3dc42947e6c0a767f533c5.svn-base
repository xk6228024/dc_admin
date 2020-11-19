<!-- 编辑代理商 -->
<template>
    <div class="cityOpenDetail">
        <h3 class="detail-title">{{ $route.query.id ? '编辑城市信息' : '开通城市信息' }}
            <el-button class="fr back" type="primary" @click="save">保存</el-button>
            <el-button class="fr back" @click="closePage">关闭</el-button>
        </h3>
        <el-form ref="form" class="form" :inline="true" :model="form">
            <div>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="开通城市" label-position="top" prop="region" :rules="$validate({required:true})" >
                            <el-cascader
                            placeholder="请选择"
                            v-model="form.region"
                            clearable
                            :options="allCityList"
                            filterable
                            :disabled='$route.query.id?true:false'
                            >
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="系统访问域名" label-position="top" prop="cityConfigVtamsDomain" :rules="$validate({required:true})">
                            <!-- <div></div> -->
                            <el-input type="text" v-model="form.cityConfigVtamsDomain">
                                <!-- <template slot="append">.qxjgxt.com</template> -->
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="服务支持人员" label-position="top" prop="cityConfigVtamsServicerName" :rules="$validate({required:true})">
                            <el-input maxlength="20" type="text" v-model="form.cityConfigVtamsServicerName" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="服务支持电话" label-position="top" prop="cityConfigVtamsServicerTel" :rules="$validate({required:true, type:'tel'})">
                            <el-input type="number" v-model="form.cityConfigVtamsServicerTel" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="服务投诉电话" label-position="top" prop="cityConfigVtamsServicerComplaintTel" :rules="$validate({required:true, type:'tel'})">
                            <el-input type="number" v-model="form.cityConfigVtamsServicerComplaintTel" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="是否开通等级评定检测超期锁定" label-position="top" prop="cityConfigDetectLock" :rules="$validate({required:true})">
                            <el-select v-model="form.cityConfigDetectLock" style="width: 100%;">
                                <el-option
                                v-for="item in lockType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="扣费方式" label-position="top" prop="cityConfigPayMethod" :rules="$validate({required:true})">
                            <el-select v-model="form.cityConfigPayMethod" style="width: 100%;" @change='handlePayChanged'>
                                <el-option
                                v-for="item in kfType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="归档方式" label-position="top" prop="cityConfigFileMethod" :rules="$validate({required:true})">
                            <el-select v-model="form.cityConfigFileMethod" style="width: 100%;" :disabled="!form.cityConfigPayMethod">
                                <el-option
                                v-for="item in gdType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="QQ群号" label-position="top" prop="cityConfigQqGroup" :rules="$validate({required:true})">
                            <el-input type="number" v-model="form.cityConfigQqGroup"  />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <div class="line"></div>
                    </el-col>
                    <div v-if="!form.cityConfigPayMethod">
                        <el-col :span="24">
                            <h3>设置归集服务器</h3>
                        </el-col>
                        <el-col :span="24">
                            <h4 class="s-title">二级维护作业信息归集</h4>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="总费用" label-position="top" prop="cityAgreementFix2TotalFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2TotalFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="运输企业分摊费用" label-position="top" prop="cityAgreementFix2TransportFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2TransportFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="维修企业分摊费用" label-position="top" prop="cityAgreementFix2FixFee" :rules="$validate({required:true, type:'price'})" >
                                <el-input type="text" v-model="form.cityAgreementFix2FixFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <div class="line"></div>
                            <h4 class="s-title">二级维护检验信息归集</h4>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="总费用" label-position="top" prop="cityAgreementFix2TestTotalFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2TestTotalFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="运输企业分摊费用" label-position="top" prop="cityAgreementFix2TestTransportFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2TestTransportFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="维修/检测企业分摊费用" label-position="top" prop="cityAgreementFix2TestFixFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2TestFixFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <div class="line"></div>
                            <h4 class="s-title">等级评定信息归集</h4>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="总费用" label-position="top" prop="cityAgreementFix2GradeTotalFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2GradeTotalFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="运输企业分摊费用" label-position="top" prop="cityAgreementFix2GradeTransportFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2GradeTransportFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="检测企业分摊费用" label-position="top" prop="cityAgreementFix2GradeFixFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2GradeFixFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <div class="line"></div>
                            <h4 class="s-title">异地维护/检测记录信息归集</h4>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="总费用" label-position="top" prop="cityAgreementFix2OthercityTotalFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2OthercityTotalFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="运输企业分摊费用" label-position="top" prop="cityAgreementFix2OthercityTransportFee" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityAgreementFix2OthercityTransportFee"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </div>
                    <div v-else>
                        <el-col :span="24">
                            <h4 class="s-title">会员服务费信息</h4>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="会员服务费" label-position="top" prop="cityConfigVehicleYearPrice" :rules="$validate({required:true, type:'price'})">
                                <el-input type="text" v-model="form.cityConfigVehicleYearPrice"  >
                                    <template slot="append">元</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </div>
                </el-row>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'cityOpenDetail',
    data () {
        return {
            propsOption: {
                label: 'regionName',
                children: 'childList',
                value: 'regionCode'
            },
            allCityList: [], // 城市
            lockType: [
                {
                    label: '是',
                    value: 1
                },
                {
                    label: '否',
                    value: 0
                }
            ],
            kfType: [
                {
                    label: '按条扣费',
                    value: 0
                },
                {
                    label: '年费',
                    value: 1
                }
            ],
            gdType: [
                {
                    label: '手动归档',
                    value: 0
                },
                {
                    label: '自动归档',
                    value: 1
                }
            ],
            form: {
                region: '',
                cityConfigVtamsDomain: '',
                cityConfigVtamsServicerName: '',
                cityConfigVtamsServicerTel: '',
                cityConfigVtamsServicerComplaintTel: '',
                cityConfigDetectLock: 0,
                cityConfigPayMethod: 0,
                cityConfigFileMethod: 0,
                cityConfigQqGroup: '',
                cityAgreementFix2TotalFee: 12,
                cityAgreementFix2TransportFee: 6,
                cityAgreementFix2FixFee: 6,
                cityAgreementFix2TestTotalFee: 12,
                cityAgreementFix2TestTransportFee: 6,
                cityAgreementFix2TestFixFee: 6,
                cityAgreementFix2GradeTotalFee: 12,
                cityAgreementFix2GradeTransportFee: 6,
                cityAgreementFix2GradeFixFee: 6,
                cityAgreementFix2OthercityTotalFee: 6,
                cityAgreementFix2OthercityTransportFee: 6,
                cityConfigVehicleYearPrice: 200
            }
        }
    },
    created () {
        this.getAllCity()
    },
    mounted () {
        if (this.$route.query.id) {
            this.getDetail()
        }
    },
    methods: {
        getAllCity () {
            this.$get('comm/citys/areas/tree').then(res => {
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
                    this.allCityList = res.data
                }
            })
        },
        getDetail () {
            this.$post(`/cityConfig/vtams/view/${this.$route.query.id}`, {
            }).then(res => {
                if (res.code === 0) {
                    res.data.region = [res.data.cityConfigVtamsMarketArea, res.data.cityConfigVtamsProvince, res.data.cityConfigVtamsCity]
                    this.form = res.data
                    this.$refs['form'].resetFields()
                }
            })
        },
        save () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let url; let msg = ''
                    if (this.$route.query.id) {
                        url = `/cityConfig/vtams/edit/${this.$route.query.id}`
                        msg = '编辑成功！'
                    } else {
                        url = '/cityConfig/vtams/add'
                        msg = '添加成功！'
                    }
                    this.form.cityConfigVtamsMarketArea = (this.form.region && this.form.region[0]) || ''
                    this.form.cityConfigVtamsProvince = (this.form.region && this.form.region[1]) || ''
                    this.form.cityConfigVtamsCity = (this.form.region && this.form.region[2]) || ''
                    // if (this.form.cityConfigPayMethod) {
                    //     delete this.form.cityAgreementFix2TotalFee
                    //     delete this.form.cityAgreementFix2TransportFee
                    //     delete this.form.cityAgreementFix2FixFee
                    //     delete this.form.cityAgreementFix2TestTotalFee
                    //     delete this.form.cityAgreementFix2TestTransportFee
                    //     delete this.form.cityAgreementFix2TestFixFee
                    //     delete this.form.cityAgreementFix2GradeTotalFee
                    //     delete this.form.cityAgreementFix2GradeTransportFee
                    //     delete this.form.cityAgreementFix2GradeFixFee
                    //     delete this.form.cityAgreementFix2OthercityTotalFee
                    //     delete this.form.cityAgreementFix2OthercityTransportFee
                    // } else {
                    //     delete this.form.cityConfigVehicleYearPrice
                    // }
                    this.$post(url, { ...this.form })
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                // this.$router.push('/vtamsCityConfig')
                                this.$store.dispatch('closePage', {
                                    nextPath: '/vtamsCityConfig',
                                    refresh: 'vtamsCityConfig'
                                })
                            }
                        })
                }
            })
        },
        closePage () {
            this.$store.dispatch('closePage', {
                nextPath: '/vtamsCityConfig',
                refresh: 'vtamsCityConfig'
            })
        },
        handlePayChanged (val) {
            console.log(val)
            this.form.cityConfigFileMethod = val
            if (!val) {
                this.form.cityAgreementFix2TotalFee = 12
                this.form.cityAgreementFix2TransportFee = 6
                this.form.cityAgreementFix2FixFee = 6
                this.form.cityAgreementFix2TestTotalFee = 12
                this.form.cityAgreementFix2TestTransportFee = 6
                this.form.cityAgreementFix2TestFixFee = 6
                this.form.cityAgreementFix2GradeTotalFee = 12
                this.form.cityAgreementFix2GradeTransportFee = 6
                this.form.cityAgreementFix2GradeFixFee = 6
                this.form.cityAgreementFix2OthercityTotalFee = 6
                this.form.cityAgreementFix2OthercityTransportFee = 6
            }
        }
    }
}
</script>

<style lang='less' scoped>
.cityOpenDetail {
    h5 {
        color: #252631;
        font-size: 14px;
    }
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 30px;
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
        width: 100%;
        box-sizing: border-box;
        padding: 30px;
        color: #666;
        .line {
            width: 100%;
            height: 1px;
            background: #E8E8E8;
            margin: 10px 0;
        }
        .bot {
            border: 1px solid #E8E8E8;
        }
        .s-title {
            margin-top: 10px;
        }
    }
}
</style>

<style lang="less">
.cityOpenDetail {
    .el-form-item {
        width: 80%;
        padding-bottom: 20px;
        .el-form-item__content {
            width: 100%;
        }
        .el-row {
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }
        .el-input__inner {
            width: 100%;
        }
        .el-input-group--append{
            margin-top: 2px;
            width: 100%;
        }
        .el-cascader {
            line-height: 36px;
            width: 100%;
        }
    }
}
</style>

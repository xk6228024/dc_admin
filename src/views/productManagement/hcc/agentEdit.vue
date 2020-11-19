<!-- 编辑代理商 -->
<template>
    <div class="agentEdit" id="agentEdit">
        <h3 class="detail-title">编辑代理商信息<el-button class="fr back" @click="goBack">返回</el-button></h3>
        <el-form ref="form" class="form" :inline="true" :model="form" label-width="150px">
            <h5 class="item-title">基本信息</h5>
            <div>
                <el-form-item label="代理商账号：" prop="agentAccount" :rules="$validate({required:true,max:15,type:'EN'})">
                    <el-input type="text" class="name" v-model="form.agentAccount"></el-input>
                </el-form-item>
                <el-form-item label="账号密码：" prop="agentPassword" :rules="$validate({required:true,max:6,type:'EN'})">
                    <el-input type="text" class="name" v-model="form.agentPassword"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="联系人：" prop="agentLinkName" :rules="$validate({required:true,max:12})">
                    <el-input type="text" class="name" v-model="form.agentLinkName"></el-input>
                </el-form-item>
                <el-form-item label="手机号码：" prop="agentLinkMobile" :rules="$validate({required:true,type:'phone'})">
                    <el-input type="text" class="name" v-model="form.agentLinkMobile"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="联系电话：" prop="agentLinkPhone" :rules="$validate({required:true,type:'tel'})">
                    <el-input type="tel" class="name" v-model="form.agentLinkPhone"></el-input>
                </el-form-item>
                <el-form-item label="客户单位：" prop="agentUnit" :rules="$validate({required:true,max:50})">
                    <el-input type="text" class="name" v-model="form.agentUnit"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="所属城市：" class="small-input" required="required" prop="agentProvince" :rules="$validate({required:true})">
                    <el-select v-model="form.agentProvince" placeholder="省份" @change="provinceChange">
                        <el-option
                        v-for="item in provinceList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="agentCity" class="small-input" :rules="valite?$validate({required:true}):$validate({max:999})">
                    <el-select v-model="form.agentCity" placeholder="城市" @change="cityChange">
                        <el-option
                        v-for="item in cityList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="agentRegion" class="small-input" v-if="valite" :rules="valite?$validate({required:true}):$validate({max:999})">
                    <el-select v-model="form.agentRegion" placeholder="区域">
                        <el-option
                        v-for="item in regionList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <div style="display:inline-block;height:36px;width:110px;margin-right:10px;" v-if="!valite"></div>
                <el-form-item label="详细地址：" prop="agentAddress" :rules="$validate({max:50})">
                    <el-input type="text" class="name" v-model="form.agentAddress"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="代理保证金：" prop="agentGuaranteedMoney" :rules="$validate({type:'price'})">
                    <el-input type="number" class="name" v-model="form.agentGuaranteedMoney"></el-input>
                </el-form-item>
                <el-form-item label="开户银行：" prop="agentBankName" :rules="$validate({max:12})">
                    <el-input type="text" class="name" v-model="form.agentBankName"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="银行账户：" prop="agentBankAccount" :rules="$validate({max:32})">
                    <el-input type="number" class="name" v-model="form.agentBankAccount"></el-input>
                </el-form-item>
            </div>
            <h5 class="item-title">开票信息</h5>
            <div>
                <el-form-item label="企业全称：" prop="entAgentName" :rules="$validate({max:60})">
                    <el-input type="text" class="name" v-model="form.entAgentName"></el-input>
                </el-form-item>
                <el-form-item label="社会信用代码：" prop="entAgentCreditNumber" :rules="$validate({max:18,type:'EN'})">
                    <el-input type="text" class="name" v-model="form.entAgentCreditNumber"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="联系电话：" prop="entAgentLinkMobile" :rules="$validate({type:'tel'})">
                    <el-input type="text" class="name" v-model="form.entAgentLinkMobile"></el-input>
                </el-form-item>
                <el-form-item label="手机号码：" prop="entAgentLinkPhone" :rules="$validate({type:'phone'})">
                    <el-input type="text" class="name" v-model="form.entAgentLinkPhone"></el-input>
                </el-form-item>
            </div>
            <div>
                <el-form-item label="所属城市：" prop="entAgentCity" :rules="$validate({max:50})">
                    <el-input type="text" class="name" v-model="form.entAgentCity"></el-input>
                </el-form-item>
                <el-form-item label="接收发票邮箱：" prop="entAgentEmail" :rules="$validate({max:30,type:'email'})">
                    <el-input type="text" class="name" v-model="form.entAgentEmail"></el-input>
                </el-form-item>
            </div>
            <div>
                <!-- <el-form-item label="所属城市：">
                    <el-input type="text" class="name" v-model="form.entAgentCity"></el-input>
                </el-form-item> -->
                <el-form-item label="详细地址：" prop="entAgentAddress" :rules="$validate({max:50})">
                    <el-input type="text" class="name" v-model="form.entAgentAddress"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <div class="btn">
            <el-button @click="save" type="primary">保存</el-button>
            <el-button @click="goBack">取消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'agentEdit',
    data () {
        return {
            valite: true,
            form: {
                agentAccount: '',
                agentPassword: '',
                agentLinkName: '',
                agentLinkMobile: '',
                agentLinkPhone: '',
                agentUnit: '',
                agentProvince: '',
                agentCity: '',
                agentRegion: '',
                agentAddress: '',
                agentGuaranteedMoney: '',
                agentBankName: '',
                agentBankAccount: '',
                entAgentName: '',
                entAgentCreditNumber: '',
                entAgentCity: '',
                entAgentLinkMobile: '',
                entAgentLinkPhone: '',
                entAgentEmail: '',
                entAgentAddress: ''
            },
            provinceList: [],
            cityList: [],
            regionList: []
        }
    },
    components: {
    },
    watch: {
        'form.agentProvince' (val) {
            if (val === '710000' || val === '810000' || val === '820000') {
                console.log(11)
                this.valite = false
            } else {
                this.valite = true
            }
        }
        // 'form.agentProvince' (val) {
        //     if (val) {
        //         this.getCityList(val)
        //         this.form.agentCity = ''
        //         this.form.agentRegion = ''
        //     } else {
        //         this.cityList = []
        //         this.form.agentCity = ''
        //         this.form.agentRegion = ''
        //     }
        // },
        // 'form.agentCity' (val) {
        //     if (val) {
        //         this.getRegionList(val)
        //         this.form.agentRegion = ''
        //     } else {
        //         this.regionList = []
        //         this.form.agentRegion = ''
        //     }
        // }
    },
    created () {
        this.getProvinceList()
        if (this.$route.query.id) {
            this.$post('agent/view', {
                agentId: this.$route.query.id
            }).then(res => {
                if (res.code === 0) {
                    this.form = res.data
                    this.$get('list/regioncityList?provinceRegionId=' + this.form.agentProvince).then(res => {
                        if (res.code === 0) {
                            this.cityList = res.data
                        }
                    })
                    this.$get('list/regionList?cityId=' + this.form.agentCity).then(res => {
                        if (res.code === 0) {
                            this.regionList = res.data
                            if (this.regionList.length === 0) {
                                this.valite = false
                                setTimeout(() => {
                                    this.$refs.form.validateField(['agentRegion'])
                                }, 200)
                            } else {
                                this.valite = true
                            }
                        }
                    })
                }
            })
        }
    },
    methods: {
        provinceChange () {
            let val = this.form.agentProvince
            if (val) {
                this.getCityList(val)
                this.form.agentCity = ''
                this.regionList = []
                this.form.agentRegion = ''
            } else {
                this.cityList = []
                this.form.agentCity = ''
                this.form.agentRegion = ''
            }
        },
        cityChange () {
            let val = this.form.agentCity
            if (val) {
                this.getRegionList(val)
                this.form.agentRegion = ''
            } else {
                this.cityList = []
                this.form.agentRegion = ''
            }
        },
        save () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let url, msg
                    if (this.$route.query.id) {
                        this.form.agentId = this.$route.query.id
                        url = 'agent/edit'
                        msg = '编辑成功！'
                    } else {
                        url = 'agent/add'
                        msg = '添加成功！'
                    }
                    this.$post(url, this.form)
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                this.$router.push('/agentQuery')
                            }
                            this.alertCancel()
                        })
                } else {
                    this.$alert('请输入完整信息！', '提示')
                    return false
                }
            })
        },
        goBack () {
            this.$router.push('/agentQuery')
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
        },
        // 获取区域列表
        getRegionList (id) {
            this.$get('list/regionList?cityId=' + id).then(res => {
                if (res.code === 0) {
                    this.regionList = res.data
                    console.log(this.regionList)
                    if (this.regionList.length === 0) {
                        this.valite = false
                        setTimeout(() => {
                            this.$refs.form.validateField(['agentRegion'])
                        }, 200)
                    } else {
                        this.valite = true
                    }
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.agentEdit {
    overflow: auto;
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
    }
    .btn {
        margin: 0 36px;
        padding: 6px 0 20px 116px;
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
#agentEdit {
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
}
</style>

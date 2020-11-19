<!-- 产品配置 -->
<template>
    <div class="productConfig" style="">
        <h3 class="detail-title">产品价格属性
            <div class="btn">
                <el-button @click="save" type="primary" >保存</el-button>
                <el-button @click="cancel" style="margin-right:0;">取消</el-button>
            </div>
        </h3>
        <el-scrollbar>
            <el-form ref="form" class="form"  :model="info" :inline="true" label-width="130px">
                <div class="clearfix" style="padding: 0 30px;">
                    <div style="border-bottom:1px dashed #ddd;">
                        <h5 class="item-title ">商品1</h5>
                        <el-form-item label="车况名称："  prop="info1.name" :rules="$validate({required:true,max:60})">
                            <el-input type="text" class="name w350" v-model="info.info1.name" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="商品描述："  prop="info1.description" :rules="$validate({required:true,max:60})">
                            <el-input type="text" class="name w350" v-model="info.info1.description" placeholder=""></el-input>
                        </el-form-item>
                        <br/>
                        <el-form-item style="width: 496px;" label="价格(已认证)："  prop="info1.certifiedPrice" :rules="$validate({required:true,type:'price'})">
                            <el-input-number style="width: ;" class="w320" v-model="info.info1.certifiedPrice" controls-position="right"></el-input-number>&nbsp;&nbsp;元/次
                        </el-form-item>
                        <el-form-item label="价格(未认证)：" prop="info1.uncertifiedPrice" :rules="$validate({required:true,type:'price'})">
                            <el-input-number class="w320" v-model="info.info1.uncertifiedPrice" controls-position="right"></el-input-number>&nbsp;&nbsp;元/次
                        </el-form-item>
                    </div>
                    <div style="border-bottom:1px dashed #ddd;">
                        <h5 class="item-title ">商品2</h5>
                        <el-form-item label="车险名称：" prop="info2.name" :rules="$validate({required:true,max:60})">
                            <el-input type="text" class="name w350" v-model="info.info2.name" placeholder=""></el-input>
                        </el-form-item>
                        <el-form-item label="商品描述："  prop="info2.description" :rules="$validate({required:true,max:60})">
                            <el-input type="text" class="name w350" v-model="info.info2.description" placeholder=""></el-input>
                        </el-form-item>
                        <br/>
                        <el-form-item style="width: 496px;" label="价格(已认证)：" prop="info2.certifiedPrice" :rules="$validate({required:true,type:'price'})">
                            <el-input-number class="w320" v-model="info.info2.certifiedPrice" controls-position="right"></el-input-number>&nbsp;&nbsp;元/次
                        </el-form-item>
                        <el-form-item label="价格(未认证)：" prop="info2.uncertifiedPrice" :rules="$validate({required:true,type:'price'})">
                            <el-input-number class="w320" v-model="info.info2.uncertifiedPrice" controls-position="right"></el-input-number>&nbsp;&nbsp;元/次
                        </el-form-item>
                    </div>
                    <div style="width:;">
                        <h5 class="item-title ">商品3</h5>
                        <el-form-item label="综合版名称：" prop="info3.name" :rules="$validate({required:true,max:60})">
                            <el-input type="text" class="name w350" v-model="info.info3.name" placeholder="碰撞记录-碰撞版本(碰撞记录)"></el-input>
                        </el-form-item>
                        <el-form-item label="商品描述："  prop="info3.description" :rules="$validate({required:true,max:60})">
                            <el-input type="text" class="name w350" v-model="info.info3.description" placeholder=""></el-input>
                        </el-form-item>
                        <div class="clearfix" style="width:510px;">
                            <el-form-item label="车况价格：" class="dlb fl" prop="info3.certifiedPrice" :rules="$validate({required:true,type:'price'})">
                                <el-input-number class="w120" v-model="info.info3.certifiedPrice" controls-position="right"></el-input-number>&nbsp;&nbsp;+
                            </el-form-item>
                            <el-form-item label="车险价格：" label-width="95px" class="dlb fl" prop="info3.insuranceCertified" :rules="$validate({required:true,type:'price'})">
                                <el-input-number class="w120" v-model="info.info3.insuranceCertified" controls-position="right"></el-input-number>
                            </el-form-item>
                        </div>
                        <p style="width:500px;" class="sumPirce">总价格(已认证)：{{sum1}}元/次</p>
                        <!-- <el-form-item label="总价格(已认证)：" label-width="124px">
                            <el-input class="w120" type="text" :disabled="true" v-model="sum1"></el-input>&nbsp;&nbsp;元/次
                        </el-form-item> -->
                        <div class="clearfix" style="width:510px;">
                            <el-form-item label="车况价格：" class="fl" prop="info3.uncertifiedPrice" :rules="$validate({required:true,type:'price'})" >
                                <el-input-number class="w120" v-model="info.info3.uncertifiedPrice" controls-position="right"></el-input-number>&nbsp;&nbsp;+
                            </el-form-item>
                            <el-form-item label="车险价格：" class="fl" label-width="95px" prop="info3.insuranceUncertified" :rules="$validate({required:true,type:'price'})">
                                <el-input-number class="w120" v-model="info.info3.insuranceUncertified" controls-position="right"></el-input-number>
                            </el-form-item>
                        </div>
                        <p style="width:500px;" class="sumPirce">总价格(未认证)：{{sum2}}元/次</p>
                        <!-- <el-form-item label="总价格(未认证)：" label-width="124px">
                            <el-input class="w120" type="text" :disabled="true" v-model="sum2"></el-input>&nbsp;&nbsp;元/次
                        </el-form-item> -->
                    </div>
                </div>
            </el-form>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    name: 'productConfig',
    data () {
        return {
            info: {
                info1: {
                    name: '',
                    certifiedPrice: '',
                    uncertifiedPrice: '',
                    description: ''
                },
                info2: {
                    name: '',
                    description: '',
                    certifiedPrice: '',
                    uncertifiedPrice: ''
                },
                info3: {
                    name: '',
                    certifiedPrice: '',
                    uncertifiedPrice: '',
                    insuranceCertified: '',
                    insuranceUncertified: ''
                }
            },
            rules: {
                obj1: {
                    name: '',
                    uncertifiedPrice: '',
                    certifiedPrice: ''
                }
            }
        }
    },
    created () {
        this.getData()
    },
    computed: {
        sum1 () {
            return this.info.info3.certifiedPrice + this.info.info3.insuranceCertified
        },
        sum2 () {
            return this.info.info3.uncertifiedPrice + this.info.info3.insuranceUncertified
        }
    },
    components: {
    },
    methods: {
        getData () {
            this.$post('productconfig/find', {}).then(res => {
                if (res.code === 0) {
                    this.info.info1 = res.data[0]
                    this.info.info2 = res.data[1]
                    this.info.info3 = res.data[2]
                }
            }).catch(err => {
                console.log(err)
            })
        },
        save () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let obj = [this.info.info1, this.info.info2, this.info.info3]
                    this.$post('productconfig/save', {
                        productConfigurationList: obj
                    }).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                message: '保存成功！',
                                type: 'success'
                            })
                        }
                    })
                }
            })
        },
        cancel () {
            this.getData()
        }
    }
}
</script>

<style lang='less' scoped>
.productConfig {
    width: 100%;
    overflow: auto;
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 36px;
        border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#666666;
        position: relative;
    }
    .form {
        color: #666;
        // min-width: 1270px;
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
    }
    .btn {
        // margin: 0 36px;
        // border-top: 1px solid #E8ECEF;
        // padding-top: 32px;
        // padding-left: 116px;
        position: absolute;
        right: 0;
        line-height: 74px;
        top: 0;
        .el-button {
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 20px;
        }
    }
    .sumPirce {
        line-height: 24px;
        text-align: right;
        color: #98A9BC;
        margin-bottom: 25px;
    }
}
</style>
<style lang="less">
.productConfig {
    .el-input-number.is-controls-right .el-input-number__increase {
        margin-top: 1px;
    }
    .el-input-number.is-controls-right .el-input-number__decrease {
        bottom: 2px;
    }
    .name {
        .el-input__inner {
            // width: 250px;
        }
    }
    .w350 {
        width: 366px;
    }
    .w320 {
        width: 320px;
    }
}
</style>

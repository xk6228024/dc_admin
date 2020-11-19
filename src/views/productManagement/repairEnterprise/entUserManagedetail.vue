<!-- 企业用户详情 -->
<template>
    <div class="entUserManagedetail detailPage" v-loading="showLoading">
        <div class="detail_header">
            <el-button type="primary" class="goBack btn" @click="close">关 闭</el-button>
            <el-button class="btn" @click="resetPsw" :disabled="!eInfo.entId">管理账号密码重置</el-button>
            <el-button class="btn" @click="goInfoDetail" :disabled="!eInfo.entId">企业信息详情</el-button>
        </div>
        <div class="detail_content">
            <div class="detail_model">
                <h4>用户信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>注册时间：</label>
                        <span>{{uInfo.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>管理账号：</label>
                        <span>{{uInfo.userName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>所属业务人员：</label>
                        <span>{{uInfo.workUser}}</span>
                    </div>
                    <div class="detail_item">
                        <label>注册手机号：</label>
                        <span>{{uInfo.mobileNo}}</span>
                    </div>
                    <div class="detail_item">
                        <label>最近登录时间：</label>
                        <span>{{uInfo.loginDate | filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>用户注册渠道：</label>
                        <span>{{uInfo.source}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>企业信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>企业全称：</label>
                        <span>{{eInfo.entFullName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>所在地区：</label>
                        <span>{{eInfo.address}}</span>
                    </div>
                    <div class="detail_item">
                        <label>维修经营类别：</label>
                        <span>{{eInfo.entCatName}}</span>
                        <!-- <span v-if="eInfo.enterpriseBusinessCategory=='02'">二类维修经营业务</span> -->
                        <!-- <span v-if="eInfo.enterpriseBusinessCategory=='03'">三类维修经营业务</span> -->
                    </div>
                    <div style="clear:both;"></div>
                    <div class="detail_item">
                        <label>社会信用代码：</label>
                        <span>{{eInfo.socialCreditCode}}</span>
                    </div>
                    <div class="detail_item">
                        <label>业务电话：</label>
                        <span>{{eInfo.businessPhone}}</span>
                    </div>
                    <div class="detail_item">
                        <label>营业时间：</label>
                        <span>{{eInfo.startTime}}-{{eInfo.endTime}}</span>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="detail_item">
                        <label>负责人：</label>
                        <span>{{eInfo.headPer}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系人：</label>
                        <span>{{eInfo.contactPerson}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系电话：</label>
                        <span>{{eInfo.phone}}</span>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="detail_item" style="width: 100%;">
                        <label>企业介绍：</label>
                        <span>{{eInfo.entBrief}}</span>
                    </div>
                </div>
            </div>
        </div>
        <modal
            :title="'修改密码'"
            :width="560"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_content">
                <el-form :model="ruleForm" ref="marketAreaForm" label-width="96px" class="form" style="padding-right:50px;padding-bottom:30px;padding-top:20px;">
                    <el-form-item label="用户名：" prop="username">
                        <el-input disabled v-model="uInfo.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password"  :rules="$validate({required:true,type:'EN',min:6,max:20})">
                        <el-input type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="password2" :rules="rules">
                        <el-input type="password" v-model="ruleForm.password2"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
    name: 'entUserManagedetail',
    data () {
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            showLoading: false,
            uInfo: {},
            eInfo: {},
            ruleForm: {
                username: '',
                password: '',
                password2: ''
            },
            form: [],
            rules: [
                { validator: validatePass2, required: true, trigger: ['blur'] }
            ],
            showAlert: false
        }
    },
    components: {
        Modal
    },
    created () {
        this.getData()
    },
    methods: {
        goInfoDetail () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('entUserManager:detail')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('/maintenanceOfEnterpriseDetailEdit?id=' + this.eInfo.entId)
        },
        resetPsw () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('entUserManager:enterprise:setPassword')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.showAlert = true
        },
        getData () {
            this.showLoading = true
            this.$get('/entUserManager/detail?entId=' + this.$route.query.id)
                .then(res => {
                    this.uInfo = res.data.entUserInfo
                    this.eInfo = res.data.entInfo
                    this.showLoading = false
                })
        },
        alertConfirm () {
            this.$refs['marketAreaForm'].validate((valid) => {
                if (valid) {
                    this.$post('/entUserManager/setPassword', {
                        entUserId: this.uInfo.entUserId,
                        password: this.ruleForm.password
                    }).then(res => {
                        if (res.code === 0) {
                            this.$msg({
                                type: 'success',
                                message: '操作成功'
                            })
                            this.alertCancel()
                        }
                    })
                }
            })
            // this.alertConfirm()
        },
        alertCancel () {
            this.showAlert = false
            this.$refs['marketAreaForm'].resetFields()
        },
        // 关闭页面
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/enterpriseUserManagement'
            })
        }
    }
}
</script>

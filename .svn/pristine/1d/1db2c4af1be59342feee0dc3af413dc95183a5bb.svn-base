<!-- 登陆 -->
<template>
    <div id="login">
        <div class="login-window" ref="loginBox">
            <div class="login_header">
                <img >
                <!-- <img src="../assets/images/icon_jg.png" width="56" style="vertical-align:middle;"> -->
                {{sysInfo.sysTitle}}
            </div>
            <div class="first-tips" v-if="isFirst && !isSimple">
                <i class="el-icon-warning"></i>&nbsp;温馨提示：初次登录系统，请修改密码
            </div>
            <div class="first-tips" v-if="isFirst && isSimple">
                <i class="el-icon-warning"></i>&nbsp;温馨提示：安全保护机制已检测到您的账号密码存在安全风险，请重置密码
            </div>
            <el-form :model="form" ref="form" class="login-form" :class="{first: isFirst}">
                <el-form-item :rules="[{ required: !isFirst, message: '请输入用户名',trigger: 'blur' }]" v-if="!isFirst" prop="userName">
                    <el-input
                    autocomplete="new-password"
                    maxlength="20"
                    type="text"
                    class="input"
                    v-model="form.userName"
                    placeholder="请输入用户名">
                        <template v-slot:prefix>
                            <el-icon type="user" class="icon"/>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item :rules="[{ validator: passwordValidator,trigger: 'blur' }]" prop="newPassword">
                    <el-input
                    type="password"
                    autocomplete="new-password"
                    maxlength="16"
                    class="input"
                    v-model="form.newPassword"
                    :placeholder="isFirst ? '请输入新密码' : '请输入密码'">
                        <template v-slot:prefix>
                            <el-icon type="lock" class="icon"/>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item :rules="[{ validator: repeatPswValidator,trigger: 'blur' }]"  v-if="isFirst" prop="newPassword2">
                    <el-input
                    type="password"
                    autocomplete="new-password"
                    maxlength="16"
                    class="input"
                    v-model="form.newPassword2"
                    placeholder="请再次输入密码">
                        <template v-slot:prefix>
                            <el-icon type="lock" class="icon"/>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]" prop="checkCode">
                    <el-input
                    ref="pass"
                    maxlength="4"
                    class="code-input"
                    v-model="form.checkCode"
                    placeholder="请输入验证码">
                        <template v-slot:prefix>
                            <el-icon type="safety-certificate" class="icon"/>
                        </template>
                    </el-input>
                    <img :src="imgCode" class="code-img" @click="getCheckCode">
                    <!-- <identify ref="identify"></identify> -->
                </el-form-item>
            </el-form>
            <el-button type="primary" class="input" @click="login" :loading="loginLoading">{{isFirst ? '确认并重新登录' : '登 录'}}</el-button>
            <p class="supportText cursor" style="cursor:pointer;" v-if="!isFirst" @click="$router.push('/findPassword')">忘记密码？</p>
            <div class="again-login" v-if="againLoginTips">
                <el-icon type="check-circle" theme="filled" class="icon"/>
                <div class="tips">权限系统已变更，请重新登录</div>
                <el-button type="primary" class="btn" @click="againLoginTips = false">重新登录</el-button>
            </div>
            <puzzle-verification
                class="slide-wrap"
                v-model="slideVerifyVisible"
                blockType="puzzle"
                :puzzleImgList="slideImgs"
                width="380"
                height="180"
                deviation="10"
                :onSuccess="onSuccess"
            />
        </div>
        <div class="copyright">Copyright © 2020 {{sysInfo.sysTitle}}</div>
    </div>
</template>

<script type="text/javascript">
// import Vue from 'vue'
// import { setCookie } from '@/utils/utils.js'
import Identify from '@/components/Identify'
import { setCookie } from '@/utils/cookie.js'
import PuzzleVerification from '@/components/PuzzleVerification'

export default {
    name: 'login',
    // 组件属性、变量、用于接收父组件的传值
    props: {},
    // 变量
    data () {
        return {
            title: '深圳市维修协会智能服务系统',
            sysInfo: {},
            isFirst: false, // 是否首次登录
            isSimple: false, // 是否为简单密码
            againLoginTips: false,
            slideVerifyVisible: false,
            loginLoading: false,
            slideImgs: [
                require('@/assets/img/slide/img1.jpg'),
                require('@/assets/img/slide/img2.jpg'),
                require('@/assets/img/slide/img3.jpg'),
                require('@/assets/img/slide/img4.jpg'),
                require('@/assets/img/slide/img5.jpg'),
                require('@/assets/img/slide/img6.jpg'),
                require('@/assets/img/slide/img8.jpg'),
                require('@/assets/img/slide/img9.jpg')
            ],
            form: {
                checkCode: '',
                newPassword: '',
                newPassword2: '',
                userName: ''
            },
            imgCode: '',
            imgToken: ''
            // form: this.$form.createForm(this)
        }
    },
    created () {
        console.log('??')
        this.getTitle()
        this.getCheckCode()
    },
    mounted () {
        this.enterLogin()
        this.prohibitPassInput()
        // this.getSysInfo()
    },
    computed: {},
    // 使用其它组件
    components: {
        Identify,
        PuzzleVerification
    },
    // 方法
    watch: {},
    methods: {
        // 获取主标题
        getTitle () {
            this.$post('external/index', {
                data: {
                    domin: location.host
                },
                domin: location.host
            })
                .then(res => {
                    if (res.status === 200) {
                        this.$store.dispatch('login/setBeforeLoginExternalInfo', res.data)
                        this.sysInfo = res.data
                        localStorage.sysInfo = JSON.stringify(res.data)
                        document.title = res.data.sysTitle
                        // this.sortTit = this.sliceArea(res.data.sysTitle)
                        // this.sortPy = window.pinyinUtil.getPinyinFirst(this.sortTit)
                        // setCookie('sortTitle', JSON.stringify({
                        //     sortTit: this.sortTit,
                        //     sortPy: this.sortPy
                        // }))
                    }
                })
        },
        // 滑动验证成功
        onSuccess () {
            // this.$message.success('验证成功')
            this.slideVerifyVisible = false
            if (process.env.VUE_APP_CURRENTMODE === 'show') {
                this.$router.push('/home')
                return
            }
            this.getCheckCode()
            // this.$refs.identify.drawPic()
            this.loginLoading = true
            this.$post('/external/sysUser/login', {
                data: {
                    userName: this.form.userName,
                    password: this.form.newPassword
                },
                checkcode: this.form.checkCode,
                token: this.imgToken
            })
                .then(res => {
                    if (res.status === 200) {
                        res.username = this.form.userName
                        setCookie('token', res.token, 1)
                        setCookie('user', JSON.stringify(res), 1)
                        if (res.pwdexpirydate && res.pwdexpirydate !== '') {
                            sessionStorage.setItem('pwdexpirydate', 1)
                        }
                        if (res.loginCount === 0) {
                            this.$refs.form.resetFields()
                            this.slideVerifyVisible = false
                            this.isFirst = true
                            this.isSimple = false
                        } else if (!/^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[\W]).{6,20}$/.test(this.form.newPassword) && !/admin/.test(this.form.userName)) {
                            this.$refs.form.resetFields()
                            this.slideVerifyVisible = false
                            this.isFirst = true
                            this.isSimple = true
                        } else {
                            this.$store.commit('region/SET_DATA', [])
                            this.$router.push('/home')
                        }
                    }
                    this.loginLoading = false
                })
                .catch(() => {
                    this.loginLoading = false
                })
        },
        // 回车自动登录
        enterLogin () {
            this.$refs.loginBox.addEventListener('keydown', e => {
                e.stopPropagation()
                if (e.keyCode === 13) {
                    this.login()
                }
            })
        },
        // 校验验证码
        codeValidator (rule, value, callback) {
            console.log(value)
            let str = '请输入正确的验证码'
            if (this.$refs.identify.validate(value)) {
                callback()
            } else {
                callback(str)
            }
        },
        // 输入密码验证
        passwordValidator (rule, value, callback) {
            let str = '密码为6~20位，字母(区分大小写) + 数字 + 符号任意组合'
            if (this.isFirst) {
                if (/^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[\W]).{6,20}$/.test(value)) {
                    callback()
                } else {
                    callback(str)
                }
            }
            if (!value) {
                str = '请输入密码'
                callback(str)
            }
            callback()
        },
        // 再次输入密码验证
        repeatPswValidator (rule, value, callback) {
            let str = '两次输入密码不一致'
            if (this.form.newPassword === value) {
                callback()
            } else {
                callback(str)
            }
        },
        // 获取验证码
        getCheckCode () {
            this.$post('/external/verifycode/captcha')
                .then(res => {
                    if (res.status === 200 && res.data) {
                        this.imgCode = 'data:image/png;base64,' + res.data.img
                        this.imgToken = res.data.token
                    }
                })
        },
        // 登录
        login () {
            if (this.isFirst) {
                this.$post('sys/user/updateUserPass', {
                    password: this.form.newPassword,
                    checkcode: this.form.checkCode
                }).then(res => {
                    if (res.status === 200) {
                        this.$router.push('/home')
                    }
                })
            } else {
                this.$refs.form.validate((valid) => {
                    if (!valid) {
                        return
                    }
                    this.slideVerifyVisible = true
                })
            }
            // this.form.validateFields((err, fieldsValue) => {
            //     if (err) {
            //         return
            //     }
            //     this.slideVerifyVisible = true
            // })
        },
        // 禁止密码框复制粘贴
        prohibitPassInput (e) {
            var passInput = document.querySelector('input[type="password"]')
            function prohibit () {
                return false
            }
            passInput.oncopy = prohibit
            passInput.onpaste = prohibit
            passInput.oncut = prohibit
            passInput.oncontextmenu = prohibit
        }
    }
}
</script>

<style lang="less">
#login {
    height: 100%;
    background: url('../assets/images/login-bg-big-jg.png') center center;
    background-size: cover;
    background-size: 100% 100%;
    .supportText {
        color:#999;
        text-align:center;
        margin-top:24px;
        font-size: 14px;
    }
    .login_header {
        height: 80px;
        line-height: 80px;
        background: url('../assets/images/login_header.png');
        background-size: 100% 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        text-align: center;
        font-size: 26px;
        color: #fff;
    }
    .login-window {
        width: 580px;
        // height: 400px;
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -290px;
        margin-top: -216px;
        background: #F6F9FF;
        box-shadow:5px 9px 15px 0px rgba(62,64,66,0.07);
        border-radius:8px;
        padding: 80px 100px 28px 100px;
        .again-login {
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            background: #F6F9FF;
            text-align: center;
            z-index: 2;
            .icon {
                margin-top: 54px;
                color: #52C31B;
                font-size: 70px;
            }
            .tips {
                font-size: 17px;
                font-weight: bold;
                margin-top: 36px;
            }
            .btn {
                margin-top: 50px;
                width: 300px;
                height: 42px;
            }
        }
        .slide-wrap {
            position: absolute;
            top: 100px;
            left: 80px;
            right: 80px;
            bottom: 24px;
            background: #fff;
            z-index: 2;
            padding: 20px;
            box-shadow: 2px 1px 6px 3px rgba(0,21,41,0.12);
            .slide-title {
                line-height: 24px;
                margin-bottom: 12px;
                .slide-close {
                    float: right;
                    cursor: pointer;
                    .icon {
                        font-size: 20px;
                        padding: 0;
                    }
                }
            }
            .slide-verify-slider {
                width: 380px;
            }
            #slideVerify {
                width: 380px;
            }
            .slide-verify-slider-mask-item {
                height: 38px;
            }
        }
        .login-form {
            margin-top: 40px;
            &.first {
                margin-top: 24px;
            }
        }
        .first-tips {
            color: #FAAD14;
            text-align: center;
            margin-top: 24px;
            .icon {
                font-size: 14px;
                color: #FAAD14;
            }
        }
        .logo {
            text-align: center;
            margin-top: 24px;
            margin-bottom: 6px;
            img {
                width: 60px;
                height: 60px;
            }
        }
        h1 {
            text-align: center;
            color: #666;
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 36px;
        }
        .input {
            height: 42px;
            width: 100%;
            &.el-button {
                font-size: 16px;
            }
        }
        .code-input {
            height: 42px;
            width: 244px;
            margin-right: 8px;
        }
        .code-img {
            width: 128px;
            height: 40px;
            cursor: pointer;
        }
        .code-input, .code-img {
            vertical-align: middle;
        }
        #identify, .code-input {
            vertical-align: middle;
        }
        .ant-form-item {
            margin-bottom: 24px;
        }
        .icon {
            font-size: 18px;
            color: #7C868D;
            padding: 6px 8px;
        }
        .ant-input {
            padding-left: 48px;
        }
    }
    .copyright {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 66px;
        color: rgba(255,255,255,0.65);
        font-size: 12px;
    }
}
</style>
<style lang="less">
#login {
    .el-input__inner {
        height: 40px;
        line-height: 40px;
    }
}
</style>

<template>
    <div id="findPassword">
        <div class="header">
            <div class="wrap">
                <div class="menu-icon">
                    <!-- <img :src="logo" alt="" class="vam"> -->
                </div>
                <h1> 中车信息服务运营系统 </h1>
            </div>
        </div>
        <div class="wrap">
            <div class="register-title">找回密码</div>
            <el-form :model="form" class="register-form" ref="form" label-position="right">
                <el-form-item
                :rules="[{ required: true, message: '请输入登录账号' }]"
                prop="username" label-width="100px"
                label="登录账号">
                    <el-input v-model="form.username" style="width:350px;"
                    maxlength="16" placeholder="请输入登录账号" class="input"/>
                </el-form-item>
                <el-form-item
                prop="checkcode" label-width="100px"
                :rules=" [{ required: true, message: '请输入图形码' }]"
                label="图形验证码">
                    <el-input v-model="form.checkcode"
                    maxlength="4"
                    class="code-input"
                    placeholder="请输入图形码">
                    </el-input>
                    <img :src="imgCode" class="code-img" @click="getCheckCode">
                    <!-- <identify ref="identify" style="vertical-align:middle;margin-left:10px;"></identify> -->
                </el-form-item>
                <el-form-item
                prop="mobile" label-width="100px"
                :rules="$validate({
                        type: 'phone',
                        required: true,
                        msg: '请输入正确的手机号码'
                    })"
                label="手机号码">
                    <el-input v-model="form.mobile" style="width:350px;"
                    maxlength="11" autocomplete="off" placeholder="请输入11位手机号码" class="input"/>
                </el-form-item>
                <el-form-item
                prop="mobilecheckcode" label-width="100px"
                :rules="[{ required: true, message: '请输入短信验证码',trigger: 'change' }]"
                label="手机验证码">
                    <el-input v-model="form.mobilecheckcode" size="small" style="width:230px;"
                    maxlength="10" autocomplete="off" placeholder="请输入短信验证码" class="input code"/>
                    <el-button class="code-button" @click="getCode" :disabled="isGetCode || repeatSend">{{codeMsg}}</el-button>
                </el-form-item>
                <el-form-item
                prop="password"
                label-width="100px"
                :rules="$validate({
                        pattern: /^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[\W]).{6,20}$/,
                        msg: '请输入6到20位数字,字母和符号的组合',
                        required: true
                    })"
                    label="设置登录密码">
                    <el-input
                    v-model="form.password" style="width:350px;"
                    maxlength="16" autocomplete="new-password" placeholder="请输入6到20位数字,字母和符号的组合"
                    :type="showPwd ? 'text': 'password'" class="input">
                        <!-- <img v-if="!showPwd" src="@/assets/img/login/icon-eye.png" slot="suffix" @click="showPwd=!showPwd" class="cursor vam"/>
                        <img v-else src="@/assets/img/login/icon-eye-off.png" slot="suffix" @click="showPwd=!showPwd" class="cursor vam"/> -->
                    </el-input>
                </el-form-item>
                <el-form-item
                prop="checkPassword" label-width="100px"
                :rules="[{ required: true, message: '请再次输入密码' }, { validator: compareToFirstPassword }]"
                label="确认密码">
                    <el-input v-model="form.checkPassword" style="width:350px;"
                    maxlength="16" autocomplete="new-password" placeholder="请再次输入密码" :type="showCheckPwd ? 'text': 'password'"
                    class="input" @blur="handleConfirmBlur">
                        <!-- <img v-if="!showCheckPwd" src="@/assets/img/login/icon-eye.png" slot="suffix"
                        @click="showCheckPwd=!showCheckPwd" class="cursor vam"/>
                        <img v-else src="@/assets/img/login/icon-eye-off.png" slot="suffix"
                        @click="showCheckPwd=!showCheckPwd" class="cursor vam"/> -->
                    </el-input>
                </el-form-item>
                <el-form-item class="form-btn">
                    <el-button type="primary" class="submit" :style="{opacity: repeatSubmit ? '0.5' : '1'}" @click="submit">确认并重新登录</el-button>
                    <el-button class="cancel" @click="$router.push('/login')">取 消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { getCookie, setCookie, clearCookie } from '@/utils/cookie'
// import Identify from '@/components/Identify'
export default {
    name: 'findPassword',
    data () {
        return {
            // form: this.$form.createForm(this),
            logo: '@/assets/images/icon_jg.png',
            form: {
                username: '',
                checkcode: '',
                mobile: '',
                mobilecheckcode: '',
                password: '',
                checkPassword: ''
            },
            showPwd: false, // 是否显示登陆密码
            showCheckPwd: false, // 是否显示登陆密码
            confirmDirty: false, // 是否有输入确认密码
            isGetCode: false, // 是否已点击获取验证码
            repeatSend: false, // 是否重复发送验证码
            repeatSubmit: false, // 是否重复提交找回密码
            codeMsg: '获取验证码', // 验证码按钮文字
            imgCode: '', // 图片验证码
            imgToken: '' // 图片验证码token
        }
    },
    components: {
        // Identify
    },
    created () {
        this.oneMinuteGetCode() && this.countDown()
        if (localStorage.sysInfo && JSON.parse(localStorage.sysInfo).sysLogo) {
            this.logo = JSON.parse(localStorage.sysInfo).sysLogo
        }
        this.getCheckCode()
    },
    methods: {
        // 获取短信验证码
        getCode () {
            this.$refs.form.validateField([ 'mobile', 'code', 'username' ], valid => {
                if (valid) {
                    return
                }
                if (this.repeatSend) {
                    return
                }
                this.repeatSend = true
                this.$post('/findMobileCheckCode', {
                    mobile: this.form.mobile,
                    username: this.form.username,
                    type: 7
                }).then(res => {
                    if (res.code === 0) {
                        this.$message.success('发送成功')
                        this.countDown()
                    }
                    this.repeatSend = false
                }).catch(e => {
                    this.repeatSend = false
                })
                // this.$api.common.sendSMS({
                //     mobile: values.staffMobile,
                //     typeKey: 'SMS_FOR_FORGET_PWD'
                // }).then(res => {
                //     if (res.code === 200) {
                //         this.$message.success('发送成功')
                //         this.countDown()
                //     }
                //     this.repeatSend = false
                // }).catch(e => {
                //     this.repeatSend = false
                // })
            })
        },
        // 获取图片验证码
        getCheckCode () {
            this.$post('/external/verifycode/captcha')
                .then(res => {
                    if (res.code === 0) {
                        this.imgCode = 'data:image/png;base64,' + res.data.img
                        this.imgToken = res.data.token
                    }
                })
        },
        // 校验验证码
        codeValidator (rule, value, callback) {
            let str = '请输入正确的验证码'
            if (this.$refs.identify.validate(value)) {
                callback()
            } else {
                callback(str)
            }
        },
        // 倒计时函数
        countDown () {
            var n
            if (this.oneMinuteGetCode()) {
                n = this.oneMinuteGetCode()
            } else {
                setCookie('findPasswordCodeTime', (new Date() - 0) + '')
                n = 59
            }
            this.isGetCode = true
            this.codeMsg = n + 's秒后重试'
            this.time = setInterval(() => {
                if (n <= 0) {
                    this.codeMsg = '获取验证码'
                    this.isGetCode = false
                    clearInterval(this.time)
                    return
                }
                n--
                this.codeMsg = n + 's秒后重试'
            }, 1000)
        },
        // 是否一分钟内已点击过验证码
        oneMinuteGetCode () {
            var date = new Date() - 0
            var localTime = getCookie('findPasswordCodeTime') && new Date(getCookie('findPasswordCodeTime') - 0) - 0
            if (localTime) {
                var difference = Math.round((date - localTime) / 1000)
                if (difference < 60 && difference > 0) {
                    return 60 - difference
                } else {
                    clearCookie('findPasswordCodeTime')
                    return false
                }
            } else {
                return false
            }
        },
        // 校验确认密码
        compareToFirstPassword (rule, value, callback) {
            // const form = this.form
            if (value && value !== this.form.password) {
                let str = '两次输入密码不一致！'
                callback(str)
            } else {
                callback()
            }
        },
        // 当确认密码有值时进行校验
        validateToNextPassword  (rule, value, callback) {
            // const form = this.form
            if (value && this.confirmDirty) {
                this.$refs.form.validateField(['checkPassword'])
                // form.validateFields(['checkPassword'], { force: true })
            }
            // callback()
        },
        // 确认密码失去焦点储存状态
        handleConfirmBlur (e) {
            const value = e.target.value
            this.confirmDirty = this.confirmDirty || !!value
        },
        // 登录
        login (values) {
            // this.$api.user.login(values)
            //     .then(res => {
            //         if (res.code === 200) {
            //             setCookie('token', res.data.token, 1)
            //         }
            //     })
            this.$post('/login', values).then(res => {
                if (res.code === 0) {
                    setCookie('token', res.data.token, 1)
                }
            })
        },
        // 找回密码
        submit () {
            if (this.repeatSubmit) {
                return
            }
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }
                // http://192.168.1.24:8082/vmts-supervision/external/verifycode/updateUserPass
                this.repeatSubmit = true
                this.$post('/updatePass', {
                    ...this.form,
                    // checkcode: this.form.mobilecheckcode,
                    checkcodetoken: this.imgToken
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            message: '操作成功！',
                            type: 'success'
                        })
                        this.$router.push('/login')
                        // this.login({
                        //     username: this.form.mobile,
                        //     password: this.form.password
                        // })
                        // const _this = this
                        // let secondsToGo = 5
                        // const modal = this.$success({
                        //     title: '操作成功',
                        //     cancelText: '取消',
                        //     okText: '去登录',
                        //     centered: true,
                        //     content: `您的密码已成功修改，${secondsToGo}秒后自动进入系统`,
                        //     onOk () {
                        //         _this.$router.push('/home')
                        //         clearInterval(interval)
                        //     }
                        // })
                        // const interval = setInterval(() => {
                        //     secondsToGo -= 1
                        //     modal.update({
                        //         content: `您的密码已成功修改，${secondsToGo}秒后自动进入系统`
                        //     })
                        //     if (secondsToGo <= 0) {
                        //         clearInterval(interval)
                        //         modal.destroy()
                        //         _this.$router.push('/home')
                        //     }
                        // }, 1000)
                    }
                    this.repeatSubmit = false
                }).catch(e => {
                    this.repeatSubmit = false
                })
            })
        }
    }
}
</script>

<style lang='less' scoped>
#findPassword {
    height: 100%;
    background: #fff;
    .vam {
        vertical-align: middle;
    }
    .header {
        height: 60px;
        line-height: 60px;
        box-shadow:0px 1px 4px 0px rgba(0,21,41,0.12);
        .menu-icon {
            display: inline-block;
            font-size: 18px;
            margin-right: 6px;
            color: #666;
            padding-right: 10px;
            cursor: pointer;
            img {
                width: 40px;
                height: 40px;
            }
        }
        h1 {
            display: inline-block;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: bold;
            margin-bottom: 0;
        }
    }
    .wrap {
        width: 1000px;
        margin: 0 auto;
        position: relative;
    }
    .register-title {
        width: 580px;
        margin-top: 100px;
        margin-bottom: 40px;
        font-size: 16px;
        font-weight: bold;
        text-align: right;
    }
    .register-form {
        width: 470px;
        margin: 0 auto;
        position: relative;
        .code-input{
            width: 210px;
            margin-right: 10px;
        }
        .code-img {
            width: 128px;
            height: 34px;
            cursor: pointer;
        }
        .code-input, .code-img {
            vertical-align: middle;
        }
        .code-button {
            vertical-align:middle;
            margin-left:10px;
            height: 40px;
        }
        .form-btn {
            text-align: left;
            .submit {
                height: 40px;
                width: 160px;
                margin-right: 20px;
                margin-left: 110px;
                &:hover {
                    background: #28A6FA;
                }
                &.off {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            }
            .cancel {
                height: 40px;
                width: 160px;
            }
        }
    }
}
</style>
<style lang="less">
#findPassword {
    .el-input__inner {
        height: 40px;
        line-height: 40px;
    }
}
</style>

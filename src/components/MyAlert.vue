<template>
    <transition name="fade">
        <div class="modal" v-show="alert">
            <div class="wrap fade-up" ref="model">
                <div class="title">
                    {{text.title}}
                    <img src="../assets/images/icon_close.png" class="icon" @click="close">
                </div>
                <div class="alert-content">
                    <div class="icon">
                        <img src="../assets/images/question.png" alt="" v-if="text.type === 'confirm'">
                        <img src="../assets/images/warring.png" alt="" v-if="text.type === 'waring'">
                    </div>
                    <p class="msg">{{text.msg}}</p>
                </div>
                <div class="btn">
                    <el-button @click="close">取消</el-button>
                    <el-button type="primary" @click="ok">确定</el-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            alert: false,
            text: {
                title: '提示',
                msg: '确定删除此条信息？',
                type: 'confirm'
            }
        }
    },
    components: {},
    methods: {
        close () {
        },
        ok () {
        }
    }
}
</script>

<style lang="less" scoped>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.5);
    .wrap {
        width: 548px;
        height: 250px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -140px;
        margin-left: -200px;
        background: #FEFEFE;
        border-radius: 6px;
        .title {
            height: 64px;
            line-height: 64px;
            text-align: left;
            font-size: 14px;
            background-color: #fff;
            color: #252631;
            font-size: 20px;
            padding: 0 24px;
            border-radius:6px;
            position: relative;
            .icon {
                position: absolute;
                top: 24px;
                right: 20px;
                cursor: pointer;
            }
        }
        .alert-content {
            padding: 36px 26px;
            background: #ffffff;
            .icon, .msg {
                display: inline-block;
                vertical-align: middle;
            }
            .icon {
                margin-right: 10px;
                img {
                    vertical-align: middle;
                }
            }
            .msg {
                color: #778CA2;
                font-size: 14px;
            }
        }
        .btn {
            margin-top: 24px;
            height: 36px;
            text-align: right;
            padding: 0 40px;
            button {
                width: 98px;
                height: 36px;
                margin-left: 20px;
                padding: 0;
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
    background-color: rgba(0, 0, 0, 0.5);
    transition: all .2s;
    .fade-up {
        transform: translateY(0%);
        opacity: 1;
        transition: all .2s;
    }
}
.fade-enter, .fade-leave-to{
    background-color: rgba(0, 0, 0, 0);
    .fade-up {
        opacity: 0;
        transform: translateY(-20%);
    }
}
</style>
<style lang="less">
.alert-content {
    .btn {
        .el-button {
            width: 98px;
            &:first-child {
                margin-right: 20px;
            }
        }
    }
}
</style>

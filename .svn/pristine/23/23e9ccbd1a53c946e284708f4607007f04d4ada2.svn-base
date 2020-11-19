<!-- 运营通告详情 -->
<template>
    <div class="messageDetail detailPage">
        <div class="detail_header">
            <!-- <el-button type="primary"  class="goBack btn" >编 辑</el-button> -->
            <el-button type="primary"  class="goBack btn" >保 存</el-button>
            <el-button class="btn" >模板选择</el-button>
            <el-button class="btn" >发送预览</el-button>
            <el-button class="btn" >审 核</el-button>
            <!-- <el-button class="btn" >保 存</el-button> -->
        </div>
        <div class="detail_content">
            <div class="detail_model"  style="border:none;" >
                <h4>新建短信</h4>
                <div class="clearfix">
                    <el-form :model="form" ref="form" label-width="" class="form clearfix">
                        <div class="form_item">
                            <label>车牌号码<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-input
                                    style="width:380px;"
                                    class="edit_input"
                                    v-model="form.a"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item">
                            <label>短信内容<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-input
                                    style="width:900px;"
                                    class="edit_input"
                                    v-model="form.a"
                                    type="textarea"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item">
                            <label>短信接受方<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <div style="max-width:920px;">
                                    <el-radio v-model="form.a" class="radio_item" label="1">车主</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="2">超级骊用户</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="1">维修企业联系人</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="2">维修企业负责人</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="1">检测企业联系人</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="2">检测企业负责人</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="1">运输企业联系人</el-radio>
                                    <el-radio v-model="form.a" class="radio_item" label="2">运输企业负责人</el-radio>
                                </div>
                            </el-form-item>
                        </div>
                        <div style="max-width:920px;">
                            <div class="form_item form_item2 mr100">
                                <label>所在城市</label>
                                <el-form-item prop="a">
                                    <el-input
                                        style="width:380px;"
                                        class="edit_input"
                                        v-model="form.a"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="form_item form_item2">
                                <label>车牌品牌车系</label>
                                <el-form-item prop="a">
                                    <el-input
                                        style="width:380px;"
                                        class="edit_input"
                                        v-model="form.a"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <!-- <br> -->
                            <div class="form_item form_item2 mr100">
                                <label>车主类型</label>
                                <el-form-item prop="a">
                                    <el-input
                                        style="width:380px;"
                                        class="edit_input"
                                        v-model="form.a"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="form_item form_item2">
                                <label>车牌性质</label>
                                <el-form-item prop="a">
                                    <el-input
                                        style="width:380px;"
                                        class="edit_input"
                                        v-model="form.a"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <!-- <br> -->
                            <div class="form_item form_item2">
                                <label>是否金车汇用户</label>
                                <el-form-item prop="a">
                                    <el-input
                                        style="width:380px;"
                                        class="edit_input"
                                        v-model="form.a"
                                        placeholder="">
                                    </el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-form>
                </div>
            </div>
            <!-- <div class="edit_content" v-show="edit">
                <el-form :model="form" ref="form" class="form">
                    <div class="detail_model" style="border:none;">
                        <h4>通告信息</h4>
                        <div class="clearfix">
                            <div class="detail_item" style="width:300px;margin-right:250px;">
                                <label>通告发布时间段<span class="required">(必填)</span></label>
                                <el-form-item prop="time" :rules="$validate({required:true})">
                                    <el-date-picker
                                    class="w350"
                                    v-model="form.time"
                                    :unlink-panels="true"
                                    type="daterange"
                                    :picker-options="pickerOptions"
                                    value-format="timestamp"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="detail_item" style="width:400px;">
                                <label>通告上线系统<span class="required">(必填)</span></label>
                                <el-form-item prop="publishSystem" :rules="$validate({required:true, type: 'array'})">
                                    <el-select v-model="form.publishSystem" multiple placeholder="请选择" class="w350">
                                        <el-option
                                        v-for="item in dataSource"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="detail_item" style="width:100%">
                                <label>通告标题<span class="required">(必填)</span></label>
                                <el-form-item prop="noticeTitle" :rules="$validate({required:true})">
                                    <el-input
                                        class="w900"
                                        maxlength="50"
                                        v-model.trim="form.noticeTitle"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="fl" style="width:100%;margin-top: 10px;">
                                <el-form-item prop="content">
                                    <vue-ueditor-wrap class="ueditor"
                                    v-model="form.content" :config="myConfig"
                                    :destroy="false">
                                    </vue-ueditor-wrap>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                </el-form>
            </div> -->
            <div class="show_box">
                <h5>短信预览</h5>
                <div class="phone_box">
                    <div class="phone_inner">
                        <h5>新建短信</h5>
                        尊敬的客户，您在我行留存的身份证有效期已尊敬的客户，您在我行留存的身份证有效期已尊敬的客户，您在我行留存的身份证有效期已
                    </div>
                </div>
                <div class="show_tips">
                    <h4 style="line-height:40px;">想查看效果？请输入手机号码点击“发送预览”</h4>
                    <el-input
                        style="width:316px;"
                        class="edit_input"
                        v-model="form.a"
                        placeholder="请输入手机号码，多个号码用 “ ; ”分隔">
                    </el-input>
                     <el-button class="btn" style="height:32px;line-height:1;margin-left:25px;padding:8px 18px;">发送预览</el-button>
                </div>
            </div>
        </div>
        <modal
            :title="'------'"
            :width="1020"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_content">
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
// import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
    name: 'messageDetail',
    data () {
        return {
            showAlert: false,
            form: {
                a: ''
            }
        }
    },
    components: {
        Modal
    },
    created () {
    },
    methods: {
        alertConfirm () {},
        alertCancel () {}
    }
}
</script>
<style lang="less" scoped>
.messageDetail {
    min-width: 1420px;
    .form {
        label {
            line-height: 36px;
        }
        .form_item {
            margin-bottom: 20px;
        }
        .form_item2 {
            float: left;
        }
    }
    .show_box {
        position: absolute;
        top: 100px;
        right: 32px;
        background: #FAFAFA;
        width: 440px;
        height: 446px;
        h5 {
            font-size: 16px;
            color: #000000;
            line-height: 60px;
            padding-left: 32px;
        }
        .phone_box {
            background: url(../../../assets/img/iphone.png);
            height: 375px;
            width: 254px;
            margin-left: 108px;
            .phone_inner {
                color: rgba(255, 255, 255, .8);
                width: 154px;
                margin: 0 auto;
                padding-top: 48px;
                line-height: 24px;
                h5 {
                    color: rgba(255, 255, 255, .8);
                    padding: 0;
                    text-align: center;
                    line-height: 36px;
                }
            }
        }
    }
    .mr100 {
        margin-right: 135px;
    }
    .w900 {
        width: 900px;
    }
    .w350 {
        width: 350px;
    }
    .ueditor {
        width: 898px;
        line-height: 20px;
        height: 400px;
    }
    .text-content {
        min-height: 400px;
        padding: 4px 12px;
        border:1px solid #D9D9D9;
        border-radius: 4px;
        overflow: auto;
    }
    .detail_model {
        position:relative;
        .audit-icom{
            position:absolute;
            left: 330px;
            top: 58px;
        }
    }
}
</style>

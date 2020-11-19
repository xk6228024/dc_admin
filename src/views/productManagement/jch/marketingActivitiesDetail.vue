<!-- 运营通告详情 -->
<template>
    <div class="marketingActivitiesDetail detailPage">
        <div class="detail_header">
            <el-button type="primary"  class="goBack btn" >保 存</el-button>
            <el-button class="btn" @click="goback">关 闭</el-button>
        </div>
        <div class="detail_content">
            <div class="detail_model"  style="border:none;" >
                <h4>活动基本信息</h4>
                <div class="clearfix iptWrap">
                    <el-form :model="form" ref="form" label-width="" class="form clearfix">
                        <div class="form_item form_item2">
                            <label>活动名称<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-input
                                    class="edit_input"
                                    v-model="form.a"
                                    placeholder="请输入10字以内的活动名称">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>活动价格<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-input
                                    class="edit_input"
                                    v-model="form.a"
                                    placeholder="请输入">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>原价<span class="required"></span></label>
                            <el-form-item prop="a">
                                <el-input
                                    class="edit_input"
                                    v-model="form.a"
                                    placeholder="请输入">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>活动时间<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-date-picker
                                    v-model="form.a"
                                    type="daterange"
                                    unlink-panels
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    class="edit_input"
                                    value-format="yyyy-MM-dd"
                                    end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>发布数量<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-input
                                    class="edit_input"
                                    v-model="form.a"
                                    type="number"
                                    placeholder="请填写活动发布的份数">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>限购数量<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-input
                                    class="edit_input"
                                    v-model="form.a"
                                    type="number"
                                    placeholder="单一账号每天购买的份数，以24点为限">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>轮播位置<span class="required"></span></label>
                            <el-form-item prop="a">
                                <el-input
                                    class="edit_input"
                                    v-model="form.a"
                                    placeholder="请填写轮播位置，不填写默认随机">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>活动区域<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <el-select
                                v-model="form.b"
                                class="edit_input"
                                multiple
                                filterable
                                placeholder="请选择城市">
                                    <el-option
                                    v-for="item in cityList"
                                    :key="item.cityId"
                                    :label="item.cityName"
                                    :value="item.cityId">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form_item form_item2">
                            <label>参与企业<span class="required">(必填)</span>
                                <el-button
                                    type="primary"
                                    icon="el-icon-plus"
                                    plain
                                    style="height:32px;padding:0 12px;margin-left:12px;"
                                    @click="addEnt"
                                    >
                                    添加企业
                                </el-button>
                            </label>
                            <el-form-item prop="a">
                                <div class="entBox">
                                    <div class="item" v-for="item in entList" :key="item.id">
                                        {{item.name}}
                                        <i class="el-icon-close"></i>
                                    </div>
                                </div>
                            </el-form-item>
                        </div>
                        <div class="form_item form_item2">
                            <label>活动海报<span class="required">(必填)</span></label>
                            <el-form-item prop="a" style="width:320px;">
                                <el-upload
                                    class="avatar-uploader fl"
                                    v-model="form.pic"
                                    :action="uploadUrl + 'attachment/file/upload'"
                                    :show-file-list="false"
                                    :on-remove="removeUploadImg"
                                    :on-success="uploadSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="form.pic" :src="form.pic" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <p class="upload_tip">支持jpg/png格式小于2M，建议尺寸 680*180px</p>
                            </el-form-item>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form_item form_item2">
                            <label>活动详情<span class="required">(必填)</span></label>
                            <el-form-item prop="a">
                                <div id="editor"></div>
                                <!-- <vue-ueditor-wrap class="ueditor"
                                    v-model="form.content" :config="myConfig"
                                    :destroy="false">
                                </vue-ueditor-wrap> -->
                            </el-form-item>
                        </div>
                    </el-form>
                </div>
            </div>
            <div class="show_box">
                <!-- <div class="show_inner"> -->
                <el-scrollbar class="show_inner"  :style="{'padding-top':detailType==2?'25px':0,'height':detailType==2?'567px':'592px'}">
                    <!-- <img src=".././../../assets/img/jch_02.png" alt="" width="100%"> -->
                    <div class="home_detail" v-if="detailType===1">
                        <img src=".././../../assets/img/jch_02.png" alt="" width="100%">
                        <div class="show_cover" :class="{'opacity':form.pic}" >
                            <div class="show_banner">
                                <img :src="form.pic" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="home_detail"  v-if="detailType===2">
                        <div v-html="form.content" style="padding-right:17px;"></div>
                    </div>
                    <img src=".././../../assets/img/jch_04.png" class="select" :class="{noselect:detailType==2}">
                    <img src=".././../../assets/img/jch_05.png" @click="changeType" class="select" :class="{noselect:detailType==1}">
                </el-scrollbar>
                <!-- </div> -->
            </div>
        </div>
        <modal
            :title="'选择参与企业'"
            :width="550"
            :alert="showAlert"
            :modal-append-to-body="false"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alert_inner">
                <el-row class="sel">
                     <el-col :span="4">当前城市：</el-col>
                     <el-col :span="20">
                         <span
                            v-for="(city,index) in selCityList"
                            :key="city"
                            class="sel_item"
                            :class="{'active': cityIndex===index}"
                            @click="selectCity(index)">
                            {{city}}
                        </span>
                     </el-col>
                </el-row>
                <div class="border_box">
                    <el-input
                        placeholder="请输入"
                        suffix-icon="el-icon-search"
                        v-model="input6"
                        @keyup="searchEnt">
                    </el-input>
                    <ul>
                        <li v-for="item in entList" :key="item.id" class="ent_item">
                            <el-checkbox v-model="item.isSelect">{{item.name}}</el-checkbox>
                        </li>
                    </ul>
                </div>
                <el-checkbox v-model="selectAll" style="margin-top:5px;">全选</el-checkbox>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
// import { clearInterval } from 'timers';
// import { setTimeout } from 'timers';
// import VueUeditorWrap from 'vue-ueditor-wrap'
// import editor from '@/utils/wangEditor.js'
export default {
    name: 'marketingActivitiesDetail',
    data () {
        return {
            detailType: 1, // 预览首页or详情
            selectAll: false,
            entList: [
                {
                    isSelect: true,
                    name: '深圳超级骊维修汽车厂'
                },
                {
                    isSelect: false,
                    name: '弗洛伦蒂诺'
                },
                {
                    isSelect: false,
                    name: '奥特实体店4阿斯顿'
                }
            ],
            input6: '',
            uploadUrl: window.uploadURL,
            cityList: [],
            selCityList: ['深圳', '北京', '上海'],
            cityIndex: 0,
            showAlert: false,
            myConfig: {
                // 如果需要上传功能,找后端小伙伴要服务器接口地址
                serverUrl: window.uploadURL + 'attachment/file/upload',
                UEDITOR_HOME_URL: '/UEditor/',
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: 350,
                // 初始容器宽度
                initialFrameWidth: '100%',
                // 关闭自动保存
                enableAutoSave: false,
                imageActionName: 'uploadimage',
                imageFieldName: 'file',
                imageAllowFiles: ['.png', '.jpg', '.jpeg'],
                imageUrlPrefix: '',
                imageMaxSize: 1024000,
                videoActionName: 'uploadvideo',
                videoFieldName: 'file',
                videoUrlPrefix: '',
                videoMaxSize: 8192000,
                videoAllowFiles: ['.mp4', '.avi', 'ogg', 'rmvb', 'rm', 'wav'],
                fileActionName: 'uploadfile',
                fileFieldName: 'file',
                fileUrlPrefix: '',
                fileMaxSize: 8192000,
                fileAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg', '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid', '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml']
            },
            form: {
                a: '',
                pic: '',
                content: '',
                b: []
            }
        }
    },
    components: {
        // VueUeditorWrap,
        Modal
    },
    created () {
        // console.log(process.env)
    },
    mounted () {
        // console.log(window.wangEditor)
        var E = window.wangEditor
        var divv = new E('#editor')
        divv.customConfig.uploadImgServer = window.uploadURL + 'attachment/file/upload'
        divv.create()
        // 定时获取富文本的内容 并 预览
        this.timer = setInterval(() => {
            // console.log(1)
            this.form.content = divv.txt.html()
        }, 2000)
    },
    beforeDestroy () {
        clearInterval(this.timer)
    },
    methods: {
        goback () {
            this.$router.push('/marketingActivities')
        },
        changeType () {
            if (this.detailType === 1) {
                this.detailType = 2
            } else {
                this.detailType = 1
            }
        },
        // 远程搜索企业
        searchEnt () {
            console.log(123)
        },
        selectCity (index) {
            this.cityIndex = index
        },
        addEnt () {
            this.showAlert = true
        },
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        },
        // 上传之前
        beforeAvatarUpload (file) {
            const isJPG = /jpeg|png|gif/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/GIF/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        // 删除图片
        removeUploadImg (file, fileList) {
            this.form.pic = ''
            // console.log(file, fileList)
        },
        uploadSuccess (res) {
            this.form.pic = res.data
            // this.$refs.advertForm.validateField(['adPic'])
        }
    }
}
</script>
<style lang="less" scoped>
.marketingActivitiesDetail {
    min-width: 1200px;
    .ueditor {
        width: 690px;
        line-height: 20px;
        height: 300px;
    }
    .alert_inner {
        padding: 0 50px 10px;
        .sel {
            .sel_item {
                padding: 3px 5px;
                cursor: pointer;
                &.active {
                    background: #0088EE;
                    color: #ffffff;
                    border-radius: 5px;
                }
            }
        }
        .border_box {
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 4px;
            width: 400px;
            height: 220px;
            margin-top: 20px;
            padding: 15px 20px;
            .ent_item {
                margin-top: 10px;
            }
        }
    }
    .form {
        label {
            line-height: 36px;
            color: #262626;
        }
        .required {
            color: #8c8c8c;
            margin-left: 5px;
        }
        .form_item {
            margin-bottom: 10px;
        }
        .form_item2 {
            float: left;
        }
    }
    .iptWrap {
        // width: 1080px;
        width: calc(100% - 300px);
        .form_item {
            margin-right: 50px;
        }
        .entBox {
            height: 180px;
            width: 300px;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
            padding: 0 10px;
            .item {
                line-height: 28px;
            }
            i {
                color: red;
                cursor: pointer;
                margin-left: 10px;
            }
        }
        // .form_item:nth-child(3n) {
        //     margin-right: 0;
        // }
        .edit_input {
            width: 320px;
        }
    }
    .show_box {
        position: absolute;
        top: 100px;
        right: 32px;
        background: url(../../../assets/img/jch_01.png);
        background-size: 100% 100%;
        width: 366px;
        height: 652px;
        .show_inner {
            .el-scrollbar__wrap {
                padding-right: 0;
            }
            position: absolute;
            top: 20px;
            left: 31px;
            // background: url(../../../assets/img/jch_02.png);
            width: 304px;
            height: 592px;
            border-radius: 30px;
            overflow: hidden;
            overflow-x: hidden;
            overflow-y: auto;
            .select {
                position: absolute;
                cursor: pointer;
                bottom: 12px;
                right: 160px;
            }
            .noselect {
                right: 67px;
            }
            .home_detail {
                position: relative;
                // height: 592px;
                width: 100%;
                .show_cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    &.opacity {
                        background: rgba(0,0,0,0.5)
                    }
                }
                .show_banner {
                    position: absolute;
                    top: 250px;
                    img {
                        width: 100%;
                        height: 88px;
                    }
                }
                // .opacity {
                //     opacity: .5;
                //     filter: alpha(opacity=50);
                // }
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
    // .ueditor {
    //     width: 898px;
    //     line-height: 20px;
    //     height: 400px;
    // }
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
    .avatar-uploader, .avatar-uploader-tips {
        vertical-align: middle;
    }
    .avatar-uploader-tips {
        display: inline-block;
        width: 236px;
        margin-left: 16px;
        h6 {
            color:#778CA2;
            font-size: 14px;
        }
        p {
            color: #98A9BC;
            font-size: 12px;
            line-height: 22px;
        }
    }
    .upload_tip {
        float: left;
        margin-left: 10px;
        color: #8C8C8C;
        font-size: 12px;
    }
}
</style>
<style lang="less">
.marketingActivitiesDetail {
    .modal {
        z-index: 999;
    }
    .show_inner {
        .el-scrollbar__wrap {
            padding-right: 0;
        }
    }
    .avatar-uploader{
        height: 100px;
        display: inline-block;
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 90px;
            width: 340px;
            img {
                width:100%;
                height: 100%;
            }
        }
        .el-upload-list {
            position: absolute;
            bottom: -20px;
            left: 10px;
        }
        .el-upload:hover {
            border-color: #4D7CFE;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 340px;
            height: 90px;
            line-height: 90px;
            text-align: center;
        }
    }
    .form {
        .el-select {
            width: 100%;
        }
        .el-input__inner {
            width: 100%;
        }
        .el-date-editor{
            .el-range-input {
                width: 41%;
            }
        }
    }
    .alert-content {
        padding-top: 0;
    }
}
    .el-popover {
        height: 200px;
        overflow-y: scroll;
    }
</style>

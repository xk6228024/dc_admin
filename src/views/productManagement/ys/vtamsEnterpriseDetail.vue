<!-- 运营通告详情 -->
<template>
    <div class="cjlEnterpriseArchivesDetail detailPage" id="cjlEnterpriseArchivesDetail">
        <div class="detail_header">
            <el-button type="primary" @click="saveData" class="goBack btn" :disabled="!$checkAuth('operation:ent:edit')">保 存</el-button>
            <el-button class="btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content edit_content">
            <el-form :model="form" ref="form" class="form" :inline="true">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="配置信息" name="tab1">
                        <div class="detail_model">
                            <div class="clearfix">
                               <el-form-item label="管理员账号：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                    <el-input v-model="form.a" style="width:250px;"></el-input>
                                </el-form-item>
                                <el-form-item label="管理员密码：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                    <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                                    &nbsp;&nbsp;
                                    <el-button size="small">重置密码</el-button>
                                    &nbsp;
                                    <el-tooltip class="icon_item" effect="dark"  content="重置密码默认为：ycxc-888" placement="top">
                                        <img class="vam" src="../../../assets/img/tips.png">
                                    </el-tooltip>
                                </el-form-item>
                            </div>
                            <div class="clearfix">
                               <el-form-item label="管理员手机号码：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                    <el-input v-model="form.a" style="width:250px;"></el-input>
                                </el-form-item>
                                <el-form-item label="省平台企业编码：" label-width="170px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                                </el-form-item>
                            </div>
                            <div class="clearfix">
                               <el-form-item label="维护超期提醒时间：" label-width="170px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-date-picker
                                        v-model="form.value1"
                                        style="width:250px;"
                                        type="datetime"
                                        placeholder="选择日期时间">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="综合检测提醒时间：" label-width="170px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-date-picker
                                        v-model="form.value1"
                                        style="width:250px;"
                                        type="datetime"
                                        placeholder="选择日期时间">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="clearfix">
                               <el-form-item label="登录无操作限时" label-width="170px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                                </el-form-item>
                                <br>
                                <!-- <el-form-item label="综合检测提醒时间：" label-width="150px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                                </el-form-item> -->
                            </div>
                            <div class="clearfix">
                               <el-form-item label="异常登录错误次数：" label-width="170px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                                </el-form-item>
                                <el-form-item label="异常登录后限时登录：" label-width="170px" prop="marketAreaId" :rules="$validate({required:''})">
                                    <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="基础信息" name="tab2">
                        <div class="detail_model">
                            <el-form-item label="企业全称：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="所在城市：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-select v-model="form.marketAreaId" style="width:250px;" placeholder="请选择">
                                    <el-option
                                        v-for="item in list"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        clearable >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所在区/县：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-select v-model="form.marketAreaId" style="width:250px;" placeholder="请选择">
                                    <el-option
                                        v-for="item in list"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        clearable >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="社会信用编码：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="经济性质：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-select v-model="form.marketAreaId" style="width:250px;" placeholder="请选择">
                                    <el-option
                                        v-for="item in list"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        clearable >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="企业简称：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="许可证有效期：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-date-picker
                                    v-model="form.value1"
                                    style="width:250px;"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="营业开始时间：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-date-picker
                                    v-model="form.value1"
                                    style="width:250px;"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="经营许可证：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="负责人电话：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="负责人：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="业务电话：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="邮政编码：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人电话：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="经营范围：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮件：" label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <div>
                                <el-form-item label="企业概况："  label-width="170px" prop="marketAreaId" :rules="$validate({required:true})">
                                    <el-input v-model="form.a" type="textarea" :rows="2" style="width:680px;"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="拓展信息" name="tab3">
                        <h4>上传图片</h4>
                        <div class="detail_item">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <el-form-item prop="enterprisePicUrl">
                                <el-upload
                                    v-if="!form.imageUrl"
                                    class="avatar-uploader"
                                    :action="uploadUrl + 'attachment/file/upload'"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <!-- <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar"> -->
                                    <i class="el-icon-plus avatar-uploader-icon"></i>
                                     <!-- <i class="el-icon-error" @click="clearImage('enterpriseBusinessPermit')" ></i> -->
                                </el-upload>
                                <div v-else class="image-pic">
                                    <img :src="form.imageUrl"
                                    @click="$lookImg(form.entExtendDto.enterpriseBusinessPermit)" class="pic">
                                    <i class="el-icon-error"
                                    @click="clearImage('enterpriseBusinessPermit')" ></i>
                                </div>
                                <p> <span class="red">*</span> 营业执照</p>
                            </el-form-item>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <el-form-item prop="enterprisePicUrl">
                                <el-upload
                                    v-if="!form.imageUrl"
                                    class="avatar-uploader"
                                    :action="uploadUrl + 'attachment/file/upload'"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <!-- <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar"> -->
                                    <i class="el-icon-plus avatar-uploader-icon"></i>
                                     <!-- <i class="el-icon-error" @click="clearImage('enterpriseBusinessPermit')" ></i> -->
                                </el-upload>
                                <div v-else class="image-pic">
                                    <img :src="form.imageUrl"
                                    @click="$lookImg(form.entExtendDto.enterpriseBusinessPermit)" class="pic">
                                    <i class="el-icon-error"
                                    @click="clearImage('enterpriseBusinessPermit')" ></i>
                                </div>
                                <p> <span class="red">*</span> 经营许可证</p>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="法人代表：" label-width="130px" prop="marketAreaId" :rules="$validate({required:''})">
                                <el-input v-model="form.a" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="注册资金：" label-width="130px" prop="marketAreaId" :rules="$validate({required:''})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                            <el-form-item label="拥有车辆数量：" label-width="130px" prop="marketAreaId" :rules="$validate({required:''})">
                                <el-input v-model="form.a" type="number" style="width:250px;"></el-input>
                            </el-form-item>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cjlEnterpriseArchivesDetail',
    data () {
        return {
            uploadUrl: window.uploadURL,
            activeName: 'tab1',
            list: [],
            form: {
                imageUrl: ''
            }
        }
    },
    components: {
    },
    watch: {
    },
    created () {
        // this.findBrandList()
        // setTimeout(() => {
        //     console.dir(this.$refs.region._data.inputValue = '1111')
        // }, 10000)
    },
    methods: {
        handleRemove () {},
        clearImage () {
            this.form.imageUrl = ''
        },
        handleAvatarSuccess (res, file) {
            this.form.imageUrl = URL.createObjectURL(file.raw)
        },
        beforeAvatarUpload (file) {
            const isJPG = /jpeg|png/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isJPG) {
                this.$message.error('图片格式不支持')
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        saveData () {},
        close () {}
    },
    filters: {
    }
}
</script>
<style lang="less" scoped>
.cjlEnterpriseArchivesDetail {
    h4 {
        line-height: 60px;
    }
}
</style>
<style lang="less">
.cjlEnterpriseArchivesDetail {
     .el-tag {
        margin-right: 10px;
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
        width: 104px;
        height: 104px;
        line-height: 104px;
        text-align: center;
    }
    .avatar {
        width: 104px;
        height: 104px;
        display: block;
    }
    .upload_tips {
        // position: absolute;
        width: 104px;
        text-align: center;
        line-height: 20px;
        color: #98A9BC;
        font-size: 14px;
        top: 3px;
        left: 120px;
    }
    .el-tabs__header {
        line-height: 68px;
        margin: 0;
    }
    .BMap_mask {
        cursor: auto;
    }
    .el-upload {
        width: 120px;
        height: 95px;
        padding-top: 25px;
    }
    .el-upload--picture-card {
        width: 120px;
        height: 120px;
        line-height: 120px;
    }
    .el-upload-list--picture-card {
        display: inline-block;
        min-height: 131px;
        .el-upload-list__item {
            width: 118px;
            height: 118px;
            margin: 0 8px 0 0;
        }
    }
    .el-upload-list__item.is-success .el-upload-list__item-status-label {
        display: none;
    }
    .el-select {
        width: 80%;
        height: 32px;
        .el-input__inner {
            height: 32px;
        }
        &.multiple {
            height: auto;
        }
    }
    .el-date-editor {
        width: 80%;
        .el-range__close-icon {
            line-height: 26px;
        }
    }
    .el-dialog {
        min-height: 60%;
        text-align: center;
    }
    .el-cascader {
        line-height: 32px;
    }
}
#cjlEnterpriseArchivesDetail {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
.image-pic {
    padding: 8px;
    width: 104px;
    height: 104px;
    position: relative;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 10px;
    display: inline-block;
    margin-right: 20px;
    .pic {
        width: 100%;
        height: 100%;
    }
    .el-icon-error {
        position: absolute;
        top: 2px;
        left: 95px;
        font-size: 18px;
        cursor: pointer;
        display: none;
        background: #ececec;
        border-radius: 50%;
    }
    &:hover {
        .el-icon-error {
            display: block;
        }
    }
}
</style>

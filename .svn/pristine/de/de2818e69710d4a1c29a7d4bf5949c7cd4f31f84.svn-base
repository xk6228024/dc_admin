<!-- 运营通告详情 -->
<template>
    <div class="cjlCityOpenDetail detailPage">
        <div class="detail_header">
            <!-- <el-button type="primary" @click="toEdit" class="goBack btn" v-if="!edit && form.status === 0">编 辑</el-button> -->
            <el-button type="primary" @click="saveData" class="goBack btn" :disabled="!$checkAuth('cjl:cityConfigs:edit')&&$route.query.id">保 存</el-button>
            <!-- <el-button class="btn" v-if="form.status === 0 && !edit" @click="noticeOver">审核发布</el-button> -->
            <el-button class="btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content">
            <el-form :model="form" ref="form" class="form">
                <div class="detail_model">
                    <h4>开通城市信息</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>城市<span class="required">(必填)</span></label>
                            <el-form-item prop="areaIds"  :rules="$validate({required:true})">
                                 <el-cascader
                                    class="edit_input"
                                    placeholder="请选择"
                                    v-model="form.areaIds"
                                    clearable
                                    :options="allCityList"
                                    filterable>
                                </el-cascader>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>维护超期锁定<span class="required">(必填)</span></label>
                            <el-form-item prop="status"  :rules="$validate({required:true})">
                                <el-select class="edit_input" clearable v-model="form.status" placeholder="请选择">
                                    <el-option
                                    v-for="item in [{value:'close',label:'关闭'},{value:'open',label:'开通'}]"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>识别卡价格<span class="required">(必填)</span></label>
                            <el-form-item prop="rfidCardPrice"  :rules="$validate({required:true})">
                                <el-input
                                    class="edit_input"
                                    type="number"
                                    v-model="form.rfidCardPrice"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>服务支持人员<span class="required">(必填)</span></label>
                            <el-form-item prop="servicerName"  :rules="$validate({required:true})">
                                <el-input
                                    class="edit_input"
                                    maxlength="20"
                                    v-model="form.servicerName"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>服务支持电话<span class="required">(必填)</span></label>
                            <el-form-item prop="servicerTel"  :rules="$validate({required:true,type:'tel'})">
                                <el-input
                                    class="edit_input"
                                    maxlength="11"
                                    v-model="form.servicerTel"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>服务投诉电话<span class="required">(必填)</span></label>
                            <el-form-item prop="servicerComplaintTel"  :rules="$validate({required:true,type:'tel'})">
                                <el-input
                                    class="edit_input"
                                    maxlength="11"
                                    v-model="form.servicerComplaintTel"
                                    placeholder="">
                                </el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="line"></div>
                    <h4>二级维护合格证信息</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>合格证<span class="required">(必填)</span></label>
                            <el-form-item prop="certificateUrl"  :rules="$validate({required:true})">
                                <el-upload
                                    class="avatar-uploader"
                                    v-model="form.certificateUrl"
                                    :action="uploadUrl + 'attachment/file/upload'"
                                    :show-file-list="false"
                                    :on-success="uploadSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="form.certificateUrl" :src="form.certificateUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="upload_tips">
                                    支持jpg/png格式
                                    小于2M
                                </div>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>合格证封面<span class="required">(必填)</span></label>
                            <el-form-item prop="certificateCoverUrl"  :rules="$validate({required:true})">
                                <el-upload
                                    class="avatar-uploader"
                                    v-model="form.certificateCoverUrl"
                                    :action="uploadUrl + 'attachment/file/upload'"
                                    :show-file-list="false"
                                    :on-success="uploadSuccess1"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="form.certificateCoverUrl" :src="form.certificateCoverUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="upload_tips">
                                    支持jpg/png格式
                                    小于2M
                                </div>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>新版合格证<span class="required"></span></label>
                            <el-form-item prop="certificateNewUrl"  :rules="$validate({required:true})">
                                <el-upload
                                    class="avatar-uploader"
                                    v-model="form.certificateNewUrl"
                                    :action="uploadUrl + 'attachment/file/upload'"
                                    :show-file-list="false"
                                    :on-success="uploadSuccess2"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="form.certificateNewUrl" :src="form.certificateNewUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div class="upload_tips">
                                    支持jpg/png格式
                                    小于2M
                                </div>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cjlCityOpenDetail',
    data () {
        return {
            areaIds: [],
            allCityList: [],
            uploadUrl: window.uploadURL,
            form: {
                areaIds: [],
                status: '',
                servicerName: '',
                servicerTel: '',
                servicerComplaintTel: '',
                rfidCardPrice: '',
                certificateUrl: '',
                certificateCoverUrl: '',
                certificateNewUrl: ''
            }
        }
    },
    components: {
    },
    watch: {
    },
    created () {
        this.getAllCity()
        if (this.$route.query.id) {
            this.$get('product/cjl/cityConfigs/' + this.$route.query.id).then(res => {
                if (res.code === 0) {
                    res.data.areaIds = []
                    res.data.areaCode && res.data.areaIds.push(res.data.areaCode)
                    res.data.provinceCode && res.data.areaIds.push(res.data.provinceCode)
                    res.data.cityCode && res.data.areaIds.push(res.data.cityCode)
                    this.form = res.data
                }
            })
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
                    console.log(res.data)
                    this.allCityList = res.data
                }
            })
        },
        beforeAvatarUpload (file) {
            const isJPG = /jpeg|png/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        uploadSuccess (res) {
            this.form.certificateUrl = res.data
            this.$refs.form.validateField(['certificateUrl'])
        },
        uploadSuccess1 (res) {
            this.form.certificateCoverUrl = res.data
            this.$refs.form.validateField(['certificateCoverUrl'])
        },
        uploadSuccess2 (res) {
            this.form.certificateNewUrl = res.data
            this.$refs.form.validateField(['certificateNewUrl'])
        },
        saveData () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let obj = {
                        areaCode: this.form.areaIds[0],
                        provinceCode: this.form.areaIds[1],
                        cityCode: this.form.areaIds[2],
                        status: this.form.status,
                        servicerName: this.form.servicerName,
                        servicerTel: this.form.servicerTel,
                        servicerComplaintTel: this.form.servicerComplaintTel,
                        rfidCardPrice: this.form.rfidCardPrice,
                        certificateUrl: this.form.certificateUrl,
                        certificateCoverUrl: this.form.certificateCoverUrl,
                        certificateNewUrl: this.form.certificateNewUrl
                    }
                    let url = ''
                    if (!this.$route.query.id) {
                        url = 'product/cjl/cityConfigs/add'
                    } else {
                        url = 'product/cjl/cityConfigs/' + this.$route.query.id
                    }
                    this.$post(url, obj).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '保存成功'
                            })
                            this.$store.dispatch('closePage', {
                                nextPath: '/cjlCityOpen',
                                refresh: 'cjlCityOpen'
                            })
                        }
                    })
                }
            })
        },
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/cjlCityOpen',
                refresh: 'cjlCityOpen'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.cjlCityOpenDetail {
    .detail_item {
        box-sizing: border-box;
        padding-right: 60px;
        margin-bottom: 10px;
        .edit_input {
            width: 100%;
        }
    }
    .line {
        clear: both;
        height: 1px;
        width: 100%;
        background: #E8E8E8;
        margin: 30px 0;
    }
}
</style>
<style lang="less">
.cjlCityOpenDetail {
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
    .el-cascader {
        line-height: 32px;
    }
}
</style>

<template>
    <el-dialog width="650px" :title="!dataForm.carBrandId ? '新增二级品牌' : '修改二级品牌'" :close-on-click-modal="false" :visible.sync="visible" class="carbrandAddOrUpdate">
        <el-form :model="dataForm" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
            <el-form-item label="一级品牌" prop="parentId" :rules="$validate({required:true})">
                <el-select v-model="dataForm.parentId" filterable placeholder="请选择">
                    <el-option v-for="item in brandList" :key="item.nodeId" :label="item.nodeName" :value="item.nodeId">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌名称" prop="carBrandName" :rules="$validate({required:true,max:40})">
                <el-input v-model="dataForm.carBrandName" placeholder="品牌名称"></el-input>
            </el-form-item>
            <el-form-item label="首字母" prop="initial" :rules="$validate({required:true})">
                <!-- <el-input v-model="dataForm.initial"
          placeholder="首字母"></el-input> -->
                <el-select v-model="dataForm.initial" filterable placeholder="请选择首字母">
                    <el-option v-for="item in initialsOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="热门品牌" prop="isHot">
                <el-switch v-model="dataForm.isHot" active-text="是" inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="图片" prop="img">
                <el-upload class="upload-demo" :action="uploadUrl + 'attachment/file/upload'" :on-success="uploadSuccess" :on-remove="handleRemove" :before-upload="beforeAvatarUpload" :file-list="fileList" :show-file-list="false" accept="image/png, image/jpeg">
                    <img class="empty" v-show="!dataForm.img" src="../../../assets/images/img_photo.png" alt="品牌logo">
                    <img v-show="dataForm.img" width="158" height="158" ref="entLogoImg" :src="dataForm.img" alt="品牌logo">
                    <!-- <p class="upload-text">上传品牌logo</p> -->
                </el-upload>
            </el-form-item>
            <el-form-item label="排序" prop="sortOrder">
                <el-input-number v-model="dataForm.sortOrder" controls-position="right" :min="0" placeholder="排序" ></el-input-number>
            </el-form-item>
            <!-- <el-form-item label="是否注销"
        prop="status">
        <el-switch v-model="dataForm.status"
          active-text="是"
          inactive-text="否"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item> -->
            <el-form-item label="品牌区域" prop="brandArea">
                <el-select v-model="dataForm.brandArea" placeholder="品牌区域">
                    <el-option v-for="item in brandAreaOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取消</el-button>
            <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
        </span>
    </el-dialog>
</template>
<script>
// import Cookies from 'js-cookie'
export default {
    data () {
        return {
            brandList: [],
            uploadUrl: window.uploadURL,
            flagBol: false, // 防止重复提交
            fileList: [],
            brandLogoImg: '',
            visible: false,
            brandAreaOptions: [
                { label: '中国', value: 1 },
                { label: '德国', value: 2 },
                { label: '美国', value: 3 },
                { label: '日本', value: 4 },
                { label: '韩国', value: 5 },
                { label: '欧洲', value: 6 },
                { label: '其他', value: 7 }
            ],
            initialsOptions: [
                { label: 'A', value: 'A' },
                { label: 'B', value: 'B' },
                { label: 'C', value: 'C' },
                { label: 'D', value: 'D' },
                { label: 'E', value: 'E' },
                { label: 'F', value: 'F' },
                { label: 'G', value: 'G' },
                { label: 'H', value: 'H' },
                { label: 'I', value: 'I' },
                { label: 'J', value: 'J' },
                { label: 'K', value: 'K' },
                { label: 'L', value: 'L' },
                { label: 'M', value: 'M' },
                { label: 'N', value: 'N' },
                { label: 'O', value: 'O' },
                { label: 'P', value: 'P' },
                { label: 'Q', value: 'Q' },
                { label: 'R', value: 'R' },
                { label: 'S', value: 'S' },
                { label: 'T', value: 'T' },
                { label: 'U', value: 'U' },
                { label: 'V', value: 'V' },
                { label: 'W', value: 'W' },
                { label: 'X', value: 'X' },
                { label: 'Y', value: 'Y' },
                { label: 'Z', value: 'Z' }
            ],
            dataForm: {
                parentId: '',
                carBrandId: 0,
                carBrandName: '',
                initial: '',
                isHot: false,
                img: '',
                sortOrder: 0,
                brandArea: 7

            },
            dataRule: {
                carBrandName: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                initial: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                img: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    created () {
        // this.uploadURL = `sys/oss/upload?token=${Cookies.get('token')}`
        // this.$post('basVehicle/cars/1', {}).then(res => {
        //     if (res.code === 0) {
        //         this.brandList = res.data
        //         this.$refs['dataForm'].resetFields()
        //         if (this.dataForm.carBrandId) {
        //             this.getInfo()
        //         }
        //     }
        // })
    },
    methods: {
        getBrandList () {
            this.$post('basVehicle/cars/1', {}).then(res => {
                if (res.code === 0) {
                    this.brandList = res.data
                    this.$refs['dataForm'].resetFields()
                    if (this.dataForm.carBrandId) {
                        this.getInfo()
                    }
                }
            })
        },
        init () {
            this.flagBol = false
            this.visible = true
            this.getBrandList()
            // this.$refs['dataForm'].resetFields()
            this.$nextTick(() => {
                this.$refs['dataForm'].resetFields()
                // if (this.dataForm.carBrandId) {
                //     this.getInfo()
                // }
            })
        },
        // 获取信息
        getInfo () {
            this.$post('basVehicle/brandInfo', {
                vehicleBrandId: this.dataForm.carBrandId
            }).then(res => {
                if (res.code === 0) {
                    // console.log(data.entity)
                    // this.dataForm.carBrandId = res.data.carBrandId
                    this.dataForm.carBrandName = res.data.vehicleBrandName
                    this.dataForm.initial = res.data.vehicleBrandChar
                    this.dataForm.isHot = res.data.vehicleBrandHot === 1
                    this.dataForm.sortOrder = res.data.vehicleBrandOrder
                    // this.dataForm.status = data.entity.status === 1
                    this.dataForm.brandArea = res.data.vehicleBrandArea
                    let urlImg = res.data.vehicleBrandLogo
                    if (urlImg && urlImg.indexOf('http://') < 0 && urlImg.indexOf('https://') < 0) {
                        urlImg = 'http://' + urlImg
                    }
                    this.dataForm.parentId = res.data.vehicleBrandParentId
                    this.dataForm.img = urlImg
                }
            })
        },
        // 表单提交
        dataFormSubmit () {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    if (this.flagBol) return
                    this.flagBol = true
                    let url = ''
                    if (this.dataForm.carBrandId) {
                        url = 'basVehicle/editBrand'
                    } else {
                        url = 'basVehicle/saveBrand'
                    }
                    this.$post(url,
                        {
                            data: {
                                vehicleBrandId: this.dataForm.carBrandId,
                                vehicleBrandName: this.dataForm.carBrandName,
                                vehicleBrandChar: this.dataForm.initial,
                                vehicleBrandLevel: 2,
                                vehicleBrandHot: this.dataForm.isHot ? 1 : 0,
                                vehicleBrandParentId: this.dataForm.parentId,
                                vehicleBrandLogo: this.dataForm.img,
                                vehicleBrandOrder: this.dataForm.sortOrder,
                                vehicleBrandStatus: '',
                                vehicleBrandArea: this.dataForm.brandArea
                            }
                            // 'carBrandId': this.dataForm.carBrandId || undefined,
                            // 'carBrandName': this.dataForm.carBrandName,
                            // 'initial': this.dataForm.initial,
                            // 'isHot': this.dataForm.isHot ? 1 : 0,
                            // 'img': this.dataForm.img,
                            // 'sortOrder': this.dataForm.sortOrder,
                            // // 'status': this.dataForm.status ? 1 : 0,
                            // 'brandArea': this.dataForm.brandArea
                        }
                    ).then(data => {
                        if (data && data.code === 0) {
                            this.$message({
                                message: '操作成功',
                                type: 'success',
                                duration: 1500,
                                onClose: () => {
                                    this.visible = false
                                    this.$emit('refreshDataList')
                                }
                            })
                        } else {
                            this.flagBol = false
                            this.$message.error(data.msg)
                        }
                    })
                }
            })
        },
        // 图片
        uploadSuccess (res) {
            var radio = this.$refs.entLogoImg.offsetWidth / this.$refs.entLogoImg.offsetHeight
            var _this = this
            var img = new Image()
            img.src = res.data
            img.onload = function () {
                if (this.width / this.height > radio) {
                    _this.$refs.entLogoImg.style.width = '100%'
                } else {
                    _this.$refs.entLogoImg.style.height = '100%'
                }
                _this.dataForm.img = res.data
                _this.$message({
                    message: '图片上传成功！',
                    type: 'success'
                })
            }
        },
        // 图片清空
        handleRemove (file) {
            this.dataForm.img = ''
        },
        beforeAvatarUpload (file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
            const isLt2M = file.size / 1024 / 1024 < 1
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/PNG/JPG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 1MB!')
            }
            return isJPG && isLt2M
        }
    }
}
</script>
<style lang="less">
.el-input-number.is-controls-right .el-input-number__increase {
    margin-top: 1px;
}
.el-input-number.is-controls-right .el-input-number__decrease {
    bottom: 2px;
}
</style>

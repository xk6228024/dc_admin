<!-- 权限管理 -->
<template>
    <div class="regulator">
        <breadcrumb :breadList="['系统设置', '监管系统开通']">
            <el-button class="fr mt17" type="primary" @click="showAlert = true">开通监管系统</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%;min-height:550px;">
                <!-- <el-table-column
                type="selection"
                width="55">
                </el-table-column> -->
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="60">
                </el-table-column>
                <el-table-column
                prop="areaNames"
                align="left"
                width="100"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                width="120"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="sysTitle"
                align="left"
                label="监管端标题">
                </el-table-column>
                <el-table-column
                prop="associationName"
                align="left"
                label="协会端标题">
                </el-table-column>
                <el-table-column
                prop="domainId"
                align="left"
                label="上传省网接口">
                </el-table-column>
                <el-table-column
                align="left"
                prop="time"
                width="100"
                label="创建时间">
                    <template slot-scope="scope">
                        {{(new Date(scope.row.createTime) - 0) | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                width="100"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="eidtDetail(scope.row)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">编辑</el-button>
                        <!-- <el-button @click="deleteRole({
                            roleName: scope.row.roleName,
                            roleIds: [scope.row.roleId]
                        })" type="text" size="small" :disabled="!$checkAuth('sys:role:delete')">删除</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <modal
            :title="'开通监管权限'"
            :width="950"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon ref="addForm" label-width="140px" class="form clearfix">
                <!-- <el-form-item label="角色名：" prop="alertRole">
                    <el-input v-model="ruleForm.alertRole" placeholder="请输入角色名称"></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="alertRemark">
                    <el-input v-model="ruleForm.alertRemark" placeholder="请输入备注名称"></el-input>
                </el-form-item> -->
                <div class="clearfix">
                    <div class="form_left">
                        <el-form-item label="选择城市:" class="h36" prop="city" :rules="$validate({required:true})">
                            <el-select class="small_input" v-model="ruleForm.province"  placeholder="请请选择">
                                <el-option
                                v-for="item in provinceList"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                                </el-option>
                            </el-select>
                            <el-select style="margin-left:20px;" class="small_input" v-model="ruleForm.city" placeholder="请选择">
                                <el-option
                                v-for="item in cityList"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="监管端前缀:" class="h36" prop="domain" :rules="$validate({required:true,max:16,type:'EN.'})">
                            <el-input class="w300_input2" v-model="ruleForm.domain" type="text">
                                <template slot="append">.qxjgxt.com</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="监管端标题:" class="h36" prop="sysTitle" :rules="$validate({required:true,max:36})">
                            <el-input class="w300_input" v-model="ruleForm.sysTitle" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="监管端英文名称:" class="h36" prop="sysTitleEn" :rules="$validate({required:true,max:90,type:'ENS'})">
                            <el-input class="w300_input" type="text" v-model="ruleForm.sysTitleEn"></el-input>
                        </el-form-item>
                        <el-form-item label="监管端LOGO:" class="" prop="sysLogo" :rules="$validate({required:true})">
                            <el-upload
                                class="avatar-uploader"
                                v-model="ruleForm.sysLogo"
                                :action="uploadUrl + 'attachment/file/upload'"
                                :show-file-list="false"
                                :on-success="uploadSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="ruleForm.sysLogo" :src="ruleForm.sysLogo" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span class="upload_tips">尺寸：64*64</span>
                        </el-form-item>
                        <el-form-item label="监管端账号:" class="h36" prop="username" :rules="$validate({required:true,max:14,type:'EN'})">
                            <el-input class="w300_input" v-model="ruleForm.username" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="上传省网:" class="h36" prop="isOpen" :rules="$validate({required:true})">
                            <template>
                                <el-radio v-model="ruleForm.isOpen" label="是">是</el-radio>
                                <el-radio v-model="ruleForm.isOpen" label="否">否</el-radio>
                            </template>
                            <!-- <el-input class="" v-model="ruleForm.alertRole" type="text" style="width:638px;"></el-input> -->
                        </el-form-item>
                        <!-- <el-form-item label="数据上传地址:" prop="alertRole">
                            <el-input class="w300_input" v-model="ruleForm.alertRole" type="text"></el-input>
                        </el-form-item> -->
                    </div>
                    <div class="form_right">
                        <el-form-item label="协会端前缀:" class="h36" prop="associationDomain" :rules="$validate({required:true,max:8,type:'EN.'})">
                            <el-input class="w300_input2" v-model="ruleForm.associationDomain" type="text">
                                <template slot="append" style="width:50px;">.qxxhxt.com</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="协会端标题:" class="h36" prop="associationName" :rules="$validate({required:true,max:36})">
                            <el-input class="w300_input" v-model="ruleForm.associationName" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="协会端英文名称:" class="h36" prop="associationNameEn" :rules="$validate({required:true,max:90,type:'ENS'})">
                            <el-input class="w300_input" v-model="ruleForm.associationNameEn" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="协会端副标题:" class="h36" prop="associationOrderName" :rules="$validate({required:true,max:50})">
                            <el-input class="w300_input" v-model="ruleForm.associationOrderName" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="协会端LOGO:" prop="associationLogo" :rules="$validate({required:true})">
                            <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl + 'attachment/file/upload'"
                                :show-file-list="false"
                                :on-success="uploadSuccess2"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="ruleForm.associationLogo" :src="ruleForm.associationLogo" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span class="upload_tips">尺寸：60*60</span>
                        </el-form-item>
                        <el-form-item label="监管端密码:" class="h36" prop="password" :rules="$validate({required:true,max:8,min:6,type:'EN'})">
                            <el-input class="w300_input" v-model="ruleForm.password" type="text"></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="数据登录地址:" prop="alertRole">
                            <el-input class="w300_input" v-model="ruleForm.alertRole" type="text"></el-input>
                        </el-form-item> -->
                    </div>
                </div>
                <div class="clearfix" style="margin-top:10px;" v-show="ruleForm.isOpen==='是'">
                    <el-form-item label="数据上传地址:" prop="uploadDataUrl" class="form_left">
                        <el-input class="w300_input" v-model="ruleForm.uploadDataUrl" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="数据登录地址:" prop="uploadLoginUrl" class="form_right">
                        <el-input class="w300_input" v-model="ruleForm.uploadLoginUrl" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="企业备案地址:" prop="uploadRegisterpUrl" class="fl">
                        <el-input style="width:775px;" v-model="ruleForm.uploadRegisterpUrl" type="text"></el-input>
                    </el-form-item>
                </div>
                <!-- <el-form-item label="上传省网接口:" prop="alertRole" style="clear:both;padding-top:20px;">
                    <template>
                        <el-radio v-model="radio" label="1">是</el-radio>
                        <el-radio v-model="radio" label="2">否</el-radio>
                    </template>
                </el-form-item> -->
            </el-form>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'regulator',
    data () {
        return {
            uploadUrl: window.uploadURL,
            allCityList: [], // 全部城市列表
            provinceList: [], // 省列表
            cityList: [], // 城市列表
            searchText: '',
            radio: '1',
            imageUrl: '',
            value: '',
            options: [
                {
                    value: 1,
                    label: '深圳'
                }
            ],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            ruleForm: {
                uploadLoginUrl: '',
                city: '',
                sysLogo: '',
                uploadDataUrl: '',
                sysTitle: '',
                provinceRegionId: '',
                associationNameEn: '',
                associationOrderName: '',
                username: '',
                isOpen: '',
                associationLogo: '',
                associationDomain: '',
                domain: '',
                uploadRegisterpUrl: '',
                password: '',
                associationName: '',
                sysTitleEn: ''
            },
            tableData: []
        }
    },
    watch: {
        'ruleForm.province' (id) {
            // console.log(id)
            this.getCityList2(id)
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getList()
        this.getCityList()
        // console.log(this.$validate({required:true,max:16,type:'EN'}))
    },
    methods: {
        uploadSuccess (res) {
            console.log(res)
            this.ruleForm.sysLogo = res.data
        },
        uploadSuccess2 (res) {
            console.log(res)
            this.ruleForm.associationLogo = res.data
        },
        // 获取省列表
        getCityList (id) {
            this.areaId = id
            this.$get('list/regionProvinceList').then(res => {
                if (res.code === 0) {
                    this.allCityList = res.data
                    this.provinceList = res.data.filter(e => {
                        return e.regionType === 1
                    })
                }
            })
        },
        // 获取城市列表
        getCityList2 (id) {
            this.cityList = this.allCityList.filter(e => {
                return id === e.parentId
            })
        },
        // 获取列表数据
        getList () {
            this.$get('vmts/cityParam/list', {
                size: this.pageSize,
                page: this.pageNum
            })
                .then(res => {
                    if (res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                })
        },
        eidtDetail (info) {
            this.eiditId = info.domainId
            this.$get('vmts/cityParam/info?domainId=' + info.domainId)
                .then(res => {
                    if (res.code === 0) {
                        this.ruleForm = res.data
                        this.ruleForm.associationDomain = this.ruleForm.associationDomain.replace('.qxxhxt.com', '')
                        this.ruleForm.domain = this.ruleForm.domain.replace('.qxjgxt.com', '')
                        console.log(this.ruleForm.associationDomain)
                        // console.log(this.ruleForm)
                        this.allCityList.forEach(e => {
                            if (e.regionId === res.data.city) {
                                this.ruleForm.province = e.parentId
                            }
                        })
                        this.regin1 = res.data.sysAreaId
                        this.regin2 = res.data.regionProvinceId
                    }
                })
            this.showAlert = true
        },
        handleAvatarSuccess () {},
        beforeAvatarUpload () {},
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getList()
        },
        alertCancel () {
            this.ruleForm = {
                uploadLoginUrl: '',
                city: '',
                sysLogo: '',
                uploadDataUrl: '',
                sysTitle: '',
                provinceRegionId: '',
                associationNameEn: '',
                associationOrderName: '',
                username: '',
                isOpen: '',
                associationLogo: '',
                associationDomain: '',
                domain: '',
                uploadRegisterpUrl: '',
                password: '',
                associationName: '',
                sysTitleEn: ''
            }
            this.eiditId = ''
            this.showAlert = false
        },
        alertConfirm () {
            // this.showAlert = false
            this.$refs['addForm'].validate((valid) => {
                if (valid) {
                    if (!this.eiditId) {
                        this.$post('vmts/cityParam/add', {
                            uploadLoginUrl: this.ruleForm.uploadLoginUrl,
                            city: this.ruleForm.city,
                            sysLogo: this.ruleForm.sysLogo,
                            uploadDataUrl: this.ruleForm.uploadDataUrl,
                            sysTitle: this.ruleForm.sysTitle,
                            provinceRegionId: this.ruleForm.provinceRegionId,
                            associationNameEn: this.ruleForm.associationNameEn,
                            associationOrderName: this.ruleForm.associationOrderName,
                            username: this.ruleForm.username,
                            province: this.ruleForm.province,
                            isOpen: this.ruleForm.isOpen,
                            associationLogo: this.ruleForm.associationLogo,
                            associationDomain: this.ruleForm.associationDomain + '.qxxhxt.com',
                            domain: this.ruleForm.domain + '.qxjgxt.com',
                            uploadRegisterpUrl: this.ruleForm.uploadRegisterpUrl,
                            password: this.ruleForm.password,
                            associationName: this.ruleForm.associationName,
                            sysTitleEn: this.ruleForm.sysTitleEn
                        }).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.getList()
                                this.alertCancel()
                            }
                        })
                    } else {
                        this.$post('vmts/cityParam/edit', {
                            domainId: this.eiditId,
                            uploadLoginUrl: this.ruleForm.uploadLoginUrl,
                            city: this.ruleForm.city,
                            sysLogo: this.ruleForm.sysLogo,
                            uploadDataUrl: this.ruleForm.uploadDataUrl,
                            sysTitle: this.ruleForm.sysTitle,
                            provinceRegionId: this.ruleForm.provinceRegionId,
                            associationNameEn: this.ruleForm.associationNameEn,
                            associationOrderName: this.ruleForm.associationOrderName,
                            username: this.ruleForm.username,
                            isOpen: this.ruleForm.isOpen,
                            province: this.ruleForm.province,
                            associationLogo: this.ruleForm.associationLogo,
                            associationDomain: this.ruleForm.associationDomain + '.qxxhxt.com',
                            domain: this.ruleForm.domain + '.qxjgxt.com',
                            uploadRegisterpUrl: this.ruleForm.uploadRegisterpUrl,
                            password: this.ruleForm.password,
                            associationName: this.ruleForm.associationName,
                            sysTitleEn: this.ruleForm.sysTitleEn
                        }).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.getList()
                                this.alertCancel()
                            }
                        })
                    }
                } else {
                    this.$alert('请填写正确的信息！')
                    return false
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.regulator {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        .upload_tips {
            position: absolute;
            color: #98A9BC;
            font-size: 14px;
            top: 3px;
            left: 120px;
        }
        .form_left {
            width: 50%;
            float: left;
        }
        .form_right {
            width: 50%;
            float: left;
        }
    }
}
</style>
<style lang='less'>
.regulator {
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w300_input {
        width: 300px;
        .el-input__inner {
            width: 300px;
        }
    }
    .w300_input2 {
        width: 300px;
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
}
</style>

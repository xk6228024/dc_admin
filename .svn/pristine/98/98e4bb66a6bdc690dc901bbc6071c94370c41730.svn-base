<!-- 运营通告 -->
<template>
    <div class="operateServiceRecord" id="operateServiceRecord">
        <breadcrumb>
            <label for="">所在城市：</label>
            <!-- <el-input class="search-text" v-model="searchText" placeholder="请输入标题名称"></el-input> -->
            <el-select
            class="search-text"
            v-model="searchCity"
            clearable
            filterable
            placeholder="请选择城市">
                <el-option-group
                v-for="region in cityList"
                :key="region.id"
                :label="region.areaName">
                    <el-option
                        v-for="city in region.cityDto"
                        :key="city.regionId"
                        :label="city.areaName"
                        :value="city.regionId">
                    </el-option>
                </el-option-group>
            </el-select>
            <label for="">服务企业：</label>
            <el-input class="search-text" clearable v-model="searchText" placeholder="请输入服务企业"></el-input>
            <el-button class="search" @click="search">查 询</el-button>
            <el-button type="primary" class="search fr mt17" icon="el-icon-plus"
            @click="add">新 建</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="showLoading"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="4%">
                </el-table-column>
                <el-table-column
                prop="bigAreaName"
                align="left"
                min-width="5%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="5%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="regionName"
                align="left"
                min-width="5%"
                label="地区">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="服务企业">
                </el-table-column>
                <el-table-column
                prop="enterpriseBusinessCategoryName"
                align="left"
                min-width="5%"
                label="企业经营类别">
                </el-table-column>
                <el-table-column
                prop="enterpriseUser"
                align="left"
                min-width="5%"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="enterpriseMobile"
                align="left"
                min-width="5%"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="serviceRecordType"
                align="left"
                min-width="5%"
                label="服务类型">
                    <template slot-scope="scope">
                        {{scope.row.serviceRecordType|recordTypeFilter}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="serviceRecordPerson"
                align="left"
                min-width="5%"
                label="服务人员">
                    <template slot-scope="scope">
                        {{scope.row.serviceRecordPerson|personFilter}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="serviceRecordTime"
                align="left"
                min-width="5%"
                label="服务日期">
                    <template slot-scope="scope">
                        {{scope.row.serviceRecordTime|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(1,scope.row.serviceRecordId)" type="text" size="small">编辑</el-button>
                        <el-button @click="goDetail(2,scope.row.serviceRecordId)" type="text" size="small">查看</el-button>
                        <el-button @click="deleteData(scope.row.serviceRecordId)" type="text" size="small">删除</el-button>
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
            :title="form.serviceRecordId?'编辑运营服务记录':'新建运营服务记录'"
            :width="900"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="form" ref="marketAreaForm" label-width="146px" class="form clearfix">
                <div class="clearfix">
                    <div class="form_item">
                        <el-form-item prop="enterpriseId" label="服务企业：" :rules="$validate({required:true,msg:'请选择企业'})">
                            <el-select
                                v-model="form.enterpriseId"
                                class="form_input"
                                filterable
                                remote
                                clearable
                                reserve-keyword
                                placeholder="请输入关键词"
                                @focus="remoteMethod('')"
                                @change="searchListChange"
                                :remote-method="remoteMethod"
                                :loading="searchLoading">
                                <el-option
                                v-for="item in searchList"
                                :key="item.enterpriseId"
                                :label="item.enterpriseName"
                                :value="item.enterpriseId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="enterpriseAddress" label="企业地址：">
                            <el-input
                                class="form_input"
                                disabled
                                v-model.trim="form.enterpriseAddress"
                                placeholder="">
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="serviceRecordTime" label="服务日期：" :rules="$validate({required:true})">
                            <el-date-picker
                                value-format="timestamp"
                                class="form_input"
                                v-model="form.serviceRecordTime"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="serviceRecordType" label="服务类型：" :rules="$validate({required:true})">
                            <el-select clearable class="form_input" ref="focus_input" v-model="form.serviceRecordType">
                                <el-option
                                    v-for="item in recordType"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="serviceRecordPerson" label="服务人员：" :rules="$validate({required:true})">
                            <el-select clearable class="form_input" @change="personChange" ref="" filterable v-model="form.serviceRecordPerson">
                                <el-option
                                    v-for="item in personList"
                                    :key="item.areaUserId"
                                    :label="item.areaUserName"
                                    :disabled="item.isDelete === 2"
                                    :value="item.areaUserId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="accompanyUsers2" label="同行人员：" >
                            <el-select clearable class="form_input" multiple v-model="form.accompanyUsers2">
                                <el-option
                                    v-for="item in personList2"
                                    :key="item.areaUserId + '1'"
                                    :label="item.areaUserName"
                                    :disabled="item.isDelete === 2"
                                    :value="item.areaUserId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="servicePicUrl" label="现场合照(1张)：" :rules="$validate({required:true})">
                            <el-upload
                                class="avatar-uploader"
                                v-model="form.servicePicUrl"
                                :action="uploadUrl + 'attachment/file/upload'"
                                :show-file-list="false"
                                :on-success="uploadSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="form.servicePicUrl" :src="form.servicePicUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span class="upload_tips">
                                支持jpg/png格式<br/>
                                小于2M
                            </span>
                        </el-form-item>
                    </div>
                    <div class="form_item">
                        <el-form-item prop="serviceRecordFile" label="服务记录单(1张)：" :rules="$validate({required:true})">
                            <el-upload
                                class="avatar-uploader"
                                v-model="form.serviceRecordFile"
                                :action="uploadUrl + 'attachment/file/upload'"
                                :show-file-list="false"
                                :on-success="uploadSuccess2"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="form.serviceRecordFile" :src="form.serviceRecordFile" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span class="upload_tips">
                                支持jpg/png格式<br/>
                                小于2M
                            </span>
                        </el-form-item>
                    </div>
                </div>
                <div class="form_item2">
                    <el-form-item prop="remark" label="备注：">
                        <el-input
                            class="form_input2"
                            maxlength="50"
                            type="textarea"
                            rows="2"
                            v-model.trim="form.remark"
                            placeholder="请输入">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="form_item">
                    <el-form-item prop="isWorkUser" label="" >
                        <el-checkbox v-model="form.isWorkUser" :true-label="1" :false-label="2" :checked="form.isWorkUser==1">将服务人员绑定为这家企业的运营服务人员</el-checkbox>
                    </el-form-item>
                </div>
            </el-form>
        </modal>
        <modal
            :title="'查看运营服务记录'"
            :width="800"
            :showBtn="false"
            :alert="showAlert2"
            @alertCancel="alertCancel2">
            <div class="detail_box clearfix">
                <div class="clearfix">
                    <div class="clearfix">
                        <div class="detail_item">
                            <label for="">服务企业：</label>
                            <span>{{form.enterpriseName}}</span>
                        </div>
                        <div class="detail_item">
                            <label for="">服务地址：</label>
                            <span>{{form.enterpriseAddress}}</span>
                        </div>
                    </div>
                    <div class="detail_item">
                        <label for="">服务日期：</label>
                        <span>{{form.serviceRecordTime | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">服务类型：</label>
                        <span>{{form.serviceRecordType | recordTypeFilter}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">服务人员：</label>
                        <span>{{form.serviceRecordPerson | personFilter}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">同行人员：</label>
                        <span>{{form.accompanyUsers | personFilter}}</span>
                    </div>
                    <div class="detail_item">
                        <label for="">现场合照：</label>
                        <img v-if="form.servicePicUrl" class="img_with_border" width="88" height="88" :src="form.servicePicUrl" @click="$lookImg(form.servicePicUrl)">
                        <img v-else class="img_with_border" width="88" height="88" src="../../../assets/images/img_photo.png">
                    </div>
                    <div class="detail_item">
                        <label for="">服务记录单：</label>
                        <img v-if="form.serviceRecordFile" class="img_with_border" width="88" height="88" :src="form.serviceRecordFile" @click="$lookImg(form.serviceRecordFile)">
                        <img v-else class="img_with_border" width="88" height="88" src="../../../assets/images/img_photo.png">
                    </div>
                </div>
                <div class="detail_item2">
                    <label for="">备注：</label>
                    <span>{{form.remark}}</span>
                </div>
                <div class="detail_item2">
                    <label for="">该服务人员是否为这家企业的运营服务人员：</label>
                    <span>{{form.isWorkUser==1?'是':'否'}}</span>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
let personList = []
let recordType = [
    // {
    //     label: '回访',
    //     value: '1'
    // },
    {
        label: '复训',
        value: '2'
    },
    {
        label: '拜访',
        value: '3'
    },
    {
        label: '初装培训',
        value: '4'
    }
]
export default {
    name: 'operateServiceRecord',
    data () {
        return {
            chargeId: '', // 綁定运营的id
            showLoading: false,
            recordType: [
                // {
                //     label: '回访',
                //     value: '1'
                // },
                {
                    label: '复训',
                    value: '2'
                },
                {
                    label: '拜访',
                    value: '3'
                },
                {
                    label: '初装培训',
                    value: '4'
                }
            ],
            personList: [],
            personList2: [],
            showAlert2: false,
            cityList: [],
            searchCity: '',
            checked: false, // 多选
            uploadUrl: window.uploadURL,
            searchList: [], // 企业列表
            searchLoading: false,
            total: 0,
            searchText: '',
            pageNum: 1,
            pageSize: 10,
            showAlert: false,
            multipleSelection: [],
            registerSource: [],
            dataSource: [],
            region: [],
            userId: '',
            form: {
                accompanyUsers: '',
                isWorkUser: 2,
                accompanyUsers2: [],
                areaUserName: '',
                bigAreaName: '',
                cityName: '',
                createTime: '',
                enterpriseAddress: '',
                enterpriseBusinessCategory: '',
                enterpriseBusinessCategoryName: '',
                enterpriseId: '',
                enterpriseMobile: '',
                enterpriseName: '',
                enterpriseType: '',
                enterpriseUser: '',
                regionName: '',
                remark: '',
                servicePicUrl: '',
                serviceRecordCity: '',
                serviceRecordFile: '',
                serviceRecordId: '',
                serviceRecordPerson: '',
                serviceRecordRegion: '',
                serviceRecordTime: '',
                serviceRecordType: '',
                serviceRecordTypeName: ''
            },
            ruleForm: {
                alertUser: '' // 服务人员
            },
            tableData: [
            ]
        }
    },
    filters: {
        personFilter (val) {
            // console.log(val)
            // console.log(personList)
            let str = []
            let valList = val.split(',')
            // console.log(valList)
            personList.forEach(element => {
                valList.forEach(e => {
                    if (element.areaUserId === e) {
                        str.push(element.areaUserName)
                    }
                })
            })
            // console.log(str)
            return str.join(',')
        },
        recordTypeFilter (val) {
            let str = ''
            recordType.forEach(e => {
                if (val - 0 === e.value - 0) {
                    str = e.label
                }
            })
            return str
        }
    },
    watch: {
        'form.serviceRecordPerson' (val) {
            if (val) {
                this.personList2 = JSON.parse(JSON.stringify(this.personList))
                this.personList2.forEach((e, index) => {
                    if (e.areaUserId === val) {
                        this.personList2.splice(index, 1)
                    }
                })
                if (this.form.accompanyUsers2) {
                    this.form.accompanyUsers2.forEach((e, index) => {
                        if (e === val) {
                            this.form.accompanyUsers2.splice(index, 1)
                            console.log(this.form.accompanyUsers2)
                        }
                    })
                }
            }
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    computed: {
    },
    created () {
        this.$post('/workUser/allName', {
            areaUserId: ''
        }).then(res => {
            personList = res.data
            this.personList = res.data
            this.personList2 = JSON.parse(JSON.stringify(res.data))
            this.getDataList()
        })
        this.$post('/workUser/city/allocateArea').then(res => {
            this.cityList = res.data
        })
    },
    methods: {
        personChange (val) {
            if (val === this.chargeId) {
                this.$set(this.form, 'isWorkUser', 1)
            } else {
                this.$set(this.form, 'isWorkUser', 2)
            }
        },
        aaaa () {
            console.log(111)
        },
        deleteData (id) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('workService:delete')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$confirm('确定删除该条服务记录吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$get('/workService/delete?serviceRecordId=' + id).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }).catch(() => {})
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
            this.form.servicePicUrl = res.data
        },
        uploadSuccess2 (res) {
            this.form.serviceRecordFile = res.data
        },
        // 下来搜索查询
        remoteMethod (query) {
            // console.log('1???')
            // if (!query) {
            //     return
            // }
            this.searchLoading = true
            this.$get('workService/ents?enterpriseName=' + query).then(res => {
                this.searchList = res.data || []
                this.searchLoading = false
            })
        },
        searchListChange (val) {
            // console.log(val)
            this.searchList.forEach(e => {
                if (e.enterpriseId === val) {
                    this.form.enterpriseAddress = e.enterpriseAddr
                    this.form.enterpriseName = e.enterpriseName
                    this.chargeId = e.areaUserId || ''
                    // console.log(e.areaUserId, this.form.serviceRecordPerson)
                    if (e.areaUserId === this.form.serviceRecordPerson) {
                        this.$set(this.form, 'isWorkUser', 1)
                    } else {
                        this.$set(this.form, 'isWorkUser', 2)
                    }
                }
            })
        },
        add () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('workService:add')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$set(this.form, 'accompanyUsers2', [])
            this.form.serviceRecordId = ''
            this.showAlert = true
        },
        regionChange () {},
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        // 获取通告列表
        getDataList () {
            this.showLoading = true
            this.$post('workService/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                enterpriseName: this.searchText,
                regionId: this.searchCity
            })
                .then(res => {
                    this.showLoading = false
                    if (res.code === 0) {
                        this.total = res.total
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    }
                })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        },
        // 新增用户弹窗确认
        alertConfirm () {
            this.$refs['marketAreaForm'].validate((valid) => {
                if (valid) {
                    let url = ''
                    if (this.form.serviceRecordId) {
                        url = 'workService/update'
                    } else {
                        url = 'workService/add'
                    }
                    this.form.accompanyUsers = this.form.accompanyUsers2.join(',')
                    this.$post(url, this.form)
                        .then(res => {
                            if (res.code === 0) {
                                this.getDataList()
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.alertCancel()
                            }
                        })
                } else {
                    this.$alert('请选择必填项！')
                    return false
                }
            })
        },
        // 新增用户弹窗关闭
        alertCancel () {
            this.ruleForm = {
                alertRadio: 1,
                alertConfirmPsw: '',
                alertPassword: '',
                alertUser: '',
                checkedRoleList: []
            }
            this.$refs['marketAreaForm'].resetFields()
            this.userId = ''
            this.showAlert = false
        },
        alertCancel2 () {
            this.showAlert2 = false
            this.$refs['marketAreaForm'].resetFields()
        },
        // 用户编辑
        goDetail (type, id) {
            if (type === 1) {
                // 权限校验**********************************************************
                if (!this.$checkAuth('workService:edit')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
            } else {
                // 权限校验**********************************************************
                if (!this.$checkAuth('workService:detail')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
            }
            this.$post('/workService/detail', {
                serviceRecordId: id
            }).then(res => {
                if (res.code === 0) {
                    // if (res.data.isWorkUser === 1) {
                    //     this.$set(this.form, 'isWorkUser', 1)
                    // } else {
                    //     this.$set(this.form, 'isWorkUser', 2)
                    // }
                    this.form = res.data
                    this.chargeId = res.data.serviceRecordPerson || ''
                    if (type === 1) {
                        this.showAlert = true
                        this.$set(this.form, 'accompanyUsers2', this.form.accompanyUsers ? this.form.accompanyUsers.split(',') : [])
                        this.$get('workService/ents?enterpriseName=' + this.form.enterpriseName).then(res => {
                            this.searchList = res.data || []
                        })
                    } else {
                        this.showAlert2 = true
                    }
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
#operateServiceRecord {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        // padding-right: 52px;
        // height: 108px;
        border-bottom: 1px solid #d9d9d9;
        padding-right: 4%;
        .form_item {
            width: 48%;
            float: left;
            margin-bottom: 25px;
            .form_input {
                width: 100%;
            }
            .form_input2 {
                width: 680px;
            }
        }
        .form_item2 {
            margin-bottom: 20px;
        }
    }
    .detail_box {
        // border-bottom: 1px solid #d9d9d9;
        padding-right: 4%;
        .detail_item {
            float: left;
            width: 48%;
            margin-bottom: 20px;
            overflow: hidden;
            label {
                // display: inline-block;
                float: left;
                width: 130px;
                text-align: right;
                color: #252631;
            }
            span {
                color: #595959;
                float: left;
                width: 230px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            img {
                vertical-align: top;
                cursor: pointer;
            }
        }
        .detail_item2 {
            margin-bottom: 20px;
            padding-left: 70px;
            label {
                color: #252631;
            }
            span {
                color: #595959
            }
        }
    }
    .model {
        .el-input .el-input__suffix-inner .el-input__icon {
            line-height: 36px;
        }
    }
}
</style>
<style lang="less">
.operateServiceRecord {
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
        position: absolute;
        color: #98A9BC;
        font-size: 14px;
        top: 3px;
        left: 120px;
    }
}
</style>

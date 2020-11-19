<!-- 权限管理 -->
<template>
    <div class="servicePersonal clearfix" id="servicePersonal">
        <breadcrumb :breadList="['系统设置', '外延设备管理']">
            <!-- <label for="">员工名称:</label> -->
            <el-input class="search-text" v-model="searchText" placeholder="请输入员工姓名"></el-input>
            <el-button class="search" type="primary" @click="search">查 询</el-button>
            <el-button class="fr mt17" type="primary" icon="el-icon-plus" @click="add">新 建</el-button>
            <el-button class="fr mt17" type="primary" @click="exportData">导 出</el-button>
        </breadcrumb>
        <div class="market" style="background:#fff;">
            <el-tree :data="data" :highlight-current="highlight" @node-click="nodeClick" :props="defaultProps"></el-tree>
        </div>
        <div class="table" style="background:#fff;">
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
                min-width="10%">
                </el-table-column>
                <el-table-column
                prop="workNo"
                align="left"
                label="工号"
                min-width="15%">
                </el-table-column>
                <el-table-column
                prop="areaUserName"
                align="left"
                min-width="10%"
                label="员工姓名">
                </el-table-column>
                <el-table-column
                prop="userGrade"
                align="left"
                min-width="10%"
                label="人员级别">
                    <template slot-scope="scope">
                        {{scope.row.userGrade | userGradeFilter }}
                    </template>
                </el-table-column>
                <el-table-column
                prop="parentUserName"
                align="left"
                min-width="10%"
                label="上级主管">
                    <template slot-scope="scope">
                        {{scope.row.parentUserName}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="areaUserPhone"
                align="left"
                min-width="15%"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="entryTime"
                align="left"
                min-width="15%"
                label="入职日期">
                    <template slot-scope="scope">
                        {{scope.row.entryTime | filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="20%"
                label="备注">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="15%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="eidtDetail(scope.row.areaUserId)" type="text" size="small">编辑</el-button>
                        <el-button @click="deleteUser(scope.row.areaUserId)" type="text" size="small">删除</el-button>
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
            :title="areaUserId ? '编辑运营人员信息' : '新建运营人员信息'"
            :width="900"
            :height="470"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon ref="addForm" label-width="120px" class="form clearfix">
                <el-row :gutter="0">
                    <el-col :span="12">
                        <el-form-item label="员工姓名:" prop="areaUserName" :rules="$validate({required:true})">
                            <el-input class="w280_input" maxlength="20" v-model="ruleForm.areaUserName" placeholder="请输入">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="所在城市:" prop="city" :rules="$validate({required:true})">
                            <el-select
                            class="w280_input"
                            v-model="ruleForm.city"
                            filterable
                            placeholder="请选择城市">
                                <el-option-group
                                v-for="(val, index) in data2"
                                :key="index"
                                :label="val.areaName">
                                    <el-option
                                        v-for="item in val.cityDto"
                                        :key="item.regionId"
                                        :label="item.areaName"
                                        :value="item.regionId">
                                    </el-option>
                                </el-option-group>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="人员级别:" prop="userGrade" :rules="$validate({required:true})">
                            <el-select class="w280_input" v-model="ruleForm.userGrade" placeholder="请选择">
                                <el-option
                                v-for="item in userGradeList"
                                :key="item.value"
                                :label="item.label"
                                clearable
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="主管上级:" prop="parentUserId">
                            <el-select class="w280_input" clearable v-model="ruleForm.parentUserId" placeholder="请选择">
                                <el-option
                                v-for="item in workUserList"
                                :key="item.areaUserId"
                                :label="item.areaUserName"
                                clearable
                                :value="item.areaUserId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="员工工号:" prop="workNo">
                            <el-input type="number" class="w280_input" maxlength="30" v-model="ruleForm.workNo" placeholder="请输入">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="联系电话:" prop="areaUserPhone" :rules="$validate({required:false, type:'phone'})">
                            <el-input class="w280_input" maxlength="11" v-model="ruleForm.areaUserPhone" placeholder="请输入">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="入职日期:" prop="entryTime">
                            <el-date-picker
                            class="w280_input"
                            v-model="ruleForm.entryTime"
                            type="date"
                            value-format="timestamp"
                            placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="备注:" prop="remark">
                            <el-input type="textarea"
                            :rows="2" class="w280_input" maxlength="50" v-model="ruleForm.remark" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="照片:" prop="userAvatar">
                            <el-upload
                                v-if="!ruleForm.userAvatar"
                                class="image-upload"
                                :accept="'image/png,image/jpeg'"
                                :show-file-list="false"
                                :action="uploadURL + 'attachment/file/upload'"
                                :on-success="handleSuccess"
                                :before-upload="beforeUpload">
                                <i class="el-icon-plus"></i>
                                <p>上传</p>
                            </el-upload>
                            <div v-else class="image-pic">
                                <img :src="ruleForm.userAvatar" @click="$lookImg(ruleForm.userAvatar)" class="pic">
                                <i class="el-icon-error" @click="clearImage"></i>
                            </div>
                            <p class="image-upload-tips">支持jpg/png格式<br>小于2M</p>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import fileDownload from 'js-file-download'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'servicePersonal',
    data () {
        return {
            copyData: '',
            data: [],
            showLoading: false,
            uploadURL: window.uploadURL,
            searchText: '',
            areaUserId: '',
            regionList: {}, // 大区和城市
            selectRegionId: '', // 已选择的城市ID
            workUserList: [],
            highlight: true,
            userGradeList: [
                {
                    value: 1,
                    label: '普通运营'
                },
                {
                    value: 2,
                    label: '运营主管'
                },
                {
                    value: 3,
                    label: '区域经理'
                }
            ],
            data2: [],
            defaultProps: {
                children: 'cityDto',
                label: 'areaName'
            },
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            ruleForm: {
                workNo: '', // 工号
                areaUserName: '', // 员工姓名
                parentUserId: '', // 主管上级
                userGrade: '', // 人员级别
                areaUserPhone: '', // 手机号
                entryTime: '', // 入职时间
                city: '', // 城市
                remark: '', // 备注
                userAvatar: '' // 用户照片
            },
            tableData: []
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getRegionList()
        this.getRegionList2()
        // this.getAllRegionList()
        this.getWorkUserList()
    },
    watch: {
        'ruleForm.userGrade' (val) {
            // console.log(val)
            this.getWorkUserList(val)
            // val && (this.ruleForm.parentUserId = '')
        }
    },
    methods: {
        exportData () {
            this.$get('/workUser/export', {}, { responseType: 'arraybuffer' }).then(res => {
                console.log(res.size)
                if (res.size > 100) {
                    let content = res
                    let elink = document.createElement('a')
                    elink.download = '运营人员表' + '.xlsx'
                    elink.style.display = 'none'
                    let blob = new Blob([content])
                    elink.href = URL.createObjectURL(blob)
                    document.body.appendChild(elink)
                    elink.click()
                    document.body.removeChild(elink)
                } else {
                    this.$msg({
                        type: 'error',
                        message: '登录超时，请重新登录'
                    })
                }
            })
            // let href = `${window.uploadURL}workUser/export?areaUserName=${this.searchText || ''}&city=${this.selectRegionId || ''}`
            // window.open(href)
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getList()
        },
        add () {
            if (!this.$checkAuth('workUser:add')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.showAlert = true
        },
        // 获取城市列表
        getAllRegionList (id) {
            this.$get('list/regionProvinceList').then(res => {
                if (res.code === 0) {
                    // this.allCityList = res.data
                    let arr = []
                    let obj = {}
                    res.data.forEach(e => {
                        if (e.regionType === 1) {
                            arr.push(e)
                        }
                    })
                    arr.forEach(i => {
                        i.children = []
                        res.data.forEach(e => {
                            if (i.regionId === e.parentId) {
                                i.children.push(e)
                            }
                        })
                    })
                    arr.forEach(item => {
                        obj[item.regionName] = item.children
                    })
                    this.regionList = obj
                    // console.log(this.regionList)
                }
            })
        },
        // 获取城市列表
        getRegionList (id) {
            this.$post('workUser/city/allocateArea').then(res => {
                if (res.code === 0) {
                    this.data2 = res.data
                }
            })
        },
        getRegionList2 () {
            this.$post('/workUser/area').then(res => {
                if (res.code === 0) {
                    this.data = res.data || []
                    this.data.unshift({
                        areaName: '全国区域',
                        regionId: 'all'
                    })
                }
            })
        },
        // 获取人员列表
        getWorkUserList (userGrade) {
            // this.showLoading = true
            this.$post('/workUser/boss', {
                parentUserId: '',
                userGrade: userGrade + 1
            }).then(res => {
                if (res.code === 0) {
                    this.workUserList = res.data
                    !this.copyData && (this.copyData = JSON.parse(JSON.stringify(res.data)))
                    !userGrade && this.getList()
                    if (userGrade) {
                        let hasTop = this.workUserList.find(e => {
                            return e.areaUserId === this.ruleForm.parentUserId
                        })
                        if (!hasTop) this.ruleForm.parentUserId = ''
                    }
                }
            })
        },
        // exportData () {

        // },
        // 获取列表数据
        getList (regionId) {
            this.showLoading = true
            this.$post('/workUser/workUserList?page=' + this.pageNum + '&size=' + this.pageSize, {
                areaUserName: this.searchText,
                city: this.selectRegionId
            })
                .then(res => {
                    this.showLoading = false
                    if (res.code === 0) {
                        // console.log(this.copyData)
                        this.copyData.forEach(user => {
                            res.data.forEach(item => {
                                if (user.areaUserId === item.areaUserId) {
                                    item.areaUserName = user.areaUserName
                                }
                                if (user.areaUserId === item.parentUserId) {
                                    item.parentUserName = user.areaUserName
                                }
                            })
                        })
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                }).catch(() => {
                    this.showLoading = false
                })
        },
        // 详情编辑
        eidtDetail (areaUserId) {
            if (!this.$checkAuth('workUser:edit')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.areaUserId = areaUserId
            this.$post('/workUser/detail', {
                areaUserId
            })
                .then(res => {
                    if (res.code === 0) {
                        this.ruleForm = res.data
                    }
                })
            this.showAlert = true
        },
        // 删除人员
        deleteUser (areaUserId) {
            if (!this.$checkAuth('workUser:delete')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$confirm('确定删除该人员吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$get(`/workUser/delete?areaUserId=${areaUserId}`)
                    .then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                            this.getRegionList()
                            this.getWorkUserList()
                            this.$store.dispatch('delCache', ['operateServiceRecord', 'evaluateFeedback', 'performanceStatistics'])
                        }
                    })
            }).catch(() => {
            })
        },
        handleSuccess (res, file, fileList) {
            if (res.data) {
                this.$set(this.ruleForm, 'userAvatar', res.data)
            } else {
                this.$alert('服务器错误，上传失败')
            }
        },
        beforeUpload (file) {
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
        // 清除图片
        clearImage () {
            this.$set(this.ruleForm, 'userAvatar', '')
        },
        nodeClick (node) {
            this.pageNum = 1
            // console.log(node)
            if (node.regionId === this.selectRegionId) {
                this.selectRegionId = ''
                this.highlight = false
                this.search()
                return
            }
            if (node.regionId && node.regionId !== 'all') {
                this.selectRegionId = node.regionId
                this.highlight = true
                this.search()
            } else if (node.regionId === 'all') {
                this.selectRegionId = ''
                this.highlight = true
                this.search()
            } else {
                this.highlight = false
                this.selectRegionId = ''
            }
        },
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getList()
        },
        alertConfirm () {
            this.$refs['addForm'].validate((valid) => {
                if (valid) {
                    let obj = JSON.parse(JSON.stringify(this.ruleForm))
                    obj.areaUserId = this.areaUserId || ''
                    let url = ''
                    if (obj.areaUserId) {
                        url = 'workUser/update'
                    } else {
                        url = 'workUser/add'
                    }
                    this.$post(url, obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.alertCancel()
                                this.getRegionList()
                                // this.getRegionList2()
                                this.getWorkUserList()
                                this.$store.dispatch('delCache', ['operateServiceRecord', 'evaluateFeedback', 'performanceStatistics'])
                            }
                        })
                } else {
                    this.$alert('请填写正确的员工信息！')
                    return false
                }
            })
        },
        alertCancel () {
            this.areaUserId = ''
            this.$refs.addForm.resetFields()
            // this.getWorkUserList()
            this.showAlert = false
        }
    },
    filters: {
        userGradeFilter (type) {
            if (type === 1) {
                return '普通运营'
            }
            if (type === 2) {
                return '运营主管'
            }
            if (type === 3) {
                return '区域经理'
            }
        }
    }
}
</script>

<style lang='less' scoped>
#servicePersonal {
    min-height: 100%;
    position: relative;
    .table {
        margin-top: 0;
        border-top: 20px solid #f0f2f5;
        padding: 30px;
        margin-left: 260px;
        margin-right: 0;
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
    .market {
        width: 240px;
        padding: 30px 0;
        position: absolute;
        top: 70px;
        left:0;
        bottom: 0;
        border-top: 20px solid #F0F2F5;
        border-right: 20px solid #F0F2F5;
        overflow-y: auto;
    }
    .image-upload {
        width: 102px;
        height: 102px;
        border: 1px dashed #c0ccda;
        border-radius: 4px;
        line-height: 20px;
        background: #fbfdff;
        transition: all .2s;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        &:hover {
            border: 1px dashed #4D7CFE;
        }
        .el-icon-plus {
            font-size: 30px;
            color: #8c939d;
        }
    }
    .image-upload-tips {
        display: inline-block;
        color: #8C8C8C;
        font-size: 12px;
        margin: 16px;
        line-height: 20px;
    }
    .image-pic {
        padding: 8px;
        width: 92px;
        height: 92px;
        position: relative;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        display: inline-block;
        .pic {
            width: 100%;
            height: 100%;
        }
        .el-icon-error {
            position: absolute;
            top: 4px;
            left: 86px;
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
    .image-upload, .image-pic {
        vertical-align: middle;
    }
}
.modal {
    .el-row {
        margin-bottom: 24px;
    }
}
</style>
<style lang='less'>
#servicePersonal {
    .small_input {
        margin-right: 10px;
        .el-input__inner {
            width: 100px;
        }
    }
    .w280_input {
        width: 280px;
    }
    .el-upload {
        width: 102px;
        height: 76px;
        padding-top: 26px;
    }
    .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
        background: #4D7CFE;
        color: #fff;
        .el-tree-node__expand-icon {
            color: #fff;
            &.is-leaf {
                color: transparent;
            }
        }
    }
    .el-tree-node__content {
        height: 50px;
        line-height: 50px;
        color: #262626;
    }
    .el-tree > .el-tree-node > .el-tree-node__content {
        padding-left: 18px !important;
    }
    .el-input__icon {
        resize: none;
    }
    .el-form .el-form-item__label {
        color: #262626;
    }
    .el-textarea__inner {
        resize: none;
    }
}
.el-select-group__title {
    padding-left: 8px !important;
}
</style>

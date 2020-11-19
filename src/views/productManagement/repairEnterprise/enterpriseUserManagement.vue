<!-- 企业用户管理 -->
<template>
    <div class="enterpriseUserManagement" id="enterpriseUserManagement">
        <breadcrumb :breadList="['维修企业服务系统', '企业用户管理']">
            <label>选择城市：</label>
            <el-cascader
            placeholder="请选择"
            v-model="region"
            clearable
            :options="allCityList"
            change-on-select
            filterable></el-cascader>
            <label>维修企业：</label>
            <el-input class="search-text" clearable v-model="searchUser" placeholder="企业名称"></el-input>
            <label>注册渠道：</label>
            <el-select
                clearable
                v-model="registerSource">
                <el-option
                v-for="item in dataSource"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button class="search" @click="search">查 询</el-button>
            <el-dropdown
            trigger="click" class="fr mt17" @command="batchOperation"
            :placement="'top'" :disabled="!multipleSelection.length">
                <el-button >
                    批量选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="'disabled'">禁用</el-dropdown-item>
                    <el-dropdown-item :command="'enable'">启用</el-dropdown-item>
                    <el-dropdown-item :command="'setUser'">设置服务人员</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="showLoading"
                @selection-change="handleSelectionChange"
                style="width: 100%;">
                <el-table-column
                type="selection"
                align="left"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="provinceName"
                align="left"
                min-width="8%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="8%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="entFullName"
                align="left"
                min-width="15%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="注册时间">
                    <template slot-scope="scope">
                        {{scope.row.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="loginDate"
                align="left"
                min-width="10%"
                label="最近登录时间">
                    <template slot-scope="scope">
                        {{scope.row.loginDate|filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="phone"
                align="left"
                min-width="8%"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="contactPersion"
                align="left"
                min-width="8%"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="sourceName"
                align="left"
                min-width="5%"
                label="注册渠道">
                </el-table-column>
                <el-table-column
                prop="workUser"
                align="left"
                min-width="8%"
                label="运营服务人员">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="5%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.entId)" type="text" size="small">查看</el-button>
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
            :title="'设置服务人员'"
            :width="560"
            :height="316"
            :showBtn='true'
            :alert="setUserAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" ref="marketAreaForm" label-width="146px" class="form">
                <el-form-item label="服务人员：" prop="alertUser" :rules="$validate({required:true})">
                    <el-select v-model="ruleForm.alertUser" style="width:100%;dsplay:inline-block;" filterable  placeholder="请选择">
                        <el-option
                        v-for="item in personList"
                        :key="item.areaUserId"
                        :label="item.areaUserName"
                        :value="item.areaUserId">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </modal>
    </div>
</template>

<script>
import axios from 'axios'
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import { setNum } from '@/utils/utils.js'
export default {
    name: 'enterpriseUserManagement',
    data () {
        return {
            showLoading: false,
            allCityList: [],
            personList: [],
            total: 0,
            searchUser: '',
            pageNum: 1,
            pageSize: 10,
            setUserAlert: false,
            multipleSelection: [],
            registerSource: '',
            dataSource: [
                {
                    value: 0,
                    label: 'PC端'
                },
                {
                    value: 1,
                    label: '移动端'
                }
            ],
            region: [],
            props: {
                lazy: true,
                value: 'regionId',
                label: 'regionName',
                lazyLoad (node, resolve) {
                    const { level, value } = node
                    if (level === 0) {
                        axios.get('list/regionProvinceList?type=1').then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = false
                            })
                            resolve(res.data.data)
                        })
                    }
                    if (level === 1) {
                        axios.get('list/regioncityList?provinceRegionId=' + value).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = true
                            })
                            resolve(res.data.data)
                        })
                    }
                    if (level === 2) {
                        axios.get('list/regionList?cityId=' + value).then(res => {
                            res.data.data.forEach(item => {
                                item.leaf = true
                            })
                            resolve(res.data.data)
                        })
                    }
                }
            },
            userId: '',
            ruleForm: {
                alertUser: '' // 服务人员
            },
            tableData: []
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    computed: {
    },
    created () {
        this.getDataList()
        this.$post('/workUser/name', {
            areaUserId: ''
        }).then(res => {
            this.personList = res.data
        })
        this.getAllCity()
    },
    methods: {
        getAllCity () {
            this.$get('list/regionProvinceList').then(res => {
                // this.allCityList = res.data
                if (res.code === 0) {
                    let arr = []
                    res.data.forEach(e => {
                        if (e.regionType === 1) {
                            e.children = []
                            e.label = e.regionName
                            e.value = e.regionId
                            arr.push(e)
                            res.data.forEach(m => {
                                if (m.parentId === e.regionId) {
                                    m.label = m.regionName
                                    m.value = m.regionId
                                    e.children.push(m)
                                }
                            })
                        }
                    })
                    this.allCityList = arr
                }
            })
        },
        changeStatus (val) {
            console.log(val)
        },
        resetPassword () {
            console.log(this.userId)
            this.$post('user/resetpass', {
                sysUserId: this.userId
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '密码重置成功！'
                    })
                }
            })
        },
        regionChange () {},
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        // 获取用户列表
        getDataList () {
            this.showLoading = true
            // console.log(this.region)
            let region = ''
            let province = ''
            if (this.region && this.region.length === 1) province = this.region[0]
            if (this.region && this.region.length === 2) region = this.region[1]
            this.$post('/entUserManager/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                city: region,
                province: province,
                entFullName: this.searchUser,
                source: this.registerSource
            })
                .then(res => {
                    if (res.code === 0) {
                        this.total = res.total
                        this.tableData = setNum(res.data || [], this.pageNum, this.pageSize)
                    }
                    this.showLoading = false
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
        // 表格多选事件
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        // 批量操作
        batchOperation (val) {
            let arr = this.multipleSelection.map(e => {
                return e.entId
            })
            if (!arr.length) {
                this.$msg({
                    type: 'error',
                    message: '请选择企业'
                })
                return
            }
            if (val === 'setUser') {
                this.setUserAlert = true
            }
            if (val === 'disabled') {
                this.$post('entUserManager/closeOpenUser', {
                    status: 1,
                    ids: arr,
                    serviceUser: ''
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }
            if (val === 'enable') {
                this.$post('entUserManager/closeOpenUser', {
                    status: 0,
                    ids: arr,
                    serviceUser: ''
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }
        },
        // 新增用户弹窗确认
        alertConfirm () {
            let arr = this.multipleSelection.map(e => {
                return e.dcEntId
            })
            this.$refs['marketAreaForm'].validate((valid) => {
                if (valid) {
                    this.$post('entUserManager/closeOpenUser', {
                        status: 3,
                        ids: arr,
                        serviceUser: this.ruleForm.alertUser
                    }).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '操作成功'
                            })
                            this.getDataList()
                            this.setUserAlert = false
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
            this.setUserAlert = false
        },
        // 用户编辑
        goDetail (enterpriseId) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('entUserManager:detail')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('/entUserManagedetail?id=' + enterpriseId)
        }
    }
}
</script>

<style lang='less' scoped>
#enterpriseUserManagement {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        padding-right: 52px;
        height: 108px;
        border-bottom: 1px solid #d9d9d9;
        padding-top: 44px;
    }
    .model {
        .el-input .el-input__suffix-inner .el-input__icon {
            line-height: 36px;
        }
    }
}
</style>
<style lang="less">
#enterpriseUserManagement {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

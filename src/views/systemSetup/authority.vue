<!-- 权限管理 -->
<template>
    <div class="authority">
        <breadcrumb :breadList="['系统设置', '权限管理']">
            <el-input class="search-text" v-model="searchUser" placeholder="请输入角色名称" size="small"></el-input>
            <el-button class="search" @click="pageNum=1;pageSize=10;findRoleList()" size="small">查 询</el-button>
            <el-button class="fr mt17" type="primary" icon="el-icon-plus" @click="addRule" size="small">新增角色</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                @selection-change="handleSelectionChange"
                v-loading="showLoading"
                style="width: 100%;min-height:550px;">
                <!-- <el-table-column
                type="selection"
                align="left"
                width="55">
                </el-table-column> -->
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="roleName"
                align="left"
                label="角色名称">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="角色描述">
                </el-table-column>
                <el-table-column
                align="left"
                width="200"
                label="创建时间">
                    <template slot-scope="scope">
                        {{(new Date(scope.row.createTime) - 0) | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                width="150"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.roleType !== 1" @click="roleEdit(scope.row, 2)" type="text" size="small">编辑</el-button>
                        <el-button v-if="scope.row.roleType !== 1" @click="roleEdit(scope.row, 1)" type="text" size="small">权限</el-button>
                        <el-button v-if="scope.row.roleType !== 1" @click="deleteRole(scope.row)" type="text" size="small">删除</el-button>
                        <!-- <el-button @click="deleteRole({
                            roleName: scope.row.roleName,
                            roleIds: [scope.row.sysRoleId]
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
            :title="'添加角色权限'"
            :width="800"
            :alert="addRoleAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" ref="marketAreaForm" label-width="150px" class="form">
                <el-form-item label="角色名：" prop="alertRole"  :rules="$validate({required:true,max:16})">
                    <el-input v-model="ruleForm.alertRole" placeholder="请输入角色名称" class="lh40"></el-input>
                </el-form-item>
                <el-form-item label="数据可见范围：" :rules="$validate({required:true})">
                    <el-radio v-model="radio" label="1">全部</el-radio>
                    <el-radio v-model="radio" label="2">选定城市</el-radio>
                    <div v-show="radio==2" style="margin-top:10px;">
                        <el-select
                        style="width:100%;dsplay:inline-block;"
                        v-model="ruleForm.city"
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
                    </div>
                </el-form-item>
                <el-form-item label="角色描述：" prop="alertRemark"  :rules="$validate({max:36})" style="padding-top:10px;">
                    <el-input type="textarea" style="" v-model="ruleForm.alertRemark" placeholder="请输入备注名称" class="lh40"></el-input>
                </el-form-item>
            </el-form>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import { setNum } from '@/utils/utils.js'
export default {
    name: 'authority',
    data () {
        return {
            showLoading: false,
            radio: '1',
            cityList: [],
            total: 0,
            searchUser: '',
            pageNum: 1,
            pageSize: 10,
            value2: true,
            addRoleAlert: false,
            roleId: '', // 当前角色ID
            roleAllCheckd: false, // 角色功能全选
            regionAllCheckd: false, // 区域功能全选
            ruleForm: {
                alertRole: '', // 添加角色名称
                alertRemark: '', // 添加角色备注
                city: []
            },
            multipleSelection: [],
            tableData: [
            ]
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.findRoleList()
        // this.getMarketData()
        this.findCityList()
        // this.$msg({
        //     type: 'error',
        //     message: '你没有该项权限'
        // })
    },
    watch: {
        radio (val) {
            console.log(val)
            if (val - 0 === 1) {
                this.ruleForm.city = []
            }
        },
        'ruleForm.city' (val) {
            if (val.length) {
                this.radio = '2'
            }
        }
    },
    methods: {
        addRule () {
            if (!this.$checkAuth('permission:addRole')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.addRoleAlert = true
        },
        findCityList () {
            this.$get('comm/citys/dc', {})
                .then(res => {
                    res.data.shift()
                    this.cityList = res.data
                })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.findRoleList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.findRoleList()
        },
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        // 获取角色列表
        findRoleList () {
            this.showLoading = true
            this.$get('permission/roleList', {
                page: this.pageNum,
                size: this.pageSize,
                roleName: this.searchUser
            })
                .then(res => {
                    this.showLoading = false
                    if (res.code === 0) {
                        this.total = res.total
                        this.tableData = setNum(res.data, this.pageNum, this.pageSize)
                    }
                })
        },
        // 批量删除
        // batchDelete () {
        //     this.deleteRole({
        //         roleIds: this.multipleSelection.map(item => {
        //             return item.sysRoleId
        //         })
        //     })
        // },
        // 删除角色
        deleteRole ({ roleName, sysRoleId }) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('permission:deleteRole')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$myAlert({
                title: '删除',
                msg: `确定删除${roleName ? `角色 "${roleName}" ` : '已选中角色'}吗？`,
                type: 'waring'
            }).then(() => {
                this.$post('permission/deleteRole', {
                    ids: [sysRoleId]
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.findRoleList()
                            if (res.result) {
                                this.$alert(res.result, '提示')
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                            }
                            this.$store.dispatch('delCache', ['userManagement'])
                        }
                    })
            }).catch(() => {})
        },
        // 角色弹窗确认
        alertConfirm () {
            this.$refs.marketAreaForm.validate((valid) => {
                if (valid) {
                    let url, msg
                    let obj = {
                        roleName: this.ruleForm.alertRole,
                        remark: this.ruleForm.alertRemark,
                        cityPermissions: ''
                    }
                    // console.log(this.ruleForm)
                    if (this.radio - 0 === 1) {
                        obj.cityPermissions = 'ALL'
                    } else {
                        obj.cityPermissions = this.ruleForm.city.join(',')
                    }
                    if (this.roleId) {
                        obj.sysRoleId = this.roleId
                        url = 'permission/editRole'
                        msg = '编辑成功！'
                    } else {
                        url = 'permission/addRole'
                        msg = '添加成功！'
                    }
                    this.$post(url, obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                this.findRoleList()
                                this.$store.dispatch('delCache', ['userManagement'])
                            }
                            this.alertCancel()
                        })
                } else {
                    this.$alert('请输入完整信息！', '提示')
                    return false
                }
            })
        },
        // 角色弹窗关闭
        alertCancel () {
            this.roleId = ''
            this.ruleForm.alertRole = ''
            this.ruleForm.alertRemark = ''
            this.ruleForm.city = []
            this.radio = '1'
            this.addRoleAlert = false
            this.$refs['marketAreaForm'].resetFields()
        },
        // 角色查看编辑
        roleEdit (item, type) {
            if (type === 1) {
                // 权限校验**********************************************************
                if (!this.$checkAuth('permission:bindpermission')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
                this.$router.push('/authorityDetail?id=' + item.sysRoleId)
                return
            }
            // 权限校验**********************************************************
            if (!this.$checkAuth('permission:editRole')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.addRoleAlert = true
            this.roleId = item.sysRoleId
            this.ruleForm.alertRole = item.roleName
            this.ruleForm.alertRemark = item.remark
            if (!item.cityPermissions || item.cityPermissions === 'ALL') {
                this.radio = '1'
            } else {
                this.radio = '2'
                this.ruleForm.city = item.cityPermissions.split(',')
            }
        }
    }
}
</script>

<style lang='less' scoped>
.authority {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        padding-right: 80px;
        .tree {
            width: 240px;
            height: 320px;
            display: inline-block;
            background: #fff;
            border: 1px solid #E8ECEF;
            border-radius: 4px;
            &:last-child {
                margin-left: 86px;
            }
            .tree-header {
                padding: 0 10px;
                height: 32px;
                border-bottom: 1px solid #E8ECEF;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tree-header-title {
                    color: #778CA2;
                    font-size: 14px;
                }
            }
            .el-tree {
                height: 280px;
                overflow: auto;
            }
        }
    }
}
</style>
<style lang='less'>
.authority {
    .lh40 {
        .el-input__inner {
            height: 40px!important;
        }
    }
}
</style>

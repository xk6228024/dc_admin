<!-- 运营短信管理 -->
<template>
    <div class="messageManagement" id="messageManagement">
        <breadcrumb>
            <el-input class="search-text" v-model="searchText" placeholder="请输入标题"></el-input>
            <el-button class="search" @click="search">查 询</el-button>
            <el-button type="primary" class="search fr mt17" icon="el-icon-plus" @click="addNotice">新建短信</el-button>
            <el-button class="search fr mt17" @click="setUserAlert=true">模版维护</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="noticeTitle"
                align="left"
                min-width="300"
                label="短信接收方">
                </el-table-column>
                <el-table-column
                prop="noticeTitle"
                align="left"
                min-width="300"
                label="短信内容">
                </el-table-column>
                <el-table-column
                prop="startTime"
                align="left"
                min-width="150"
                label="发送日期">
                    <template slot-scope="scope">
                        {{scope.row.startTime|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="userName"
                align="left"
                min-width="150"
                label="操作人">
                </el-table-column>
                <el-table-column
                prop="notice_status"
                align="left"
                min-width="120"
                label="状态">
                    <template slot-scope="scope">
                        {{scope.row.statusName}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="120"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.noticeId)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="changeStatus(scope.row.noticeId)">删除</el-button>
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
            :title="'短信模版'"
            :width="900"
            :height="508"
            :showBtn='true'
            :alert="setUserAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="template-list">
                <el-input
                    placeholder="请输入"
                    suffix-icon="el-icon-search"
                    v-model="searchTemplate">
                </el-input>
                <el-tree class="template-tree" ref="templateTree"
                :data="treeData" :props="defaultProps"
                :expand-on-click-node="false"
                :render-content="renderContent"
                :filter-node-method="filterNode"
                @node-click="handleNodeClick">
                </el-tree>
            </div>
            <el-form :model="ruleForm" ref="ruleForm" label-width="146px" class="form">
                <el-form-item label="短信签名：" prop="sign" :rules="$validate({required:true})">
                    <el-input placeholder="请输入" v-model="ruleForm.sign"></el-input>
                </el-form-item>
                <el-form-item label="短信内容：" prop="text" :rules="$validate({required:true})">
                    <el-input type="textarea" class="textarea" placeholder="请输入" v-model="ruleForm.text"></el-input>
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
    name: 'messageManagement',
    data () {
        return {
            total: 0,
            searchText: '',
            pageNum: 1,
            pageSize: 10,
            setUserAlert: false,
            searchTemplate: '',
            treeData: [
                {
                    label: '常用问候',
                    id: '1',
                    edit: false,
                    children: [
                        {
                            label: '生日祝福',
                            edit: false,
                            id: '2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            userId: '',
            ruleForm: {
                sign: '',
                text: ''
            },
            tableData: [
            ]
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    watch: {
        searchTemplate (val) {
            this.$refs.templateTree.filter(val)
        }
    },
    created () {
        this.getDataList()
    },
    methods: {
        addNotice () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('notice:add')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('/operateNoticeDetail')
        },
        changeStatus (id) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('notice:delete')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$get(`/notice/delete?noticeId=${id}`)
                .then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '删除成功！'
                        })
                        this.getDataList()
                    } else {
                        this.$alert(res.msg, '提示')
                    }
                })
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        // 获取通告列表
        getDataList () {
            this.$post('notice/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                noticeTitle: this.searchText
            })
                .then(res => {
                    if (res.code === 0) {
                        this.total = res.total
                        this.tableData = setNum(res.data, this.pageNum, this.pageSize)
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
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let msg, url
                    let userData = {
                        nickname: this.ruleForm.nickName,
                        username: this.ruleForm.alertUser,
                        // password: this.ruleForm.alertPassword !== '******' ? this.ruleForm.alertPassword : '',
                        status: this.ruleForm.alertRadio,
                        // data: {
                        //     username: this.ruleForm.alertUser,
                        //     password: this.ruleForm.alertPassword,
                        //     status: this.ruleForm.alertRadio
                        // },
                        // confirmPass: this.ruleForm.alertConfirmPsw,
                        roleId: this.ruleForm.checkedRoleList
                    }
                    if (this.userId) {
                        msg = '编辑成功'
                        url = 'user/editUser'
                        userData.sysUserId = this.userId
                        if (this.ruleForm.alertPassword !== '000000') userData.password = this.ruleForm.alertPassword
                    } else {
                        msg = '添加成功'
                        url = 'user/addUser'
                        userData.password = this.ruleForm.alertPassword
                    }
                    this.$post(url, userData)
                        .then(res => {
                            if (res.code === 0) {
                                this.getDataList()
                                this.$message({
                                    type: 'success',
                                    message: msg
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
            this.$refs['ruleForm'].resetFields()
            this.userId = ''
            this.setUserAlert = false
        },
        handleNodeClick (data) {
            console.log(data)
        },
        filterNode (value, data) {
            if (!value) {
                return true
            }
            return data.label.indexOf(value) !== -1
        },
        renderContent (h, { node, data, store }) {
            return (
                <span class="custom-tree-node">
                    <span class="tree-label" contenteditable={true}>{data.label}</span>
                    <span class="fr">
                        <i class="tree-edit-icon el-icon-remove-outline"
                            on-click={
                                () => {
                                    this.treeData.push({
                                        label: '默认分类',
                                        children: []
                                    })
                                }
                            }></i>
                        <i class="tree-edit-icon el-icon-circle-plus-outline"></i>
                    </span>
                </span>
            )
        },
        // 用户编辑
        goDetail (userId) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('notice:detail')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('/operateNoticeDetail?id=' + userId)
        }
    }
}
</script>

<style lang='less' scoped>
#messageManagement {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        position: absolute;
        right: 50px;
        top: 82px;
        width: 558px;
    }
    .model {
        .el-input .el-input__suffix-inner .el-input__icon {
            line-height: 36px;
        }
    }
    .template-list {
        width: 240px;
        margin-left: 50px;
        .template-tree {
            margin-top: 20px;
            padding: 4px;
            height: 272px;
            border: 1px solid #D9D9D9;
            border-radius:4px;
        }
    }
}
</style>
<style lang="less">
.el-textarea__inner {
    resize: none;
    height: 280px;
}
.custom-tree-node {
    width: 100%;
    .tree-label {
        margin-right: 20px;
    }
    .tree-edit-icon {
        margin-right: 8px;
    }
}
</style>

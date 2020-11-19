<!-- 运营通告 -->
<template>
    <div class="operateNotice" id="operateNotice">
        <breadcrumb :breadList="['运营管理', '运营通告']">
            <el-input class="search-text" v-model="searchText" placeholder="请输入标题名称"></el-input>
            <el-button class="search" @click="search">查 询</el-button>
            <el-button type="primary" class="search fr mt17" icon="el-icon-plus"
            @click="addNotice">新 建</el-button>
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
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="noticeTitle"
                align="left"
                min-width="15%"
                label="标题">
                </el-table-column>
                <el-table-column
                prop="startTime"
                align="left"
                min-width="10%"
                label="发布日期">
                    <template slot-scope="scope">
                        {{scope.row.startTime|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="endTime"
                align="left"
                min-width="10%"
                label="下线日期">
                    <template slot-scope="scope">
                        {{scope.row.endTime|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="userName"
                align="left"
                min-width="5%"
                label="操作人">
                </el-table-column>
                <el-table-column
                prop="notice_status"
                align="left"
                min-width="5%"
                label="状态">
                    <template slot-scope="scope">
                        {{scope.row.statusName}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="8%"
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
            :title="'设置服务人员'"
            :width="560"
            :height="316"
            :showBtn='true'
            :alert="setUserAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon ref="marketAreaForm" label-width="146px" class="form">
                <el-form-item label="服务人员：" prop="alertUser" :rules="$validate({required:true})">
                    <el-select v-model="ruleForm.alertUser" style="width:100%;dsplay:inline-block;" placeholder="请选择">
                        <el-option
                        v-for="item in [1, 2, 3]"
                        :key="item"
                        :label="item"
                        :value="item">
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
    name: 'operateNotice',
    data () {
        return {
            showLoading: false,
            total: 0,
            searchText: '',
            pageNum: 1,
            pageSize: 10,
            setUserAlert: false,
            multipleSelection: [],
            registerSource: [],
            dataSource: [],
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
                                item.leaf = false
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
            tableData: [
            ]
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
    },
    watch: {
        '$store.state.refreshList': {
            handler (val) {
                if (val.includes(this.$el.className)) {
                    this.getDataList()
                    this.$store.commit('delRefreshList', this.$el.className)
                }
            },
            deep: true
        }
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
            this.$confirm('确定要删除该通告吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
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
            }).catch(() => {
            })
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        // 获取通告列表
        getDataList () {
            this.showLoading = true
            this.$post('notice/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                noticeTitle: this.searchText
            })
                .then(res => {
                    this.showLoading = false
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
            this.$refs['marketAreaForm'].validate((valid) => {
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
            this.$refs['marketAreaForm'].resetFields()
            this.userId = ''
            this.setUserAlert = false
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
#operateNotice {
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

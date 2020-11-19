<!-- 企业用户详情 -->
<template>
    <div class="cjlUserManageDetail detailPage">
        <div class="detail_header">
            <el-button class="goBack btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content">
            <div class="detail_model">
                <h4>企业信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>企业全称：</label>
                        <span>{{eInfo.enterprise.enterpriseName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>所在地区：</label>
                        <span>{{eInfo.province}}/{{eInfo.city}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系人：</label>
                        <span>{{eInfo.enterprise.enterpriseLinkName}}</span>
                    </div>
                    <div class="detail_item">
                        <label>联系电话：</label>
                        <span>{{eInfo.enterprise.enterpriseLinkMobile}}</span>
                    </div>
                    <div class="detail_item">
                        <label>注册时间：</label>
                        <span>{{eInfo.enterprise.createTime | filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </div>
                    <div class="detail_item">
                        <label>用户总数量：</label>
                        <span>{{eInfo.userCount.t}}</span>
                    </div>
                    <div class="detail_item">
                        <label>启用用户数：</label>
                        <span>{{eInfo.userCount.a}}</span>
                    </div>
                    <div class="detail_item">
                        <label>禁用用户数：</label>
                        <span>{{eInfo.userCount.b}}</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>用户信息</h4>
                <el-table
                border
                :data="uInfo"
                style="width: 100%;">
                    <el-table-column
                    prop="num"
                    align="left"
                    label="序号">
                    </el-table-column>
                    <el-table-column
                    prop="username"
                    align="left"
                    label="登录账号">
                    </el-table-column>
                    <el-table-column
                    prop="staffType"
                    align="left"
                    label="属性">
                        <template slot-scope="scope">
                            <span>{{scope.row.type === 1 ? '管理账号' : '普通账号'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="isStaffActive"
                    align="left"
                    label="状态">
                        <template slot-scope="scope">
                            <span>{{scope.row.status === 1 ? '启用' : '禁用'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="updateId"
                    align="left"
                    label="更新人">
                    </el-table-column>
                    <el-table-column
                    prop="updateTime"
                    align="left"
                    label="更新时间">
                        <template slot-scope="scope">
                            <span>{{scope.row.updateTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="chargeTime"
                    align="left"
                    label="操作">
                        <template slot-scope="scope">
                            <!-- <el-button v-if="scope.row.isStaffActive === 0" @click="changeStatus(scope.row.personId, 1)" type="text" size="small"
                            :disabled="!$checkAuth('admin:sys-user:updateSysUserStatus')">启用</el-button> -->
                            <el-button v-if="scope.row.status === 0" @click="changeStatus(scope.row.userId, 1)" type="text" size="small">启用</el-button>
                            <el-button v-if="scope.row.status === 1" @click="changeStatus(scope.row.userId, 0)" type="text" size="small">禁用</el-button>
                            <el-button @click="resetPassword(scope.row.userId)" type="text" size="small">重置密码</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cjlUserManageDetail',
    data () {
        return {
            uInfo: [],
            eInfo: {
                enterprise: {},
                userCount: {}
            }
        }
    },
    components: {
    },
    created () {
        this.getData()
    },
    methods: {
        getData () {
            this.$post('admin/sys-user/findSysUserByEnterpriseId', {
                enterpriseId: this.$route.query.id
            })
            // this.$get('/product/cjl/user/B4F28D63164348A08B2CCF0024DFDECA/staff')
                .then(res => {
                    if (res.code === 0) {
                        if (res.userList && res.userList.length) {
                            this.uInfo = this.$setNum(res.userList, 1, 999)
                        }
                        this.eInfo = res
                    }
                })
        },
        // 状态变更
        changeStatus (userId, status) {
            this.$post('/admin/sys-user/updateSysUserStatus', {
                data: {
                    userId,
                    status
                }
            })
                .then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '修改成功'
                        })
                        this.getData()
                    }
                })
        },
        // 重置密码
        resetPassword (userId) {
            this.$confirm('确认重置密码为123456吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('/admin/sys-user/updateSysUserPass', {
                    data: {
                        userId,
                        password: '123456'
                    }
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '修改成功'
                            })
                            this.getData()
                        }
                    })
            }).catch(() => {})
        },
        // 关闭页面
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/cjlUserManage'
            })
        }
    }
}
</script>

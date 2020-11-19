<template>
    <div id="roleConfig">
        <div class="content">
            <!-- <div class="header" v-if="!roleList.length">
                应用角色配置
            </div>
            <div class="empty" v-if="!roleList.length">
                <div class="empty-icon">
                    <i class="el-icon-warning"></i>
                </div>
                <div class="empty-title">暂无角色</div>
                <div class="empty-text">请添加角色后进行下一步操作</div>
                <div class="emtpy-btn">
                    <el-button type="primary" class="btn"
                    icon="el-icon-plus" @click="addRoleVisible = true">创建角色</el-button>
                </div>
            </div> -->
            <search v-model="searchValue" :options="searchOption" @search="searchData">
                <el-button type="primary" icon="el-icon-plus" @click="addRoleVisible = true">创建角色</el-button>
            </search>
            <div class="table">
                <el-table
                    border
                    :data="roleList"
                    class="tableBorder"
                    style="width: 100%;min-height:550px;">
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
                    prop="winName"
                    align="left"
                    label="关联应用">
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
                            <el-button @click="roleEdit(scope.row)" type="text" size="small">配置</el-button>
                            <el-button @click="delRole(scope.row.roleId)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog
            title="创建应用角色"
            :visible.sync="addRoleVisible"
            :close-on-click-modal="false"
            top="30vh"
            width="480px">
            <el-form :model="addRoleForm" :rules="addRoleRules" ref="addRoleForm" class="roleform" label-position="right"
            label-width="110px">
                <el-form-item prop="roleName" label="角色名称">
                    <el-input
                        v-model="addRoleForm.roleName"
                        maxlength="20"
                        placeholder="请输入">
                    </el-input>
                </el-form-item>
                <el-form-item prop="winId" label="关联应用" v-if="winIds && winIds.length">
                    <el-select v-model="addRoleForm.winId" placeholder="请选择"
                    class="form-select">
                        <el-option
                        v-for="item in winIds"
                        :key="item.winId"
                        :label="item.winName"
                        :value="item.winId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="winId2" label="关联应用" v-else>
                    <el-select v-model="addRoleForm.winId2" placeholder="无应用" disabled>
                        <el-option
                        v-for="item in winIds"
                        :key="item.winId"
                        :label="item.winName"
                        :value="item.winId">
                        </el-option>
                    </el-select>
                    <el-button type="text" class="add-btn" @click="toAddApp">创建应用 ></el-button>
                </el-form-item>
                <el-form-item prop="remark" label="角色描述">
                    <el-input
                        type="textarea"
                        class="textarea"
                        rows="4"
                        resize="none"
                        maxlength="200"
                        v-model="addRoleForm.remark"
                        placeholder="请输入">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addRoleClose(1)">取 消</el-button>
                <el-button type="primary" @click="addRoleConfirm">下一步</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="绑定菜单"
            :visible.sync="menuVisible"
            top="30vh"
            width="640px"
            @closed="menuClose">
            <div class="tree-content">
                <div class="tree-label"><span class="red">*</span>菜单设置：</div>
                <el-tree
                class="tree-list"
                :data="menuData"
                show-checkbox
                node-key="menuId"
                ref="menuTree"
                :props="defaultProps">
                </el-tree>
            </div>
            <!-- <el-transfer
                style="text-align: left; display: inline-block"
                v-model="selectMenu"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :props="{
                    key: 'menuId',
                    label: 'name'
                }"
                :titles="['菜单列表', '已绑定菜单列表']"
                :format="{
                    noChecked: '${total}',
                    hasChecked: '${checked}/${total}'
                }"
                :render-content="renderFunc"
                @change="menuHandleChange"
                :data="menuData">
                <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
            </el-transfer> -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="menuVisible = false">取 消</el-button>
                <el-button type="primary" @click="menuConfirm">完 成</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Search from '@/components/search'
export default {
    name: 'roleConfig',
    data () {
        return {
            addRoleVisible: false,
            searchOption: [
                {
                    label: '角色名称',
                    type: 'input',
                    key: 'roleName'
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'name'
            },
            addRoleForm: {},
            searchValue: {},
            addRoleRules: {
                roleName: { required: true, message: '请输入', trigger: 'blur' },
                winId: { required: true, message: '请选择', trigger: 'blur' }
            },
            menuVisible: false,
            selectMenu: [],
            menuData: [],
            winIds: [],
            currentRoleId: [],
            roleList: []
        }
    },
    components: {
        Search
    },
    created () {
        this.findSysWin()
    },
    methods: {
        searchData () {
            var params = {
                data: {
                    roleName: this.searchValue.roleName
                }
            }
            this.$post('/admin/sys-role/findSysRoleAdmin', params)
                .then(res => {
                    if (res.code === 0 && res.data) {
                        res.data.forEach(item => {
                            this.winIds.forEach(winItem => {
                                if (item.winId === winItem.winId) {
                                    item.winName = winItem.winName
                                }
                            })
                        })
                        this.roleList = this.$setNum(res.data, 1, 10)
                    }
                })
        },
        // 查询应用
        findSysWin () {
            this.$post('/admin/sys-win/findSysWin', {})
                .then(res => {
                    if (res.code === 0 && res.data) {
                        this.winIds = res.data
                        this.searchData()
                    }
                })
        },
        // 关闭添加角色弹窗
        addRoleClose (clear) {
            this.addRoleVisible = false
            if (clear) {
                this.$nextTick(() => {
                    this.$refs.addRoleForm && this.$refs.addRoleForm.resetFields()
                })
            }
        },
        // 添加角色
        addRoleConfirm () {
            this.$refs.addRoleForm.validate((valid) => {
                if (valid) {
                    this.addRoleClose()
                    this.findSysMenuByWin()
                }
            })
        },
        // 调整创建应用
        toAddApp () {
            this.addRoleClose()
            this.$nextTick(() => {
                this.$router.push('/applicationManage')
            })
        },
        menuHandleChange () {},
        renderFunc (h, option) {
            return (
                <div style={ option.lever === 2 ? 'margin-left: 16px;' : '' }>
                    {option.name}
                </div>
            )
        },
        // 查询角色详情
        roleEdit ({ roleId, winId }) {
            this.findSysMenuByWin(winId)
            this.$post('/admin/sys-role/findSysRoleAdminById', {
                data: {
                    roleId
                }
            })
                .then(res => {
                    if (res.code === 0 && res.data && res.roleMenus) {
                        // 排除一级菜单
                        var selectMenu = res.roleMenus.filter(item => {
                            return this.menuData.findIndex(m => m.menuId === item.menuId) === -1
                        }).map(item => item.menuId)
                        this.$refs.menuTree.setCheckedKeys(selectMenu)
                        this.currentRoleId = roleId
                    }
                })
        },
        // 删除角色
        delRole (roleId) {
            this.$confirm('确定删除该角色吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('/admin/sys-role/delSysRoleAdminById', {
                    data: {
                        roleId
                    }
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this.searchData()
                    }
                })
            }).catch(() => {})
        },
        // 查询菜单
        findSysMenuByWin (winId) {
            this.$post('/admin/sys-menu/findSysMenuByWinId', {
                data: {
                    winId: winId || this.addRoleForm.winId
                }
            })
                .then(res => {
                    if (res.code === 0 && res.data) {
                        this.menuData = this.makeTree(res.data)
                        this.menuVisible = true
                    }
                })
        },
        // 组成树形菜单
        makeTree (data) {
            var tree = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].parentId === '0') {
                    data[i].lever = 1
                    data[i].children = []
                    tree.push(data[i])
                }
            }
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < tree.length; j++) {
                    if (data[i].parentId === tree[j].menuId) {
                        data[i].lever = 2
                        tree[j].children.push(data[i])
                    }
                }
            }
            tree = tree.sort((a, b) => {
                return a.orderNum - b.orderNum
            })
            // var menu = []
            // for (let i = 0; i < tree.length; i++) {
            //     menu.push(tree[i])
            //     menu.push(...tree[i].children)
            // }
            return tree
        },
        // 关闭菜单绑定窗口
        menuClose () {
            this.menuVisible = false
            this.currentRoleId = ''
        },
        // 菜单绑定
        menuConfirm () {
            var check = this.$refs.menuTree.getCheckedKeys()
            var halfCheck = this.$refs.menuTree.getHalfCheckedKeys()
            var menu = [...check, ...halfCheck]
            if (!menu.length) {
                this.$message({
                    type: 'error',
                    message: '请选择菜单'
                })
                return
            }
            let url
            let params = {
                menuIds: menu
            }
            if (this.currentRoleId) {
                url = '/admin/sys-role-menu/updateSysRoleMenuAdminById'
                params.roleId = this.currentRoleId
            } else {
                url = '/admin/sys-role/saveSysRoleAdmin'
                params.data = this.addRoleForm
            }
            this.$post(url, params)
                .then(res => {
                    if (res.code === 0) {
                        this.menuClose()
                        this.addRoleClose(1)
                        this.searchData()
                        this.$message({
                            type: 'success',
                            message: '绑定成功!'
                        })
                    }
                })
        }
    }
}
</script>

<style lang='less' scoped>
#roleConfig {
    .header {
        font-size: 15px;
        font-weight: bold;
        padding: 0 24px;
        line-height: 72px;
        border-bottom: 1px solid #ddd;
    }
    .tree-content {
        .tree-label {
            width: 90px;
            text-align: right;
            float: left;
        }
        .tree-list {
            padding: 8px;
            border: 1px solid #ececec;
            border-radius: 4px;
            margin-left: 100px;
            height: 230px;
            overflow: auto;
        }
    }
    .empty {
        text-align: center;
        margin-top: 150px;
        .empty-icon {
            margin-bottom: 20px;
            i {
                font-size: 70px;
                color: #ccc;
            }
        }
        .empty-title {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .empty-text {
            color: #999;
            margin-bottom: 24px;
        }
    }
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .roleform {
        .form-select {
            width: 100%;
        }
        .add-btn {
            margin-left: 28px;;
        }
    }
}
</style>

<template>
    <div id="applicationManage">
        <div class="header">
            应用管理
            <el-button type="primary" class="btn" @click="appVisible = true"
            icon="el-icon-plus" v-if="winIds.length">创建应用</el-button>
        </div>
        <div class="content">
            <div class="empty" v-if="!winIds.length">
                <div class="empty-icon">
                    <i class="el-icon-warning"></i>
                </div>
                <div class="empty-title">暂无应用</div>
                <div class="empty-text">请添加应用后进行下一步操作</div>
                <div class="emtpy-btn">
                    <el-button type="primary" class="btn"
                    icon="el-icon-plus" @click="appVisible = true">创建应用</el-button>
                </div>
            </div>
            <el-tabs v-model="activeName" type="card" v-if="winIds.length" @tab-click="findSysWinStyle" closable @tab-remove="removeTab">
                <el-tab-pane :label="item.winName" :name="item.winId" v-for="item in winIds" :key="item.winId">
                    <el-popover
                    placement="right"
                    trigger="hover">
                    <div  class="add-win-block-tips">
                        <i class="el-icon-warning"></i>
                        在此处可以创建Win10块
                    </div>
                    <div class="add-win-block" slot="reference" @click="winBlockVisible = true">
                        <i class="el-icon-plus"></i>
                        <div>创建Win10块</div>
                    </div>
                    </el-popover>
                    <div class="win-block-list">
                        <div :class="'win-block-item ' + item.winStyleButtonBgcolor" v-for="item in winStyleList"
                        :key="item.winStyleId" @click="findSysMenuByWin(item.winStyleId)">
                            <div class="win-block-item-wrap" :style="{
                                width: item.winStyleButtonSiteX === 1 ? '120px' : '250px',
                                height: item.winStyleButtonSiteY === 1 ? '120px' : '250px'
                            }">
                                <div class="close-icon" @click.stop="removeWinBlock(item.winStyleId)">
                                    <i class="el-icon-close"></i>
                                </div>
                                <img class="icon" :class="{large: item.winStyleButtonSiteX === 2 && item.winStyleButtonSiteY === 2}" :src="item.winStyleBigIcoUrl">
                                <div><span>{{item.winStyleButtionTitle}}</span></div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog
            title="创建应用"
            :visible.sync="appVisible"
            top="30vh"
            width="480px"
            @closed="appClose">
            <el-form :model="appForm" :rules="appRules" ref="appForm" class="form" label-position="right"
            label-width="110px">
                <el-form-item prop="winName" label="产品应用名称">
                    <el-input
                        v-model="appForm.winName"
                        maxlength="20"
                        placeholder="请输入">
                    </el-input>
                </el-form-item>
                <el-form-item prop="winRemark" label="产品应用描述">
                    <el-input
                        type="textarea"
                        class="textarea"
                        maxlength="200"
                        v-model="appForm.winRemark"
                        placeholder="请输入">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="appVisible = false">取 消</el-button>
                <el-button type="primary" @click="appConfirm">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="创建Win10块"
            :visible.sync="winBlockVisible"
            top="20vh"
            width="640px"
            @closed="winBlockClose">
            <el-form :model="winBlockForm" :rules="winBlockRules" ref="winBlockForm" class="form" label-position="right"
            label-width="110px">
                <el-form-item prop="winStyleButtionTitle" label="Win10块名称">
                    <el-input
                        v-model="winBlockForm.winStyleButtionTitle"
                        maxlength="20"
                        placeholder="请输入">
                    </el-input>
                </el-form-item>
                <el-form-item prop="winStyleBigIcoUrl" label="图标上传">
                    <el-upload
                    class="upload-demo"
                    ref="upload"
                    accept="image/*"
                    :action="uploadUrl"
                    :file-list="fileList"
                    :show-file-list="false"
                    :on-success="uploadSuccess"
                    :auto-upload="true">
                        <div class="select-file-input" slot="trigger">
                            请选择图标文件
                            <i class="icon el-icon-upload2 fr"></i>
                        </div>
                        <div class="upload-preview-show" v-if="winBlockForm.winStyleBigIcoUrl">
                            <img :src="winBlockForm.winStyleBigIcoUrl" alt="">
                        </div>
                    </el-upload>
                </el-form-item>
                <el-form-item prop="winStyleButtonBgcolor" label="背景颜色">
                    <el-select v-model="winBlockForm.winStyleButtonBgcolor" placeholder="请选择"
                    class="form-select">
                        <el-option
                        v-for="item in bgColorList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <div class="bg-select">
                            {{item.label}}
                            <div class="color-blcok" :style="{background: item.color}"></div>
                        </div>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="winStyleButtonSite" label="方块尺寸">
                    <el-select v-model="winBlockForm.winStyleButtonSite" placeholder="请选择"
                    class="form-select">
                        <el-option
                        v-for="item in winSizeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <div class="bg-select">
                            {{item.label}}
                            <div class="size-blcok" :style="{
                                width: 12 * item.size.x + 'px',
                                height: 12 * item.size.y + 'px'
                            }">
                            </div>
                        </div>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="winStylePositionRow" label="显示位置">
                    <el-select v-model="winBlockForm.winStylePositionRow" placeholder="所在行"
                    style="width: 240px;margin-right:10px;">
                        <el-option
                        v-for="item in [1, 2, 3, 4, 5]"
                        :key="item + 'row'"
                        :label="'第 ' + item + ' 行'"
                        :value="item">
                        </el-option>
                    </el-select>
                    <el-select v-model="winBlockForm.winStylePositionCol" placeholder="所在列"
                    style="width: 240px;">
                        <el-option
                        v-for="item in [1, 2, 3, 4, 5]"
                        :key="item + 'col'"
                        :label="'第 ' + item + ' 列'"
                        :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="winStylePositionRow" label="显示位置">
                    <el-switch
                        v-model="winBlockForm.isDesktop"
                        :active-value="1"
                        :inactive-value="0">
                    </el-switch>
                    <span class="switch-tips">开状态：WIN10桌面  关状态：菜单显示</span>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="winBlockClose">取 消</el-button>
                <el-button type="primary" @click="winBlockConfirm">下一步</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="绑定菜单"
            :visible.sync="menuVisible"
            top="30vh"
            width="480px"
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
export default {
    data () {
        return {
            activeName: '',
            uploadUrl: window.uploadURL + 'attachment/file/upload',
            winIds: [],
            fileList: [],
            defaultProps: {
                children: 'children',
                label: 'name'
            },
            bgColorList: [
                {
                    value: 'blue',
                    label: '蓝色',
                    color: '#00bdf8'
                },
                {
                    value: 'green',
                    label: '绿色',
                    color: '#79c52b'
                },
                {
                    value: 'purple',
                    label: '紫色',
                    color: '#7e5ee6'
                },
                {
                    value: 'orange',
                    label: '橙色',
                    color: '#ef9056'
                },
                {
                    value: 'yellow',
                    label: '黄色',
                    color: '#fbd249'
                },
                {
                    value: 'cyan',
                    label: '深绿',
                    color: '#4AD5B6'
                },
                {
                    value: 'pink',
                    label: '粉色',
                    color: '#CE4CD3'
                },
                {
                    value: 'brown',
                    label: '棕色',
                    color: '#BF9054'
                }
            ],
            winSizeList: [
                {
                    value: 0,
                    size: {
                        x: 1,
                        y: 1
                    },
                    label: '尺寸1'
                },
                {
                    value: 1,
                    size: {
                        x: 1,
                        y: 2
                    },
                    label: '尺寸2'
                },
                {
                    value: 2,
                    size: {
                        x: 2,
                        y: 1
                    },
                    label: '尺寸3'
                },
                {
                    value: 3,
                    size: {
                        x: 2,
                        y: 2
                    },
                    label: '尺寸4'
                }
            ],
            appVisible: false,
            appRules: {
                winName: { required: true, message: '请输入', trigger: 'blur' }
            },
            appForm: {
                winName: '',
                winRemark: ''
            },
            winBlockVisible: false,
            winBlockRules: {
                winStyleButtionTitle: { required: true, message: '请输入', trigger: 'blur' },
                winStyleButtonBgcolor: { required: true, message: '请选择', trigger: 'blur' },
                winStyleBigIcoUrl: { required: true, message: '请上传', trigger: 'blur' },
                winStyleButtonSite: { required: true, message: '请选择', trigger: 'blur' }
            },
            winBlockForm: {
                winStyleButtionTitle: '',
                winStyleButtonBgcolor: '',
                winStyleBigIcoUrl: '',
                isDesktop: 1
            },
            winStyleId: '',
            menuVisible: false,
            selectMenu: [],
            menuData: [],
            winStyleList: []
        }
    },
    created () {
        this.findSysWin()
    },
    methods: {
        // 查询应用
        findSysWin () {
            this.$post('/admin/sys-win/findSysWin', {})
                .then(res => {
                    if (res.code === 0 && res.data) {
                        res.data.forEach(item => {
                            item.winId = item.winId + ''
                        })
                        this.winIds = res.data
                        console.log(this.winIds)
                        this.activeName = res.data[0].winId
                        this.findSysWinStyle()
                    }
                })
        },
        // 查询菜单
        findSysMenuByWin (winStyleId) {
            this.winStyleId = winStyleId
            this.$post('/admin/sys-menu/findSysMenuByWinId', {
                data: {
                    winId: this.activeName
                }
            })
                .then(res => {
                    if (res.code === 0 && res.data) {
                        this.menuData = this.makeTree(res.data)
                        this.menuVisible = true
                        this.findSysMenuByWinStyleId()
                    }
                })
        },
        // 删除应用
        removeTab (targetName) {
            this.$confirm('此操作将永久删除该应用, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('/admin/sys-win/delSysWin', {
                    data: {
                        winId: targetName
                    }
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.findSysWin()
                        }
                    })
            }).catch(() => {
            })
        },
        // 删除方块
        removeWinBlock (winStyleId) {
            this.$confirm('此操作将永久删除该方块, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('/admin/sys-win-style/delSysWinStyle', {
                    data: {
                        winStyleId
                    }
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.findSysWinStyle()
                        }
                    })
            }).catch(() => {
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
        // 查询方块已绑定的菜单
        findSysMenuByWinStyleId () {
            this.$post('/admin/sys-menu/findSysMenuByWinStyleId', {
                winStyleId: this.winStyleId
            })
                .then(res => {
                    if (res.code === 0 && res.data) {
                        // 排除一级菜单
                        var selectMenu = res.data.filter(item => {
                            return this.menuData.findIndex(m => m.menuId === item.menuId) === -1
                        }).map(item => item.menuId)
                        this.$refs.menuTree.setCheckedKeys(selectMenu)
                    }
                })
        },
        addApplication () {},
        appClose () {
            this.appVisible = false
            this.$nextTick(() => {
                this.$refs.appForm.resetFields()
            })
        },
        // 创建应用
        appConfirm () {
            this.$refs.appForm.validate((valid) => {
                if (valid) {
                    this.$post('/admin/sys-win/saveSysWin', {
                        data: this.appForm
                    })
                        .then(res => {
                            if (res.code === 0) {
                                this.appVisible = false
                                this.$message({
                                    type: 'success',
                                    message: '创建成功!'
                                })
                                this.findSysWin()
                            }
                        })
                }
            })
        },
        uploadSuccess (res, file, fileList) {
            if (res.status === 200) {
                this.winBlockForm.winStyleBigIcoUrl = res.data
            }
        },
        // 查询方块
        findSysWinStyle () {
            this.$post('/admin/sys-win-style/findSysWinStyle', {
                data: {
                    winId: this.activeName
                }
            })
                .then(res => {
                    if (res.code === 0 && res.data) {
                        this.winStyleList = res.data
                    }
                })
        },
        winBlockClose () {
            this.winBlockVisible = false
            this.winStylePositionCol = ''
            this.$nextTick(() => {
                this.$refs.winBlockForm.resetFields()
            })
        },
        // 保存方块
        winBlockConfirm () {
            this.$refs.winBlockForm.validate((valid) => {
                if (valid) {
                    console.log(this.winBlockForm.winStyleButtonSite)
                    console.log(this.winSizeList)
                    this.winBlockForm.winStyleButtonSiteX = this.winSizeList[this.winBlockForm.winStyleButtonSite].size.x
                    this.winBlockForm.winStyleButtonSiteY = this.winSizeList[this.winBlockForm.winStyleButtonSite].size.y
                    this.winBlockForm.winStyleSmallIcoUrl = this.winBlockForm.winStyleBigIcoUrl
                    this.$post('/admin/sys-win-style/saveSysWinStyle', {
                        data: {
                            winId: this.activeName,
                            ...this.winBlockForm
                        }
                    })
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '创建成功!'
                                })
                                this.findSysMenuByWin(res.data.winStyleId)
                                this.findSysWinStyle()
                                this.winBlockVisible = false
                            }
                        })
                }
            })
        },
        menuClose () {
            this.menuVisible = false
            this.selectMenu = []
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
            this.$post('/admin/sys-win-style-menu/saveSysWinStyleMenu', {
                menuIds: menu,
                winStyleId: this.winStyleId
            })
                .then(res => {
                    if (res.code === 0) {
                        this.menuVisible = false
                        this.$message({
                            type: 'success',
                            message: '绑定成功!'
                        })
                    }
                })
        },
        menuHandleChange () {},
        renderFunc (h, option) {
            return (
                <div class={ option.lever === 2 ? 'tree-level' : '' }>
                    {option.name}
                </div>
            )
        }
    }
}
</script>

<style lang='less'>
#applicationManage {
    .header {
        font-size: 15px;
        font-weight: bold;
        padding: 0 24px;
        line-height: 72px;
        border-bottom: 1px solid #ddd;
        .btn {
            float: right;
            margin-top: 16px;
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
    .content {
        padding: 24px;
        .add-win-block {
            width: 216px;
            height: 120px;
            border-radius:2px;
            border:1px dashed #ddd;
            background: #f3f3f3;
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            cursor: pointer;
            .el-icon-plus {
                font-size: 20px;
                color: #999;
                margin-bottom: 16px;
            }
        }
        .win-block-list {
            margin-top: 24px;
            .win-block-item {
                display: inline-block;
                margin-right: 10px;
                font-size: 16px;
                color: #e8e8e8 !important;
                text-align: center;
                cursor: pointer;
                position: relative;
                .win-block-item-wrap {
                    display: table-cell;
                    vertical-align: middle;
                    .close-icon {
                        position: absolute;
                        right: 0px;
                        top: 0px;
                        padding: 6px;
                        font-size: 14px;
                        color: #333;
                        cursor: pointer;
                        display: none;
                    }
                    &:hover {
                        .close-icon {
                            display: block;
                        }
                    }
                }
                .icon {
                    margin-bottom: 14px;
                    width: 58px;
                    &.large {
                        width: 100px;
                    }
                }
            }
            .blue {
                background: #00bdf8;
                background:linear-gradient(135deg,rgba(0,189,248,1) 0%,rgba(0,136,238,1) 100%);
            }
            .cyan {
                background: #4AD5B6;
                background:linear-gradient(135deg,rgba(74,213,182,1) 0%,rgba(9,149,118,1) 100%);
            }
            .purple {
                background: #7e5ee6;
                background:linear-gradient(180deg,rgba(126,94,230,1) 0%,rgba(72,48,200,1) 100%);
            }
            .orange {
                background: #ef9056;
                background:linear-gradient(180deg,rgba(239,144,86,1) 0%,rgba(218,87,43,1) 100%);
            }
            .yellow {
                background: #fbd249;
                background:linear-gradient(180deg,rgba(251,210,73,1) 0%,rgba(245,166,35,1) 100%);
            }
            .green {
                background: #79c52b;
                background:linear-gradient(135deg,rgba(121,197,43,1) 0%,rgba(66,108,23,1) 100%);
            }
            .pink {
                background: #CE4CD3;
                background:linear-gradient(180deg,rgba(206,76,211,1) 0%,rgba(160,37,167,1) 100%);
            }
            .brown {
                background: #BF9054;
                background:linear-gradient(180deg,rgba(191,144,84,1) 0%,rgba(139,87,42,1) 100%);
            }
        }
    }
    .form {
        .textarea {
            .el-textarea__inner {
                resize: none;
                height: 100px;
            }
        }
        .el-upload {
            width: 100%;
        }
        .form-select {
            width: 100%;
        }
        .select-file-input {
            border-radius:2px;
            border: 1px solid #DCDFE6;
            height: 32px;
            line-height: 32px;
            padding: 0 15px;
            text-align: left;
            .icon {
                margin-top: 7px;
                font-size: 18px;
            }
        }
        .upload-preview-show {
            width: 110px;
            height: 110px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 3px;
            margin-top: 10px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .switch-tips {
            color: #999;
            font-size: 12px;
            margin-left: 16px;
        }
    }
    .tree-level {
        margin-left: 16px;
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
}
.add-win-block-tips {
    .el-icon-warning {
        color: #FAAD14;
        margin-right: 4px;
    }
}
.bg-select {
    .color-blcok {
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-left: 30px;
    }
    .size-blcok {
        display: inline-block;
        margin-left: 30px;
        border: 1px solid #333;
        vertical-align: middle;
    }
}
</style>

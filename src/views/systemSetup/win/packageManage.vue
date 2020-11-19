<template>
    <div id="packageManage">
        <div class="header">
            套餐管理
        </div>
        <div class="content">
            <div class="empty" v-if="!packageList.length">
                <div class="empty-icon">
                    <i class="el-icon-warning"></i>
                </div>
                <div class="empty-title">暂无套餐</div>
                <div class="empty-text">请添加套餐后进行下一步操作</div>
                <div class="emtpy-btn">
                    <el-button type="primary" class="btn"
                    icon="el-icon-plus" @click="winBlockVisible = true">创建套餐</el-button>
                </div>
            </div>
            <div class="package-list clearfix" v-if="packageList.length">
                <div class="add-win-block" slot="reference" @click="winBlockVisible = true">
                    <div class="add-win-block-wrap">
                        <i class="el-icon-plus"></i>
                        <div>创建套餐</div>
                    </div>
                </div>
                <div class="package-item">
                    <div class="img" style="background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589284299506&di=d5ca9c463852df2fa79b113314616e28&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130719%2F5252423_184439567000_2.jpg')"></div>
                    <div class="package-content">
                        <div class="package-title">套餐名称</div>
                        <div class="package-text">套餐描述文本</div>
                        <div class="package-footer">
                            管理员 2020-05-12
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            title="创建套餐"
            :visible.sync="winBlockVisible"
            top="20vh"
            width="640px"
            @closed="winBlockClose">
            <el-form :model="winBlockForm" :rules="winBlockRules" ref="winBlockForm" class="form" label-position="right"
            label-width="110px">
                <el-form-item prop="winStyleButtionTitle" label="套餐名称">
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
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :file-list="fileList"
                    :show-file-list="false"
                    :auto-upload="true">
                        <div class="select-file-input" slot="trigger">
                            请选择图标文件
                            <i class="icon el-icon-upload2 fr"></i>
                        </div>
                    </el-upload>
                </el-form-item>
                <el-form-item prop="remark" label="套餐描述">
                    <el-input
                        v-model="winBlockForm.remark"
                        type="textarea"
                        class="textarea"
                        maxlength="200"
                        placeholder="请输入">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="winBlockVisible = false">取 消</el-button>
                <el-button type="primary" @click="winBlockConfirm">下一步</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="绑定菜单"
            :visible.sync="menuVisible"
            top="20vh"
            width="640px"
            @closed="menuClose">
            <el-transfer
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
            </el-transfer>
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
            activeName: '维修企业智能服务系统',
            packageList: [
                {
                    winId: 1,
                    winName: '维修企业智能服务系统',
                    winRemark: '备注'
                },
                {
                    winId: 2,
                    winName: '检测',
                    winRemark: '备注'
                }
            ],
            fileList: [],
            winBlockVisible: false,
            winBlockRules: {
                winStyleButtionTitle: { required: true, message: '请输入', trigger: 'blur' },
                winStyleButtonBgcolor: { required: true, message: '请选择', trigger: 'blur' }
            },
            winBlockForm: {
                winStyleButtionTitle: '',
                winStyleButtonBgcolor: '',
                remark: ''
            },
            menuVisible: false,
            selectMenu: [],
            menuData: [
                {
                    name: '菜单1',
                    menuId: 1
                },
                {
                    name: '菜单2',
                    menuId: 2,
                    children: []
                }
            ],
            winStyleList: [
                {
                    winStyleId: 1,
                    winStyleButtionTitle: '首页',
                    winStyleBigIcoUrl: 'aa.png',
                    winStyleButtonBgcolor: 'purple',
                    winStyleButtonSiteX: 1,
                    winStyleButtonSiteY: 2
                },
                {
                    winStyleId: 2,
                    winStyleButtionTitle: '运输车辆',
                    winStyleBigIcoUrl: 'aa.png',
                    winStyleButtonBgcolor: 'brown',
                    winStyleButtonSiteX: 2,
                    winStyleButtonSiteY: 2
                }
            ]
        }
    },
    components: {

    },
    methods: {
        winBlockClose () {
            this.winBlockVisible = false
            this.$nextTick(() => {
                this.$refs.winBlockForm.resetFields()
            })
        },
        winBlockConfirm () {
            this.$refs.winBlockForm.validate((valid) => {
                if (valid) {
                    this.menuVisible = true
                }
            })
        },
        menuClose () {
            this.menuVisible = false
            this.selectMenu = []
        },
        menuConfirm () {
            console.log(this.selectMenu)
        },
        menuHandleChange () {},
        renderFunc (h, option) {
            return (
                <div>
                    {option.name}
                </div>
            )
        }
    }
}
</script>

<style lang='less'>
#packageManage {
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
            width: 250px;
            height: 332px;
            border-radius:2px;
            border:1px dashed #ddd;
            background: #f3f3f3;
            text-align: center;
            margin-right: 48px;
            float: left;
            .add-win-block-wrap {
                width: 250px;
                height: 331px;
                display: table-cell;
                vertical-align: middle;
            }
            cursor: pointer;
            .el-icon-plus {
                font-size: 20px;
                color: #999;
                margin-bottom: 16px;
            }
        }
        .package-list {
            margin-top: 24px;
            .package-item {
                float: left;
                width: 250px;
                height: 332px;
                margin-right: 48px;
                box-shadow: 3px 5px 10px #ccc;
                .img {
                    height: 188px;
                    width: 100%;
                    background-size: cover;
                }
                .package-content {
                    padding: 16px;
                    height: 112px;
                    .package-title {
                        font-size: 13px;
                        font-weight: bold;
                    }
                    .package-text {
                        font-size: 14px;
                        color: #999;
                        height: 68px;
                        overflow: hidden;
                    }
                    .package-footer {
                        margin-top: 14px;
                        font-size: 12px;
                        color: #999;
                    }
                }
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
    }
}
</style>

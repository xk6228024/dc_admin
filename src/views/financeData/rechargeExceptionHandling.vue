<template>
    <div class="rechargeExceptionHandling">
        <breadcrumb :breadList="['财务管理', '企业充值开票']">
            <label for="">企业名称:</label>
            <el-input style="width:160px;" class="search-text" v-model="input" placeholder=""></el-input>
            <label for="">交易时间:</label>
            <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                class="search-text vam"
                end-placeholder="结束日期">
            </el-date-picker>
            <label for="">状态:</label>
            <el-select class="w120_input" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">操作人:</label>
                <el-select class="w120_input" v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    clearable
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="dlb">
                <label for="">审核人:</label>
                <el-select class="w120_input search-text" v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    clearable
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button class="search" @click="search">查询</el-button>
            </div>
            <div class="btn_ground">
                <el-button class="fr mt17" type="primary" @click="showAddAlert=true">新增异常充值</el-button>
                <el-button class="fr mt17" >导出报表</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                :data="tableData"
                border
                style="width: 100%;minHeight:600px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="60">
                </el-table-column>
                <el-table-column
                prop="roleName"
                align="left"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="用户类型">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="交易金额">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="交易时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="操作人">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="审核状态">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="审核时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="审核人">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="120"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="showDetailAlert=true" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">查看{{scope.row.$index}}</el-button>
                        <el-button @click="showAlert=true" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">审核{{scope.row.$index}}</el-button>
                        <el-button @click="deleteList" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">删除{{scope.row.$index}}</el-button>
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
            :title="'新增异常充值申请'"
            :width="650"
            :alert="showAddAlert"
            @alertConfirm="addAlertConfirm"
            @alertCancel="addAlertCancel">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="marketAreaForm" label-width="85px" style="padding-left:40px;" class="form clearfix">
                <el-form-item label="请选择:" prop="alertRole">
                    <el-select class="small_input select_input" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        clearable
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select class="small_input select_input" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select class="small_input select_input" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="企业名称:" prop="alertRole">
                    <el-input class="w480_input" v-model="ruleForm.alertRole"></el-input>
                </el-form-item>
                <el-form-item label="交易金额:" prop="alertRole">
                    <el-input class="w480_input" type="number" v-model="ruleForm.alertRole"></el-input>
                </el-form-item>
                <el-form-item label="上传附件:" prop="alertRole">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <span class="upload_tips">点击‘+’号上传图片</span>
                </el-form-item>
                <el-form-item label="备注:" prop="al1ertRole">
                    <el-input class="w480_input" type="number" v-model="ruleForm.alertRole"></el-input>
                </el-form-item>
            </el-form>
        </modal>
        <modal
            :title="'异常充值审核'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">异常信息</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal fontColor">深圳市忠诚信息科技开发有限公司</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">企业类型：</td>
                        <td class="tal fontColor" width="270">XXXXXX</td>
                        <td class="tar" width="150" rowspan="5">汇款单扫描件：</td>
                        <td class="tac fontColor" rowspan="4">
                            <img src="../../assets/images/question.png" alt="" style="width:88px;height:88px;border:1px solid #eeeeee;border-radius:4px;padding:8px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">交易金额：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">交易时间：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">备注：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr>
                        <td class="tar fontColor"><span class="importantIcon">*</span>审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            <el-radio v-model="radio" label="1">审核通过</el-radio>
                            <el-radio v-model="radio" label="2">审核不通过</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="tar fontColor"><span class="importantIcon">*</span>原因：</td>
                        <td colspan="3" class="tal fontColor">
                            <input type="text" class="resonInput">
                        </td>
                    </tr>
                </table>
            </div>
        </modal>
        <modal
            :title="'查看异常充值申请'"
            :width="924"
            :alert="showDetailAlert"
            :showBtn="false"
            @alertConfirm="alertDetailConfirm"
            @alertCancel="alertDetailCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">异常信息</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal fontColor">深圳市忠诚信息科技开发有限公司</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">企业类型：</td>
                        <td class="tal fontColor" width="270">XXXXXX</td>
                        <td class="tar" width="150" rowspan="5">汇款单扫描件：</td>
                        <td class="tac fontColor" rowspan="4">
                            <img src="../../assets/images/question.png" alt="" style="width:88px;height:88px;border:1px solid #eeeeee;border-radius:4px;padding:8px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">交易金额：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">交易时间：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">备注：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr>
                        <td class="tar">审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            审核结果
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">原因：</td>
                        <td colspan="3" class="tal fontColor">
                            原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">审核人：</td>
                        <td class="tal fontColor">XXXXXX</td>
                        <td class="tar">审核时间：</td>
                        <td class="tal fontColor">XXXXX</td>
                    </tr>
                </table>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'rechargeExceptionHandling',
    data () {
        return {
            value6: [],
            showDetailAlert: false,
            showAddAlert: false, // 新增弹出
            radio: '1',
            input: '',
            imageUrl: '',
            value: '',
            options: [
                {
                    value: 1,
                    label: '深圳'
                }
            ],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            ruleForm: {
                alertRole: '', // 添加角色名称
                alertRemark: '', // 添加角色备注
                alertTree: [1]
            },
            rules: { // 校验规则
                alertRole: [
                    { required: true, message: '请输入角色名称', trigger: 'change' },
                    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change' }
                ],
                alertTree: [
                    { required: true, message: '请选择功能权限', trigger: 'change' }
                ],
                alertRemark: [
                    { required: false, message: '请输入备注', trigger: 'change' },
                    { min: 1, max: 50, message: '50 个字符以内', trigger: 'change' }
                ]
            },
            partList: [
                {
                    name: 'ZCSD-123213213',
                    price: 2333.11
                }
            ], // 设备型号列表
            tableData: [
                {
                    num: 1,
                    roleName: 'xx',
                    remark: 'remark'
                }
            ]
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
    },
    methods: {
        // 删除用户
        deleteList (userIds) {
            this.$myAlert({
                title: '删除',
                msg: '确定删除吗？',
                type: 'waring'
            }).then(() => {
                this.$post('sys/user/delete', {
                    userIds
                })
                    .then(res => {
                        this.findUserList()
                        this.$message({
                            type: 'success',
                            message: '删除成功！'
                        })
                    })
            }).catch(() => {})
        },
        alertDetailConfirm () {
            this.showDetailAlert = false
        },
        alertDetailCancel () {
            this.showDetailAlert = false
        },
        addAlertConfirm () {
            this.showAddAlert = false
        },
        addAlertCancel () {
            this.showAddAlert = false
        },
        // 删除型号
        delPart (index) {
            this.partList.splice(index, 1)
        },
        // 增加型号
        addPart () {
            this.partList.push({
                name: '',
                price: ''
            })
        },
        changeStatus () {},
        search () {},
        handleAvatarSuccess () {},
        beforeAvatarUpload () {},
        handleSizeChange () {},
        handleCurrentChange () {},
        alertConfirm () {
            this.showAlert = false
        },
        alertCancel () {
            this.showAlert = false
        }
    }
}
</script>

<style lang='less' scoped>
.rechargeExceptionHandling {
    .table {
        margin: 20px;
        margin-top: 0;
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
    .alertInner {
        padding: 0 40px;
        table {
            width: 100%;
            border: none;
            line-height: 44px;
            td {
                padding: 0 10px;
                box-sizing: border-box;
            }
            .blueTilte {
                background: rgb(242, 244, 246);
            }
            .resonInput {
                line-height: 36px;
                width: 600px;
                border: none;
                outline: none;
            }
            .importantIcon {
                color: red;
                margin-right: 4px;
            }
        }
    }
}
</style>
<style lang='less'>
.rechargeExceptionHandling {
    .fontColor {
        .el-radio__label {
            color: #252631;
        }
    }
    .small_input {
        // .el-input__inner {
        //     width: 140px;
        // }
    }
    .w200_input {
        width: 220px;
    }
    .w120_input {
        width: 120px;
    }
    .w480_input {
        width: 480px;
    }
    .select_input {
        width: 153px;
        margin-right: 10px;
    }
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
}
</style>

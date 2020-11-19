<!-- 权限管理 -->
<template>
    <div class="balanceQuery">
        <breadcrumb :breadList="['财务管理', '企业充值开票']">
            <label for="">所属区域:</label>
            <el-select class="w120_input" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <label for="">用户类型:</label>
            <el-select class="w120_input" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <label for="">企业名称:</label>
            <el-input style="width:160px;" class="search-text" v-model="input" placeholder=""></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="fr mt17">导出报表</el-button>
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
                label="充值金额">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="赠送金额">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="当前总金额">
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper, slot"
                :total="total">
                <p class="tips">本期数据&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;充值企业:3906家&nbsp;&nbsp;&nbsp;充值金额合计:1021元&nbsp;&nbsp;&nbsp;赠送金额:686元&nbsp;&nbsp;&nbsp;总金额:686元</p>
            </el-pagination>
        </div>
        <modal
            :title="'企业充值开票信息'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">企业信息</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal">深圳市忠诚信息科技开发有限公司</td>
                    </tr>
                    <tr>
                        <td class="tar">企业类型：</td>
                        <td colspan="3" class="tal">维修企业</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">充值信息</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">凭证单号：</td>
                        <td class="tal" width="270">维修企业</td>
                        <td class="tar" width="150">充值方式：</td>
                        <td class="tal">维修企业</td>
                    </tr>
                    <tr>
                        <td class="tar">充值金额：</td>
                        <td class="tal">维修企业</td>
                        <td class="tar">赠送金额：</td>
                        <td class="tal">维修企业</td>
                    </tr>
                    <tr>
                        <td class="tar">总金额：</td>
                        <td class="tal">维修企业</td>
                        <td class="tar">充值时间：</td>
                        <td class="tal">维修企业</td>
                    </tr>
                    <tr>
                        <td class="tar">是否开票：</td>
                        <td class="tal">维修企业</td>
                        <td class="tar">所属城市：</td>
                        <td class="tal">维修企业</td>
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
    name: 'balanceQuery',
    data () {
        return {
            value6: '',
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
.balanceQuery {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .tips {
        position: absolute;
        top: 0;
        line-height: 40px;
        color: #98A9BC;
        font-size: 14px;
        font-weight: normal;
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
.balanceQuery {
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w200_input {
        width: 220px;
    }
    .w120_input {
        width: 120px;
    }
    .el-pagination {
        position: relative;
    }
}
</style>

<!-- 权限管理 -->
<template>
    <div class="incomeStatistics">
        <breadcrumb :breadList="['系统设置', '外延设备管理']">
            <label for="">查询时间:</label>
            <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                class="search-text vam"
                end-placeholder="结束日期">
            </el-date-picker>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="fr mt17">导出报表</el-button>
        </breadcrumb>
        <div class="table">
            <div style="min-height:600px;">
                <table class="myTable" style="width: 100%;">
                    <tr style="line-height:25px;font-weight:700;color:#666666;">
                        <td>序号</td>
                        <td>区域</td>
                        <td>城市</td>
                        <td>维护信息费<br>(总计333,111)</td>
                        <td>检测信息费<br>(总计333,111)</td>
                        <td>归档信息费<br>(总计333,111)</td>
                        <td>车主信息归档信息费<br>(总计333,111)</td>
                        <td>系统初装费<br>(总计333,111)</td>
                        <td>硬件设备<br>(总计333,111)</td>
                        <td>识别卡<br>(总计333,111)</td>
                        <td>总收入合计<br>(总计333,111)</td>
                    </tr>
                    <tr v-for="i in tableData" :key="i.index" style="line-height:40px;">
                        <td>{{i.roleName}}</td>
                        <td>{{i.remark}}</td>
                        <td>{{i.roleName}}</td>
                        <td>{{i.remark}}</td>
                        <td>{{i.roleName}}</td>
                        <td>{{i.remark}}</td>
                        <td>{{i.roleName}}</td>
                        <td>{{i.remark}}</td>
                        <td>{{i.roleName}}</td>
                        <td>{{i.remark}}</td>
                        <td>{{i.roleName}}</td>
                    </tr>
                </table>
            </div>
            <!-- <el-table
                :data="tableData"
                border
                style="width: 100%;minHeight:600px">
                <el-table-column
                prop="num"
                align="left"
                :label="'序号' + pageNum"
                width="100">
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
                label="维护信息费 （总计34,896）">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="所属区域">
                </el-table-column>
                <el-table-column
                align="left"
                width="150"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="roleEdit(scope.row.roleId)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">编辑</el-button>
                        <el-button @click="roleEdit(scope.row.roleId)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">删除</el-button>
                    </template>
                </el-table-column>
            </el-table> -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper, slot"
                :total="total">
                <p class="tips">本期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;维护企业:3906家&nbsp;&nbsp;&nbsp;检测企业:1021家&nbsp;&nbsp;&nbsp;运输企业:686家</p>
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
// import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'incomeStatistics',
    data () {
        return {
            value6: '',
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
                    { required: true, message: '请输入', trigger: 'change' },
                    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change' }
                ],
                alertTree: [
                    { required: true, message: '请选择', trigger: 'change' }
                ],
                alertRemark: [
                    { required: false, message: '请输入', trigger: 'change' },
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
                },
                {
                    num: 1,
                    roleName: 'xx',
                    remark: 'remark'
                }
            ]
        }
    },
    components: {
        Breadcrumb
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
.incomeStatistics {
    .table {
        margin: 20px;
        margin-top: 0;
        table {
            border: 1px solid #e8ecef;
            text-align: center;
            line-height: 20px;
            td {
                padding: 5px;
                min-height: 44px;
            }
        }
    }
    .tips {
        position: absolute;
        top: 0;
        line-height: 40px;
        color: #98A9BC;
        font-size: 14px;
        font-weight: normal;
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
}
</style>
<style lang='less'>
.incomeStatistics {
    .small_input {
        margin-right: 10px;
        .el-input__inner {
            width: 100px;
        }
    }
    .w320_input {
        width: 320px;
    }
    .el-pagination {
        position: relative;
    }
}
</style>

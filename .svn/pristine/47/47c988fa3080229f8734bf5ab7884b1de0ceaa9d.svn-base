<!-- 权限管理 -->
<template>
    <div class="rechargeAudit">
        <breadcrumb :breadList="['财务管理', '企业充值开票']">
            <label for="">所属区域:</label>
            <el-select class="w120_input" v-model="areaId" placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.sysAreaId"
                :label="item.areaName"
                clearable
                :value="item.sysAreaId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" v-model="value" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                clearable
                :value="item.regionId">
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
            <!-- <br> -->
            <div class="dlb">
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
            </div>
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
                prop="areaNames"
                align="left"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="cityName"
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
                label="汇款金额">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="付款方式">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="汇款时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="审核人">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="审核状态">
                </el-table-column>
                <el-table-column
                align="left"
                width=""
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="showAlert2=true" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">查看{{scope.row.$index}}</el-button>
                        <el-button @click="showAlert=true" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">审核{{scope.row.$index}}</el-button>
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
            :title="'企业充值开票信息'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">企业汇款信息</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal fontColor">深圳市忠诚信息科技开发有限公司</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">企业类型：</td>
                        <td class="tal fontColor" width="270">XXXXXX</td>
                        <td class="tar" width="150" rowspan="5">汇款单扫描：</td>
                        <td class="tac fontColor" rowspan="5">
                            <img @click="$lookImg('http://tpc.googlesyndication.com/daca_images/simgad/3308993423272275532?w=400&h=209')" src="../../assets/images/question.png" alt="" style="width:88px;height:88px;border:1px solid #eeeeee;border-radius:4px;padding:8px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">订单号：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">交易金额：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">汇款时间：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">汇款方式：</td>
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
            :title="'企业充值开票信息'"
            :width="924"
            :alert="showAlert2"
            :showBtn="false"
            @alertConfirm="alertConfirm2"
            @alertCancel="alertCancel2">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">企业汇款信息</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal fontColor">深圳市忠诚信息科技开发有限公司</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">企业类型：</td>
                        <td class="tal fontColor" width="270">XXXXXX</td>
                        <td class="tar" width="150" rowspan="5">汇款单扫描：</td>
                        <td class="tac fontColor" rowspan="5">
                            <img src="../../assets/images/question.png" alt="" style="width:88px;height:88px;border:1px solid #eeeeee;border-radius:4px;padding:8px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">订单号：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">交易金额：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">汇款时间：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">汇款方式：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr>
                        <td class="tar">审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            审核信息
                        </td>
                    </tr>
                    <tr>
                        <td class="tar">原因：</td>
                        <td colspan="3" class="tal fontColor">
                            原因：原因：原因：
                        </td>
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
    name: 'rechargeAudit',
    data () {
        return {
            cityId: '',
            cityList: [],
            areaId: '', // 大区Id
            areaList: [], // 大区列表
            showAlert2: false,
            radio: '1',
            input: '',
            imageUrl: '',
            value: '',
            value6: [],
            options: [],
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
            tableData: [1]
        }
    },
    watch: {
        areaId (val) {
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getList()
        this.getAreaList()
    },
    methods: {
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                }
            })
        },
        // 获取列表数据
        getList () {
            this.$post('ent_recharge/list', {
                size: this.pageSize,
                page: this.pageNum
            })
                .then(res => {
                    if (res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                })
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
        },
        alertConfirm2 () {
            this.showAlert2 = false
        },
        alertCancel2 () {
            this.showAlert2 = false
        }
    }
}
</script>

<style lang='less' scoped>
.rechargeAudit {
    .table {
        margin: 20px;
        margin-top: 0;
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
                font-weight: bold;
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
.rechargeAudit {
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
    .fontColor {
        .el-radio__label {
            color: #252631;
        }
    }
}
</style>

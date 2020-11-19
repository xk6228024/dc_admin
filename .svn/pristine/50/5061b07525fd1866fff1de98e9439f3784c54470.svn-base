<!-- 权限管理 -->
<template>
    <div class="arrearsQuery">
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
            <label for="">查询时间:</label>
            <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                class="search-text vam"
                end-placeholder="结束日期">
            </el-date-picker>
            <div class="dlb">
                <label for="">企业名称:</label>
                <el-input style="width:160px;" class="search-text" v-model="input" placeholder=""></el-input>
            </div>
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
                label="订单编号">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="社会信用代码">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="充值金额">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="充值方式">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="充值时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="接受邮箱">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="showAlert=true;input=scope.$index" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">详情</el-button>
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
            :showBtn="false"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">企业充值开票信息</td>
                    </tr>
                    <tr>
                        <td class="tar">发票类型：</td>
                        <td colspan="3" class="tal">普通发票</td>
                    </tr>
                    <tr>
                        <td class="tar">企业名称：</td>
                        <td colspan="3" class="tal">深圳市忠诚信息科技开发有限公司</td>
                    </tr>
                    <tr>
                        <td class="tar">详细地址：</td>
                        <td colspan="3" class="tal">大新路009号</td>
                    </tr>
                    <tr>
                        <td class="tar">社会信用代码：</td>
                        <td class="tal">9988866</td>
                        <td class="tar">联系电话：</td>
                        <td class="tal">13265465464</td>
                    </tr>
                    <tr>
                        <td class="tar">联系人：</td>
                        <td class="tal">大华</td>
                        <td class="tar">收票邮箱：</td>
                        <td class="tal">999@qq.com</td>
                    </tr>
                    <tr>
                        <td class="tar">联系手机：</td>
                        <td class="tal">173351546464</td>
                        <td class="tar">开户银行：</td>
                        <td class="tal">中国银行</td>
                    </tr>
                    <tr>
                        <td class="tar">银行账号：</td>
                        <td class="tal">622211564564564564</td>
                        <td class="tar">开户行名称：</td>
                        <td class="tal">深圳支行</td>
                    </tr>
                    <tr>
                        <td class="tar">备注：</td>
                        <td colspan="3" class="tal">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
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
                        <td class="tar">订单编号：</td>
                        <td class="tal">xxx</td>
                        <td class="tar">充值方式：</td>
                        <td class="tal">xxx</td>
                    </tr>
                    <tr>
                        <td class="tar">充值金额：</td>
                        <td class="tal">xx</td>
                        <td class="tar">充值时间：</td>
                        <td class="tal">xx</td>
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
    name: 'arrearsQuery',
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
.arrearsQuery {
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
.arrearsQuery {
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

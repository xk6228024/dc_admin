<!-- 权限管理 -->
<template>
    <div class="externalEquipment">
        <breadcrumb :breadList="['系统设置', '外延设备管理']">
            <!-- <label for="">设备名称:</label> -->
            <el-input class="search-text" v-model="searchText" placeholder="请输入设备名称"></el-input>
            <!-- <label for="">员工名称:</label>
            <el-input class="search-text" v-model="input" placeholder=""></el-input> -->
            <el-button class="search" @click="pageNum=1;pageSize=10;getList()">查 询</el-button>
            <el-button class="fr mt17" type="primary" icon="el-icon-plus" @click="showAlert = true">添加设备</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                ref="myTable"
                :data="tableData"
                border
                :span-method="objectSpanMethod"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="deviceName"
                align="left"
                label="设备名称">
                </el-table-column>
                <el-table-column
                prop="modelNames"
                align="left"
                label="设备型号">
                </el-table-column>
                <el-table-column
                prop="unit"
                align="left"
                label="单位">
                </el-table-column>
                <el-table-column
                prop="modelPrices"
                align="left"
                label="指导单价">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="设备停售">
                    <template slot-scope="scope">
                        <el-switch
                        :disabled="!$checkAuth('sys:user:updateStatus')"
                        @change="changeStatus(scope.row)"
                        v-model="scope.row.status"
                        :active-value="'1'"
                        :inactive-value="'0'"
                        active-color="#"
                        inactive-color="#">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                width="150"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="eidtDetail(scope.row)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">编辑</el-button>
                        <el-button @click="delAction(scope.row.epitaxyDeviceId)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">删除</el-button>
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
            :title="'添加设备'"
            :width="720"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="addForm" label-width="85px" style="padding-left:40px;" class="form clearfix">
                <div class="clearfix">
                    <el-form-item class="fl" label="设备名称:" prop="name">
                    <el-input class="w200_input" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item class="fl" label="单位:" prop="unit">
                        <el-input class="w200_input" v-model="ruleForm.unit"></el-input>
                    </el-form-item>
                </div>
                <div class="table_wrap">
                    <img src="../../assets/img/icon+.svg" class="icon2" @click="addPart">
                    <div class="table_box clearfix">
                        <div class="tr clearfix" style="background:#F2F4F6">
                            <div class="td">设备型号</div>
                            <div class="td">指导单价</div>
                        </div>
                        <div class="tr clearfix" v-for="(p,index) in partList" :key="p.id">
                            <div class="td">
                                <input v-model="p.name" placeholder="请输入设备型号">
                            </div>
                            <div class="td">
                                <input v-model="p.price" type="number" placeholder="请输入指导单价">
                            </div>
                            <img src="../../assets/img/reduce.svg" v-show="partList.length>1" class="icon" @click="delPart(index)">
                        </div>
                    </div>
                </div>
            </el-form>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'externalEquipment',
    data () {
        return {
            spanArr: [],
            eiditId: '',
            searchText: '',
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
                name: '', // 添加角色名称
                unit: ''
            },
            rules: { // 校验规则
                name: [
                    { required: true, message: '请输入设备名称', trigger: 'blur' },
                    { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
                ],
                unit: [
                    { required: true, message: '请输入单位', trigger: 'blur' },
                    { min: 1, max: 2, message: '长度在 1 到 2 个字符', trigger: 'blur' }
                ]
            },
            partList: [
                {
                    name: '',
                    price: ''
                }
            ], // 设备型号列表
            tableData: []
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getList()
    },
    methods: {
        // 合并单元格
        objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                const _row = this.spanArr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
            if (columnIndex === 1) {
                const _row = this.spanArr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
            if (columnIndex === 6) {
                const _row = this.spanArr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        },
        getSpanArr () {
            let contactDot = 0
            this.spanArr = []
            this.tableData.forEach((item, index) => {
                item.index = index
                if (index === 0) {
                    this.spanArr.push(1)
                } else {
                    if (item.epitaxyDeviceId === this.tableData[index - 1].epitaxyDeviceId) {
                        this.spanArr[contactDot] += 1
                        this.spanArr.push(0)
                    } else {
                        this.spanArr.push(1)
                        contactDot = index
                    }
                }
            })
            console.log(this.spanArr)
        },
        eidtDetail (info) {
            this.eiditId = info.epitaxyDeviceId
            this.$get('device/deviceInfo?epitaxyDeviceId=' + info.epitaxyDeviceId)
                .then(res => {
                    if (res.code === 0) {
                        this.ruleForm = {
                            name: res.data.name,
                            unit: res.data.unit
                        }
                        this.partList = res.data.deviceModels
                    }
                })
            this.showAlert = true
        },
        delAction (id) {
            this.$myAlert({
                title: '删除',
                msg: '确定删除吗？',
                type: 'waring'
            }).then(() => {
                this.$get('device/deleteDevice?epitaxyDeviceId=' + id).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getList()
                    }
                })
            }).catch(() => {})
        },
        // 获取列表数据
        getList () {
            this.$post(`device/list?size=${this.pageSize}&page=${this.pageNum}`, {
                deviceName: this.searchText
            })
                .then(res => {
                    if (res.code === 0) {
                        let arr = this.$setNum(res.data, this.pageNum, this.pageSize)
                        let arr2 = []
                        arr.forEach(e => {
                            let tempList = e.modelIds.split(',')
                            tempList.forEach((i, index) => {
                                let model = {
                                    deviceName: e.deviceName,
                                    epitaxyDeviceId: e.epitaxyDeviceId,
                                    modelIds: e.modelIds.split(',')[index],
                                    modelNames: e.modelNames.split(',')[index],
                                    modelPrices: e.modelPrices.split(',')[index],
                                    status: e.status.split(',')[index],
                                    unit: e.unit,
                                    num: e.num
                                }
                                arr2.push(model)
                            })
                        })
                        console.log(arr2)
                        // this.tableData = JSON.parse(JSON.stringify(arr2))
                        this.tableData = arr2
                        this.getSpanArr()
                        this.total = res.total
                    }
                })
        },
        // 删除型号
        delPart (index) {
            if (this.partList.length === 1) return
            this.partList.splice(index, 1)
        },
        // 增加型号
        addPart () {
            this.partList.push({
                name: '',
                price: ''
            })
        },
        changeStatus (info) {
            this.$post('device/changeDeviceStatus', {
                epitaxyDeviceModelId: info.modelIds,
                status: info.status
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getList()
                }
            })
        },
        search () {},
        handleAvatarSuccess () {},
        beforeAvatarUpload () {},
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getList()
        },
        alertConfirm () {
            this.$refs['addForm'].validate((valid) => {
                if (valid) {
                    if (!this.eiditId) {
                        this.$post('device/addDevice', {
                            name: this.ruleForm.name,
                            unit: this.ruleForm.unit,
                            deviceModels: this.partList
                        }).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.getList()
                                this.alertCancel()
                            }
                        })
                    } else {
                        this.$post('device/editDevice', {
                            name: this.ruleForm.name,
                            epitaxyDeviceId: this.eiditId,
                            unit: this.ruleForm.unit,
                            deviceModels: this.partList
                        }).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.getList()
                                this.alertCancel()
                            }
                        })
                    }
                } else {
                    this.$alert('请填写正确的员工信息！')
                    return false
                }
            })
        },
        alertCancel () {
            this.ruleForm.name = ''
            this.ruleForm.unit = ''
            this.eiditId = ''
            this.partList = [{
                name: '',
                price: ''
            }]
            this.showAlert = false
        }
    }
}
</script>

<style lang='less' scoped>
.externalEquipment {
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
        .table_wrap {
            position: relative;
            padding-bottom: 35px;
             .icon2 {
                position: absolute;
                top: 7px;
                left: 620px;
                cursor: pointer;
            }
        }
        .table_box {
            position: relative;
            width: 610px;
            border-bottom: 1px solid #E8ECEF;
            border-right: 1px solid #E8ECEF;
            .tr {
                position: relative;
            }
            .td {
                width: 303px;
                float: left;
                line-height: 36px;
                text-align: center;
                border-top: 1px solid #E8ECEF;
                border-left: 1px solid #E8ECEF;
                input {
                    width: 303px;
                    outline: none;
                    line-height: 36px;
                    text-align: center;
                    border: none;
                }
            }
            .icon {
                position: absolute;
                cursor: pointer;
                top: 8px;
                left: 620px;
            }
        }
    }
}
</style>
<style lang='less'>
.externalEquipment {
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w200_input {
        width: 220px;
    }
}
</style>

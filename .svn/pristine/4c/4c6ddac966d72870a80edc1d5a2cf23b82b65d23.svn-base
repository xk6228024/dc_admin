<!-- 市场区域设置 -->
<template>
    <div class="marketRegion">
        <breadcrumb :breadList="['系统设置', '市场区域设置']">
            <el-button type="primary" icon="el-icon-plus" @click="addRegionAlert = true" :disabled="!$checkAuth('bas:marketArea:save')">新建区域</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="marketAreaName"
                align="left"
                width="250"
                label="区域名称">
                </el-table-column>
                <el-table-column
                prop="marketAreaCodelist"
                align="left"
                label="包含省市">
                    <template slot-scope="scope">
                        {{scope.row.regionsName}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="marketAreaBak"
                align="left"
                width="200"
                label="备注">
                </el-table-column>
                <el-table-column
                align="left"
                width="150"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="regionEdit(scope.row.marketAreaId)" :disabled="!$checkAuth('bas:marketArea:update')" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteRegion(scope.row.marketAreaId)" :disabled="!$checkAuth('bas:marketArea:del')" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <modal
        :title="marketAreaId ? '编辑市场区域' : '新增市场区域'"
        :width="800"
        :alert="addRegionAlert"
        @alertConfirm="alertConfirm"
        @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="marketAreaForm" label-width="120px" class="form">
                <el-form-item label="区域名称：" prop="marketAreaName">
                    <el-input v-model="ruleForm.marketAreaName" placeholder="请输入区域名称"></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="marketAreaBak">
                    <el-input v-model="ruleForm.marketAreaBak" placeholder="请输入备注"></el-input>
                </el-form-item>
                <el-form-item label="省/市选择：" prop="marketAreaCodelist">
                    <!-- <el-transfer
                        v-model="ruleForm.marketAreaCodelist"
                        :titles="['未包含省/市', '已包含城市']"
                        :props="{
                            key: 'regionId',
                            label: 'regionName'
                        }"
                        :data="regionTree">
                    </el-transfer> -->
                    <!-- <div class="tree-header">
                            <el-checkbox v-model="roleAllCheckd" @change="funSelectChange">全部功能</el-checkbox>
                            <span class="tree-header-title">功能授权</span>
                        </div> -->
                        <div style="height: 400px;overflow: scroll;">
                            <el-tree
                                :data="roleTree"
                                show-checkbox
                                node-key="menuId"
                                ref="roleTree"
                                highlight-current
                                v-model="asd"
                                :props="roleProps">
                            </el-tree>
                        </div>
                    <!-- </div> -->
                </el-form-item>
            </el-form>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import { setNum } from '@/utils/utils.js'
export default {
    name: 'marketRegion',
    data () {
        return {
            asd: [],
            ruleForm: {
                alertRole: '', // 添加角色名称
                alertRemark: '', // 添加角色备注
                alertTree: [1]
            },
            roleProps: { // 功能树参数
                children: 'childs',
                id: 'regionId',
                label: 'regionName'
            },
            roleTree: [],
            regionTree: [], // 区域数据
            regionProps: { // 区域树参数
                children: 'children',
                id: 'regionId',
                isLeaf: 'isLeaf',
                label: 'regionName'
            },
            // ruleForm: {
            //     marketAreaName: '', // 区域名称
            //     marketAreaBak: '', // 备注
            //     marketAreaCodelist: []
            // },
            rules: { // 校验规则
                marketAreaName: [
                    { required: true, message: '请输入区域名称', trigger: 'change' },
                    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'change' }
                ],
                marketAreaBak: [
                    { required: false, message: '请输入备注', trigger: 'change' }
                ],
                marketAreaCodelist: [
                    { type: 'array', required: true, message: '请至少选择一个省/市', trigger: 'change' }
                ]
            },
            marketAreaId: '',
            addRegionAlert: false,
            tableData: [
            ]
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getRegionData()
        this.$post('bas/marketRegion/find', {})
        this.$post('bas/region/findRegionTree', {})
            .then(res => {
                console.log(res)
                this.roleTree = res.result
            })
    },
    methods: {
        getCheckedNodes () {
            console.log(this.$refs.roleTree.getCheckedNodes())
        },
        // 根据ID获取区域数据
        getRegionData () {
            this.$post('bas/region/findRegionTreeByAll', {
                data: {
                    parentId: '000000'
                }
            })
                .then(res => {
                    this.regionTree = res.result
                    this.getMarketRegion()
                })
        },
        // 删除区域
        deleteRegion (id) {
            this.$myAlert({
                title: '删除',
                msg: '确定删除吗？',
                type: 'waring'
            }).then(() => {
                this.$post('bas/marketArea/del', {
                    data: {
                        marketAreaId: id
                    }
                }).then(res => {
                    if (res.status === 200) {
                        this.$message({
                            message: '删除成功！',
                            type: 'success'
                        })
                        this.getMarketRegion()
                    } else {
                        this.$alert(res.message, '提示')
                    }
                }).catch(() => {
                })
            }).catch(() => {})
        },
        // 获取市场区域列表
        getMarketRegion () {
            this.$post('bas/marketArea/find', {
                data: {
                }
            }).then(res => {
                // id转换
                res.result.forEach(area => {
                    let str = ''
                    for (let key in area.regions) {
                        str += area.regions[key] + '、'
                    }
                    area.regionsName = str.substr(0, str.length - 1)
                })
                this.tableData = setNum(res.result, 1, 10)
            })
        },
        // 编辑区域
        regionEdit (id) {
            this.addRegionAlert = true
            this.marketAreaId = id
            this.$post('bas/marketArea/edit', {
                data: {
                    marketAreaId: id
                }
            }).then(res => {
                this.ruleForm = {
                    marketAreaName: res.result.marketAreaName,
                    marketAreaBak: res.result.marketAreaBak,
                    marketAreaCodelist: res.result.marketAreaCodelist.split(',')
                }
            })
        },
        // 添加区域弹窗确认
        alertConfirm () {
            this.getCheckedNodes()
            this.$refs.marketAreaForm.validate((valid) => {
                if (valid) {
                    let obj = {
                        data: {
                            marketAreaName: this.ruleForm.marketAreaName,
                            marketAreaCodelist: this.ruleForm.marketAreaCodelist + '',
                            marketAreaBak: this.ruleForm.marketAreaBak
                        }
                    }
                    let url = ''
                    let msg = ''
                    if (this.marketAreaId) {
                        url = 'bas/marketArea/update'
                        msg = '编辑成功！'
                        obj.data.marketAreaId = this.marketAreaId
                    } else {
                        url = 'bas/marketArea/save'
                        msg = '新建成功！'
                    }
                    this.$post(url, obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.getMarketRegion()
                                this.$message({
                                    message: msg,
                                    type: 'success'
                                })
                            }
                            this.alertCancel()
                        })
                } else {
                    this.$alert('请输入完整信息！', '提示')
                    return false
                }
            })
        },
        // 添加区域弹窗取消
        alertCancel () {
            this.ruleForm = {
                marketAreaName: '',
                marketAreaBak: '',
                marketAreaCodelist: []
            }
            this.marketAreaId = ''
            this.addRegionAlert = false
        }
    }
}
</script>

<style lang='less' scoped>
.marketRegion {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        padding-right: 90px;
        .tree {
            width: 240px;
            height: 320px;
            display: inline-block;
            background: #fff;
            border: 1px solid #E8ECEF;
            border-radius: 4px;
            .tree-header {
                padding: 0 10px;
                height: 32px;
                border-bottom: 1px solid #E8ECEF;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tree-header-title {
                    color: #778CA2;
                    font-size: 14px;
                }
            }
            .el-tree {
                height: 280px;
                overflow: auto;
            }
        }
    }
}
</style>
<style lang="less">
.marketRegion {
    .el-transfer-panel {
        width: 240px;
        .el-transfer-panel__header {
            height: 32px;
            line-height: 32px;
            background: #fff;
            .el-checkbox {
                .el-checkbox__label {
                    color: #778CA2;
                    font-size: 14px;
                }
            }
        }
    }
    .el-transfer__buttons {
        padding: 0 37px;
    }
}
</style>

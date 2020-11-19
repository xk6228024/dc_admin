<!-- 市场区域设置 -->
<template>
    <div class="marketRegion">
        <breadcrumb :breadList="['系统设置', '市场区域设置']">
            <el-button class="fr mt17" size="mini" type="primary" @click="addRegion" :disabled="!$checkAuth('bas:marketArea:save')">新建区域</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="showLoading"
                style="width: 100%">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="areaName"
                align="left"
                width="250"
                label="区域名称">
                </el-table-column>
                <el-table-column
                prop="cityInfo"
                align="left"
                label="包含城市">
                    <template slot-scope="scope">
                        <span v-html="scope.row.cityInfo"></span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="areaBak"
                align="left"
                width="200"
                label="备注">
                </el-table-column>
                <el-table-column
                align="left"
                width="150"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="regionEdit(scope.row.sysAreaId)" :disabled="!$checkAuth('bas:marketArea:update')" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteRegion(scope.row.sysAreaId)" :disabled="!$checkAuth('bas:marketArea:del')" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <modal
        :title="marketAreaId ? '编辑市场区域' : '新增市场区域'"
        :width="600"
        :alert="addRegionAlert"
        @alertConfirm="alertConfirm"
        @alertCancel="alertCancel">
            <el-form :model="ruleForm" ref="marketAreaForm" :rules="rules" status-icon label-width="120px" class="form" >
                <el-form-item label="区域名称：" prop="marketAreaName" :rules="$validate({ required: true, max: 10 })">
                    <el-input v-model="ruleForm.marketAreaName" placeholder="请输入区域名称"></el-input>
                </el-form-item>
                <el-form-item label="包含城市：" prop="marketAreaCodelist">
                    <el-select
                    v-model="ruleForm.marketAreaCodelist"
                    multiple
                    filterable
                    style="width:100%;"
                    placeholder="请选择城市">
                        <el-option-group
                        v-for="(val, key) in cityList"
                        :key="key"
                        :label="key">
                            <el-option
                                v-for="item in cityList[key]"
                                :key="item.regionId"
                                :label="item.regionName"
                                :value="item.regionId">
                            </el-option>
                        </el-option-group>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注：" prop="marketAreaBak">
                    <el-input v-model="ruleForm.marketAreaBak" placeholder="请输入备注"></el-input>
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
            showLoading: false,
            marketAreaCodelist: [],
            selectCity: [], // 选择的城市列表
            allCityList: [], // 全部城市列表
            cityList: [], // 城市树形列表
            defaultProps: {
                children: 'children',
                id: 'regionId',
                label: 'regionName'
            },
            showPopover: false,
            regionTree: [], // 区域数据
            regionProps: { // 区域树参数
                children: 'children',
                id: 'regionId',
                isLeaf: 'isLeaf',
                label: 'regionName'
            },
            ruleForm: {
                marketAreaName: '', // 区域名称
                marketAreaBak: '', // 备注
                marketAreaCodelist: []
            },
            rules: { // 校验规则
                marketAreaName: [
                    { required: true, message: '请输入区域名称', trigger: 'blur' },
                    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                ],
                marketAreaBak: [
                    { required: false, message: '请输入备注', trigger: 'blur' }
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
        // this.getRegionData()
        // console.log(this.$validate({ required: true, type: 'array1' }))
        this.getMarketRegion()
        // this.findCityList()
        this.getProvinceList()
    },
    methods: {
        // 获取城市列表
        findCityList () {
            this.$post('advertisement/citylist', {})
                .then(res => {
                    this.allCityList = [...res.data]
                    res.data.forEach(item => {
                        item.initial = window.pinyinUtil.getFirstLetter(item.cityName).substr(0, 1)
                    })
                    // 按首字母排序
                    let cityList = res.data.sort(function (objA, objB) {
                        if (objA.initial > objB.initial) {
                            return 1
                        } else if (objA.initial < objB.initial) {
                            return -1
                        } else {
                            return 0
                        }
                    })
                    // 将同字母类型进行分类
                    let obj = {}
                    cityList.forEach(item => {
                        if (!obj[item.initial]) {
                            obj[item.initial] = [item]
                        } else {
                            obj[item.initial].push(item)
                        }
                    })
                    this.cityList = obj
                })
        },
        // 获取省市列表
        getProvinceList (id) {
            this.$get('area/city/notallocate?areaId=' + (id || '')).then(res => {
                if (res.code === 0) {
                    this.allCityList = res.data
                    let arr = []
                    let obj = {}
                    res.data.forEach(e => {
                        if (e.regionName === '北京市') {
                            console.log(e)
                        }
                        if (e.regionType === 1) {
                            arr.push(e)
                        }
                    })
                    arr.forEach(i => {
                        i.children = []
                        res.data.forEach(e => {
                            if (i.regionId === e.parentId) {
                                i.children.push(e)
                            }
                        })
                    })
                    arr.forEach(item => {
                        obj[item.regionName] = item.children
                    })
                    this.cityList = obj
                }
            })
        },
        loadNode1 (node, resolve) {
            if (node.level === 0) {
                return resolve(this.cityList)
            } else if (node.level === 1) {
                this.$get('list/regioncityList?provinceRegionId=' + node.data.regionId).then(res => {
                    if (res.code === 0) {
                        return resolve(res.data)
                    }
                })
            } else {
                return resolve([])
            }
        },
        handleNodeClick () {
            this.ruleForm.marketAreaCodelist = this.$refs.cityTree.getCheckedNodes().map(i => {
                return i.regionId
            })
            this.selectCity = this.$refs.cityTree.getCheckedNodes()
        },
        // 添加区域
        addRegion () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('region:add')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.addRegionAlert = true
            this.getProvinceList()
            console.log(this.ruleForm)
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
            // 权限校验**********************************************************
            if (!this.$checkAuth('region:delete')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$confirm('确定删除该区域吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$get('area/deleteArea?sysAreaId=' + id).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            message: '删除成功！',
                            type: 'success'
                        })
                        this.getMarketRegion()
                    }
                })
            }).catch(() => {
            })
        },
        // 获取市场区域列表
        getMarketRegion () {
            this.showLoading = true
            this.$get('area/list', {}).then(res => {
                this.showLoading = false
                if (res.code === 0) {
                    this.tableData = setNum(res.data, 1, 999)
                }
            })
        },
        // 编辑区域
        regionEdit (id) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('region:edit')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.addRegionAlert = true
            this.getProvinceList(id)
            this.marketAreaId = id
            this.$get('area/areaInfo?sysAreaId=' + id).then(res => {
                let ruleForm = {
                    marketAreaName: res.data.areaName,
                    marketAreaBak: res.data.areaBak
                }
                ruleForm.marketAreaCodelist = res.data.regions.map(e => { return e.regionId })
                this.ruleForm = ruleForm
            })
        },
        // 添加区域弹窗确认
        alertConfirm () {
            this.$refs.marketAreaForm.validate((valid) => {
                if (valid) {
                    let obj = {
                        areaName: this.ruleForm.marketAreaName,
                        sysAreaRegions: [],
                        areaBak: this.ruleForm.marketAreaBak
                    }
                    this.ruleForm.marketAreaCodelist.forEach(id => {
                        this.allCityList.forEach(city => {
                            if (id === city.regionId) {
                                obj.sysAreaRegions.push(city)
                            }
                        })
                    })
                    let url = ''
                    let msg = ''
                    if (this.marketAreaId) {
                        url = 'area/editArea'
                        msg = '编辑成功！'
                        obj.sysAreaId = this.marketAreaId
                    } else {
                        url = 'area/addArea'
                        msg = '新建成功！'
                    }
                    console.log(obj)
                    this.$post(url, obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.getMarketRegion()
                                this.$message({
                                    message: msg,
                                    type: 'success'
                                })
                                this.alertCancel()
                            }
                        })
                } else {
                    this.$alert('请输入完整信息！', '提示')
                    return false
                }
            })
        },
        // 添加区域弹窗取消
        alertCancel () {
            this.$refs.marketAreaForm && this.$refs.marketAreaForm.resetFields()
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
    .modal .wrap .alert-content {
        max-height: 300px;
    }
}
.el-popover {
    height: 300px;
    width: 590px;
    overflow-y: scroll;
}
</style>

<template>
    <div class="base__carbrand">
        <breadcrumb>
            <label for="">品牌车系车型:</label>
            <el-input style="width:160px;" class="search-text" v-model="dataForm.key" placeholder="品牌名称"></el-input>
            <div class="dlb">
                <el-button class="search" @click="queryData">查询</el-button>
            </div>
            <el-button class="fr mt17" type="primary" @click="addOrUpdateHandle(4)">新增车型</el-button>
            <el-button class="fr mt17" type="primary" @click="addOrUpdateHandle(3)">新增车系</el-button>
            <el-button class="fr mt17" type="primary" @click="addOrUpdateHandle(2)">新增二级品牌</el-button>
            <el-button class="fr mt17" type="primary" @click="addOrUpdateHandle(1)">新增一级品牌</el-button>
            <!-- <el-button class="fr mt17" type="primary" @click="addOrUpdateHandle(3)">新增车型</el-button> -->
            <!-- <el-button class="fr mt17" type="primary" @click="$router.push('/agentEdit')">创建代理</el-button> -->
        </breadcrumb>
        <!-- <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
            <el-form-item>
                <el-input v-model="dataForm.key" placeholder="品牌名称" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="queryData()">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="addOrUpdateHandle(1)">新增品牌</el-button>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="addOrUpdateHandle(2)">新增车系</el-button>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="addOrUpdateHandle(3)">新增车型</el-button>
            </el-form-item>
        </el-form> -->
        <div style="margin: 0 20px 20px 20px;">
            <el-table border :data="dataList" class="tableBorder" v-loading="dataListLoading" @selection-change="selectionChangeHandle" style="width: 100%;">
                <el-table-column prop="nodeId" header-align="left" align="left" width="300"  label="ID">
                </el-table-column>
                <tb-tree-load-col prop="nodeName" levelKey="nodeType" treeKey="nodeId" parentKey="nodeParentId" header-align="left" label="品牌车系车型">
                </tb-tree-load-col>
                <!-- <el-table-column prop="nodeParentId" header-align="left" align="left" width="250" label="父级名称">
                </el-table-column> -->
                <!-- <el-table-column prop="orderNum" header-align="left" align="left" width="100" label="排序号">
                </el-table-column> -->
                <el-table-column fixed="right" header-align="left" align="left" width="150" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.nodeType,scope.row.nodeId)">修改</el-button>
                        <el-button type="text" size="small" @click="deleteHandle(scope.row.nodeType,scope.row.nodeId, scope.row.nodeName)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="sizeChangeHandle" @current-change="currentChangeHandle" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40, 50, 100]" :page-size="pageSize" :total="totalPage" layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
            <!-- 弹窗, 新增 / 修改 -->
            <add-or-update0 v-if="addOrUpdateVisible0" ref="addOrUpdate0" @refreshDataList="getDataList"></add-or-update0>
            <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
            <cs-add-or-update v-if="csAddOrUpdateVisible" ref="csAddOrUpdate" @refreshDataList="getDataList"></cs-add-or-update>
            <cm-add-or-update v-if="cmAddOrUpdateVisible" ref="cmAddOrUpdate" @refreshDataList="getDataList"></cm-add-or-update>
        </div>
    </div>
</template>

<script>
import TbTreeLoadCol from '@/components/tb-tree-load-col'
import AddOrUpdate from './carbrand-add-or-update'
import AddOrUpdate0 from './carbrand-add-or-update0'
import CsAddOrUpdate from './carseries-add-or-update'
import CmAddOrUpdate from './carmodel-add-or-update'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name: 'base__carbrand',
    data () {
        return {
            dataForm: {
                key: ''
            },
            dataList: [],
            pageIndex: 1,
            pageSize: 10,
            totalPage: 0,
            dataListLoading: false,
            dataListSelections: [],
            addOrUpdateVisible0: false,
            addOrUpdateVisible: false,
            csAddOrUpdateVisible: false,
            cmAddOrUpdateVisible: false
        }
    },
    components: {
        AddOrUpdate0,
        Breadcrumb,
        AddOrUpdate,
        TbTreeLoadCol,
        CsAddOrUpdate,
        CmAddOrUpdate
    },
    activated () {
        this.getDataList()
    },
    methods: {
        // 查询按钮点击
        queryData () {
            this.pageIndex = 1
            this.pageSize = 10
            this.requestData({
                'nodeType': 1,
                // 'page': 1,
                // 'limit': this.pageSize,
                'vehicleBrandName': this.dataForm.key
            })
        },
        // 获取数据列表
        getDataList () {
            this.requestData({
                // 'page': this.pageIndex,
                // 'limit': this.pageSize,
                'nodeType': 1,
                'vehicleBrandName': this.dataForm.key
            })
        },
        requestData (queryParams) {
            this.dataListLoading = true
            this.$post(`basVehicle/brandList?page=${this.pageIndex}&size=${this.pageSize}`, queryParams).then(data => {
                // console.log(data)
                if (data && data.code === 0) {
                    data.data.forEach(element => {
                        if (element.label) {
                            element.leaf = true
                        }
                    })
                    this.dataList = data.data
                    // console.log(this.dataList)
                    this.totalPage = data.count
                } else {
                    this.dataList = []
                    this.totalPage = 0
                }
                this.dataListLoading = false
            }).catch(err => {
                console.log(err)
                this.dataListLoading = false
            })
        },
        // 每页数
        sizeChangeHandle (val) {
            this.pageSize = val
            this.pageIndex = 1
            this.getDataList()
        },
        // 当前页
        currentChangeHandle (val) {
            this.pageIndex = val
            this.getDataList()
        },
        // 多选
        selectionChangeHandle (val) {
            this.dataListSelections = val
        },
        // 新增 / 修改
        addOrUpdateHandle (type, id) {
            if (type === 1) {
                // console.log('????')
                this.addOrUpdateVisible0 = true
            } else if (type === 2) {
                this.addOrUpdateVisible = true
            } else if (type === 3) {
                this.csAddOrUpdateVisible = true
            } else if (type === 4) {
                this.cmAddOrUpdateVisible = true
            }
            // console.log(id)
            this.$nextTick(() => {
                if (type === 1) {
                    this.$refs.addOrUpdate0.dataForm.carBrandId = id || 0
                    this.$refs.addOrUpdate0.init()
                } else if (type === 2) {
                    this.$refs.addOrUpdate.dataForm.carBrandId = id || 0
                    this.$refs.addOrUpdate.init()
                } else if (type === 3) {
                    this.$refs.csAddOrUpdate.dataForm.carSeriesId = id || 0
                    this.$refs.csAddOrUpdate.init()
                } else if (type === 4) {
                    this.$refs.cmAddOrUpdate.dataForm.carModelId = id || 0
                    this.$refs.cmAddOrUpdate.init()
                }
            })
        },
        // 删除
        deleteHandle (type, id, name) {
            this.$confirm(`确定对 ${name} 进行删除操作?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let url = ''
                let obj = ''
                if (type === 1 || type === 2) {
                    url = 'basVehicle/delBrand'
                    obj = {
                        data: {
                            vehicleBrandId: id,
                            vehicleBrandLevel: type
                        }
                    }
                } else if (type === 3) {
                    url = 'basVehicle/delSeries'
                    obj = {
                        data: {
                            vehicleSeriesId: id
                        }
                    }
                } else if (type === 4) {
                    url = 'basVehicle/delModel'
                    obj = {
                        data: {
                            vehicleModelId: id
                        }
                    }
                }
                this.$post(url, obj).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            message: '操作成功',
                            type: 'success',
                            duration: 1500,
                            onClose: () => {
                                this.getDataList()
                            }
                        })
                    }
                })
            }).catch(() => { })
        }
    }
}
</script>
<style lang="less">
.base__carbrand {
    .el-input-number.is-controls-right .el-input-number__increase {
        margin-top: 1px;
    }
    .el-input-number.is-controls-right .el-input-number__decrease {
        bottom: 2px;
    }
}
</style>

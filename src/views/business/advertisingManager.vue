
<template>
    <div class="advertisingManager" id="advertisingManager">
        <breadcrumb>
            <div class="dlb">
                <label for="">广告标题:</label>
                <el-input style="width:160px;" class="search-text" v-model="searchName" placeholder=""></el-input>
            </div>
            <label for="">状态:</label>
            <el-select
                clearable
                style="width:160px;"
                v-model="status">
                <el-option
                v-for="item in [{label:'开启',value:1},{label:'关闭',value:0}]"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label>发布时间：</label>
                <el-date-picker
                    clearable
                    v-model="dateRange"
                    type="daterange"
                    unlink-panels
                    range-separator="~"
                    start-placeholder="开始"
                    class="searchIpt dateSearch"
                    value-format="yyyy-MM-dd"
                    style="line-height:1"
                    end-placeholder="结束">
                </el-date-picker>
                <el-button type="primary" class="search mt17" @click="search">查 询</el-button>
            </div>
            <div class="dlb fr">
                <el-button class="fr mt17" icon="el-icon-plus" type="primary"  @click="goDetail(scope.row.bankId)">发布广告</el-button>
                <el-button class="fr mt17">导出</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                 <el-table-column
                prop="bankName"
                align="left"
                min-width="6%"
                label="广告标题">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="广告类型">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="创建人">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="创建时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="审核人">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="审核时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="投放时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="结束时间">
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.bankId)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:user:view')">编辑</el-button>
                        <el-button @click="deleteInfo(scope.row.bankId)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:user:view')">结束</el-button>
                        <el-button @click="goDetail(scope.row.bankId, 1)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:user:view')">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination clearfix">
                <el-pagination
                    style="float:right"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNum"
                    :page-sizes="[10, 20, 30, 40, 50, 100]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
                </el-pagination>
            </div>
        </div>
        <modal
            :title="editId?'修改银行信息':'新增银行信息'"
            :width="600"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <el-form :model="form" ref="form"  label-width="100px">
                    <el-form-item label="银行名称：" prop="bankName" :rules="$validate({required:true})">
                        <el-input
                            clearable
                            maxlength="30"
                            type="text"
                            v-model="form.bankName"
                            placeholder="请输入银行名称">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="备注：" prop="remark" :rules="$validate({required:false})">
                        <el-input
                            clearable
                            maxlength="300"
                            type="textarea"
                            v-model="form.remark"
                            placeholder="备注">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'advertisingManager',
    data () {
        return {
            dateRange: [],
            status: '',
            editId: '',
            form: {
                bankName: '',
                remark: ''
            },
            allCityList: [],
            multipleSelection: [],
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaIds: [], // 大区Id
            searchName: '',
            certStatus: 0,
            dateRegion: [],
            value: '',
            options: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [1]
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        // this.getAreaList()
        // this.getDataList()
        // this.getAllCity()
    },
    methods: {
        goDetail (id, type) {
            if (type) {
                this.$router.push('/advertisingView')
            } else {
                this.$router.push('/advertisingDetail')
            }
        },
        editInfo (item) {
            this.editId = item.bankId
            this.form.bankName = item.bankName
            this.form.remark = item.remark
            this.showAlert = true
        },
        deleteInfo (id) {
            this.$confirm('确认删除该条数据吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('product/cjl/base/bank/del', {
                    bankId: id
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '删除成功！'
                            })
                            this.getDataList()
                        }
                    })
            }).catch(() => {})
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            // let obj = {
            //     areaCode: this.areaIds[0],
            //     provinceCode: this.areaIds[1],
            //     cityCode: this.areaIds[2],
            //     enterpriseName: this.searchName,
            //     status: this.status
            // }
            this.$post('product/cjl/base/bank/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                bankName: this.searchName
            })
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 弹窗确认
        alertConfirm () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let url = ''
                    if (this.editId) {
                        url = '/product/cjl/base/bank/edit'
                    } else {
                        url = '/product/cjl/base/bank/add'
                    }
                    this.$post(url, {
                        bankId: this.editId,
                        bankName: this.form.bankName,
                        remark: this.form.remark
                    }).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                message: '操作成功',
                                type: 'success'
                            })
                            this.alertCancel()
                            this.getDataList()
                        }
                    })
                }
            })
        },
        // 弹窗取消
        alertCancel () {
            this.$refs['form'].resetFields()
            this.editId = ''
            this.showAlert = false
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        }
    }
}
</script>

<style lang='less' scoped>
.advertisingManager {
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
    .bottom-data {
        color:#98A9BC;
        font-weight: normal;
    }
    .pagination {
        position: relative;
        .bottom-data {
            line-height: 36px;
            color:#98A9BC;
            font-weight: normal;
            margin-top: 20px;
            // position: absolute;
            // left:0;
            // top: 9px;
        }
    }
}
</style>

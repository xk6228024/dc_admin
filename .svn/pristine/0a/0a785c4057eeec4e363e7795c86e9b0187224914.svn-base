
<template>
    <div class="bankInfo" id="bankInfo">
        <breadcrumb>
            <div class="dlb">
                <label for="">银行名称:</label>
                <el-input style="width:160px;" class="search-text" v-model="searchName" placeholder=""></el-input>
                <el-button class="search" @click="search">查 询</el-button>
            </div>
            <div class="dlb fr">
                <el-button class="fr mt17" icon="el-icon-plus" type="primary"  @click="showAlert=true">新增</el-button>
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
                label="银行名称">
                </el-table-column>
                 <el-table-column
                prop="remark"
                align="left"
                min-width="6%"
                label="备注">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="editInfo(scope.row)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:user:view')">修改</el-button>
                        <el-button @click="deleteInfo(scope.row.bankId)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:user:view')">删除</el-button>
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
                    layout="total, sizes, prev, pager, next, jumper, slot"
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
    name: 'bankInfo',
    data () {
        return {
            editId: '',
            form: {
                bankName: '',
                remark: ''
            },
            allCityList: [],
            multipleSelection: [],
            status: '',
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaIds: [], // 大区Id
            searchName: '',
            auditRadio: '1', // 弹窗审核结果
            certStatus: 0,
            dateRegion: [],
            value: '',
            options: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        // this.getAreaList()
        this.getDataList()
        // this.getAllCity()
    },
    methods: {
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
        // 打开详情弹窗
        goDetail (id) {
            this.showAlert = true
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
.bankInfo {
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
<style lang='less'>
.bankInfo {
    .small_input {
        .el-input__inner {
            width: 140px;
        }
    }
    .w200_input {
        width: 220px;
    }
    .w120_input {
        width: 100px;
    }
    .el-pagination {
        position: relative;
    }
}
#bankInfo {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

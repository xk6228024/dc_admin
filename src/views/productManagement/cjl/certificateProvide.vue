
<template>
    <div class="certificateProvide" id="certificateProvide">
        <breadcrumb>
            <div class="dlb">
                <!-- <label for="">所属区域:</label>
                <el-cascader
                    placeholder="请选择"
                    v-model="areaId"
                    clearable
                    :options="allCityList"
                    change-on-select
                    filterable>
                </el-cascader>
                <label for="">状态:</label>
                <el-select class="w120_input" clearable v-model="regionId" placeholder="请选择">
                    <el-option
                    v-for="item in [{value:0,label:'关闭'},{value:1,label:'开通'}]"
                    :key="item.value"
                    :label="item.label"
                    clearable
                    :value="item.value">
                    </el-option>
                </el-select> -->
                <label for="">企业名称:</label>
                <el-input style="width:160px;" class="search-text" v-model="enterpriseNamekey" placeholder="请输入企业名称"></el-input>
                <label for="">日期范围:</label>
                <el-date-picker
                    v-model="dateRegion"
                    type="daterange"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    value-format="yyyy-MM-dd"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="search">查 询</el-button>
            </div>
            <div class="dlb fr">
                <el-button class="fr mt17"  type="primary" :disabled="!$checkAuth('cjl:certificate:add')" @click="showAlert = true">发放合格证</el-button>
                <!-- <el-dropdown
                trigger="click" class="fr mt17" @command="batchOperation"
                :placement="'top'" :disabled="!multipleSelection.length">
                    <el-button >
                        批量选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="'enable'">启用</el-dropdown-item>
                        <el-dropdown-item :command="'disabled'">关闭</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->
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
               <!--  <el-table-column
                prop="provinceId"
                align="left"
                min-width="10%"
                label="省份">
                    <template slot-scope="scope">{{scope.row.provinceId}}</template>
                </el-table-column> -->
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="20%"
                label="维修企业名称">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateS"
                align="left"
                min-width="10%"
                label="开始编号">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateE"
                align="left"
                min-width="10%"
                label="结束编号">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="10%"
                label="发放数量">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="10%"
                label="操作人">
                </el-table-column>
                 <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="发放时间">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="deleteData(scope.row.enterpriseCertificatId)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:certificate:remove')">删除</el-button>
                        <!-- <el-button v-if="scope.row.deleteStatus" @click="changeStatus(scope.row.cityDomain, 0)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">开通</el-button>
                        <el-button v-if="!scope.row.deleteStatus" @click="changeStatus(scope.row.cityDomain, 1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">关闭</el-button> -->
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
                <!-- <p class="bottom-data fl" style="">本期数据&nbsp;&nbsp;&nbsp;总充值用户：{{userCount}}人&nbsp;&nbsp;&nbsp;总充值金额：{{chargeMoneyCount}}元</p> -->
            </div>
        </div>
        <modal
            :title="'发放合格证'"
            :width="560"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <el-form :model="form" ref="form"  label-width="100px">
                    <el-form-item label="选择企业：" prop="entName" :rules="$validate({required:true,msg:'请选择企业'})">
                        <el-select
                            style="width:100%;"
                            v-model.trim="form.entName"
                            class="edit_input"
                            filterable
                            remote
                            clearable
                            reserve-keyword
                            placeholder="请输入关键词"
                            @change="searchListChange"
                            @focus="remoteMethod('')"
                            :remote-method="remoteMethod"
                            :loading="searchLoading">
                            <el-option
                            v-for="item in searchList"
                            :key="item.enterpriseId"
                            :label="item.enterpriseName"
                            :value="item.enterpriseName">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="发卡数量：" prop="enterpriseCertificateNum" :rules="$validate({required:true,msg:'',type:'>0'})">
                        <el-input
                            disabled
                            clearable
                            maxlength="12"
                            class=""
                            type="number"
                            v-model="form.enterpriseCertificateNum"
                            placeholder="自动显示">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="开始编号：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-input
                            clearable
                            maxlength="12"
                            class=""
                            type="number"
                            v-model="form.enterpriseCertificateS"
                            placeholder="请输入">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="结束编号：" prop="enterpriseCertificateE" :rules="$validate({required:true,msg:'请输入'})">
                        <el-input
                            clearable
                            maxlength="12"
                            class=""
                            type="number"
                            v-model="form.enterpriseCertificateE"
                            placeholder="请输入">
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
    name: 'certificateProvide',
    data () {
        return {
            searchList: [],
            searchLoading: false,
            form: {
                enterpriseCertificateNum: '',
                entName: '',
                enterpriseId: '',
                enterpriseCertificateS: '',
                enterpriseCertificateE: ''
            },
            allCityList: [],
            multipleSelection: [],
            chargeStatusList: [
                {
                    label: '成功',
                    value: 1
                },
                {
                    label: '失败',
                    value: 0
                }
            ],
            chargeStatus: '',
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaId: '', // 大区Id
            enterpriseNamekey: '',
            auditRadio: '1', // 弹窗审核结果
            certStatus: 0,
            certStatusList: [
                {
                    value: 0,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '通过'
                },
                {
                    value: 2,
                    label: '未通过'
                }
            ],
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
    // computed: {
    //     enterpriseCertificateNum () {
    //         return this.form.enterpriseCertificateE - this.form.enterpriseCertificateS + 1
    //     }
    // },
    components: {
        Modal,
        Breadcrumb
    },
    created () {
        // this.getAreaList()
        this.getDataList()
        // this.getAllCity()
    },
    watch: {
        'form.enterpriseCertificateE' (val) {
            if (val && this.form.enterpriseCertificateS) {
                this.form.enterpriseCertificateNum = val - this.form.enterpriseCertificateS + 1
            }
        },
        'form.enterpriseCertificateS' (val) {
            if (val && this.form.enterpriseCertificateE) {
                this.form.enterpriseCertificateNum = this.form.enterpriseCertificateE - val + 1
            }
        }
        // areaId (val) {
        //     if (!val) return
        //     this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
        //         if (res.code === 0) {
        //             this.cityList = res.data
        //         }
        //     })
        // }
    },
    methods: {
        deleteData (val) {
            this.$confirm('确定删除这条消息吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post(`/product/cjl/certificate/remove/${val}`).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }).catch(() => {})
        },
        // 下来搜索查询
        remoteMethod (query) {
            this.searchLoading = true
            this.$get('enterprise/selectEnterpriseByName?enterpriseName=' + query).then(res => {
                this.searchList = res.data || []
                this.searchLoading = false
            })
        },
        // 下来搜索赋值
        searchListChange (val) {
            if (!val) {
                this.form.enterpriseId = ''
            }
            // console.log(val)
            this.searchList.forEach(e => {
                if (e.enterpriseName === val) {
                    this.form.enterpriseId = e.enterpriseId
                }
            })
        },
        // 表格多选事件
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        changeStatus (cityDomain, status) {
            this.$post('syscity/status', {
                data: {
                    cityDomain,
                    deleteStatus: status
                }
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getDataList()
                }
            })
        },
        // 检测线设置
        goSetting (id) {
            // this.$router.push('/cjlEnterpriseArchivesDetail?id=' + id)
            this.showAlert = true
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                entName: this.enterpriseNamekey,
                startTime: this.dateRegion && this.dateRegion[0],
                endTime: this.dateRegion && this.dateRegion[1]
            }
            this.$post('product/cjl/certificate/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                        // this.chargeMoneyCount = res.data.totalMoney
                        // console.log(this.chargeMoneyCount)
                        // this.userCount = res.data.userCount
                        // console.log(this.userCount)
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
            // this.showAlert = false
            // this.alertCancel()
            console.log(this.form)
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.$post('/product/cjl/certificate/add', this.form).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '操作成功'
                            })
                            this.getDataList()
                            this.alertCancel()
                        }
                    })
                }
            })
        },
        // 弹窗取消
        alertCancel () {
            this.showAlert = false
            this.$refs.form.resetFields()
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
.certificateProvide {
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
        padding: 0 40px 20px;
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
.certificateProvide {
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
#certificateProvide {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

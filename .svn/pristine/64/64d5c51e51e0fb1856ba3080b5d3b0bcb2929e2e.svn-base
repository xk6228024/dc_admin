
<template>
    <div class="certificateProvide" id="certificateProvide">
        <search v-model='searchValue' :options='searchOption' @search='search()'>
            <!-- <el-button type="primary" size="mini"  @click="showAlert=true">识别卡查询</el-button> -->
        </search>
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
                prop="enterpriseName"
                align="left"
                min-width="20%"
                label="识别卡ID">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="10%"
                label="车牌颜色">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="10%"
                label="车辆类型">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="20%"
                label="车主单位">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="12%"
                label="申请时间">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="showAlert=true;editId=scope.row.enterpriseId" type="text" size="small">审核</el-button>
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
            :title="'新建领取'"
            :width="777"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <h4 class="mb20">车辆信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车牌号码：</span>
                        <span class="c6">粤B952225</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车牌颜色：</span>
                        <span class="c6">黄色</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车辆类型：</span>
                        <span class="c6">大型货车</span>
                    </el-col>
                    <el-col :span="24" class="mb20">
                        <span class="c3">车主单位：</span>
                        <span class="c6">团风县宏达汽车维修服务中心</span>
                    </el-col>
                </el-row>
                <h4 class="mb20">识别卡注销申请信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">申请人名称：</span>
                        <span class="c6">检测中心</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">申请时间：</span>
                        <span class="c6">2020-02-06 13:22:00</span>
                    </el-col>
                </el-row>
                <el-form :model="form" ref="form"  label-width="100px" class="mb20">
                    <el-form-item label="注销原因：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-input
                            clearable
                            maxlength="12"
                            size="mini"
                            class=""
                            :rows="3"
                            resize="none"
                            disabled
                            type="textarea"
                            v-model="form.text"
                            placeholder="请输入">
                        </el-input>
                    </el-form-item>
                </el-form>
                <h4 class="mb20">审核意见</h4>
                <el-form :model="form" ref="form"  label-width="100px">
                    <el-form-item label="审核意见：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-input
                            clearable
                            maxlength="12"
                            size="mini"
                            class=""
                            :rows="3"
                            resize="none"
                            type="textarea"
                            v-model="form.enterpriseCertificateS"
                            placeholder="请输入">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import Search from '@/components/search'
export default {
    name: 'certificateProvide',
    data () {
        return {
            editId: '',
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '车牌颜色',
                    type: 'select',
                    typeList: 'plateColor',
                    key: 'userName'
                },
                {
                    label: '状态',
                    type: 'select',
                    list: [],
                    key: 'userName3'
                },
                {
                    label: '车牌号码',
                    type: 'input',
                    key: 'userNam1e'
                }
            ],
            searchValue: {},
            searchList: [],
            searchLoading: false,
            form: {
                text: '车辆已报废，注销该识别卡',
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
            tableData: [{}]
        }
    },
    // computed: {
    //     enterpriseCertificateNum () {
    //         return this.form.enterpriseCertificateE - this.form.enterpriseCertificateS + 1
    //     }
    // },
    components: {
        Search,
        Modal
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
                        res.data = [{}]
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
            this.form.enterpriseId = this.editId
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

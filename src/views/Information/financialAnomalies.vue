
<template>
    <div class="financialAnomalies" id="financialAnomalies">
        <search v-model='searchValue' :options='searchOption' @search='search()'>
            <el-dropdown
                trigger="click"
                @command="batchOperation"
                placement="bottom">
                <el-button  size="mini" type="primary">
                    新增异常<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="'btn1'">新增异常充值</el-dropdown-item>
                    <el-dropdown-item :command="'btn2'">新增异常退款</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </search>
        <div class="table tableWrap">
            <el-table
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
                prop="cityName"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="enterpriseTypeId"
                align="left"
                min-width="10%"
                label="企业类型">
                    <template slot-scope="scope">
                        <span v-if="scope.row.enterpriseTypeId==1">维修企业</span>
                        <span v-if="scope.row.enterpriseTypeId==2">检测企业</span>
                        <span v-if="scope.row.enterpriseTypeId==3">运输企业</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="anomaliesType"
                align="left"
                min-width="10%"
                label="款项类型">
                    <template slot-scope="scope">
                        <span v-if="scope.row.anomaliesType==1">充值</span>
                        <span v-if="scope.row.anomaliesType==2">退款</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="anomaliesAmount"
                align="left"
                min-width="10%"
                label="金额">
                </el-table-column>
                <el-table-column
                prop="createUserName"
                align="left"
                min-width="10%"
                label="申请人">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="申请时间">
                    <template slot-scope="scope">
                        {{scope.row.createTime | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="updateUserName"
                align="left"
                min-width="10%"
                label="审核人">
                </el-table-column>
                <el-table-column
                prop="updateTime"
                align="left"
                min-width="10%"
                label="审核时间">
                    <template slot-scope="scope">
                        {{scope.row.updateTime | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="auditStatus"
                align="left"
                min-width="10%"
                label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.auditStatus==0">待审核</span>
                        <span v-if="scope.row.auditStatus==1">审核通过</span>
                        <span v-if="scope.row.auditStatus==2">审核不通过</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="12%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="iin(scope.row)" type="text" size="small">详情</el-button>
                        <el-button @click.stop="deleteData(scope.row)" v-if="scope.row.auditStatus==0" type="text" size="small" class="red">删除</el-button>
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
            :title="editObj.anomaliesType==1?'异常充值':'异常退款'"
            :width="666"
            :alert="showAlert"
            confirmText="审核通过"
            cancelText="审核不通过"
            @alertConfirm="alertConfirm"
            :showBtn="editObj.auditStatus==0"
            @alertCancel="alertCancel">
            <div class="alertInner alertWrap">
                <el-row>
                    <el-col :span="12" class="mb20">
                        <span class="c3">所在城市：</span>
                        <span class="c6">{{editObj.provinceName}}/{{editObj.cityName}}/{{editObj.districtName}}</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">企业类型：</span>
                        <span class="c6">{{editObj.enterpriseTypeId}}</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">企业名称：</span>
                        <span class="c6">{{editObj.enterpriseName}}</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">款项类型：</span>
                        <span class="c6">{{editObj.anomaliesType==1?'异常充值':'异常退款'}}</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">金额：</span>
                        <span class="c6">{{editObj.anomaliesAmount}}</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">备注：</span>
                        <span class="c6">{{editObj.anomaliesRemark}}</span>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <span class="c3">汇款凭证：</span>
                        <span class="c6"><img :src="editObj.anomaliesPic" class="imgBoder pointer" width="100" height="100" @click="$lookImg(editObj.anomaliesPic)" style="vertical-align:text-top;"></span>
                    </el-col>
                </el-row>
            </div>
        </modal>
        <modal
            :title="modalTitle"
            :width="900"
            :alert="showAlert2"
            confirmText="确定"
            @alertConfirm="alertConfirm2"
            @alertCancel="alertCancel2">
            <div class="alertInner alertWrap">
                <el-form :model="form" ref="form"  label-width="90px" size="small" >
                    <el-row>
                        <!-- <el-col :span="12" class="mb20">
                            <el-form-item label="选择城市" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-cascader
                                    style="width:100%;"
                                    placeholder="请选择"
                                    v-model="form.a"
                                    clearable
                                    :options="allCityList"
                                    change-on-select
                                    filterable>
                                </el-cascader>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="企业类型" prop="a" :rules="$validate({required:false,msg:'请输入'})">
                                <el-select v-model="form.a" clearable placeholder="请选择" style="width:100%;">
                                </el-select>
                            </el-form-item>
                        </el-col> -->
                        <el-col :span="24" class="mb20">
                            <el-form-item label="企业名称" prop="entName" :rules="$validate({required:true,msg:'请输入'})">
                                <!-- <el-input v-model="form.a" clearable placeholder="请输入"></el-input> -->
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
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="款项类型" prop="anomaliesType" :rules="$validate({required:true,msg:'请输入'})">
                                <el-select v-model="form.anomaliesType" clearable placeholder="请选择" style="width:100%;">
                                    <el-option value="1" label="充值"></el-option>
                                    <el-option value="2" label="退款"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="充值金额" prop="anomaliesAmount" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.anomaliesAmount" type="number" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="mb20">
                            <el-form-item label="备注" prop="anomaliesRemark" :rules="$validate({required:false,msg:'请输入'})">
                                <el-input v-model="form.anomaliesRemark" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="mb20">
                            <el-form-item label="凭证图片" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-upload
                                class="avatar-uploader"
                                :action="uploadUrl + 'attachment/file/upload'"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="form.anomaliesPic" :src="form.anomaliesPic" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            </el-form-item>
                        </el-col>
                    </el-row>
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
    name: 'financialAnomalies',
    data () {
        return {
            editObj: {},
            searchList: [],
            searchLoading: false,
            modalTitle: 'title',
            allCityList: [],
            uploadUrl: window.uploadURL,
            form: {
                entName: '',
                anomaliesPic: '',
                anomaliesRemark: '',
                anomaliesAmount: '',
                anomaliesType: ''
            },
            showAlert2: false,
            showAlert: false,
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '企业类型',
                    type: 'select',
                    list: [],
                    key: 'userNam1e'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'userNama1e'
                },
                {
                    label: '款项类别',
                    type: 'select',
                    list: [
                        {
                            value: 1,
                            label: '充值'
                        },
                        {
                            value: 2,
                            label: '退款'
                        }
                    ],
                    key: 'anomaliesType'
                },
                {
                    label: '审核状态',
                    type: 'select',
                    key: 'auditStatus',
                    list: [
                        {
                            label: '待审核',
                            value: '0'
                        },
                        {
                            label: '审核通过',
                            value: '1'
                        },
                        {
                            label: '审核不通过',
                            value: '2'
                        }
                    ]
                },
                {
                    label: '申请人',
                    type: 'input',
                    key: 'userNa3m1e'
                },
                {
                    label: '审核人',
                    type: 'input',
                    key: 'userNa1dm1e'
                },
                {
                    label: '申请日期',
                    type: 'date',
                    valueFormat: 'yyyy-MM-dd',
                    key: 'createTime'
                },
                {
                    label: '审核日期',
                    type: 'date',
                    valueFormat: 'yyyy-MM-dd',
                    key: 'updateTime'
                }
            ],
            searchValue: {},
            loading: false,
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    computed: {
    },
    components: {
        Modal,
        Search
    },
    created () {
        this.getDataList()
    },
    methods: {
        deleteData (item) {
            this.$confirm('确定删除这条数据吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post(`/business/anomalies/delete/${item.financialAnomaliesId}`, {
                    financialAnomaliesId: item.financialAnomaliesId
                }).then(res => {
                    if (res.code === 0) {
                        this.$message.success('删除成功')
                        this.getDataList()
                    }
                })
            }).catch(() => {})
        },
        remoteMethod (query) {
            this.searchLoading = true
            this.$post('/business/anomalies/getEnt?page=1&size=20', {
                enterpriseName: query
            }).then(res => {
                this.searchList = res.data || []
                this.searchLoading = false
            })
        },
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
        handleAvatarSuccess (res) {
            console.log(res)
            if (res.status === 200) {
                this.form.anomaliesPic = res.data
                console.log(this.form)
            }
        },
        beforeAvatarUpload () {},
        batchOperation (val) {
            // console.log(val)
            if (val === 'btn1') {
                this.modalTitle = '新增异常充值'
                this.showAlert2 = true
            } else {
                this.modalTitle = '新增异常退款'
                this.showAlert2 = true
            }
        },
        alertConfirm () {
            // this.alertCancel()
            this.audit(1)
        },
        alertCancel (val) {
            console.log(val)
            if (val === 'x') {
                this.showAlert = false
            } else {
                this.audit(2)
            }
            // this.showAlert = false
        },
        audit (status) {
            this.$post('/business/anomalies/audit', {
                financialAnomaliesId: this.editObj.financialAnomaliesId,
                auditStatus: status
            }).then(res => {
                if (res.code === 0) {
                    this.$message.success('请求成功')
                    this.getDataList()
                    this.showAlert = false
                }
            })
        },
        alertConfirm2 () {
            this.$post('/business/anomalies/add', {
                ...this.form
            }).then(res => {
                if (res.code === 0) {
                    this.$message.success('请求成功')
                    this.getDataList()
                    this.alertCancel2()
                }
            })
        },
        alertCancel2 () {
            this.form = {
                entName: '',
                anomaliesPic: '',
                anomaliesRemark: '',
                anomaliesAmount: '',
                anomaliesType: ''
            }
            this.showAlert2 = false
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                createBeginTime: this.searchValue.createTime && this.searchValue.createTime[0],
                createEndTime: this.searchValue.createTime && this.searchValue.createTime[1],
                updateBeginTime: this.searchValue.updateTime && this.searchValue.updateTime[0],
                updateEndTime: this.searchValue.updateTime && this.searchValue.updateTime[1],
                ...this.searchValue
            }
            delete obj.createTime
            this.$post('business/anomalies/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
        },
        iin (item) {
            this.editObj = item
            this.showAlert = true
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
</style>
<style lang='less'>
.financialAnomalies {
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 104px;
        height: 104px;
        line-height: 104px;
        text-align: center;
    }
    .avatar {
        width: 104px;
        height: 104px;
        display: block;
    }
}
</style>

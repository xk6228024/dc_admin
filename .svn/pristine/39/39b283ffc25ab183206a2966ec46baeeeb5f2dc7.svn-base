
<template>
    <div class="certificateProvide" id="certificateProvide">
        <search v-model='searchValue' :options='searchOption' @search='search()'>
            <el-button type="primary" size="small" icon="el-icon-plus" @click="showAlert=true">新建车辆单位</el-button>
        </search>
        <div class="table tableWrap">
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
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="所在城市">
                </el-table-column>
                <el-table-column
                prop="enterpriseCertificateNum"
                align="left"
                min-width="20%"
                label="地址">
                </el-table-column>
                <el-table-column
                prop="createName"
                align="left"
                min-width="10%"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="创建时间">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="创建人">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="showAlert=true" type="text" size="small">详情</el-button>
                        <el-button @click="deleteData(scope.row.id)" type="text" size="small">删除</el-button>
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
            :title="'新建车辆单位'"
            :width="720"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner alertWrap">
                <el-form :model="form" ref="form"  label-width="auto" size="small" >
                    <el-row>
                        <el-col :span="24" class="mb20">
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
                        <el-col :span="24" class="mb20">
                            <el-form-item label="车辆单位名称" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.a" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="mb20">
                            <el-form-item label="经营地址" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.a" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="联系电话" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.a" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="邮编" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.a" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="传真" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.a" clearable placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <el-form-item label="电子邮件" prop="a" :rules="$validate({required:true,msg:'请输入'})">
                                <el-input v-model="form.a" clearable placeholder="请输入"></el-input>
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
    name: 'certificateProvide',
    data () {
        return {
            form: {},
            showAlert: false,
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '用户名',
                    type: 'input',
                    key: 'userName'
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
        allCityList () {
            return this.$store.state.allCityList
        }
    },
    components: {
        Modal,
        Search
    },
    created () {
        this.getDataList()
    },
    methods: {
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = this.searchValue
            this.$post('product/cjl/certificate/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        res.data = [{}]
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
        },
        deleteData () {
            this.$confirm('确定要删除该条数据吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            }).catch(() => {
            })
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
</style>

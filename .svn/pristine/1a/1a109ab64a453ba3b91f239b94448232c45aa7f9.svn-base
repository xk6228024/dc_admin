<!-- 代理商管理 -->
<template>
    <div class="useHelp">
        <breadcrumb>
            <el-button class="fr mt17" type="primary" @click="showAlert=true;$refs.form.resetFields()">新增帮助信息</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="loading"
                style="width: 100%;minHeight:600px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="quesertion"
                align="left"
                min-width="40%"
                label="标题">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="20%"
                label="创建时间">
                    <template slot-scope="scope">{{scope.row.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="editDetail(scope.row)" type="text" size="small" :disabled="!$checkAuth('sys:user:view')">编辑</el-button>
                        <el-button @click="del(scope.row.id)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper, slot"
                :total="total">
            </el-pagination>
        </div>
         <modal
            :title="'编辑使用帮助信息'"
            :width="650"
            :height="386"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <el-form ref="form" class="form"  :model="form" label-width="80px">
                     <el-form-item label="排序" prop="orderNum"  :rules="$validate({required:true,max:2,type:'EN'})">
                        <el-input type="number"
                        class="name"
                        @keypress="toString"
                        onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
                        v-model="form.orderNum"></el-input>
                    </el-form-item>
                    <el-form-item label="标题" prop="quesertion" :rules="$validate({required:true,max:60})">
                        <el-input type="text" class="name" v-model="form.quesertion"></el-input>
                    </el-form-item>
                    <el-form-item label="内容" prop="answer" :rules="$validate({required:true,max:500})">
                        <el-input
                            type="textarea"
                            :rows="4"
                            resize='none'
                            placeholder="请输入内容"
                            v-model="form.answer">
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
    name: 'useHelp',
    data () {
        return {
            form: {
                quesertion: '',
                answer: '',
                orderNum: ''
            },
            showAlert: false,
            loading: false,
            total: 0,
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
    },
    methods: {
        toString () {
            this.form.orderNum += ''
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                searchKey: this.enterpriseNamekey,
                areaRegion: this.areaId,
                city: this.regionId
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            }
            this.$post('userhelp/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
        // 打开详情
        goDetail (id) {
            this.$router.push('/agentDetail?id=' + id)
        },
        // 启用
        enableStatus (id) {
        },
        del (id) {
            this.$confirm('确定删除这条消息吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('userhelp/delete', {
                    data: {
                        id: id
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
            }).catch(() => {})
        },
        editDetail (info) {
            console.log(this.$refs.form)
            this.$refs.form.resetFields()
            this.editId = info.id
            this.form = JSON.parse(JSON.stringify(info))
            this.form.orderNum += ''
            this.showAlert = true
        },
        alertConfirm () {
            // console.log(this.form)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (this.editId) {
                        this.form.id = this.editId
                        this.$post('userhelp/edit', {
                            data: this.form
                        }).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功'
                                })
                                this.getDataList()
                                this.alertCancel()
                            }
                        })
                    } else {
                        this.$post('userhelp/add', {
                            data: this.form
                        }).then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功'
                                })
                                this.getDataList()
                                this.alertCancel()
                            }
                        })
                    }
                }
                // this.alertCancel()
            })
        },
        alertCancel () {
            this.editId = ''
            this.form = {
                quesertion: '',
                answer: '',
                orderNum: ''
            }
            // console.log(this.tableData)
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
.useHelp {
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
}
</style>
<style lang='less'>
.useHelp {
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
</style>

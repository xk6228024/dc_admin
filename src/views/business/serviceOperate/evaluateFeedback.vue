<!-- 评价反馈跟踪 -->
<template>
    <div class="evaluateFeedback" id="evaluateFeedback">
        <breadcrumb>
            <label>评价用户：</label>
            <el-input class="search-text" v-model="searchText" clearable placeholder="评价用户名称"></el-input>
            <label>跟踪情况：</label>
            <el-select v-model="searchType" clearable placeholder="请选择">
                <el-option
                v-for="item in feedbackType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button class="search" @click="search">查 询</el-button>
            <el-button type="primary" class="search fr mt17" @click="exportTable">导 出</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="showLoading"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="productName"
                align="left"
                min-width="15%"
                label="产品名称">
                </el-table-column>
                <el-table-column
                prop="feekbackUser"
                align="left"
                min-width="10%"
                label="评价用户">
                </el-table-column>
                <el-table-column
                prop="feedbackTime"
                align="left"
                min-width="10%"
                label="评价时间">
                    <template slot-scope="scope">
                        {{scope.row.feedbackTime}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="feekbackContent"
                align="left"
                min-width="20%"
                label="意见反馈">
                </el-table-column>
                <el-table-column
                prop="feekbackGrade"
                align="left"
                min-width="5%"
                label="评价">
                </el-table-column>
                <el-table-column
                prop="statusName"
                align="left"
                min-width="10%"
                label="跟踪情况">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.status === '0'" @click="goDetail(scope.row.feekbackId, 1)"
                        type="text" size="small">跟踪</el-button>
                        <el-button @click="goDetail(scope.row.feekbackId, 0)" type="text" size="small">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <modal
            :title="'产品评价跟踪'"
            :width="800"
            :showBtn='true'
            :alert="alert"
            :class="{'editAlert': edit}"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="evaluate-alert">
                <el-row>
                    <el-col :span="24">
                        <h5>评价信息</h5>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <label class="name">产品名称：</label>
                        <span class="value">{{ruleForm.productName}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label class="name">企业名称：</label>
                        <span class="value">{{ruleForm.enterpriseName}}</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <label class="name">评价用户：</label>
                        <span class="value">{{ruleForm.feekbackUser}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label class="name">联系方式：</label>
                        <span class="value">{{ruleForm.feekbackContract}}</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <label class="name">反馈时间：</label>
                        <span class="value">{{ruleForm.feedbackTime}}</span>
                    </el-col>
                    <el-col :span="12">
                        <label class="name">产品评价：</label>
                        <span class="value">{{ruleForm.feekbackGrade}}</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <label class="name">反馈内容：</label>
                        <span class="value">{{ruleForm.feekbackContent}}</span>
                    </el-col>
                </el-row>
                <div v-if="!edit && ruleForm.status === '1'">
                    <el-row>
                        <el-col :span="24">
                            <h5 class="border">跟踪结果</h5>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <label class="name">跟踪人员：</label>
                            <span class="value">{{ruleForm.tracker}}</span>
                        </el-col>
                        <el-col :span="12">
                            <label class="name">跟踪日期：</label>
                            <span class="value">{{ruleForm.trackTime | filterTime('yyyy-mm-dd')}}</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <label class="name">跟踪结果：</label>
                            <span class="value" style="word-break:break-all">{{ruleForm.dealResult}}</span>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <h5 class="form-title" v-if="edit">跟踪结果</h5>
            <el-form :model="ruleForm" status-icon ref="form" label-width="100px" class="form" v-if="edit">
                <el-form-item label="跟踪人员：" prop="tracker" :rules="$validate({required:true})"
                style="display:inline-block;margin:0 7px 0 62px;">
                    <el-select v-model="ruleForm.tracker" placeholder="请选择" style="width: 213px;">
                        <el-option
                        v-for="item in workUser"
                        :key="item.areaUserName"
                        :label="item.areaUserName"
                        :value="item.areaUserName">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="跟踪日期：" prop="trackTime" style="display:inline-block;">
                    <el-date-picker
                    v-model="ruleForm.trackTime"
                    type="date"
                    value-format="timestamp"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="处理结果：" prop="date" style="margin-left:62px;">
                    <el-input
                    type="textarea"
                    :rows="2"
                    maxlength="250"
                    placeholder="请输入内容"
                    v-model="ruleForm.dealResult">
                    </el-input>
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
    name: 'evaluateFeedback',
    data () {
        return {
            showLoading: false,
            total: 0,
            searchText: '',
            pageNum: 1,
            pageSize: 10,
            alert: false,
            searchType: '',
            workUser: [],
            feedbackType: [ // 跟踪情况
                {
                    value: '1',
                    label: '已跟踪处理'
                },
                {
                    value: '0',
                    label: '未跟踪处理'
                }
            ],
            edit: false,
            feekbackId: '',
            ruleForm: {
                tracker: '',
                trackTime: '',
                dealResult: ''
            },
            tableData: [
            ]
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    computed: {
    },
    created () {
        this.getDataList()
        this.getUserList()
    },
    methods: {
        // 导出
        exportTable () {
            window.open(`api/feedBack/export?feekbackUser=${this.searchText}&status=${this.searchType}`)
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        getUserList () {
            this.$post('/workUser/list', {
                areaUserName: ''
            }).then(res => {
                this.workUser = res.data
            })
        },
        // 获取列表
        getDataList () {
            this.showLoading = true
            this.$post('/feedBack/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                feekbackUser: this.searchText,
                status: this.searchType
            })
                .then(res => {
                    this.showLoading = false
                    if (res.code === 0) {
                        this.total = res.total
                        this.tableData = setNum(res.data, this.pageNum, this.pageSize)
                    }
                })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        },
        // 新增用户弹窗确认
        alertConfirm () {
            if (this.edit) {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$post('/feedBack/track', {
                            feekbackId: this.feekbackId,
                            tracker: this.ruleForm.tracker,
                            trackTime: this.ruleForm.trackTime,
                            dealResult: this.ruleForm.dealResult
                        })
                            .then(res => {
                                if (res.code === 0) {
                                    this.getDataList()
                                    this.$message({
                                        type: 'success',
                                        message: '跟踪成功'
                                    })
                                    this.alertCancel()
                                }
                            })
                    } else {
                        this.$alert('请选择必填项！')
                        return false
                    }
                })
            } else {
                this.alert = false
            }
        },
        // 新增用户弹窗关闭
        alertCancel () {
            this.$refs['form'] && this.$refs['form'].resetFields()
            this.evaluateId = ''
            this.alert = false
            this.edit = false
        },
        // 用户编辑
        goDetail (id, type) {
            if (type) {
                // 权限校验**********************************************************
                if (!this.$checkAuth('feedBack:track')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
            } else {
                // 权限校验**********************************************************
                if (!this.$checkAuth('feedBack:detail')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
            }
            this.$post('/feedBack/detail', {
                feekbackId: id
            }).then(res => {
                if (res.code === 0) {
                    this.ruleForm = res.data
                    this.feekbackId = id
                    if (type) {
                        this.edit = true
                        this.$refs['form'] && this.$refs['form'].clearValidate()
                    }
                    this.alert = true
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.boder(){
    padding-top:20px;
    border-top:1px solid #d9d9d9;
}
#evaluateFeedback {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .model {
        .el-input .el-input__suffix-inner .el-input__icon {
            line-height: 36px;
        }
    }
    .evaluate-alert {
        padding: 0 80px 0px 80px;
        h5 {
            color: #252631;
            font-size: 16px;
            &.border {
                .boder()
            }
        }
        .name {
            color: #252631;
            font-size: 14px;
        }
        .value {
            color: #595959;
            font-size: 14px;
        }
        .el-row {
            margin-bottom: 20px;
        }
    }
    .form-title {
        color: #252631;
        font-size: 16px;
        margin-left: 80px;
        margin-bottom: 20px;
        .boder()
    }
}
</style>
<style lang="less">
#evaluateFeedback {
    .editAlert{
        .wrap .alert-content {
            padding-bottom: 30px;
            .evaluate-alert{
                border: none;
            }
            .el-textarea__inner {
                width: 539px;
                resize: none;
            }
            .el-form-item__label {
                color: #252631;
            }
        }
    }
    .el-input .el-input__suffix-inner .el-input__icon {
        line-height: 30px;
        height: 30px;
    }
}
</style>

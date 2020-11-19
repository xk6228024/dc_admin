<!-- 充值活动管理 -->
<template>
    <div class="rechargeActivitieMagm">
        <breadcrumb>
            <label for="">关键词:</label>
            <el-input style="width:210px;" clearable class="search-text" v-model="searchKey" placeholder="活动名称"></el-input>
            <label for="">活动时间:</label>
            <el-date-picker
                clearable
                v-model="registerTime"
                type="daterange"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                class="search-text vam"
                value-format="yyyy-MM-dd"
                end-placeholder="结束日期">
            </el-date-picker>
            <el-button class="search" @click="search">查询</el-button>
            <el-button class="fr mt17" type="primary" @click="addActivityAlert=true;$refs['marketAreaForm'].resetFields()" :disabled="!$checkAuth('sys:user:save')">新增充值活动</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="computeHeight tableBorder"
                style="">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="6%">
                </el-table-column>
                <el-table-column
                prop="name"
                align="left"
                min-width="10%"
                label="活动名称">
                </el-table-column>
                <el-table-column
                prop="description"
                align="left"
                min-width="20%"
                label="活动描述">
                </el-table-column>
                <el-table-column
                prop="money"
                align="left"
                min-width="10%"
                label="充值金额">
                </el-table-column>
                <el-table-column
                prop="certifiedPresenterMoney"
                align="left"
                min-width="10%"
                label="赠送(已认证)">
                </el-table-column>
                <el-table-column
                prop="uncertifiedPresenterMoney"
                align="left"
                min-width="10%"
                label="赠送(未认证)">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="15%"
                label="活动区域">
                    <template slot-scope="scope">
                        <span>{{scope.row.province}}</span>&nbsp;
                        <span v-if="scope.row.province!=='全部'">{{scope.row.city}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="actives"
                align="left"
                min-width="8%"
                label="活动状态">
                    <template slot-scope="scope">
                        {{scope.row.actives | activityFilter}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="活动时间">
                    <template slot-scope="scope">
                        {{scope.row.activeTime}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="创建时间">
                    <template slot-scope="scope">
                        {{scope.row.createTime | filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="12%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.actives !== 2 && scope.row.actives !== 4" @click="activityEdit(scope.row.id)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:view')">编辑</el-button>
                        <el-button v-if="scope.row.actives === 4" @click="activityEdit2(scope.row.id)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:view')">查看</el-button>
                        <el-button v-if="scope.row.actives === 3" @click="deleteActivity(scope.row.id)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">删除</el-button>
                        <el-button v-if="scope.row.actives === 2" @click="changeStatus(scope.row.id, 1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">暂停</el-button>
                        <el-button v-if="scope.row.actives === 1" @click="changeStatus(scope.row.id, 2)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">启用</el-button>
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
            :title="'活动详情'"
            :width="650"
            :alert="addActivityAlert2"
            :showBtn="false"
            @alertCancel="alertCancel2">
            <el-form :model="ruleForm" status-icon ref="marketAreaForm" label-width="132px" class="form form2">
                <el-form-item label="活动名称：" prop="name" >
                    <el-input maxlength="20" disabled type="text" v-model.trim="ruleForm.name" placeholder="请输入活动名称"></el-input>
                </el-form-item>
                <el-form-item label="活动描述：" prop="description" >
                    <el-input maxlength="30" disabled type="text" v-model.trim="ruleForm.description" placeholder="请输入活动描述"></el-input>
                </el-form-item>
                <el-form-item label="充值金额：" prop="money" >
                    <el-input  type="text"
                    disabled
                    v-model="ruleForm.money" placeholder="请输入充值金额"></el-input>
                </el-form-item>
                <el-form-item prop="certifiedPresenterMoney" >
                    <label class="fl label"><span class="red">* </span>赠送金额&nbsp;&nbsp;&nbsp;<br>(已认证)：</label>
                    <el-input
                    type="text"
                    disabled
                    v-model="ruleForm.certifiedPresenterMoney" placeholder="请输入赠送金额"></el-input>
                </el-form-item>
                <el-form-item prop="uncertifiedPresenterMoney" >
                    <label class="fl label"><span class="red">* </span>赠送金额&nbsp;&nbsp;&nbsp;<br>(未认证)：</label>
                    <el-input  type="text"
                    disabled
                    v-model="ruleForm.uncertifiedPresenterMoney" placeholder="请输入赠送金额"></el-input>
                </el-form-item>
                <el-form-item label="活动时间：">
                    <el-date-picker
                        disabled
                        v-model="ruleForm.dateRegion"
                        type="daterange"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        class="search-text vam"
                        value-format="yyyy-MM-dd"
                        :picker-options="pickerOptions"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="活动区域：" style="width:358px;">
                    <el-select class="small_input" disabled v-model="ruleForm.province" @change="changeRegion()" placeholder="请请选择">
                        <el-option
                        v-for="item in provinceList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="city">
                    <el-select class="small_input" disabled v-model="ruleForm.city" placeholder="请选择">
                        <el-option
                        v-for="item in cityList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </modal>
        <modal
            :title="activityId ? '编辑充值活动' : '新增充值活动'"
            :width="650"
            :alert="addActivityAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="ruleForm" status-icon ref="marketAreaForm" label-width="132px" class="form">
                <el-form-item label="活动名称：" prop="name" :rules="$validate({required:true})">
                    <el-input maxlength="20" type="text" v-model.trim="ruleForm.name" placeholder="请输入活动名称"></el-input>
                </el-form-item>
                <el-form-item label="活动描述：" prop="description" :rules="$validate({required:true})">
                    <el-input maxlength="30" type="text" v-model.trim="ruleForm.description" placeholder="请输入活动描述"></el-input>
                </el-form-item>
                <el-form-item label="充值金额：" prop="money" :rules="$validate({required:true,type:'number2'})">
                    <el-input  type="text"
                    v-model="ruleForm.money" placeholder="请输入充值金额"></el-input>
                </el-form-item>
                <el-form-item prop="certifiedPresenterMoney" :rules="$validate({required:true,type:'number2'})">
                    <label class="fl label"><span class="red">* </span>赠送金额&nbsp;&nbsp;&nbsp;<br>(已认证)：</label>
                    <el-input
                    type="text"
                    v-model="ruleForm.certifiedPresenterMoney" placeholder="请输入赠送金额"></el-input>
                </el-form-item>
                <el-form-item prop="uncertifiedPresenterMoney" :rules="$validate({required:true,type:'number2'})">
                    <label class="fl label"><span class="red">* </span>赠送金额&nbsp;&nbsp;&nbsp;<br>(未认证)：</label>
                    <el-input  type="text"
                    v-model="ruleForm.uncertifiedPresenterMoney" placeholder="请输入赠送金额"></el-input>
                </el-form-item>
                <el-form-item label="活动时间：" prop="dateRegion" :rules="$validate({required:true})">
                    <el-date-picker
                        v-model="ruleForm.dateRegion"
                        type="daterange"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        class="search-text vam"
                        value-format="yyyy-MM-dd"
                        :picker-options="pickerOptions"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="活动区域：" prop="province" :rules="$validate({required:true})" style="width:358px;">
                    <el-select class="small_input" v-model="ruleForm.province" @change="changeRegion()" placeholder="请请选择">
                        <el-option
                        v-for="item in provinceList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="city"  class="city" :rules="$validate({required:true})">
                    <el-select class="small_input" :disabled="disableCity" v-model="ruleForm.city" placeholder="请选择">
                        <el-option
                        v-for="item in cityList"
                        :key="item.regionId"
                        :label="item.regionName"
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
import { setNum } from '@/utils/utils.js'
import { filterTime } from '@/utils/filterTime.js'
export default {
    name: 'rechargeActivitieMagm',
    data () {
        return {
            disableCity: false,
            addActivityAlert2: false,
            searchKey: '', // 搜索关键词
            addActivityAlert: false, // 弹窗开关
            activityId: '', // 当前活动ID
            registerTime: [], // 搜索注册时间
            provinceList: '', // 省份列表
            cityList: [], // 城市列表
            ruleForm: {
                name: '', // 活动名称
                money: '', // 充值金额
                description: '', // 充值描述
                uncertifiedPresenterMoney: '', // 未认证金额
                certifiedPresenterMoney: '', // 已认证金额
                province: '', // 省份
                city: '', // 市区
                area: '', // 区域
                dateRegion: '' // 活动时间
            },
            pickerOptions: { // 活动时间限制只能选当前时间之后
                disabledDate (time) {
                    return time.getTime() < Date.now() - 8.64e7
                }
            },
            editActivity: false, // 防重复提交
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: [
            ]
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    filters: {
        // 活动状态过滤
        activityFilter (value) {
            if (!value) return ''
            switch (value) {
            case 1:
                return '暂停'
            case 2:
                return '进行中'
            case 3:
                return '未开始'
            case 4:
                return '结束'
            case 5:
                return '已删除'
            case 6:
                return '未删除'
            }
        }
    },
    created () {
        this.getDataList()
        this.getProvinceList()
    },
    methods: {
        changeRegion () {
            if (this.ruleForm.province === '000000') {
                this.ruleForm.city = '000000'
                this.disableCity = true
                this.cityList.unshift({
                    regionId: '000000',
                    regionName: '全部'
                })
            } else {
                this.ruleForm.city = ''
                this.disableCity = false
                this.getCityList(this.ruleForm.province)
            }
            this.$refs.marketAreaForm.validateField(['province'])
            // this.getCityList(this.ruleForm.province)
        },
        alertCancel2 () {
            this.addActivityAlert2 = false
        },
        // 搜索
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        // 获取活动列表
        getDataList () {
            let obj = {
                searchKey: this.searchKey
            }
            if (this.registerTime && this.registerTime.length) {
                obj.startDate = this.registerTime[0]
                obj.endDate = this.registerTime[1]
            } else {
                obj.startDate = ''
                obj.endDate = ''
            }
            this.$post(`rechargeActivity/find?page=${this.pageNum}&size=${this.pageSize}`, obj)
                .then(res => {
                    if (res.code === 0) {
                        this.total = res.total
                        res.data && res.data.forEach(item => {
                            item.activeTime = filterTime('yyyy-mm-dd', item.startTime) + ' 至 ' + filterTime('yyyy-mm-dd', item.endTime)
                        })
                        this.tableData = setNum(res.data, this.pageNum, this.pageSize)
                    }
                })
        },
        // 获取省列表
        getProvinceList (id) {
            this.$get('list/regionProvinceList').then(res => {
                if (res.code === 0) {
                    this.allCityList = res.data
                    this.provinceList = res.data.filter(e => {
                        return e.regionType === 1
                    })
                    this.provinceList.unshift({
                        regionId: '000000',
                        regionName: '全部'
                    })
                }
            })
        },
        // 获取城市列表
        getCityList (id) {
            // console.log(id)
            this.cityList = this.allCityList.filter(e => {
                return id === e.parentId
            })
            // this.cityList.unshift({
            //     regionId: '000000',
            //     regionName: '全部'
            // })
            // console.log(this.cityList)
        },
        // 更改页条数
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        // 翻页
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        },
        // 删除活动
        deleteActivity (id) {
            this.$confirm('确定删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$post('rechargeActivity/delete', {
                    data: {
                        id
                    }
                })
                    .then(res => {
                        if (res.code === 0) {
                            this.getDataList()
                            this.$message({
                                type: 'success',
                                message: '删除成功！'
                            })
                        }
                    })
            }).catch(() => {})
        },
        // 更改状态
        changeStatus (id, actives) {
            if (this.editActivity) {
                return
            }
            this.editActivity = true
            let msg = actives === 1 ? '暂停' : '启用'
            this.$post('rechargeActivity/updatestatus', {
                data: {
                    id,
                    actives
                }
            }).then(res => {
                if (res.code === 0) {
                    this.getDataList()
                    this.$message({
                        type: 'success',
                        message: `${msg}活动成功`
                    })
                }
                this.editActivity = false
            })
        },
        // 弹窗确认
        alertConfirm () {
            // console.log(this.ruleForm)
            this.$refs['marketAreaForm'].validate((valid) => {
                if (valid) {
                    if (this.editActivity) {
                        return
                    }
                    this.editActivity = true
                    let msg, url
                    this.ruleForm.id = this.activityId
                    this.ruleForm.startTime = this.ruleForm.dateRegion[0]
                    this.ruleForm.endTime = this.ruleForm.dateRegion[1]
                    if (this.activityId) {
                        msg = '编辑成功'
                        url = 'rechargeActivity/edit'
                    } else {
                        msg = '新增成功'
                        url = 'rechargeActivity/add'
                    }
                    this.$post(url, {
                        data: this.ruleForm
                    })
                        .then(res => {
                            if (res.code === 0) {
                                this.getDataList()
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                                this.alertCancel()
                            }
                            this.editActivity = false
                        })
                }
            })
        },
        // 新增活动弹窗关闭
        alertCancel () {
            this.addActivityAlert = false
            this.ruleForm = {
                name: '', // 活动名称
                money: '', // 充值金额
                description: '', // 充值描述
                uncertifiedPresenterMoney: '', // 未认证金额
                certifiedPresenterMoney: '', // 已认证金额
                province: '', // 省份
                city: '', // 市区
                area: '', // 区域
                dateRegion: '' // 活动时间
            }
            this.activityId = ''
            // this.addActivityAlert = false
        },
        // 用户编辑
        activityEdit (id) {
            this.$refs['marketAreaForm'].resetFields()
            this.addActivityAlert = true
            this.$post('rechargeActivity/view ', {
                data: {
                    id
                }
            })
                .then(res => {
                    this.activityId = res.data.id
                    res.data.dateRegion = [filterTime('yyyy-mm-dd', res.data.startTime), filterTime('yyyy-mm-dd', res.data.endTime)]
                    this.ruleForm = res.data
                    this.cityList = this.allCityList.filter(e => {
                        return res.data.province === e.parentId
                    })
                    if (this.ruleForm.province === '000000') {
                        this.disableCity = true
                        this.cityList.unshift({
                            regionId: '000000',
                            regionName: '全部'
                        })
                    } else {
                        this.disableCity = false
                    }
                })
        },
        activityEdit2 (id) {
            this.addActivityAlert2 = true
            this.$post('rechargeActivity/view ', {
                data: {
                    id
                }
            })
                .then(res => {
                    this.activityId = res.data.id
                    res.data.dateRegion = [filterTime('yyyy-mm-dd', res.data.startTime), filterTime('yyyy-mm-dd', res.data.endTime)]
                    this.ruleForm = res.data
                    this.cityList = this.allCityList.filter(e => {
                        return res.data.province === e.parentId
                    })
                    if (this.ruleForm.province === '000000') {
                        this.cityList.unshift({
                            regionId: '000000',
                            regionName: '全部'
                        })
                    }
                })
        }
    }
}
</script>

<style lang='less' scoped>
.rechargeActivitieMagm {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .form {
        padding-right: 40px;
        .el-date-editor--daterange.el-input__inner {
            width:100%;
        }
        .label {
            position:absolute;
            left:-120px;
            top: 0;
            line-height: 18px;
            width: 108px;
            text-align: right;
            .red {
                color: #f56c6c;
            }
        }
    }
}
</style>
<style lang="less">
.rechargeActivitieMagm {
    .form {
        .city {
            position:absolute;
            right:40px;
            bottom:96px;
            width: 226px;
            .el-form-item__content {
                width: 100%;
                margin-left: 0px !important;
            }
        }
        .el-select {
            width: 100%;
            .el-input {
                width:226px;
            }
        }
    }
    .form2 {
        .city {
            bottom:60px;
        }
    }
}
</style>

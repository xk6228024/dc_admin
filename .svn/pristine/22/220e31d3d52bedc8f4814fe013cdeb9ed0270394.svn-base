
<template>
    <div class="sysSetting" id="sysSetting">
        <search v-model='searchValue' :options='searchOption' @search='search()'>
            <el-button type="primary" size="mini"  @click="showAlert=true">添加参数配置</el-button>
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
                prop="cityName"
                align="left"
                min-width="10%"
                label="所属城市">
                </el-table-column>
                <el-table-column
                prop="winName"
                align="left"
                min-width="10%"
                label="系统名称">
                </el-table-column>
                <el-table-column
                prop="qacardName"
                align="left"
                min-width="10%"
                label="参数名称">
                </el-table-column>
                <el-table-column
                prop="createId"
                align="left"
                min-width="10%"
                label="创建人">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="15%"
                label="创建时间">
                    <template slot-scope="scope">
                        {{scope.row.createTime | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="updateSys"
                align="left"
                min-width="12%"
                label="最后修改人">
                </el-table-column>
                <el-table-column
                prop="updateTime"
                align="left"
                min-width="15%"
                label="最后修改时间">
                    <template slot-scope="scope">
                        {{scope.row.updateTime | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="12%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="getDetail(scope.row.qacardCode)" type="text" size="small" >编辑</el-button>
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
        <el-dialog
        title="参数配置"
        :visible.sync="showAlert"
        width="777px"
        :close-on-click-modal="false"
        :before-close="alertCancel">
            <div class="alertInner">
                <h4 class="mb20">参数配置</h4>
                <el-form :model="form" ref="form" :inline="true" :hide-required-asterisk="true" :status-icon="false">
                    <el-row>
                        <el-col :span="12" class="mb20">
                            <span class="c3">参数编号：</span>
                            <span class="c6">
                                <el-form-item label="" prop="qacardCode" :rules="$validate({required: true})">
                                    <el-input v-model="form.qacardCode" :disabled="!!editId" class="form-input" maxlength="50" size="small" placeholder="请输入"></el-input>
                                </el-form-item>
                            </span>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <span class="c3">参数名称：</span>
                            <span class="c6">
                                <el-form-item label="" prop="qacardName" :rules="$validate({required: true})">
                                    <el-input v-model="form.qacardName" :disabled="!!editId" class="form-input" maxlength="50" size="small" placeholder="请输入"></el-input>
                                </el-form-item>
                            </span>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <span class="c3">所在城市：</span>
                            <span class="c6">
                                <el-form-item label="" prop="cityCode" :rules="$validate({required: true})">
                                    <el-cascader
                                        :disabled="!!editId"
                                        class="form-input"
                                        placeholder="请选择"
                                        size="mini"
                                        v-model="form.cityCode"
                                        clearable
                                        :options="allCityList">
                                    </el-cascader>
                                    <!-- <el-input v-model="form.cityCode" :disabled="!!editId" class="form-input" size="small" placeholder="请输入"></el-input> -->
                                </el-form-item>
                            </span>
                        </el-col>
                        <el-col :span="12" class="mb20">
                            <span class="c3">系统名称：</span>
                            <span class="c6">
                                <el-form-item label="" prop="winId" :rules="$validate({required: true})">
                                    <el-select v-model="form.winId" placeholder="请选择" :disabled="!!editId" class="form-input" size="small">
                                        <el-option
                                        v-for="item in sysList"
                                        :key="item.winId"
                                        :label="item.winName"
                                        :value="item.winId">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </span>
                        </el-col>
                    </el-row>
                    <h4 class="mb20">控制范围</h4>
                    <el-tabs v-model="activeName" type="card" style="margin-bottom:10px;">
                        <el-tab-pane label="汽车和危险货物运输车辆" name="first">
                            <table>
                                <tr>
                                    <th>维修类别</th>
                                    <th>质量保证期</th>
                                </tr>
                                <tr>
                                    <td>整车修理/总成修理</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardVehicleTotalFixMileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardVehicleTotalFixMileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardVehicleTotalFixDate" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardVehicleTotalFixDate" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                                <tr>
                                    <td>二级维护</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardVehicleFix2Mileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardVehicleFix2Mileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardVehicleFix2Date" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardVehicleFix2Date" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                                <tr>
                                    <td>一级维护、小修、专项修理</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardVehicleFix1Mileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardVehicleFix1Mileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardVehicleFix1Date" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardVehicleFix1Date" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                            </table>
                        </el-tab-pane>
                        <el-tab-pane label="摩托车" name="second">
                            <table>
                                <tr>
                                    <th>维修类别</th>
                                    <th>质量保证期</th>
                                </tr>
                                <tr>
                                    <td>整车修理/总成修理</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardMotorcycleTotalFixMileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardMotorcycleTotalFixMileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardMotorcycleTotalFixDate" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardMotorcycleTotalFixDate" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                                <tr>
                                    <td>一级维护、小修、专项修理</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardMotorcycleFixMileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardMotorcycleFixMileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardMotorcycleFixDate" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardMotorcycleFixDate" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                            </table>
                        </el-tab-pane>
                        <el-tab-pane label="其他机动车" name="third">
                            <table>
                                <tr>
                                    <th>维修类别</th>
                                    <th>质量保证期</th>
                                </tr>
                                <tr>
                                    <td>整车修理/总成修理</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardOtherTotalFixMileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardOtherTotalFixMileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardOtherTotalFixDate" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardOtherTotalFixDate" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                                <tr>
                                    <td>一级维护、小修、专项修理</td>
                                    <td>
                                        <el-form-item label="车辆行驶：" prop="qacardOtherFixMileage" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardOtherFixMileage" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;公里</span>
                                        </el-form-item>
                                        <el-form-item label="或 " prop="qacardOtherFixDate" :rules="$validate({required: true, type: 'num'})">
                                            <el-input v-model="form.qacardOtherFixDate" class="form-input" type="number" size="small"></el-input>
                                            <span class="text">&nbsp;日</span>
                                        </el-form-item>
                                    </td>
                                </tr>
                            </table>
                        </el-tab-pane>
                    </el-tabs>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="alertCancel">取 消</el-button>
                <el-button type="primary" @click="alertConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Search from '@/components/search'
export default {
    name: 'sysSetting',
    data () {
        return {
            editId: '',
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'region'
                },
                {
                    label: '系统名称',
                    type: 'select',
                    list: [],
                    key: 'winId',
                    list_key: 'winName',
                    list_value: 'winId'
                },
                {
                    label: '参数编码',
                    type: 'input',
                    key: 'qacardCode'
                },
                {
                    label: '参数名称',
                    type: 'input',
                    key: 'qacardName'
                }
            ],
            activeName: 'first',
            searchValue: {},
            searchList: [],
            searchLoading: false,
            multipleSelection: [],
            form: {
                qacardCode: '',
                qacardName: '',
                cityCode: '',
                winId: '',
                qacardVehicleTotalFixMileage: 20000,
                qacardVehicleTotalFixDate: 100,
                qacardVehicleFix2Mileage: 5000,
                qacardVehicleFix2Date: 30,
                qacardVehicleFix1Mileage: 2000,
                qacardVehicleFix1Date: 10,
                qacardMotorcycleTotalFixMileage: 7000,
                qacardMotorcycleTotalFixDate: 20,
                qacardMotorcycleFixMileage: 800,
                qacardMotorcycleFixDate: 10,
                qacardOtherTotalFixMileage: 6000,
                qacardOtherTotalFixDate: 60,
                qacardOtherFixMileage: 700,
                qacardOtherFixDate: 7
            },
            loading: false,
            areaList: [],
            cityList: [],
            sysList: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Search
    },
    computed: {
        allCityList () {
            return this.$store.state.allCityList
        }
    },
    created () {
        this.findSysWin()
    },
    watch: {
    },
    methods: {
        // 查询应用
        findSysWin () {
            this.$post('/admin/sys-win/findSysWin', {})
                .then(res => {
                    if (res.code === 0 && res.data) {
                        this.$set(this.searchOption[1], 'list', res.data)
                        this.sysList = res.data
                        this.getDataList()
                    }
                })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = this.searchValue
            if (this.searchValue.region && this.searchValue.region.length >= 3) {
                obj.cityCode = this.searchValue.region[2]
            } else {
                obj.cityCode = ''
            }
            this.$post('/admin/sysCityConfigQacardParam/findSysCityConfigQacardParam?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0 && res.result) {
                        res.result.forEach(item => {
                            var win = this.sysList.find(win => item.winId === win.winId)
                            if (win) {
                                item.winName = win.winName
                            }
                        })
                        this.tableData = this.$setNum(res.result, this.pageNum, this.pageSize)
                        this.total = res.datas.total
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 打开详情弹窗
        getDetail (id) {
            this.editId = id
            this.$post('/admin/sysCityConfigQacardParam/findSysCityConfigQacardParamById', {
                qacardCode: id
            }).then(res => {
                if (res.code === 0) {
                    var win = this.sysList.find(item => item.winId === res.data.winId)
                    if (win) {
                        res.data.winName = win.winName
                    }
                    this.form = res.data
                    this.showAlert = true
                }
            })
        },
        // 弹窗确认
        alertConfirm () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let url = ''
                    if (this.editId) {
                        url = '/admin/sysCityConfigQacardParam/updateSysCityConfigQacardParam'
                    } else {
                        url = '/admin/sysCityConfigQacardParam/saveSysCityConfigQacardParam'
                    }
                    var obj = { ...this.form }
                    obj.cityCode = obj.cityCode[2]
                    this.$post(url, {
                        data: obj
                    }).then(res => {
                        if (res.code === 0) {
                            this.$message.success('操作成功')
                            this.alertCancel()
                            this.getDataList()
                        }
                    })
                } else {
                    this.$alert('请输入完整信息', '提示')
                }
            })
        },
        // 弹窗取消
        alertCancel () {
            this.showAlert = false
            this.editId = ''
            this.$nextTick(() => {
                this.$refs.form.resetFields()
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
.sysSetting {
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
            border-top: 1px solid #EBEEF5;
            border-left: 1px solid #EBEEF5;
            td, th {
                padding: 0 10px;
                box-sizing: border-box;
                border-right: 1px solid #EBEEF5;
                border-bottom: 1px solid #EBEEF5;
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
            .form-input {
                width: 100px;
            }
        }
        .c3, .c6 {
            display: inline-block;
            line-height: 36px;
        }
        .c6 {
            width: 184px;
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
.sysSetting {
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
#sysSetting {
    .el-form--inline {
        .el-form-item__label, .el-form-item__content {
            vertical-align: middle;
        }
    }
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

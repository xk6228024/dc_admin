
<template>
    <div class="cjlCityOpen" id="cjlCityOpen">
        <breadcrumb>
            <div class="dlb">
                <label for="">所属区域:</label>
                <el-cascader
                    placeholder="请选择"
                    v-model="areaIds"
                    clearable
                    :options="allCityList"
                    change-on-select
                    filterable>
                </el-cascader>
                <label for="">状态:</label>
                <el-select class="w120_input" clearable v-model="status" placeholder="请选择">
                    <el-option
                    v-for="item in [{value:'close',label:'关闭'},{value:'open',label:'开通'}]"
                    :key="item.value"
                    :label="item.label"
                    clearable
                    :value="item.value">
                    </el-option>
                </el-select>
                <label for="">服务人员:</label>
                <el-input style="width:160px;" class="search-text" v-model="searchName" placeholder=""></el-input>
                <el-button class="search" @click="search">查 询</el-button>
            </div>
            <div class="dlb fr">
                <el-button class="fr mt17"  type="primary" :disabled="!$checkAuth('cjl:cityConfigs:add')"  @click="$router.push('/cjlCityOpenDetail')">新增开通</el-button>
                <el-dropdown
                trigger="click" class="fr mt17" @command="batchOperation"
                :placement="'top'" :disabled="!multipleSelection.length">
                    <el-button >
                        批量选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="'enable'"  :disabled="!$checkAuth('cjl:cityConfigs:batch:status')">开通</el-dropdown-item>
                        <el-dropdown-item :command="'disabled'" :disabled="!$checkAuth('cjl:cityConfigs:batch:status')">关闭</el-dropdown-item>
                        <!-- <el-dropdown-item :command="'setUser'">设置服务人员</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                @selection-change="handleSelectionChange"
                style="width: 100%;">
                 <el-table-column
                type="selection"
                align="left">
                </el-table-column>
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="provinceName"
                align="left"
                min-width="10%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="rfidCardPrice"
                align="left"
                min-width="10%"
                label="识别卡价格">
                </el-table-column>
                <el-table-column
                prop="servicerName"
                align="left"
                min-width="10%"
                label="服务支持人员">
                </el-table-column>
                <el-table-column
                prop="servicerTel"
                align="left"
                min-width="10%"
                label="服务支持电话">
                </el-table-column>
                <el-table-column
                prop="complaintTel"
                align="left"
                min-width="10%"
                label="服务投诉电话">
                    <!-- <template slot-scope="scope">
                        <span>{{scope.row.createTime|filterTime('yyyy-mm-dd')}}</span>
                    </template> -->
                </el-table-column>
                 <el-table-column
                prop="updateName"
                align="left"
                min-width="10%"
                label="操作人">
                </el-table-column>
                 <el-table-column
                prop="updateTime"
                align="left"
                min-width="10%"
                label="更新时间">
                </el-table-column>
                <el-table-column
                prop="status"
                align="left"
                min-width="10%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goSetting(scope.row.configId)" type="text" size="small"
                        :disabled="!$checkAuth('cjl:cityConfigs:view')">详情</el-button>
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
            :title="'用户认证审核'"
            :width="924"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">基本信息</td>
                    </tr>
                    <tr>
                        <td class="tar">注册手机号码：</td>
                        <td class="tal fontColor">1335687996</td>
                        <td class="tar" width="150">联系电话：</td>
                        <td class="tal fontColor" width="270">0755-8203879</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">客户单位：</td>
                        <td class="tal fontColor" colspan="3" width="270">0755-8203879</td>
                    </tr>
                    <tr>
                        <td class="tar">联系人：</td>
                        <td class="tal fontColor">XXXXXX</td>
                        <td class="tar">所属城市：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr>
                        <td class="tar">注册时间：</td>
                        <td class="tal fontColor">XXXXXX</td>
                        <td class="tar">上级代理账号：</td>
                        <td class="tal fontColor">XXXXXX</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">审核信息</td>
                    </tr>
                    <tr>
                        <td class="tar fontColor"><span class="importantIcon">*</span>审核结果：</td>
                        <td colspan="3" class="tal fontColor">
                            <el-radio v-model="auditRadio" label="1">审核通过</el-radio>
                            <el-radio v-model="auditRadio" label="2">审核不通过</el-radio>
                        </td>
                    </tr>
                    <tr>
                        <td class="tar fontColor"><span class="importantIcon">*</span>原因：</td>
                        <td colspan="3" class="tal fontColor">
                            <input type="text" class="resonInput" placeholder="说点什么吧~">
                        </td>
                    </tr>
                </table>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'cjlCityOpen',
    data () {
        return {
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
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        // this.getAreaList()
        this.getDataList()
        this.getAllCity()
    },
    watch: {
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
        // 表格多选事件
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        // 批量操作
        batchOperation (val) {
            let arr = this.multipleSelection.map(e => {
                return e.entId
            })
            if (!arr.length) {
                this.$msg({
                    type: 'error',
                    message: '请选择城市'
                })
                return
            }
            if (val === 'disabled') {
                this.$post('/product/cjl/cityConfigs/batch', {
                    status: 2,
                    configIds: this.multipleSelection.map(e => { return e.configId })
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }
            if (val === 'enable') {
                this.$post('/product/cjl/cityConfigs/batch', {
                    status: 1,
                    configIds: this.multipleSelection.map(e => { return e.configId })
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }
        },
        getAllCity () {
            this.$get('comm/citys/areas/tree').then(res => {
                if (res.code === 0) {
                    res.data.forEach(e => {
                        e.label = e.areaName
                        e.value = e.areaCode
                        e.children && e.children.forEach(f => {
                            f.label = f.provinceName
                            f.value = f.provinceCode
                            f.children && f.children.forEach(g => {
                                g.label = g.cityName
                                g.value = g.cityCode
                            })
                        })
                    })
                    console.log(res.data)
                    this.allCityList = res.data
                }
            })
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
            this.$router.push('/cjlCityOpenDetail?id=' + id)
        },
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                    localStorage.areaList = JSON.stringify(res.data)
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                areaCode: this.areaIds[0],
                provinceCode: this.areaIds[1],
                cityCode: this.areaIds[2],
                servicerName: this.searchName,
                status: this.status
            }
            this.$post('product/cjl/cityConfigs/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
            this.showAlert = false
        },
        // 弹窗取消
        alertCancel () {
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
.cjlCityOpen {
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
.cjlCityOpen {
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
#cjlCityOpen {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

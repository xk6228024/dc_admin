
<template>
    <div class="cjlEnterpriseArchives" id="cjlEnterpriseArchives">
        <!-- <breadcrumb>
            <div class="dlb">
                <label for="">所属区域:</label>
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
                </el-select>
                <label for="">城市名称:</label>
                <el-input style="width:160px;" class="search-text" v-model="enterpriseNamekey" placeholder=""></el-input>
                <el-button class="search" @click="search">查 询</el-button>
            </div>
            <div class="dlb fr">
                <el-button class="fr mt17"  type="primary"  @click="$router.push('/inspectionCityOpenDetail')">新增开通</el-button>
                <el-dropdown
                trigger="click" class="fr mt17" @command="batchOperation"
                :placement="'top'" :disabled="!multipleSelection.length">
                    <el-button >
                        批量选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="'enable'">启用</el-dropdown-item>
                        <el-dropdown-item :command="'disabled'">关闭</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </breadcrumb> -->
        <div class="searchDiv">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="searchItem">
                        <label>选择区域：</label>
                        <el-cascader
                            size="mini"
                            class="searchIpt"
                            placeholder="请选择"
                            v-model="searchObj.key1"
                            clearable
                            :options="allCityList"
                            change-on-select
                            filterable>
                        </el-cascader>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>企业名称：</label>
                        <el-input size="mini" class="searchIpt" v-model="searchObj.key2"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>对接省平台：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key3" placeholder="请选择">
                            <el-option
                            v-for="item in [{value:1,label:'是'},{value:0,label:'否'}]"
                            :key="item.value"
                            size="mini"
                            :label="item.label"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>注册日期：</label>
                        <el-date-picker
                            clearable
                            v-model="searchObj.key4"
                            size="mini"
                            type="daterange"
                            unlink-panels
                            range-separator="~"
                            start-placeholder="开始"
                            class="searchIpt dateSearch"
                            value-format="yyyy-MM-dd"
                            style="line-height:1"
                            end-placeholder="结束">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>注册渠道：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key5" size="mini" placeholder="请选择">
                            <el-option
                            v-for="item in sourceList"
                            :key="item.sourceCode"
                            :label="item.sourceName"
                            clearable
                            :value="item.sourceCode">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>企业状态：</label>
                        <el-select class="searchIpt" clearable  size="mini" v-model="searchObj.key6" placeholder="请选择">
                            <el-option
                            v-for="item in [{value:1,label:'开通'},{value:-1,label:'关闭'}]"
                            :key="item.value"
                            :label="item.label"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>企业资料完善：</label>
                        <el-select class="searchIpt" clearable size="mini" v-model="searchObj.key7" placeholder="请选择">
                            <el-option
                            v-for="item in [{value:1,label:'是'},{value:0,label:'否'}]"
                            :key="item.value"
                            :label="item.label"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchItem">
                        <label>运营人员：</label>
                        <el-select class="searchIpt" size="mini" collapse-tags multiple clearable v-model="searchObj.key8" filterable placeholder="请选择">
                            <el-option
                            v-for="item in personList"
                            :key="item.areaUserId"
                            :label="item.areaUserName"
                            clearable
                            :value="item.areaUserId">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="searchTools">
                        <el-button type="primary" size="mini" @click="queryData">查询</el-button>
                        <el-button type="" size="mini" @click="reset">重置</el-button>
                    </div>
                </el-col>
                <div class="searchTools2 fr" style="margin-right:10px;">
                    <el-button type="primary" :disabled="!$checkAuth('operation:ent:add')" size="mini"  @click="$router.push('/cjlEnterpriseArchivesDetail')">新增企业</el-button>
                    <!-- <el-button type="primary" :disabled="!$checkAuth('operation:ent:export')" size="small"  @click="exportData">开通</el-button>
                    <el-button type="primary" :disabled="!$checkAuth('operation:ent:export')" size="small"  @click="exportData">关闭</el-button> -->
                    <el-button type="" :disabled="!$checkAuth('operation:ent:servicer')" size="mini" @click="setPerson">设置服务人员</el-button>
                    <el-button type="primary" :disabled="!$checkAuth('operation:ent:export')" size="mini"  @click="exportData">导出</el-button>
                </div>
            </el-row>
        </div>
        <div class="table">
            <el-table
                border
                v-adaptive="{bottomOffset: 115}"
                height="100px"
                :data="tableData"
                v-loading="loading"
                class="tableBorder"
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
                prop="districtName"
                align="left"
                min-width="10%"
                label="区域">
                </el-table-column>
                 <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="20%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="linkName"
                align="left"
                min-width="10%"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="linkMobile"
                align="left"
                min-width="10%"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="enterpriseStatusName"
                align="left"
                min-width="6%"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="isCompleted"
                align="left"
                min-width="6%"
                label="资料是否完善">
                </el-table-column>
                 <el-table-column
                prop="servicerName"
                align="left"
                min-width="10%"
                label="运营人员">
                </el-table-column>
                 <el-table-column
                prop="registerTime"
                align="left"
                min-width="13%"
                label="注册时间">
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goSetting(scope.row.enterpriseId)" type="text" size="small"
                        :disabled="!$checkAuth('operation:ent:view')">详情</el-button>
                        <el-button v-if="scope.row.enterpriseStatus===-1" @click="changeStatus(scope.row.enterpriseId, 1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">开通</el-button>
                        <el-button v-if="scope.row.enterpriseStatus===1" @click="changeStatus(scope.row.enterpriseId, -1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">关闭</el-button>
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
            :title="'设置服务人员'"
            :width="560"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div style="text-align:center;height:60px;">
                <el-select v-model="bindPerson" style="width:300px;" filterable  placeholder="请选择">
                    <el-option
                    v-for="item in personList"
                    :key="item.areaUserId"
                    :label="item.areaUserName"
                    :value="item.areaUserId">
                    </el-option>
                </el-select>
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'cjlEnterpriseArchives',
    data () {
        return {
            sourceList: [],
            bindPerson: '',
            personList: [],
            searchObj: {
                key1: [],
                key2: '',
                key3: '',
                key4: [],
                key5: '',
                key6: '',
                key7: '',
                key8: []
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
    components: {
        Modal
        // Breadcrumb
    },
    created () {
        // this.getAreaList()
        this.getDataList()
        this.getAllCity()
        this.$post('/workUser/name', {
            areaUserId: ''
        }).then(res => {
            this.personList = res.data
        })
        this.$get('/comm/datasource').then(res => {
            if (res.code === 0) {
                this.sourceList = res.data
            }
        })
    },
    watch: {
        areaId (val) {
            if (!val) return
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        }
    },
    methods: {
        setPerson () {
            if (this.multipleSelection.length) {
                this.showAlert = true
            } else {
                this.$msg({
                    message: '请选择企业',
                    type: 'warning'
                })
            }
        },
        reset () {
            this.searchObj = {
                key1: [],
                key2: '',
                key3: '',
                key4: [],
                key5: '',
                key6: '',
                key7: '',
                key8: []
            }
        },
        queryData () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
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
                    message: '请选择企业'
                })
                return
            }
            if (val === 'disabled') {
                this.$post('entUserManager/closeOpenUser', {
                    status: 1,
                    ids: arr,
                    serviceUser: ''
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
                this.$post('entUserManager/closeOpenUser', {
                    status: 0,
                    ids: arr,
                    serviceUser: ''
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
                    this.allCityList = res.data
                }
            })
        },
        changeStatus (id, status) {
            this.$get(`/operation/ent/status/${id}`, {
                status
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
            this.$router.push('/cjlEnterpriseArchivesDetail?id=' + id)
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
        exportData () {
            let href = `${window.uploadURL}operation/ent/export?provinceCode=${this.searchObj.key1[1] || ''}&cityCode=${this.searchObj.key1[2] || ''}&entName=${this.searchObj.key2 || ''}&channel=${this.searchObj.key5 || ''}&isCompleted=${this.searchObj.key7 || ''}&servicers=${this.searchObj.key8 || ''}&startTime=${this.searchObj.key4[0] || ''}&endTime=${this.searchObj.key4[1] || ''}&isJoin=${this.searchObj.key3 || ''}&status=${this.searchObj.key6 || ''}`
            console.log(href)
            window.open(href)
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                provinceCode: this.searchObj.key1[1],
                cityCode: this.searchObj.key1[2],
                entName: this.searchObj.key2,
                channel: this.searchObj.key5,
                isCompleted: this.searchObj.key7,
                servicers: this.searchObj.key8,
                startTime: this.searchObj.key4[0],
                endTime: this.searchObj.key4[1],
                isJoin: this.searchObj.key3,
                status: this.searchObj.key6
            }
            this.$post('/operation/ent/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    // console.log(res)
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                        console.log(this.tableData)
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
            this.$post('/operation/ent/servicer', {
                entIds: this.multipleSelection.map(e => { return e.enterpriseId }),
                servicerId: this.bindPerson
            }).then(res => {
                if (res.code === 0) {
                    this.$msg({
                        message: '绑定成功',
                        type: 'success'
                    })
                    this.showAlert = false
                    this.getDataList()
                }
            })
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
.cjlEnterpriseArchives {
    .searchDiv {
        padding: 0 20px 20px;
        .searchItem {
            margin-top: 15px;
            height: 40px;
        }
        label {
            display: inline-block;
            width: 100px;
            text-align: right;
        }
        .searchIpt {
            display: inline-block;
            width: calc(100% - 100px);
            line-height: 40px;
        }
        .searchTools {
            padding-left: 100px;
            margin-top: 15px;
        }
        .searchTools2 {
            margin-top: 15px;
            text-align: right;
        }
    }
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
.cjlEnterpriseArchives {
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
#cjlEnterpriseArchives {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
.dateSearch {
    padding: 0 2px;
    .el-input__icon {
        display: none;
    }
    .el-range-input {
        font-size: 12px;
        background: transparent;
        width: 42%;
    }
}
</style>

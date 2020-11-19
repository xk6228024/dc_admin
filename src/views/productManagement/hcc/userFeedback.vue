<!-- 充值查询统计 -->
<template>
    <div class="userFeedback">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-select class="w120_input" clearable v-model="areaId" placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.sysAreaId"
                :label="item.areaName"
                clearable
                :value="item.sysAreaId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" clearable v-model="regionId" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                clearable
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">关键词:</label>
            <el-input style="width:160px;" clearable class="search-text" v-model="enterpriseNamekey" placeholder="联系方式"></el-input>
            <div class="dlb">
                <label for="">版本:</label>
                <el-select class="w120_input" clearable v-model="searchType" placeholder="请选择">
                    <el-option
                    v-for="item in searchList"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class="dlb">
                <label for="">系统:</label>
                <el-select class="w120_input" clearable v-model="searchType2" placeholder="请选择">
                    <el-option
                    v-for="item in searchList2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="dlb">
                <label for="">反馈时间:</label>
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
                <el-button class="search" @click="search">查询</el-button>
            </div>
            <el-button class="fr mt17 hhide" @click="exportTable">导出报表</el-button>
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
                <el-table-column
                prop="areaRegionName"
                align="left"
                min-width="10%"
                label="区域">
                    <!-- <template slot-scope="scope">{{scope.row.customerArea|areaFilter}}</template> -->
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="nickName"
                align="left"
                min-width="10%"
                show-overflow-tooltip
                label="用户昵称">
                </el-table-column>
                <el-table-column
                prop="mobile"
                align="left"
                min-width="10%"
                label="联系方式">
                </el-table-column>
                <el-table-column
                prop="issueComment"
                align="left"
                show-overflow-tooltip
                min-width="30%"
                label="反馈内容">
                </el-table-column>
                <el-table-column
                prop="version"
                align="left"
                min-width="5%"
                label="版本">
                </el-table-column>
                <el-table-column
                prop="system"
                align="left"
                min-width="5%"
                label="系统">
                </el-table-column>
                <el-table-column
                prop="issueTime"
                align="left"
                min-width="10%"
                label="反馈时间">
                    <template slot-scope="scope">
                        {{scope.row.issueTime|filterTime('yyyy-MM-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="chargeTime"
                align="left"
                min-width="5%"
                label="是否阅读">
                    <template slot-scope="scope">
                        <el-button v-if="!scope.row.issueStatus" @click="goDetail(scope.row.issueId)" type="text" size="small" :disabled="!$checkAuth('userAudit:view')">未读</el-button>
                        <span v-else>已读</span>
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
    name: 'userFeedback',
    data () {
        return {
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaId: '', // 大区Id
            enterpriseNamekey: '',
            auditRadio: '1', // 弹窗审核结果
            searchType: '',
            searchType2: '',
            searchList: [],
            searchList2: [
                {
                    value: 'android',
                    label: 'android'
                },
                {
                    value: 'ios',
                    label: 'ios'
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
        this.getAreaList()
        this.getDataList()
        this.$post('feedback/appversionlist', {}).then(res => {
            if (res.code === 0) {
                this.searchList = res.data
            }
        })
    },
    watch: {
        areaId (val) {
            this.regionId = ''
            this.cityList = []
            if (!val) return
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.regionId = ''
                    this.cityList = res.data
                }
            })
        }
    },
    methods: {
        // 导出报表
        exportTable () {
            let href = `${window.location.origin}/recharge/export?page=${this.pageNum}&size=${this.pageSize}&searchKey=${this.enterpriseNamekey}&city=${this.regionId}&areaRegion=${this.areaId}`
            if (this.dateRegion && this.dateRegion.length) {
                href = href + '&startDate=' + this.dateRegion[0]
                href = href + '&endDate=' + this.dateRegion[1]
            }
            window.open(href)
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
                city: this.regionId,
                areaRegion: this.areaId,
                searchKey: this.enterpriseNamekey,
                version: this.searchType,
                system: this.searchType2
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            }
            this.$post('feedback/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
        // 打开详情弹窗
        goDetail (id) {
            // this.showAlert = true
            this.$post('feedback/read', {
                data: {
                    issueId: id
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
.userFeedback {
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
.userFeedback {
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

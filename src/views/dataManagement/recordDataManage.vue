<!-- 运营通告 -->
<template>
    <div class="recordDataManage" id="recordDataManage">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-cascader
                placeholder="请选择"
                v-model="searchProps1"
                clearable
                :options="allCityList"
                change-on-select
                filterable>
            </el-cascader>
            <label for="">备案状态:</label>
            <el-select class="w120_input" clearable v-model="searchProps2" placeholder="请选择">
                <el-option
                v-for="item in [
                    {value:0,label:'未备案'},
                    {value:1,label:'已备案'},
                ]"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <label for="">认证状态:</label>
            <el-select class="w120_input" clearable v-model="searchProps3" placeholder="请选择">
                <el-option
                v-for="item in [
                    {value:0,label:'待认证'},
                    {value:1,label:'已认证'}
                ]"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <label for="">经营类别:</label>
            <el-select class="w120_input" clearable v-model="searchProps4" placeholder="请选择">
                <el-option
                v-for="item in [
                    {value:'01',label:'一类机动车维修'},
                    {value:'02',label:'二类机动车维修'},
                    {value:'03',label:'三类机动车维修'},
                    {value:'04',label:'一类机摩托车维修'},
                    {value:'05',label:'二类机摩托车维修'},
                    {value:'06',label:'危险货物维修车辆维修'}
                ]"
                :key="item.value"
                :label="item.label"
                clearable
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label>备案时间：</label>
                <el-date-picker
                    clearable
                    v-model="searchProps5"
                    type="daterange"
                    unlink-panels
                    range-separator="~"
                    start-placeholder="开始"
                    class="searchIpt dateSearch"
                    value-format="yyyy-MM-dd"
                    style="line-height:1"
                    end-placeholder="结束">
                </el-date-picker>
                <el-button class="search" @click="reset">重 置</el-button>
                <el-button type="primary" class="search" @click="search">查 询</el-button>
            </div>
            <el-button type="primary" class="search fr mt17"
            @click="exportData" :disabled="!$checkAuth('datamanage:enterpriseRecord:export')">导 出</el-button>
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
                prop="region"
                align="left"
                min-width="7%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="province"
                align="left"
                min-width="7%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="city"
                align="left"
                min-width="7%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="district"
                align="left"
                min-width="7%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="10%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="enterpriseBusinessCategory"
                align="left"
                min-width="10%"
                label="经营类别">
                </el-table-column>
                <el-table-column
                prop="recordTime"
                align="left"
                min-width="10%"
                label="备案时间">
                </el-table-column>
                <el-table-column
                prop="auditName"
                align="left"
                min-width="10%"
                label="审核人">
                </el-table-column>
                <el-table-column
                prop="startTime2"
                align="left"
                min-width="10%"
                label="认证时间">
                    <template slot-scope="scope">
                        {{scope.row.startTime|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="enterpriseIsAudit"
                align="left"
                min-width="10%"
                label="备案状态">
                </el-table-column>
                <el-table-column
                prop="enterpriseIdentifyIstatus"
                align="left"
                min-width="10%"
                label="认证状态">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.enterpriseRecordId" @click="goDetail(scope.row.enterpriseRecordId)" type="text" size="small" :disabled="!$checkAuth('datamanage:enterpriseRecord:view')">查看</el-button>
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
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { setNum } from '@/utils/utils.js'
export default {
    name: 'recordDataManage',
    data () {
        return {
            searchProps1: [],
            searchProps2: '',
            searchProps3: '',
            searchProps4: '',
            searchProps5: [],
            showLoading: false,
            total: 0,
            allCityList: [],
            pageNum: 1,
            pageSize: 10,
            tableData: [
                {}
            ]
        }
    },
    components: {
        Breadcrumb
    },
    computed: {
    },
    created () {
        this.getDataList()
        this.getAllCity()
    },
    watch: {
    },
    methods: {
        reset () {
            this.searchProps1 = []
            this.searchProps2 = ''
            this.searchProps3 = ''
            this.searchProps4 = ''
            this.searchProps5 = []
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
        exportData () {
            // 权限校验**********************************************************
            // if (!this.$checkAuth('datamanage:enterpriseRecord:export')) {
            //     this.$msg({
            //         type: 'error',
            //         message: '你没有该项权限'
            //     })
            //     return
            // }
            this.$get('/enterpriseRecord/export', {
                region: this.searchProps1.length ? this.searchProps1[0] : '',
                province: this.searchProps1.length ? this.searchProps1[1] : '',
                city: this.searchProps1.length ? this.searchProps1[2] : '',
                enterpriseIsAudit: this.searchProps2,
                enterpriseIdentifyStatus: this.searchProps3,
                enterpriseBusinessCategory: this.searchProps4,
                startDate: this.searchProps5.length ? this.searchProps5[0] : '',
                endDate: this.searchProps5.length ? this.searchProps5[1] : ''
            }, { responseType: 'arraybuffer' }).then(res => {
                console.log(res.size)
                if (res.size > 100) {
                    let content = res
                    let elink = document.createElement('a')
                    elink.download = '维修企业备案数据' + '.xlsx'
                    elink.style.display = 'none'
                    let blob = new Blob([content])
                    elink.href = URL.createObjectURL(blob)
                    document.body.appendChild(elink)
                    elink.click()
                    document.body.removeChild(elink)
                } else {
                    this.$msg({
                        type: 'error',
                        message: '请求失败'
                    })
                }
            })
            // let href = `${window.uploadURL}enterpriseRecord/export?enterpriseIsAudit=${this.searchProps2}&enterpriseIdentifyStatus=${this.searchProps3}&enterpriseBusinessCategory=${this.searchProps4}`
            // if (this.searchProps5 && this.searchProps5.length) {
            //     href = href + '&startDate=' + this.searchProps5[0]
            //     href = href + '&endDate=' + this.searchProps5[1]
            // }
            // if (this.searchProps1.length > 0) href = href + '&region=' + this.searchProps1[0]
            // if (this.searchProps1.length > 1) href = href + '&province=' + this.searchProps1[1]
            // if (this.searchProps1.length > 2) href = href + '&city=' + this.searchProps1[2]
            // window.open(href)
        },
        search () {
            console.log(!this.$checkAuth('datamanage:enterpriseRecord:view'))
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        // 获取通告列表
        getDataList () {
            !this.searchProps5 && (this.searchProps5 = [])
            this.showLoading = true
            this.$post('enterpriseRecord/list?page=' + this.pageNum + '&size=' + this.pageSize, {
                region: this.searchProps1.length ? this.searchProps1[0] : '',
                province: this.searchProps1.length ? this.searchProps1[1] : '',
                city: this.searchProps1.length ? this.searchProps1[2] : '',
                enterpriseIsAudit: this.searchProps2,
                enterpriseIdentifyStatus: this.searchProps3,
                enterpriseBusinessCategory: this.searchProps4,
                startDate: this.searchProps5.length ? this.searchProps5[0] : '',
                endDate: this.searchProps5.length ? this.searchProps5[1] : ''
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
        // 用户编辑
        goDetail (id) {
            // 权限校验**********************************************************
            // if (!this.$checkAuth('notice:detail')) {
            //     this.$msg({
            //         type: 'error',
            //         message: '你没有该项权限'
            //     })
            //     return
            // }
            this.$router.push('/recordDataDetail?id=' + id)
        }
    }
}
</script>

<style lang='less' scoped>
#recordDataManage {
    .table {
        margin: 20px;
        margin-top: 0;
    }
}
</style>

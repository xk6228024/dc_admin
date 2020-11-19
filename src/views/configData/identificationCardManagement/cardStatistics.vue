
<template>
    <div class="identificationCardStatistics" id="identificationCardStatistics">
        <!-- <search v-model='searchValue' :options='searchOption' @search='search()'></search> -->
        <div class="table tableWrap">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="已发放识别卡统计" name="first">
                    <search v-model='searchValue' :options='searchOption' @search='search()'></search>
                    <el-table
                        :data="tableData"
                        v-loading="loading"
                        class="tableBorder"
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
                        min-width="10%"
                        label="发放企业">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="经营地址">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="发放年月">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="发放数量">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <!-- <el-tab-pane label="已注销识别卡统计" name="second">
                    <search v-model='searchValue' :options='searchOption' @search='search()'></search>
                    <el-table
                        :data="tableData"
                        show-summary
                        v-loading="loading"
                        class="tableBorder"
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
                        min-width="10%"
                        label="企业名称">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="地址">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="注销年月">
                        </el-table-column>
                        <el-table-column
                        prop="createName"
                        align="left"
                        min-width="10%"
                        label="注销数量">
                        </el-table-column>
                    </el-table>
                </el-tab-pane> -->
                <el-tab-pane label="未发放识别卡统计" name="third">
                    <search v-model='searchValue' :options='searchOption2' @search='search()'></search>
                    <el-table
                        :data="tableData"
                        v-loading="loading"
                        show-summary
                        class="tableBorder"
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
                        min-width="10%"
                        label="发放企业">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseName"
                        align="left"
                        min-width="10%"
                        label="经验地址">
                        </el-table-column>
                        <el-table-column
                        prop="enterpriseCertificateNum"
                        align="left"
                        min-width="10%"
                        label="未发放数量">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="识别卡图表统计" name="fourth">
                    <search v-model='searchValue' :options='searchOption' @search='search()'></search>
                    <el-row class="chartbox">
                        <el-col :span="12">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;已发放识别卡图表统计</h4>
                            <div class="echartBox" ref="echart1"></div>
                        </el-col>
                        <el-col :span="12">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;未发放识别卡图表记录</h4>
                            <div class="echartBox" ref="echart2"></div>
                        </el-col>
                        <el-col :span="12">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;已注销识别卡图表统计</h4>
                            <div class="echartBox" ref="echart3"></div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
        <modal
            :title="'检测归档详情'"
            :width="900"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner alertWrap">
                <h4 class="mb20 fwb">车辆信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车牌号码：</span>
                        <span class="c6">粤B99999</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车牌颜色：</span>
                        <span class="c6">黄色</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车辆类别：</span>
                        <span class="c6">大型货车</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">车主单位：</span>
                        <span class="c6">团风县宏达汽车服务中心</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">VIN码：</span>
                        <span class="c6">VWWDD13259912</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">发动机号：</span>
                        <span class="c6">1249999</span>
                    </el-col>
                </el-row>
                <br><br>
                <h4 class="mb20 fwb">检测作业信息</h4>
                <el-row>
                    <el-col :span="8" class="mb20">
                        <span class="c3">检测类别：</span>
                        <span class="c6">登记评定</span>
                    </el-col>
                    <el-col :span="8" class="mb20">
                        <span class="c3">汇款日期：</span>
                        <span class="c6">2020-1-1</span>
                    </el-col>
                </el-row>
                <br><br>
                <h4 class="mb20 fwb">检测作业信息</h4>
                <img src="../../../assets/images/chaojili.png" class="imgBoder pointer" width="100" height="100" @click="$lookImg('../../../assets/images/chaojili.png')">
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import echarts from 'echarts'
import Modal from '@/components/Modal'
import Search from '@/components/search'
export default {
    name: 'identificationCardStatistics',
    data () {
        return {
            activeName: 'first',
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
                    label: '日期范围',
                    type: 'date',
                    key: 'userName'
                }
            ],
            searchOption2: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '入库人',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '日期范围',
                    type: 'date',
                    key: 'userName'
                }
            ],
            searchValue: {},
            option: {
                // color: ['#735E47'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [900, 52, 200, 634, 390, 330, 220],
                        itemStyle: {
                            normal: {
                                // barBorderRadius: 30,
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#735E47'
                                }, {
                                    offset: 1,
                                    color: '#ECE0B6'
                                }])
                            }
                        }
                    }
                ]
            },
            loading: false,
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    computed: {
    },
    watch: {
        activeName (val) {
            if (val === 'fourth') {
                this.$nextTick(() => {
                    this.initChart()
                })
            }
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
        initChart () {
            this.chart1 = echarts.init(this.$refs.echart1)
            this.chart1.setOption(this.option)
            this.chart2 = echarts.init(this.$refs.echart2)
            this.chart2.setOption(this.option)
            this.chart3 = echarts.init(this.$refs.echart3)
            this.chart3.setOption(this.option)
        },
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
        iin () {
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
.identificationCardStatistics {
    padding-top: 20px;
    .echartBox {
        height: 300px;
        width: 100%;
    }
    .chartbox {
        h4 {
            line-height: 36px;
        }
    }
}
</style>
<style lang='less'>
</style>

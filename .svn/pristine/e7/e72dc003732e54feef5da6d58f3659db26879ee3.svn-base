<!-- 收入统计 -->
<template>
    <div class="income">
        <div class="content" v-loading="loading">
            <div class="i-box" >
                <div class="i-top">
                    <div class="left menu-list">
                        <ul>
                            <li class="liMenu" :class="{hover: idx + 1===menuIndex}" @click="son(item.id, idx)" v-for="(item,idx) in menu" :key="idx">{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="i-search">
                        <div class="left i-date">
                            <div class="left-column">按时间段：</div>
                            <div class="i-date-picker">
                                <el-date-picker
                                v-model="dateValueSearch"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="left i-search-button">
                            <el-button size="medium" @click="getAllData">查询</el-button>
                        </div>
                    </div>
                </div>
                <div class="i-con">
                    <div class="i-con-char" ref="chartCon" :style="{ height: divHeight + 'px' }">
                        <!-- <div ref="myChart" style="width:100%;height:600px"  :style="{width:chartWidth + 'px',height: divHeight + 'px' }"></div> -->
                        <div ref="myChart" style="width:100%;height:600px"  :style="{width:'100%',height: divHeight + 'px' }"></div>
                    </div>
                    <div class="i-total">金额合计：{{moneyTotal}}元</div>
                    <div class="i-con-bottom">
                        <div class="i-con-tab">
                            <div class="i-con-tab-list">
                                <el-button
                                    size="medium"
                                    :class="{incomeHover: idx===indexCategory}"
                                    v-for="(item,idx) in incomeCategory"
                                    :key="idx"
                                    @click="category(item, idx)">
                                    {{item.name}}
                                </el-button>
                            </div>
                        </div>
                        <div class="i-con-radio">
                            <el-radio-group v-model="filterRadio" @change="getAllData">
                                <el-radio :label="1">按城市</el-radio>
                                <el-radio :label="2">按市场区域</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'income',
    data () {
        return {
            menu: [
                {
                    name: '本月度',
                    id: 1
                },
                {
                    name: '本季度',
                    id: 2
                },
                {
                    name: '本年度',
                    id: 3
                }
            ],
            loading: false, // 加载中
            menuIndex: 1, // 月度季度索引
            filterRadio: 1, // 按城市/市场
            dateValueSearch: [], // 查询时间
            moneyTotal: 0, // 金额合计
            chartWidth: 0,
            chartHeight: 0,
            incomeCategory: [
                {
                    name: '总收入',
                    url: 'finance/report/findSumIncome'
                },
                {
                    name: '维护服务费',
                    url: 'finance/report/findMaintainIncome'
                },
                {
                    name: '检测服务费',
                    url: 'finance/report/findInspectIncome'
                },
                {
                    name: '运输车辆信息查询服务费',
                    url: 'finance/report/findTransportationVehicleSearchIncome'
                },
                {
                    name: '系统外延设备销售费',
                    url: 'finance/report/findDeviceIncome'
                }
            ],
            indexCategory: 0,
            myCharts: '',
            divHeight: 0, // 内容区域高度
            chartsBoxHeight: 0 // 内容区域高度
        }
    },
    watch: {
        chartWidth () {
            setTimeout(() => {
                // this.drawLine()
            }, 10)
        }
    },
    mounted () {
        this.init()
    },
    created () {
        this.getAllData()
    },
    methods: {
        // 初始化函数
        init () {
            /* 浏览器高度 */
            let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            /* 内容区高度 */
            this.divHeight = winHeight - 325
            let height = this.$refs.chartCon.offsetHeight
            let width = this.$refs.chartCon.offsetWidth
            this.chartHeight = height - 90
            this.chartWidth = width
        },
        // 顶部按月度季度年度统计
        son (id) {
            this.menuIndex = id
            this.dateValueSearch = []
            this.getAllData()
        },
        // 底部统计类型转换
        category (item, idx) {
            this.indexCategory = idx
            this.getAllData()
        },
        // 获取统计数据
        getAllData () {
            this.loading = true
            let params = {
                type: this.filterRadio,
                data: {
                }
            }
            if (this.dateValueSearch && this.dateValueSearch.length) {
                this.menuIndex = 0
                params.data.stime = this.dateValueSearch[0] + ' 00:00:00'
                params.data.etime = this.dateValueSearch[1] + ' 23:59:59'
            }
            this.menuIndex && (params.data.type = this.menuIndex)
            this.$post(this.incomeCategory[this.indexCategory].url, params)
                .then(res => {
                    if (res.status === 200) {
                        let params = {
                            xData: [],
                            yData: [],
                            title: this.incomeCategory[this.indexCategory].name
                        }
                        let total = 0
                        for (let key in res.datas) {
                            params.xData.push(key)
                            params.yData.push(res.datas[key])
                            total += res.datas[key]
                        }
                        this.moneyTotal = total.toFixed(2)
                        this.drawLine(params)
                    } else {
                        this.$alert(res.message, '提示')
                    }
                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
                })
        },
        // 柱状图
        drawLine ({ xData, yData, title }) {
            this.myCharts = echarts.init(this.$refs.myChart)
            this.myCharts.setOption({
                color: ['#759AFF'],
                title: {
                    text: title,
                    textStyle: {
                        color: '#7c96ab',
                        fontWeight: 'normal'
                    },
                    top: '20',
                    left: '1%'
                },
                tooltip: {},
                grid: {
                    top: '15%',
                    left: '1%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    data: xData,
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: ['#7c96ab']
                        }
                    }
                },
                yAxis: {
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: ['#7c96ab'],
                            width: 0
                        }
                    }
                },
                series: [{
                    name: '收入',
                    type: 'bar',
                    data: yData,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }]
            })
            window.onresize = () => {
                console.log(this.myCharts.resize())
                this.myCharts.resize()
            }
        }
    }
}
</script>
<style lang='less' scoped>
    .income {
        width: 100%;
        overflow: hidden;
        .content {
            font-size: 14px;
            color: #7c96ab;
        }
        .i-box {
            padding: 10px;
            box-sizing: border-box;
        }
        .i-top {
            width: 100%;
            overflow: hidden;
            position: relative;
        }
        .i-search {
            min-width: 500px;
            position: absolute;
            top: 10px;
            right: 10px;
            .i-search-button {
                margin-left: 20px;
            }
        }
        .left {
            float: left;
        }
        .right {
            float: right;
        }
        .left-column {
            color: #7c96ab;
        }
        .i-date {
            margin-left: 30px;
            display: flex;
        }
        .left-column {
            display: flex;
            justify-content: center;
            align-items: Center;
            margin-right: 10px;
        }
        .i-search .el-radio-group {
            margin-top: 13px;
        }
        .menu-list {
            width: 100%;
            overflow: hidden;
            border-bottom: solid 1px #e8ecef;
        }
        .menu-list ul {
            margin: 0;
            padding: 0;
        }
        .menu-list ul li {
            float: left;
            padding: 10px 20px;
            font-size: 14px;
            color: #778ca2;
            line-height: 36px;
            border-bottom: 2px solid transparent;
            margin-left: 30px;
        }
        .liMenu{
        margin-right: 20px;
        cursor:pointer;
        }
        .liMenu.hover{
        color: #4d7cfe;
        border-bottom: 2px solid #4d7cfe;
        }
        .i-con {
            width: 100%;
            overflow: hidden;
            position: relative;
            .i-total {
                position: absolute;
                top: 30px;
                right: 40px;
                font-size: 16px;
                color: #FFB515;
            }
        }
        .i-con-char {
            width: 100%;
        }
        .i-con-bottom {
            width: 100%;
            height: 90px;
            background: #e8ecef;
            padding: 0 20px;
            box-sizing: border-box;
        }
        .i-con-tab {
            float: left;
            height: 90px;
            display: flex;
        }
        .i-con-tab-list {
            display: flex;
            align-items: center;
        }
        .i-con-radio {
            float: right;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .incomeHover{
            border: solid 1px #4d7cfe;
            color: #4d7cfe;
        }
    }
</style>

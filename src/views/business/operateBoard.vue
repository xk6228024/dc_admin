<!-- 首页 -->
<template>
    <div class="operateBoard">
        <div class="top_bar">
            <div class="top_item">
                <p class="top_name">
                    维修企业作业数
                    <el-tooltip class="item" effect="dark" content="累计总数" placement="top">
                        <img src="../../assets/img/tips.png">
                    </el-tooltip>
                </p>
                <h4 class="top_count">{{fixData.total}}</h4>
                <div class="top_content">
                    周同比
                    <img src="../../assets/img/down.svg" v-if="fixData.weekRate < 0" class="down">
                    <img src="../../assets/img/up.svg" v-else>
                    {{Math.abs(fixData.weekRate)}}%
                    &nbsp;&nbsp;
                    日环比
                    <img src="../../assets/img/down.svg" v-if="fixData.dayRate < 0" class="down">
                    <img src="../../assets/img/up.svg" v-else>
                    {{Math.abs(fixData.dayRate)}}%
                </div>
                <div class="line"></div>
                <p class="top_num">七天日均增长 <b>{{fixData.fixDayIncreTotal}}</b></p>
            </div>
            <div class="top_item">
                <p class="top_name">
                    检测企业作业数
                    <el-tooltip class="item" effect="dark" content="累计总数" placement="top">
                        <img src="../../assets/img/tips.png">
                    </el-tooltip>
                </p>
                <h4 class="top_count">{{inspectData.total}}</h4>
                <!-- <h4 class="top_count">--</h4> -->
                <div class="top_content">
                    周同比
                    <img src="../../assets/img/down.svg" v-if="inspectData.weekRate < 0" class="down">
                    <img src="../../assets/img/up.svg" v-else>
                    {{Math.abs(inspectData.weekRate)}}%
                    <!-- <img src="../../assets/img/up.svg"> -->
                    <!-- -- -->
                    &nbsp;&nbsp;
                    日环比
                    <img src="../../assets/img/down.svg" v-if="inspectData.dayRate < 0" class="down">
                    <img src="../../assets/img/up.svg" v-else>
                    {{Math.abs(inspectData.dayRate)}}%
                    <!-- <img src="../../assets/img/up.svg"> -->
                    <!-- -- -->
                </div>
                <div class="line"></div>
                <!-- <p class="top_num">七天日均增长 <b>{{data.transportDayIncreTotal}}</b></p> -->
                <p class="top_num">七天日均增长 <b>{{inspectData.fixDayIncreTotal}}</b></p>
            </div>
            <div class="top_item">
                <p class="top_name">
                    运输企业归档数
                    <el-tooltip class="item" effect="dark" content="累计总数" placement="top">
                        <img src="../../assets/img/tips.png">
                    </el-tooltip>
                </p>
                <!-- <h4 class="top_count">{{data.transportTotal.total}}</h4> -->
                <h4 class="top_count">--</h4>
                <div class="top_content">
                    周同比
                    <!-- <img src="../../assets/img/down.svg" v-if="data.transportTotal.weekRate < 0" class="down"> -->
                    <img src="../../assets/img/up.svg">
                    --
                    &nbsp;&nbsp;
                    日环比
                    <!-- <img src="../../assets/img/down.svg" v-if="data.transportTotal.dayRate < 0" class="down"> -->
                    <img src="../../assets/img/up.svg">
                    --
                </div>
                <div class="line"></div>
                <p class="top_num">七天日均增长 <b>--</b></p>
            </div>
            <div class="top_item">
                <p class="top_name">
                    最近七天访问量(养车修车网)
                    <el-tooltip class="item" effect="dark" content="7天累计访问总数" placement="top">
                        <img src="../../assets/img/tips.png">
                    </el-tooltip>
                </p>
                <h4 class="top_count" style="margin-bottom:9px;">--</h4>
                <div class="top_content">
                    <div ref="chart2" class="chart-box2" style="height:28px;"></div>
                </div>
                <div class="line"></div>
                <p class="top_num">当日访问量 <b>--</b></p>
            </div>
        </div>
        <div class="content clearfix" ref="content">
            <div class="chart_bar">
                <el-tabs v-model="taskType" @tab-click="judgeTypeDraw" class="chart-tabs">
                    <el-tab-pane label="维修作业次数" name="repair">
                        <div ref="chart0" class="chart-box" v-loading="loading"></div>
                    </el-tab-pane>
                    <el-tab-pane label="检测作业次数" name="testing">
                        <div ref="chart1" class="chart-box" v-loading="loading"></div>
                    </el-tab-pane>
                </el-tabs>
                <div class="top-box">
                    <el-radio-group v-model="dateType" @change="judgeTypeDraw">
                        <el-radio-button :label="1">本周</el-radio-button>
                        <el-radio-button :label="2">本月</el-radio-button>
                        <el-radio-button :label="3">本年</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="ranking_list" v-loading="loading2">
                    <el-tabs v-model="rankActive" @tab-click="judgeTypeDraw">
                        <el-tab-pane label="城市排名" name="city">
                            <ul>
                                <li v-for="(i,index) in cityRang" :key="i.id"
                                :class="{'top1':index===0,'top2':index===1,'top3':index===2}">
                                    <span class="rankIndex">{{index+1}}</span>
                                    <span class="name">{{i.nameKey}}</span>
                                    <span class="rankCount">{{i.countValue}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="企业排名" name="enterprise">
                            <ul>
                                <li v-for="(i,index) in enterpriseData" :key="i.id"
                                :class="{'top1':index===0,'top2':index===1,'top3':index===2}">
                                    <span class="rankIndex">{{index+1}}</span>
                                    <span class="name" :title="i.nameKey">{{i.nameKey}}</span>
                                    <span class="rankCount">{{i.countValue}}</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                    <div class="view-detail" v-if="taskType==='repair'" @click="$router.push(`/enterpriseUploadDataRank?type=${rankActive === 'city' ? '1' : '2'}&time=${dateType}`)">查看更多>></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import { filterTime } from '@/utils/filterTime.js'
export default {
    name: 'operateBoard',
    data () {
        return {
            dataType: 1,
            startTime: '',
            endTime: '',
            dateRegion: [],
            timeType: 1,
            taskType: 'repair',
            activeName: 'type1',
            rankActive: 'city',
            fixData: {
                weekRate: 0,
                dayRate: 0,
                total: 0,
                fixDayIncreTotal: 0
            },
            inspectData: {
                weekRate: 0,
                dayRate: 0,
                total: 0,
                fixDayIncreTotal: 0
            },
            data: {
                fixTotal: {
                    total: 0,
                    weekRate: 0,
                    dayRate: 0
                },
                vtisTotal: {
                    total: 0,
                    weekRate: 0,
                    dayRate: 0
                },
                transportTotal: {
                    total: 0,
                    weekRate: 0,
                    dayRate: 0
                }
            },
            rangData: {}, // 维修排名数据
            insRangData: {}, // 检测排名数据
            fixChartData: {},
            cityRang: [], // 维修排名数据
            enterpriseData: [], // 检测排名数据
            baseUrl: process.env.BASE_URL,
            dateType: 1, // 时间查询类型
            carCharts2: {},
            carCharts: {
                chart0: {},
                chart1: {}
            }, // 图表对象
            loading: false,
            loading2: false,
            option2: {
                color: ['#8543E0'],
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top: '2',
                    containLabel: false
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    textStyle: {
                        fontSize: '14px',
                        color: '#666'
                    },
                    formatter: '{b}&nbsp;{c}',
                    padding: [8, 10, 8, 10],
                    confine: true,
                    axisPointer: {
                        type: 'none'
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2018-10-11', '2018-10-12', '2018-10-13', '2018-10-14', '2018-10-15', '2018-10-16', '2018-10-17']
                },
                yAxis: {
                    show: false,
                    type: 'value'
                },
                series: [{
                    data: [0, 0, 0, 0, 0, 0, 0],
                    type: 'line',
                    areaStyle: { opacity: 1 },
                    showSymbol: false,
                    smooth: true
                }]
            },
            option: { // 柱状图配置
                title: {
                    text: '数据增长趋势',
                    textStyle: {
                        color: '#252631',
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 16
                    },
                    padding: [16, 0, 0, 0]
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    trigger: 'axis',
                    formatter: '{b}:{c}',
                    textStyle: {
                        color: '#fff'
                    }
                },
                formatter: '{c}',
                grid: {
                    y: 64,
                    x: 62,
                    right: '3%'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#D9D9D9'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                    name: '',
                    nameLocation: 'start',
                    nameTextStyle: {
                        color: '#8BA7C7',
                        fontSize: 12,
                        padding: [30, 0, 0, 50]
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#EBF5FF'
                        }
                    },
                    axisLabel: {
                        color: '#8BA7C7',
                        fontSize: 14
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#E8E8E8',
                            type: 'dashed'
                        }
                    },
                    axisTick: { show: false },
                    axisLabel: {
                        color: '#8BA7C7',
                        fontSize: 14
                    }
                },
                series: [
                    {
                        data: [0, 201, 50, 100, 190, 80, 120],
                        type: 'bar',
                        color: '#4D7CFE',
                        barWidth: '30',
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1)
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                dataZoom: [
                    {
                        type: 'slider',
                        show: false,
                        end: 100
                    }
                ]
            }
        }
    },
    components: {
    },
    created () {
        this.getTab1Data() // 获取维修数据
        this.getTab2Data() // 获取检测数据
    },
    mounted () {
        // this.carCharts2 = echarts.init(this.$refs.chart2)
        // this.carCharts2.setOption(this.option2)
        // this.getTotalDate()
        this.judgeTypeDraw()
    },
    watch: {
        dateRegion (val) {
            if (!val) {
                this.startTime = ''
                this.endTime = ''
                this.activeName = 'type1'
                this.timeType = 1
                return
            }
            if (val.length) {
                this.startTime = val[0]
                this.endTime = val[1]
                this.activeName = ''
                this.timeType = 4
            }
        }
    },
    methods: {
        // 获取维修数据
        getTab1Data () {
            this.$post('/dataCensus/get', {}).then(res => {
                if (res.data) {
                    this.fixData.weekRate = res.data.weekRate
                }
            })
            this.$post('/dataCensus/getDayRate', {}).then(res => {
                if (res.data) {
                    this.fixData.dayRate = res.data.dayRate
                }
            })
            this.$post('/dataCensus/getTotalFixCount', {}).then(res => {
                if (res.data) {
                    this.fixData.total = res.data.total
                }
            })
            this.$post('/dataCensus/getSevenDayInc', {}).then(res => {
                if (res.data) {
                    this.fixData.fixDayIncreTotal = res.data.fixDayIncreTotal
                }
            })
        },
        // 获取检测数据
        getTab2Data () {
            this.$get('/dataCensus/inspectGrowth/week', {}).then(res => {
                if (res.data) {
                    this.inspectData.weekRate = res.data.weekRate
                }
            })
            this.$get('/dataCensus/inspectGrowth/day', {}).then(res => {
                if (res.data) {
                    this.inspectData.dayRate = res.data.dayRate
                }
            })
            this.$get('/dataCensus/total/inspect', {}).then(res => {
                if (res.data) {
                    this.inspectData.total = res.data.total
                }
            })
            this.$get('/dataCensus/inspectGrowth/svgDayIncr', {}).then(res => {
                if (res.data) {
                    this.inspectData.fixDayIncreTotal = res.data.svgDayIncr
                }
            })
        },
        // 判断类型画图
        judgeTypeDraw (val) {
            // console.log(val)
            if (this.taskType === 'repair') {
                this.getFixTaskNum()
            } else {
                this.getInsTaskNum()
            }
            // 判断排名数据类型
            if (this.rankActive === 'city') {
                this.getCityRank()
            } else {
                this.getEnterpriseRank()
            }
        },
        // 获取城市排名
        getCityRank () {
            this.loading2 = true
            console.log(this.taskType)
            let url = ''
            if (this.taskType === 'repair') {
                // console.log(this.dateType)
                url = '/dataCensus/getFixCityRang/' + this.dateType
                this.$post(url)
                    .then(res => {
                        this.loading2 = false
                        if (res.code === 0) {
                            this.cityRang = res.data
                        }
                    }).catch(err => {
                        console.log(err)
                        this.loading2 = false
                    })
            } else {
                let dateType = ''
                if (this.dateType - 0 === 1) dateType = 'week'
                if (this.dateType - 0 === 2) dateType = 'month'
                if (this.dateType - 0 === 3) dateType = 'year'
                url = '/dataCensus/getInsRanking/city/' + dateType
                this.$get(url)
                    .then(res => {
                        this.loading2 = false
                        if (res.code === 0) {
                            this.cityRang = res.data
                        }
                    }).catch(err => {
                        console.log(err)
                        this.loading2 = false
                    })
            }
        },
        // 获取企业排名
        getEnterpriseRank (type) {
            this.loading2 = true
            let url = ''
            if (this.taskType === 'repair') {
                url = '/dataCensus/getFixEntRang/' + this.dateType
                this.$post(url)
                    .then(res => {
                        this.loading2 = false
                        if (res.code === 0) {
                            this.enterpriseData = res.data
                        }
                    })
            } else {
                let dateType = 'week'
                if (this.dateType - 0 === 1) dateType = 'week'
                if (this.dateType - 0 === 2) dateType = 'month'
                if (this.dateType - 0 === 3) dateType = 'year'
                url = '/dataCensus/getInsRanking/ent/' + dateType
                this.$get(url)
                    .then(res => {
                        this.loading2 = false
                        if (res.code === 0) {
                            this.enterpriseData = res.data
                        }
                    })
            }
        },
        // 获取维修作业次数
        getFixTaskNum () {
            this.loading = true
            this.$post('/dataCensus/getFixCount/' + this.dateType)
                .then(res => {
                    this.loading = false
                    if (res.code === 0) {
                        this.drawLine(
                            'chart0',
                            res.data.map(item => {
                                if (typeof item.dateKey === 'string') {
                                    return item.dateKey
                                } else {
                                    return filterTime(item.dateKey, 'mm-dd')
                                }
                            }),
                            res.data.map(item => {
                                return item.countValue
                            })
                        )
                    }
                })
                .catch(e => {
                    this.loading = false
                })
        },
        // 获取检测作业次数
        getInsTaskNum () {
            this.loading = true
            this.$post('/dataCensus/inspectCount/' + this.dateType)
                .then(res => {
                    this.loading = false
                    if (res.code === 0) {
                        this.drawLine(
                            'chart1',
                            res.data.map(item => {
                                if (typeof item.dateKey === 'string') {
                                    return item.dateKey
                                } else {
                                    return filterTime(item.dateKey, 'mm-dd')
                                }
                            }),
                            res.data.map(item => {
                                return item.countValue
                            })
                        )
                    }
                })
                .catch(e => {
                    this.loading = false
                })
        },
        // 获取顶部统计数据
        getTotalDate () {
            this.$post('/dataCensus/get')
                .then(res => {
                    if (res.code === 0) {
                        this.data = res.data
                    } else {
                        this.$alert(res.msg, '提示')
                        this.data = {
                            fixTotal: {
                                total: 0,
                                weekRate: 0,
                                dayRate: 0
                            },
                            vtisTotal: {
                                total: 0,
                                weekRate: 0,
                                dayRate: 0
                            },
                            transportTotal: {
                                total: 0,
                                weekRate: 0,
                                dayRate: 0
                            }
                        }
                    }
                })
        },
        // 柱状图
        drawLine (chart, xData, yData) {
            this.carCharts[chart] = echarts.init(this.$refs[chart])
            let option = JSON.parse(JSON.stringify(this.option))
            option.xAxis.data = xData
            option.series[0].data = yData
            if (this.dateType === 2) {
                option.dataZoom[0].show = true
                option.dataZoom[0].end = 33
            }
            this.carCharts[chart].setOption(option)
            setTimeout(() => {
                this.carCharts[chart].resize()
            })
            window.onresize = () => {
                this.carCharts[chart].resize()
            }
        }
    }
}
</script>

<style lang='less' scoped>
.operateBoard {
    background: #F0F2F5;
    height:100%;
    .button_group {
        position: absolute;
        right: 40px;
        top: 50px;
        z-index: 2;
    }
    .ranking_list {
        position: absolute;
        text-align: left;
        top: 67px;
        right: 32px;
        width: 300px;
        height: 434px;
        padding-bottom: 20px;
        overflow: auto;
        .view-detail {
            position:absolute;
            right: 0;
            bottom: 0;
            height: 20px;
            line-height: 20px;
            color: #8C8C8C;
            font-size: 12px;
            cursor: pointer;
        }
        h4 {
            line-height: 40px;
            font-weight: 700;
            font-size: 16px;
            color:rgba(0,0,0,0.85);
        }
        ul {
            li {
                // line-height: 40px;
                margin-top: 20px;
                .rankIndex {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: rgba(240,242,245,1);
                    text-align: center;
                    line-height: 20px;
                    color: #595959;
                    margin-right: 20px;
                }
                .name {
                    display: inline-block;
                    width:200px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .rankCount {
                    float: right;
                }
                &.top1 {
                    .rankIndex {
                        color: #ffffff;
                        background: #4D7CFE;
                    }
                }
                &.top2 {
                    .rankIndex {
                        color: #ffffff;
                        background: #52C41A;
                    }
                }
                &.top3 {
                    .rankIndex {
                        color: #ffffff;
                        background: #FAAD14;
                    }
                }
            }
        }
    }
    .chart_bar {
        height: 573px;
        margin: 0 32px;
    }
    .top-box {
        height: 66px;
        line-height: 66px;
        position: absolute;
        right: 32px;
        top: 0px;
    }
    .top_bar {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        .top_item {
            transition: .3s all ease-in;
            background: #ffffff;
            margin-right: 20px;
            flex: 1;
            padding: 20px 32px;
            min-height: 144px;
            position: relative;
            &:nth-child(4) {
                margin-right: 0;
            }
            @media screen and(max-width: 1400px) {
                padding: 20px 10px;
            }
            .top_name {
                color: rgba(0,0,0,0.45);
                font-size: 14px;
                img {
                    float: right;
                    cursor: pointer;
                }
            }
            .top_content {
                img {
                    margin-left: 3px;
                    position: relative;
                    top: 2px;
                    &.down {
                        transform: rotate(180deg);
                    }
                }
            }
            .top_count {
                font-size:30px;
                font-family: HelveticaNeue;
                color: rgba(0,0,0,0.85);
                margin-bottom: 20px;
                margin-top: 6px;
            }
            .line {
                height: 1px;
                background: rgba(232,232,232,1);
                margin: 20px 0 10px;
            }
        }
    }
    .content {
        background: #ffffff;
        overflow: auto;
        position: relative;
        .charts {
            width: 96%;
            position: relative;
            padding: 25px 2%;
            .total {
                position: absolute;
                top: 64px;
                right: 11%;
                color: #F7BF47;
                font-size: 16px;
            }
            .detail {
                position: absolute;
                top: 64px;
                right: 76px;
                color: #8BA7C7;
                font-size: 12px;
            }
        }
        .chart-box {
            width: 100%;
            height: 452px;
        }
    }
}
</style>
<style lang="less">
.operateBoard {
    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        color:#4D7CFE;
        background-color: #fff;
    }
    .el-radio-button__inner {
        padding: 8px 16px;
    }
    .el-tabs__nav-wrap::after {
        height: 1px;
    }
    .chart-tabs {
        .el-tabs__header {
            height: 68px;
            line-height: 68px;
            margin: 0;
        }
        .el-tabs__content {
            margin-right: 396px;
        }
        .el-tabs__item {
            font-size: 15px;
            box-shadow: none !important;
        }
        .el-tabs__item.is-active {
            font-weight: bold;
        }
    }
    .ranking_list {
        .el-tabs__header {
            margin: 0;
        }
        .el-tabs__nav {
            float: none;
            height: 56px;
            line-height: 68px;
            margin: 0;
        }
        .el-tabs__nav-scroll {
            text-align: center;
        }
        .el-tabs__active-bar {
            left: 42px;
        }
        .el-tabs__item {
            width: 108px;
        }
    }
}
</style>

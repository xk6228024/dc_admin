<template>
    <div id="repairEnterpriseSys">
        <el-row>
            <el-col :span="18" class="main-col">
                <div class="map">
                    <h2 class="main-title">系统运行情况</h2>
                    <el-row class="main-content" v-loading="showLoading">
                        <el-col :span="6">
                            <div class="main-item" @click="$router.push('/enterpriseOnlineList')">
                                <h5 class="name">在线用户总数</h5>
                                <div class="total">{{currentOnLineCount + '' | addComma}}<span class="unit">人</span></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="main-item" @click="$router.push('/enterpriseTodayList')">
                                <h5 class="name">当日登录用户总数</h5>
                                <div class="total">{{count.todayUserCount + '' | addComma}}<span class="unit">人</span></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="main-item" @click="$router.push('/enterpriseSevenTodayList')">
                                <h5 class="name">7日内登录用户总数</h5>
                                <div class="total">{{count.sevenDayUserCount + '' | addComma}}<span class="unit">人</span></div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="main-item" @click="$router.push('/enterpriseThreeTodayList')">
                                <h5 class="name">3日内新增用户数</h5>
                                <div class="total">{{count.threeDayUserAddCount + '' | addComma}}<span class="unit">人</span></div>
                            </div>
                        </el-col>
                    </el-row>
                    <div ref="chinaMap" class="chart-box" v-loading="showLoading2"></div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="trend">
                    <h2 class="main-title">维修数据增长</h2>
                    <div class="main-content">
                        <div class="main-item">
                            <h5 class="name">趋势</h5>
                            <div class="main-item-trend">{{trendText}}</div>
                            <div ref="lineChart" class="line-chart" v-loading="showLoading3"></div>
                            <el-row class="line-chart-label">
                                <el-col :span="8" :class="{tal: index === 0,tac: index === 1,tar: index === 2}"
                                v-for="(item, index) in trendData" :key="index">{{item.dayDate|filterTime('mm-dd')}}</el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <div class="target">
                    <h2 class="main-title">产品用户评价指标（10日）</h2>
                    <div ref="gaugeChart" class="gauge-chart" v-loading="showLoading4"></div>
                    <div class="tar"><router-link to="/evaluateFeedback">查看详情>></router-link></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'
import { addComma } from '@/utils/utils'
// import { truncate } from 'fs';
export default {
    name: 'repairEnterpriseSys',
    data () {
        return {
            showLoading: false,
            showLoading2: false,
            showLoading4: false,
            showLoading3: false,
            count: {
                todayUserCount: '',
                threeDayUserAddCount: '',
                sevenDayUserCount: ''
            },
            trendData: [],
            currentOnLineCount: '',
            trendText: '',
            chinaMap: {},
            gaugeChart: {},
            lineChart: {}
        }
    },
    components: {
    },
    mounted () {
        this.getAllData()
        this.getRate()
        this.getHome()
        this.getLineData()
    },
    methods: {
        getLineData () {
            this.$get('/onlines/growthTrend').then(res => {
                if (res.code === 0) {
                    if (res.data.threeDayFixCount && res.data.threeDayFixCount.length) {
                        let xData = []
                        let yData = []
                        res.data.threeDayFixCount.forEach(item => {
                            xData.push(item.dayDate)
                            yData.push(item.dayCount)
                        })
                        if (yData[2] - yData[0] > 0) {
                            this.trendText = '趋势向上'
                        } else if (yData[2] - yData[0] < 0) {
                            this.trendText = '趋势向下'
                        } else if (yData[2] - yData[0] === 0) {
                            this.trendText = '趋势持平'
                        }
                        this.trendData = res.data.threeDayFixCount
                        xData = xData.map(d => {
                            return new Date(d).getFullYear() + '-' + (new Date(d).getMonth() + 1) + '-' + new Date(d).getDate()
                        })
                        this.drawLine(xData, yData)
                    }
                }
            })
        },
        getRate () {
            this.showLoading3 = true
            this.$post('/feedBack/selectGradeOfRate', {})
                .then(res => {
                    // 好评率
                    if (res.data.rate) {
                        this.drawGauge(res.data.rate)
                    } else {
                        this.drawGauge(0)
                    }
                    this.showLoading3 = false
                })
        },
        // 维修数据增长
        getHome () {
            this.showLoading = true
            this.$post('/onlines/home', {})
                .then(res => {
                    // if (res.data.threeDayFixCount && res.data.threeDayFixCount.length) {
                    //     let xData = []
                    //     let yData = []
                    //     res.data.threeDayFixCount.forEach(item => {
                    //         xData.push(item.dayDate)
                    //         yData.push(item.dayCount)
                    //     })
                    //     if (yData[2] - yData[0] > 0) {
                    //         this.trendText = '趋势向上'
                    //     } else if (yData[2] - yData[0] < 0) {
                    //         this.trendText = '趋势向下'
                    //     } else if (yData[2] - yData[0] === 0) {
                    //         this.trendText = '趋势持平'
                    //     }
                    //     this.trendData = res.data.threeDayFixCount
                    //     xData = xData.map(d => {
                    //         return new Date(d).getFullYear() + '-' + (new Date(d).getMonth() + 1) + '-' + new Date(d).getDate()
                    //     })
                    //     this.drawLine(xData, yData)
                    // }
                    // 数据统计
                    this.count = {
                        todayUserCount: res.data.todayLoginCount,
                        threeDayUserAddCount: res.data.threeDayRegisterCount,
                        sevenDayUserCount: res.data.sevenDayCount
                    }
                    this.showLoading = false
                })
        },
        getAllData () {
            this.showLoading4 = true
            this.$post('/onlines/entCount', {})
                .then(res => {
                    // 数据统计
                    this.currentOnLineCount = res.data.currentOnLineCount
                    // 地图数据
                    this.drawMap(res.data.provinceDtoList)
                    window.onresize = () => {
                        this.chinaMap.resize()
                        this.lineChart.resize()
                        this.gaugeChart.resize()
                    }
                    this.showLoading4 = false
                })
        },
        // 地图
        drawMap (res) {
            const initData = res || []
            let data = initData.map(p => {
                let obj = {
                    name: p.provinceName,
                    value: p.provinceCount
                }
                if (p.cityDto && p.cityDto.length) {
                    obj.children = p.cityDto.map(c => {
                        return {
                            name: c.cityName,
                            value: c.cityCount
                        }
                    })
                }
                return obj
            })
            // 取本地省份城市数据
            this.showLoading2 = true
            axios.get(`${window.location.origin}/js/china.json`)
                .then(res => {
                    var mapName = 'china'
                    var geoCoordMap = {}
                    var convertData = function (data) {
                        var res = []
                        for (var i = 0; i < data.length; i++) {
                            var geoCoord = geoCoordMap[data[i].name]
                            if (geoCoord) {
                                var obj = {
                                    name: data[i].name,
                                    value: geoCoord.concat(data[i].value)
                                }
                                if (data[i].children) {
                                    obj.children = data[i].children
                                }
                                res.push(obj)
                            }
                        }
                        return res
                    }
                    var tooltipListHtml = function (data) {
                        let html = ''
                        data.forEach(item => {
                            html += `<p>${item.name}：${item.value}</p>`
                        })
                        return html
                    }
                    echarts.registerMap('china', res.data)
                    var mapFeatures = echarts.getMap(mapName).geoJson.features
                    // 根据省份ID查找对应的经纬度
                    mapFeatures.forEach(v => {
                        initData.forEach(p => {
                            if (p.provinceCode === v.id) {
                                geoCoordMap[p.provinceName] = v.properties.cp
                            }
                        })
                    })
                    var option = {
                        tooltip: {
                            padding: 0,
                            enterable: true,
                            transitionDuration: 1,
                            textStyle: {
                                color: '#000',
                                decoration: 'none'
                            },
                            trigger: 'item',
                            formatter: function (initParams) {
                                let tipHtml = ''
                                let params = ''
                                if (initParams.data && initParams.data.children) {
                                    params = initParams
                                } else {
                                    data.forEach(item => {
                                        let reg = new RegExp(initParams.name)
                                        if (reg.test(item.name)) {
                                            params = {
                                                name: item.name,
                                                data: {
                                                    value: [0, 0, item.value]
                                                }
                                            }
                                            if (item.children) {
                                                params.data.children = item.children
                                            }
                                        }
                                    })
                                }
                                if (params.name && params.data && params.data.value) {
                                    let cityHtml = ''
                                    if (params.data.children.length > 5) {
                                        cityHtml = '<p style="border-bottom: 1px solid #fff;padding:0 24px 8px 24px;">城市用户在线人数前六名</p>'
                                    } else {
                                        cityHtml = '<p style="border-bottom: 1px solid #fff;padding-bottom: 8px;"></p>'
                                    }
                                    tipHtml = `
                                        <div style="width: 192px;padding:16px 0;color:#fff;font-size:12px;background: rgba(0,0,0,0.4);
                                        border-radius:4px;">
                                            <div>
                                                <div style="font-weight:bold;font-size:14px;padding: 0 24px;">
                                                    ${params.name}：${params.data.value[2]}
                                                </div>
                                                ${cityHtml}
                                            </div>
                                            <div style="padding: 8px 24px 0 24px;">
                                                ${tooltipListHtml(params.data.children)}
                                            </div>
                                        </div>
                                    `
                                }
                                return tipHtml
                            }
                        },
                        visualMap: {
                            show: false,
                            type: 'continuous',
                            min: 0,
                            max: 100,
                            left: 'left',
                            top: 'bottom',
                            text: ['高', '低'], // 文本，默认为数值文本
                            calculable: true,
                            seriesIndex: [1],
                            inRange: {
                                color: ['#F9DCE8', '#FDEBD1']
                            }
                        },
                        geo: {
                            show: true,
                            map: mapName,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            regions: [
                                {
                                    name: '南海诸岛',
                                    value: 0,
                                    itemStyle: {
                                        normal: {
                                            opacity: 0,
                                            label: {
                                                show: false
                                            }
                                        }
                                    }
                                }
                            ],
                            zoom: 1.15,
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: '#DBE5FF',
                                    borderColor: '#fff'
                                },
                                emphasis: {
                                    areaColor: '#4D7CFE'
                                }
                            }
                        },
                        series: [
                            {
                                name: '散点',
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                data: convertData(data),
                                symbolSize: 8,
                                label: {
                                    normal: {
                                        formatter: '{b}',
                                        position: 'right',
                                        show: false,
                                        color: '#262626',
                                        fontSize: 11
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#262626'
                                    }
                                }
                            },
                            {
                                type: 'map',
                                map: mapName,
                                geoIndex: 0,
                                aspectScale: 0.75, // 长宽比
                                showLegendSymbol: false, // 存在legend时显示
                                label: {
                                    normal: {
                                        show: true
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            color: '#4D7CFE'
                                        }
                                    }
                                },
                                roam: true,
                                itemStyle: {
                                    normal: {
                                        areaColor: '#fff',
                                        borderColor: '#fff'
                                    },
                                    emphasis: {
                                        areaColor: '#4D7CFE'
                                    }
                                },
                                animation: false,
                                data: data
                            },
                            {
                                name: '点',
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                symbol: 'pin', // 气泡
                                symbolSize: function (val) {
                                    return val[2].toString().length * 10 + 10
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 9
                                        },
                                        formatter: '{@[2]}'
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: '#F62157' // 标志颜色
                                    }
                                },
                                zlevel: 6,
                                data: convertData(data)
                            }
                        ]
                    }
                    this.chinaMap = echarts.init(this.$refs.chinaMap)
                    this.chinaMap.setOption(option)
                    this.chinaMap.on('click', function (params) {
                        console.log(params)
                    })
                    this.showLoading2 = false
                })
        },
        // 折线图
        drawLine (xData, yData) {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#fff',
                    textStyle: {
                        fontSize: '14px',
                        color: '#595959'
                    },
                    formatter: '{b}&nbsp;&nbsp;{c}',
                    padding: [8, 10, 8, 10],
                    extraCssText: 'box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.09);',
                    confine: true,
                    axisPointer: {
                        type: 'none'
                    }
                },
                xAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    type: 'category',
                    boundaryGap: false,
                    data: xData
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    type: 'value'
                },
                grid: {
                    left: 0,
                    right: 0,
                    bottom: 8
                },
                series: [{
                    data: yData,
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    symbolSize: 4,
                    itemStyle: {
                        normal: {
                            color: '#4D7CFE',
                            borderColor: '#4D7CFE'
                        }
                    },
                    lineStyle: {
                        color: '#4D7CFE'
                    },
                    areaStyle: {
                        color: '#D9E5FF'
                    }
                }]
            }
            this.lineChart = echarts.init(this.$refs.lineChart)
            this.lineChart.setOption(option)
            setTimeout(() => {
                this.lineChart.resize()
            }, 500)
        },
        // 仪表盘
        drawGauge (gaugeValue) {
            var option = {
                title: {
                    show: true,
                    x: 'center',
                    y: '65%',
                    text: '好评率',
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bolder',
                        fontStyle: 'normal',
                        color: 'rgba(0,0,0,0.45)'
                    }
                },
                tooltip: {
                    show: false
                },
                series: [
                    {
                        name: '好评率',
                        type: 'gauge',
                        left: 0,
                        right: 0,
                        splitNumber: 4,
                        min: 0,
                        max: 100,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 16,
                                color: [
                                    [gaugeValue / 100, '#4D7CFE'],
                                    [1, '#ccc']
                                ]
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#4D7CFE',
                                width: 1
                            }
                        },
                        splitLine: {
                            show: false,
                            length: 30,
                            lineStyle: {
                                color: '#4D7CFE'
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            show: true,
                            length: '60%',
                            width: 5
                        },
                        detail: {
                            show: true,
                            offsetCenter: [0, 84],
                            formatter: '{value}%',
                            textStyle: {
                                fontSize: 24,
                                color: 'rgba(0,0,0,0.85)'
                            }
                        },
                        data: [
                            {
                                name: '',
                                value: Math.floor(gaugeValue)
                            }
                        ]
                    },
                    {
                        name: '刻度1',
                        type: 'gauge',
                        min: 0,
                        max: 100,
                        radius: '62%',
                        splitNumber: 2,
                        startAngle: 158,
                        endAngle: 22,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                width: 1,
                                color: [
                                    [1, 'rgba(0,0,0,0)']
                                ]
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                width: 1,
                                color: [
                                    [1, 'rgba(0,0,0,0)']
                                ]
                            }
                        },
                        splitLine: {
                            show: true,
                            length: 8,
                            lineStyle: {
                                color: '#4D7CFE',
                                width: 3
                            }
                        },
                        detail: {
                            show: false
                        },
                        pointer: {
                            show: false
                        }
                    },
                    {
                        name: '刻度2',
                        type: 'gauge',
                        min: 0,
                        max: 100,
                        radius: '80%',
                        splitNumber: 3,
                        startAngle: 190,
                        endAngle: -10,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                width: 1,
                                color: [
                                    [1, 'rgba(0,0,0,0)']
                                ]
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: function (val) {
                                if (val < 25) {
                                    return '差'
                                }
                                if (val < 50) {
                                    return '中'
                                }
                                if (val < 75) {
                                    return '良'
                                }
                                if (val >= 75) {
                                    return '优'
                                }
                            },
                            fontSize: 12,
                            color: 'rgba(0,0,0,0.65)'
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                width: 1,
                                color: [
                                    [1, 'rgba(0,0,0,0)']
                                ]
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        pointer: {
                            show: false
                        }
                    }
                ]
            }
            this.gaugeChart = echarts.init(this.$refs.gaugeChart)
            this.gaugeChart.setOption(option)
            setTimeout(() => {
                this.gaugeChart.resize()
            }, 500)
        }
    },
    filters: {
        addComma
    }
}
</script>

<style lang='less' scoped>
#repairEnterpriseSys {
    position: relative;
    background: #f0f2f5;
    .main-title {
        height:54px;
        line-height: 54px;
        padding: 0 30px;
        color:#262626;
        font-size: 16px;
        border-bottom: 1px solid #d9d9d9;
    }
    .map {
        background:#fff;
    }
    .trend {
        height: 382px;
        margin-bottom: 19px;
        background:#fff;
    }
    .target {
        height: 382px;
        background:#fff;
        a {
            color: #8C8C8C;
            font-size: 14px;
            text-decoration: none;
            margin-right: 30px;
            &:hover {
                color: #4d7cfe;
            }
        }
    }
    .main-item {
        cursor: pointer;
        .name {
            color: rgba(0,0,0,0.45);
            font-size: 14px;
            margin-bottom: 6px;
        }
        .total {
            color: #4d7cfe;
            font-size: 24px;
            .unit {
                color: #4d7cfe;
                font-size: 16px;
                margin-left: 8px;
            }
        }
        .main-item-trend {
            font-size: 20px;
            color:rgba(0,0,0,0.85);
        }
    }
    .main-content {
        margin: 24px 30px 0 24px;
    }
    .main-col {
        padding-right: 20px;
    }
    .chart-box {
        height: 648px;
    }
    .line-chart {
        height: 200px;
    }
    .line-chart-label {
        font-size: 12px;
    }
    .gauge-chart {
        height: 290px;
    }
    .table-title {
        margin: 0 0 20px 40px;
    }
    .table {
        margin: 0 40px;
    }
}
</style>

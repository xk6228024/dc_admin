<!-- 数据统计 -->
<template>
    <div class="jcDataStatistics">
        <div class="left_div" ref="left_div">
            <el-table
                :data="tableData"
                class="tableBorder"
                :style="{'height': tableHeight + 'px'}"
                v-loading="loading"
                style="width: 100%;">
                <el-table-column
                prop="num"
                width="80"
                label="序号">
                </el-table-column>
                <el-table-column
                prop="name"
                :label="label">
                </el-table-column>
                <el-table-column
                prop="count"
                width="100"
                sortable
                label="数据">
                </el-table-column>
            </el-table>
        </div>
        <div class="right_div" v-loading="loading">
            <img v-if='showTips' @click="clickTips" src="../../../assets/img/datamanage/pointer.png" style="position:absolute;top:30px;left:50%;margin-left:-75px;cursor:pointer;z-index:9;transition:all .3s eain;">
            <div class="right_header" >检测企业数据统计
                <!-- <span v-if="type==1">企业总计: <i>{{allCount}}</i></span> -->
            </div>
            <p class="right_label">分类:{{label}}</p>
            <div v-show="type==1" ref="chartOfStatistics" class="chart_box" style="width:90%;height:100%;"></div>
            <div v-show="type==2" ref="chartOfStatistics2" class="chart_box" style="width:90%;height:100%;"></div>
            <div class="right_tab">
                <span :class="{'active': type == 1}" @click="changeType(1)">柱状图</span>
                <span :class="{'active': type == 2}" @click="changeType(2)">饼状图</span>
            </div>
            <el-tooltip v-if="type==1" class="tip_item" effect="dark" content="可拖动图表查看更多数据" placement="left-start">
                <img class="tip_img" src="../../../assets/img/datamanage/system-help.png" alt="">
            </el-tooltip>
        </div>
        <div class="bottom_div">
            <el-radio v-model="radio" label="city">按城市统计</el-radio>
            <el-radio v-model="radio" label="category">按企业类型统计</el-radio>
            <el-radio v-model="radio" label="brand">按主修品牌统计</el-radio>
            <!-- <el-radio v-model="radio" label="series">按车系统计</el-radio>
            <el-radio v-model="radio" label="use">按车辆性质统计</el-radio> -->
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
// import { setTimeout } from 'timers';
export default {
    name: 'jcDataStatistics',
    data () {
        return {
            loading: false,
            showTips: '',
            chart2: '',
            allCount: 0,
            type: 1,
            label: '城市',
            tableHeight: 0,
            radio: 'city',
            chart: '',
            option: {
                color: ['#4D7CFE', '#764DFE', '#863BA1', '#9A1C7D', '#992040', '#AF4522', '#9C5D1E', '#B58F1E', '#868614', '#8EAE2D', '#D9D9D9'],
                legend: {
                    orient: 'vertical',
                    top: 'bottom',
                    left: 'right',
                    data: []
                },
                title: {
                    // text: '0',
                    subtext: '检测企业统计',
                    textStyle: {
                        color: '#4D7CFE',
                        fontSize: 18,
                        align: 'center'
                    },
                    subtextStyle: {
                        fontSize: 14,
                        color: ['#dddddd']
                    },
                    x: 'center',
                    y: 'center'
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        minAngle: 2,
                        center: ['50%', '50%'],
                        itemStyle: {
                            normal: {
                                borderColor: '#ffffff',
                                borderWidth: 6
                            }
                        },
                        label: {
                            show: true,
                            formatter: '{b}: {c}'
                        },
                        data: []
                    }
                ]
            },
            option2: {
                grid: {
                    top: '10%',
                    left: '5%',
                    right: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#F5FAFF'
                        }
                    },
                    axisTick: { show: false },
                    data: [],
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
                        color: '#545454',
                        interval: 0,
                        fontSize: 12,
                        formatter: function (value) {
                            if (value.length > 4) {
                                return value.slice(0, 4) + '\n' + value.slice(4, 8) + '\n' + value.slice(8, 12)
                            } else {
                                return value
                            }
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    minInterval: 1,
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#F5FAFF'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#EBF5FF'
                        }
                    },
                    axisTick: { show: false },
                    axisLabel: {
                        color: '#8BA7C7',
                        fontSize: 14
                    }
                },
                dataZoom: [
                    {
                        type: 'slider',
                        show: false,
                        start: 0,
                        end: 12
                    },
                    {
                        type: 'inside',
                        show: false,
                        start: 0,
                        end: 12
                    }
                ],
                series: [
                    {
                        color: '#4D7CFE',
                        barWidth: '44',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        name: '',
                        type: 'bar',
                        data: []
                    }
                ]
            },
            tableData: [
            ]
        }
    },
    computed: {
    },
    components: {
    },
    created () {
        this.getData()
        this.$post('statistics/jc/all').then(res => {
            // console.log(res)
            this.allCount = res.count
            // this.option.title.text = res.count
        })
        setTimeout(() => {
            this.showTips = false
        }, 3000)
    },
    mounted () {
        const clientHeight = document.documentElement.clientHeight
        if (clientHeight < 700) {
            this.$refs.chartOfStatistics.style.height = 350 + 'px'
        } else {
            this.$refs.chartOfStatistics.style.height = clientHeight - 360 + 'px'
        }
        const clientWidth = document.documentElement.clientWidth
        if (clientWidth < 1400) {
            this.$refs.chartOfStatistics.style.width = '700px'
        } else {
            this.$refs.chartOfStatistics.style.width = clientWidth - 700 + 'px'
        }
        this.tableHeight = this.$refs.left_div.offsetHeight - 20 - 20
        this.chart = echarts.init(this.$refs.chartOfStatistics)
        this.chart.setOption(this.option2)
    },
    watch: {
        radio (val) {
            if (val === 'city') {
                this.label = '城市'
            }
            if (val === 'brand') {
                this.label = '品牌'
            }
            if (val === 'series') {
                this.label = '车系'
            }
            if (val === 'category') {
                this.label = '类型'
            }
            if (val === 'use') {
                this.label = '车辆性质'
            }
            this.getData()
        },
        type (val) {
            if (val === 2) {
                this.showTips = false
            }
            this.draw()
        }
    },
    methods: {
        clickTips () {
            this.showTips = false
        },
        changeType (val) {
            this.type = val
        },
        getData () {
            this.loading = true
            this.$post(`/statistics/jc/${this.radio}`).then(res => {
                this.loading = false
                if (!res.data) res.data = []
                this.tableData = this.$setNum(res.data, 1, 999)
                if (this.tableData.length <= 12) {
                    this.showTips = false
                } else if (this.showTips === '') {
                    this.showTips = true
                }
                this.draw()
            })
        },
        draw () {
            if (this.chart) {
                this.chart.clear()
            }
            if (this.chart2) {
                this.chart2.clear()
            }
            if (this.type === 1) {
                const clientHeight = document.documentElement.clientHeight
                // const clientWidth = document.documentElement.clientWidth
                if (clientHeight < 700) {
                    this.$refs.chartOfStatistics.style.height = 350 + 'px'
                } else {
                    this.$refs.chartOfStatistics.style.height = clientHeight - 360 + 'px'
                    // this.$refs.chartOfStatistics.style.width = clientWidth - 700 + 'px'
                }
                const clientWidth = document.documentElement.clientWidth
                if (clientWidth < 1400) {
                    this.$refs.chartOfStatistics.style.width = '700px'
                } else {
                    this.$refs.chartOfStatistics.style.width = clientWidth - 700 + 'px'
                }
                let xlist = []
                let ylist = []
                this.tableData.forEach(e => {
                    xlist.push(e.name)
                    ylist.push(e.count)
                })
                this.option2.xAxis.data = xlist
                this.option2.series[0].data = ylist
                this.option2.dataZoom[0].end = 12 / this.tableData.length * 100
                this.option2.dataZoom[1].end = 12 / this.tableData.length * 100
                this.chart.setOption(this.option2)
                this.chart.resize()
            } else {
                const clientHeight = document.documentElement.clientHeight
                // const clientWidth = document.documentElement.clientWidth
                if (clientHeight < 700) {
                    this.$refs.chartOfStatistics2.style.height = 350 + 'px'
                } else {
                    this.$refs.chartOfStatistics2.style.height = clientHeight - 360 + 'px'
                    // this.$refs.chartOfStatistics2.style.width = clientWidth - 700 + 'px'
                }
                const clientWidth = document.documentElement.clientWidth
                if (clientWidth < 1400) {
                    this.$refs.chartOfStatistics2.style.width = '650px'
                } else {
                    this.$refs.chartOfStatistics2.style.width = clientWidth - 700 + 'px'
                }
                this.chart2 = echarts.init(this.$refs.chartOfStatistics2)
                let list = []
                let otherCount = 0
                let arr = JSON.parse(JSON.stringify(this.tableData)).sort((a, b) => {
                    return a.count > b.count ? -1 : 1
                })
                arr.forEach((e, index) => {
                    if (index < 10) {
                        list.push({
                            value: e.count,
                            name: e.name
                        })
                    } else {
                        otherCount += e.count
                    }
                })
                if (arr.length > 10) {
                    list.push({
                        value: otherCount,
                        name: '其他'
                    })
                }
                // console.log(list)
                this.option.legend.data = list
                this.option.series[0].data = list
                this.chart2.setOption(this.option)
                this.chart2.resize()
            }
        }
    }
}
</script>

<style lang='less' scoped>
.jcDataStatistics {
    width: 100%;
    min-height: 550px;
    overflow-x: hidden;
    position: relative;
    height: 100%;
    background: #F0F2F5;
    .left_div {
        position: absolute;
        padding: 20px;
        width: 350px;
        left: 0;
        top: 0;
        bottom: 60px;
        background: #ffffff;
        box-sizing: border-box;
        border-radius: 6px;
    }
    .right_div {
        position: absolute;
        top: 0;
        bottom: 60px;
        left: 370px;
        right: 0;
        background: #ffffff;
        box-sizing: border-box;
        border-radius: 6px;
        .right_header {
            margin: 35px 0 10px 0;
            color: rgba(89,89,89,1);
            font-size: 14px;
            padding: 0 40px;
            font-weight: 600;
            span {
                font-weight: 400;
                font-size: 12px;
                float: right;
                i {
                    display: inline-block;
                    margin-left: 20px;
                    font-size: 18px;
                    color: #4D7CFE;
                    font-style: normal;
                }
            }
        }
        .right_label {
            // margin: 35px 0;
            color: rgba(0,0,0,0.45);
            font-size: 12px;
            padding: 0 40px;
        }
        // .tip_img {
        //     position: relative;
        //     top: 5px;
        // }
        .tip_item {
            position: absolute;
            right: 50px;
            bottom: 40px;
            img {
                position: relative;
                top: 3px;
            }
        }
        .right_tab {
            position: absolute;
            bottom: 60px;
            left: 50%;
            margin-left: -100px;
            // border-bottom: 1px solid rgba(0,0,0,1);
            span {
                display: inline-block;
                padding: 0 30px;
                line-height: 40px;
                height: 40px;
                color: rgba(89,89,89,1);
                border-bottom: 1px solid #dddddd;
                cursor: pointer;
                &.active {
                    line-height: 38px;
                    height: 38px;
                    color: #4D7CFE;
                    border-bottom: 2px solid #4D7CFE;
                }
            }
        }
    }
    .bottom_div {
        padding-left: 30px;
        position: absolute;
        width: 100%;
        background: #F0F2F5;
        bottom: 0;
        height: 60px;
        line-height: 60px;
    }
}
</style>
<style lang="less">
.jcDataStatistics {
    .el-table::before {
        height: 0;
    }
}
.el-scrollbar__view {
    height: 100%;
}
</style>

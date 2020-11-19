<!-- 首页 -->
<template>
    <div class="dataBoard" >
        <div class="top_bar" >
            <el-row :gutter="20" style="width:100%;">
                <el-col :span="4" v-for="(item,index) in request" :key="item.id" :style="{
                        'padding-left':index==0?'0px':'10px',
                        'padding-right':index==5?'0px':'10px'
                    }">
                    <div class="top_item"  @click="changeData(item,index)" v-loading="item.loading" :style="{'borderColor':activeIndex===index?item.color:'#ffffff'}">
                        <div style="display:inline-block;margin:0 auto;">
                            <img :src="`${baseUrl}/img/home_icon${index+1}.png`" class="fl">
                            <div class="top_text fl">
                                <p>{{item.title}}</p>
                                <h5>{{item.total}}</h5>
                            </div>
                        </div>
                        <span v-if="index !== 5" class="top_btn" @click="$router.push(item.path)">查看>></span>
                    </div>
                </el-col>
            </el-row>
            <!-- <div class="top_item" v-for="(item,index) in request" :key="item.id" @click="changeData(item,index)" :style="{'borderColor':activeIndex===index?item.color:'#ffffff'}">
                <div style="display:inline-block;margin:0 auto;">
                    <img :src="`${baseUrl}/img/home_icon${index+1}.png`" class="fl">
                    <div class="top_text fl">
                        <p>{{item.title}}</p>
                        <h5>{{item.total}}</h5>
                    </div>
                </div>
                <span class="top_btn" @click="$router.push(item.path)">查看>></span>
            </div> -->
        </div>
        <div class="content clearfix" ref="content" :class={loading} v-loading="loading">
            <div class="home-top">
                <div class="fr button_group" style="position: absolute;margin-right: 20px;">
                    <!-- <el-button-group>
                      <el-button :type="dateType==1?'primary':''" plain @click="changeDateType(1)">七天</el-button>
                      <el-button :type="dateType==2?'primary':''" plain @click="changeDateType(2)">按月</el-button>
                      <el-button :type="dateType==3?'primary':''" plain @click="changeDateType(3)">按年</el-button>
                    </el-button-group> -->
                    <el-radio-group v-model="dateType" :disabled="loading2">
                        <el-radio-button label="1">七天</el-radio-button>
                        <el-radio-button label="2">按月</el-radio-button>
                        <el-radio-button label="3">按年</el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="charts" ref="chartWrap" v-loading="loading2">
                <div ref=chart class="chart-box" v-loading="loading2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'dataBoard',
    data () {
        return {
            loadings: true,
            sumLoading1: false,
            sumLoading2: false,
            sumLoading3: false,
            sumLoading4: false,
            sumLoading5: false,
            sumLoading6: false,
            loading2: false, // 图标loading状态
            item: {
                title: '车辆数据',
                unit: '单位：辆',
                method: 'post',
                path: '/carData',
                url: 'display/vehicle', // 原接口
                total: '0',
                color: '#60D3BC'
            },
            formData: {},
            activeIndex: 0,
            baseUrl: process.env.BASE_URL,
            dateType: 1, // 时间查询类型
            carCharts: '', // 图表对象
            breadList: ['全部'],
            loading: false,
            res: {}, // 响应内容
            marketArea: '', // 市场区域
            marketAreaList: [], // 市场区域列表
            allMarketAreaList: [], // 所有市场区域列表
            province: '', // 省份
            provinceList: {}, // 省份列表
            city: '', // 城市
            cityList: [], // 城市列表
            total: 0, // 合计
            bottomBtnIndex: 0, // 底部按钮索引
            request: [ // 请求参数
                {
                    title: '车辆数据',
                    unit: '单位：辆',
                    method: 'post',
                    path: '/carData',
                    url: 'display/vehicle', // 原接口
                    total: '0',
                    color: '#60D3BC',
                    loading: false
                },
                {
                    title: '车主数据',
                    unit: '单位：辆',
                    url: 'display/owner',
                    path: '/ownerInformation',
                    total: '0',
                    // color: '#9280DD'
                    loading: false,
                    color: '#6BAFE4'

                },
                {
                    title: '维修数据',
                    unit: '单位：次',
                    url: 'display/vehicleFix',
                    path: '/maintenanceData',
                    total: '0',
                    loading: false,
                    // color: '#FFAB2B'
                    color: '#9280DD'
                },
                {
                    title: '检测数据',
                    unit: '单位：次',
                    url: 'display/check',
                    path: '/detectionData',
                    loading: false,
                    total: '0',
                    // color: '#D98053'
                    color: '#FFAB2B'
                },
                {
                    title: '维修企业数据',
                    unit: '单位：家',
                    method: 'get',
                    url: 'display/enterprise',
                    path: '/maintenanceOfEnterpriseArchives',
                    loading: false,
                    total: '0',
                    color: '#D98053'
                    // color: '#60D3BC'
                },
                {
                    title: '技师数据',
                    unit: '单位：人',
                    url: 'display/person',
                    path: '/technicianInformation',
                    loading: false,
                    total: '--',
                    color: '#8693DD'
                }
            ],
            option: { // 折线图配置
                title: {
                    text: '',
                    textStyle: {
                        color: '#252631',
                        fontSize: 22,
                        fontWeight: 'normal',
                        lineHeight: 26
                    },
                    subtext: '',
                    subtextStyle: {
                        color: '#778CA2',
                        fontSize: 16,
                        lineHeight: 1
                    },
                    padding: [30, 0, 0, 30]
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    trigger: 'axis',
                    textStyle: {
                        color: '#fff'
                    }
                },
                formatter: '{c}',
                grid: {
                    y: 120,
                    x: 62,
                    right: '3%'
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
                        color: '#8BA7C7',
                        fontSize: 14
                    }
                },
                yAxis: {
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
                series: [
                    {
                        data: [],
                        type: 'line',
                        smooth: true,
                        showAllSymbol: true,
                        symbol: 'circle',
                        symbolSize: 10,
                        color: '#4DA1FF',
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
                ]
            }
        }
    },
    components: {
    },
    created () {
        // if (!this.$checkAuth('display:statistics')) {
        //     this.$alert('您没有该权限')
        //     return
        // }
        this.request[0].loading = true
        this.request[1].loading = true
        this.request[2].loading = true
        this.request[3].loading = true
        this.request[4].loading = true
        // this.request[5].loading = true
        this.$get('display/statistics/vehicle').then(res => {
            this.request[0].total = res.vehicleCount
            this.request[0].loading = false
        })
        this.$get('display/statistics/owner').then(res => {
            this.request[1].total = res.ownerCount
            this.request[1].loading = false
        })
        this.$get('display/statistics/vehicleFix').then(res => {
            this.request[2].total = res.fixCount
            this.request[2].loading = false
        })
        this.$get('display/statistics/inspect').then(res => {
            this.request[3].total = res.chackCount
            this.request[3].loading = false
        })
        this.$get('display/statistics/enterprise').then(res => {
            this.request[4].total = res.entCount
            this.request[4].loading = false
        })
        // this.$get('display/statistics/person').then(res => {
        //     this.request[5].total = res.personCount
        //     this.request[5].loading = false
        // })
    },
    mounted () {
        // if (!this.$checkAuth('display:statistics')) {
        //     return
        // }
        const clientHeight = document.documentElement.clientHeight
        const clientWidth = document.documentElement.clientWidth
        if (clientHeight < 750) {
            this.$refs.chartWrap.style.height = 400 + 'px'
        } else {
            this.$refs.chartWrap.style.height = clientHeight - 345 + 'px'
        }
        this.$refs.chartWrap.style.width = clientWidth - 350 + 'px'
        // this.getFormData(this.request[0])
        this.getData(this.request[0])
    },
    watch: {
        '$store.state.tabIndex': function (val) {
            if (this.carCharts) {
                setTimeout(() => {
                    this.carCharts.resize()
                }, 300)
            }
        },
        dateType (val) {
            // this.haddleData()
            this.getData(this.item)
        }
    },
    methods: {
        haddleData () {
            let date = []
            let value = []
            if (this.dateType - 0 === 1) {
                this.formData.dayData.forEach(i => {
                    date.push(i.dayDate)
                    value.push(i.dayCount)
                })
            } else if (this.dateType - 0 === 2) {
                this.formData.monthData.forEach(i => {
                    date.push(i.monthDate)
                    value.push(i.monthCount)
                })
            } else {
                this.formData.yearData.forEach(i => {
                    date.push(i.yearDate)
                    value.push(i.yearCount)
                })
            }
            this.drawLine(this.item.title, this.item.unit, date, value, this.item.color)
        },
        resize () {
            const clientHeight = document.documentElement.clientHeight
            const clientWidth = document.documentElement.clientWidth
            if (clientHeight < 750) {
                this.$refs.chartWrap.style.height = 400 + 'px'
            } else {
                this.$refs.chartWrap.style.height = clientHeight - 345 + 'px'
            }
            this.$refs.chartWrap.style.width = clientWidth - 350 + 'px'
        },
        changeData (item, index) {
            if (index >= 5) {
                this.$alert('数据整理中', '提示')
                return
            }
            // if (index === 3) {
            //     this.$alert('数据整理中', '提示')
            //     return
            // }
            this.item = item
            this.activeIndex = index
            // this.getFormData(item)
            this.getData(item)
        },
        getFormData (item) {
            // this.loading = true
            this.loading2 = true
            this.$get(item.url).then(res => {
                this.formData = res
                this.haddleData()
                this.loading2 = false
                // this.loading = false
            }).catch(err => {
                console.log(err)
                this.loading2 = false
            })
        },
        getData (item) {
            this.loading2 = true
            let type = 'day'
            if (this.dateType - 0 === 1) {
                type = 'day'
            } else if (this.dateType - 0 === 2) {
                type = 'month'
            } else if (this.dateType - 0 === 3) {
                type = 'year'
            }
            this.$get(`${item.url}/${type}`).then(res => {
                // this.formData = res
                // this.haddleData()
                let date = []
                let value = []
                res.dataList.forEach(e => {
                    date.push(e.dataDate)
                    value.push(e.dataCount)
                })
                this.loading2 = false
                this.drawLine(this.item.title, this.item.unit, date, value, this.item.color)
            }).catch(err => {
                console.log(err)
                this.loading2 = false
            })
        },
        // 折线图
        drawLine (title, unit, xData, yData, color) {
            this.carCharts = echarts.init(this.$refs.chart)
            let option = JSON.parse(JSON.stringify(this.option))
            option.title.text = title + '增长走势图'
            option.xAxis.name = unit
            option.xAxis.data = xData
            option.series[0].data = yData
            option.series[0].color = color
            this.carCharts.setOption(option)
            window.onresize = () => {
                this.carCharts.resize()
                this.resize()
            }
        }
    }
}
</script>

<style lang='less' scoped>
.dataBoard {
    background: #F0F2F5;
    height:100%;
    .button_group {
        position: absolute;
        right: 40px;
        top: 50px;
        z-index: 2;
    }
    .top_bar {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        .top_item {
            transition: .3s all ease-in;
            background: #ffffff;
            // margin-right: 20px;
            flex: 1;
            padding-top: 33px;
            cursor: pointer;
            // padding-left: 40px;
            text-align: center;
            height: 83px;
            position: relative;
            border-bottom: 4px solid #ffffff;
            &:nth-child(6) {
                margin-right: 0;
            }
            .top_text {
                padding-top: 2px;
                margin-left: 20px;
                h5 {
                    margin-top: 6px;
                    font-size: 20px;
                    color: #000000;
                }
            }
            .top_btn {
                position: absolute;
                right: 16px;
                bottom: 12px;
                font-size: 12px;
                color: #999999;
                &:hover {
                    color: #4D7CFE;
                }
            }
        }
    }
    .content {
        background: #ffffff;
        overflow: auto;
        &.loading {
            overflow: hidden;
        }
        .home-top {
            position: relative;
            height: 0;
            line-height: 76px;
            border-bottom: 1px solid #E8ECEF;
            padding-left: 44px;
            color: #778CA2;
            font-size: 14px;
            .el-select {
                width: 120px;
                margin-right: 20px;
                &:last-child {
                    margin-right: 20px;
                }
            }
            label {
                color: #252631;
            }
            .search {
                width: 78px;
                height: 36px;
                padding: 0;
            }
        }
        .home-bottom {
            height: 90px;
            line-height: 90px;
            background-color: #E8ECEF;
            white-space: nowrap;
            overflow: auto;
            width: 100%;
            .el-scrollbar {
                padding: 0 30px;
            }
            .button {
                line-height: 1;
                width: 120px;
                height: 36px;
                padding: 0;
                margin-right: 30px;
                border: 1px solid #98A9BC;
                border-radius: 4px;
                background: #fff;
                transition: all .2s;
                outline: none;
                font-size: 14px;
                color: #778CA2;
                cursor: pointer;
                &:hover {
                    border: 1px solid #4D7CFE;
                    color: #4D7CFE;
                }
                &.active {
                    border: 1px solid #4D7CFE;
                    color: #4D7CFE;
                }
            }
        }
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
            height: 100%;
        }
    }
}
@media screen and (max-width: 1400px) {
    .dataBoard {
        .top_bar {
            .top_item {
                .top_text {
                    margin-left: 10px;
                    h5 {
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.dataBoard {
    .el-scrollbar__wrap {
        overflow-y: hidden;
    }
}
</style>

<!-- 首页 -->
<template>
    <div class="transactionStatistics">
        <div class="content clearfix" ref="content" :class={loading} v-loading="loading">
            <div class="home-top">
                <label>区域：</label>
                <el-select v-model="marketArea" clearable  placeholder="请选择">
                    <el-option
                    v-for="item in marketAreaList"
                    :key="item.sysAreaId"
                    :label="item.areaName"
                    :value="item.sysAreaId">
                    </el-option>
                </el-select>
                <!-- <label>省份：</label>
                <el-select v-model="province" clearable  placeholder="请选择">
                    <el-option
                    v-for="val in provinceList"
                    :key="val.regionProvinceId"
                    :label="val.name"
                    :value="val.regionProvinceId">
                    </el-option>
                </el-select> -->
                <label>城市：</label>
                <el-select v-model="city" clearable placeholder="请选择">
                    <!-- <el-option
                    v-for="item in cityList"
                    :key="item.regionCityId"
                    :label="item.text"
                    :value="item.regionCityId">
                    </el-option> -->
                    <el-option
                    v-for="item in cityList"
                    :key="item.regionId"
                    :label="item.regionName"
                    clearable
                    :value="item.regionId">
                    </el-option>
                </el-select>
                <el-button class="search" @click="getAllData(request[bottomBtnIndex])">查询</el-button>
            </div>
            <div class="charts" ref="chartWrap">
                <div class="total">七日总数：{{total}}&nbsp;&nbsp;&nbsp;累计总数：{{allTotal}}</div>
                <div ref=chart class="chart-box"></div>
            </div>
            <div class="home-bottom">
                <el-scrollbar>
                    <button
                        class="button"
                        :class="{active: bottomBtnIndex === index}"
                        @click="changeTab(item, index)"
                        plain v-for="(item, index) in request"
                        :key="index">
                    {{item.title}}</button>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'transactionStatistics',
    data () {
        return {
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
            allTotal: 0,
            bottomBtnIndex: 0, // 底部按钮索引
            request: [ // 请求参数
                {
                    title: '代理用户',
                    unit: '单位：家',
                    method: 'post',
                    url: 'datastastic/findBusAgentStatistic', // 原接口
                    total: ''
                },
                {
                    title: '注册用户',
                    unit: '单位：家',
                    method: 'get',
                    url: 'datastastic/findUserStatistic',
                    total: ''
                },
                {
                    title: '购买订单',
                    unit: '单位：个',
                    method: 'get',
                    url: 'datastastic/findOrderStatistic',
                    total: ''
                },
                {
                    title: '消费总额',
                    unit: '单位：元',
                    url: 'datastastic/findBillStatistic',
                    total: ''
                },
                {
                    title: '充值总额',
                    unit: '单位：元',
                    url: 'datastastic/findChargeStatistic',
                    total: ''
                }
            ],
            option: { // 折线图配置
                title: {
                    text: '',
                    textStyle: {
                        color: '#252631',
                        fontSize: 22,
                        fontWeight: 'normal',
                        lineHeight: 50
                    },
                    subtext: '\n7日增长趋势图',
                    subtextStyle: {
                        color: '#778CA2',
                        fontSize: 16,
                        lineHeight: 50
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
                        symbolSize: 6,
                        color: '#4DA1FF',
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#abd1fd' },
                                        { offset: 0.5, color: '#F1F8FF' },
                                        { offset: 1, color: '#FFFDFA' }
                                    ])
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
        this.getMarketAreaList()
        // this.getProvinceList()
        console.log(1111)
    },
    mounted () {
        const clientHeight = document.documentElement.clientHeight
        if (clientHeight < 600) {
            this.$refs.chartWrap.style.height = 300 + 'px'
        } else {
            this.$refs.chartWrap.style.height = clientHeight - 360 + 'px'
        }
        this.getAllData(this.request[0])
    },
    watch: {
        // marketArea (id) {
        //     this.province = ''
        //     this.city = ''
        //     this.cityList = []
        //     this.$get('list/areaRegionProvinceList?areaId=' + id).then(res => {
        //         if (res.code === 0) {
        //             this.provinceList = res.data
        //         }
        //     })
        // },
        marketArea (val) {
            this.city = ''
            this.cityList = []
            if (!val) return
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        province (id) {
            this.city = ''
            this.cityList = []
            if (!id) return
            this.$get(`list/areaRegionCityList?areaId=${this.marketArea}&provinceId=${id}`).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        '$store.state.tabIndex': function (val) {
            // console.log(val)
            if (this.carCharts) {
                setTimeout(() => {
                    this.carCharts.resize()
                }, 300)
            }
        }
    },
    methods: {
        resize () {
            const clientHeight = document.documentElement.clientHeight
            // console.log(clientHeight)
            if (clientHeight < 600) {
                this.$refs.chartWrap.style.height = 200 + 'px'
            } else {
                this.$refs.chartWrap.style.height = clientHeight - 360 + 'px'
            }
            this.getAllData(this.request[0])
        },
        // 获取区域数据
        getMarketAreaList () {
            this.$get('list/areaList', {})
                .then(res => {
                    // this.allMarketAreaList = res.result
                    if (res.code === 0) {
                        this.marketAreaList = res.data
                        localStorage.areaList = JSON.stringify(res.data)
                    }
                })
            // this.$post('bas/marketArea/findMarketAreaProvinceCity', {})
            //     .then(res => {
            //         this.marketAreaList = res.result.basMarketAreaList || []
            //     })
        },
        // 获取省份数据
        getProvinceList (id) {
            this.province = ''
            this.city = ''
            this.cityList = []
            let provinceList = this.marketAreaList.filter((item) => {
                return item.marketAreaId === id
            })
            this.provinceList = (provinceList.length && provinceList[0].regions) || {}
        },
        // 获取城市数据
        findCityRegion (parentId) {
            this.city = ''
            this.cityList = []
            this.$post('bas/region/findRegionTreeByAll', {
                data: {
                    parentId
                }
            })
                .then(res => {
                    this.cityList = res.result
                })
        },
        changeTab (item, index) {
            this.bottomBtnIndex = index
            this.getAllData(item)
        },
        // 获取图表数据
        getAllData ({ url, title, unit, method }) {
            let getTableData = () => {
                this.$post(url, obj).then(res => {
                    if (res.code === 0) {
                        let date = []
                        let value = []
                        res.data.data.forEach(i => {
                            // let key = Object.keys(i)[0]
                            date.push(i.dayDate)
                            value.push(i.dayCountSum)
                        })
                        this.total = res.data.total
                        this.allTotal = res.data.allTotal
                        this.drawLine(title, unit, date, value)
                    }
                    this.loading = false
                }).catch(() => {
                    this.loading = false
                })
            }
            // 判断筛选条件
            let obj = {
                areaRegion: this.marketArea,
                provinceId: this.province,
                city: this.city
            }
            this.loading = true
            getTableData()
            // if (this.city) {
            //     obj = { regionIds: [this.city] }
            //     getTableData()
            // } else if (this.province) {
            //     obj.regionIds = this.cityList.map(e => {
            //         return e.regionCityId
            //     })
            //     getTableData()
            // } else if (this.marketArea) {
            //     let that = this
            //     let promises = this.provinceList.map(e => {
            //         return new Promise((resolve, reject) => {
            //             that.$get(`list/areaRegionCityList?areaId=${that.marketArea}&provinceId=${e.regionProvinceId}`).then(res => {
            //                 if (res.code === 0) {
            //                     resolve(res.data)
            //                 } else {
            //                     reject(res.msg)
            //                 }
            //             })
            //         })
            //     })
            //     Promise.all(promises).then(res => {
            //         let list = []
            //         res.forEach(e => {
            //             list = list.concat(e)
            //         })
            //         obj.regionIds = list.map(e => {
            //             return e.regionCityId
            //         })
            //         getTableData()
            //     })
            // } else {
            //     getTableData()
            // }
            // 取区域的codelist
            // if (this.marketArea) {
            //     obj.marketArea = this.marketAreaList.filter(item => {
            //         return item.marketAreaId === this.marketArea
            //     })[0].marketAreaCodelist
            // }
            // this.province && (obj.province = this.province)
            // this.city && (obj.city = this.city)
        },
        // 折线图
        drawLine (title, unit, xData, yData) {
            this.carCharts = echarts.init(this.$refs.chart)
            let option = JSON.parse(JSON.stringify(this.option))
            option.title.text = title
            option.xAxis.name = unit
            option.xAxis.data = xData
            option.series[0].data = yData
            this.carCharts.setOption(option)
            window.onresize = () => {
                this.carCharts.resize()
                // this.resize()
            }
        }
    }
}
</script>

<style lang='less' scoped>
.transactionStatistics {
    height:100%;
    .content {
        height: 100%;
        overflow: auto;
        &.loading {
            overflow: hidden;
        }
        .home-top {
            height: 76px;
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
</style>
<style lang="less">
.transactionStatistics {
    .el-scrollbar__wrap {
        overflow-y: hidden;
    }
}
</style>

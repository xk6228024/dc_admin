
<template>
    <div class="advertisingStatistics" id="advertisingStatistics">
        <div class="searchDiv">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="searchItem">
                        <label>所属区域：</label>
                        <el-cascader
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
                        <label>选择日期：</label>
                        <el-date-picker
                            clearable
                            v-model="searchObj.key4"
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>广告类型：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key3" placeholder="请选择">
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>广告标题：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key3" placeholder="请选择">
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>广告主名称：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key5" placeholder="请选择">
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>发布平台：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key6" placeholder="请选择">
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>车辆品牌：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key7" placeholder="请选择">
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>用户类型：</label>
                        <el-select class="searchIpt" collapse-tags multiple clearable v-model="searchObj.key8" filterable placeholder="请选择">
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
                <el-col :span="6" v-show="ArrowActive">
                    <div class="searchItem">
                        <label>手机号码：</label>
                        <el-select class="searchIpt" clearable v-model="searchObj.key7" placeholder="请选择">
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
                    <div class="searchTools">
                        <el-button type="primary" size="small"  @click="queryData">查询</el-button>
                        <el-button type="" size="small" @click="reset">重置</el-button>
                        <el-button type="text" v-if="ArrowActive" @click="toArrowActive">收起 <i class="el-icon-arrow-up"></i></el-button>
                        <el-button type="text" v-if="!ArrowActive" @click="toArrowActive">展开 <i class="el-icon-arrow-down"></i></el-button>
                    </div>
                </el-col>
                <div class="searchTools2 fr" style="margin-right:10px;">
                    <el-button type="primary" :disabled="!$checkAuth('operation:ent:export')" size="small"  @click="exportData">导出</el-button>
                </div>
            </el-row>
        </div>
        <div class="display_box">
            <el-row>
                <el-col :span="4" v-for="item in displayList" :key="item.id">
                    <div class="left_div">
                        <i :class="item.icon"></i>
                    </div>
                    <div class="right_div">
                        <div class="title">{{item.title}}</div>
                        <div class="num">{{item.num}}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="main_box">
            <el-row :gutter="20">
                <el-col :span="18">
                    <div class="left_div" id='left_div'>1</div>
                </el-col>
                <el-col :span="6">
                    <div class="right_div" id='right_div'></div>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="tableBorder"
                style="width: 100%;">
                 <!-- <el-table-column
                type="selection"
                align="left">
                </el-table-column> -->
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
                label="广告标题">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="10%"
                label="访问广告时间">
                </el-table-column>
                <el-table-column
                prop="districtName"
                align="left"
                min-width="10%"
                label="发布平台">
                </el-table-column>
                 <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="20%"
                label="广告类型">
                </el-table-column>
                <el-table-column
                prop="linkName"
                align="left"
                min-width="10%"
                label="访问广告主时间">
                </el-table-column>
                <el-table-column
                prop="linkMobile"
                align="left"
                min-width="10%"
                label="广告主名称">
                </el-table-column>
                <el-table-column
                prop="enterpriseStatusName"
                align="left"
                min-width="6%"
                label="用户类型">
                </el-table-column>
                <el-table-column
                prop="isCompleted"
                align="left"
                min-width="6%"
                label="企业类型">
                </el-table-column>
                 <el-table-column
                prop="servicerName"
                align="left"
                min-width="10%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="registerTime"
                align="left"
                min-width="10%"
                label="用户名称">
                </el-table-column>
                <el-table-column
                prop="registerTime"
                align="left"
                min-width="10%"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="registerTime"
                align="left"
                min-width="10%"
                label="车辆品牌">
                </el-table-column>
                <el-table-column
                prop="registerTime"
                align="left"
                min-width="10%"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="registerTime"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="registerTime"
                align="left"
                min-width="10%"
                label="区域">
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
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import Modal from '@/components/Modal'
import echarts from 'echarts'
export default {
    name: 'cjlEnterpriseArchives',
    data () {
        return {
            displayList: [
                {
                    icon: 'el-icon-school',
                    title: '投放企业数(家)',
                    num: 12556
                },
                {
                    icon: 'el-icon-school',
                    title: '投放企业数(家)',
                    num: 12556
                },
                {
                    icon: 'el-icon-school',
                    title: '投放企业数(家)',
                    num: 12556
                },
                {
                    icon: 'el-icon-school',
                    title: '投放企业数(家)',
                    num: 12556
                },
                {
                    icon: 'el-icon-school',
                    title: '投放企业数(家)',
                    num: 12556
                },
                {
                    icon: 'el-icon-school',
                    title: '投放企业数(家)',
                    num: 12556
                }
            ],
            right_option: {
                title: {
                    textStyle: {
                        fontSize: 16
                    },
                    text: '访问转化率',
                    top: '3%',
                    left: '2%'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}'
                },
                series: [
                    {
                        name: '访问转化率',
                        type: 'funnel',
                        left: '10%',
                        width: '80%',
                        label: {
                            normal: {
                                position: 'inside',
                                formatter: '{c}'
                            },
                            emphasis: {
                                formatter: '{b}: {c}'
                            }
                        },
                        // labelLine: {
                        //     normal: {
                        //         show: false
                        //     }
                        // },
                        data: [
                            { value: 12580, name: '访问广告主UV' },
                            { value: 8888, name: '访问广告PV' }
                        ]
                    }
                ],
                'color': ['#FAAD14', '#4D7CFE']
            },
            left_option: {
                title: {
                    textStyle: {
                        fontSize: 16
                    },
                    text: '访问广告时间分布',
                    top: '3%',
                    left: '2%'
                },
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '14%']
                    }
                },

                legend: {
                    data: ['访问广告PV', '访问广告UV'],
                    x: 'center',
                    top: '2%'
                },

                xAxis: {
                    name: '小时',
                    type: 'category',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    boundaryGap: true,

                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
                },
                yAxis: [{
                    name: '点击次数',
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            type: ''
                        }
                    },
                    splitArea: {// 背景条纹
                        show: true,
                        areaStyle: {
                            color: [
                                'rgba(255,255,255,0)',
                                'rgba(242,243,248,1)'
                            ]
                        }

                    },
                    min: 0,
                    splitNumber: 5
                }],
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    top: '20%',
                    containLabel: true,
                    borderWidth: '0'
                },
                series: [
                    {
                        name: '访问广告PV',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 10,
                        data: [0, 0.5, 0.8, 1, 1.2, 1.5, 1.6, 1.8, 2.5, 3, 4, 4.8, 6, 7.4, 8.4, 9.2, 10, 11, 12, 1, 2, 3, 4, 1],
                        itemStyle: {
                            normal: {
                                color: '#FAAD14',
                                lineStyle: {
                                    width: 2
                                }
                            }
                        }

                    },
                    {
                        name: '访问广告UV',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 10,
                        data: [0, 1, 1.2, 1.3, 1.6, 1.8, 2, 3, 5, 6, 7, 4.5, 4.6, 7, 6.5, 7, 10, 11, 12],
                        itemStyle: {
                            normal: {
                                color: '#4D7CFE',
                                lineStyle: {
                                    width: 2
                                }
                            }
                        }

                    }
                ]
            },
            ArrowActive: true,
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
            tableData: []
        }
    },
    components: {
        // Breadcrumb
    },
    created () {
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
        // 展开 收缩
        toArrowActive () {
            this.ArrowActive = !this.ArrowActive
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
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
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
    },
    mounted () {
        let rightChart = echarts.init(document.getElementById('right_div'))
        rightChart.setOption(this.right_option)
        let leftChart = echarts.init(document.getElementById('left_div'))
        leftChart.setOption(this.left_option)
        window.onresize = () => {
            rightChart.resize()
            leftChart.resize()
        }
    }
}
</script>

<style lang='less' scoped>
.advertisingStatistics {
    background: #F0F2F5;
    .searchDiv {
        padding: 0 20px 20px;
        background: #ffffff;
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
            padding-left: 33px;
            margin-top: 15px;
        }
        .searchTools2 {
            margin-top: 15px;
            text-align: right;
        }
    }
    .display_box {
        background: #ffffff;
        margin-top: 24px;
        text-align: center;
        padding: 40px 0;
        .left_div {
            display: inline-block;
            width: 72px;
            height: 72px;
            background: rgba(77,124,254,0.15);
            line-height: 72px;
            border-radius: 50%;
            font-size: 26px;
            color: #4D7CFE;
        }
        .right_div {
            margin-left: 15px;
            display: inline-block;
            text-align: left;
            vertical-align: top;
            .title {
                line-height: 30px;
            }
            .num {
                color: #000000;
                margin-top: 10px;
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
    .main_box {
        height: 330px;
        margin-top: 20px;
        .left_div {
            background: #ffffff;
            height: 330px;
        }
        .right_div {
            background: #ffffff;
            height: 330px;
        }
    }
    .table {
        background: #ffffff;
        margin-top: 20px;
        padding: 20px;
        // margin-top: 0;
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
.advertisingStatistics {
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
#advertisingStatistics {
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

<template>
    <!-- 品牌车系 -->
    <div class="brandSeries">
        <!-- <div class=""> -->
            <div class="el-select">
                <div class="el-input el-input--suffix">
                    <input type="text" class="el-input__inner" @click="onFocus" readonly v-model="changeBrandSm">
                    <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                            <i class="el-select__caret el-input__icon el-icon-arrow-up" :class="{'is-reverse': alertBol}"></i>
                        </span>
                    </span>
                </div>
            </div>
            <div class="el-el-cascader-menus" v-if="alertBol" :style="{height:height + 130 + 'px', width: menuswidth + 'px'}">
                <div class="search-brand clearfix">
                    <div class="search-iup fl">
                        <input type="text" placeholder="输入车辆品牌,车系，车型查找" class="search-input" v-model="keyword">
                    </div>
                    <el-button type="primary" @click="toSearch" icon="el-icon-search" class="sousuo-btn">
                    </el-button>
                    <!-- <div class="search-btn fl">
                        <span>查找</span>
                         :style="{height:height - 2 + 'px', width: width + 'px'}"
                    </div> -->
                </div>
                <div class="main-box clearfix" :style="{height:height + 'px'}"  v-if="!showMain">
                    <div class="el-brand fl clearfix" :style="{width: width + 'px'}">
                        <div class="el-keys fl" ref="elkeys">
                            <ul class="list-key-ul">
                                <li class="list-key-li" v-for="(val, key) in brandList" :key="key">
                                    <div @click="goTop(key)">{{key}}</div>
                                    <!--  :href="'#' + key" -->
                                </li>
                            </ul>
                        </div>
                        <div class="el-brand-box" :style="{'max-height': height + 'px', width: width - 34 + 'px'}">
                            <ul class="list-ul" id="brand">
                                <!-- <el-scrollbar wrap-class="list-ul-sroll" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false"> -->
                                <li class="list-li" v-for="(val, key) in brandList" :key="key">
                                    <!-- <a class="list-p" :name="key">{{key}}</a> -->
                                    <div class="list-p" :id="'is-' + key">{{key}}</div>
                                    <ul class="list-ul-s">
                                        <li class="list-li-s" :class="{'is-active': item.vehicleBrandId=== chooseBrand.vehicleBrandId}" v-for="item in brandList[key]" :key="item.id" @click="toChangeBrand(item)">{{item.vehicleBrandName}}</li>
                                    </ul>
                                </li>
                                <!-- </el-scrollbar> -->
                            </ul>
                        </div>
                    </div>
                    <div class="el-series-box fl" :style="{height:height + 2 + 'px'}" v-if="chooseBrand.vehicleBrandName&&seriesList.length>0">
                        <ul class="list-ul-s">
                            <li class="list-ul-lis">{{chooseBrand.vehicleBrandName}}</li>
                            <li class="list-li-s" :class="{'is-active': item.vehicleSeriesId=== chooseSeries.vehicleSeriesId}" v-for="item in seriesList" :key="item.id" @click="toChangeSeries(item)">{{item.vehicleSeriesName}}</li>
                        </ul>
                    </div>
                    <div class="el-model-box fl" :style="{height:height + 2 + 'px'}" v-if="chooseSeries.vehicleSeriesName&&modelList.length>0">
                        <ul class="list-ul-s">
                            <li  class="list-ul-lis">{{chooseSeries.vehicleSeriesName}}</li>
                            <li class="list-li-s" :class="{'is-active': item.vehicleModelId=== chooseModel.vehicleModelId}" v-for="item in modelList" :key="item.id" @click="toChangemModel(item)">{{item.vehicleModelName}}</li>
                        </ul>
                    </div>
                </div>
                <div class="main-box clearfix" v-if="showMain">
                    暂无数据
                </div>
                <div class="btns-box clearfix">
                    <div class="fr clearfix">
                        <div class="close-btn fl" @click="toCancel">
                            <span>取消</span>
                        </div>
                        <!-- <el-button size="small" class="fl" @click="toCancel">取消</el-button> -->
                        <el-button type="primary" class="search-btn fl" :disabled="!chooseSeries.vehicleSeriesName" @click="toShow">确定</el-button>
                        <!-- <div class="search-btn fl" @click="toShow">
                            <span>确定</span>
                        </div> -->
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'brandSeries',
    data () {
        return {
            alertBol: false,
            height: 420,
            width: 282,
            menuswidth: 320,
            brandList: [], // 所以的品牌
            seriesList: [], // 车系数据
            modelList: [], // 车型数据
            chooseBrand: {}, // 选中品牌
            chooseSeries: {}, // 选中车系
            chooseModel: {}, // 选中车型
            changeBrandSm: '',
            flagBol: false,
            strName1: '',
            strName2: '',
            strName3: '',
            showMain: false, // 是否有数据
            flagBol1: false, // 重复提交处理
            brandStr: '',
            keyword: '' // 搜索
        }
    },
    props: ['showBolds', 'arrs', 'brandModel'],
    created () {
        if (this.arrs.length === 2 || this.arrs.length === 3) {
            this.getBrandDetail(this.arrs[0])
        }
    },
    watch: {
        brandModel (val) {
            if (val) {
                this.brandStr = val
            }
        }
    },
    mounted () {
    },
    beforeDestroy () {},
    components: {},
    updated () {
        if (this.showBolds) {
            this.alertBol = false
        }
        if (this.alertBol && this.$refs.elkeys) {
            // console.log(this.$refs.elkeys, 'this.$refs.elkeys')
            this.height = this.$refs.elkeys.clientHeight
        }
        if (this.chooseBrand.vehicleBrandName && this.seriesList.length > 0) {
            this.width = 180
            if (this.chooseSeries.vehicleSeriesName && this.modelList.length > 0) {
                this.menuswidth = 620
            } else {
                this.menuswidth = 440
            }
        } else {
            this.width = 282
            this.menuswidth = 320
        }
    },
    methods: {
        // 获取
        getBrandDetail (val) {
            if (this.flagBol1) {
                return
            }
            this.flagBol1 = true
            this.$post('vtis/bas-vehicle-type/findBrandById', {
                vehicleBrandId: val
            })
                .then(res => {
                    if (res.status === 200) {
                        this.strName1 = res.data.vehicleBrandName
                        this.getSeriesDetail(this.arrs[1])
                        this.flagBol1 = false
                    }
                })
        },
        getSeriesDetail (val) {
            this.$post('vtis/bas-vehicle-type/findSeriesById', {
                vehicleSeriesId: val
            })
                .then(res => {
                    if (res.status === 200) {
                        this.strName2 = res.data.vehicleSeriesName
                        if (this.arrs.length === 3) {
                            this.getModelDetail(this.arrs[2])
                        } else {
                            this.changeBrandSm = this.strName1 + ' ' + this.strName2
                        }
                        // if (ress.length > 0) {
                        //     for (let i = 0; i < ress.length; i++) {
                        //         if (ress[i].vehicleSeriesId === this.arrs[1]) {
                        //             this.strName2 = ress[i].vehicleSeriesName
                        //             break
                        //         }
                        //     }
                        //     if (this.arrs.length === 3) {
                        //         this.getModelDetail(this.arrs[1])
                        //     } else {
                        //         this.changeBrandSm = this.strName1 + ' ' + this.strName2
                        //     }
                        // }
                    }
                })
        },
        getModelDetail (val) {
            this.$post('vtis/bas-vehicle-type/findModelById', {
                vehicleModelId: val
            })
                .then(res => {
                    if (res.status === 200) {
                        this.strName3 = res.data.vehicleModelName
                        this.changeBrandSm = this.strName1 + ' ' + this.strName2 + ' ' + this.strName3
                        // let ress = res.data
                        // if (ress.length > 0) {
                        //     for (let i = 0; i < ress.length; i++) {
                        //         if (ress[i].vehicleModelId === this.arrs[2]) {
                        //             this.strName3 = ress[i].vehicleModelName
                        //             break
                        //         }
                        //     }
                        //     this.changeBrandSm = this.strName1 + ' ' + this.strName2 + ' ' + this.strName3
                        //     console.log(this.changeBrandSm, 'this.changeBrandSm')
                        // }
                    }
                })
        },
        goTop (key) {
            let str = '#is-' + key
            document.querySelector(str).scrollIntoView(true)
        },
        onFocus () {
            if (this.alertBol) {
                this.alertBol = false
            } else {
                this.getBrandList()
            }
        },
        toSearch () {
            // if (!this.keyword) {
            //     return
            // }
            if (this.flagBol) {
                return
            }
            this.flagBol = true
            this.$post('vtis/bas-vehicle-type/findBrandSeriesModel', {
                keyword: this.keyword
            }).then(res => {
                if (res.status === 200) {
                    if (res.data && res.data.length > 0) {
                        this.showMain = false
                        this.initBrandList = [...res.data]
                        res.data.forEach(item => {
                            item.initial = window.pinyinUtil.getFirstLetter(item.vehicleBrandName).substr(0, 1)
                        })
                        // 按首字母排序
                        let brandList = res.data.sort(function (objA, objB) {
                            if (objA.initial > objB.initial) {
                                return 1
                            } else if (objA.initial < objB.initial) {
                                return -1
                            } else {
                                return 0
                            }
                        })
                        // 将同字母类型进行分类
                        let obj = {}
                        brandList.forEach(item => {
                            if (!obj[item.initial]) {
                                obj[item.initial] = [item]
                            } else {
                                obj[item.initial].push(item)
                            }
                        })
                        this.brandList = obj
                        let arr = []
                        for (let i in this.brandList) {
                            arr = this.brandList[i]
                            break
                        }
                        if (arr.length > 0) {
                            this.toChangeBrand(arr[0])
                        }
                        // this.chooseBrand = this.brandList[0]
                        // this.toChangeBrand(this.brandList[0])
                    } else {
                        // 未查找到
                        this.showMain = true
                    }
                    this.flagBol = false
                }
            })
        },
        // 选中品牌
        toChangeBrand (item) {
            this.chooseBrand = item
            this.chooseSeries = {}
            this.chooseModel = {}
            if (item.children && item.children.length > 0) {
                this.seriesList = item.children
            } else {
                this.getVehicleSeries(item.vehicleBrandId)
            }
        },
        // 选中车系
        toChangeSeries (item) {
            this.chooseSeries = item
            this.chooseModel = {}
            if (item.children && item.children.length > 0) {
                this.modelList = item.children
            } else {
                this.getVehicleModel(item.vehicleSeriesId)
            }
        },
        // 选中车型
        toChangemModel (item) {
            this.chooseModel = item
        },
        // 获取品牌列表
        getBrandList () {
            this.$post('vtis/bas-vehicle-type/findVehicleBrand', {})
                .then(res => {
                    this.initBrandList = [...res.data]
                    res.data.forEach(item => {
                        item.initial = window.pinyinUtil.getFirstLetter(item.vehicleBrandName).substr(0, 1)
                    })
                    // 按首字母排序
                    let brandList = res.data.sort(function (objA, objB) {
                        if (objA.initial > objB.initial) {
                            return 1
                        } else if (objA.initial < objB.initial) {
                            return -1
                        } else {
                            return 0
                        }
                    })
                    // 将同字母类型进行分类
                    let obj = {}
                    brandList.forEach(item => {
                        if (!obj[item.initial]) {
                            obj[item.initial] = [item]
                        } else {
                            obj[item.initial].push(item)
                        }
                    })
                    this.brandList = obj
                    this.flagBol = true
                    this.alertBol = true
                })
        },
        // 获取所有车系
        getVehicleSeries (val) {
            this.$post('vtis/bas-vehicle-type/findVehicleSeries', {
                vehicleBrandId: val
            }).then(res => {
                if (res.status === 200) {
                    this.seriesList = res.data
                }
            })
        },
        // 获取所有车型
        getVehicleModel (val) {
            this.$post('vtis/bas-vehicle-type/findVehicleModel', {
                vehicleSeriesId: val
            }).then(res => {
                if (res.status === 200) {
                    this.modelList = res.data
                }
            })
        },
        // 取消
        toCancel () {
            this.alertBol = false
        },
        // 确定
        toShow () {
            let arr = []
            if (this.chooseModel.vehicleModelName) {
                arr.push(this.chooseBrand)
                arr.push(this.chooseSeries)
                arr.push(this.chooseModel)
                this.changeBrandSm = this.chooseBrand.vehicleBrandName + ' ' + this.chooseSeries.vehicleSeriesName + ' ' + this.chooseModel.vehicleModelName
                this.brandStr = this.chooseBrand.vehicleBrandName + ' ' + this.chooseSeries.vehicleSeriesName + ' ' + this.chooseModel.vehicleModelName
            } else {
                arr.push(this.chooseBrand)
                arr.push(this.chooseSeries)
                this.changeBrandSm = this.chooseBrand.vehicleBrandName + ' ' + this.chooseSeries.vehicleSeriesName
                this.brandStr = this.chooseBrand.vehicleBrandName + ' ' + this.chooseSeries.vehicleSeriesName
            }
            // let str = this.brandModel
            // console.log(brandModel, 'arrarr')
            this.$emit('alertConfirm', arr, this.brandStr)
            this.alertBol = false
        }
    }
}
</script>

<style lang="less">
ul {
    list-style:none;
}
.brandSeries {
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    position: relative;
    transform-origin: bottom;
    .el-el-cascader-menus {
        position: fixed;
        transform-origin: center top;
        z-index: 8888;
        background:#FFFFFF;
        border: 1px solid #e4e7ed;
        border-radius: 2px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        .search-brand {
            height: 34px;
            padding: 13px 10px;
            .search-iup {
                width: 200px;
                margin-left: 20px;
                box-sizing: border-box;
                .search-input {
                    width: 180px;
                    padding: 0 10px;
                    height: 34px;
                    border: 1px solid #8A9CC2;
                    border-radius: 4px;
                }
            }
            .search-btn {
                width: 80px;
                height: 34px;
                line-height: 34px;
                border-radius: 4px;
                background: #4B8EF1;
                color: #FFFFFF;
                text-align: center;
                cursor: pointer;
            }
        }
        .main-box {
            // padding: 0 20px 20px;
            position: relative;
            .el-brand {
                // position: absolute;
                top: 0;
                left: 0;
                width: 200px;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                background-color: #fff;
                border: 1px solid #8A9CC2;
            }
        }
        .el-keys {
            // position: absolute;
            min-height: 360px;
            top: 0;
            left: 0;
            width: 30px;
            height: 100%;
            text-align: center;
            border-right: 1px solid #8A9CC2;
            .list-key-ul {
                background: #F8F8F8;
                // border: 1px solid #8A9CC2;
                .list-key-li {
                    width: 30px;
                    height: 20px;
                    font-size: 0;
                    cursor: pointer;
                    div {
                        font-size: 12px;
                        width: 30px;
                        height: 20px;
                        line-height: 20px;
                        text-align: center;
                        color: #323B4E;
                        display: inline-block;
                        text-decoration:none;
                        &:hover {
                            background: #3E94FE;
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
        .el-brand-box {
            margin-left: 31px;
            overflow-y: auto;
            // border-top: 1px solid #8A9CC2;
            // border-bottom: 1px solid #8A9CC2;
            // border-right: 1px solid #8A9CC2;
            .list-ul {
                .list-li {
                    .list-p {
                        box-sizing: border-box;
                        width: 100%;
                        font-size: 14px;
                        height: 35px;
                        line-height: 35px;
                        background: #E8F1FF;
                        border-bottom: 1px solid #8A9CC2;
                        color: #3E94FE;
                        display: inline-block;
                        text-decoration:none;
                        padding: 0 15px;
                    }
                    .list-ul-s {
                        .list-li-s {
                            color: #323B4E;
                            padding: 0 15px;
                            height: 34px;
                            line-height: 34px;
                            border-bottom: 1px solid #8A9CC2;
                            word-break: keep-all;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            cursor: pointer;
                            &.is-active {
                                background: #3E94FE;
                                color: #FFFFFF;
                            }
                            &:hover {
                                background: #3E94FE;
                                color: #FFFFFF;
                            }
                        }
                    }
                }
            }
        }
        .el-series-box {
            position: absolute;
            top: 0;
            left: 160px;
            width: 200px;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background-color: #fff;
            border: solid 1px#8A9CC2;
        }
        .el-model-box {
            position: absolute;
            top: 0;
            left: 340px;
            width: 280px;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background-color: #fff;
            border: solid 1px#8A9CC2;
        }
        .el-series-box, .el-model-box {
            // width: 160px;
            overflow-y: scroll;
            .list-ul-s {
                .list-ul-lis {
                    padding: 0 15px;
                    font-size: 14px;
                    height: 34px;
                    line-height: 34px;
                    background: #E8F1FF;
                    background: #E8F1FF;
                    border-bottom: 1px solid #8A9CC2;
                    color: #3E94FE;
                }
                .list-li-s {
                    color: #323B4E;
                    padding: 0 15px;
                    height: 34px;
                    line-height: 34px;
                    border-bottom: 1px solid #8A9CC2;
                    word-break: keep-all;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    cursor: pointer;
                    &.is-active {
                        background: #3E94FE;
                        color: #FFFFFF;
                    }
                    &:hover {
                        background: #3E94FE;
                        color: #FFFFFF;
                    }
                }
            }
        }
        .btns-box {
            padding: 13px;
            .search-btn {
                width: 100px;
                border-radius: 4px;
                background: #3E94FE;
                color: #FFFFFF;
                text-align: center;
                cursor: pointer;
            }
            .close-btn {
                width: 100px;
                height: 36px;
                line-height: 36px;
                text-align: center;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                color: #606266;
                background: #FFFFFF;
                box-sizing: border-box;
                margin-right: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>

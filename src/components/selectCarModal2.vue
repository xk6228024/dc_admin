<template>
    <!-- 品牌车系 -->
    <div class="brandSeries" ref="brandSeries">
        <el-input v-model="value"></el-input>
        <div class="cover" @click="clickSelect"></div>
        <div class="wrap clearfix" v-if="showWrap" :style="{'width': wrapWidth}">
            <el-scrollbar class="az">
                <li v-for="item in azList" :key="item" @click.stop="azClick(item)" style="padding-left:0;" :class="{'active': item === azName}">{{item}}</li>
            </el-scrollbar>
            <el-scrollbar class="brand">
                <li v-for="brand in barndList" :key="brand.id" @click.stop="brandClick(brand)" :class="{'active': brand.brandId === brandId}">
                    {{brand.brandName}}
                </li>
            </el-scrollbar>
            <el-scrollbar class="seris" v-if="type>=2">
                <li v-for="brand in serisList" :key="brand.id" @click.stop="serisClick(brand)" :class="{'active': brand.serisId === serisId}">
                    {{brand.serisName}}
                </li>
            </el-scrollbar>
            <el-scrollbar class="model" v-if="type>=3">
                <li v-for="brand in modelList" :key="brand.id" @click.stop="modelClick(brand)">
                    {{brand.serisName}}
                </li>
            </el-scrollbar>
            <!-- <img src="../assets/images/icon_close.png" style="position:absolute;right:10px;top:5px;cursor:potinter" @click="close"> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'brandSeries',
    data () {
        return {
            azName: '',
            wrapWidth: '242px',
            value: '',
            brandName: '',
            serisName: '',
            modelName: '',
            brandId: '',
            serisId: '',
            modelId: '',
            showWrap: false,
            type: 1,
            azList: [],
            barndList: [],
            barndListALL: [],
            serisList: [],
            modelList: []
        }
    },
    model: {
        event: 'returnBack'
    },
    props: {
        modelName2: String
    },
    created () {
        // setTimeout(() => {
        //     console.log(222)
        //     this.$emit('returnBack', [1, 2, 3])
        // }, 2000)
        // console.log(this.give)
        // console.log(this.modelName2)
        this.$post('/basVehicle/getAllVehiclebrand', {}).then(res => {
            this.barndList = res.data
            this.barndListALL = res.data
            // console.log(this.barndList)
            this.barndList.sort((a, b) => {
                return a.vehicleBrandChar > b.vehicleBrandChar ? 1 : -1
            })
            let arr = []
            this.barndList.forEach(e => {
                // e.vehicleBrandChar
                if (arr.indexOf(e.vehicleBrandChar) === -1 && e.vehicleBrandChar) {
                    arr.push(e.vehicleBrandChar)
                }
            })
            this.azList = arr
        })
    },
    watch: {
        modelName2 (v) {
            this.value = v
        },
        type (val) {
            if (val === 1) {
                this.wrapWidth = '242px'
            }
            if (val === 2) {
                this.wrapWidth = '453px'
            }
            if (val === 3) {
                this.wrapWidth = '803px'
            }
        },
        showBolds (val) {
            if (val) {
                this.showWrap = true
            }
        }
    },
    mounted () {
        // console.log(this.$refs.brandSeries)
        // console.dir(document.getElementById('app'))
        let _this = this
        document.getElementById('app').onclick = function (e) {
            if (e.target.className !== 'wrap' && e.target.className !== 'cover') {
                _this.showWrap = false
            }
        }
    },
    beforeDestroy () {},
    components: {},
    updated () {
    },
    methods: {
        close () {
            this.showWrap = false
        },
        azClick (item) {
            if (item === this.azName) {
                this.barndList = this.barndListALL
                this.azName = ''
            } else {
                this.barndList = this.barndListALL.filter(e => {
                    return e.vehicleBrandChar === item
                })
                // console.log(this.barndList)
                this.type = 1
                this.azName = item
            }
        },
        clickSelect () {
            this.showWrap = true
        },
        brandClick (item) {
            this.type = 2
            this.brandName = item.brandName
            this.brandId = item.brandId
            this.$post('basVehicle/getAllVehicleSeries', {
                vehicleBrandId: item.brandId
            }).then(res => {
                this.serisList = res.data
            })
        },
        serisClick (item) {
            this.serisId = item.serisId
            this.type = 3
            this.serisName = item.serisName
            this.$post('basVehicle/getAllVehicleModel', {
                vehicleSeriesId: item.serisId
            }).then(res => {
                this.modelList = res.data
            })
        },
        modelClick (item) {
            this.modelName = item.serisName
            this.value = this.brandName + '/' + this.serisName + '/' + item.serisName
            this.$emit('returnBack', [this.brandId, this.serisId, item.modelId])
            this.showWrap = false
            this.type = 1
        }
    }
}
</script>

<style lang="less">
.brandSeries {
    .el-scrollbar__wrap {
        padding-right: 0;
    }
    position: relative;
    .wrap {
        background: #ffffff;
        z-index: 2;
        height: 200px;
        border-radius: 6px;
        position: absolute;
        border: 1px solid #d9d9d9;
        li {
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            padding-left: 10px;
            &.active {
                background: #d9d9d9;
            }
        }
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
        .az {
            height: 200px;
            float: left;
            width: 30px;
            text-align: center;
            overflow-y: auto;
            overflow-x: hidden;
            border-right: 1px solid #d9d9d9;
        }
        .brand {
            // padding-left: 10px;
            height: 200px;
            overflow-y: auto;
            float: left;
            width: 210px;
            border-right: 1px solid #d9d9d9;
        }
        .seris {
            // padding-left: 10px;
            height: 200px;
            overflow-y: auto;
            float: left;
            width: 210px;
            border-right: 1px solid #d9d9d9;
        }
        .model {
            // padding-left: 10px;
            height: 200px;
            overflow-y: auto;
            float: left;
            width: 350px;
            // overflow: hidden;
            li {
                overflow: hidden;
            }
        }
    }
    .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
}
</style>

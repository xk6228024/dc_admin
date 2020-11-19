<!-- 车主列表 -->
<template>
    <div class="ownerInformation">
        <breadcrumb>
            <label for="">关键词:</label>
            <el-input style="width:160px;" class="search-text" clearable v-model="searchKeyword" placeholder="请输入车主名称"></el-input>
            <label for="">车主类型:</label>
            <el-select class="w120_input" v-model="ownerType" clearable placeholder="请选择">
                <el-option
                v-for="item in ownerTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" class="search" @click="search">查 询</el-button>
            <div class="btn_ground">
                <el-button class="mt17" @click="exportTable">导 出</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="loading"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="ownerName"
                align="left"
                min-width="15%"
                label="名称">
                </el-table-column>
                <el-table-column
                prop="ownerMobile"
                align="left"
                min-width="10%"
                label="电话号码">
                </el-table-column>
                <el-table-column
                prop="ownerTypeName"
                align="left"
                min-width="8%"
                label="车主类型">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="8%"
                label="所在城市">
                </el-table-column>
                <el-table-column
                prop="ownerBak"
                align="left"
                min-width="10%"
                label="备注">
                </el-table-column>
                <el-table-column
                prop="ownerId"
                align="left"
                min-width="5%"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="goDetail(scope.row)" type="text" size="small" :disabled="!$checkAuth('sys:role:update')">详情</el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper, slot"
                :total="total">
            </el-pagination>
        </div>
        <modal
            :title="'车主信息详情'"
            :width="924"
            :alert="showAlert"
            :showBtn="false"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
             <div class="alertInner" style="max-height:677px;overflow-y:auto">
                <table class="myTable">
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">基本信息</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">车主/企业名称：</td>
                        <td class="tal fontColor" colspan="3">{{ownerDetailData.ownerName}}</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">车牌号码：</td>
                        <td class="tal fontColor" width="270">{{carNums}}</td>
                        <td class="tar" width="150">手机号码：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerMobile}}</td>
                    </tr>
                    <tr>
                        <td class="tar" width="150">昵称：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerNickname}}</td>
                        <td class="tar">所属区域：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerRegionName}}</td>
                    </tr>
                    <tr class="blueTilte">
                        <td colspan="4" class="tac">详细信息</td>
                    </tr>
                    <tr>
                        <td class="tar">性别：</td>
                        <td class="tal fontColor" >
                            <span v-if="ownerDetailData.ownerGender===1">女</span>
                            <span v-if="ownerDetailData.ownerGender===0">男</span>
                        </td>
                        <td class="tar">出生日期：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerBirthday|filterTime('yyyy-mm-dd')}}</td>
                    </tr>
                    <tr>
                        <td class="tar">身份证号码：</td>
                        <td class="tal fontColor" >{{ownerDetailData.ownerIdcard}}</td>
                        <td class="tar">座机号码：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerTel}}</td>
                    </tr>
                    <tr>
                        <td class="tar">微信：</td>
                        <td class="tal fontColor" >{{ownerDetailData.ownerWechat}}</td>
                        <td class="tar">QQ：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerQq}}</td>
                    </tr>
                    <tr>
                        <td class="tar">邮箱：</td>
                        <td class="tal fontColor" >{{ownerDetailData.ownerEmail}}</td>
                        <td class="tar">邮编：</td>
                        <td class="tal fontColor">-</td>
                    </tr>
                    <tr>
                        <td class="tar">联系地址：</td>
                        <td class="tal fontColor" >{{ownerDetailData.ownerAddress}}</td>
                        <td class="tar">备注：</td>
                        <td class="tal fontColor">{{ownerDetailData.ownerBak}}</td>
                    </tr>
                </table>
                <div  v-if="ownerVehicleListData&&ownerVehicleListData.length > 0">
                    <table class="myTable" v-for="(item, index) in ownerVehicleListData" :key="index" >
                        <tr class="blueTilte">
                            <td colspan="4" class="tac">车辆信息</td>
                        </tr>
                        <tr>
                            <td class="tar" width="150">车牌号码：</td>
                            <td class="tal fontColor"  width="270">{{item.vehicleLicensePlate}}</td>
                            <td class="tar" width="150">车牌颜色：</td>
                            <td class="tal fontColor">{{item.vehicleLicensePlateColor}}</td>
                        </tr>
                        <tr>
                            <td class="tar">VIN码：</td>
                            <td class="tal fontColor" >{{item.vehicleVin}}</td>
                            <td class="tar">品牌：</td>
                            <td class="tal fontColor">{{item.vehicleBrand}}</td>
                        </tr>
                        <tr>
                            <td class="tar">车系：</td>
                            <td class="tal fontColor" >{{item.vehicleSeries}}</td>
                            <td class="tar">车型：</td>
                            <td class="tal fontColor">{{item.vehicleModel}}</td>
                        </tr>
                        <tr>
                            <td class="tar">车辆类型：</td>
                            <td class="tal fontColor" >{{item.vehicleType}}</td>
                            <td class="tar">是否营运车：</td>
                            <td class="tal fontColor">{{item.vehicleUse}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'ownerInformation',
    data () {
        return {
            loading: false,
            provinceList: [],
            province: '',
            cityList: [],
            city: '',
            searchKeyword: '',
            dateRegion: [],
            ownerType: '',
            ownerTypeList: [
                {
                    value: '',
                    label: '全部'
                },
                {
                    value: 1,
                    label: '个人车主'
                },
                {
                    value: 2,
                    label: '企业车主'
                }
            ],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [],
            ownerDetailData: '',
            ownerVehicleListData: [],
            carNums: ''
        }
    },
    components: {
        Breadcrumb,
        Modal
    },
    created () {
        this.getDataList()
        // this.getProvinceList()
    },
    watch: {
        province (val) {
            if (val) {
                this.getCityList(val)
            } else {
                this.cityList = []
                this.city = ''
            }
        },
        '$store.state.refreshList': {
            handler (val) {
                if (val.includes(this.$el.className)) {
                    this.getDataList()
                    this.$store.commit('delRefreshList', this.$el.className)
                }
            },
            deep: true
        }
    },
    methods: {
        getCityList (val) {
            this.$get('list/regioncityList?provinceRegionId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        // 获取省份列表
        getProvinceList () {
            this.$get('list/regionProvinceList?type=1').then(res => {
                if (res.code === 0) {
                    this.provinceList = res.data
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                ownerType: this.ownerType,
                searchKey: this.searchKeyword
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1] + 24 * 60 * 60 * 1000 - 1
            }
            this.$post('vehicleowner/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        goDetail ({ ownerId, ownerType }) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('datamanage:stastic:owner:view')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push(`/ownerDetail?id=${ownerId}&ownerType=${ownerType}`)
            // this.$post('/vehicleowner/ownerdetail', {
            //     ownerId: id
            // })
            //     .then(res => {
            //         if (res && res.code === 0) {
            //             this.ownerDetailData = res.data.owner
            //             this.ownerVehicleListData = res.data.ownerVehicleList || []
            //             let arrstr = []
            //             if (this.ownerVehicleListData.length > 0) {
            //                 for (let i = 0; i < res.data.ownerVehicleList.length; i++) {
            //                     arrstr.push(res.data.ownerVehicleList[i].vehicleLicensePlate)
            //                 }
            //             }
            //             this.carNums = arrstr.join(';')
            //             this.showAlert = true
            //         }
            //     })
        },
        exportTable () {
            if (!this.$checkAuth('vehicleowner:export')) {
                this.$alert('您没有该权限')
                return
            }
            window.open(`api/vehicleowner/export?ownerType=${this.ownerType}&searchKey=${this.searchKeyword}`)
        },
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
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
.ownerInformation {
    .table {
        margin: 20px;
        margin-top: 0;
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
}
</style>
<style lang='less'>
.ownerInformation {
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
</style>

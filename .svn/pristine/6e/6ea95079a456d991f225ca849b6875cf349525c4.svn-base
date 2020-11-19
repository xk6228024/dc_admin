<!-- 空白页面组件 -->
<template>
    <div class="wasteManageDetail detailPage" style="position:initial;">
        <search v-model='searchValue' :options='searchOption' @search='search()' :hasTitle="true">
            <div slot="title">
                <span style="font-size:16px;" class="fwb">深圳市壹佰汽车服务有限公司</span>&nbsp;
                <el-tag type="info">深圳市</el-tag>&nbsp;
                <el-tag type="info">二类企业</el-tag>&nbsp;
            </div>
        </search>
        <div class="detail_content">
             <div class="detail_model noBorder">
                <el-table
                    :data="tableData"
                    class="tableBorder"
                    style="width: 100%;">
                    <el-table-column
                    prop="vehicleLicensePlate"
                    align="left"
                    label="序号"
                    min-width="10%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleVin"
                    align="left"
                    min-width="10%"
                    label="RFID">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleBrand"
                    align="left"
                    min-width="10%"
                    label="设备类型">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleUse"
                    align="left"
                    min-width="10%"
                    label="更新时间">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleLicensePlateColor"
                    align="left"
                    min-width="10%"
                    label="状态">
                    </el-table-column>
                    <el-table-column
                    prop="aa"
                    align="left"
                    min-width="10%"
                    label="更新人">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleLicensePlateColor"
                    align="left"
                    min-width="10%"
                    label="操作">
                        <template slot-scope="scope">
                        <el-button @click="iin(scope)" type="text" size="small">详情</el-button>
                    </template>
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
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="sumBox">
            <el-row :gutter="24">
                <el-col :span="8">
                    <div class="sumItem">
                        <div class="inner tac">
                            <div class="dlb">
                                <h1>5</h1>
                                <p>绑定</p>
                            </div>
                            <div class="line"></div>
                            <div class="dlb">
                                <h1>2</h1>
                                <p>解绑</p>
                            </div>
                        </div>
                        <div class="tac title">智慧垃圾桶</div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="sumItem">
                        <div class="inner tac">
                            <div class="dlb">
                                <h1>36</h1>
                                <p>绑定</p>
                            </div>
                            <div class="line"></div>
                            <div class="dlb">
                                <h1>17</h1>
                                <p>解绑</p>
                            </div>
                        </div>
                        <div class="tac title">智慧垃圾袋</div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="sumItem">
                        <div class="inner tac">
                            <div class="dlb">
                                <h1>72</h1>
                                <p>绑定</p>
                            </div>
                            <div class="line"></div>
                            <div class="dlb">
                                <h1>14</h1>
                                <p>解绑</p>
                            </div>
                        </div>
                        <div class="tac title">智慧垃圾罐</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <BreadFoot :breadArr="[{title:'业务管理',path:''},{title:'固废物智慧设备管理',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/wasteManage')">返回</el-button>
        </BreadFoot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot'
import Search from '@/components/search'
export default {
    name: 'wasteManageDetail',
    data () {
        return {
            pageNum: 1,
            pageSize: 10,
            total: 0,
            searchOption: [
                {
                    label: '设备类型',
                    type: 'select',
                    list: [],
                    key: 'userN1ame1'
                },
                {
                    label: '设备状态',
                    type: 'select',
                    list: [],
                    key: 'userN1ame1'
                },
                {
                    label: 'RFID',
                    type: 'input',
                    key: 'asd'
                }
            ],
            searchValue: {},
            tableData: [
                {
                    vehicleLicensePlate: '01',
                    vehicleVin: 'SS45648232547',
                    vehicleBrand: '智慧垃圾桶',
                    vehicleUse: '2020-05-23',
                    vehicleLicensePlateColor: '绑定',
                    aa: '马灯'
                },
                {
                    vehicleLicensePlate: '02',
                    vehicleVin: 'SS45648232547',
                    vehicleBrand: '智慧垃圾桶',
                    vehicleUse: '2020-05-23',
                    vehicleLicensePlateColor: '绑定',
                    aa: '马灯'
                },
                {
                    vehicleLicensePlate: '03',
                    vehicleVin: 'SS45648232547',
                    vehicleBrand: '智慧垃圾桶',
                    vehicleUse: '2020-05-23',
                    vehicleLicensePlateColor: '绑定',
                    aa: '马灯'
                }
            ]
        }
    },
    components: {
        Search,
        BreadFoot
    },
    created () {
    },
    computed: {
    },
    methods: {
        iin () {},
        handleSizeChange () {},
        handleCurrentChange () {}
    }
}
</script>

<style lang='less' scoped>
.wasteManageDetail {
    .sumBox {
        position: absolute;
        bottom: 66px;
        width: 100%;
        left: 0;
        background: #F0F2F5;
        padding-top: 24px;
        .sumItem {
            background: #ffffff;
            height: 196px;
            border: 1px solid #D9D9D9;
            .inner {
                margin-top: 48px;
                h1 {
                    font-size: 36px;
                    line-height: 50px;
                    color: #333333;
                }
                .line {
                    display: inline-block;
                    border-right: 1px solid #D9D9D9;
                    margin: 0 20px;
                    height: 52px;
                }
            }
            .title {
                margin-top: 44px;
                color: #999999;
            }
        }
    }
}
</style>

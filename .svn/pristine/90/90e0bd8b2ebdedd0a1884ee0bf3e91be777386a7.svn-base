<!-- 空白页面组件 -->
<template>
    <div class="block detailPage" style="position:initial;">
        <div class="detail_content">
            <div class="detail_model">
                <h4>基本信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>车主名称：</label>
                        <span>李晓兰</span>
                    </div>
                    <div class="detail_item">
                        <label>车主类型：</label>
                        <span>个人车主</span>
                    </div>
                    <div class="detail_item">
                        <label>数据来源：</label>
                        <span>金车汇</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>联系方式</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>联系手机：</label>
                        <span>138123145552</span>
                    </div>
                    <div class="detail_item">
                        <label>QQ号：</label>
                        <span>8855662</span>
                    </div>
                    <div class="detail_item">
                        <label>微信号：</label>
                        <span>--</span>
                    </div>
                    <div class="detail_item">
                        <label>所在城市：</label>
                        <span>湖北/黄冈</span>
                    </div>
                    <div class="detail_item">
                        <label>联系地址：</label>
                        <span>摩登大阿斯阿斯顿路99号</span>
                    </div>
                    <!-- <div class="detail_item">
                        <label>联系地址：</label>
                        <span>1阿斯顿得到</span>
                    </div> -->
                </div>
            </div>
             <div class="detail_model noBorder">
                <h4>所属车辆</h4>
                <el-table
                    border
                    :data="tableData"
                    class="tableBorder"
                    style="width: 100%;">
                    <el-table-column
                    prop="vehicleLicensePlate"
                    align="left"
                    label="车牌号码"
                    min-width="5%">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleVin"
                    align="left"
                    min-width="8%"
                    label="车辆VIN码">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleBrand"
                    align="left"
                    min-width="8%"
                    label="品牌车系">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleUse"
                    align="left"
                    min-width="8%"
                    label="车辆性质">
                    </el-table-column>
                    <el-table-column
                    prop="vehicleLicensePlateColor"
                    align="left"
                    min-width="10%"
                    label="车牌颜色">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <BreadFoot :breadArr="[{title:'企业数据',path:''},{title:'企业代付记录',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/paymentRecords')">返回</el-button>
        </BreadFoot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot'
export default {
    name: 'block',
    data () {
        return {
            tableData: [
                {
                    vehicleLicensePlate: '粤B991188',
                    vehicleVin: '1111222',
                    vehicleBrand: '马自达mx6',
                    vehicleUse: '私家车',
                    vehicleLicensePlateColor: '黄色'
                }
            ]
        }
    },
    components: {
        BreadFoot
    },
    created () {
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang='less' scoped>
.block {
}
</style>

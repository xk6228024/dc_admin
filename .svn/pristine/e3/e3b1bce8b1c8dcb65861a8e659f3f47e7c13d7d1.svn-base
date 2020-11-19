<!-- 空白页面组件 -->
<template>
    <div class="block detailPage" style="position:initial;">
        <el-tabs v-model="activeName" type="card"  style="padding:20px 20px 0;">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        </el-tabs>
        <div v-if="activeName=='first'">
            <div class="detail_content">
                <div class="detail_model">
                    <h4>估值基本信息</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>上传企业：</label>
                            <span>南宁市盛得龙汽车服务有限公司</span>
                        </div>
                        <div class="detail_item">
                            <label>评估时间：</label>
                            <span>2020-02-11</span>
                        </div>
                        <div class="detail_item">
                            <label>新车报价：</label>
                            <span>20.1万</span>
                        </div>
                        <div class="detail_item">
                            <label>上传时间：</label>
                            <span>2020-11-11</span>
                        </div>
                        <div class="detail_item">
                            <label>成交价：</label>
                            <span>20.11万</span>
                        </div>
                        <div class="detail_item">
                            <label>行驶里程：</label>
                            <span>40000</span>
                        </div>
                        <div class="detail_item">
                            <label>成交日期：</label>
                            <span>2020-11-11</span>
                        </div>
                        <div class="detail_item">
                            <label>城市：</label>
                            <span>深圳</span>
                        </div>
                        <div class="detail_item">
                            <label>类别：</label>
                            <span>--</span>
                        </div>
                    </div>
                </div>
                <div class="detail_model noBorder">
                    <h4>估值参考</h4>
                    <el-table
                        border
                        :data="tableData"
                        class="tableBorder"
                        style="width: 100%;">
                        <el-table-column
                        prop="vehicleLicensePlate"
                        align="left"
                        label="车辆情况"
                        min-width="5%">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleVin"
                        align="left"
                        min-width="8%"
                        label="车商收购价">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleBrand"
                        align="left"
                        min-width="8%"
                        label="个人交易价">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleUse"
                        align="left"
                        min-width="8%"
                        label="车商零售价">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleLicensePlateColor"
                        align="left"
                        min-width="8%"
                        label="车辆外观">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleLicensePlateColor"
                        align="left"
                        min-width="8%"
                        label="车辆内饰">
                        </el-table-column>
                        <el-table-column
                        prop="vehicleLicensePlateColor"
                        align="left"
                        min-width="8%"
                        label="车辆工况">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <div v-if="activeName=='second'">
            <div class="detail_content">
                <div class="detail_model">
                    <h4>基本参数</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>级别：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>市郊工况油耗：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>整车质保：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>最高速(km/h)：</label>
                            <span>220</span>
                        </div>
                        <div class="detail_item">
                            <label>变速箱：</label>
                            <span>6档 双离合</span>
                        </div>
                        <div class="detail_item">
                            <label>厂商：</label>
                            <span>大众</span>
                        </div>
                        <div class="detail_item">
                            <label>车身结构：</label>
                            <span>4门五座三车厢</span>
                        </div>
                        <div class="detail_item">
                            <label>发动机：</label>
                            <span>1.6T</span>
                        </div>
                        <div class="detail_item">
                            <label>空测100-0km/h制动(m)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>实测100-0km/h加速(s)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>官方100-0km/h加速(s)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>长*宽*高(m)：</label>
                            <span>--</span>
                        </div>
                    </div>
                </div>
                <div class="detail_model">
                    <h4>车身</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>长度(mm)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>行李箱电动级合门：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>货箱尺寸(mm)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>后背箱最大容积(L)：</label>
                            <span>220</span>
                        </div>
                        <div class="detail_item">
                            <label>座位数(个)：</label>
                            <span>6</span>
                        </div>
                        <div class="detail_item">
                            <label>车身材质：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>后排车门开启方式：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>行李箱打开方式：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>轴距(mm)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>最大载重质量(kg)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>后背箱内部尺寸(mm)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>整备质量(kg)：</label>
                            <span>--</span>
                        </div>
                    </div>
                </div>
                <div class="detail_model">
                    <h4>发动机</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>进气形式：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>缸径：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>燃油标号：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>气缸排列形式：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>最大功率(KW)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>缸体材料：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>每缸气门数：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>发动机型号：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>最大马力(Pa)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>最大功率转速(rpm)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>排量(L)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>压缩比：</label>
                            <span>--</span>
                        </div>
                    </div>
                </div>
                <div class="detail_model">
                    <h4>操控配置</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>制动力分配(EBO/CBC等)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>ABS防抱死：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>陆速助力转向调节(EPS)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>多地形可选驾驶系统：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>陡坡速度：</label>
                            <span></span>
                        </div>
                        <div class="detail_item">
                            <label>可变转向比：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>刹车辅助(EBA/BAS/BA等)：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>上坡辅助：</label>
                            <span>--</span>
                        </div>
                        <div class="detail_item">
                            <label>牵引力控制(ASR/TCS/TCR等)：</label>
                            <span>--</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BreadFoot :breadArr="[{title:'商业商务数据',path:''},{title:'估值数据',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/valuationData')">返回</el-button>
        </BreadFoot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot'
export default {
    name: 'block',
    data () {
        return {
            activeName: 'first',
            tableData: [
                {
                    vehicleLicensePlate: '粤B991188',
                    vehicleVin: '1111222',
                    vehicleBrand: '马自达mx6',
                    vehicleUse: '私家车',
                    vehicleLicensePlateColor: '黄色'
                },
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

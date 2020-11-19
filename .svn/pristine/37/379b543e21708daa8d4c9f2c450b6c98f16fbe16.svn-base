<template>
    <div class="maintenanceRecordDetail">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="维护作业基本信息" name="1" class="basic-info clearfix">
                <info-item title="维修信息">
                    <el-row>
                        <text-flex :span="8" name="车牌号码：" value="湘ADE993"></text-flex>
                        <text-flex :span="8" name="车牌颜色：" value="黄色"></text-flex>
                        <text-flex :span="8" name="VIN码：" value="LVRHDFAC7HN052411"></text-flex>
                    </el-row>
                    <el-row>
                        <text-flex :span="8" name="送修日期：" value="2019-05-04"></text-flex>
                        <text-flex :span="8" name="送修里程(公里)：" value="12580"></text-flex>
                        <text-flex :span="8" name="结算日期：" value="2019-05-12"></text-flex>
                    </el-row>
                    <el-row>
                        <text-flex :span="8" name="结算清单编号：" value="WX6576739940053"></text-flex>
                        <text-flex :span="8" name="故障信息：" value="空调故障"></text-flex>
                        <text-flex :span="8" name="维修性质：" value="普通维修"></text-flex>
                    </el-row>
                    <el-row>
                        <text-flex :span="8" name="维修企业名称：" value="长沙市润森汽车维修服务中心"></text-flex>
                        <text-flex :span="8" name="企业联系人：" value="王磊"></text-flex>
                        <text-flex :span="8" name="企业联系电话：" value="0755-82035519"></text-flex>
                    </el-row>
                    <el-row>
                        <text-flex :span="16" name="维修企业地址：" value="长沙市天心区人民路23号"></text-flex>
                    </el-row>
                </info-item>
                <info-item title="维修项目">
                    <el-table
                        border
                        :data="projectTable"
                        :header-cell-style="{'background': '#FAFAFA', 'text-align':'left'}"
                        class="empty-auto">
                        <el-table-column
                            prop="name"
                            label="维修项目">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="工时">
                        </el-table-column>
                    </el-table>
                </info-item>
                <info-item title="使用配件">
                    <el-table
                        border
                        :data="partsTable"
                        :header-cell-style="{'background': '#FAFAFA', 'text-align':'left'}"
                        class="empty-auto">
                        <el-table-column
                            prop="name"
                            label="配件名称">
                        </el-table-column>
                        <el-table-column
                            prop="code"
                            label="配件编码">
                        </el-table-column>
                        <el-table-column
                            prop="num"
                            label="使用数量">
                        </el-table-column>
                    </el-table>
                </info-item>
            </el-tab-pane>
            <el-tab-pane label="工作拍摄信息" name="2">
                <div class="phone-list clearfix">
                    <div class="phone-list-img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570618990108&di=0b3c8cb3553f5e60b224496c28acc6f0&imgtype=0&src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20090108%2F080443284076.JPG" alt="" @click="$zoomImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570618990108&di=0b3c8cb3553f5e60b224496c28acc6f0&imgtype=0&src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20090108%2F080443284076.JPG')">
                    </div>
                    <div class="phone-list-img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570618990108&di=0b3c8cb3553f5e60b224496c28acc6f0&imgtype=0&src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20090108%2F080443284076.JPG" alt="" @click="$zoomImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570618990108&di=0b3c8cb3553f5e60b224496c28acc6f0&imgtype=0&src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20090108%2F080443284076.JPG')">
                    </div>
                    <div class="phone-list-img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570618990108&di=0b3c8cb3553f5e60b224496c28acc6f0&imgtype=0&src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20090108%2F080443284076.JPG" alt="" @click="$zoomImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570618990108&di=0b3c8cb3553f5e60b224496c28acc6f0&imgtype=0&src=http%3A%2F%2Fimg0.ddove.com%2Fupload%2F20090108%2F080443284076.JPG')">
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工序信息" name="3">
                <div class="table-box">
                    <table class="table1 tableBorder" width="100%;">
                        <tr>
                            <th width="100">序号</th>
                            <th width="120">作业名称</th>
                            <th width="">作业项目</th>
                            <th width="">作业内容</th>
                            <th width="">作业记录</th>
                            <th width="120">维护人员</th>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">1</td>
                            <td class="tac" rowspan="32">发动机</td>
                            <td rowspan="2">发动机工作状况</td>
                            <td>1）检查发动机启动性能和柴油发动机停机装置</td>
                            <td>已符合要求</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查发动机运转情况</td>
                            <td>已符合要求</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">2</td>
                            <td>发动机排放机外净化装置</td>
                            <td>检查</td>
                            <td>已符合要求 | 已紧固</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">3</td>
                            <td>燃油蒸发控制装置</td>
                            <td>检查外观，检查装置是否畅通，视情更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">4</td>
                            <td>曲箱箱通风装置</td>
                            <td>检查外观，检查装置是否畅通，视情更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">5</td>
                            <td>增压器、中冷器</td>
                            <td>检查、清洁、紧固</td>
                            <td>已符合要求 | 已清洁 | 已紧固</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">6</td>
                            <td>发电机、起动机</td>
                            <td>检查、清洁</td>
                            <td>已符合要求 | 已清洁</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">7</td>
                            <td rowspan="2">发动机传动皮带(链)</td>
                            <td>1）检查空压机、水泵、发电机、空调机和正时传动带磨损及老化程度</td>
                            <td>已符合要求 | 已清洁 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）视情调整皮带松紧度</td>
                            <td>已调整</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">8</td>
                            <td rowspan="2">冷却装置</td>
                            <td>1）检查散热器、水箱及管路密封</td>
                            <td>已符合要求 | 已修补</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查水泵和节温器工作状况</td>
                            <td>已符合要求</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">9</td>
                            <td rowspan="2">火花塞、高压线</td>
                            <td>1）清洁、检查或更换火花塞</td>
                            <td>已符合要求</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查高压线外观及连接情况，按规定里程或时间更换高压线</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">10</td>
                            <td>进/排气岐管、消声器、排气管</td>
                            <td>检查、紧固</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">11</td>
                            <td>发动机总成</td>
                            <td>清洁、检查、紧固</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">12</td>
                            <td rowspan="2">储气筒、干燥器</td>
                            <td>1）检查、紧固</td>
                            <td>已符合要求</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）按规定里程或时间更换干燥剂</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">13</td>
                            <td>制动踏板</td>
                            <td>检查、调整制动踏板自由行程</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">14</td>
                            <td>驻车制动</td>
                            <td>检查驻车制动性能，调整操纵机构</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">15</td>
                            <td>防抱死制动装置</td>
                            <td>检查连接线路，清洁伦速传感器</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="8">16</td>
                            <td rowspan="8">鼓式制动器</td>
                            <td>1）检查制动间隙调整装置</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）拆卸制动鼓、轮毂、制动蹄、主销；消洗转向节、轴承、支承销、制动底板等零件</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>3）检查制动底板、制动凸轮轴，校紧装置螺栓</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>4）检查内外轴承</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>5）检查制动摩擦片、制动蹄及支承销</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>6）检查制动蹄复位弹簧</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>7）检查毂、制动鼓及轴承外座圈</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>8）装复制动鼓、轮毂、制动蹄，调整轴承松紧度及制动间隙</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="4">17</td>
                            <td rowspan="4">盘式制动器</td>
                            <td>1）检查制动摩擦片和制动盘磨损量</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查制动摩擦片与制动盘的间隙</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>3）检查密封件</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>4）检查制动钳</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">18</td>
                            <td rowspan="3">转向系</td>
                            <td rowspan="2">转向器、转向传动机构</td>
                            <td>1）检查转向器和转向传动机构</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查部件技术状况，校紧各部螺栓</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">19</td>
                            <td>转向盘最大自由转动量</td>
                            <td>检查、调整转向盘最大自由转动量</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="4">20</td>
                            <td rowspan="7">行驶系</td>
                            <td rowspan="4">车轮及轮胎（包括备胎）</td>
                            <td>1）检查轮胎规格型号</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查轮胎外观，视情更换轮胎</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>3）轮胎换位</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>4）检查、调整车轮前束</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">21</td>
                            <td rowspan="2">悬架</td>
                            <td>1）检查、紧固，视情校正</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）减震器</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">22</td>
                            <td>车桥</td>
                            <td>检查车桥、车桥与悬架之间的拉杆和导杆</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">23</td>
                            <td rowspan="7">传动系</td>
                            <td rowspan="2">离合器</td>
                            <td>1）检查工作状况</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查、调整踏板自由行程</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">24</td>
                            <td rowspan="2">变速器、主减速器、差速器</td>
                            <td>1）检查、调整变速器</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查变速器、主减速器、差速器润滑油液高度，视情更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="3">25</td>
                            <td rowspan="3">传动轴</td>
                            <td>1）检查传动轴防尘罩</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查传动轴及万向节</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>3）检查传动轴承及支架</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">26</td>
                            <td rowspan="2">灯光导线</td>
                            <td>前照灯</td>
                            <td>检查远光灯发光强度，检查、调整前照灯光束照射位置</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">27</td>
                            <td>仪表、喇叭、刮水器、蓄电池、线束及导线</td>
                            <td>检查、调整，视情修理或更换</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="2">28</td>
                            <td rowspan="7">车架车身</td>
                            <td rowspan="2">车架和车身</td>
                            <td>1）检查车架和车身</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查车门、车窗启闭和锁止</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">29</td>
                            <td>支撑装置</td>
                            <td>检查、润滑支撑装置，校紧连接螺栓、螺母</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac" rowspan="4">30</td>
                            <td rowspan="4">牵引车与挂车连接装置</td>
                            <td>1）检查牵引销及其连接装置</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>2）检查、润滑牵引座及牵引销锁止、释放机构，校紧连接螺栓、螺母</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>3）检查转盘及转盘架</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td>4）检查牵引钩</td>
                            <td>已符合要求 | 已更换</td>
                            <td class="tac">王磊</td>
                        </tr>
                        <tr>
                            <td class="tac">31</td>
                            <td colspan="2">附加项目</td>
                            <td></td>
                            <td></td>
                            <td class="tac">王磊</td>
                        </tr>
                    </table>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </el-tab-pane>
        </el-tabs>
        <bread-foot
            :breadArr="[{title:'档案管理',path:''},{title:'维修作业查询',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button class='back-btn' @click="$router.back()">返回</el-button>
        </bread-foot>
    </div>
</template>

<script>
// import Search from '@/components/Search'
import BreadFoot from '@/components/BreadFoot.vue'
import InfoItem from '@/components/InfoItem'
import TextFlex from '@/components/TextFlex'
export default {
    name: 'maintenanceRecordDetail',
    data () {
        return {
            projectTable: [
                {
                    name: '空调总成维修',
                    time: 3
                }
            ],
            partsTable: [
                {
                    name: '空调压缩机',
                    code: 'DM2K3R3L244253100',
                    num: '1'
                }
            ],
            activeName: '1'
        }
    },
    components: {
        BreadFoot,
        InfoItem,
        TextFlex
    },
    created () {
    },
    filters: {
    },
    methods: {
        handleClick (tab) {
            console.log(tab)
        }
    }
}
</script>
<style lang="less">
.maintenanceRecordDetail {
    height: calc(100% - 60px);
    overflow: auto;
    padding: 30px;
    box-sizing: border-box;
    .phone-list {
        background: #fff;
        padding: 24px;
        min-height: 600px;
        .phone-list-img {
            float: left;
            width: 120px;
            height: 120px;
            margin-right: 48px;
            border: 1px solid #cccccc;
            border-radius:4px;
            padding: 6px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .table-box {
        padding: 24px;
        background: #fff;
        .table1 {
            border-collapse:collapse;
            tr {
                th {
                    color: #000000;
                    border: 1px solid #ddd;
                    font-size: 14px;
                    font-weight: normal;
                    height: 32px;
                    text-align: center;
                    font-weight: bold;
                }
                td {
                    border: 1px solid #ddd;
                    font-size: 14px;
                    font-weight: normal;
                    height: 32px;
                    padding: 0 10px;
                }
            }
        }
    }
    // .el-tabs--card {
    //     background: #fff;
    // }
    // .el-tabs--card>.el-tabs__header {
    //     background: #EDF0F5;
    //     border: none;
    //     .el-tabs__nav {
    //         border: none;
    //     }
    //     .el-tabs__item {
    //         box-sizing: border-box;
    //         border: none;
    //         border-radius:3px 3px 0px 0px;
    //         background: #FFF;
    //         margin-right: 10px;
    //         border-top: 3px solid #FFF;
    //         &.is-active {
    //             color: #1890FF;
    //             border-top: 3px solid #3E94FE;
    //         }
    //     }
    // }
    // .el-tabs--border-card {
    //     border: none;
    // }
    // .el-tabs--border-card {
    //     box-shadow: none;
    // }
    // .el-tabs__item {
    //     height:44px;
    //     line-height: 44px;
    //     padding: 0 30px;
    // }
    .info-item {
        background: #ffffff;
        .info-title {
            padding: 0 30px;
            height: 54px;
            line-height: 54px;
            text-align: left;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            border-bottom: 1px solid #ffffff;
        }
        .info-content {
            padding: 24px 30px;
            font-size: 14px;
            .item-name, .item-value {
                display: inline-block;
                margin-bottom: 16px;
                font-size: 14px;
            }
            .item-name {
                color: #333;
            }
            .item-value {
                color: #666;
            }
        }
    }
}
</style>

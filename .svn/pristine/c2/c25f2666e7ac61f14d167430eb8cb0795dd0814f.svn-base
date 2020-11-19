<template>
    <div class="inquest-info-detail">
        <div class="tab-content">
            <h3>企业勘验信息</h3>
            <el-row :gutter="20">
                <el-col :span="8"><div class="item"><span>企业名称: </span>深圳市万顺源汽车维修厂</div></el-col>
                <el-col :span="8"><div class="item"><span>所属地区: </span>南山区</div></el-col>
                <el-col :span="8"><div class="item"><span>经营类别: </span>二类维修</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8"><div class="item"><span>经营地址: </span>南山区南头街道怡园路198号1栋1002</div></el-col>
                <el-col :span="8"><div class="item"><span>联系人: </span>默默靠近</div></el-col>
                <el-col :span="8"><div class="item"><span>联系电话: </span>18613018890</div></el-col>
            </el-row>
        </div>
        <div class="tab-content">
            <h3>勘验信息 <span>勘验项目：25 满足要求：20</span><span class="inquest-all" v-if='!isSlot' @click="$router.push('/inquestInfoDetailAll')">勘验全记录</span></h3>
            <el-row :gutter="20">
                <el-col :span="8"><div class="item"><span>企业名称: </span>深圳市万顺源汽车维修厂</div></el-col>
                <el-col :span="8"><div class="item"><span>所属地区: </span>南山区</div></el-col>
                <el-col :span="8"><div class="item"><span>经营类别: </span>二类维修</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8"><div class="item"><span>经营地址: </span>南山区南头街道怡园路198号1栋1002</div></el-col>
                <el-col :span="8"><div class="item"><span>联系人: </span>默默靠近</div></el-col>
                <el-col :span="8"><div class="item"><span>联系电话: </span>18613018890</div></el-col>
            </el-row>
        </div>
        <el-tabs type="card" v-model="tabIndex">
            <el-tab-pane label="检查确认表" name='index0'>
                <div class="tab-item-table1">
                    <p class="item-title">备案条件符合性检查确认表</p>
                    <custom-table
                        :table-data="Alist"
                        :label-data="Alabel"
                        :span-method="objectSpanMethod1"
                        :showElPage=false
                        :border=true
                        >
                    </custom-table>
                    <p class="item-result-name">备案条件符合性检查结果：<span class="item-result-value">不符合</span></p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="经营场地" name='index1'>
                <div class="tab-item-table1">
                    <p class="item-title">经营场地符合性检查表</p>
                    <custom-table
                        :table-data="Blist"
                        :label-data="Blabel"
                        :span-method="objectSpanMethod2"
                        :showElPage=false
                        :border=true
                        >
                    </custom-table>
                    <p class="item-result-name">经营场地条件检查结果：<span class="item-result-value">不符合</span></p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="设施设备" name='index2'>
                <div class="tab-item-table1">
                    <el-tabs v-model="activeName" class="normal-tab">
                        <el-tab-pane label="仪表工具" name="仪表工具">
                            <p class="item-title">设施设备备案条件符合性检查表</p>
                            <custom-table
                                :table-data="C1list"
                                :label-data="C1label"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                        </el-tab-pane>
                        <el-tab-pane label="通用设备" name="通用设备">
                            <p class="item-title">通用设备备案条件符合性检查表</p>
                            <custom-table
                                :table-data="C2list"
                                :label-data="C2label"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                        </el-tab-pane>
                        <el-tab-pane label="专用设备" name="专用设备">
                            <p class="item-title">专用设备备案条件符合性检查表</p>
                            <custom-table
                                :table-data="C3list"
                                :label-data="C3label"
                                :span-method="objectSpanMethodC3"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                            <p class="item-result-name"> 注：√ ——要求具备，- ——不要求具备。</p>
                        </el-tab-pane>
                        <el-tab-pane label="检测设备" name="检测设备">
                            <p class="item-title">检测设备备案条件符合性检查表</p>
                            <custom-table
                                :table-data="C4list"
                                :label-data="C4label"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                            <p class="item-result-name">检测设备检查结果确认：<span class="item-result-value">不符合</span></p>
                        </el-tab-pane>
                        <el-tab-pane label="认证信息检查表" name="认证信息检查表">
                            <p class="item-title">计量器具及检测设备检定证书符合性检查表</p>
                            <custom-table
                                :table-data="C5_1list"
                                :label-data="C5_1label"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                            <p class="item-result-name">检定证书检查结果确认：<span class="item-result-value">符合</span></p>

                            <p class="item-title">安全设备的交通认证信息符合性检查表</p>
                            <custom-table
                                :table-data="C5_2list"
                                :label-data="C5_2label"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                            <p class="item-result-name">安全设备认证信息检查结果确认：<span class="item-result-value">符合</span></p>

                            <p class="item-title">外协产品的外协合同及证书符合性检查表</p>
                            <custom-table
                                :table-data="C5_3list"
                                :label-data="C5_3label"
                                :span-method="objectSpanMethodC5_3"
                                :showElPage=false
                                :border=true
                                >
                            </custom-table>
                            <p class="item-result-name">外协产品合同及证书检查结果确认：<span class="item-result-value">符合</span></p>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-tab-pane>
            <el-tab-pane label="维修技术人员" name='index3'>
                <div class="tab-item-table1">
                    <p class="item-title">技术人员符合性检查表</p>
                    <custom-table
                        :table-data="Dlist"
                        :label-data="Dlabel"
                        :span-method="objectSpanMethodD"
                        :showElPage=false
                        :border=true
                        >
                    </custom-table>
                    <p class="item-result-name" style="text-align: left;">备注：1、从业人员不能兼职。
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        2、认可以往由市级交通主管部门以上单位及市级人力资源保障部门颁发的在有效期内的资格证书。</p>
                    <p class="item-result-name">技术人员条件检查结果确认：<span class="item-result-value">不符合</span></p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="维修管理制度" name='index4'>
                <div class="tab-item-table1">
                    <p class="item-title">各项管理制度符合性核查表</p>
                    <custom-table
                        :table-data="Elist"
                        :label-data="Elabel"
                        :span-method="objectSpanMethodE"
                        :showElPage=false
                        :border=true
                        >
                    </custom-table>
                    <p class="item-result-name">管理制度检查结果确认：<span class="item-result-value">不符合</span></p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="环境保护措施" name='index5'>
                <div class="tab-item-table1">
                    <p class="item-title">环境保护措施符合性核查表</p>
                    <custom-table
                        :table-data="Flist"
                        :label-data="Flabel"
                        :showElPage=false
                        :border=true
                        >
                    </custom-table>
                    <p class="item-result-name">环境保护措施检查结果确认：<span class="item-result-value">符合</span></p>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// import BreadFoot from '@/components/BreadFoot.vue'
import customTable from '@/components/table'
export default {
    name: 'inquestInfoDetail',
    components: {
        customTable
    },
    props: {
        isSlot: {
            type: Boolean,
            dafeult: () => {
                return false
            }
        }
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '企业勘验信息', path: '' }, { title: '企业勘验信息详情', path: '' }
            ],
            tabIndex: 'index0',
            activeName: '仪表工具',
            // hasConcat: false,
            Alist: [
                {
                    a: '经营场地',
                    a1: '经营场地面积是否满足《机动车维修管理规定》、《汽车维修业开业条件》（GB/T 16739）规定要求。',
                    a2: '符合'
                },
                {
                    a: '经营场地',
                    a1: '土地使用权及产权证明材料是否合法有效。',
                    a2: '不符合'
                },
                {
                    a: '经营场地',
                    a1: '是否正确张贴相关材料。',
                    a2: '不符合'
                },

                {
                    a: '设施设备',
                    a1: '设施设备是否满足《汽车维修业开业条件》（GB/T 16739）规定要求。',
                    a2: '符合'
                },
                {
                    a: '设施设备',
                    a1: '计量器具及检测设备检定证书是否齐全、真实、有效。',
                    a2: '符合'
                },
                {
                    a: '设施设备',
                    a1: '汽车举升机、喷烤漆房及设备等涉及安全的产品是否通过交通产品认证。',
                    a2: '符合'
                },
                {
                    a: '设施设备',
                    a1: '允许外协并且外协的设备，是否具有合法的合同书。',
                    a2: '符合'
                },
                {
                    a: '维修技术人员',
                    a1: '技术人员配备是否满足《汽车维修业开业条件》（GB/T 16739）、《道路运输从业人员管理规定》规定要求。',
                    a2: '符合'
                },
                {
                    a: '维修技术人员',
                    a1: '技术人员证书是否真实有效。',
                    a2: '符合'
                },
                {
                    a: '维修管理制度',
                    a1: '维修管理制度是否满足《机动车维修管理规定》规定要求。',
                    a2: '符合'
                },
                {
                    a: '环境保护措施',
                    a1: '环境保护措施是否满足《汽车维修业开业条件》（GB/T 16739）规定要求。',
                    a2: '符合'
                }
            ],
            Alabel: [
                {
                    label: '检查事项',
                    prop: 'a',
                    minWidth: '20%'
                },
                {
                    label: '规定条件',
                    prop: 'a1',
                    minWidth: '60%'
                },
                {
                    label: '检查结果',
                    prop: 'a2',
                    minWidth: '20%'
                }
            ],
            Aarr: [],
            Blist: [
                {
                    a: '01',
                    a1: '生产厂房条件',
                    a2: '面积不小于800㎡，生产厂房地面应平整坚实；生产厂房内应设有总成维修车间，总成维修车间面积不小于30㎡',
                    a3: '符合',
                    a4: '',
                    a5: '',
                    a6: ''
                },
                {
                    a: '02',
                    a1: '接待室面积',
                    a2: '面积不小于80m²',
                    a3: '不符合',
                    a4: '面积只有60m²',
                    a5: '',
                    a6: ''
                },
                {
                    a: '03',
                    a1: '公示信息',
                    a2: '机动车维修工时定额和收费标准',
                    a3: '符合',
                    a4: '',
                    a5: '',
                    a6: ''
                },
                {
                    a: '04',
                    a1: '公示信息',
                    a2: '机动车维修质量保证期。',
                    a3: '不符合',
                    a4: '收费不具体',
                    a5: '',
                    a6: ''
                },
                {
                    a: '05',
                    a1: '公示信息',
                    a2: '配件价格、收费项目、工时定额和工时单价',
                    a3: '符合',
                    a4: '文本说明',
                    a5: '',
                    a6: ''
                },
                {
                    a: '06',
                    a1: '公示信息',
                    a2: '机动车维修标志牌',
                    a3: '符合',
                    a4: '文本说明',
                    a5: '',
                    a6: ''
                },
                {
                    a: '07',
                    a1: '公示信息',
                    a2: '业务受理程序',
                    a3: '符合',
                    a4: '文本说明',
                    a5: '',
                    a6: ''
                },
                {
                    a: '08',
                    a1: '公示信息',
                    a2: '服务承诺',
                    a3: '符合',
                    a4: '文本说明',
                    a5: '',
                    a6: ''
                },
                {
                    a: '09',
                    a1: '公示信息',
                    a2: '客户抱怨受理程序',
                    a3: '符合',
                    a4: '文本说明',
                    a5: '',
                    a6: ''
                },
                {
                    a: '10',
                    a1: '公示信息',
                    a2: '工商营业执照',
                    a3: '符合',
                    a4: '文本说明',
                    a5: '',
                    a6: ''
                },
                {
                    a: '11',
                    a1: '停车场条件',
                    a2: '面积不小于200㎡，停车场地面平整坚实，不得占用公共用地',
                    a3: '不符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '12',
                    a1: '土地使用权及产权证明材料',
                    a2: '自有产权的，需有产权证明；非自有产权，应有区房管部门出具的房屋租赁凭证（或房屋租赁信息），或同时提供1年以上租赁合同（租用场地的租赁期限应自受理申请日起满1年或以上。）和产权证明材料。',
                    a3: '符合',
                    a4: '“符合”时非必填，数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '13',
                    a1: '从事燃气汽车维修企业附加条件',
                    a2: '设有非易燃建筑材料建设的永久性建筑专用维修厂房；设有密封性检查、卸压操作的专用场地',
                    a3: '符合',
                    a4: '',
                    a5: '',
                    a6: ''
                }
            ],
            Blabel: [
                {
                    label: '序号',
                    prop: 'a',
                    minWidth: '5%'
                },
                {
                    label: '事项名称',
                    prop: 'a1',
                    minWidth: '10%'
                },
                {
                    label: '规定条件',
                    prop: 'a2',
                    minWidth: '50%'
                },
                {
                    label: '检查结果',
                    prop: 'a3',
                    minWidth: '10%'
                },
                {
                    label: '备注说明',
                    prop: 'a4',
                    minWidth: '10%'
                },
                {
                    label: '图片',
                    prop: 'a5',
                    minWidth: '10%'
                },
                {
                    label: '企业整改',
                    prop: 'a6',
                    minWidth: '10%'
                }
            ],
            Barr: [],
            C1list: [
                {
                    a: '1',
                    a1: '万用表',
                    a2: '2',
                    a3: '不符合',
                    a4: '面积只有60m²',
                    a5: '',
                    a6: '是'
                },
                {
                    a: '2',
                    a1: '气缸压力表',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '3',
                    a1: '燃油压力表',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '4',
                    a1: '液压油压力表',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '5',
                    a1: '真空表',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '6',
                    a1: '空调检漏设备',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '7',
                    a1: '轮胎气压表',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '8',
                    a1: '外径千分尺',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '9',
                    a1: '内径千分尺',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '10',
                    a1: '量缸表',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '11',
                    a1: '游标卡尺',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '12',
                    a1: '扭力扳手',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '13',
                    a1: '气体压力及流量检测仪（针对燃气汽车维修企业）',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                },
                {
                    a: '14',
                    a1: '便携式气体检漏仪（针对燃气汽车维修企业）',
                    a2: '1',
                    a3: '符合',
                    a4: '数据来源于小程序',
                    a5: '',
                    a6: ''
                }
            ],
            C1label: [
                {
                    label: '序号',
                    prop: 'a'
                },
                {
                    label: '设备名称',
                    prop: 'a1'
                },
                {
                    label: '数量',
                    prop: 'a2'
                },
                {
                    label: '检查结果',
                    prop: 'a3'
                },
                {
                    label: '备注说明',
                    prop: 'a4'
                },
                {
                    label: '图片',
                    prop: 'a5'
                },
                {
                    label: '企业整改',
                    prop: 'a6'
                }
            ],
            C2list: [
                {
                    a: '1',
                    a1: '计算机',
                    a2: '',
                    a3: ''
                },
                {
                    a: '2',
                    a1: '砂轮机',
                    a2: '',
                    a3: ''
                },
                {
                    a: '3',
                    a1: '台钻（含台钳）',
                    a2: '',
                    a3: ''
                },
                {
                    a: '4',
                    a1: '电焊设备（大中型客车、大型货车维修）',
                    a2: '',
                    a3: ''
                },
                {
                    a: '5',
                    a1: '气体保护焊设备',
                    a2: '',
                    a3: ''
                },
                {
                    a: '6',
                    a1: '压床',
                    a2: '',
                    a3: ''
                },
                {
                    a: '7',
                    a1: '空气压缩机',
                    a2: '',
                    a3: ''
                },
                {
                    a: '8',
                    a1: '抢修服务车',
                    a2: '',
                    a3: ''
                }
            ],
            C2label: [
                {
                    label: '序号',
                    prop: 'a'
                },
                {
                    label: '设备名称',
                    prop: 'a1'
                },
                {
                    label: '数量',
                    prop: 'a2'
                },
                {
                    label: '检查结果',
                    prop: 'a3'
                }
            ],
            C3list: [
                {
                    a: '1',
                    a1: '废油收集设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '2',
                    a1: '齿轮油加注设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '3',
                    a1: '液压油加注设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '4',
                    a1: '制动液更换加注器',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '5',
                    a1: '脂类加注器',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '6',
                    a1: '轮胎轮辋拆装设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '7',
                    a1: '轮胎螺母拆装机',
                    a2: '√',
                    a3: '√',
                    a4: '-',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '8',
                    a1: '车轮动平衡机',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '9',
                    a1: '四轮定位仪',
                    a2: '-',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '10',
                    a1: '四轮定位仪或转向轮定位仪 ',
                    a2: '√',
                    a3: '√',
                    a4: '-',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '11',
                    a1: '制动鼓和制动盘维修设备',
                    a2: '√',
                    a3: '√',
                    a4: '-',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '12',
                    a1: '汽车空调冷媒回收净化加注设备（大型货车允许外协）',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '13',
                    a1: '总成吊装设备或变速箱等总成顶举设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '14',
                    a1: '举升设备（不少于5个。汽车举升机或具有安全通道的地沟）',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '15',
                    a1: '汽车故障电脑诊断仪',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '16',
                    a1: '冷媒鉴别仪',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '17',
                    a1: '蓄电池检查、充电设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '18',
                    a1: '无损探伤设备',
                    a2: '√',
                    a3: '-',
                    a4: '-',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '19',
                    a1: '车身清洗设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '20',
                    a1: '打磨抛光设备',
                    a2: '√',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '21',
                    a1: '除尘除垢设备',
                    a2: '√',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '22',
                    a1: '车身整形设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '23',
                    a1: '车身校正设备 ',
                    a2: '-',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '24',
                    a1: '车架校正设备 ',
                    a2: '√',
                    a3: '√',
                    a4: '-',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '25',
                    a1: '悬架试验台 （允许外协）',
                    a2: '-',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '26',
                    a1: '喷烤漆房及设备（大中型客车允许外协）',
                    a2: '√',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '27',
                    a1: '喷油泵试验设备（针对柴油车）（允许外协）',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '28',
                    a1: '喷油器试验设备',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '29',
                    a1: '调漆设备 （允许外协）',
                    a2: '√',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '30',
                    a1: '自动变速器维修设备 （允许外协）',
                    a2: '√',
                    a3: '√',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 3
                },
                {
                    a: '31',
                    a1: '氮气置换装置（针对燃气汽车维修企业）',
                    a2: '√',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                },
                {
                    a: '32',
                    a1: '气瓶支架强度校验装置（针对燃气汽车维修企业）（允许外协）',
                    a2: '√',
                    a3: '-',
                    a4: '√',
                    a5: '',
                    a6: '',
                    col: 1
                }
            ],
            C3label: [
                {
                    label: '序号',
                    prop: 'a',
                    minWidth: '10%'
                },
                {
                    label: '设备名称',
                    prop: 'a1',
                    minWidth: '30%'
                },
                {
                    label: '大中型客车',
                    prop: 'a2',
                    minWidth: '10%'
                },
                {
                    label: '大型货车',
                    prop: 'a3',
                    minWidth: '10%'
                },
                {
                    label: '小型车',
                    prop: 'a4',
                    minWidth: '10%'
                },
                {
                    label: '数量',
                    prop: 'a5',
                    minWidth: '10%'
                },
                {
                    label: '检查结果',
                    prop: 'a6',
                    minWidth: '10%'
                }
            ],
            C4list: [
                {
                    a: '1',
                    a1: '尾气分析仪或不透光烟度计',
                    a2: '2',
                    a3: '不符合'
                },
                {
                    a: '2',
                    a1: '汽车前照灯检测设备',
                    a2: '1',
                    a3: '符合'
                },
                {
                    a: '3',
                    a1: '侧滑试验台',
                    a2: '1',
                    a3: '符合'
                },
                {
                    a: '4',
                    a1: '制动性能检验设备',
                    a2: '2',
                    a3: '符合'
                }
            ],
            C4label: [
                {
                    label: '序号',
                    prop: 'a',
                    minWidth: '10%'
                },
                {
                    label: '设备名称',
                    prop: 'a1',
                    minWidth: '60%'
                },
                {
                    label: '数量',
                    prop: 'a2',
                    minWidth: '15%'
                },
                {
                    label: '检查结果',
                    prop: 'a3',
                    minWidth: '15%'
                }
            ],
            C5_1list: [
                {
                    a: '1',
                    a1: '气缸压力表',
                    a2: '符合'
                },
                {
                    a: '2',
                    a1: '燃油压力表',
                    a2: '符合'
                },
                {
                    a: '3',
                    a1: '液压油压力表',
                    a2: '符合'
                },
                {
                    a: '4',
                    a1: '尾气分析仪或不透光烟度计',
                    a2: '符合'
                },
                {
                    a: '5',
                    a1: '汽车前照灯检测设备',
                    a2: '符合'
                },
                {
                    a: '6',
                    a1: '侧滑试验台',
                    a2: '符合'
                },
                {
                    a: '7',
                    a1: '制动性能检验设备需要检定合格证书',
                    a2: '符合'
                },
                {
                    a: '8',
                    a1: '气体压力及流量检测仪（燃气汽车维修企业附加条件）',
                    a2: '符合'
                }
            ],
            C5_1label: [
                {
                    label: '序号',
                    prop: 'a',
                    minWidth: '20%'
                },
                {
                    label: '检定证书',
                    prop: 'a1',
                    minWidth: '60%'
                },
                {
                    label: '检查结果',
                    prop: 'a2',
                    minWidth: '20%'
                }
            ],
            C5_2list: [
                {
                    a: '1',
                    a1: '汽车举升机',
                    a2: '符合'
                },
                {
                    a: '2',
                    a1: '喷烤漆房及设备',
                    a2: '符合'
                }
            ],
            C5_2label: [
                {
                    label: '序号',
                    prop: 'a',
                    minWidth: '20%'
                },
                {
                    label: '交通产品认证情况',
                    prop: 'a1',
                    minWidth: '60%'
                },
                {
                    label: '检查结果',
                    prop: 'a2',
                    minWidth: '20%'
                }
            ],
            C5_3list: [
                {
                    a: '1',
                    a1: '悬架试验台',
                    a2: '外协设备，应具有合法的合同书，并能证明其技术状况符合要求。喷烤漆房及设备若外协需同时提供交通产品认证证书。',
                    a3: '符合',
                    row: 7
                },
                {
                    a: '2',
                    a1: '汽车空调冷媒回收净化加注设备（大型货车允许外协）',
                    a2: '',
                    a3: '符合',
                    row: 0
                },
                {
                    a: '3',
                    a1: '喷烤漆房及设备（大中型客车允许外协）',
                    a2: '',
                    a3: '符合',
                    row: 0
                },
                {
                    a: '4',
                    a1: '喷油泵试验设备（针对柴油车）',
                    a2: '',
                    a3: '符合',
                    row: 0
                },
                {
                    a: '5',
                    a1: '调漆设备',
                    a2: '',
                    a3: '符合',
                    row: 0
                },
                {
                    a: '6',
                    a1: '自动变速器维修设备',
                    a2: '',
                    a3: '符合',
                    row: 0
                },
                {
                    a: '7',
                    a1: '气瓶支架强度校验装置（针对燃气汽车维修企业）',
                    a2: '',
                    a3: '符合',
                    row: 0
                }
            ],
            C5_3label: [
                {
                    label: '序号',
                    prop: 'a',
                    minWidth: '20%'
                },
                {
                    label: '设备名称',
                    prop: 'a1',
                    minWidth: '50%'
                },
                {
                    label: '规定条件',
                    prop: 'a2',
                    minWidth: '20%'
                },
                {
                    label: '检查结果',
                    prop: 'a3',
                    minWidth: '20%'
                }
            ],
            Dlist: [
                {
                    a: '技术负责人',
                    a1: '≥1名',
                    a2: '具有机动车维修或者相关专业大专以上学历，或具有机动车检测维修工程师证书。 熟悉机动车维修业务，掌握机动车维修及相关政策法规和技术规范。相关专业包括：汽车维修专业、汽车运用专业、汽车设计与制造专业、交通运输及交通工程专业、内燃机专业、农业机械使用与维护专业、汽车运用与维修、汽车技术服务与营销、汽车营销、新能源汽车维修、新能源汽车技术、汽车检测与诊断、汽车电子技术、汽车设计与应用等专业。',
                    a3: '',
                    row: 1
                },
                {
                    a: '质量检验员',
                    a1: '≥2名',
                    a2: '具有机动车检测维修士或汽车维修工（技师或高级技师）证书并持有与承修车型种类相适应的机动车驾驶证。熟悉各类汽车或者其他机动车维修检测作业规范，掌握汽车或者其他机动车维修故障诊断和质量检验的相关技术，熟悉汽车或者其他机动车维修服务收费标准及相关政策法规和技术规范。',
                    a3: '',
                    row: 1
                },
                {
                    a: '机修人员',
                    a1: '≥2名',
                    a2: '从事机修、电器、钣金、涂漆作业的技术人员要求：具有汽车维修工或机动车检测维修士证书。熟悉所从事工种的维修技术和操作规范，并了解汽车或者其他机动车维修及相关政策法规。',
                    a3: '',
                    row: 4
                },
                {
                    a: '电器维修人员',
                    a1: '≥2名',
                    a2: '1',
                    a3: '',
                    row: 0
                },
                {
                    a: '钣金人员',
                    a1: '≥2名',
                    a2: '2',
                    a3: '',
                    row: 0
                },
                {
                    a: '涂漆人员',
                    a1: '≥2名',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '业务接待人员',
                    a1: '≥1名',
                    a2: '',
                    a3: '',
                    row: 1
                },
                {
                    a: '燃气汽车维修企业附加条件：专职作业、检验人员',
                    a1: '≥1名（包含于8名维修工之内即可）',
                    a2: '从事燃气汽车维修的，还应提供至少1名燃气专职作业、检验人员的证明文件（初中以上学历、技术职称、职业资格其中之一即可）。',
                    a3: '',
                    row: 1
                },
                {
                    a: '新能源汽车维修企业附加条件：专职作业、检验人员',
                    a1: '≥1名（包含于8名维修工之内即可）',
                    a2: '从事新能源汽车维修的，还应提供至少1名新能源专职作业、检验人员证明文件（特种作业操作证（电工）证书）或电动汽车维修工（高级或以上）证书）。',
                    a3: '',
                    row: 1
                }
            ],
            Dlabel: [
                {
                    label: '岗位',
                    prop: 'a',
                    minWidth: '20%'
                },
                {
                    label: '规定数量',
                    prop: 'a1',
                    minWidth: '20%'
                },
                {
                    label: '规定条件',
                    prop: 'a2',
                    minWidth: '60%'
                },
                {
                    label: '检查结果',
                    prop: 'a3',
                    minWidth: '20%'
                }
            ],
            Elist: [
                {
                    a: '质量管理制度',
                    a1: '业务工作流程',
                    a2: '应建立并执行汽车维修质量承诺、维修质量保证期制度、进出厂登记、检验、竣工出厂合格证管理、维修工时标准、维修车型的技术资料管理等制度。',
                    a3: '',
                    row: 10
                },
                {
                    a: '质量管理制度',
                    a1: '服务质量承诺',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '用户抱怨受理程序',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '质量保证期制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '价格备案及公示制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '进出厂登记制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '车辆进厂检验制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '汽车过程检验制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '汽车维修竣工检验制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '质量管理制度',
                    a1: '汽车维修竣工出厂合格证使用及管理制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '安全生产管理制度',
                    a1: '安全生产架构',
                    a2: '应建立安全生产组织机构和安全生产责任制度，明确各岗位人员安全职责，明确安全管理人员。',
                    a3: '',
                    row: 4
                },
                {
                    a: '安全生产管理制度',
                    a1: '安全生产责任制',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '安全生产管理制度',
                    a1: '安全保护措施',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '安全生产管理制度',
                    a1: '安全检查整改制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '车辆维修档案管理制度',
                    a1: '维修档案管理制度（维修电子健康档案）',
                    a2: '车辆维修档案实行电子化管理，档案内容应包括维修合同、维修项目、维修人员、维修记录、维修结算清单、材料清单等。对机动车进行二级维护、总成修理、整车修理的，维修档案还应当包括：质量检验单、质量检验人员、竣工出厂合格证（副本）等。',
                    a3: '',
                    row: 2
                },
                {
                    a: '车辆维修档案管理制度',
                    a1: '维修记录',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '人员培训制度',
                    a1: '技术技能培训',
                    a2: '应建立并执行技术技能培训、管理技能培训、安全生产培训制度等内容。',
                    a3: '',
                    row: 2
                },
                {
                    a: '人员培训制度',
                    a1: '安全生产培训',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '设备管理制度',
                    a1: '设备使用维护制度',
                    a2: '应建立设备使用、维护制度，制定设备安全操作规程并落实各设备责任人。',
                    a3: '',
                    row: 3
                },
                {
                    a: '设备管理制度',
                    a1: '安全操作规程',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '设备管理制度',
                    a1: '标准和计量管理制度',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '配件管理制度',
                    a1: '配件采购',
                    a2: '应规定配件采购、检查验收、库房管理、信息追溯、配件登记及台账、索赔、电子化管理等制度。',
                    a3: '',
                    row: 6
                },
                {
                    a: '配件管理制度',
                    a1: '配件验收',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '配件管理制度',
                    a1: '库房管理',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '配件管理制度',
                    a1: '信息追溯',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '配件管理制度',
                    a1: '配件登记、台账及索赔',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '配件管理制度',
                    a1: '配件电子化管理',
                    a2: '',
                    a3: '',
                    row: 0
                },
                {
                    a: '环境保护管理制度',
                    a1: '环境保护管理制度',
                    a2: '应具有废油、废液、废气、废水（以下简称“四废”）、废蓄电池、废轮胎含石棉废料及有害垃圾等物质集中收集、有效处理和保持环境整洁的环境保护管理制度，并有效执行。',
                    a3: '',
                    row: 1
                }
            ],
            Elabel: [
                {
                    label: '检查事项',
                    prop: 'a',
                    minWidth: '30%'
                },
                {
                    label: '检查事项',
                    prop: 'a1',
                    minWidth: '30%'
                },
                {
                    label: '规定条件',
                    prop: 'a2',
                    minWidth: '30%'
                },
                {
                    label: '检查结果',
                    prop: 'a3',
                    minWidth: '20%'
                }
            ],
            Flist: [
                {
                    a: '有害物质存储区域应界定清楚。',
                    a1: '有害物质存储区域应界定清楚，必要时应有隔离、控制措施。',
                    a2: ''
                },
                {
                    a: '具有处理“四废”及采光、通风、吸尘、净化、消声的设施。',
                    a1: '作业环境以及按生产工艺配置的处理“四废”及采光、通风、吸尘、净化、消声等设施，均应符合环境保护的有关规定。',
                    a2: ''
                },
                {
                    a: '涂漆车间应设有专用的废水排放及处理设施（采用干打磨工艺的还应有粉尘收集装置和除尘设备、通风设备）。',
                    a1: '涂漆车间应设有专用的废水排放及处理设施，采用干打磨工艺的，应有粉尘收集装置和除尘设备，并应设有通风设备。',
                    a2: ''
                },
                {
                    a: '调试车间或调试工位应设置汽车尾气收集净化装置。',
                    a1: '调试车间或调试工位应设置汽车尾气收集净化装置。',
                    a2: ''
                }
            ],
            Flabel: [
                {
                    label: '检查事项',
                    prop: 'a',
                    minWidth: '35%'
                },
                {
                    label: '规定条件',
                    prop: 'a1',
                    minWidth: '35%'
                },
                {
                    label: '检查结果',
                    prop: 'a2',
                    minWidth: '30%'
                }
            ]
        }
    },
    created () {
        this.getSpanArr(this.Alist, this.Aarr, 'a')
        this.getSpanArr(this.Blist, this.Barr, 'a1')
    },
    methods: {
        objectSpanMethod1 ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                const _row = this.Aarr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        },
        objectSpanMethod2 ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 1) {
                const _row = this.Barr[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        },
        objectSpanMethodC3 ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                return {
                    rowspan: 1,
                    colspan: row.col
                }
            } else if (columnIndex === 3 || columnIndex === 4) {
                if (row.col === 3) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    }
                } else {
                    return {
                        rowspan: 1,
                        colspan: 1
                    }
                }
            }
        },
        objectSpanMethodC5_3 ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                return {
                    rowspan: row.row,
                    colspan: row.row > 0 ? 1 : 0
                }
            }
        },
        objectSpanMethodD ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                return {
                    rowspan: row.row,
                    colspan: 1
                }
            }
        },
        objectSpanMethodE ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0 || columnIndex === 2) {
                return {
                    rowspan: row.row,
                    colspan: 1
                }
            }
        },
        getSpanArr (list, spanArr, name) { // list 数据源 spanArr 空数组 name 判断的字段
            // if (this.hasConcat) {
            //     return
            // }
            // this.hasConcat = true
            let contactDot = 0
            list.forEach((item, index) => {
                item.index = index
                if (index === 0) {
                    spanArr.push(1)
                } else {
                    if (item[name] === list[index - 1][name]) {
                        spanArr[contactDot] += 1
                        spanArr.push(0)
                    } else {
                        spanArr.push(1)
                        contactDot = index
                    }
                }
            })
        }
    },
    filters: {
        categoryFilter (val) {
            if (val === '1') {
                return '一类'
            } else if (val === '2') {
                return '二类'
            } else if (val === '3') {
                return '三类'
            }
            return ''
        },
        typeFilter (val) {
            if (val === '1') {
                return '汽车维修'
            } else if (val === '2') {
                return '摩托车维修'
            } else if (val === '3') {
                return '其他机动车维修'
            }
            return ''
        }
    }
}
</script>

<style lang="less" scoped>
.inquest-info-detail {
    background: #ffffff;
    padding-bottom: 60px;
    .tab-content {
        width: 100%;
        background: #ffffff;
        padding: 10px 30px;
        box-sizing: border-box;
        &:nth-of-type(2) {
            border-top: 20px solid #EDF0F5;
            border-bottom: 20px solid #EDF0F5;
        }
        >h3 {
            text-align: left;
            margin: 0 -30px;
            padding-left: 30px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            font-size:16px;
            color:rgba(51,51,51,1);
            position: relative;
            > span {
                font-size:14px;
                font-weight:400;
                color:rgba(102,102,102,1);
            }
            .inquest-all {
                position: absolute;
                right: 20px;
                color:rgba(0,136,238,1);
                cursor: pointer;
            }
        }
        .item {
            font-size:14px;
            font-weight:400;
            color:#666;
            >span {
                font-size:14px;
                font-weight:400;
                color:#333;
            }
        }
    }
    .tab-item-table1 {
        padding: 0 15px 15px;
        .item-title {
            font-size:14px;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height:20px;
            margin-bottom: 10px;
        }
        .item-result-name {
            font-size:14px;
            font-weight:500;
            color:rgba(102,102,102,1);
            line-height:36px;
            .item-result-value {
                color:#FF626C;
            }
        }
    }
}
</style>

<style lang="less">
.inquest-info-detail {
    .el-tabs--card>.el-tabs__header {
        background: #EDF0F5;
        border: none;
        .el-tabs__nav {
            border: none;
        }
        .el-tabs__item {
            box-sizing: border-box;
            border: none;
            border-radius:3px 3px 0px 0px;
            background: #FFF;
            margin-right: 10px;
            border-top: 3px solid #FFF;
            &.is-active {
                color: #1890FF;
                border-top: 3px solid #3E94FE;
            }
        }
    }
    .el-tabs--border-card {
        border: none;
    }
    .el-tabs--border-card {
        box-shadow: none;
    }
    .el-tabs__item {
        height:44px;
        line-height: 44px;
        padding: 0 30px;
    }
    .el-row {
        margin: 15px;
    }
    .normal-tab  {
        .el-tabs__header {
            background:rgba(250,250,250,1);
        }
        .el-tabs__item {
            padding: auto 20px !important;
        }
    }
    .table .table-header-item .cell, td {
        text-align: center !important;
    }
}
</style>

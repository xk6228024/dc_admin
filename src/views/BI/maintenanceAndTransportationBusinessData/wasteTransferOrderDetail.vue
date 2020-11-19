<!-- 空白页面组件 -->
<template>
    <div class="block detailPage" style="position:initial;">
        <div class="detail_content">
            <div class="detail_model">
                <h4>单据信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>单据编号：</label>
                        <span>WX210993HW88</span>
                    </div>
                    <div class="detail_item">
                        <label>单据时间：</label>
                        <span>2020-11-22</span>
                    </div>
                    <div class="detail_item">
                        <label>转移时间：</label>
                        <span>--</span>
                    </div>
                    <div class="detail_item">
                        <label>单据状态：</label>
                        <span>未转移</span>
                    </div>
                </div>
            </div>
             <div class="detail_model noBorder">
                <h4>第一部分：废物生产单位</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>移出单位：</label>
                        <span>深圳市亿佰汽车服务有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>电话：</label>
                        <span>13244124122</span>
                    </div>
                    <div class="detail_item">
                        <label>通信地址：</label>
                        <span>广东深圳市宝安区长风路42号</span>
                    </div>
                    <div class="detail_item">
                        <label>运输单位：</label>
                        <span>深圳市范迪塞尔汽车服务有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>电话：</label>
                        <span>13831249631</span>
                    </div>
                    <div class="detail_item">
                        <label>通信地址：</label>
                        <span>广东深圳市宝安区长风路22号</span>
                    </div>
                    <div class="detail_item">
                        <label>接受单位：</label>
                        <span>深圳市戴梦得汽车服务有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>电话：</label>
                        <span>13244124888</span>
                    </div>
                    <div class="detail_item">
                        <label>通信地址：</label>
                        <span>广东深圳市宝安区啊实打实的1号</span>
                    </div>
                </div>
                <div class="infoDiv" style="padding:20px;background:#F4F7F4;">
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>固废物台账单：</label>
                            <span>GEE12000122</span>
                        </div>
                        <div class="detail_item">
                            <label>废物类别：</label>
                            <span>HMM-1213123.d</span>
                        </div>
                        <div class="detail_item">
                            <label>废物代码：</label>
                            <span>9090-022-1</span>
                        </div>
                        <div class="detail_item">
                            <label>废物特性：</label>
                            <span>易燃性</span>
                        </div>
                        <div class="detail_item">
                            <label>废物形态：</label>
                            <span>液态</span>
                        </div>
                        <div class="detail_item">
                            <label>主要有害成分：</label>
                            <span>含机率芯</span>
                        </div>
                        <div class="detail_item">
                            <label>包装方式：</label>
                            <span>桶装</span>
                        </div>
                        <div class="detail_item">
                            <label>外运目的：</label>
                            <span>处置</span>
                        </div>
                        <div class="detail_item">
                            <label>禁忌与应急措施：</label>
                            <span>防火</span>
                        </div>
                        <div class="detail_item">
                            <label>废物明细：</label>
                            <span>废机油</span>
                        </div>
                        <div class="detail_item">
                            <label>数量(吨)：</label>
                            <span>1.02</span>
                        </div>
                        <div class="detail_item">
                            <label>发运人：</label>
                            <span>深圳市益佰汽车服务</span>
                        </div>
                        <div class="detail_item">
                            <label>容量数量：</label>
                            <span>10</span>
                        </div>
                        <div class="detail_item">
                            <label>运达地：</label>
                            <span>广东深圳大石路22号</span>
                        </div>
                        <div class="detail_item">
                            <label>计划转移时间：</label>
                            <span>2020-11-22~2020-11-30</span>
                        </div>
                        <div class="detail_item">
                            <label>备注：</label>
                            <span>万事如意</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>第二部分：废物运输单位</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>第一承运人：</label>
                        <span>深圳阿斯顿汽车运输服务有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>经营许可证：</label>
                        <span>深字123440102412</span>
                    </div>
                    <div class="detail_item">
                        <label>运输终点：</label>
                        <span>广东深圳市宝安区达蒙物流园</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>第三部分：废物接受单位</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>第一承运人：</label>
                        <span>深圳阿悼香工业废物处理有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>经营许可证：</label>
                        <span>深字123440102412</span>
                    </div>
                </div>
            </div>
        </div>
        <BreadFoot :breadArr="[{title:'维修与运输业务数据',path:''},{title:'固废物转移联单',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/wasteTransferOrder')">返回</el-button>
        </BreadFoot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot'
export default {
    name: 'block',
    data () {
        return {
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

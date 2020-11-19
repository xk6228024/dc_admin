<!-- 空白页面组件 -->
<template>
    <div class="block detailPage" style="position:initial;">
        <div class="detail_content">
            <div class="detail_model">
                <h4>运输企业信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>企业名称：</label>
                        <span>团风县宏达汽车业服务有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>所在城市：</label>
                        <span>华中/湖北/黄岗</span>
                    </div>
                    <div class="detail_item">
                        <label>申请日期：</label>
                        <span>2020-02-01</span>
                    </div>
                    <div class="detail_item">
                        <label>企业地址：</label>
                        <span>麻城市大吉大道五月天</span>
                    </div>
                    <div class="detail_item">
                        <label>联系人：</label>
                        <span>阿斯顿</span>
                    </div>
                    <div class="detail_item">
                        <label>企业联系电话：</label>
                        <span>13012341234</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>代付企业信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>企业名称：</label>
                        <span>团风县宏达汽车业服务有限公司</span>
                    </div>
                    <div class="detail_item">
                        <label>所在城市：</label>
                        <span>华中/湖北/黄岗</span>
                    </div>
                    <div class="detail_item">
                        <label>代付企业类型：</label>
                        <span>维修企业</span>
                    </div>
                    <div class="detail_item">
                        <label>企业地址：</label>
                        <span>麻城市大撒旦吉大道五月天</span>
                    </div>
                    <div class="detail_item">
                        <label>联系人：</label>
                        <span>摩登</span>
                    </div>
                    <div class="detail_item">
                        <label>企业联系电话：</label>
                        <span>13012341234</span>
                    </div>
                </div>
            </div>
            <div class="detail_model">
                <h4>代付车辆信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>车牌号码：</label>
                        <span>粤B99111</span>
                    </div>
                    <div class="detail_item">
                        <label>车牌颜色：</label>
                        <span>黄色</span>
                    </div>
                    <div class="detail_item">
                        <label>车辆类型：</label>
                        <span>大型货车</span>
                    </div>
                    <div class="detail_item">
                        <label>代付金额：</label>
                        <span>5000.00</span>
                    </div>
                    <div class="detail_item">
                        <label>代付日期：</label>
                        <span>2020-11-09</span>
                    </div>
                    <div class="detail_item">
                        <label>有效周期：</label>
                        <span>2020-5-5 ~ 2022-5-5</span>
                    </div>
                </div>
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

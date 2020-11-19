<!-- 权限管理 -->
<template>
    <div class="transportOfEnterpriseDetail">
        <el-button class="goBack" @click="$router.push('/transportOfEnterpriseArchives')">返回</el-button>
        <h1>运输企业档案</h1>
        <div class="inner">
            <h4>基本信息</h4>
            <div class="clearfix pl20">
                <div class="inner_item">
                    <span class="label">企业名称：</span>
                    <span class="value">{{detailData.enterpriseName}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">经营许可证：</span>
                    <span class="value">{{detailData.enterpriseBusinessCertificate}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">经营范围：</span>
                    <span class="value">{{detailData.enterpriseOperationArea}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">所属区域：</span>
                    <span class="value">{{detailData.enterpriseRegionName}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">社会信用代码：</span>
                    <span class="value">{{detailData.enterpriseCreditIdentifier}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">详细地址：</span>
                    <span class="value">{{detailData.enterpriseOperatingAddress}}</span>
                </div>
            </div>
            <h4>联系信息</h4>
            <div class="clearfix pl20">
                <div class="inner_item">
                    <span class="label">企业联系人：</span>
                    <span class="value">{{detailData.enterpriseLinkName}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">企业传真：</span>
                    <span class="value"></span>
                </div>
                <div class="inner_item">
                    <span class="label">企业电话：</span>
                    <span class="value">{{detailData.enterpriseBusinessPhone}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">企业邮箱：</span>
                    <span class="value">{{detailData.enterpriseRegisterEmail}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">邮政编码：</span>
                    <span class="value">{{detailData.enterprisePostalcode}}</span>
                </div>
            </div>
            <h4>详细信息</h4>
            <div class="clearfix pl20">
                <div class="inner_item">
                    <span class="label">法人代表：</span>
                    <span class="value">{{detailData.enterpriseOwner}}</span>
                </div>
                <div class="inner_item">
                    <span class="label">注册资金：</span>
                    <span class="value"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'transportOfEnterpriseDetail',
    data () {
        return {
            enterpriseId: '', // 企业ID
            detailData: '', // 全部数据
            enterpriseBrandList: '', // 主修品
            center: { // 坐标经纬度
                lng: 116.409,
                lat: 39.915526
            },
            activeName: 'tab1',
            tableData: [{}]
        }
    },
    components: {
    },
    created () {
        this.enterpriseId = this.$route.query.id
        this.getData()
    },
    methods: {
        // 获取所有数据
        getData () {
            this.$post('enterprise/enterprisedetail', {
                enterpriseId: this.enterpriseId
            })
                .then(res => {
                    if (res && res.code === 0) {
                        this.detailData = res.data.enterprise
                        this.enterpriseBrandList = res.data.enterpriseBrandList
                        this.center.lng = res.data.enterprise.enterpriseAddrX || 116.409
                        this.center.lat = res.data.enterprise.enterpriseAddrY || 39.915526
                    }
                })
        },
        changeLocation () {

        },
        handleClick () {
            console.log(1)
        }
    }
}
</script>

<style lang='less' scoped>
.transportOfEnterpriseDetail {
    position: relative;
    padding: 20px;
    h1 {
        color: #666666;
        font-size: 16px;
        border-bottom: 1px solid #E8ECEF;
        padding-bottom: 26px;
    }
    .tab_group {
        margin-top: 10px;
    }
    .inner {
        padding: 10px;
    }
    .map_box {
        float: left;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        padding: 10px;
        .map_view {
            width:330px;
            height:214px;
        }
    }
    .img_group {
        .label {
            float: left;
            line-height: 120px;
            color: #252631;
        }
        .value {
            float: left;
            margin-left: 10px;
            img {
                width: 102px;
                height: 102px;
                padding: 9px;
                border: 1px solid #eeeeee;
                border-radius: 4px;
                margin-right: 35px;
            }
        }
    }
    h4 {
        font-size: 14px;
        // line-height: 50px;
        padding: 20px 0 10px;
        color: #252631;
    }
    .inner_item {
        width: 33%;
        float: left;
        line-height: 40px;
        .label {
            color: #252631;
        }
        .value {
            color: #666666;
            margin-left: 5px;
            text-overflow: ellipsis;
            white-space: normal;
            word-break: break-all;
        }
    }
    .second {
        .inner_item {
            width: 50%;
        }
    }
}
</style>
<style lang='less'>
.transportOfEnterpriseDetail {
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
    .goBack {
        position: absolute;
        right: 20px;
        height: 36px;
        line-height: 1;
        width: 78px;
        z-index: 3;
        padding: 0;
    }
}
</style>

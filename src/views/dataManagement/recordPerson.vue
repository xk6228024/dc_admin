<!-- 备案信息查询 -->
<template>
    <div class="recordPerson">
        <div class="content">
            <div class="tab_inner">
                <div class="info-title">基本信息</div>
                <div class="info-content">
                    <el-row>
                        <el-col :span="8">
                            <div class="item-name">姓名：</div>
                            <div class="item-value">{{this.info.baseInfo.personName}}</div>
                        </el-col>
                        <el-col :span="8" style="height:32px;">
                            <div class="item-name">性别：</div>
                            <div class="item-value">{{this.info.baseInfo.gender}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">文化程序：</div>
                            <div class="item-value">{{this.info.baseInfo.educationDegree}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">手机号码：</div>
                            <div class="item-value">{{this.info.baseInfo.personMobile}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">身份证号：</div>
                            <div class="item-value">{{this.info.baseInfo.personIdcardNumber}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">所学专业：</div>
                            <div class="item-value">{{this.info.baseInfo.personEducationMajor}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="item-name">岗位：</div>
                            <div class="item-value">{{this.info.baseInfo.personPost}}</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="tab_inner">
                <div class="info-title">证书信息</div>
                <div class="info-content clearfix">
                    <div class="img_item" v-for="item in info.imgList1" :key="item.id">
                        <div class="img_border" @click="$lookImg(item.url)">
                            <img :src="item.url">
                        </div>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import BreadFoot from '@/components/BreadFoot.vue'
export default {
    name: 'recordPerson',
    components: {
        // BreadFoot
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '人员信息', path: '' }
            ],
            info: {
                baseInfo: {
                },
                imgList1: [
                    {
                        url: '',
                        name: '相关专业大专及以上学历证明材 料或机动车检测维修工程师证'
                    },
                    {
                        url: '',
                        name: '学历证明材料或技术职称或 职业资格证明文件'
                    },
                    {
                        url: '',
                        name: '机动车检测维修士或汽车维修工 （技师或高级技师)证'
                    },
                    {
                        url: '',
                        name: '机动车驾驶证'
                    },
                    {
                        url: '',
                        name: '特种作业操作证（电工）证书或 电动汽车维修工（高级）证书 维修经营相应条件的承诺书'
                    },
                    {
                        url: '',
                        name: '汽车维修士或汽车维修工证书'
                    },
                    {
                        url: '',
                        name: '安全生产知识和管理能力考核 合格证'
                    }
                ]
            }
        }
    },
    created () {
        // this.previewVisible = true
        this.getData()
    },
    methods: {
        goBack () {
            this.$router.back()
        },
        getData () {
            this.$get(`enterpriseRecord/person/view/${this.$route.query.id}`).then(res => {
                this.info.baseInfo = res.data || {}
                this.info.imgList1[0].url = res.data.isHavingVehicleFixingEngineerCert
                this.info.imgList1[1].url = res.data.educationDegreeCert
                this.info.imgList1[2].url = res.data.personCertImgurl
                this.info.imgList1[3].url = res.data.driverLicenseImgurl
                this.info.imgList1[4].url = res.data.isHavingSpecialOperationFixCert
                this.info.imgList1[6].url = res.data.isHavingShenzhenProduceManagementCert
                this.info.imgList1[5].url = res.data.vehicleFixingCert
            })
        }
    }
}
</script>
<style lang="less">
.recordPerson {
    .content {
        padding-bottom: 20px;
    }
    .tab_inner {
        background: #ffffff;
        border-bottom: 20px solid #edf0f5;
        .info-title {
            padding: 0 30px;
            height: 54px;
            line-height: 54px;
            text-align: left;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            border-bottom: 1px solid #E9E9E9;
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
        .img_item {
            cursor: pointer;
            float: left;
            margin-right: 45px;
            margin-bottom: 15px;
            width: 162px;
            height: 248px;
            .img_border {
                width: 144px;
                padding: 8px;
                height: 144px;
                border: 1px solid rgba(0,0,0,0.15);
                border-radius: 4px;
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            p {
                color: #666666;
                margin-top: 10px;
            }
        }
    }
    .tab_inner:last-of-type {
        border-bottom: 0;
    }
}
</style>

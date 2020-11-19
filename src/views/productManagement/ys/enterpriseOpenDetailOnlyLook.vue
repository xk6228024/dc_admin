<!-- 编辑代理商 -->
<template>
    <div class="enterpriseOpenDetail">
        <h3 class="detail-title">系统配置信息
            <el-button class="fr back" @click="$router.push('/vtamsEnterprise')">关闭</el-button>
        </h3>
        <div class="form">
            <el-row>
                <el-col :span="8">
                    <div>管理员账号: {{ enterpriseInfo.enterpriseUsername }}</div>
                </el-col>
                <el-col :span="8">
                    <div>管理员密码: ******</div>
                </el-col>
                <el-col :span="8">
                    <div>省平台企业编码: </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="line"></div>
                </el-col>
                <el-col :span="24">
                    <h3>基础信息</h3>
                </el-col>
                <el-col :span="8">
                    <div>企业名称: {{ enterpriseInfo.enterpriseName }}</div>
                </el-col>
                <el-col :span="8">
                    <div>企业简称: {{ enterpriseInfo.enterpriseJcShortName }}</div>
                </el-col>
                <el-col :span="8">
                    <div>所在地区: {{ enterpriseInfo.region }}</div>
                </el-col>
                <el-col :span="8">
                    <div>社会信用代码: {{ enterpriseInfo.enterpriseCreditIdentifier }}</div>
                </el-col>
                <el-col :span="8">
                    <div>经营许可证号: {{ enterpriseInfo.enterpriseBusinessCertificate }}</div>
                </el-col>
                <el-col :span="8">
                    <div>许可证有效期: {{ enterpriseInfo.enterpriseCertificate }}</div>
                </el-col>
                <el-col :span="8">
                    <div>经营性质: {{ economicsList.find(val => val.value === enterpriseInfo.enterpriseEconomicCategory) && (economicsList.find(val => val.value === enterpriseInfo.enterpriseEconomicCategory)).label }}</div>
                </el-col>
                <el-col :span="8">
                    <div>营业时间: {{ enterpriseInfo.enterpriseJcBusiness }}</div>
                </el-col>
                <el-col :span="8">
                    <div>负责人: {{ enterpriseInfo.enterpriseOwner }}</div>
                </el-col>
                <el-col :span="8">
                    <div>负责人电话: {{ enterpriseInfo.enterpriseOwnerPhone }}</div>
                </el-col>
                <el-col :span="8">
                    <div>联系人: {{ enterpriseInfo.enterpriseLinkName }}</div>
                </el-col>
                <el-col :span="8">
                    <div>联系人电话: {{ enterpriseInfo.enterpriseLinkMobile }}</div>
                </el-col>
                <el-col :span="8">
                    <div>企业业务电话: {{ enterpriseInfo.enterpriseBusinessPhone }}</div>
                </el-col>
                <el-col :span="8">
                    <div>电子邮箱: {{ enterpriseInfo.enterpriseRegisterEmail }}</div>
                </el-col>
                <el-col :span="8">
                    <div>邮政编码: {{ enterpriseInfo.enterprisePostalcode }}</div>
                </el-col>
                <el-col :span="8">
                    <div>经营地址: {{ enterpriseInfo.enterpriseOperatingAddress }}</div>
                </el-col>
                <el-col :span="24">
                    <div>经营范围: {{ enterpriseInfo.enterpriseOperationArea }}</div>
                </el-col>
                <el-col :span="24">
                    <div>企业概况: {{ enterpriseInfo.enterpriseIntroduction }}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="line"></div>
                </el-col>
                <el-col :span="24">
                    <h3>扩展信息</h3>
                </el-col>
                <el-col :span="8">
                    <div>法人代表: {{ enterpriseInfo.enterpriseLegalPerson }}</div>
                </el-col>
                <el-col :span="8">
                    <div>注册资金: {{ enterpriseInfo.enterpriseRegisteredCapital }}</div>
                </el-col>
                <el-col :span="8">
                    <div>拥有车辆数: </div>
                </el-col>
                <el-col :span="24">
                    <div>照片: </div>
                    <div class="photo clearfix">
                        <div class="image-pic photo-one">
                            <img :src="enterpriseInfo.enterpriseBusinessLicense" width="100%"
                            @click="$lookImg(enterpriseInfo.enterpriseBusinessLicense)" class="pic">
                        </div>
                    </div>
                    <div class="photo clearfix">
                        <div class="image-pic photo-two">
                            <img :src="enterpriseInfo.enterpriseBusinessPermit" width="100%"
                            @click="$lookImg(enterpriseInfo.enterpriseBusinessPermit)" class="pic">
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enterpriseOpenDetailOnlyLook',
    data () {
        return {
            allCityList: [], // 城市
            economicsList: [
                { value: 100, label: '内资' },
                { value: 110, label: '国有全资' },
                { value: 120, label: '集体全资' },
                { value: 130, label: '股份合作' },
                { value: 140, label: '联营' },
                { value: 141, label: '国有联营' },
                { value: 142, label: '集体联营' },
                { value: 143, label: '国有与集体联营' },
                { value: 149, label: '其他联营' },
                { value: 150, label: '有限责任(公司)' },
                { value: 159, label: '其他有限责任(公司)' },
                { value: 160, label: '股份有限(公司)' },
                { value: 170, label: '私有' },
                { value: 171, label: '私有独资' },
                { value: 172, label: '私有合伙' },
                { value: 173, label: '私营有限责任(公司)' },
                { value: 174, label: '私营股份有限(公司)' },
                { value: 179, label: '其他私有' },
                { value: 190, label: '其他内资' },
                { value: 200, label: '港、澳、台投资' },
                { value: 210, label: '内地和港、澳或台合资' },
                { value: 220, label: '内地和港、澳或台合作' },
                { value: 230, label: '港、澳或台独资' },
                { value: 240, label: '港、澳或台投资股份有限(公司)' },
                { value: 290, label: '其他港澳台投资' },
                { value: 300, label: '国外投资' },
                { value: 310, label: '中外合资' },
                { value: 320, label: '中外合作' },
                { value: 330, label: '外资' },
                { value: 340, label: '国外投资股份有限(公司)' },
                { value: 390, label: '其他国外投资' },
                { value: 900, label: '其他' }
            ],
            uploadURL: window.uploadURL,
            enterpriseInfo: {}
        }
    },
    created () {
        this.getAllCity()
    },
    methods: {
        getAllCity () {
            this.$get('list/regionProvinceList').then(res => {
                if (res.code === 0) {
                    this.allCityList = res.data
                    this.getDetail()
                }
            })
        },
        getDetail () {
            this.$post(`/ent/vtams/view/${this.$route.query.id}`, {
            }).then(res => {
                if (res.code === 0) {
                    res.data.enterpriseEconomicCategory = Number(res.data.enterpriseEconomicCategory)
                    if (res.data.enterpriseProvince && res.data.enterpriseCity) {
                        let a = this.allCityList.find(val => {
                            return val.regionId === res.data.enterpriseProvince
                        })
                        let b = this.allCityList.find(val => {
                            return val.regionId === res.data.enterpriseCity
                        })
                        res.data.region = a.regionName + b.regionName
                    } else {
                        res.data.region = ''
                    }
                    if (res.data.enterpriseCertificateS && res.data.enterpriseCertificateE) {
                        res.data.enterpriseCertificate = res.data.enterpriseCertificateS + '~' + res.data.enterpriseCertificateE
                    }
                    if (res.data.enterpriseJcBusinessS && res.data.enterpriseJcBusinessE) {
                        res.data.enterpriseJcBusiness = res.data.enterpriseJcBusinessS + '~' + res.data.enterpriseJcBusinessE
                    }
                    this.enterpriseInfo = res.data
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.enterpriseOpenDetail {
    h5 {
        color: #252631;
        font-size: 14px;
    }
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 30px;
        // border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#666666;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
    }
    .form {
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px 30px;
        color: #666;
        .line {
            width: 100%;
            height: 1px;
            background: #E8E8E8;
            margin: 10px 0;
        }
        .bot {
            border: 1px solid #E8E8E8;
        }
        .s-title {
            margin-top: 10px;
        }
        .photo {
            float: left;
            width: 100px;
            height: 100px;
            margin-right: 20px;
            background:rgba(0,0,0,0.02);
            border-radius:4px;
            border:1px solid rgba(0,0,0,0.15);
            text-align: center;
            .image-upload {
                width: 100%;
                height: 100%;
                position: relative;
                &.photo-one::after{
                    content: '营业执照';
                    position: absolute;
                    width: 100px;
                    height: 30px;
                    bottom: -30px;
                    left: 0;
                    z-index: 999;
                }
                &.photo-two::after{
                    content: '经营许可证';
                    position: absolute;
                    width: 100px;
                    height: 30px;
                    bottom: -30px;
                    left: 0;
                    z-index: 999;
                }
            }
        }
        .image-pic {
            float: left;
            width: 100px;
            height: 100px;
            margin-right: 20px;
            position: relative;
            .el-icon-error {
                position: absolute;
                top: -5px;
                right: -5px;
                cursor: pointer;
            }
            &.photo-one::after{
                content: '营业执照';
                position: absolute;
                width: 100px;
                height: 30px;
                bottom: -30px;
                left: 0;
                z-index: 999;
            }
            &.photo-two::after{
                content: '经营许可证';
                position: absolute;
                width: 100px;
                height: 30px;
                bottom: -30px;
                left: 0;
                z-index: 999;
            }
        }
    }
}
</style>

<style lang="less">
.enterpriseOpenDetail {
    .el-col {
        font-size:14px;
        font-weight:400;
        color:rgba(38,38,38,1);
        line-height:22px;
        margin: 8px 0;
    }
}
</style>

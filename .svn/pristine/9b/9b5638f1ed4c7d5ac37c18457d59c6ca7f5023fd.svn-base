<!-- 运营通告详情 -->
<template>
    <div class="marketingActivitiesDetail detailPage">
        <div class="detail_header">
            <el-button type="primary"  class="goBack btn" >保 存</el-button>
            <el-button class="btn" >关 闭</el-button>
        </div>
        <div class="detail_content">
            <div class="detail_model"  style="border:none;" >
                <h4>活动基本信息</h4>
                <div class="clearfix iptWrap">
                    <div class="ipt_item">
                        <label>活动名称：</label>
                        <span>全城一元洗车特惠</span>
                    </div>
                    <div class="ipt_item">
                        <label>活动价格：</label>
                        <span>999</span>
                    </div>
                    <div class="ipt_item">
                        <label>原价：</label>
                        <span>555</span>
                    </div>
                    <div class="ipt_item">
                        <label>活动时间：</label>
                        <span>2019-08-01 12:00:00 ~ 2019-10-07 24:00:00</span>
                    </div>
                    <div class="ipt_item">
                        <label>发布数量：</label>
                        <span>999</span>
                    </div>
                    <div class="ipt_item">
                        <label>限购数量：</label>
                        <span>1</span>
                    </div>
                    <div class="ipt_item">
                        <label>轮播位置：</label>
                        <span>随机</span>
                    </div>
                    <div class="ipt_item">
                        <label>活动区域：</label>
                        <span>深圳，广州</span>
                    </div>
                    <div class="clearfix"></div>
                    <div class="ipt_item">
                        <label>活动区域：</label>
                        <div class="entBox">
                            <div class="item" v-for="item in entList" :key="item.id">
                                {{item.name}}
                                <i class="el-icon-close"></i>
                            </div>
                        </div>
                    </div>
                    <div class="ipt_item">
                        <label>活动海报：</label>
                        <img src="../../../assets/img/default.png" class="dpb imgBoder" width="330" height="80">
                    </div>
                    <div class="clearfix"></div>
                    <div class="ipt_item">
                        <label>活动详情：</label>
                        <div class="entBox content">
                            asd
                        </div>
                    </div>
                </div>
            </div>
            <div class="show_box">
                <!-- <div class="show_inner"> -->
                <el-scrollbar class="show_inner"  :style="{'padding-top':detailType==2?'25px':0,'height':detailType==2?'567px':'592px'}">
                    <!-- <img src=".././../../assets/img/jch_02.png" alt="" width="100%"> -->
                    <div class="home_detail" v-if="detailType===1">
                        <img src=".././../../assets/img/jch_02.png" alt="" width="100%">
                        <div class="show_cover" :class="{'opacity':form.pic}" >
                            <div class="show_banner">
                                <img :src="form.pic" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="home_detail"  v-if="detailType===2">
                        <div v-html="form.content" style="padding-right:17px;"></div>
                    </div>
                    <img src=".././../../assets/img/jch_04.png" class="select" :class="{noselect:detailType==2}">
                    <img src=".././../../assets/img/jch_05.png" @click="changeType" class="select" :class="{noselect:detailType==1}">
                </el-scrollbar>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'marketingActivitiesDetail',
    data () {
        return {
            detailType: 1,
            entList: [
                {
                    isSelect: true,
                    name: '深圳超级骊维修汽车厂'
                },
                {
                    isSelect: false,
                    name: '弗洛伦蒂诺'
                },
                {
                    isSelect: false,
                    name: '奥特实体店4阿斯顿'
                }
            ],
            form: {
                pic: '',
                a: '',
                b: ''
            }
        }
    },
    components: {
    },
    created () {
        // console.log(process.env)
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
        changeType () {
            if (this.detailType === 1) {
                this.detailType = 2
            } else {
                this.detailType = 1
            }
        },
        // 远程搜索企业
        searchEnt () {
            console.log(123)
        },
        selectCity (index) {
            this.cityIndex = index
        },
        addEnt () {
            this.showAlert = true
        },
        alertConfirm () {
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        }
    }
}
</script>
<style lang="less" scoped>
.marketingActivitiesDetail {
    min-width: 1200px;
    .iptWrap {
        width: calc(100% - 300px);
        .form_item {
            margin-right: 50px;
        }
        .ipt_item {
            width: 420px;
            float: left;
            line-height: 40px;
            label {
                color: #262626;
            }
        }
        .entBox {
            height: 180px;
            width: 300px;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
            padding: 0 10px;
            &.content {
                width: 740px;
                height: 300px;
            }
            .item {
                line-height: 28px;
            }
            i {
                color: red;
                cursor: pointer;
                margin-left: 10px;
            }
        }
        .edit_input {
            width: 320px;
        }
    }
    .show_box {
        position: absolute;
        top: 100px;
        right: 32px;
        background: url(../../../assets/img/jch_01.png);
        background-size: 100% 100%;
        width: 366px;
        height: 652px;
        .show_inner {
            .el-scrollbar__wrap {
                padding-right: 0;
            }
            position: absolute;
            top: 20px;
            left: 31px;
            // background: url(../../../assets/img/jch_02.png);
            width: 304px;
            height: 592px;
            border-radius: 30px;
            overflow: hidden;
            overflow-x: hidden;
            overflow-y: auto;
            .select {
                position: absolute;
                cursor: pointer;
                bottom: 12px;
                right: 160px;
            }
            .noselect {
                right: 67px;
            }
            .home_detail {
                position: relative;
                // height: 592px;
                width: 100%;
                .show_cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    &.opacity {
                        background: rgba(0,0,0,0.5)
                    }
                }
                .show_banner {
                    position: absolute;
                    top: 250px;
                    img {
                        width: 100%;
                        height: 88px;
                    }
                }
                // .opacity {
                //     opacity: .5;
                //     filter: alpha(opacity=50);
                // }
            }
        }
    }
    .mr100 {
        margin-right: 135px;
    }
    .w900 {
        width: 900px;
    }
    .w350 {
        width: 350px;
    }
    // .ueditor {
    //     width: 898px;
    //     line-height: 20px;
    //     height: 400px;
    // }
    .text-content {
        min-height: 400px;
        padding: 4px 12px;
        border:1px solid #D9D9D9;
        border-radius: 4px;
        overflow: auto;
    }
    .detail_model {
        position:relative;
        .audit-icom{
            position:absolute;
            left: 330px;
            top: 58px;
        }
    }
    .avatar-uploader, .avatar-uploader-tips {
        vertical-align: middle;
    }
    .avatar-uploader-tips {
        display: inline-block;
        width: 236px;
        margin-left: 16px;
        h6 {
            color:#778CA2;
            font-size: 14px;
        }
        p {
            color: #98A9BC;
            font-size: 12px;
            line-height: 22px;
        }
    }
    .upload_tip {
        float: left;
        margin-left: 10px;
        color: #8C8C8C;
        font-size: 12px;
    }
}
</style>
<style lang="less">
.marketingActivitiesDetail {
    .modal {
        z-index: 999;
    }
    .show_inner {
        .el-scrollbar__wrap {
            padding-right: 0;
        }
    }
    .avatar-uploader{
        height: 100px;
        display: inline-block;
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 90px;
            width: 340px;
            img {
                width:100%;
                height: 100%;
            }
        }
        .el-upload-list {
            position: absolute;
            bottom: -20px;
            left: 10px;
        }
        .el-upload:hover {
            border-color: #4D7CFE;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 340px;
            height: 90px;
            line-height: 90px;
            text-align: center;
        }
    }
    .form {
        .el-select {
            width: 100%;
        }
        .el-input__inner {
            width: 100%;
        }
        .el-date-editor{
            .el-range-input {
                width: 41%;
            }
        }
    }
    .alert-content {
        padding-top: 0;
    }
}
    .el-popover {
        height: 200px;
        overflow-y: scroll;
    }
</style>

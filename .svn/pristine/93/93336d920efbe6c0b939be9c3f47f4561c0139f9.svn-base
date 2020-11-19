<!-- 首页 -->
<template>
    <div class="home" style="height:100%" id="home">
        <el-row :gutter="20" style=";margin:0;">
            <el-col :span="18">
                <el-row :gutter="20" class="link-row">
                    <el-col :span="8">
                        <router-link to="/dataBoard">
                            <div class="link-blok">
                                <img src="@/assets/images/shujukanban.png">
                                <p>数据看板</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/operateBoard">
                            <div class="link-blok">
                                <img src="@/assets/images/yunyingkanban.png">
                                <p>运营看板</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/block">
                            <div class="link-blok">
                                <img src="@/assets/images/chanpinkanban.png">
                                <p>产品看板</p>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="link-row">
                    <el-col :span="8">
                        <router-link to="/maintenanceOfEnterpriseArchives">
                            <div class="link-blok">
                                <img src="@/assets/images/qiyeshuju.png">
                                <p>维修企业数据</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/carData">
                            <div class="link-blok">
                                <img src="@/assets/images/cheliangshuju.png">
                                <p>车辆数据</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/ownerInformation">
                            <div class="link-blok">
                                <img src="@/assets/images/chezhushuju.png">
                                <p>车主数据</p>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="link-row">
                    <el-col :span="8">
                        <router-link to="/repairEnterpriseSys">
                            <div class="link-blok">
                                <img src="@/assets/images/chaojili.png">
                                <p>维修企业服务系统<br>运行情况</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/block">
                            <div class="link-blok">
                                <img src="@/assets/images/jinchehui.png">
                                <p>金车汇<br>运行情况</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/block">
                            <div class="link-blok">
                                <img src="@/assets/images/yunshuqiye.png">
                                <p>运输企业服务系统<br>运行情况</p>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="link-row">
                    <el-col :span="8">
                        <router-link to="/operateServiceRecord">
                            <div class="link-blok">
                                <img src="@/assets/images/yunyingfuwu.png">
                                <p>运营服务记录</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/block">
                            <div class="link-blok">
                                <img src="@/assets/images/waiyanshebei.png">
                                <p>外延设备销售</p>
                            </div>
                        </router-link>
                    </el-col>
                    <el-col :span="8">
                        <router-link to="/evaluateFeedback">
                            <div class="link-blok">
                                <img src="@/assets/images/chanpinfankui.png">
                                <p>产品反馈跟踪</p>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <div class="register-notice">
                    <h6>系统动态</h6>
                    <el-scrollbar class="register-scroll">
                        <ul class="register-notice-list" v-if="registerNotice && registerNotice.length">
                            <li class="register-notice-list-item" v-for="item in registerNotice" :key="item.id">
                                <div class="register_right">
                                    <span class="name" @click="goDetail(item)">{{item.registerUserName}}</span>
                                    &nbsp;注册了&nbsp;<span class="system">{{item.registerUserTypeText}}</span>&nbsp;用户
                                </div>
                                <span class="time register_time">{{item.intervalValue}}</span>
                            </li>
                        </ul>
                        <div class="empty" v-else>
                            <img src="@/assets/img/empty-page.png">
                            <p>抱歉，页面暂无内容…</p>
                        </div>
                    </el-scrollbar>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin:0;">
            <el-col :span="12" style="height:100%;">
                <div class="operate-service" style="height:100%;">
                    <h6>服务记录
                        <i class="el-icon-more fr" style="color:#8C8C8C;line-height:57px;cursor:pointer;" @click="$router.push('/operateServiceRecord')"></i>
                    </h6>
                    <el-scrollbar class="scroll">
                        <ul class="operate-service-list" v-if="operateService && operateService.length">
                            <li class="operate-service-list-item" v-for="(item, index) in operateService" :key="index">
                                <div class="item-title">
                                    <img src="@/assets/images/chanpinfankui.png">
                                    <span class="name">{{item.areaUserName}}</span>
                                    <span class="content"> 在 {{item.enterpriseName}} 进行了 {{item.serviceRecordType|recordTypeFilter}} 运营服务</span>
                                </div>
                                <span class="time">{{item.time}}</span>
                            </li>
                        </ul>
                        <div class="empty" v-else>
                            <img src="@/assets/img/empty-page.png">
                            <p>抱歉，页面暂无内容…</p>
                        </div>
                    </el-scrollbar>
                </div>
            </el-col>
            <el-col :span="12" style="height:100%;">
                <div class="operate-notice" style="height:100%;">
                    <h6>运营通告
                        <i class="el-icon-more fr" style="color:#8C8C8C;line-height:57px;cursor:pointer;" @click="$router.push('/operateNotice')"></i>
                    </h6>
                    <el-scrollbar class="scroll">
                        <ul class="operate-notice-list" v-if="operateNotice && operateNotice.length">
                            <li class="operate-notice-list-item" v-for="(item, index) in operateNotice" :key="index">
                                <div class="item-title" @click="goNoticeDetail(item.noticeId)">
                                    <a style="cursor:pointer;">{{item.noticeTitle}}</a>
                                </div>
                                <span class="time">{{item.startTime | filterTime('yyyy-mm-dd')}}</span>
                            </li>
                        </ul>
                        <div v-else class="operate-notice-list">
                            <div class="empty">
                                <img src="@/assets/img/empty-page.png">
                                <p>抱歉，页面暂无内容…</p>
                            </div>
                        </div>
                    </el-scrollbar>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            registerNotice: [],
            operateNotice: [
            ],
            operateService: [
            ]
        }
    },
    components: {
    },
    created () {
        this.getRegisterList()
        this.getNoticeList()
        this.$post('home/workService', {
            enterpriseName: '',
            regionId: ''
        }).then(res => {
            this.operateService = res.data || []
        })
    },
    mounted () {
    },
    filters: {
        recordTypeFilter (val) {
            let str = ''
            let recordType = [
                {
                    label: '复训',
                    value: '2'
                },
                {
                    label: '拜访',
                    value: '3'
                },
                {
                    label: '初装培训',
                    value: '4'
                }
            ]
            recordType.forEach(e => {
                if (val - 0 === e.value - 0) {
                    str = e.label
                }
            })
            return str
        }
    },
    watch: {
    },
    methods: {
        // 跳转公告详情
        goNoticeDetail (id) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('notice:detail')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push('/operateNoticeDetail?id=' + id)
        },
        // 跳转企业详情
        goDetail (item) {
            if (item.registerUserType === 1) {
                // 权限校验**********************************************************
                if (!this.$checkAuth('enterprise:view')) {
                    this.$msg({
                        type: 'error',
                        message: '你没有该项权限'
                    })
                    return
                }
                this.$router.push('/maintenanceOfEnterpriseDetail?id=' + item.registerId)
            }
        },
        // 获取注册用户数据
        getRegisterList () {
            this.$post('/home/finduserregister', {
                registerUserType: ''
            })
                .then(res => {
                    if (res.code === 0) {
                        this.registerNotice = res.data
                    }
                })
        },
        // 获取通告列表
        getNoticeList () {
            this.$post('/home/notice', {})
                .then(res => {
                    if (res.code === 0) {
                        this.operateNotice = res.data
                    }
                })
        }
    }
}
</script>

<style lang='less' scoped>
.listTitle () {
    h6 {
        font-weight: bold;
        height:56px;
        line-height: 56px;
        border-bottom: 1px solid #E8E8E8;
        padding: 0 32px;
        font-size: 16px;
        color: #262626;
    }
}
.home {
    .link-row {
        margin-bottom: 20px;
        .link-blok {
            height: 78px;
            background: #fff;
            border-radius:2px;
            font-size: 16px;
            font-weight: bold;
            padding-top: 22px;
            padding-left: 80px;
            cursor: pointer;
            box-shadow:0px 0px 0px 0px rgba(0,0,0,0);
            transition: all .2s;
            &:hover {
                box-shadow:0px 2px 8px 1px rgba(0,0,0,0.09);
            }
            img {
                width: 54px;
                height: 54px;
            }
            p {
                display: inline-block;
                margin-left: 30px;
                text-align: left;
                color: #262626;
            }
            img, p {
                vertical-align: middle;
            }
        }
    }
    .register-notice {
        background: #fff;
        border-radius:2px;
        .listTitle();
        .register-notice-list {
            padding: 0 10px 0 32px;
            .register-notice-list-item {
                border-bottom: 1px solid #E8E8E8;
                padding: 24px 0;
                color: #595959;
                font-size: 14px;
                position:relative;
                .name {
                    color: #4D7CFE;
                    cursor:pointer;
                }
                // .time {
                //     position: absolute;
                //     right: 0;
                //     top: 24px;
                //     width: 90px;
                //     color: #8C8C8C;
                //     text-align: right;
                // }
            }
        }
    }
    .operate-notice {
        background: #fff;
        border-radius:2px;
        .listTitle();
        .operate-notice-list {
            padding: 0 32px;
            .operate-notice-list-item {
                border-bottom: 1px solid #E8E8E8;
                padding: 14px 0;
                color: #595959;
                font-size: 14px;
                position: relative;
                .item-title {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 90px;
                    a {
                        color: #595959;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                            color: #4D7CFE;
                        }
                    }
                }
                .time {
                    position: absolute;
                    right: 0;
                    top: 15px;
                    color: #8C8C8C;
                }
            }
        }
    }
    .operate-service {
        background: #fff;
        border-radius:2px;
        .listTitle();
        .operate-service-list {
            padding: 0 32px;
            .operate-service-list-item {
                border-bottom: 1px solid #E8E8E8;
                padding: 14px 0;
                color: #595959;
                font-size: 14px;
                position: relative;
                .item-title {
                    color: #595959;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-right: 90px;
                    img {
                        width: 32px;
                        height: 32px;
                        margin-right: 16px;
                        border-radius: 50%;
                    }
                    .name {
                        color: #4D7CFE;
                    }
                    img, .name, .content {
                        vertical-align: middle;
                    }
                }
                .time {
                    position: absolute;
                    right: 0;
                    top: 21px;
                    color: #8C8C8C;
                }
            }
        }
    }
    .register_right {
        margin-right: 100px;
    }
    .register_time {
        position: absolute;
        right: 0;
        top: 24px;
        width: 90px;
        color: #8C8C8C;
        text-align: right;
    }
}
@media screen and (max-width: 1600px) {
    .home {
        .link-row {
            .link-blok {
                padding-left: 46px;
                p {
                    margin-left: 16px;
                }
            }
        }
    }
}
@media screen and (max-width: 1400px) {
    .home {
        .link-row {
            .link-blok {
                padding-left: 24px;
                height: 56px;
                font-size: 14px;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
        .register-scroll {
            height: 315px;
        }
        .register_right {
            margin-right: 5px;
            margin-bottom: 5px;
        }
        .register_time {
            position: relative;
            top: 10px;
        }
    }
}
</style>
<style lang="less">
#home {
    .empty {
        text-align: center;
        margin-top: 60px;
        p {
            margin-top: 20px;
            font-size: 12px;
            color: #8C8C8C;
        }
    }
    .scroll {
        height:230px;
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
    .register-scroll {
        height:404px;
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
    .el-scrollbar__view {
        height: auto;
    }
}
@media screen and (max-width: 1400px) {
    #home {
        .register-scroll {
            height: 315px;
        }
        .scroll {
            height: 180px;
        }
        .empty  {
            margin-top: 30px;
        }
    }
}
</style>

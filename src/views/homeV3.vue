<!-- 空白页面组件 -->
<template>
    <div class="homeV3">
        <div class="header clearfix">
            <div class="main-title fl"  id="main_tittle">
                <img src="../assets/img/zclogo.svg" alt="" class="vam llogo">
                <span class="icon iconfont iconlogowenzi vam logoz" id="main_tittle_icon"></span>
                <span class="subTitle">中车信息服务运营系统 V1.0.1</span>
            </div>
            <div class="fr rightBar">
                <div class="setting">设置
                    <img src="../assets/imgV3/icon_down.png" width="16">
                </div>
                <div class="weather">
                    南山
                    <img src="../assets/imgV3/icon8.png" width="24">
                    晴转多云 17~25℃
                </div>
            </div>
        </div>
        <div class="content">
            <div class="item" v-for="item in itemList" :key="item.name" @click="$router.push('/home')">
                <img :src="item.icon" width="60">
                <div>{{item.name}}</div>
            </div>
        </div>
        <div class="footer">
            ©2019 中车信息体验设计部
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeV3',
    data () {
        return {
            itemList: [
                {
                    icon: require('../assets/imgV3/icon_1.png'),
                    name: '运输车辆'
                },
                {
                    icon: require('../assets/imgV3/icon_2.png'),
                    name: '广告信息'
                },
                {
                    icon: require('../assets/imgV3/icon_3.png'),
                    name: '再交易车辆'
                },
                {
                    icon: require('../assets/imgV3/icon_4.png'),
                    name: '金融保险'
                },
                {
                    icon: require('../assets/imgV3/icon_5.png'),
                    name: '综合信息'
                },
                {
                    icon: require('../assets/imgV3/icon_6.png'),
                    name: '配件设备'
                },
                {
                    icon: require('../assets/imgV3/icon_7.png'),
                    name: '技师信息'
                },
                {
                    icon: require('../assets/imgV3/icon_8.png'),
                    name: '物流信息'
                },
                {
                    icon: require('../assets/imgV3/icon_9.png'),
                    name: '中车主数据'
                },
                {
                    icon: require('../assets/imgV3/icon_10.png'),
                    name: '权限UC'
                },
                {
                    icon: require('../assets/imgV3/icon_11.png'),
                    name: '服务运营'
                },
                {
                    icon: require('../assets/imgV3/icon_12.png'),
                    name: 'GTP'
                },
                {
                    icon: require('../assets/imgV3/icon_13.png'),
                    name: 'BI-数据统计'
                }
            ]
        }
    },
    components: {
    },
    created () {
        if (process.env.VUE_APP_MODE !== 'show') {
            localStorage.menuList = JSON.stringify(
                [
                    {
                        name: '运输车辆',
                        children: [
                            {
                                name: '城市业务管理',
                                icon: 'icontongjifenxi',
                                children: [
                                    {
                                        name: '城市业务开通',
                                        url: 'vtamsEnterprise2'
                                    }
                                ]
                            },
                            {
                                name: '企业配置管理',
                                icon: 'icontongjifenxi',
                                children: [
                                    {
                                        name: '维修企业配置',
                                        url: 'vtamsEnterprise?entType=1'
                                    },
                                    {
                                        name: '检测企业配置',
                                        url: 'vtamsEnterprise?entType=2'
                                    },
                                    {
                                        name: '运输企业配置',
                                        url: 'vtamsEnterprise?entType=3'
                                    },
                                    {
                                        name: '维护合格证发放记录',
                                        url: 'certificateIssuance'
                                    },
                                    {
                                        name: '报告单发放',
                                        url: 'reportData'
                                    }
                                ]
                            },
                            {
                                name: '识别卡管理',
                                icon: 'icontongjifenxi',
                                children: [
                                    // {
                                    //     name: '识别卡入库管理',
                                    //     url: 'identityCardPurchase'
                                    // },
                                    {
                                        name: '识别卡入库',
                                        url: 'cardStorage'
                                    },
                                    {
                                        name: '识别卡信息',
                                        url: 'cardInfo'
                                    },
                                    {
                                        name: '识别卡审核',
                                        url: 'cardAudit'
                                    },
                                    {
                                        name: '识别卡注销时间',
                                        url: 'cardCancellationRecord'
                                    },
                                    {
                                        name: '识别卡统计',
                                        url: 'cardStatistics'
                                    }
                                ]
                            },
                            {
                                name: '业务管理',
                                icon: 'icontongjifenxi',
                                children: [
                                    {
                                        name: '运输车辆综合查询',
                                        url: 'comprehensiveQuery'
                                    },
                                    {
                                        name: '车辆单位',
                                        url: 'vehicleUnit'
                                    },
                                    {
                                        name: '车辆合并',
                                        url: 'vehicleConsolidation'
                                    },
                                    {
                                        name: '检测超期解锁',
                                        url: 'detectOverdueUnlocking'
                                    },
                                    {
                                        name: '维护归档查询',
                                        url: 'maintainArchiveQuery'
                                    },
                                    {
                                        name: '检测归档查询',
                                        url: 'inspectionArchiveQuery'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'BI数据统计',
                        children: [
                            {
                                name: '企业消费数据',
                                icon: 'iconicontongji',
                                children: [
                                    {
                                        name: '企业交易统计',
                                        url: 'enterpriseTransactionStatistics'
                                    }
                                ]
                            },
                            {
                                name: '企业数据',
                                icon: 'iconicontongji',
                                children: [
                                    {
                                        name: '维修企业数据',
                                        url: 'wxEnterpriseData'
                                    },
                                    {
                                        name: '运输企业数据',
                                        url: 'ysEnterpriseData'
                                    },
                                    {
                                        name: '检测企业数据',
                                        url: 'jcEnterpriseData'
                                    },
                                    {
                                        name: '维修企业备案',
                                        url: 'recordData'
                                    },
                                    {
                                        name: '维修企业勘验',
                                        url: 'inquestData'
                                    },
                                    {
                                        name: '企业代付记录',
                                        url: 'paymentRecords'
                                    }
                                ]
                            },
                            {
                                name: '用户数据',
                                children: [
                                    {
                                        name: '技师数据',
                                        url: 'technicianData'
                                    },
                                    {
                                        name: '车主数据',
                                        url: 'ownerData'
                                    }
                                ]
                            },
                            {
                                name: '商业业务数据',
                                children: [
                                    {
                                        name: '识别卡统计',
                                        url: 'identificationCardStatistics'
                                    },
                                    {
                                        name: '出险数据',
                                        url: 'riskRecord'
                                    },
                                    {
                                        name: '保险数据',
                                        url: 'insurance'
                                    },
                                    {
                                        name: '估值数据',
                                        url: 'valuationData'
                                    }
                                ]
                            },
                            {
                                name: '维修与运输业务数据',
                                children: [
                                    {
                                        name: '固废物台账',
                                        url: 'wasteData'
                                    },
                                    {
                                        name: '固废物转移联单',
                                        url: 'wasteTransferOrder'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '权限UC',
                        children: [
                            {
                                name: '运营后台用户权限',
                                icon: 'icontongjifenxi',
                                children: [
                                    {
                                        name: '用户管理',
                                        url: 'userManagement'
                                    },
                                    {
                                        name: '权限管理',
                                        url: 'authority'
                                    }
                                ]
                            },
                            {
                                name: '企业账号管理',
                                icon: 'icontongjifenxi',
                                children: [
                                    {
                                        name: '企业用户管理',
                                        url: 'cjlUserManage'
                                    }
                                ]
                            }
                        ]
                    },
                    // {
                    //     name: '产品管理',
                    //     children: [
                    //         {
                    //             name: '查好车',
                    //             icon: 'iconcar',
                    //             children: [
                    //                 {
                    //                     name: '数据统计',
                    //                     url: 'transactionStatistics'
                    //                 },
                    //                 {
                    //                     name: '认证审核',
                    //                     url: 'certAudit'
                    //                 },
                    //                 {
                    //                     name: '产品配置',
                    //                     url: 'productConfig'
                    //                 },
                    //                 {
                    //                     name: '充值活动管理',
                    //                     url: 'rechargeActivitieMagm'
                    //                 },
                    //                 {
                    //                     name: '消费查询统计',
                    //                     url: 'consumeQuery'
                    //                 },
                    //                 {
                    //                     name: '充值查询统计',
                    //                     url: 'rechargeQuery'
                    //                 },
                    //                 {
                    //                     name: '代理商管理',
                    //                     url: 'agentQuery'
                    //                 },
                    //                 {
                    //                     name: '代理交易额统计',
                    //                     url: 'agencySatistics'
                    //                 },
                    //                 {
                    //                     name: '用户查询统计',
                    //                     url: 'userQueryStatistics'
                    //                 },
                    //                 {
                    //                     name: '使用帮助',
                    //                     url: 'useHelp'
                    //                 },
                    //                 {
                    //                     name: '用户反馈',
                    //                     url: 'userFeedback'
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             name: '超级骊',
                    //             icon: 'iconiconweixiuqiye',
                    //             children: [
                    //                 {
                    //                     name: '广告发布',
                    //                     url: 'advertRelease'
                    //                 },
                    //                 {
                    //                     name: '复工健康弹窗配置',
                    //                     url: 'healthPopupDispose'
                    //                 },
                    //                 {
                    //                     name: '企业用户管理',
                    //                     url: 'enterpriseUserManagement'
                    //                 },
                    //                 {
                    //                     name: '用户管理',
                    //                     url: 'cjlUserManage'
                    //                 },
                    //                 {
                    //                     name: '维修数据上传排名',
                    //                     url: 'enterpriseUploadDataRank'
                    //                 },
                    //                 {
                    //                     name: '城市开通',
                    //                     url: 'cjlCityOpen'
                    //                 },
                    //                 {
                    //                     name: '企业档案管理',
                    //                     url: 'cjlEnterpriseArchives'
                    //                 },
                    //                 {
                    //                     name: '二维合格证发放',
                    //                     url: 'certificateProvide'
                    //                 },
                    //                 // {
                    //                 //     name: '合格证发放',
                    //                 //     url: 'certificateIssuance'
                    //                 // },
                    //                 {
                    //                     name: '识别卡采购',
                    //                     url: 'identityCardPurchase'
                    //                 },
                    //                 {
                    //                     name: '识别卡订单管理',
                    //                     url: 'identityCardOrder'
                    //                 },
                    //                 {
                    //                     name: '识别卡管理',
                    //                     url: 'identityCardManage'
                    //                 },
                    //                 {
                    //                     name: '线下汇款管理',
                    //                     url: 'off-lineRemittance'
                    //                 },
                    //                 {
                    //                     name: '识别卡补发',
                    //                     url: 'identityCardReplacement'
                    //                 },
                    //                 {
                    //                     name: '银行信息',
                    //                     url: 'bankInfo'
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             name: '检测企业服务系统',
                    //             icon: 'iconiconjianceqiye',
                    //             children: [
                    //                 {
                    //                     name: '城市业务开通',
                    //                     url: 'inspectionCityOpen'
                    //                 },
                    //                 {
                    //                     name: '检测企业开通',
                    //                     url: 'inspectionEnterpriseOpening'
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             name: '运输企业服务系统',
                    //             icon: 'iconiconjianceqiye',
                    //             children: [
                    //                 {
                    //                     name: '城市业务开通',
                    //                     url: 'vtamsCityConfig'
                    //                 },
                    //                 {
                    //                     name: '企业业务开通',
                    //                     url: 'vtamsEnterprise'
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // },
                    // {
                    //     name: '运营管理',
                    //     children: [
                    //         {
                    //             name: '运营看板',
                    //             icon: 'iconkanban',
                    //             url: 'operateBoard'
                    //         },
                    //         {
                    //             name: '产品运行情况',
                    //             icon: 'iconchanpinguanli',
                    //             children: [
                    //                 {
                    //                     name: '维修企业服务系统',
                    //                     url: 'repairEnterpriseSys'
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             name: '业务操作',
                    //             icon: 'iconiconzuodaohangyewu',
                    //             children: [
                    //                 {
                    //                     name: '外延设备销售',
                    //                     url: 'regulatorSell'
                    //                 },
                    //                 {
                    //                     name: '品牌车系车型维护',
                    //                     url: 'carbrand'
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             name: '服务运营',
                    //             icon: 'iconfuwuyunying',
                    //             children: [
                    //                 {
                    //                     name: '运营通告',
                    //                     url: 'operateNotice'
                    //                 },
                    //                 {
                    //                     name: '运营短信管理',
                    //                     url: 'messageManagement'
                    //                 },
                    //                 {
                    //                     name: '运营服务记录',
                    //                     url: 'operateServiceRecord'
                    //                 },
                    //                 {
                    //                     name: '评价反馈跟踪',
                    //                     url: 'evaluateFeedback'
                    //                 },
                    //                 {
                    //                     name: '市场区域设置',
                    //                     url: 'marketRegion'
                    //                 },
                    //                 {
                    //                     name: '运营人员管理',
                    //                     url: 'servicePersonal'
                    //                 },
                    //                 {
                    //                     name: '运营人员绩效统计',
                    //                     url: 'performanceStatistics'
                    //                 },
                    //                 {
                    //                     name: '采购出库',
                    //                     url: 'purchaseExport'
                    //                 },
                    //                 {
                    //                     name: '广告管理',
                    //                     url: 'advertisingManager'
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // },
                    // {
                    //     name: '统计查询',
                    //     children: [
                    //         {
                    //             name: '统计查询',
                    //             icon: 'iconicontongji',
                    //             children: [
                    //                 {
                    //                     name: '企业维修统计',
                    //                     url: 'maintenanceStatistics'
                    //                 },
                    //                 {
                    //                     name: '服务交易统计',
                    //                     url: 'serviceTransactionStatistics'
                    //                 },
                    //                 {
                    //                     name: '提现记录统计',
                    //                     url: 'receiptRecordStatistics'
                    //                 },
                    //                 {
                    //                     name: '提现异常记录统计',
                    //                     url: 'statisticsOfAnomalyRecords'
                    //                 },
                    //                 {
                    //                     name: '充值记录统计',
                    //                     url: 'rechargeRecordStatistics'
                    //                 },
                    //                 {
                    //                     name: '开票申请',
                    //                     url: 'applicationOpen'
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // },
                    {
                        name: '综合信息',
                        children: [
                            {
                                name: '业务管理',
                                icon: 'iconicontongji',
                                children: [
                                    {
                                        name: '线下汇款管理',
                                        url: 'offlineRemittance'
                                    },
                                    {
                                        name: '财务异常管理',
                                        url: 'financialAnomalies'
                                    },
                                    {
                                        name: '财务报表',
                                        url: 'financialStatements'
                                    },
                                    {
                                        name: '固废物智慧设备管理',
                                        url: 'wasteManage'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '中车主数据',
                        children: [
                            {
                                name: '组织管理',
                                icon: 'iconicontongji',
                                children: [
                                    {
                                        name: '管理城市',
                                        url: 'marketRegion'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '财务管理',
                        children: [
                            {
                                name: '财务操作',
                                icon: 'iconiconzuodaohangcaiwu',
                                children: [
                                    {
                                        name: '企业充值开票',
                                        url: 'rechargeInvoice'
                                    },
                                    {
                                        name: '企业汇款充值审核',
                                        url: 'rechargeAudit'
                                    },
                                    {
                                        name: '财务异常充值处理',
                                        url: 'rechargeExceptionHandling'
                                    },
                                    {
                                        name: '财务异常退款处理',
                                        url: 'rechargeRefund'
                                    }
                                ]
                            },
                            {
                                name: '财务报表',
                                icon: 'iconiconzuodaohangshuju',
                                children: [
                                    {
                                        name: '收入分类一览',
                                        url: 'income'
                                    },
                                    {
                                        name: '收入各地市统计',
                                        url: 'incomeStatistics'
                                    },
                                    {
                                        name: '企业充值明细',
                                        url: 'rechargeDetail'
                                    },
                                    {
                                        name: '企业余额查询',
                                        url: 'balanceQuery'
                                    },
                                    {
                                        name: '企业欠费查询',
                                        url: 'arrearsQuery'
                                    },
                                    {
                                        name: '维护信息消费明细',
                                        url: 'consumptionOfMaintainDetail'
                                    },
                                    {
                                        name: '检测信息消费明细',
                                        url: 'consumptionOfDetectionDetail'
                                    },
                                    {
                                        name: '归档信息消费明细',
                                        url: 'consumptionOfArchivedDetail'
                                    },
                                    {
                                        name: '信息服务财务报表',
                                        url: 'FinancialStatementsOfInformationServices'
                                    },
                                    {
                                        name: '外延设备销售明细',
                                        url: 'regulatorSellDetail'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '数据管理',
                        children: [
                            {
                                name: '数据看板',
                                url: 'dataBoard',
                                icon: 'iconkanban'
                            },
                            {
                                name: '数据查询',
                                icon: 'iconshujuchaxun',
                                children: [
                                    {
                                        name: '维修企业勘验数据',
                                        url: 'inquestDataManage'
                                    },
                                    {
                                        name: '维修企业备案数据',
                                        url: 'recordDataManage'
                                    },
                                    {
                                        name: '车辆数据',
                                        url: 'carData'
                                    },
                                    {
                                        name: '维修数据',
                                        url: 'maintenanceData'
                                    },
                                    {
                                        name: '检测数据',
                                        url: 'detectionData'
                                    },

                                    {
                                        name: '企业数据',
                                        url: 'maintenanceOfEnterpriseArchives'
                                    },

                                    {
                                        name: '车主数据',
                                        url: 'ownerInformation'
                                    },
                                    {
                                        name: '从业人员数据',
                                        url: 'employeeInformation'
                                    }
                                ]
                            },
                            {
                                name: '统计分析',
                                icon: 'icontongjifenxi',
                                children: [
                                    {
                                        name: '车辆数据统计',
                                        url: 'carDataStatistics'
                                    },
                                    {
                                        name: '维修企业数据统计',
                                        url: 'enterpriseDataStatistics'
                                    },
                                    {
                                        name: '检测企业数据统计',
                                        url: 'jcDataStatistics'
                                    },
                                    {
                                        name: '车主数据统计',
                                        url: 'owerDataStatistics'
                                    },
                                    {
                                        name: '维修数据统计',
                                        url: 'maintenanceDataStatistics'
                                    }

                                ]
                            }
                        ]
                    },
                    {
                        name: '系统管理',
                        children: [
                            {
                                name: '系统管理',
                                icon: 'iconxitongshezhi',
                                children: [
                                    {
                                        name: '用户管理',
                                        url: 'userManagement'
                                    },
                                    {
                                        name: '权限管理',
                                        url: 'authority'
                                    },
                                    {
                                        name: '系统参数配置',
                                        url: 'sysSetting'
                                    }
                                    // {
                                    //     name: '外延设备管理',
                                    //     url: 'externalEquipment'
                                    // },
                                    // {
                                    //     name: '监管系统服务开通',
                                    //     url: 'regulator'
                                    // }
                                    // {
                                    //     name: '菜单管理',
                                    //     component: 'menuManager',
                                    //     url: 'menuManager'
                                    // }
                                ]
                            },
                            {
                                name: 'win10配置',
                                icon: 'iconxitongshezhi',
                                children: [
                                    {
                                        name: '应用管理',
                                        url: 'applicationManage'
                                    },
                                    {
                                        name: '套餐管理',
                                        url: 'packageManage'
                                    },
                                    {
                                        name: '角色管理',
                                        url: 'roleConfig'
                                    },
                                    {
                                        name: '菜单管理',
                                        url: 'winMenuManage'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            )
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang='less' scoped>
.homeV3 {
    background: linear-gradient(360deg,rgba(43,51,94,1) 0%,rgba(20,24,44,1) 100%);
    height: 100%;
    padding: 45px 48px 0;
    box-sizing: border-box;
    .header {
        .main-title {
            color: #A6A9B5;
            #main_tittle_icon {
                font-size: 36px;
                border-right: 1px solid #A6A9B5;
                padding-right: 10px;
            }
            img {
                height: 60px;
                margin-right: 11px;
            }
            .subTitle {
                font-size: 18px;
                padding-left: 15px;
            }
        }
        .rightBar {
            color: #ffffff;
            text-align: right;
            img {
                vertical-align: sub;
            }
            .setting {
                cursor: pointer;
            }
            .weather {
            }
        }
    }
    .content {
        // padding: 160px 80px 0;
        overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 20%;
        width: 1000px;
        .item {
            transition: .6s all ease-in;
            float: left;
            color: #ffffff;
            padding-top: 20px;
            height: 100px;
            width: 216px;
            background: linear-gradient(360deg,rgba(21,24,44,1) 0%,rgba(55,66,105,1) 100%);
            box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.4),0px -1px 1px 0px rgba(40,47,77,0.47);
            border-radius: 2px;
            border: 1px solid rgba(53,63,102,0.4);
            text-align: center;
            cursor: pointer;
            margin-right: 20px;
            margin-bottom: 20px;
            &:hover {
                background:linear-gradient(135deg,rgba(236,224,182,1) 0%,rgba(115,94,71,1) 100%)
            }
        }
    }
    .footer {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 16px;
    }
}
</style>

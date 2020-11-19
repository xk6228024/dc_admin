import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from './utils/cookie.js'
import Home from './views/Home.vue'
import store from './store.js'
import vm from './main.js'

Vue.use(Router)
var router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/homeV3'
        },
        {
            path: '/',
            name: 'layout',
            component: () => import('./views/common/layout.vue'),
            children: [
                {
                    path: '/dataBoard',
                    name: 'dataBoard',
                    meta: {
                        title: '数据看板'
                    },
                    component: () => import('./views/dataManagement/dataBoard.vue')
                },
                {
                    path: '/operateBoard',
                    name: 'operateBoard',
                    meta: {
                        title: '运营看板'
                    },
                    component: () => import('./views/business/operateBoard.vue')
                },
                {
                    path: '/maintenanceData',
                    name: 'maintenanceData',
                    meta: {
                        title: '维修数据'
                    },
                    component: () => import('./views/dataManagement/maintenanceData.vue')
                },
                {
                    path: '/maintenanceDataDetail',
                    name: 'maintenanceDataDetail',
                    meta: {
                        tag: 'maintenanceData',
                        title: '维修数据详情'
                    },
                    component: () => import('./views/dataManagement/maintenanceDataDetail.vue')
                },
                {
                    path: '/testReport',
                    name: 'testReport',
                    meta: {
                        title: '环保检测报告单'
                    },
                    component: () => import('./views/dataManagement/testReport.vue')
                },
                {
                    path: '/detectionData',
                    name: 'detectionData',
                    meta: {
                        title: '检测数据'
                    },
                    component: () => import('./views/dataManagement/detectionData.vue')
                },
                {
                    path: '/environmentalReport',
                    name: 'environmentalReport',
                    meta: {
                        title: '环保检测数据'
                    },
                    component: () => import('./views/dataManagement/environmentalReport/environmentalReport.vue')
                },
                {
                    path: '/detectionDataDetail',
                    name: 'detectionDataDetail',
                    meta: {
                        tag: 'detectionData',
                        title: '检测数据详情'
                    },
                    component: () => import('./views/dataManagement/detectionDataDetail.vue')
                },
                {
                    path: '/carData',
                    name: 'carData',
                    meta: {
                        title: '车辆数据'
                    },
                    component: () => import('./views/dataManagement/carData.vue')
                },
                {
                    path: '/riskRecord',
                    name: 'riskRecord',
                    meta: {
                        title: '出险数据'
                    },
                    component: () => import('./views/dataManagement/riskRecord.vue')
                },
                {
                    path: '/insurance',
                    name: 'insurance',
                    meta: {
                        title: '保险数据'
                    },
                    component: () => import('./views/dataManagement/insurance.vue')
                },
                {
                    path: '/valuation',
                    name: 'valuation',
                    meta: {
                        title: '估值数据'
                    },
                    component: () => import('./views/dataManagement/valuation.vue')
                },
                {
                    path: '/carDataDetail',
                    name: 'carDataDetail',
                    meta: {
                        tag: 'carData',
                        title: '车辆数据详情'
                    },
                    component: () => import('./views/dataManagement/carDataDetail.vue')
                },
                {
                    path: '/vehicleConditionReport',
                    name: 'vehicleConditionReport',
                    meta: {
                        tag: 'vehicleConditionReport',
                        title: '车况报告'
                    },
                    component: () => import('./views/dataManagement/vehicleConditionReport')
                },
                {
                    path: '/inquestDataManage',
                    name: 'inquestDataManage',
                    meta: {
                        tag: 'inquestDataManage',
                        title: '维修企业勘验数据'
                    },
                    component: () => import('./views/dataManagement/inquestDataManage')
                },
                {
                    path: '/inquestDataDetail',
                    name: 'inquestDataDetail',
                    meta: {
                        tag: 'inquestDataManage',
                        title: '维修企业勘验数据详情'
                    },
                    component: () => import('./views/dataManagement/inquestDataDetail')
                },
                {
                    path: '/inquestInfoDetailAll',
                    name: 'inquestInfoDetailAll',
                    meta: {
                        tag: 'recordDataManage',
                        title: '维修企业勘验数据详情'
                    },
                    component: () => import('./views/dataManagement/inquestInfoDetailAll')
                },
                {
                    path: '/recordDataManage',
                    name: 'recordDataManage',
                    meta: {
                        tag: 'recordDataManage',
                        title: '维修企业备案数据'
                    },
                    component: () => import('./views/dataManagement/recordDataManage')
                },
                {
                    path: '/recordDataDetail',
                    name: 'recordDataDetail',
                    meta: {
                        tag: 'recordDataManage',
                        title: '维修企业备案数据详情'
                    },
                    component: () => import('./views/dataManagement/recordDataDetail')
                },
                {
                    path: '/recordPerson',
                    name: 'recordPerson',
                    meta: {
                        tag: 'recordDataManage',
                        title: '人员信息详情'
                    },
                    component: () => import('./views/dataManagement/recordPerson')
                },
                {
                    path: '/home',
                    name: 'home',
                    meta: {
                        title: '首页'
                    },
                    component: Home
                },
                {
                    path: '/empty',
                    name: 'empty'
                },
                {
                    path: '/regionManage',
                    name: 'regionManage',
                    meta: {
                        title: '区域设置'
                    },
                    component: () => import('./views/systemSetup/regionManage.vue')
                },
                {
                    path: '/marketRegion',
                    name: 'marketRegion',
                    meta: {
                        title: '市场区域设置'
                    },
                    component: () => import('./views/business/serviceOperate/marketRegion.vue')
                },
                {
                    path: '/userManagement',
                    name: 'userManagement',
                    meta: {
                        title: '用户管理'
                    },
                    component: () => import('./views/systemSetup/userManagement.vue')
                },
                {
                    path: '/income',
                    name: 'income',
                    meta: {
                        title: '收入统计'
                    },
                    component: () => import('./views/financeData/income.vue')
                },
                {
                    path: '/authority',
                    name: 'authority',
                    meta: {
                        title: '权限管理'
                    },
                    component: () => import('./views/systemSetup/authority.vue')
                },
                {
                    path: '/authorityDetail',
                    name: 'authorityDetail',
                    meta: {
                        title: '权限管理详情'
                    },
                    component: () => import('./views/systemSetup/authorityDetail.vue')
                },
                {
                    path: '/menuManager',
                    name: 'menuManager',
                    meta: {
                        title: '菜单管理'
                    },
                    component: () => import('./views/systemSetup/menuManager.vue')
                },
                {
                    path: '/regulator',
                    name: 'regulator',
                    meta: {
                        title: '监管系统开通'
                    },
                    component: () => import('./views/systemSetup/regulator')
                },
                {
                    path: '/externalEquipment',
                    name: 'externalEquipment',
                    meta: {
                        title: '外延设备管理'
                    },
                    component: () => import('./views/systemSetup/externalEquipment')
                },
                {
                    path: '/applicationManage',
                    name: 'applicationManage',
                    meta: {
                        title: '应用管理'
                    },
                    component: () => import('./views/systemSetup/win/applicationManage')
                },
                {
                    path: '/packageManage',
                    name: 'packageManage',
                    meta: {
                        title: '套餐管理'
                    },
                    component: () => import('./views/systemSetup/win/packageManage')
                },
                {
                    path: '/roleConfig',
                    name: 'roleConfig',
                    meta: {
                        title: '应用角色配置'
                    },
                    component: () => import('./views/systemSetup/win/roleConfig')
                },
                {
                    path: '/winMenuManage',
                    name: 'winMenuManage',
                    meta: {
                        title: '应用菜单管理'
                    },
                    component: () => import('./views/systemSetup/win/winMenuManage')
                },
                {
                    path: '/sysSetting',
                    name: 'sysSetting',
                    meta: {
                        title: '系统参数配置'
                    },
                    component: () => import('./views/systemSetup/sysSetting')
                },
                {
                    path: '/servicePersonal',
                    name: 'servicePersonal',
                    meta: {
                        title: '运营人员管理'
                    },
                    component: () => import('./views/business/serviceOperate/servicePersonal')
                },
                {
                    path: '/regulatorSell',
                    name: 'regulatorSell',
                    meta: {
                        title: '外延设备销售'
                    },
                    component: () => import('./views/business/regulatorSell')
                },
                {
                    path: '/carbrand',
                    name: 'carbrand',
                    meta: {
                        title: '品牌车系车型维护'
                    },
                    component: () => import('./views/business/carbrand/carbrand')
                },
                {
                    path: '/rechargeInvoice',
                    name: 'rechargeInvoice',
                    meta: {
                        title: '企业充值开票'
                    },
                    component: () => import('./views/financeData/rechargeInvoice')
                },
                {
                    path: '/rechargeAudit',
                    name: 'rechargeAudit',
                    meta: {
                        title: '企业汇款充值审核'
                    },
                    component: () => import('./views/financeData/rechargeAudit')
                },
                {
                    path: '/rechargeExceptionHandling',
                    name: 'rechargeExceptionHandling',
                    meta: {
                        title: '财务异常充值处理'
                    },
                    component: () => import('./views/financeData/rechargeExceptionHandling')
                },
                {
                    path: '/rechargeRefund',
                    name: 'rechargeRefund',
                    meta: {
                        title: '财务异常退款处理'
                    },
                    component: () => import('./views/financeData/rechargeRefund')
                },
                {
                    path: '/incomeStatistics',
                    name: 'incomeStatistics',
                    meta: {
                        title: '收入各地市统计'
                    },
                    component: () => import('./views/financeData/incomeStatistics')
                },
                {
                    path: '/rechargeDetail',
                    name: 'rechargeDetail',
                    meta: {
                        title: '企业充值明细'
                    },
                    component: () => import('./views/financeData/rechargeDetail')
                },
                {
                    path: '/balanceQuery',
                    name: 'balanceQuery',
                    meta: {
                        title: '企业余额查询'
                    },
                    component: () => import('./views/financeData/balanceQuery')
                },
                {
                    path: '/consumptionOfMaintainDetail',
                    name: 'consumptionOfMaintainDetail',
                    meta: {
                        title: '维护信息消费明细'
                    },
                    component: () => import('./views/financeData/consumptionOfMaintainDetail')
                },
                {
                    path: '/arrearsQuery',
                    name: 'arrearsQuery',
                    meta: {
                        title: '企业欠费查询'
                    },
                    component: () => import('./views/financeData/arrearsQuery')
                },
                {
                    path: '/consumptionOfDetectionDetail',
                    name: 'consumptionOfDetectionDetail',
                    meta: {
                        title: '检测信息消费明细'
                    },
                    component: () => import('./views/financeData/consumptionOfDetectionDetail')
                },
                {
                    path: '/consumptionOfArchivedDetail',
                    name: 'consumptionOfArchivedDetail',
                    meta: {
                        title: '归档信息消费明细'
                    },
                    component: () => import('./views/financeData/consumptionOfArchivedDetail')
                },
                {
                    path: '/FinancialStatementsOfInformationServices',
                    name: 'FinancialStatementsOfInformationServices',
                    meta: {
                        title: '信息服务财务报表'
                    },
                    component: () => import('./views/financeData/FinancialStatementsOfInformationServices')
                },
                {
                    path: '/FinancialStatementsOfInformationServicesDetail',
                    name: 'FinancialStatementsOfInformationServicesDetail',
                    meta: {
                        title: '信息服务财务报表详情'
                    },
                    component: () => import('./views/financeData/FinancialStatementsOfInformationServicesDetail')
                },
                {
                    path: '/regulatorSellDetail',
                    name: 'regulatorSellDetail',
                    meta: {
                        title: '外延设备销售明细'
                    },
                    component: () => import('./views/financeData/regulatorSellDetail')
                },
                // 统计查询
                {
                    path: '/serviceTransactionStatistics',
                    name: 'serviceTransactionStatistics',
                    meta: {
                        title: '服务交易统计'
                    },
                    component: () => import('./views/statisticalQuery/serviceTransactionStatistics')
                },
                {
                    path: '/receiptRecordStatistics',
                    name: 'receiptRecordStatistics',
                    meta: {
                        title: '提现记录统计'
                    },
                    component: () => import('./views/statisticalQuery/receiptRecordStatistics')
                },
                {
                    path: '/statisticsOfAnomalyRecords',
                    name: 'statisticsOfAnomalyRecords',
                    meta: {
                        title: '提现异常记录统计'
                    },
                    component: () => import('./views/statisticalQuery/statisticsOfAnomalyRecords')
                },
                {
                    path: '/rechargeRecordStatistics',
                    name: 'rechargeRecordStatistics',
                    meta: {
                        title: '充值记录统计'
                    },
                    component: () => import('./views/statisticalQuery/rechargeRecordStatistics')
                },
                {
                    path: '/applicationOpen',
                    name: 'applicationOpen',
                    meta: {
                        title: '开票申请'
                    },
                    component: () => import('./views/statisticalQuery/applicationOpen')
                },
                // 数据管理
                {
                    path: '/privateVehicleArchives',
                    name: 'privateVehicleArchives',
                    meta: {
                        title: '私家车辆档案查询'
                    },
                    component: () => import('./views/dataManagement/vehicleArchives/privateVehicleArchives')
                },
                {
                    path: '/privateVehicleDetail',
                    name: 'privateVehicleDetail',
                    meta: {
                        tag: 'privateVehicleArchives',
                        title: '私家车辆档案详情',
                        isDetail: true
                    },
                    component: () => import('./views/dataManagement/vehicleArchives/privateVehicleDetail')
                },
                {
                    path: '/operatingVehicleArchives',
                    name: 'operatingVehicleArchives',
                    meta: {
                        title: '营运车辆数据查询'
                    },
                    component: () => import('./views/dataManagement/vehicleArchives/operatingVehicleArchives')
                },
                {
                    path: '/operatingVehicleDetail',
                    name: 'operatingVehicleDetail',
                    meta: {
                        title: '营运车辆数据详情',
                        tag: 'operatingVehicleArchives',
                        isDetail: true
                    },
                    component: () => import('./views/dataManagement/vehicleArchives/operatingVehicleDetail')
                },
                // 企业详情
                {
                    path: '/inspectionOfEnterpriseArchives',
                    name: 'inspectionOfEnterpriseArchives',
                    meta: {
                        title: '检测企业数据查询'
                    },
                    component: () => import('./views/dataManagement/enterpriseArchives/inspectionOfEnterpriseArchives')
                },
                {
                    path: '/inspectionOfEnterpriseDetail',
                    name: 'inspectionOfEnterpriseDetail',
                    meta: {
                        isDetail: true,
                        tag: 'inspectionOfEnterpriseArchives',
                        title: '检测企业数据详情'
                    },
                    component: () => import('./views/dataManagement/enterpriseArchives/inspectionOfEnterpriseDetail')
                },
                {
                    path: '/maintenanceOfEnterpriseArchives',
                    name: 'maintenanceOfEnterpriseArchives',
                    meta: {
                        title: '维修企业数据'
                    },
                    component: () => import('./views/dataManagement/enterpriseArchives/maintenanceOfEnterpriseArchives')
                },
                {
                    path: '/maintenanceOfEnterpriseDetail',
                    name: 'maintenanceOfEnterpriseDetail',
                    meta: {
                        isDetail: true,
                        tag: 'maintenanceOfEnterpriseArchives',
                        title: '维修企业数据详情'
                    },
                    component: () => import('./views/dataManagement/enterpriseArchives/maintenanceOfEnterpriseDetail')
                },
                {
                    path: '/transportOfEnterpriseArchives',
                    name: 'transportOfEnterpriseArchives',
                    meta: {
                        title: '运输企业档案查询'
                    },
                    component: () => import('./views/dataManagement/enterpriseArchives/transportOfEnterpriseArchives')
                },
                {
                    path: '/transportOfEnterpriseDetail',
                    name: 'transportOfEnterpriseDetail',
                    meta: {
                        isDetail: true,
                        tag: 'transportOfEnterpriseArchives',
                        title: '运输企业档案详情'
                    },
                    component: () => import('./views/dataManagement/enterpriseArchives/transportOfEnterpriseDetail')
                },
                // 人员信息
                {
                    path: '/employeeInformation',
                    name: 'employeeInformation',
                    meta: {
                        title: '从业人员信息查询'
                    },
                    component: () => import('./views/dataManagement/personnelInformation/employeeInformation')
                },
                {
                    path: '/technicianInformation',
                    name: 'technicianInformation',
                    meta: {
                        title: '技师数据'
                    },
                    component: () => import('./views/dataManagement/personnelInformation/technicianInformation')
                },
                {
                    path: '/driverInformation',
                    name: 'driverInformation',
                    meta: {
                        title: '驾驶员信息查询'
                    },
                    component: () => import('./views/dataManagement/personnelInformation/driverInformation')
                },
                {
                    path: '/ownerInformation',
                    name: 'ownerInformation',
                    meta: {
                        title: '车主数据'
                    },
                    component: () => import('./views/dataManagement/ownerInformation/ownerInformation')
                },
                {
                    path: '/ownerDetail',
                    name: 'ownerDetail',
                    meta: {
                        tag: 'ownerInformation',
                        title: '车主数据详情'
                    },
                    component: () => import('./views/dataManagement/ownerInformation/ownerDetail')
                },
                // {
                //     path: '/certAudit',
                //     name: 'certAudit',
                //     meta: {
                //         title: '认证审核'
                //     },
                //     component: () => import('./views/productManagement/hcc/certAudit')
                // },
                // {
                //     path: '/rechargeActivitieMagm',
                //     name: 'rechargeActivitieMagm',
                //     meta: {
                //         title: '充值活动管理'
                //     },
                //     component: () => import('./views/productManagement/hcc/rechargeActivitieMagm')
                // },
                // {
                //     path: '/rechargeQuery',
                //     name: 'rechargeQuery',
                //     meta: {
                //         title: '充值查询统计'
                //     },
                //     component: () => import('./views/productManagement/hcc/rechargeQuery')
                // },
                // {
                //     path: '/consumeQuery',
                //     name: 'consumeQuery',
                //     meta: {
                //         title: '消费查询统计'
                //     },
                //     component: () => import('./views/productManagement/hcc/consumeQuery')
                // },
                // {
                //     path: '/productConfig',
                //     name: 'productConfig',
                //     meta: {
                //         title: '产品配置'
                //     },
                //     component: () => import('./views/productManagement/hcc/productConfig')
                // },
                // {
                //     path: '/agentQuery',
                //     name: 'agentQuery',
                //     meta: {
                //         title: '代理商管理'
                //     },
                //     component: () => import('./views/productManagement/hcc/agentQuery')
                // },
                // {
                //     path: '/agentEdit',
                //     name: 'agentEdit',
                //     meta: {
                //         title: '代理商编辑'
                //     },
                //     component: () => import('./views/productManagement/hcc/agentEdit')
                // },
                // {
                //     path: '/agentDetail',
                //     name: 'agentDetail',
                //     meta: {
                //         title: '代理商详情'
                //     },
                //     component: () => import('./views/productManagement/hcc/agentDetail')
                // },
                // {
                //     path: '/useHelp',
                //     name: 'useHelp',
                //     meta: {
                //         title: '使用帮助'
                //     },
                //     component: () => import('./views/productManagement/hcc/useHelp')
                // },
                // {
                //     path: '/userFeedback',
                //     name: 'userFeedback',
                //     meta: {
                //         title: '用户反馈'
                //     },
                //     component: () => import('./views/productManagement/hcc/userFeedback')
                // },
                // {
                //     path: '/userQueryStatistics',
                //     name: 'userQueryStatistics',
                //     meta: {
                //         title: '用户查询统计'
                //     },
                //     component: () => import('./views/productManagement/hcc/userQueryStatistics')
                // },
                // {
                //     path: '/agencySatistics',
                //     name: 'agencySatistics',
                //     meta: {
                //         title: '代理交易额统计'
                //     },
                //     component: () => import('./views/productManagement/hcc/agencySatistics')
                // },
                // {
                //     path: '/transactionStatistics',
                //     name: 'transactionStatistics',
                //     meta: {
                //         title: '数据统计'
                //     },
                //     component: () => import('./views/productManagement/hcc/transactionStatistics')
                // },
                {
                    path: '/advertRelease',
                    name: 'advertRelease',
                    meta: {
                        title: '广告发布'
                    },
                    component: () => import('./views/productManagement/cjl/advertRelease')
                },
                {
                    path: '/advertReleaseDetail',
                    name: 'advertReleaseDetail',
                    meta: {
                        tag: 'advertRelease',
                        title: '广告发布'
                    },
                    component: () => import('./views/productManagement/cjl/advertReleaseDetail')
                },
                {
                    path: '/advDetail',
                    name: 'advDetail',
                    meta: {
                        tag: 'advertRelease',
                        title: '广告发布详情'
                    },
                    component: () => import('./views/productManagement/cjl/advDetail')
                },
                {
                    path: '/cjlCityOpen',
                    name: 'cjlCityOpen',
                    meta: {
                        tag: 'cjlCityOpen',
                        title: '城市开通'
                    },
                    component: () => import('./views/productManagement/cjl/cjlCityOpen')
                },
                {
                    path: '/cjlCityOpenDetail',
                    name: 'cjlCityOpenDetail',
                    meta: {
                        tag: 'cjlCityOpen',
                        title: '城市开通详情'
                    },
                    component: () => import('./views/productManagement/cjl/cjlCityOpenDetail')
                },
                {
                    path: '/cjlEnterpriseArchives',
                    name: 'cjlEnterpriseArchives',
                    meta: {
                        tag: 'cjlEnterpriseArchives',
                        title: '企业档案管理'
                    },
                    component: () => import('./views/productManagement/cjl/cjlEnterpriseArchives')
                },
                {
                    path: '/cjlEnterpriseArchivesDetail',
                    name: 'cjlEnterpriseArchivesDetail',
                    meta: {
                        tag: 'cjlEnterpriseArchives',
                        title: '企业档案详情'
                    },
                    component: () => import('./views/productManagement/cjl/cjlEnterpriseArchivesDetail')
                },
                {
                    path: '/healthPopupDispose',
                    name: 'healthPopupDispose',
                    meta: {
                        tag: 'healthPopupDispose',
                        title: '复工健康弹窗配置'
                    },
                    component: () => import('./views/productManagement/cjl/healthPopupDispose')
                },
                {
                    path: '/inspectionEnterpriseOpening',
                    name: 'inspectionEnterpriseOpening',
                    meta: {
                        tag: 'inspectionEnterpriseOpening',
                        title: '检测企业开通'
                    },
                    component: () => import('./views/productManagement/inspection/inspectionEnterpriseOpening')
                },
                {
                    path: '/inspectionEnterpriseOpeningDetail',
                    name: 'inspectionEnterpriseOpeningDetail',
                    meta: {
                        tag: 'inspectionEnterpriseOpening',
                        title: '检测企业开通详情',
                        isDetail: true
                    },
                    component: () => import('./views/productManagement/inspection/inspectionEnterpriseOpeningDetail')
                },
                {
                    path: '/inspectionCityOpen',
                    name: 'inspectionCityOpen',
                    meta: {
                        tag: 'inspectionCityOpen',
                        title: '城市业务开通'
                    },
                    component: () => import('./views/productManagement/inspection/inspectionCityOpen')
                },
                {
                    path: '/inspectionCityOpenDetail',
                    name: 'inspectionCityOpenDetail',
                    meta: {
                        tag: 'inspectionCityOpen',
                        isDetail: true,
                        title: '开通城市信息'
                    },
                    component: () => import('./views/productManagement/inspection/inspectionCityOpenDetail')
                },
                {
                    path: '/vtamsCityConfig',
                    name: 'vtamsCityConfig',
                    meta: {
                        tag: 'vtamsCityConfig',
                        isDetail: true,
                        title: '城市业务开通'
                    },
                    component: () => import('./views/productManagement/ys/vtamsCityConfig.vue')
                },
                {
                    path: '/vtamsCityConfig2',
                    name: 'vtamsCityConfig2',
                    meta: {
                        tag: 'vtamsCityConfig2',
                        isDetail: true,
                        title: '城市业务开通'
                    },
                    component: () => import('./views/productManagement/ys/vtamsCityConfig2.vue')
                },
                {
                    path: '/cityOpenDetail',
                    name: 'cityOpenDetail',
                    meta: {
                        tag: 'vtamsCityConfig',
                        isDetail: true,
                        title: '城市业务详情'
                    },
                    component: () => import('./views/productManagement/ys/cityOpenDetail.vue')
                },
                {
                    path: '/cityOpenDetail2',
                    name: 'cityOpenDetail2',
                    meta: {
                        tag: 'vtamsCityConfig2',
                        isDetail: true,
                        title: '城市业务详情'
                    },
                    component: () => import('./views/productManagement/ys/cityOpenDetail2.vue')
                },
                {
                    path: '/vehicleMaintenanceConfig',
                    name: 'vehicleMaintenanceConfig',
                    meta: {
                        tag: 'vtamsCityConfig',
                        isDetail: true,
                        title: '车辆维护作业标准配置'
                    },
                    component: () => import('./views/productManagement/ys/vehicleMaintenanceConfig.vue')
                },
                {
                    path: '/vtamsEnterprise',
                    name: 'vtamsEnterprise',
                    meta: {
                        tag: 'vtamsEnterprise',
                        isDetail: true,
                        title: '企业业务开通'
                    },
                    component: () => import('./views/productManagement/ys/vtamsEnterprise.vue')
                },
                {
                    path: '/vtamsEnterprise2',
                    name: 'vtamsEnterprise2',
                    meta: {
                        tag: 'vtamsEnterprise2',
                        isDetail: true,
                        title: '城市业务开通'
                    },
                    component: () => import('./views/productManagement/ys/vtamsEnterprise2.vue')
                },
                {
                    path: '/vtamsEnterpriseDetail',
                    name: 'vtamsEnterpriseDetail',
                    meta: {
                        tag: 'vtamsEnterpriseDetail',
                        isDetail: true,
                        title: '企业业务开通'
                    },
                    component: () => import('./views/productManagement/ys/vtamsEnterpriseDetail.vue')
                },
                {
                    path: '/enterpriseOpenDetail',
                    name: 'enterpriseOpenDetail',
                    meta: {
                        tag: 'vtamsEnterprise',
                        isDetail: true,
                        title: '企业业务详情'
                    },
                    component: () => import('./views/productManagement/ys/enterpriseOpenDetail.vue')
                },
                {
                    path: '/enterpriseOpenDetailOnlyLook',
                    name: 'enterpriseOpenDetailOnlyLook',
                    meta: {
                        tag: 'vtamsEnterprise',
                        isDetail: true,
                        title: '企业业务详情'
                    },
                    component: () => import('./views/productManagement/ys/enterpriseOpenDetailOnlyLook.vue')
                },
                {
                    path: '/detectionLine',
                    name: 'detectionLine',
                    meta: {
                        isDetail: true,
                        title: '检测线开通'
                    },
                    component: () => import('./views/productManagement/inspection/detectionLine')
                },
                {
                    path: '/enterpriseUserManagement',
                    name: 'enterpriseUserManagement',
                    meta: {
                        title: '企业用户管理'
                    },
                    component: () => import('./views/productManagement/repairEnterprise/enterpriseUserManagement')
                },
                {
                    path: '/enterpriseUploadDataRank',
                    name: 'enterpriseUploadDataRank',
                    meta: {
                        title: '维修数据上传排名'
                    },
                    component: () => import('./views/productManagement/repairEnterprise/enterpriseUploadDataRank')
                },
                {
                    path: '/entUserManagedetail',
                    name: 'entUserManagedetail',
                    meta: {
                        tag: 'enterpriseUserManagement',
                        title: '企业用户详情',
                        isDetail: true
                    },
                    component: () => import('./views/productManagement/repairEnterprise/entUserManagedetail')
                },
                {
                    path: '/maintenanceOfEnterpriseDetailEdit',
                    name: 'maintenanceOfEnterpriseDetailEdit',
                    meta: {
                        isDetail: true,
                        tag: 'enterpriseUserManagement',
                        title: '企业信息详情'
                    },
                    component: () => import('./views/productManagement/repairEnterprise/maintenanceOfEnterpriseDetailEdit')
                },
                {
                    path: '/operateNotice',
                    name: 'operateNotice',
                    meta: {
                        title: '运营通告'
                    },
                    component: () => import('./views/business/serviceOperate/operateNotice')
                },
                {
                    path: '/operateNoticeDetail',
                    name: 'operateNoticeDetail',
                    meta: {
                        tag: 'operateNotice',
                        title: '通告详情'
                    },
                    component: () => import('./views/business/serviceOperate/operateNoticeDetail')
                },
                {
                    path: '/messageManagement',
                    name: 'messageManagement',
                    meta: {
                        title: '运营短信管理'
                    },
                    component: () => import('./views/business/serviceOperate/messageManagement')
                },
                {
                    path: '/messageDetail',
                    name: 'messageDetail',
                    meta: {
                        tag: 'messageManagement',
                        title: '运营短信详情'
                    },
                    component: () => import('./views/business/serviceOperate/messageDetail')
                },
                {
                    path: '/operateServiceRecord',
                    name: 'operateServiceRecord',
                    meta: {
                        title: '运营服务记录'
                    },
                    component: () => import('./views/business/serviceOperate/operateServiceRecord')
                },
                {
                    path: '/purchaseExport',
                    name: 'purchaseExport',
                    meta: {
                        title: '采购出库'
                    },
                    component: () => import('./views/business/serviceOperate/purchaseExport')
                },
                {

                    path: '/evaluateFeedback',
                    name: 'evaluateFeedback',
                    meta: {
                        title: '评价反馈跟踪'
                    },
                    component: () => import('./views/business/serviceOperate/evaluateFeedback')
                },
                {

                    path: '/performanceStatistics',
                    name: 'performanceStatistics',
                    meta: {
                        title: '运营人员绩效统计'
                    },
                    component: () => import('./views/business/serviceOperate/performanceStatistics')
                },
                {
                    path: '/repairEnterpriseSys',
                    name: 'repairEnterpriseSys',
                    meta: {
                        title: '维修企业服务系统'
                    },
                    component: () => import('./views/business/serviceOperate/repairEnterpriseSys')
                },
                {
                    path: '/enterpriseOnlineList',
                    name: 'enterpriseOnlineList',
                    meta: {
                        tag: 'repairEnterpriseSys',
                        title: '在线用户列表'
                    },
                    component: () => import('./views/business/serviceOperate/enterpriseOnlineList')
                },
                {
                    path: '/enterpriseTodayList',
                    name: 'enterpriseTodayList',
                    meta: {
                        tag: 'repairEnterpriseSys',
                        title: '当日登录用户列表'
                    },
                    component: () => import('./views/business/serviceOperate/enterpriseTodayList')
                },
                {
                    path: '/enterpriseThreeTodayList',
                    name: 'enterpriseThreeTodayList',
                    meta: {
                        tag: 'repairEnterpriseSys',
                        title: '三日新增用户列表'
                    },
                    component: () => import('./views/business/serviceOperate/enterpriseThreeTodayList')
                },
                {
                    path: '/enterpriseSevenTodayList',
                    name: 'enterpriseSevenTodayList',
                    meta: {
                        tag: 'repairEnterpriseSys',
                        title: '七日登录用户列表'
                    },
                    component: () => import('./views/business/serviceOperate/enterpriseSevenTodayList')
                },
                {
                    path: '/block',
                    name: 'block',
                    meta: {
                        title: '正在建设中'
                    },
                    component: () => import('./views/common/block')
                },
                {
                    path: '/errorLog',
                    name: 'errorLog',
                    meta: {
                        title: '错误日志'
                    },
                    component: () => import('./views/common/errorLog')
                },
                {
                    path: '/carDataStatistics',
                    name: 'carDataStatistics',
                    meta: {
                        title: '车辆数据统计'
                    },
                    component: () => import('./views/dataManagement/dataStatistics/carDataStatistics')
                },
                {
                    path: '/enterpriseDataStatistics',
                    name: 'enterpriseDataStatistics',
                    meta: {
                        title: '维修企业数据统计'
                    },
                    component: () => import('./views/dataManagement/dataStatistics/enterpriseDataStatistics')
                },
                {
                    path: '/jcDataStatistics',
                    name: 'jcDataStatistics',
                    meta: {
                        title: '检测企业数据统计'
                    },
                    component: () => import('./views/dataManagement/dataStatistics/jcDataStatistics')
                },
                {
                    path: '/owerDataStatistics',
                    name: 'owerDataStatistics',
                    meta: {
                        title: '车主数据统计'
                    },
                    component: () => import('./views/dataManagement/dataStatistics/owerDataStatistics')
                },
                {
                    path: '/maintenanceDataStatistics',
                    name: 'maintenanceDataStatistics',
                    meta: {
                        title: '维修数据统计'
                    },
                    component: () => import('./views/dataManagement/dataStatistics/maintenanceDataStatistics')
                },
                {
                    path: '/marketingActivities',
                    name: 'marketingActivities',
                    meta: {
                        title: '营销活动管理',
                        tag: 'marketingActivities'
                    },
                    component: () => import('./views/productManagement/jch/marketingActivities')
                },
                {
                    path: '/marketingActivitiesDetail',
                    name: 'marketingActivitiesDetail',
                    meta: {
                        title: '营销活动详情',
                        tag: 'marketingActivities'
                    },
                    component: () => import('./views/productManagement/jch/marketingActivitiesDetail')
                },
                {
                    path: '/marketingActivitiesView',
                    name: 'marketingActivitiesView',
                    meta: {
                        title: '营销活动详情',
                        tag: 'marketingActivities'
                    },
                    component: () => import('./views/productManagement/jch/marketingActivitiesView')
                },
                {
                    path: '/bannerManage',
                    name: 'bannerManage',
                    meta: {
                        title: 'Banner图片管理',
                        tag: 'bannerManage'
                    },
                    component: () => import('./views/productManagement/jch/bannerManage')
                },
                {
                    path: '/bannerManageDetail',
                    name: 'bannerManageDetail',
                    meta: {
                        title: 'Banner图片详情',
                        tag: 'bannerManage'
                    },
                    component: () => import('./views/productManagement/jch/bannerManageDetail')
                },
                {
                    path: '/certificateProvide',
                    name: 'certificateProvide',
                    meta: {
                        title: '二维合格证发放',
                        tag: 'certificateProvide'
                    },
                    component: () => import('./views/productManagement/cjl/certificateProvide')
                },
                {
                    path: '/certificateIssuance',
                    name: 'certificateIssuance',
                    meta: {
                        title: '合格证发放',
                        tag: 'certificateIssuance'
                    },
                    component: () => import('./views/productManagement/cjl/certificateIssuance')
                },
                {
                    path: '/maintainCertificate',
                    name: 'maintainCertificate',
                    meta: {
                        title: '维护合格证发放',
                        tag: 'certificate'
                    },
                    component: () => import('./views/productManagement/cjl/maintainCertificate')
                },
                {
                    path: '/identityCardPurchase',
                    name: 'identityCardPurchase',
                    meta: {
                        title: '识别卡采购',
                        tag: 'identityCardPurchase'
                    },
                    component: () => import('./views/productManagement/cjl/identityCardPurchase')
                },
                {
                    path: '/identityCardOrder',
                    name: 'identityCardOrder',
                    meta: {
                        title: '识别卡订单管理',
                        tag: 'identityCardOrder'
                    },
                    component: () => import('./views/productManagement/cjl/identityCardOrder')
                },
                {
                    path: '/off-lineRemittance',
                    name: 'off-lineRemittance',
                    meta: {
                        title: '线下汇款管理',
                        tag: 'off-lineRemittance'
                    },
                    component: () => import('./views/productManagement/cjl/off-lineRemittance')
                },
                {
                    path: '/bankInfo',
                    name: 'bankInfo',
                    meta: {
                        title: '银行信息',
                        tag: 'bankInfo'
                    },
                    component: () => import('./views/productManagement/cjl/bankInfo')
                },
                {
                    path: '/identityCardReplacement',
                    name: 'identityCardReplacement',
                    meta: {
                        title: '识别卡补发',
                        tag: 'identityCardReplacement'
                    },
                    component: () => import('./views/productManagement/cjl/identityCardReplacement')
                },
                {
                    path: '/identityCardManage',
                    name: 'identityCardManage',
                    meta: {
                        title: '识别卡管理',
                        tag: 'identityCardManage'
                    },
                    component: () => import('./views/productManagement/cjl/identityCardManage')
                },
                {
                    path: '/cjlUserManage',
                    name: 'cjlUserManage',
                    meta: {
                        title: '用户管理',
                        tag: 'cjlUserManage'
                    },
                    component: () => import('./views/productManagement/cjl/cjlUserManage')
                },
                {
                    path: '/cjlUserManageDetail',
                    name: 'cjlUserManageDetail',
                    meta: {
                        title: '用户管理详情',
                        tag: 'cjlUserManage'
                    },
                    component: () => import('./views/productManagement/cjl/cjlUserManageDetail')
                },
                {
                    path: '/maintenanceStatistics',
                    name: 'maintenanceStatistics',
                    meta: {
                        title: '企业维修统计',
                        tag: 'maintenanceStatistics'
                    },
                    component: () => import('./views/statisticalQuery/maintenanceStatistics')
                },
                {
                    path: '/maintenanceStatisticsDetail',
                    name: 'maintenanceStatisticsDetail',
                    meta: {
                        title: '维修记录',
                        tag: 'maintenanceStatistics'
                    },
                    component: () => import('./views/statisticalQuery/maintenanceStatisticsDetail')
                },
                {
                    path: '/advertisingManager',
                    name: 'advertisingManager',
                    meta: {
                        title: '广告管理',
                        tag: 'advertisingManager'
                    },
                    component: () => import('./views/business/advertisingManager')
                },
                {
                    path: '/advertisingDetail',
                    name: 'advertisingDetail',
                    meta: {
                        title: '广告详情',
                        tag: 'advertisingManager'
                    },
                    component: () => import('./views/business/advertisingDetail')
                },
                {
                    path: '/advertisingStatistics',
                    name: 'advertisingStatistics',
                    meta: {
                        title: '广告统计',
                        tag: 'advertisingStatistics'
                    },
                    component: () => import('./views/business/advertisingStatistics')
                },
                {
                    path: '/advertisingView',
                    name: 'advertisingView',
                    meta: {
                        title: '广告详情',
                        tag: 'advertisingView'
                    },
                    component: () => import('./views/business/advertisingView')
                },
                // 业务管理comprehensiveQuery
                {
                    path: '/comprehensiveQuery',
                    name: 'comprehensiveQuery',
                    meta: {
                        title: '运输车辆综合查询',
                        tag: 'comprehensiveQuery'
                    },
                    component: () => import('./views/productManagement/businessManagement/comprehensiveQuery')
                },
                {
                    path: '/vehicleUnit',
                    name: 'vehicleUnit',
                    meta: {
                        title: '车辆单位',
                        tag: 'vehicleUnit'
                    },
                    component: () => import('./views/productManagement/businessManagement/vehicleUnit')
                },
                {
                    path: '/vehicleConsolidation',
                    name: 'vehicleConsolidation',
                    meta: {
                        title: '车辆合并',
                        tag: 'vehicleConsolidation'
                    },
                    component: () => import('./views/productManagement/businessManagement/vehicleConsolidation')
                },
                {
                    path: '/detectOverdueUnlocking',
                    name: 'detectOverdueUnlocking',
                    meta: {
                        title: '检测超期解锁',
                        tag: 'detectOverdueUnlocking'
                    },
                    component: () => import('./views/productManagement/businessManagement/detectOverdueUnlocking')
                },
                {
                    path: '/maintainArchiveQuery',
                    name: 'maintainArchiveQuery',
                    meta: {
                        title: '维护归档查询',
                        tag: 'maintainArchiveQuery'
                    },
                    component: () => import('./views/productManagement/businessManagement/maintainArchiveQuery')
                },
                {
                    path: '/maintainArchiveDetail',
                    name: 'maintainArchiveDetail',
                    meta: {
                        title: '维护归档详情',
                        tag: 'maintainArchiveDetail'
                    },
                    component: () => import('./views/productManagement/businessManagement/maintainArchiveDetail')
                },
                {
                    path: '/inspectionArchiveQuery',
                    name: 'inspectionArchiveQuery',
                    meta: {
                        title: '检测归档查询',
                        tag: 'inspectionArchiveQuery'
                    },
                    component: () => import('./views/productManagement/businessManagement/inspectionArchiveQuery')
                },
                {
                    path: '/enterpriseTransactionStatistics',
                    name: 'enterpriseTransactionStatistics',
                    meta: {
                        title: '企业交易统计',
                        tag: 'enterpriseTransactionStatistics'
                    },
                    component: () => import('./views/BI/enterpriseConsumptionData/enterpriseTransactionStatistics')
                },
                {
                    path: '/ysEnterpriseData',
                    name: 'ysEnterpriseData',
                    meta: {
                        title: '运输企业信息',
                        tag: 'ysEnterpriseData'
                    },
                    component: () => import('./views/BI/companyData/ysEnterpriseData')
                },
                {
                    path: '/jcEnterpriseData',
                    name: 'jcEnterpriseData',
                    meta: {
                        title: '检测企业信息',
                        tag: 'jcEnterpriseData'
                    },
                    component: () => import('./views/BI/companyData/jcEnterpriseData')
                },
                {
                    path: '/wxEnterpriseData',
                    name: 'wxEnterpriseData',
                    meta: {
                        title: '维修企业信息',
                        tag: 'wxEnterpriseData'
                    },
                    component: () => import('./views/BI/companyData/wxEnterpriseData')
                },
                {
                    path: '/recordData',
                    name: 'recordData',
                    meta: {
                        title: '维修企业备案',
                        tag: 'recordData'
                    },
                    component: () => import('./views/BI/companyData/recordData')
                },
                {
                    path: '/inquestData',
                    name: 'inquestData',
                    meta: {
                        title: '维修企业勘验',
                        tag: 'inquestData'
                    },
                    component: () => import('./views/BI/companyData/inquestData')
                },
                {
                    path: '/paymentRecords',
                    name: 'paymentRecords',
                    meta: {
                        title: '企业代付记录',
                        tag: 'paymentRecords'
                    },
                    component: () => import('./views/BI/companyData/paymentRecords')
                },
                {
                    path: '/paymentRecordDetail',
                    name: 'paymentRecordDetail',
                    meta: {
                        title: '企业代付记录详情',
                        tag: 'paymentRecordDetail'
                    },
                    component: () => import('./views/BI/companyData/paymentRecordDetail')
                },
                {
                    path: '/technicianData',
                    name: 'technicianData',
                    meta: {
                        title: '技师数据',
                        tag: 'technicianData'
                    },
                    component: () => import('./views/BI/userData/technicianData')
                },
                {
                    path: '/ownerData',
                    name: 'ownerData',
                    meta: {
                        title: '车主数据',
                        tag: 'ownerData'
                    },
                    component: () => import('./views/BI/userData/ownerData')
                },
                {
                    path: '/ownerDataDetail',
                    name: 'ownerDataDetail',
                    meta: {
                        title: '车主数据详情',
                        tag: 'ownerDataDetail'
                    },
                    component: () => import('./views/BI/userData/ownerDataDetail')
                },
                {
                    path: '/identificationCardStatistics',
                    name: 'identificationCardStatistics',
                    meta: {
                        title: '识别卡统计',
                        tag: 'identificationCardStatistics'
                    },
                    component: () => import('./views/BI/businessData/identificationCardStatistics')
                },
                {
                    path: '/valuationData',
                    name: 'valuationData',
                    meta: {
                        title: '估值数据',
                        tag: 'valuationData'
                    },
                    component: () => import('./views/BI/businessData/valuationData')
                },
                {
                    path: '/valuationDataDetail',
                    name: 'valuationDataDetail',
                    meta: {
                        title: '估值数据详情',
                        tag: 'valuationDataDetail'
                    },
                    component: () => import('./views/BI/businessData/valuationDataDetail')
                },
                {
                    path: '/wasteData',
                    name: 'wasteData',
                    meta: {
                        title: '固废物台账',
                        tag: 'wasteData'
                    },
                    component: () => import('./views/BI/maintenanceAndTransportationBusinessData/wasteData')
                },
                {
                    path: '/wasteDataDetail',
                    name: 'wasteDataDetail',
                    meta: {
                        title: '固废物台账详情',
                        tag: 'wasteDataDetail'
                    },
                    component: () => import('./views/BI/maintenanceAndTransportationBusinessData/wasteDataDetail')
                },
                {
                    path: '/wasteTransferOrder',
                    name: 'wasteTransferOrder',
                    meta: {
                        title: '固废物转移联单',
                        tag: 'wasteTransferOrder'
                    },
                    component: () => import('./views/BI/maintenanceAndTransportationBusinessData/wasteTransferOrder')
                },
                {
                    path: '/wasteTransferOrderDetail',
                    name: 'wasteTransferOrderDetail',
                    meta: {
                        title: '固废物转移联单',
                        tag: 'wasteTransferOrder详情'
                    },
                    component: () => import('./views/BI/maintenanceAndTransportationBusinessData/wasteTransferOrderDetail')
                },
                {
                    path: '/reportData',
                    name: 'reportData',
                    meta: {
                        title: '报告单发放',
                        tag: 'reportData'
                    },
                    component: () => import('./views/configData/reportData.vue')
                },
                {
                    path: '/cardReceive',
                    name: 'cardReceive',
                    meta: {
                        title: '识别卡领取管理',
                        tag: 'cardReceive'
                    },
                    component: () => import('./views/configData/identificationCardManagement/cardReceive.vue')
                },
                {
                    path: '/cardStorage',
                    name: 'cardStorage',
                    meta: {
                        title: '识别卡入库管理',
                        tag: 'cardStorage'
                    },
                    component: () => import('./views/configData/identificationCardManagement/cardStorage.vue')
                },
                {
                    path: '/cardInfo',
                    name: 'cardInfo',
                    meta: {
                        title: '识别卡信息',
                        tag: 'cardInfo'
                    },
                    component: () => import('./views/configData/identificationCardManagement/cardInfo.vue')
                },
                {
                    path: '/cardAudit',
                    name: 'cardAudit',
                    meta: {
                        title: '识别卡审核',
                        tag: 'cardAudit'
                    },
                    component: () => import('./views/configData/identificationCardManagement/cardAudit.vue')
                },
                {
                    path: '/cardCancellationRecord',
                    name: 'cardCancellationRecord',
                    meta: {
                        title: '识别卡注销记录',
                        tag: 'cardCancellationRecord'
                    },
                    component: () => import('./views/configData/identificationCardManagement/cardCancellationRecord.vue')
                },
                {
                    path: '/cardStatistics',
                    name: 'cardStatistics',
                    meta: {
                        title: '识别卡统计',
                        tag: 'cardStatistics'
                    },
                    component: () => import('./views/configData/identificationCardManagement/cardStatistics.vue')
                },
                {
                    path: '/offlineRemittance',
                    name: 'offlineRemittance',
                    meta: {
                        title: '线下汇款管理',
                        tag: 'offlineRemittance'
                    },
                    component: () => import('./views/Information/offlineRemittance.vue')
                },
                {
                    path: '/financialAnomalies',
                    name: 'financialAnomalies',
                    meta: {
                        title: '财务异常管理',
                        tag: 'financialAnomalies'
                    },
                    component: () => import('./views/Information/financialAnomalies.vue')
                },
                {
                    path: '/wasteManage',
                    name: 'wasteManage',
                    meta: {
                        title: '固废物智慧设备管理',
                        tag: 'wasteManage'
                    },
                    component: () => import('./views/Information/wasteManage.vue')
                },
                {
                    path: '/wasteManageDetail',
                    name: 'wasteManageDetail',
                    meta: {
                        title: '固废物智慧设备管理详情',
                        tag: 'wasteManageDetail'
                    },
                    component: () => import('./views/Information/wasteManageDetail.vue')
                },
                {
                    path: '/wasteBind',
                    name: 'wasteBind',
                    meta: {
                        title: '设备绑定',
                        tag: 'wasteBind'
                    },
                    component: () => import('./views/Information/wasteBind.vue')
                },
                {
                    path: '/financialStatements',
                    name: 'financialStatements',
                    meta: {
                        title: '财务报表',
                        tag: 'financialStatements'
                    },
                    component: () => import('./views/Information/financialStatements.vue')
                },
                {
                    path: '/financialStatementsDetail',
                    name: 'financialStatementsDetail',
                    meta: {
                        title: '财务报表详情',
                        tag: 'financialStatementsDetail'
                    },
                    component: () => import('./views/Information/financialStatementsDetail.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue')
        },
        {
            path: '/findPassword',
            name: 'findPassword',
            meta: {
                title: '找回密码',
                tag: 'financialStatementsDetail'
            },
            component: () => import('./views/findPassword.vue')
        },
        {
            path: '/homeV3',
            name: 'homeV3',
            meta: {
                title: 'win'
            },
            component: () => import('./views/homeV3.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    // console.log('route')
    let login = process.env.NODE_ENV === 'development' || process.env.VUE_APP_CURRENTMODE === 'show' || getCookie('token')
    let path = to.path
    if (!/login|empty/.test(to.path)) {
        // 页面跳转权限
        let authList = JSON.parse(localStorage.authList || '[]')
        for (let i = 0; i < authList.length; i++) {
            for (let j = 0; j < authList.length; j++) {
                if ('/' + authList[i].url === to.path && authList[i].type === 2) {
                    if (authList[j].parentId === authList[i].sysMenuId && authList[j].name === '访问') {
                        // 权限校验**********************************************************
                        if (authList[j].isSelect === 0) {
                            vm.$msg({
                                type: 'error',
                                message: '你没有该页面的权限'
                            })
                            return
                        }
                    }
                }
            }
        }
        let flag = true
        console.log(to)
        for (let i = 0; i < store.state.tabsList.length; i++) {
            if (store.state.tabsList[i].name === to.name) {
                flag = false
                // 如果跳转的页面存在并且参数不一样，则清除原有页面缓存并替换tabsList路径
                if (store.state.tabsList[i].path !== to.fullPath) {
                    store.state.tabsList[i].path = to.fullPath
                    store.dispatch('delCache', to.name)
                }
                break
            }
        }
        if (!flag && store.state.tabsList.length >= 25) {
            vm.$alert('当前打开页面过多,请关闭一些后再试', '提示')
            return
        }
        // 没有相同的组件则新增tab
        console.log(to)
        if (to.name && to.meta.title) {
            if (flag && store.state.tabsList.length < 25) {
                store.state.tabsList.push({
                    path: to.fullPath,
                    name: to.name,
                    title: to.meta.title
                })
                store.state.tabShow = true
            }
            store.state.activeTab = to.name
        } else {
            next({
                path: '/block'
            })
        }
    }
    // if (path === '/p21' || path === '/p22' || path === '/p23' || path === '/p24') {
    //     // vm.$alert('正在建设中，敬请期待！', '提示')
    //     // console.log(vm.s)
    //     next({
    //         path: '/block'
    //     })
    //     return
    // }
    // if (document.getElementById('scrollbar')) {
    //     console.log(vm.$refs)
    //     console.dir(document.getElementById('scrollbar').__vue__.update())
    // }
    // 路由白名单
    if (/login/.test(path)) {
        next()
        return
    }
    if (!localStorage.menuList) {
        next({
            path: '/login'
        })
    }
    if (login) {
        next()
    } else {
        next({
            path: '/login'
        })
    }
})

export default router

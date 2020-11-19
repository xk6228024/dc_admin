<!-- 维修企业上传数据排名 -->
<template>
    <div class="enterpriseUploadDataRank clearfix" id="enterpriseUploadDataRank">
        <breadcrumb>
            <div class="city-tabs">
                <div class="city-tabs-item" :class="{active: rankType === 'city'}" @click="changeRankType('city')">城市排名</div>
                <div class="city-tabs-item" :class="{active: rankType === 'ent'}" @click="changeRankType('ent')">企业排名</div>
            </div>
            <el-button class="fr mt17" @click="closePage">关 闭</el-button>
        </breadcrumb>
        <div class="market" v-loading="loading">
            <ul class="rank-list">
                <li class="rank-list-item title">
                    <div class="item-text item-text1" v-if="rankType === 'city'">城市排名</div>
                    <div class="item-text item-text1" v-else>企业排名</div>
                    <div class="item-text item-text2">上传数</div>
                </li>
                <li class="rank-list-item" :class="{active: rankIndex === index}" @click="selectDetail(index, item.id)"
                v-for="(item, index) in rankList" :key="index">
                    <div class="item-text item-text1" :title="item.keyname">{{item.keyname}}</div>
                    <div class="item-text item-text2">{{item.countvalue}}</div>
                </li>
            </ul>
        </div>
        <div class="table" v-loading="loading">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="维修类别">
                    <template slot-scope="scope">
                        <span>{{scope.row.vehicleFixCategory | fixCategoryFilter}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="vehicleLicensePlate"
                align="left"
                min-width="10%"
                label="车牌号码">
                </el-table-column>
                <el-table-column
                prop="vehicleFixDate"
                align="left"
                min-width="10%"
                label="送修时间">
                    <template slot-scope="scope">
                        {{scope.row.vehicleFixDate|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="vehicleFixFactoryDate"
                align="left"
                min-width="10%"
                label="出厂时间">
                    <template slot-scope="scope">
                        {{scope.row.vehicleFixFactoryDate|filterTime('yyyy-mm-dd')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                min-width="20%"
                label="上传企业">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.enterpriseId, scope.row.vehicleFixId)" type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { repairType } from '@/utils/type.js'
import store from '@/store.js'
export default {
    name: 'enterpriseUploadDataRank',
    data () {
        return {
            searchText: '',
            rankType: 'city',
            areaUserId: '',
            regionList: {}, // 大区和城市
            selectRegionId: '', // 已选择的城市ID
            workUserList: [],
            data: [],
            total: 0,
            pageNum: 1,
            pageSize: 10,
            rankIndex: '',
            rankId: '',
            timeType: 'week',
            rankList: [],
            loading: false,
            tableData: []
        }
    },
    components: {
        Breadcrumb
    },
    beforeRouteEnter (to, from, next) {
        let tabList = store.state.tabsList
        tabList.forEach(item => {
            if (item.name === 'enterpriseUploadDataRank') {
                if (to.query.time === '1') {
                    item.title = '本周维修数据上传排名'
                } else if (to.query.time === '2') {
                    item.title = '本月维修数据上传排名'
                } else if (to.query.time === '3') {
                    item.title = '本年维修数据上传排名'
                }
            }
        })
        next()
    },
    created () {
        if (this.$route.query.type === '1' || !this.$route.query.type) {
            this.rankType = 'city'
        }
        if (this.$route.query.type === '2') {
            this.rankType = 'ent'
        }
        if (this.$route.query.time === '1') {
            this.timeType = 'week'
        }
        if (this.$route.query.time === '2') {
            this.timeType = 'month'
        }
        if (this.$route.query.time === '3') {
            this.timeType = 'year'
        }
        this.getRankList()
    },
    methods: {
        // 获取排名列表
        getRankList () {
            this.loading = true
            this.$get(`/vehiclefixupload/count/${this.rankType}/${this.timeType}`).then(res => {
                if (res.code === 0) {
                    this.rankList = res.data || []
                    if (this.rankList.length > 0) {
                        this.selectDetail(0, this.rankList[0].id)
                    } else {
                        this.loading = false
                    }
                }
            }).catch(() => {
                this.loading = false
            })
        },
        // 选择查看具体排名详情
        selectDetail (index, id) {
            this.rankIndex = index
            this.rankId = id
            this.pageNum = 1
            this.pageSize = 10
            this.getList()
        },
        // 获取列表数据
        getList () {
            if (!this.rankId) {
                this.loading = false
                return
            }
            this.$get(`/vehiclefixupload/list/${this.rankType}/${this.timeType}/${this.rankId}?page=${this.pageNum}&size=${this.pageSize}`, {})
                .then(res => {
                    if (res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                })
                .catch(e => {
                    this.loading = false
                })
        },
        // 详情编辑
        goDetail (enterpriseId, vehicleFixId) {
            this.$router.push(`/maintenanceDataDetail?id=${vehicleFixId}`)
            // if (this.rankType === 'city') {
            //     this.$router.push(`/maintenanceOfEnterpriseDetail?id=${enterpriseId}`)
            // } else {
            //     this.$router.push(`/maintenanceDataDetail?id=${vehicleFixId}`)
            // }
        },
        changeRankType (type) {
            if (this.rankType !== type) {
                this.rankIndex = ''
                this.tableData = []
            }
            this.total = 0
            this.rankType = type
            this.getRankList()
        },
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getList()
        },
        closePage () {
            // this.$store.dispatch('closePage', {
            //     nextPath: '/home'
            // })
            this.$store.dispatch('closePage', {
                nextPath: '/inspectionOfEnterpriseArchives'
            })
        }
    },
    filters: {
        fixCategoryFilter (val) {
            for (var i = 0; i < repairType.length; i++) {
                if (val === repairType[i].value) {
                    return repairType[i].label
                }
            }
            return val
        }
    }
}
</script>

<style lang='less' scoped>
#enterpriseUploadDataRank {
    position: relative;
    .city-tabs {
        display: inline-block;
        .city-tabs-item {
            display: inline-block;
            height: 46px;
            line-height: 46px;
            width: 88px;
            text-align: center;
            font-size: 15px;
            color: rgba(0,0,0,0.65);
            font-weight: bold;
            margin-top: 10px;
            margin-right: 30px;
            cursor:pointer;
            &.active{
                border-bottom: 2px solid #4D7CFE;
                color: #4D7CFE;
            }
        }
    }
    .table {
        margin-top: 0;
        border-top: 20px solid #f0f2f5;
        padding: 30px;
        margin-left: 320px;
        margin-right: 0;
    }
    .form {
        .upload_tips {
            position: absolute;
            color: #98A9BC;
            font-size: 14px;
            top: 3px;
            left: 120px;
        }
        .form_left {
            width: 50%;
            float: left;
        }
        .form_right {
            width: 50%;
            float: left;
        }
    }
    .market {
        width: 300px;
        padding: 30px 0;
        position: absolute;
        top: 70px;
        left:0;
        bottom: 0;
        border-top: 20px solid #F0F2F5;
        border-right: 20px solid #F0F2F5;
        overflow-y: auto;
        .rank-list {
            .rank-list-item {
                height: 44px;
                line-height: 44px;
                cursor:pointer;
                &.title {
                    background: #FAFAFA;
                    font-weight: bold;
                }
                &.active {
                    background: #4D7CFE;
                    color: #fff;
                }
                .item-text {
                    // width: 50%;
                    // text-indent: 20px;
                    display: inline-block;
                    height: 44px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                }
                .item-text1 {
                    width: 69%;
                }
                .item-text2 {
                    width: 31%;
                }
            }
        }
    }
}
</style>
<style lang='less'>
#enterpriseUploadDataRank {
    min-height: 100%;
    .small_input {
        margin-right: 10px;
        .el-input__inner {
            width: 100px;
        }
    }
    .w280_input {
        width: 280px;
    }
    .el-input__icon {
        resize: none;
    }
    .el-form .el-form-item__label {
        color: #262626;
    }
    .el-textarea__inner {
        resize: none;
    }
}
.el-select-group__title {
    padding-left: 8px !important;
}
</style>

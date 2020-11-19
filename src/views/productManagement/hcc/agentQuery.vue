<!-- 代理商管理 -->
<template>
    <div class="agentQuery">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-select class="w120_input" clearable v-model="areaId" placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.sysAreaId"
                :label="item.areaName"
                clearable
                :value="item.sysAreaId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" clearable v-model="regionId" placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                clearable
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">关键词:</label>
            <el-input style="width:160px;" clearable class="search-text" v-model="enterpriseNamekey" placeholder="代理账号/手机号码"></el-input>
            <div class="dlb">
                <label for="">创建时间:</label>
                <el-date-picker
                    v-model="dateRegion"
                    type="daterange"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    class="search-text vam"
                    value-format="yyyy-MM-dd"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button class="search" @click="search">查询</el-button>
            </div>
            <el-button class="fr mt17" type="primary" @click="$router.push('/agentEdit')">创建代理</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="areaRegionName"
                align="left"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="agentAccount"
                align="left"
                label="代理商账号">
                </el-table-column>
                <el-table-column
                prop="agentLinkMobile"
                align="left"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="agentLinkName"
                align="left"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="relativeUerCount"
                align="left"
                label="下级用户数">
                </el-table-column>
                <el-table-column
                prop="status"
                align="left"
                label="使用状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status==0">禁用</span>
                        <span v-if="scope.row.status==1">启用</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                label="创建时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                width="120"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="editDetail(scope.row.agentId)" type="text" size="small" :disabled="!$checkAuth('sys:user:view')">编辑</el-button>
                        <el-button @click="goDetail(scope.row.agentId)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">详情</el-button>
                        <el-button v-if="!scope.row.status" @click="enableStatus(scope.row.agentId, 1)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">启用</el-button>
                        <el-button v-else @click="enableStatus(scope.row.agentId, 0)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">禁用</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper, slot"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name: 'agentQuery',
    data () {
        return {
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaId: '', // 大区Id
            enterpriseNamekey: '',
            auditRadio: '1', // 弹窗审核结果
            certStatus: 0,
            certStatusList: [
                {
                    value: 0,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '通过'
                },
                {
                    value: 2,
                    label: '未通过'
                }
            ],
            dateRegion: [],
            value: '',
            options: [],
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: []
        }
    },
    components: {
        Breadcrumb
    },
    created () {
        this.getAreaList()
        this.getDataList()
    },
    watch: {
        areaId (val) {
            this.regionId = ''
            this.cityList = []
            if (!val) return
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        }
    },
    methods: {
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                }
            })
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            let obj = {
                searchKey: this.enterpriseNamekey,
                areaRegion: this.areaId,
                city: this.regionId
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            }
            this.$post('agent/find?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 打开详情
        goDetail (id) {
            this.$router.push('/agentDetail?id=' + id)
        },
        // 打开编辑
        editDetail (id) {
            this.$router.push('/agentEdit?id=' + id)
        },
        // 启用
        enableStatus (id, status) {
            this.$post('agent/updatestatus', {
                agentId: id,
                status: status
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getDataList()
                }
            })
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getDataList()
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        }
    }
}
</script>

<style lang='less' scoped>
.agentQuery {
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .tips {
        position: absolute;
        top: 0;
        line-height: 40px;
        color: #98A9BC;
        font-size: 14px;
        font-weight: normal;
    }
    .alertInner {
        padding: 0 40px;
        table {
            width: 100%;
            border: none;
            line-height: 44px;
            td {
                padding: 0 10px;
                box-sizing: border-box;
            }
            .blueTilte {
                background: rgb(242, 244, 246);
            }
            .resonInput {
                line-height: 36px;
                width: 600px;
                border: none;
                outline: none;
            }
            .importantIcon {
                color: red;
                margin-right: 4px;
            }
        }
    }
}
</style>
<style lang='less'>
.agentQuery {
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
    .el-pagination {
        position: relative;
    }
}
</style>

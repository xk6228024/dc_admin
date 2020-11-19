<!-- 当日登录用户列表 -->
<template>
    <div class="enterpriseThreeTodayList">
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%;min-height:550px;overflow: auto;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="provinceName"
                align="left"
                width="150"
                label="省份">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                width="150"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="entName"
                align="left"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="loginDate"
                align="left"
                width="200"
                label="上线时间">
                    <template slot-scope="scope">
                        {{scope.row.loginDate | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                width="150"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="goDetail(scope.row.entId)" type="text" size="small">查看</el-button>
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
export default {
    name: 'enterpriseThreeTodayList',
    data () {
        return {
            searchKeyword: '',
            pageSize: 10,
            pageNum: 1,
            total: 0,
            tableData: []
        }
    },
    components: {
    },
    created () {
        this.getDataList()
    },
    activated () {
        this.getDataList()
    },
    watch: {
    },
    methods: {
        // 获取所有数据
        getDataList () {
            this.$post(`/onlines/threeDayRegisterList?page=${this.pageNum}&size=${this.pageSize}`)
                .then(res => {
                    if (res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                    }
                })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.getDataList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getDataList()
        },
        goDetail (id) {
            this.$router.push('/maintenanceOfEnterpriseDetailEdit?id=' + id)
        }
    }
}
</script>

<style lang='less' scoped>
.table {
    margin: 30px;
    position: relative;
    .table-total {
        position: absolute;
        left: 0;
        bottom: 12px;;
    }
}
.w120_input {
    width: 100px;
}
</style>

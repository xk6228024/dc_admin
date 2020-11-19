<!-- 日志查询 -->
<template>
    <div class="errorLog">
        <breadcrumb>
            <label>类型:</label>
            <el-select class="w120_input" v-model="errorType" clearable placeholder="请选择">
                <el-option
                v-for="item in errorTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <label>关键词:</label>
            <el-input style="width:260px;" class="search-text" clearable v-model="searchKeyword" placeholder="请输入日志/路径/页面"></el-input>
            <el-button class="search" @click="search">查询</el-button>
            <el-button type="primary" class="fr mt17" @click="clear">清除日志</el-button>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                style="width: 100%;min-height:550px;;">
                <el-table-column
                prop="num"
                align="left"
                width="80"
                label="序号">
                </el-table-column>
                <el-table-column
                prop="type"
                align="left"
                label="类型">
                    <template slot-scope="scope">
                        {{scope.row.type === 1 ? '代码错误' : '网络错误'}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="err"
                align="left"
                min-width="300"
                label="错误日志">
                </el-table-column>
                <el-table-column
                prop="path"
                align="left"
                label="错误路径">
                </el-table-column>
                <el-table-column
                prop="title"
                align="left"
                label="错误页面">
                </el-table-column>
                <el-table-column
                prop="time"
                align="left"
                min-width="90"
                label="时间">
                    <template slot-scope="scope">
                        {{scope.row.time | filterTime('yyyy-mm-dd hh:ff:ss')}}
                    </template>
                </el-table-column>
                <el-table-column
                prop="remark"
                align="left"
                label="备注">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { clearLog } from '@/utils/errorLog.js'
export default {
    name: 'errorLog',
    data () {
        return {
            searchKeyword: '',
            tableData: [
            ],
            errorType: '',
            errorTypeList: [
                {
                    value: 1,
                    label: '代码错误'
                },
                {
                    value: 2,
                    label: '网络错误'
                }
            ]
        }
    },
    components: {
        Breadcrumb
    },
    created () {
        this.getDataList()
    },
    watch: {
    },
    methods: {
        // 获取所有数据
        getDataList () {
            if (localStorage.errorLog) {
                this.tableData = this.$setNum(JSON.parse(localStorage.errorLog), 1, 10)
                this.initData = this.tableData
            }
        },
        clear () {
            this.$confirm('清除后不可恢复，确定继续吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                clearLog()
                this.getDataList()
                this.$message({
                    type: 'success',
                    message: '清除成功!'
                })
            }).catch(() => {
            })
        },
        search () {
            this.tableData = this.initData.filter(item => {
                const reg = new RegExp(this.searchKeyword, 'i')
                if (this.errorType) {
                    return (reg.test(item.err) || reg.test(item.path) || reg.test(item.title)) && item.type === this.errorType
                } else {
                    return (reg.test(item.err) || reg.test(item.path) || reg.test(item.title))
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
.table {
    margin: 20px;
    margin-top: 0;
}
.w120_input {
    width: 100px;
}
</style>

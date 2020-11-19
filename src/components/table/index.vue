<template>
    <div class="table">
        <el-table
        ref="multipleTable"
        v-loading="loading"
        class="custom-table"
        :data="tableData"
        :header-cell-style="{'background': '#FAFAFA', 'text-align':'left'}"
        :cell-style="{'text-align':'left'}"
        :stripe="false"
        row-class-name="table-item"
        header-row-class-name="table-header-item"
        @row-click="handleRowClick"
        @selection-change="handleSelectionChange"
        v-bind='$attrs'
        >
            <el-table-column v-if="isCheck" type="selection" width="60" />
            <el-table-column
                v-for="(item) in labelData"
                :key="item.label + getId()"
                :label="item.label"
                :prop="item.prop"
                :width="item.width || ''"
                :min-width="item.minWidth || ''"
                :fixed="item.fixed"
                :render-header="renderHeader"
            >
                <template slot-scope="scope">
                <template v-if="item.slotName && item.slotName != ''">
                    <slot :name="item.slotName" :slotData="scope.row" />
                </template>
                <template v-else>
                    <span>{{ scope.row[item.prop] }}</span>
                </template>
                </template>
                <!-- <template slot="header" slot-scope="slot">
                    <div>
                        <span>状态</span>
                        <el-tooltip class="tooltip" effect="light" content="指...的状态" placement="top">
                            <i class="el-icon-question"></i>
                        </el-tooltip>
                    </div>
                </template> -->
            </el-table-column>
        </el-table>
        <slot name="tip">
        </slot>
        <div class="page" v-if="showElPage">
            <el-pagination
                :current-page.sync="pageNum"
                background
                :page-sizes="[10, 15, 20]"
                layout="prev, pager, next, sizes,  jumper, total"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
            <!-- :page-size="pageSize" -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    inheritAttrs: false,
    props: {
        pageSize: {
            // 单页数量(可选)
            type: Number,
            dafeult: () => {
                return 10
            }
        },
        isCheck: {
            // 是否支持选择(可选)
            type: Boolean,
            default: () => {
                return false
            }
        },
        labelData: {
            type: Array,
            required: true,
            default: () => {
                return []
            }
        },
        tableData: {
            type: Array,
            required: true,
            default: () => {
                return []
            }
        },
        loading: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        total: {
            type: Number,
            default: () => {
                return 0
            }
        },
        currentPage: {
            type: Number,
            default: () => {
                return 1
            }
        },
        showElPage: {
            type: Boolean,
            default: () => {
                return true
            }
        }
    },
    data () {
        return {
            pageNum: 1
        }
    },
    watch: {
        currentPage: {
            handler: function (val) {
                // console.log('页码: ', val)
                this.pageNum = val
            },
            immediate: true
        }
    },
    methods: {
        handleRowClick (row, column, event) {
            this.$refs.multipleTable.toggleRowSelection(row)
            // this.$refs.multipleTable.clearSelection(); // 取消勾选
        },
        handleSelectionChange (val) {
            this.$emit('selectChange', val)
        },
        handleSizeChange (val) {
            // console.log(`每页 ${val} 条`)
            this.$emit('onSizeChange', val)
        },
        handleCurrentChange (val) {
            // console.log(`当前页: ${val}`)
            this.$emit('onPageChange', val)
        },
        renderHeader (h, data) {
            if (this.labelData[data.$index].render) {
                return [
                    h('el-button', {
                        attrs: {
                            type: 'text',
                            class: 'btn-edit'
                        },
                        style: {
                            'padding-left': '0px'
                        },
                        nativeOn: {
                            click: this.edit
                        }
                    }, ['编辑']),
                    h('el-button', {
                        attrs: {
                            type: 'text',
                            class: 'btn-del'
                        },
                        style: {
                            'padding-left': '5px'
                        },
                        nativeOn: {
                            click: this.del
                        }
                    }, ['删除'])
                ]
            } else {
                return h('span', [this.labelData[data.$index].label])
            }
        },
        edit () {
            this.$emit('headEdit')
        },
        del () {
            this.$emit('headDel')
        },
        getId () {
            let id = Number(Math.random().toString().substr(3, 20) + Date.now()).toString(36)
            return id
        }
    }
}
</script>

<style lang="less">
.table {
    ::before {
        height: 0;
    }
    .gutter {
        background: #FAFAFA;
        border-bottom: 1px solid #ebeef5;
    }
    .btn-edit {
        display: inline-block;
        color: #FAAD14;
        font-size: 14px;
        border: none;
        background: none;
        cursor: pointer;
        outline: none;
    }
    .btn-del {
        display: inline-block;
        color: #FF626C;
        font-size: 14px;
        border: none;
        background: none;
        cursor: pointer;
        outline: none;
    }
    .el-pagination {
        text-align: left;
    }
    .table-header-item {
        .cell{
            padding: 0 15px;
        }
    }
}
</style>

<style lang="less" scoped>
.table {
    .page {
        padding: 15px 0;
    }
}
</style>

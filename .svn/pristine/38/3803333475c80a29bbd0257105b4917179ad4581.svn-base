<template>
    <el-table-column :prop="prop" v-bind="$attrs">
        <template slot-scope="scope">
            <span @click.prevent="toggleHandle(scope.$index, scope.row)" :style="childStyles(scope.row)">
                <i :class="iconClasses(scope.row)" :style="iconStyles(scope.row)"></i>
                {{ scope.row[prop] }}
            </span>
        </template>
    </el-table-column>
</template>

<script>
import isArray from 'lodash/isArray'
export default {
    name: 'tb-tree-load-col',
    props: {
        prop: {
            type: String
        },
        loadKey: {
            type: String,
            default: 'value'
        },
        treeKey: {
            type: String,
            default: 'id'
        },
        parentKey: {
            type: String,
            default: 'parentId'
        },
        levelKey: {
            type: String,
            default: '_level'
        },
        hasChildKey: {
            type: String,
            default: 'leaf'
        }
    },
    methods: {
        childStyles (row) {
            return { 'padding-left': (row[this.levelKey] > 1 ? row[this.levelKey] * 20 : 0) + 'px' }
        },
        iconClasses (row) {
            return [!row._expanded ? 'el-icon-caret-right' : 'el-icon-caret-bottom']
        },
        iconStyles (row) {
            return { 'visibility': this.hasChild(row) ? 'visible' : 'hidden' }
        },
        hasChild (row) {
            return row[this.hasChildKey] || false
        },
        // 切换处理
        toggleHandle (index, row) {
            if (this.hasChild(row)) {
                var tableData = this.$parent.store.states.data.slice(0)
                // console.log(tableData)
                tableData[index]._expanded = !tableData[index]._expanded
                // console.log(tableData[index]._expanded)
                if (tableData[index]._expanded) {
                    // var act = ''
                    // var pid = row[this.loadKey]
                    // if (row.nodeType === 1) {
                    //     act = 'car-series'
                    // } else if (row.nodeType === 2) {
                    //     act = 'car-model'
                    // }
                    // let url = ''
                    console.log(row)
                    if (row.nodeType === 1) {
                        this.$post('basVehicle/brandList?page=1&size=999', {
                            // vehicleBrandName: row.nodeName,
                            vehicleBrandId: row.nodeId,
                            nodeType: 2
                        }).then(
                            ({ data }) => {
                                data.forEach(element => {
                                    if (element.label) {
                                        element.leaf = true
                                    }
                                })
                                tableData = tableData.splice(0, index + 1).concat(data).concat(tableData)
                                this.$parent.store.commit('setData', tableData)
                                this.$nextTick(() => {
                                    this.$parent.doLayout()
                                })
                            }
                        )
                    } else if (row.nodeType === 2) {
                        this.$post('basVehicle/seriesList?page=1&size=999', {
                            vehicleBrandId: row.nodeId
                        }).then(
                            ({ data }) => {
                                data.forEach(element => {
                                    if (element.label) {
                                        element.leaf = true
                                    }
                                })
                                tableData = tableData.splice(0, index + 1).concat(data).concat(tableData)
                                this.$parent.store.commit('setData', tableData)
                                this.$nextTick(() => {
                                    this.$parent.doLayout()
                                })
                            }
                        )
                    } else if (row.nodeType === 3) {
                        this.$post('basVehicle/modelList?page=1&size=999', {
                            vehicleSeriesId: row.nodeId
                        }).then(
                            ({ data }) => {
                                tableData = tableData.splice(0, index + 1).concat(data).concat(tableData)
                                this.$parent.store.commit('setData', tableData)
                                this.$nextTick(() => {
                                    this.$parent.doLayout()
                                })
                            }
                        )
                    }
                } else {
                    // console.log(this.$parent.store)
                    tableData = this.removeChildNode(tableData, row[this.treeKey])
                    this.$parent.store.commit('setData', tableData)
                    this.$nextTick(() => {
                        this.$parent.doLayout()
                    })
                }
            }
        },
        // 移除子节点
        removeChildNode (data, parentId) {
            var parentIds = isArray(parentId) ? parentId : [parentId]

            if (parentId.length <= 0) {
                return data
            }
            var ids = []
            for (var i = 0; i < data.length; i++) {
                if (parentIds.indexOf(data[i][this.parentKey]) !== -1 && parentIds.indexOf(data[i][this.treeKey]) === -1) {
                    ids.push(data.splice(i, 1)[0][this.treeKey])
                    i--
                }
            }

            return this.removeChildNode(data, ids)
        }
    }
}
</script>

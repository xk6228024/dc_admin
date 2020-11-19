<template>
    <!-- 勘验全记录,包括每天的 -->
    <div class="inquest-info-detail">
        <el-tabs type="card" v-model="tabIndex">
            <el-tab-pane v-for="(item, index) in infoDetail" :key='index' :label="$moment(item.enterpriseRecordInquestSTime).format('YYYY-MM-DD')" :name='`index${index}`'>
                <inquest-info-detail :isSlot='true'></inquest-info-detail>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// import BreadFoot from '@/components/BreadFoot.vue'
// import customTable from '@/components/table'
import inquestInfoDetail from './inquestDataDetail.vue'
export default {
    name: 'inquestInfoDetailAll',
    components: {
        // customTable,
        inquestInfoDetail
    },
    data () {
        return {
            breadArr: [
                { title: '档案管理', path: '' }, { title: '企业勘验信息', path: '' }, { title: '企业勘验信息详情', path: '' }
            ],
            tabIndex: 'index0',
            tabItemIndex: 'sIndex0',
            infoDetail: [{}]
        }
    },
    created () {
    },
    methods: {
    },
    filters: {
        categoryFilter (val) {
            if (val === '1') {
                return '一类'
            } else if (val === '2') {
                return '二类'
            } else if (val === '3') {
                return '三类'
            }
            return ''
        },
        typeFilter (val) {
            if (val === '1') {
                return '汽车维修'
            } else if (val === '2') {
                return '摩托车维修'
            } else if (val === '3') {
                return '其他机动车维修'
            }
            return ''
        }
    }
}
</script>

<style lang="less" scoped>
.inquest-info-detail {
    background: #ffffff;
    .tab-content {
        width: 100%;
        background: #ffffff;
        padding: 10px 30px;
        box-sizing: border-box;
        >h3 {
            text-align: left;
            margin: 0 -30px;
            padding-left: 30px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            font-size:16px;
            color:rgba(51,51,51,1);
        }
        .item {
            font-size:14px;
            font-weight:400;
            color:rgba(102,102,102,1);
            >span {
                font-size:14px;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
        }
    }
    .inquest-info-item {
        border-top: 20px solid #EDF0F5;
    }
    .tab-item-table1 {
        padding: 0 15px 15px;
    }
}
</style>

<style lang="less">
.inquest-info-detail {
    .el-tabs--card>.el-tabs__header {
        background: #EDF0F5;
        border: none;
        .el-tabs__nav {
            border: none;
        }
        .el-tabs__item {
            box-sizing: border-box;
            border: none;
            border-radius:3px 3px 0px 0px;
            background: #FFF;
            margin-right: 10px;
            border-top: 3px solid #FFF;
            &.is-active {
                color: #1890FF;
                border-top: 3px solid #3E94FE;
            }
        }
    }
    .el-tabs--border-card {
        border: none;
    }
    .el-tabs--border-card {
        box-shadow: none;
    }
    .el-tabs__item {
        height:44px;
        line-height: 44px;
        padding: 0 30px;
    }
    .el-row {
        margin: 15px;
    }
}
</style>

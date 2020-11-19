<!-- 空白页面组件 -->
<template>
    <div class="block detailPage" style="position:initial;">
        <div class="detail_content">
            <div class="detail_model">
                <h4>固废物信息</h4>
                <div class="clearfix">
                    <div class="detail_item">
                        <label>固废物类别：</label>
                        <span>HW88</span>
                    </div>
                    <div class="detail_item">
                        <label>固废物代码：</label>
                        <span>900-22-12</span>
                    </div>
                    <div class="detail_item">
                        <label>固废物名称：</label>
                        <span>废空滤器</span>
                    </div>
                    <div class="detail_item">
                        <label>数量(吨)：</label>
                        <span>291.23</span>
                    </div>
                    <div class="detail_item">
                        <label>废物特性：</label>
                        <span>腐蚀性</span>
                    </div>
                    <div class="detail_item">
                        <label>废物形态：</label>
                        <span>固态</span>
                    </div>
                    <div class="detail_item">
                        <label>包装方式：</label>
                        <span>袋装</span>
                    </div>
                </div>
            </div>
             <div class="detail_model noBorder">
                <h4>单据信息</h4>
                <el-table
                    :data="tableData"
                    class="tableBorder"
                    style="width: 100%;">
                    <el-table-column type="expand">
                    <template>
                        <div style="background:#E9E7E8;padding:20px;">
                            <h5>维修项目</h5>
                            <br>
                            <el-table
                                :data="tableData2"
                                :header-cell-style="headerStyle"
                                style="width: 100%;">
                                <el-table-column
                                prop="a1"
                                align="left"
                                min-width="8%"
                                label="项目编码">
                                </el-table-column>
                                <el-table-column
                                prop="a2"
                                align="left"
                                min-width="8%"
                                label="项目名称">
                                </el-table-column>
                                <el-table-column
                                prop="a3"
                                align="left"
                                min-width="8%"
                                label="废物类别">
                                </el-table-column>
                                <el-table-column
                                prop="a4"
                                align="left"
                                min-width="8%"
                                label="废物代码">
                                </el-table-column>
                                <el-table-column
                                prop="a5"
                                align="left"
                                min-width="8%"
                                label="废物名称">
                                </el-table-column>
                                <el-table-column
                                prop="a6"
                                align="left"
                                min-width="8%"
                                label="数量(kg)">
                                </el-table-column>
                                <el-table-column
                                prop="a7"
                                align="left"
                                min-width="8%"
                                label="废物特性">
                                </el-table-column>
                                <el-table-column
                                prop="a8"
                                align="left"
                                min-width="8%"
                                label="废物形态">
                                </el-table-column>
                                <el-table-column
                                prop="a9"
                                align="left"
                                min-width="8%"
                                label="包装方式">
                                </el-table-column>
                            </el-table>
                            <br>
                            <h5>维修项目</h5>
                            <br>
                            <el-table
                                :data="tableData2"
                                :header-cell-style="headerStyle"
                                style="width: 100%;">
                                <el-table-column
                                prop="a1"
                                align="left"
                                min-width="8%"
                                label="配件编码">
                                </el-table-column>
                                <el-table-column
                                prop="a2"
                                align="left"
                                min-width="8%"
                                label="配件名称">
                                </el-table-column>
                                <el-table-column
                                prop="a3"
                                align="left"
                                min-width="8%"
                                label="废物类别">
                                </el-table-column>
                                <el-table-column
                                prop="a4"
                                align="left"
                                min-width="8%"
                                label="废物代码">
                                </el-table-column>
                                <el-table-column
                                prop="a5"
                                align="left"
                                min-width="8%"
                                label="废物名称">
                                </el-table-column>
                                <el-table-column
                                prop="a6"
                                align="left"
                                min-width="8%"
                                label="数量(kg)">
                                </el-table-column>
                                <el-table-column
                                prop="a7"
                                align="left"
                                min-width="8%"
                                label="废物特性">
                                </el-table-column>
                                <el-table-column
                                prop="a8"
                                align="left"
                                min-width="8%"
                                label="废物形态">
                                </el-table-column>
                                <el-table-column
                                prop="a9"
                                align="left"
                                min-width="8%"
                                label="包装方式">
                                </el-table-column>
                            </el-table>
                        </div>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="a1"
                    align="left"
                    label="序号"
                    min-width="5%">
                    </el-table-column>
                    <el-table-column
                    prop="a2"
                    align="left"
                    min-width="8%"
                    label="出厂时间">
                    </el-table-column>
                    <el-table-column
                    prop="a3"
                    align="left"
                    min-width="8%"
                    label="单据编号">
                    </el-table-column>
                    <el-table-column
                    prop="a4"
                    align="left"
                    min-width="8%"
                    label="车牌号码">
                    </el-table-column>
                    <el-table-column
                    prop="a5"
                    align="left"
                    min-width="8%"
                    label="车牌颜色">
                    </el-table-column>
                    <el-table-column
                    prop="a6"
                    align="left"
                    min-width="8%"
                    label="维修类型">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <BreadFoot :breadArr="[{title:'维修与运输业务数据',path:''},{title:'固废物',path:''},{title:'详情',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/wasteData')">返回</el-button>
        </BreadFoot>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot'
export default {
    name: 'block',
    data () {
        return {
            tableData: [
                {
                    a1: '01',
                    a2: '2012-11-02',
                    a3: 'SCE12133213123',
                    a4: '粤B98812',
                    a5: '蓝色',
                    a6: '日常维护'
                },
                {
                    a1: '02',
                    a2: '2012-11-02',
                    a3: 'SCE12133213123',
                    a4: '粤B98812',
                    a5: '蓝色',
                    a6: '日常维护'
                },
                {
                    a1: '03',
                    a2: '2012-11-02',
                    a3: 'SCE12133213123',
                    a4: '粤B98812',
                    a5: '蓝色',
                    a6: '日常维护'
                }
            ],
            tableData2: [
                {
                    num: '01',
                    a1: 'SKII9912213123',
                    a2: '清洗节气门',
                    a3: 'HW113',
                    a4: '90-11-33',
                    a5: '废空滤器',
                    a6: '21.12',
                    a7: '腐蚀性',
                    a8: '固态',
                    a9: '袋装'
                }
            ]
        }
    },
    components: {
        BreadFoot
    },
    created () {
    },
    computed: {
    },
    methods: {
        headerStyle ({ row, column, rowIndex, columnIndex }) {
            console.log(columnIndex)
            if (columnIndex < 20) { return 'background:transparent' }
        }
    }
}
</script>

<style lang='less' scoped>
.block {
}
</style>

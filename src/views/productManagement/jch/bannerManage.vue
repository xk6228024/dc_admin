<!-- 广告发布 -->
<template>
    <div class="bannerManage" id="bannerManage">
        <breadcrumb :breadList="['产品管理', '金车汇管理']">
            <!-- <label>广告位置：</label>
            <el-select v-model="advertType" clearable placeholder="请选择">
                <el-option
                v-for="item in advertTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select> -->
            <label>标题名称：</label>
            <el-input class="search-text w220" v-model="searchKey" clearable placeholder="请输入标题"></el-input>
            <label>状态：</label>
            <el-select class="w120" v-model="advertStatus" clearable placeholder="请选择">
                <el-option
                v-for="item in advertStatusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">发布时间:</label>
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
            <el-button class="fr mt17" type="primary" @click="add()" :disabled="!$checkAuth('sys:user:save')">发布活动</el-button>
            <!-- <el-button class="fr mt17" @click="exportTable">导出报表</el-button> -->
        </breadcrumb>
        <div class="table">
            <el-table
                border
                v-loading="loading"
                :data="tableData"
                class="tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="4%">
                </el-table-column>
                <el-table-column
                prop="adTypeText"
                align="left"
                min-width="8%"
                label="活动名称">
                </el-table-column>
                <el-table-column
                prop="adTitle"
                align="left"
                min-width="12%"
                label="投放区域">
                </el-table-column>
                <el-table-column
                prop="adTitle"
                align="left"
                min-width="8%"
                label="链接地址">
                </el-table-column>
                <el-table-column
                prop="adTitle"
                align="left"
                min-width="8%"
                label="发起人">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="10%"
                label="Banner有效时间">
                    <template slot-scope="scope">
                        {{scope.row.startTime}} 到 {{scope.row.endTime}}
                    </template>
                </el-table-column>
                 <el-table-column
                prop="adTitle"
                align="left"
                min-width="5%"
                label="轮播位置">
                </el-table-column>
                 <el-table-column
                prop="adTitle"
                align="left"
                min-width="5%"
                label="发布时间">
                </el-table-column>
                <el-table-column
                align="left"
                min-width="5%"
                label="状态">
                    <template slot-scope="scope">
                        <!-- {{scope.row.statusText}} -->
                        <span v-if="scope.row.status==0" class="yellowDot">未开始</span>
                        <span v-if="scope.row.status==1" class="greenDot">进行中</span>
                        <span v-if="scope.row.status==2" class="redDot">已结束</span>
                        <span v-if="scope.row.status==3" class="violetDot">已暂停</span>
                        <span v-if="scope.row.status==4" class="grayDot">已暂停</span>
                    </template>
                </el-table-column>
                <el-table-column
                align="left"
                min-width="8%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button v-if="/[0123]/.test(scope.row.status)" @click="advertDetail(scope.row.adId, 1)" type="text" size="small">详情</el-button>
                        <el-button v-if="scope.row.status === 0" @click="advertDetail(scope.row.adId)" type="text" size="small">编辑</el-button>
                        <el-button v-if="scope.row.status === 0" @click="deleteAdvert(scope.row.adId)" type="text" size="small">删除</el-button>
                        <el-button v-if="scope.row.status === 1" @click="changeAdvertStatus(scope.row.adId, 3)" type="text" size="small">暂停</el-button>
                        <el-button v-if="scope.row.status === 3" @click="changeAdvertStatus(scope.row.adId, 1)" type="text" size="small">启用</el-button>
                        <el-button v-if="scope.row.status === 1 || scope.row.status === 3" @click="closeAd(scope.row.adId, 1)" type="text" size="small">结束</el-button>
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
// import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'bannerManage',
    data () {
        return {
            advertStatus: '',
            advertType: '',
            advertStatusList: [],
            dateRegion: [],
            total: 0,
            searchKey: '',
            pageNum: 1,
            pageSize: 10,
            advertAlert: false,
            sendData: false, // 防重复提交
            advertDetailView: false, // 查看广告详情
            cityList: [ // 城市列表
            ],
            loading: false,
            tableData: [
                {}
            ]
        }
    },
    components: {
        Breadcrumb
    },
    filters: {
    },
    computed: {
    },
    watch: {
    },
    created () {
        // this.findAdvertList()
        // this.findCityList()
        // this.findBrandList()
    },
    methods: {
        add () {
            this.$router.push('/bannerManageDetail')
        },
        // 导出报表
        exportTable () {
            let href = `${window.uploadURL}advertisement/export?searchKey=${this.searchKey}&status=${this.advertStatus}&adType=${this.advertType}`
            console.log(href)
            if (this.dateRegion && this.dateRegion.length) {
                href = href + '&startDate=' + this.dateRegion[0]
                href = href + '&endDate=' + this.dateRegion[1]
            }
            window.open(href)
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.findAdvertList()
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.pageNum = 1
            this.findAdvertList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.findAdvertList()
        }
    }
}
</script>

<style lang='less' scoped>
.bannerManage {
    .w160 {
        width:160px;
    }
    .w220 {
        width: 220px;
    }
    .w120 {
        width:120px;
    }
    .table {
        margin: 20px;
        margin-top: 0;
    }
    .avatar-uploader, .avatar-uploader-tips {
        vertical-align: middle;
    }
    .avatar-uploader-tips {
        display: inline-block;
        width: 236px;
        margin-left: 16px;
        h6 {
            color:#778CA2;
            font-size: 14px;
        }
        p {
            color: #98A9BC;
            font-size: 12px;
            line-height: 22px;
        }
    }
    .form {
        padding-right: 40px;
    }
    .detail-table {
        margin: 3px 40px 0px 40px;
        border-top: 1px solid #E8ECEF;
        border-left: 1px solid #E8ECEF;
        td {
            border-right: 1px solid #E8ECEF;
            border-bottom: 1px solid #E8ECEF;
            height: 44px;
        }
        .name {
            width: 120px;
            text-align: center;
        }
        .value {
            width: 418px;
            padding: 0 16px;
            .advert-image-wrap {
                border: 1px solid #E8ECEF;
                padding: 6px;
                width: 146px;
                height: 76px;
                img {
                    width: 146px;
                    height: 76px;
                }
            }
            &.textarea {
                padding: 10px 16px;
            }
        }
    }
}
</style>
<style lang="less">
.bannerManage {
    .avatar-uploader{
        height: 100px;
        display: inline-block;
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 90px;
            width:160px;
            img {
                width:100%;
                height: 100%;
            }
        }
        .el-upload-list {
            position: absolute;
            bottom: -20px;
            left: 10px;
        }
        .el-upload:hover {
            border-color: #4D7CFE;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 160px;
            height: 90px;
            line-height: 90px;
            text-align: center;
        }
    }
    .form {
        .el-select {
            width: 100%;
        }
        .el-input__inner {
            width: 100%;
        }
        .el-date-editor{
            .el-range-input {
                width: 41%;
            }
        }
    }
    .el-popover {
        height: initial;
        width: initial;
        overflow: auto;
    }
}
</style>

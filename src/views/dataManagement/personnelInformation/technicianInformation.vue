<!-- 企业数据 -->
<template>
    <div class="technicianInformation">
        <breadcrumb>
            <label for="">所属区域:</label>
            <el-cascader
                :props="propsOption"
                placeholder="请选择"
                v-model="areaIds"
                clearable
                :options="allCityList"
                >
            </el-cascader>
            <!-- <label for="">省份:</label>
            <el-select class="w120_input" v-model="province" clearable placeholder="请选择">
                <el-option
                v-for="item in provinceList"
                :key="item.regionId"
                :label="item.regionName"
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">城市:</label>
            <el-select class="w120_input" v-model="city" clearable placeholder="请选择">
                <el-option
                v-for="item in cityList"
                :key="item.regionId"
                :label="item.regionName"
                :value="item.regionId">
                </el-option>
            </el-select>
            <label for="">区域:</label>
            <el-select class="w120_input" v-model="area" clearable placeholder="请选择">
                <el-option
                v-for="item in areaList"
                :key="item.regionId"
                :label="item.regionName"
                :value="item.regionId">
                </el-option>
            </el-select> -->
            <label for="">企业名称:</label>
            <el-input style="width:160px;"
                clearable
                class="search-text"
                v-model="enterpriseNamekey"
                placeholder="请输入">
            </el-input>
            <label for="">工种类型：</label>
            <el-select
                class="edit_input"
                clearable
                style="width:160px;"
                v-model="workType">
                <el-option
                v-for="item in personType"
                :key="item.nameKey"
                :label="item.descValue"
                :value="item.nameKey">
                </el-option>
            </el-select>
            <div class="dlb">
                <label for="">手机号码:</label>
                <el-input style="width:160px;"
                    clearable
                    class="search-text"
                    v-model="searchPhone"
                    placeholder="请输入">
                </el-input>
            </div>
            <div class="dlb">
                <label for="">更新时间:</label>
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
                <el-button class="search" type="primary" @click="search">查询</el-button>
            </div>
            <div class="btn_ground">
                <el-button class="mt17" @click="exportTable">导出</el-button>
            </div>
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                v-loading="loading"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="personName"
                align="left"
                min-width="8%"
                label="姓名">
                </el-table-column>
                <el-table-column
                prop="gender"
                align="left"
                min-width="6%"
                label="性别">
                </el-table-column>
                <el-table-column
                prop="personType"
                align="left"
                min-width="8%"
                label="工种">
                </el-table-column>
                <el-table-column
                prop="enterpriseName"
                align="left"
                :show-overflow-tooltip="true"
                min-width="15%"
                label="所属企业">
                </el-table-column>
                <el-table-column
                prop="personRegion"
                align="left"
                min-width="7%"
                label="所属地区">
                </el-table-column>
                <el-table-column
                prop="personMobile"
                align="left"
                min-width="10%"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="personIdcardNumber"
                align="left"
                min-width="8%"
                :show-overflow-tooltip="true"
                label="身份证号">
                </el-table-column>
                <el-table-column
                prop="personDiplomaNo"
                align="left"
                min-width="12%"
                :show-overflow-tooltip="true"
                label="毕业证号">
                </el-table-column>
                <el-table-column
                prop="personWorkingAge"
                align="left"
                min-width="5%"
                :show-overflow-tooltip="true"
                label="工龄">
                </el-table-column>
                <el-table-column
                prop="personGoodBrand"
                align="left"
                min-width="10%"
                :show-overflow-tooltip="true"
                label="擅长维修品牌">
                </el-table-column>
                <el-table-column
                prop="personSkillLevel"
                align="left"
                min-width="10%"
                :show-overflow-tooltip="true"
                label="技能等级">
                </el-table-column>
                <el-table-column
                prop="personEmail"
                align="left"
                min-width="8%"
                label="邮箱">
                </el-table-column>
                <el-table-column
                prop="updateTime"
                align="left"
                width="160"
                label="更新日期">
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
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'technicianInformation',
    data () {
        return {
            searchPhone: '',
            workType: '',
            propsOption: {
                checkStrictly: true,
                label: 'regionName',
                children: 'childList',
                value: 'regionCode'
            },
            allCityList: [],
            areaIds: [],
            loading: false,
            provinceList: [],
            province: '',
            cityList: [],
            city: '',
            areaList: [],
            area: '',
            enterpriseNamekey: '',
            enterpriseType: '',
            entTypeList: [
            ],
            enterpriseTypeList: [
            ],
            operatingStatekey: '',
            operatingState: [
            ],
            dateRegion: [],
            value: '',
            options: [
                {
                    value: 1,
                    label: '深圳'
                }
            ],
            total: 2,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [],
            personType: []
        }
    },
    components: {
        Breadcrumb
    },
    watch: {
        province (val) {
            this.city = ''
            if (val) {
                this.getCityList(val)
            } else {
                this.cityList = []
            }
        },
        city (val) {
            this.area = ''
            if (val) {
                this.getAreaList(val)
            } else {
                this.areaList = []
            }
        }
    },
    created () {
        this.getDataList()
        // this.getProvinceList()
        this.getAllCity()
        this.getPersonType()
    },
    methods: {
        getPersonType () {
            this.$get('person/personType').then(res => {
                if (res.code === 0) {
                    this.personType = res.data
                }
            })
        },
        getAllCity () {
            this.$get('/comm/citys/dc/tree').then(res => {
                if (res.code === 0) {
                    this.allCityList = res.data
                }
            })
        },
        getAreaList (val) {
            this.$get('list/regionList?cityId=' + val)
                .then(res => {
                    if (res.code === 0) {
                        this.areaList = res.data
                    }
                })
        },
        getCityList (val) {
            this.$get('list/regioncityList?provinceRegionId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        },
        // 获取省份列表
        getProvinceList () {
            this.$get('list/regionProvinceList?type=1').then(res => {
                if (res.code === 0) {
                    this.provinceList = res.data
                }
            })
        },
        // 获取所有数据
        getDataList () {
            // if (!this.$checkAuth('enterprise:list')) {
            //     this.$alert('您没有该权限')
            //     return
            // }
            console.log(this.areaIds)
            this.loading = true
            let obj = {
                province: this.areaIds[0] || '',
                city: this.areaIds[1] || '',
                region: this.areaIds[2] || '',
                enterpriseName: this.enterpriseNamekey,
                personMobile: this.searchPhone,
                startDate: this.dateRegion ? this.dateRegion[0] : '',
                endDate: this.dateRegion ? this.dateRegion[1] : '',
                personType: this.workType
            }
            this.$post('person/page?page=' + this.pageNum + '&size=' + this.pageSize, obj)
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
        goDetail (id) {
            // 权限校验**********************************************************
            if (!this.$checkAuth('enterprise:view')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$router.push(`/maintenanceOfEnterpriseDetail?id=${id}`)
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
        },
        exportTable () {
            // if (!this.$checkAuth('enterprise:export')) {
            //     this.$alert('您没有该权限')
            //     return
            // }
            let obj = {
                province: this.areaIds[0],
                city: this.areaIds[1],
                region: this.areaIds[2],
                enterpriseName: this.enterpriseNamekey,
                personMobile: this.searchPhone,
                startDate: this.dateRegion ? this.dateRegion[0] : '',
                endDate: this.dateRegion ? this.dateRegion[1] : '',
                personType: this.workType
            }
            let str = ''
            for (let k in obj) {
                obj[k] && (str = str + `${k}=${obj[k]}&`)
            }
            str = str.slice(0, -1)
            window.open(`api/person/export?${str}`)
        }
    },
    filters: {
        serviceTypeFilter (val) {
            if (/1/.test(val)) {
                return '维修企业'
            }
            if (/2/.test(val)) {
                return '美容企业'
            }
            if (/3/.test(val)) {
                return '维修美容企业'
            }
        }
    }
}
</script>

<style lang='less' scoped>
.technicianInformation {
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
.technicianInformation {
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

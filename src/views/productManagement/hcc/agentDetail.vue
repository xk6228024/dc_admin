<!-- 代理商详情 -->
<template>
    <div class="agentDetail" id="agentDetail">
        <h3 class="detail-title">代理商详情
            <el-button class="fr back" @click="goBack">返回</el-button>
            <el-button class="fr bind" type="primary" @click="bindUser">绑定下级用户</el-button>
        </h3>
        <div class="form">
            <h5 class="item-title">基本信息</h5>
            <el-row :gutter="18">
                <el-col :span="8">
                    <div class="item-label">代理商账号：</div>
                    <div class="item-value">{{form.agentAccount}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">联系人：</div>
                    <div class="item-value">{{form.agentLinkName}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">手机号码：</div>
                    <div class="item-value">{{form.agentLinkMobile}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="18">
                <el-col :span="8">
                    <div class="item-label">联系电话：</div>
                    <div class="item-value">{{form.agentLinkPhone}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">客户单位：</div>
                    <div class="item-value">{{form.agentUnit}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">代理保证金：</div>
                    <div class="item-value">{{form.agentGuaranteedMoney}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="18">
                <el-col :span="8">
                    <div class="item-label">所属城市：</div>
                    <div class="item-value">{{form.agentProvince}} {{form.agentCity}} {{form.agentRegion}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">详细地址：</div>
                    <div class="item-value">{{form.agentAddress}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="18">
                <el-col :span="8">
                    <div class="item-label">开户银行：</div>
                    <div class="item-value">{{form.agentBankName}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">银行账号：</div>
                    <div class="item-value">{{form.agentBankAccount}}</div>
                </el-col>
            </el-row>
            <h5 class="item-title">开票信息</h5>
            <el-row :gutter="18">
                <el-col :span="8">
                    <div class="item-label">企业全称：</div>
                    <div class="item-value">{{form.entAgentName}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">社会信用代码：</div>
                    <div class="item-value">{{form.entAgentCreditNumber}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">联系电话：</div>
                    <div class="item-value">{{form.entAgentLinkPhone}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="18">
                <!-- <el-col :span="6">
                    <div class="item-label">联系人：</div>
                    <div class="item-value">{{form.agentGuaranteedMoney}}</div>
                </el-col> -->
                <el-col :span="8">
                    <div class="item-label">手机号码：</div>
                    <div class="item-value">{{form.entAgentLinkMobile}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">接收发票邮箱：</div>
                    <div class="item-value">{{form.entAgentEmail}}</div>
                </el-col>
                <el-col :span="8">
                    <div class="item-label">所属城市：</div>
                    <div class="item-value">{{form.entAgentCity}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="18">
                <el-col :span="8">
                    <div class="item-label">详细地址：</div>
                    <div class="item-value">{{form.entAgentAddress}}</div>
                </el-col>
            </el-row>
            <h5 class="item-title">下级用户</h5>
            <el-table
                :data="userList"
                height="400"
                border>
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="80">
                </el-table-column>
                <el-table-column
                prop="nickName"
                align="left"
                label="用户昵称">
                </el-table-column>
                <el-table-column
                prop="mobile"
                align="left"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="chargeMoney"
                align="left"
                label="充值金额统计">
                </el-table-column>
                <el-table-column
                prop="consumeMoney"
                align="left"
                label="消费金额统计">
                </el-table-column>
                <el-table-column
                prop="auditStatusText"
                align="left"
                label="认证状态">
                </el-table-column>
                <el-table-column
                prop="bindTime"
                align="left"
                label="绑定时间">
                <template slot-scope="scope">
                        <span>{{scope.row.bindTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <modal
            :title="'绑定下级用户'"
            :width="1092"
            :height="600"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner">
                <breadcrumb>
                    <label for="">所属区域:</label>
                    <el-select class="w100" clearable v-model="areaId"  placeholder="请选择">
                        <el-option
                        v-for="item in areaList"
                        :key="item.sysAreaId"
                        :label="item.areaName"
                        clearable
                        :value="item.sysAreaId">
                        </el-option>
                    </el-select>
                    <label for="">城市:</label>
                    <el-select class="w100" clearable v-model="regionId" placeholder="请选择">
                        <el-option
                        v-for="item in cityList"
                        :key="item.regionId"
                        :label="item.regionName"
                        clearable
                        :value="item.regionId">
                        </el-option>
                    </el-select>
                    <label for="">关键词:</label>
                    <el-input style="width:160px;" clearable class="search-text" v-model="searchKey" placeholder="手机号"></el-input>
                    <div class="dlb">
                        <label for="">创建时间:</label>
                        <el-date-picker
                            clearable
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
                </breadcrumb>
                <el-table
                    :data="allUserList"
                    ref="multipleTable"
                    @selection-change="handleSelectionChange"
                    height="300"
                    border>
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
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
                    prop="nickName"
                    align="left"
                    label="用户昵称">
                    </el-table-column>
                    <el-table-column
                    prop="mobile"
                    align="left"
                    label="手机号">
                    </el-table-column>
                    <el-table-column
                    prop="deleteText"
                    align="left"
                    label="认证状态">
                    </el-table-column>
                    <el-table-column
                    prop="agentAccount"
                    align="left"
                    label="上级代理账号">
                    </el-table-column>
                    <el-table-column
                    prop="createTime"
                    align="left"
                    width="150"
                    label="注册时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime|filterTime('yyyy-mm-dd hh:ff:ss')}}</span>
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
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name: 'agentDetail',
    data () {
        return {
            allUserList: [],
            userList: [],
            form: {},
            regionId: '',
            pageNum: 1,
            pageSize: 10,
            total: 0,
            areaId: '', // 大区Id
            cityList: [],
            areaList: [],
            searchKey: '', // 关键词
            dateRegion: [], // 创建时间
            showAlert: false,
            multipleSelection: [], // 选中的行数据
            tableData: [], // 表格数据
            userData: [], // 用户数据
            provinceList: [] // 省份
        }
    },
    components: {
        Modal,
        Breadcrumb
    },
    watch: {
        areaId (val) {
            if (!val) return
            this.regionId = ''
            this.$get('ent_recharge/areaCity?areaId=' + val).then(res => {
                if (res.code === 0) {
                    this.cityList = res.data
                }
            })
        }
    },
    created () {
        // this.getProvinceList()
        this.getAreaList()
        this.getData()
        // this.getUserList()
    },
    methods: {
        getData () {
            if (this.$route.query.id) {
                this.$post('agent/agentdetail', {
                    agentId: this.$route.query.id
                }).then(res => {
                    if (res.code === 0) {
                        this.form = res.data
                        if (res.data.userList === null) res.data.userList = []
                        this.userList = this.$setNum(res.data.userList, 1, 999)
                    }
                })
            }
        },
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                }
            })
        },
        getUserList () {
            let obj = {
                areaRegion: this.areaId,
                city: this.regionId,
                searchKey: this.searchKey
            }
            if (this.dateRegion && this.dateRegion.length === 2) {
                obj.startDate = this.dateRegion[0]
                obj.endDate = this.dateRegion[1]
            }
            this.$post(`agent/agentuserlist?page=${this.pageNum}&size=${this.pageSize}`, obj).then(res => {
                if (res.code === 0) {
                    this.allUserList = this.$setNum(res.data, this.pageNum, this.pageSize)
                    let arr = []
                    this.allUserList.forEach(e => {
                        this.userList.forEach(q => {
                            if (e.userId === q.userId) {
                                arr.push(e)
                            }
                        })
                    })
                    // console.log(arr)
                    setTimeout(() => {
                        this.toggleSelection(arr)
                    }, 500)
                    this.total = res.total
                }
            })
        },
        // 获取所有数据
        getDataList () {},
        // 获取省列表
        getProvinceList (id) {
            this.areaId = id
            this.$get('list/regionProvinceList').then(res => {
                if (res.code === 0) {
                    this.provinceList = res.data
                }
            })
        },
        // 返回
        goBack () {
            this.$router.push('/agentQuery')
        },
        // 打开绑定用户弹窗
        bindUser () {
            this.pageNum = 1
            this.pageSize = 10
            this.showAlert = true
            this.getUserList()
        },
        // 弹窗确认
        alertConfirm () {
            // let userList = this.userList.map(res => {
            //     return res.userId
            // })
            let userList = this.multipleSelection.map(res => {
                return res.userId
            })
            this.$post('agent/bindusers', {
                agentId: this.$route.query.id,
                userIdList: userList
            }).then(res => {
                if (res.code === 0) {
                    console.log(this.multipleSelection)
                    if (this.multipleSelection.length) {
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        })
                    }
                    // this.getData()
                }
                this.getData()
            })
            this.getData()
            this.alertCancel()
        },
        // 弹窗取消
        alertCancel () {
            this.getData()
            this.searchKey = ''
            this.areaId = ''
            this.regionId = ''
            this.showAlert = false
        },
        toggleSelection (rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row)
                })
            }
        },
        // // 多选用户
        handleSelectionChange (val) {
            // let Select = JSON.parse(JSON.stringify(val))
            // let unSelect = []
            // this.allUserList.forEach(e => {
            //     if (!val.find(i => {
            //         return i.userId === e.userId
            //     })) {
            //         unSelect.push(e)
            //     }
            // })
            // let arr = JSON.parse(JSON.stringify(this.userList))
            // for (let i = arr.length - 1; i >= 0; i--) {
            //     if (unSelect.find(e => {
            //         return e.userId === arr[i].userId
            //     })) {
            //         arr.splice(i, 1)
            //     }
            // }
            // for (let i = Select.length - 1; i >= 0; i--) {
            //     if (!arr.find(e => {
            //         return e.userId === Select[i].userId
            //     })) {
            //         arr.push(Select[i])
            //     }
            // }
            // this.userList = arr
            this.multipleSelection = val
        },
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getUserList()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getUserList()
        },
        search () {
            this.getUserList()
        }
    }
}
</script>

<style lang='less' scoped>
.agentDetail {
    overflow: auto;
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 32px;
        border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#666666;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            min-width: 78px;
            margin-right: 24px;
        }
        .bind {
            margin-top:20px;
            width: 118px;
            height: 36px;
            padding: 0;
            margin-right: 24px;
        }
    }
    .form {
        color: #666;
        overflow: hidden;
        .item-title {
            color: #252631;
            font-size: 14px;
            margin-left: 40px;
            line-height: 50px;
            margin-top: 10px;
        }
        .item-label {
            display: inline-block;
            color: #252631;
        }
        .item-value {
            display: inline-block;
            color: #666;
        }
        .el-row {
            margin-left: 60px !important;
            margin-bottom: 16px;
        }
    }
    .el-table {
        margin: 0 40px 40px 40px;
        width: auto;
    }
    .alertInner {
        .w100 {
            width:100px;
        }
    }
    .alert-content .btn .el-button {
        width: 78px;
    }
}
</style>
<style lang="less">
#agentDetail {
    .el-table__empty-block {
        min-height: auto;
    }
    .el-pagination {
        margin-right: 36px;
    }
}
</style>

<!-- 编辑代理商 -->
<template>
    <div class="detectionLine" id="agentEdit">
        <h3 class="detail-title">检测线设置<el-button class="fr back" @click="goBack" style="margin-right:0;">返回</el-button></h3>
        <div class="wrap">
            <div class="left_box">
                <el-table
                    border
                    :data="tableData"
                    ref="singleTable"
                    class="tableBorder"
                    highlight-current-row
                    @row-click="handleCurrentChange"
                    height="385"
                    style="width: 205px;">
                    <el-table-column
                    prop="inspectLineName"
                    align="center"
                    label="检测线名称"
                    width="120">
                    <template slot-scope="scope">
                        <span v-if="scope.row.inspectLineId">{{'检测线'+(scope.$index+1)}}</span>
                        <span v-else>未保存检测线</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="num"
                    align="center"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button  @click="delLine(scope.row.inspectLineId)" type="text" size="small"
                        :disabled="!$checkAuth('sys:user:delete')">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <div style="border:1px solid #e3e7ea;border-top:none;width:203px;height:40px;line-height:40px;display:flex;font-size:12px;color:#666;">
                    <img style="margin:0 10px;cursor:pointer;" src="../../../assets/img/icon+.svg" class="" @click="addLine">
                    点击”+”号新增检测线
                </div>
            </div>
            <div class="right_box">
                <div class="tips_box" v-show="isChangeBol && tableData.length">
                    <img src="../../../assets/img/tipsIcon.png" alt="">
                    {{isChangeName}} 内容有变更，请保存更新数据~
                </div>
                <el-form ref="formas" class="form" :inline="true" :model="form" label-width="170px" style="width:850px;" v-if="tableData.length">
                    <!-- <el-form-item label="检测线名称：" prop="mobile" :rules="$validate({required:true,type:'phone'})">
                        <el-input type="text" class="name"  v-model="form.mobile"></el-input>
                    </el-form-item> -->
                    <el-form-item label="摄像头IP地址：" prop="inspectLineVideoIp" :rules="$validate({required:true, max:20})">
                        <el-input type="text" class="name" v-model="form.inspectLineVideoIp"></el-input>
                    </el-form-item>
                    <el-form-item label="摄像头设备端口号：" class="fr" prop="inspectLineVideoPort" :rules="$validate({required:true})">
                        <el-input type="text" class="name" v-model="form.inspectLineVideoPort"></el-input>
                    </el-form-item>
                    <el-form-item label="摄像头设备通道号：" prop="inspectLineVideoChannelNum" :rules="$validate({required:true})">
                        <el-input type="text" class="name" v-model="form.inspectLineVideoChannelNum"></el-input>
                    </el-form-item>
                    <el-form-item label="摄像头管理账号：" class="fr" prop="inspectLineVideoUser" :rules="$validate({required:true,max:30,type:'EN'})">
                        <el-input type="text" class="name" v-model="form.inspectLineVideoUser"></el-input>
                    </el-form-item>
                    <el-form-item label="摄像头密码：" prop="inspectLineVideoPass" :rules="$validate({required:true,type:'EN'})">
                        <el-input type="password" class="name" v-model="form.inspectLineVideoPass"></el-input>
                    </el-form-item>
                    <el-form-item label="插件类型：" class="fr" prop="inspectLineVideoPluginType">
                        <!-- <el-input type="text" class="name" v-model="form.inspectLineVideoPluginType"></el-input> -->
                        <el-select class="name"  clearable v-model="form.inspectLineVideoPluginType">
                            <el-option
                            v-for="item in [{name:'java',value:0},{name:'C#',value:1}]"
                            :key="item.value"
                            :label="item.name"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否开通RFID读卡设备：" label-width="200px" prop="inspectLineRfidOpen" :rules="$validate({required:true})">
                        <el-radio v-model="form.inspectLineRfidOpen" @change="changeRfidOpen" :label="0">未开通</el-radio>
                        <el-radio v-model="form.inspectLineRfidOpen" @change="changeRfidOpen" :label="1">已开通</el-radio>
                    </el-form-item>
                    <div class="line" style="border-top:1px dashed #E8ECEF;margin-bottom:20px;"></div>
                    <el-form-item label="RFID设备厂商：" prop="deviceName" :rules="$validate({required:isRequired})">
                        <el-select class="name" clearable v-model="form.deviceName">
                            <el-option
                            v-for="item in vendorOptions"
                            :key="item.value"
                            :label="item.label"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="RFID设备标识号：" class="fr" prop="deviceId" :rules="$validate({required:isRequired})">
                        <el-input type="text" class="name" v-model="form.deviceId" placeholder="输入标识号" clearable maxlength="3" min="1" max="255"></el-input>
                    </el-form-item>
                    <el-form-item label="RFID设备连接串口号：" prop="commPort" :rules="$validate({required:isRequired})">
                        <el-select v-model="form.commPort" placeholder="请选择串口号">
                            <el-option
                                v-for="item in comOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-button v-if="tableData.length" class="saveBtn" @click="save" type="primary">保存</el-button>
            </div>
            <!-- <img src="../../../assets/img/icon+.svg" class="addIcon" @click="addLine">
            <table class="myTable2 tableBorder">
                    <tr class="blueTilte">
                        <th width="100">序号</th>
                        <th width="400">检测线名称</th>
                        <th width="110">操作</th>
                    </tr>
                    <tr v-for="item in lineList" :key="item.id">
                        <td class="tac">{{item.id}}</td>
                        <td class="tac">{{item.name}}</td>
                        <td class="tac">
                            <el-button @click="editDetail(scope.row.userId)" type="text" size="small" :disabled="!$checkAuth('sys:user:view')">删除</el-button>
                        </td>
                    </tr>
            </table>
            <el-form ref="form" class="form"  :model="form" label-width="170px">
                <el-form-item label="检测线名称：" prop="mobile" :rules="$validate({required:true,type:'phone'})">
                    <el-input type="text" class="name" v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="摄像头IP地址：" prop="password" :rules="$validate({required:true,max:6,type:'EN'})">
                    <el-input type="text" class="name" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="RFID设备厂商：" prop="customerMobile" :rules="$validate({required:true,type:'tel'})">
                    <el-input type="text" class="name" v-model="form.customerMobile"></el-input>
                </el-form-item>
                <el-form-item label="RFID设备标识号：" prop="customerMobile" :rules="$validate({required:true,type:'tel'})">
                    <el-input type="text" class="name" v-model="form.customerMobile"></el-input>
                </el-form-item>
                <el-form-item label="RFID设备链接串口号：" prop="customerMobile" :rules="$validate({required:true,type:'tel'})">
                    <el-input type="text" class="name" v-model="form.customerMobile"></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="customerMobile" :rules="$validate({required:true,type:'tel'})">
                    <el-input type="textarea" :rows="4" resize='none' class="name" v-model="form.customerMobile"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="saveBtn" @click="save" type="primary">保存</el-button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'detectionLine',
    data () {
        return {
            tableData: [],
            form: {
                inspectLineId: '',
                enterpriseId: '',
                inspectLineName: '',
                inspectLineNo: '',
                inspectLineRfid: '',
                inspectLineRfidOpen: 0,
                inspectLineStatus: 0,
                inspectLineVideoIp: '',
                inspectLineVideoPort: '',
                inspectLineVideoChannelNum: '',
                inspectLineVideoUser: '',
                inspectLineVideoPass: '',
                inspectLineVideoPluginType: 0,
                deviceName: '',
                deviceId: '',
                commPort: ''
            },
            vendorOptions: [
                { value: 'ZK', label: '中科' },
                { value: 'JT', label: '捷通' }
            ],
            comOptions: [
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7', label: '7' },
                { value: '8', label: '8' },
                { value: '9', label: '9' },
                { value: '10', label: '10' }
            ],
            enterpriseId: '', // 企业ID
            isRequired: false, // 否
            ChangeLine: '', // 选中检测线
            isChangeBol: false, // 修改提示显示
            activeRow: '', // 激活的
            isChangeName: '' // 修改的检测线
        }
    },
    components: {
    },
    watch: {
        form: {
            handler (val) {
                // console.log(val)
                // this.$nextTick(() => {
                //     this.isChangeBol = true
                // })
                this.isChangeBol = true
                // setTimeout(() => {
                //     this.isChangeBol = true
                // }, 200)
            },
            deep: true
        }
    },
    created () {
        this.enterpriseId = this.$route.query.id
        this.getDetail()
        // setTimeout(() => {
        //     this.$refs.singleTable.setCurrentRow(this.tableData[0])
        // }, 1000)
    },
    methods: {
        getDetail (id) {
            this.$post('businessopen/inspectline/findbyenterprise', {
                enterpriseId: this.enterpriseId
            }).then(res => {
                if (res.code === 0) {
                    let arrs = res.data
                    if (arrs.length > 0) {
                        this.tableData = arrs
                        // this.setCurrent()
                        this.hadleChange(this.tableData[0])
                        this.$nextTick(() => {
                            this.$refs.singleTable.setCurrentRow(this.tableData[0])
                        })
                    } else {
                        this.tableData = []
                    }
                }
            })
        },
        // 删除
        delLine (id) {
            if (!id) {
                this.tableData.pop()
                return
            }
            this.$post('businessopen/inspectline/delete', {
                data: {
                    inspectLineId: id
                }
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '删除成功！'
                    })
                    this.isChangeName = ''
                    this.$nextTick(() => {
                        this.isChangeBol = false
                        this.$refs.formas.resetFields()
                    })
                    this.getDetail()
                }
            })
        },
        goBack () {
            // this.$router.push('/inspectionEnterpriseOpening')
            this.$store.dispatch('closePage', {
                nextPath: '/inspectionEnterpriseOpening',
                refresh: 'inspectionEnterpriseOpening'
            })
        },
        setCurrent () {
            this.$refs.singleTable.setCurrentRow(this.tableData[0])
        },
        // RFID是否开通
        changeRfidOpen (val) {
            if (val === 1) {
                this.isRequired = true
            } else {
                this.isRequired = false
            }
        },
        changRow ({ row, rowIndex }) {
            if (rowIndex === this.activeRow) {
                return 'background:#F3F4F7;'
            }
        },
        setData (val) {
            this.form.inspectLineId = val.inspectLineId
            this.form.inspectLineName = val.inspectLineName
            this.form.inspectLineNo = val.inspectLineNo
            this.form.inspectLineRfidOpen = val.inspectLineRfidOpen
            this.form.inspectLineStatus = val.inspectLineStatus
            this.form.inspectLineVideoIp = val.inspectLineVideoIp
            this.form.inspectLineVideoPort = val.inspectLineVideoPort
            this.form.inspectLineVideoChannelNum = val.inspectLineVideoChannelNum + ''
            this.form.inspectLineVideoUser = val.inspectLineVideoUser
            this.form.inspectLineVideoPass = val.inspectLineVideoPass
            this.form.inspectLineVideoPluginType = val.inspectLineVideoPluginType
            let strs = val.inspectLineRfid.split(':')
            if (strs.length === 3) {
                this.form.deviceName = strs[0]
                this.form.deviceId = strs[1]
                this.form.commPort = strs[2]
            } else {
                this.form.deviceName = ''
                this.form.deviceId = ''
                this.form.commPort = ''
            }
            if (this.form.inspectLineRfidOpen === 1) {
                this.changeRfidOpen(1)
            } else {
                this.changeRfidOpen(0)
            }
            this.$nextTick(() => {
                this.isChangeBol = false
            })
        },
        hadleChange (val) {
            // console.log(val)
            if (val.inspectLineId) {
                this.setData(val)
                // this.ChangeLine = JSON.parse(JSON.stringify(this.form))
                this.selectLine = val
                this.tableData.map((item, index) => {
                    if (item === val) {
                        this.activeRow = index
                    }
                })
            }
        },
        // 切换行
        handleCurrentChange (val) {
            // console.log(val, 'oldvaloldval')
            this.setData(val)
            this.selectLine = this.form
            if (this.form.inspectLineRfidOpen) {
                this.isRequired = true
            } else {
                this.isRequired = false
            }
            if (this.selectLine.inspectLineId) {
                this.$nextTick(() => {
                    this.$refs.formas.validate((valid) => {
                        console.log(valid)
                    })
                })
            }
            this.$nextTick(() => {
                this.isChangeBol = false
            })
            // console.log(this.ChangeLine && this.ChangeLine.inspectLineId)
            console.log(this.ChangeLine)
            // if (this.ChangeLine && this.ChangeLine.inspectLineId) {
            //     console.log('xk1')
            //     this.$refs.formas.validate((valid) => {
            //         if (valid) {
            //             if (JSON.stringify(this.ChangeLine) === JSON.stringify(this.form)) {
            //                 if (val.enterpriseId) {
            //                     let strs = val.inspectLineRfid.split(':')
            //                     this.form.inspectLineId = val.inspectLineId
            //                     this.form.inspectLineName = val.inspectLineName
            //                     this.form.inspectLineNo = val.inspectLineNo
            //                     this.form.inspectLineRfidOpen = val.inspectLineRfidOpen
            //                     this.form.inspectLineStatus = val.inspectLineStatus
            //                     this.form.inspectLineVideoIp = val.inspectLineVideoIp
            //                     this.form.inspectLineVideoPort = val.inspectLineVideoPort
            //                     this.form.inspectLineVideoChannelNum = val.inspectLineVideoChannelNum + ''
            //                     this.form.inspectLineVideoUser = val.inspectLineVideoUser
            //                     this.form.inspectLineVideoPass = val.inspectLineVideoPass
            //                     this.form.inspectLineVideoPluginType = val.inspectLineVideoPluginType
            //                     this.form.deviceName = strs[0]
            //                     this.form.deviceId = strs[1]
            //                     this.form.commPort = strs[2]
            //                     console.log(this.form.inspectLineRfidOpen, 'this.form.inspectLineRfidOpen')
            //                     if (this.form.inspectLineRfidOpen === 1) {
            //                         this.changeRfidOpen(1)
            //                     } else {
            //                         this.changeRfidOpen(0)
            //                     }
            //                     this.ChangeLine = JSON.parse(JSON.stringify(this.form))
            //                     this.tableData.map((item, index) => {
            //                         if (item === val) {
            //                             this.activeRow = index
            //                         }
            //                     })
            //                 }
            //             } else {
            //                 this.isChangeName = this.ChangeLine.inspectLineName
            //                 this.isChangeBol = true
            //             }
            //         } else {
            //             console.log('error submit!!2222')
            //             return false
            //         }
            //     })
            // } else {
            //     console.log('xk2')
            //     this.$refs.formas.validate((valid) => {
            //         if (valid) {
            //             if (val.inspectLineId) {
            //                 let strs = val.inspectLineRfid.split(':')
            //                 this.form.inspectLineId = val.inspectLineId
            //                 this.form.inspectLineName = val.inspectLineName
            //                 this.form.inspectLineNo = val.inspectLineNo
            //                 this.form.inspectLineRfidOpen = val.inspectLineRfidOpen
            //                 this.form.inspectLineStatus = val.inspectLineStatus
            //                 this.form.inspectLineVideoIp = val.inspectLineVideoIp
            //                 this.form.inspectLineVideoPort = val.inspectLineVideoPort
            //                 this.form.inspectLineVideoChannelNum = val.inspectLineVideoChannelNum + ''
            //                 this.form.inspectLineVideoUser = val.inspectLineVideoUser
            //                 this.form.inspectLineVideoPass = val.inspectLineVideoPass
            //                 this.form.inspectLineVideoPluginType = val.inspectLineVideoPluginType
            //                 this.form.deviceName = strs[0]
            //                 this.form.deviceId = strs[1]
            //                 this.form.commPort = strs[2]
            //                 if (this.form.inspectLineRfidOpen === 1) {
            //                     this.changeRfidOpen(1)
            //                 } else {
            //                     this.changeRfidOpen(0)
            //                 }
            //                 this.ChangeLine = JSON.parse(JSON.stringify(this.form))
            //                 this.tableData.map((item, index) => {
            //                     if (item === val) {
            //                         this.activeRow = index
            //                     }
            //                 })
            //             }
            //         } else {
            //             this.isChangeName = this.ChangeLine.inspectLineName
            //             this.isChangeBol = true
            //         }
            //     })
            // }
        },
        addLine () {
            // 判断是否需要保存
            if (this.tableData.length === 0) {
                let line = {
                    inspectLineId: '',
                    enterpriseId: this.enterpriseId,
                    inspectLineName: '检测线' + (this.tableData.length + 1),
                    inspectLineNo: '',
                    inspectLineRfid: '',
                    inspectLineRfidOpen: 0,
                    inspectLineStatus: 0,
                    inspectLineVideoIp: '',
                    inspectLineVideoPort: '',
                    inspectLineVideoChannelNum: '',
                    inspectLineVideoUser: '',
                    inspectLineVideoPass: '',
                    inspectLineVideoPluginType: 0,
                    deviceName: '',
                    deviceId: '',
                    commPort: ''
                }
                this.tableData.push(line)
                this.selectLine = line
                this.$refs.formas.resetFields()
                // this.setCurrent()
            } else {
                // 判断当前的选中的对象是否有修改
                this.$refs.formas.validate((valid) => {
                    if (valid) {
                        let objs = {
                            inspectLineId: '',
                            enterpriseId: this.enterpriseId,
                            inspectLineName: '检测线' + (this.tableData.length + 1),
                            inspectLineNo: '',
                            inspectLineRfid: '',
                            inspectLineRfidOpen: 0,
                            inspectLineStatus: 0,
                            inspectLineVideoIp: '',
                            inspectLineVideoPort: '',
                            inspectLineVideoChannelNum: '',
                            inspectLineVideoUser: '',
                            inspectLineVideoPass: '',
                            inspectLineVideoPluginType: 0,
                            deviceName: '',
                            deviceId: '',
                            commPort: ''
                        }
                        this.tableData.push(objs)
                        this.handleCurrentChange(objs)
                        this.isChangeBol = true
                        // if (JSON.stringify(this.ChangeLine) === JSON.stringify(this.form)) {
                        //     let objs = {
                        //         inspectLineId: '',
                        //         enterpriseId: this.enterpriseId,
                        //         inspectLineName: '检测线' + (this.tableData.length + 1),
                        //         inspectLineNo: '',
                        //         inspectLineRfid: '',
                        //         inspectLineRfidOpen: 0,
                        //         inspectLineStatus: 0,
                        //         inspectLineVideoIp: '',
                        //         inspectLineVideoPort: '',
                        //         inspectLineVideoChannelNum: '',
                        //         inspectLineVideoUser: '',
                        //         inspectLineVideoPass: '',
                        //         inspectLineVideoPluginType: 0,
                        //         deviceName: '',
                        //         deviceId: '',
                        //         commPort: ''
                        //     }
                        //     console.log('add')
                        //     this.tableData.push(objs)
                        //     this.handleCurrentChange(objs)
                        //     // this.activeRow = this.tableData.length - 1
                        //     // this.$refs.singleTable.setCurrentRow(this.tableData[this.tableData.length - 1])
                        // } else {
                        //     this.isChangeName = this.ChangeLine.inspectLineName
                        //     this.isChangeBol = true
                        // }
                    }
                })
            }
            // 高亮
            this.$nextTick(() => {
                this.$refs.singleTable.setCurrentRow(this.tableData[this.tableData.length - 1])
            })
        },
        save () {
            // if (!this.ChangeLine.inspectLineName) {
            //     this.$alert('请选中检测线！', '提示')
            //     return
            // }
            this.$refs.formas.validate((valid) => {
                if (valid) {
                    let objdata = {
                        inspectLineId: '',
                        enterpriseId: this.enterpriseId,
                        inspectLineName: this.selectLine.inspectLineName,
                        inspectLineNo: this.form.deviceId,
                        inspectLineRfid: this.form.deviceName + ':' + this.form.deviceId + ':' + this.form.commPort,
                        inspectLineRfidOpen: this.form.inspectLineRfidOpen,
                        inspectLineStatus: 0,
                        inspectLineVideoIp: this.form.inspectLineVideoIp,
                        inspectLineVideoPort: this.form.inspectLineVideoPort,
                        inspectLineVideoChannelNum: this.form.inspectLineVideoChannelNum,
                        inspectLineVideoUser: this.form.inspectLineVideoUser,
                        inspectLineVideoPass: this.form.inspectLineVideoPass,
                        inspectLineVideoPluginType: this.form.inspectLineVideoPluginType
                    }
                    let url = ''
                    if (this.form.inspectLineId) {
                        objdata.inspectLineId = this.form.inspectLineId
                        url = 'businessopen/inspectline/edit'
                    } else {
                        url = 'businessopen/inspectline/add'
                    }
                    this.$post(url, {
                        data: objdata
                    }).then(res => {
                        this.isChangeName = ''
                        this.$nextTick(() => {
                            this.isChangeBol = false
                        })
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '保存成功！'
                            })
                            this.getDetail(this.enterpriseId)
                        }
                    })
                }
            })
            // this.$post('businessopen/inspectline/add', {
            //     data: this.form
            // }).then(res => {
            //     if (res.code === 0) {
            //         this.tableData.push({
            //             name: '检测线' + (this.tableData.length + 1)
            //         })
            //     }
            // })
        }
    }
}
</script>

<style lang='less' scoped>
.detectionLine {
    .detail-title {
        height:74px;
        line-height: 74px;
        margin:0 36px;
        border-bottom: 1px solid #E8ECEF;
        font-size: 16px;
        color:#666666;
        .back {
            margin-top:20px;
            height: 36px;
            padding: 0;
            width: 78px;
            margin-right: 24px;
        }
    }
    .saveBtn {
        margin-top: 20px;
        margin-left: 170px;
        // line-height: 36px;
        height: 36px;
    }
    .wrap {
        padding: 20px 0 0 40px;
        position: relative;
        .right_box {
            width: 850px;
            position: absolute;
            left: 260px;
            top: 20px;
            .tips_box {
                background:#E6F7FF;
                border:1px solid #BAE7FF;
                height: 40px;
                line-height: 40px;
                border-radius: 4px;
                padding-left: 20px;
                display: flex;
                img {
                    align-self: center;
                    margin-right: 10px;
                }
            }
        }
    }
    .form {
        width: 610px;
        margin-top: 40px;
    }
    .myTable2 {
        line-height: 44px;
    }
}
</style>
<style lang="less">
.detectionLine {
    .el-form {
        .el-input {
            width: 240px;
        }
    }
}
</style>

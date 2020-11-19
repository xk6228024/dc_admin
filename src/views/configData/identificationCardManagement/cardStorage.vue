
<template>
    <div class="certificateProvide" id="certificateProvide">
        <div id="zk"></div><div id="JieTong"></div>
        <object style="position: absolute; top: 0;" width="0" height="0" id="ZhongCheRfid" classid="clsid:FAF6299A-CA50-4D91-9F31-B8FB1D4E1164" >
        </object>
        <search v-model='searchValue' :options='searchOption' @search='search()'>
            <el-button type="primary" size="mini" icon="el-icon-plus" @click="showAlert3=true">新建领取</el-button>
        </search>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                @selection-change="handleSelectionChange"
                style="width: 100%;">
                 <!-- <el-table-column
                type="selection"
                align="left">
                </el-table-column> -->
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                min-width="5%">
                </el-table-column>
                <el-table-column
                prop="orderNo"
                align="left"
                min-width="18%"
                label="识别卡ID">
                </el-table-column>
                <el-table-column
                prop="createTime"
                align="left"
                min-width="10%"
                label="城市">
                </el-table-column>
                <el-table-column
                prop="areaName"
                align="left"
                min-width="10%"
                label="区域">
                </el-table-column>
                <el-table-column
                prop="provinceName"
                align="left"
                min-width="10%"
                label="入库类型">
                </el-table-column>
                <el-table-column
                prop="cityName"
                align="left"
                min-width="20%"
                label="企业名称">
                </el-table-column>
                <el-table-column
                prop="orderNum"
                align="left"
                min-width="20%"
                label="入库时间">
                </el-table-column>
                 <el-table-column
                prop="inputNum"
                align="left"
                min-width="10%"
                label="入库人">
                </el-table-column>
                <!-- <el-table-column
                prop="chargeTime"
                align="left"
                min-width="12%"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="warehousing(scope.row.orderNo, 1)" type="text" size="small"
                        :disabled="!$checkAuth('rfid:purchase:view')">详情</el-button>
                        <el-button @click="audit(scope.row.orderNo)" type="text" size="small"
                        :disabled="!$checkAuth('rfid:purchase:audit')" v-if="scope.row.orderStatus==='待审核'">审核</el-button>
                        <el-button @click="warehousing(scope.row.orderNo, 2)" type="text" size="small"
                        :disabled="!$checkAuth('rfid:purchase:tostore')" v-if="scope.row.orderStatus==='待入库'">入库</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
            <div class="pagination clearfix">
                <el-pagination
                    style="float:right"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNum"
                    :page-sizes="[10, 20, 30, 40, 50, 100]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper, slot"
                    :total="total">
                </el-pagination>
                <!-- <p class="bottom-data fl" style="">本期数据&nbsp;&nbsp;&nbsp;总充值用户：{{userCount}}人&nbsp;&nbsp;&nbsp;总充值金额：{{chargeMoneyCount}}元</p> -->
            </div>
        </div>
        <modal
            :title="adId ? '编辑采购单' : '新增采购单'"
            :width="800"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <el-form :model="form"  ref="form" label-width="132px" class="form">
                <el-row>
                    <el-col :span="12" class="mb20">
                        <el-form-item label="选择城市:" prop="areaList" :rules="$validate({required:true})">
                            <el-cascader
                                placeholder="请选择"
                                v-model="form.areaList"
                                clearable
                                style="width:100%;line-height:36px;"
                                :options="allCityList"
                                filterable>
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <el-form-item label="采购数量:" prop="orderNum" :rules="$validate({required:true})">
                            <el-input
                                type="number"
                                maxlength="80"
                                placeholder="请输入"
                                v-model="form.orderNum">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <el-form-item label="申请人:" prop="orderPerson" :rules="$validate({required:true})">
                            <el-input
                                type="text"
                                maxlength="80"
                                placeholder="请输入"
                                v-model="form.orderPerson">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="mb20">
                        <el-form-item label="采购说明:" prop="orderRemark" :rules="$validate({required:false})">
                            <el-input
                                type="text"
                                maxlength="80"
                                placeholder="请输入"
                                v-model="form.orderRemark">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="mb20">
                        <el-form-item label="" prop="picList" label-width="132px" :rules="$validate({required:true})">
                            <label style="position:absolute;left:-132px;width:120px;text-align:right;line-height:20px;">
                                <span class="red">*</span>
                                采购审批&nbsp;&nbsp;&nbsp;<br/>通过截图：
                            </label>
                            <el-upload
                                :action="uploadUrl + 'attachment/file/upload'"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-success="uploadSuccess"
                                :limit="3"
                                :file-list="form.picList"
                                :on-remove="removeUploadImg">
                                <i class="el-icon-plus"></i>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件,不超过2M,可上传1~3张</div>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </modal>
        <modal
            :title="'审核采购单'"
            :width="800"
            :alert="showAlert2"
            @alertConfirm="alertConfirm2"
            @alertCancel="alertCancel2">
            <div class="detail_box clearfix">
                <h5>采购信息</h5>
                <div class="clearfix">
                    <div class="detail_item" style="width:50%">
                        <label for="">所在城市：</label>
                        <span>{{detailObj.cityName}}</span>
                    </div>
                    <div class="detail_item" style="width:50%">
                        <label for="">采购数量：</label>
                        <span>{{detailObj.orderNum}}</span>
                    </div>
                    <div class="detail_item" style="width:50%">
                        <label for="">申请人：</label>
                        <span>{{detailObj.orderPerson}}</span>
                    </div>
                    <div class="detail_item" style="width:50%">
                        <label for="">采购说明：</label>
                        <span>{{detailObj.orderRemark}}</span>
                    </div>
                    <div class="detail_item detail_item2">
                        <label for="">采购审批通过截图：</label>
                        <span>
                            <img :src="detailObj.approvalUrl1" width="88" height="88" v-if="detailObj.approvalUrl1" class="imgBoder" @click="$lookImg(detailObj.approvalUrl1)">
                            <img :src="detailObj.approvalUrl2" width="88" height="88" v-if="detailObj.approvalUrl2" class="imgBoder" @click="$lookImg(detailObj.approvalUrl2)">
                            <img :src="detailObj.approvalUrl3" width="88" height="88" v-if="detailObj.approvalUrl3" class="imgBoder" @click="$lookImg(detailObj.approvalUrl3)">
                        </span>
                    </div>
                </div>
                <h5>采购信息</h5>
                <div class="clearfix">
                    <el-form :model="form2"  ref="form2">
                        <el-form-item  prop="text" :rules="$validate({required:true})">
                            <div class="detail_item detail_item2">
                                <label for=""><span class="red">*</span>审核意见：</label>
                                <el-input type="textarea" :rows="3" placeholder="请输入" class="ipt" v-model="form2.text"></el-input>
                            </div>
                        </el-form-item>
                    </el-form>
                 </div>
            </div>
        </modal>
        <modal
            :title="'识别卡入库'"
            :width="880"
            :alert="showAlert3"
            @alertConfirm="alertConfirm3"
            @alertCancel="alertCancel3">
            <div class="detail_box clearfix" style="padding-bottom:0;">
                <el-form :model="form" ref="form"  label-width="100px" class="mb20">
                    <el-form-item label="企业类型：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-select size="mini" v-model="form.enterpriseCertificateS" placeholder="请选择" clearable class="wp100">
                            <el-option
                            v-for="child in []"
                            :key="child.regionId"
                            :label="child.regionName"
                            :value="child.regionId" >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="企业名称：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-select size="mini" v-model="form.enterpriseCertificateS" placeholder="请选择" clearable class="wp100">
                            <el-option
                            v-for="child in []"
                            :key="child.regionId"
                            :label="child.regionName"
                            :value="child.regionId" >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div class="clearfix" v-if="!isDetail">
                    <div class="detail_item detail_item2 detail_item3" >
                        <label>串口号：</label>
                        <el-input style="width:140px" size="mini" placeholder="请输入" v-model="commPort"></el-input>
                        <label>设备ID：</label>
                        <el-input style="width:140px" size="mini" placeholder="请输入" v-model="deviceId"></el-input>
                        <label>读卡器：</label>
                        <el-select style="width:140px" size="mini" clearable v-model="deviceName" placeholder="请选择">
                            <el-option
                            v-for="item in [{value:'ZK',label:'中科'},{value:'JT',label:'捷通'}]"
                            :key="item.value"
                            :label="item.label"
                            clearable
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button size="mini" class="btn fr" type="primary" plain @click="readCard(deviceName,commPort,deviceId)">连接设备</el-button>
                    </div>
                </div>
                <div class="clearfix">
                    <el-form :model="form3"  ref="form3">
                        <el-form-item  prop="text">
                            <div class="detail_item detail_item2" style="margin-top:15px;">
                                <label for="">操作提示：</label>
                                <div class="text_info" ref="readCardInfo" v-html="readCardInfo"></div>
                                <p class="handle_info">已入库 {{this.detailObj.inputNum}}</p>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
// import Breadcrumb from '@/components/Breadcrumb'
import Search from '@/components/search'
import Modal from '@/components/Modal'
import toReadCard from '@/utils/readCard.js'
export default {
    name: 'certificateProvide',
    data () {
        return {
            searchOption: [
                {
                    label: '选择地区',
                    type: 'regionSelect',
                    key: 'userName'
                },
                {
                    label: '入库类型',
                    type: 'select',
                    typeList: 'bussinessCategory',
                    key: 'userName'
                },
                {
                    label: '企业名称',
                    type: 'input',
                    key: 'userName'
                },
                {
                    label: '发放日期',
                    type: 'date',
                    key: 'userName'
                },
                {
                    label: '入库人',
                    type: 'input',
                    key: 'userName'
                }
            ],
            searchValue: {},
            isDetail: false,
            orderNo: '',
            readCardInfo: '',
            deviceName: '',
            commPort: '',
            deviceId: '',
            detailObj: {},
            uploadUrl: window.uploadURL,
            form3: {
                a: ''
            },
            showAlert3: false,
            form2: {
                text: ''
            },
            showAlert2: false,
            form: {
                areaList: [],
                orderNum: '',
                orderPerson: '',
                orderRemark: '',
                picList: []
            },
            adId: '',
            allCityList: [],
            multipleSelection: [],
            chargeStatus: '',
            chargeMoneyCount: 0,
            userCount: 0,
            loading: false,
            areaList: [],
            cityList: [],
            regionId: '',
            areaId: [], // 大区Id
            searchKey: '',
            auditRadio: '1', // 弹窗审核结果
            certStatus: 0,
            certStatusList: [
                {
                    value: 0,
                    label: '全部'
                },
                {
                    value: 1,
                    label: '通过'
                },
                {
                    value: 2,
                    label: '未通过'
                }
            ],
            dateRegion: [],
            value: '',
            options: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            tableData: [{}]
        }
    },
    components: {
        Modal,
        // Breadcrumb
        Search
    },
    created () {
        // this.getAreaList()
        this.getDataList()
        this.getAllCity()
    },
    watch: {
    },
    methods: {
        readCard (deviceName, commPort, deviceId) {
            // console.log(toReadCard)
            // console.log(toReadCard({ deviceName: 'ZK', commPort: 'COM3', deviceId: '1' }))
            this.readCardInfo += '<p>连接设备.....</p>'
            let res = toReadCard({ deviceName, commPort, deviceId })
            if (res.code === 200) {
                // console.log(res.content)
                this.$post(`/product/cjl/rfid/purchase/orders/${this.orderNo}/${res.content}`).then(response => {
                    if (response.code === 0) {
                        this.readCardInfo += `<p class="green">识别卡录入,识别卡ID：${res.content}</p>`
                        this.detailObj.inputNum += 1
                    } else {
                        this.readCardInfo += `<p>${response.msg}</p>`
                    }
                    this.$nextTick(() => {
                        this.$refs.readCardInfo.scrollTop = this.$refs.readCardInfo.scrollHeight
                    })
                })
            } else {
                this.readCardInfo += `<p>${res.content}</p>`
                this.$nextTick(() => {
                    this.$refs.readCardInfo.scrollTop = this.$refs.readCardInfo.scrollHeight
                })
            }
        },
        getDetail (orderNo) {
            this.$get(`/product/cjl/rfid/purchase/orders/${orderNo}`).then(res => {
                if (res.code === 0) {
                    this.detailObj = res.data
                }
            })
        },
        warehousing (val, type) {
            this.isDetail = type === 1
            this.isDetail = false
            if (type === 1) {
                this.$get(`/product/cjl/rfid/purchase/orders/${val}/cards`).then(res => {
                    // this.form3.text = '111'
                    if (res.code === 0) {
                        res.data.forEach((e, index) => {
                            this.readCardInfo += `<p>${index + 1}、识别卡ID：${e.cardNo}</p>`
                        })
                    }
                })
            }
            this.showAlert3 = true
            this.$get(`/product/cjl/rfid/purchase/orders/${val}`).then(res => {
                if (res.code === 0) {
                    this.orderNo = val
                    this.detailObj = res.data
                    this.showAlert3 = true
                }
            })
        },
        audit (val) {
            this.$get(`/product/cjl/rfid/purchase/orders/${val}`).then(res => {
                if (res.code === 0) {
                    this.orderNo = val
                    this.detailObj = res.data
                    this.showAlert2 = true
                }
            })
        },
        handlePictureCardPreview (res) {
            this.$lookImg(res.url)
        },
        // 上传成功
        uploadSuccess (res) {
            this.form.picList.push(res.data)
        },
        // 上传之前
        beforeAvatarUpload (file) {
            const isJPG = /jpeg|png|gif/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/GIF/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        removeUploadImg (file, fileList) {
            // console.log(file, fileList)
            // this.form.picList = []
        },
        // 表格多选事件
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        // 批量操作
        batchOperation (val) {
            let arr = this.multipleSelection.map(e => {
                return e.entId
            })
            if (!arr.length) {
                this.$msg({
                    type: 'error',
                    message: '请选择企业'
                })
                return
            }
            if (val === 'disabled') {
                this.$post('entUserManager/closeOpenUser', {
                    status: 1,
                    ids: arr,
                    serviceUser: ''
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }
            if (val === 'enable') {
                this.$post('entUserManager/closeOpenUser', {
                    status: 0,
                    ids: arr,
                    serviceUser: ''
                }).then(res => {
                    if (res.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '操作成功'
                        })
                        this.getDataList()
                    }
                })
            }
        },
        getAllCity () {
            this.$get('comm/citys/areas/tree').then(res => {
                if (res.code === 0) {
                    res.data.forEach(e => {
                        e.label = e.areaName
                        e.value = e.areaCode
                        e.children && e.children.forEach(f => {
                            f.label = f.provinceName
                            f.value = f.provinceCode
                            f.children && f.children.forEach(g => {
                                g.label = g.cityName
                                g.value = g.cityCode
                            })
                        })
                    })
                    this.allCityList = res.data
                }
            })
        },
        changeStatus (cityDomain, status) {
            this.$post('syscity/status', {
                data: {
                    cityDomain,
                    deleteStatus: status
                }
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                    this.getDataList()
                }
            })
        },
        // 检测线设置
        goSetting (id) {
            this.$router.push('/cjlEnterpriseArchivesDetail?id=' + id)
        },
        // 获取区域列表
        getAreaList () {
            this.$get('list/areaList').then(res => {
                if (res.code === 0) {
                    this.areaList = res.data
                    localStorage.areaList = JSON.stringify(res.data)
                }
            })
        },
        exportEXC () {
            window.open(`${window.uploadURL}product/cjl/rfid/purchase/orders/export?areaCode=${this.areaId[0] || ''}&provinceCode=${this.areaId[1] || ''}&cityCode=${this.areaId[2] || ''}&status=${this.chargeStatus || ''}&startTime=${this.dateRegion[0] || ''}&orderNo=${this.searchKey || ''}&endTime=${this.dateRegion[1] || ''}`)
        },
        // 获取所有数据
        getDataList () {
            this.loading = true
            // console.log(this.dateRegion)
            let obj = {
                areaCode: this.areaId[0],
                provinceCode: this.areaId[1],
                cityCode: this.areaId[2],
                status: this.chargeStatus,
                startTime: this.dateRegion && this.dateRegion[0],
                orderNo: this.searchKey,
                endTime: this.dateRegion && this.dateRegion[1]
            }
            this.$post('/product/cjl/rfid/purchase/orders/list?page=' + this.pageNum + '&size=' + this.pageSize, obj)
                .then(res => {
                    if (res && res.code === 0) {
                        this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                        this.total = res.total
                        // this.chargeMoneyCount = res.data.totalMoney
                        // console.log(this.chargeMoneyCount)
                        // this.userCount = res.data.userCount
                        // console.log(this.userCount)
                    }
                    this.loading = false
                }).catch(err => {
                    console.log(err)
                    this.loading = false
                })
        },
        // 打开详情弹窗
        goDetail (id) {
            this.showAlert = true
        },
        // 弹窗确认
        alertConfirm () {
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    let obj = {
                        areaCode: this.form.areaList[0],
                        provinceCode: this.form.areaList[1],
                        cityCode: this.form.areaList[2],
                        orderNum: this.form.orderNum,
                        orderPerson: this.form.orderPerson,
                        orderRemark: this.form.orderRemark,
                        approvalUrl1: this.form.picList[0],
                        approvalUrl2: this.form.picList[1],
                        approvalUrl3: this.form.picList[2]
                    }
                    this.$post('/product/cjl/rfid/purchase/orders/add', obj).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                message: '添加成功',
                                type: 'success'
                            })
                            this.getDataList()
                            this.alertCancel()
                        }
                    })
                }
            })
            // this.showAlert = false
        },
        alertConfirm2 () {
            this.$refs['form2'].validate((valid) => {
                if (valid) {
                    this.$get(`/product/cjl/rfid/purchase/orders/audit/${this.orderNo}`, {
                        remark: this.form2.text
                    }).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                message: '审核成功',
                                type: 'success'
                            })
                            this.getDataList()
                            this.alertCancel2()
                        }
                    })
                }
            })
        },
        alertConfirm3 () {
            this.getDataList()
            this.alertCancel3()
        },
        // 弹窗取消
        alertCancel () {
            this.$refs['form'].resetFields()
            this.showAlert = false
        },
        alertCancel2 () {
            this.showAlert2 = false
            this.detailObj = {}
            this.orderNo = ''
            this.readCardInfo = ''
            this.deviceName = ''
            this.commPort = ''
            this.deviceId = ''
        },
        alertCancel3 () {
            this.showAlert3 = false
            this.detailObj = {}
            this.orderNo = ''
            this.readCardInfo = ''
            this.deviceName = ''
            this.commPort = ''
            this.deviceId = ''
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
        }
    }
}
</script>

<style lang='less' scoped>
.certificateProvide {
    .mb20 {
        margin-bottom: 20px;
    }
    .form {
        padding: 0 20px;
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
    .detail_box {
        padding: 0 70px 30px;
        h5 {
            font-size: 16px;
            color: #000000;
            font-weight: 500;
            line-height: 30px;
            margin-bottom: 10px;
        }
        .detail_item {
            float: left;
            width: 33%;
            // margin-bottom: 15px;
            min-height: 40px;
            label {
                color: #262626;
            }
            span {
                color: #595959;
            }
            img {
                vertical-align: top;
                cursor: pointer;
                margin-right: 30px;
                position: relative;
                top: -15px;
            }
        }
        .detail_item2 {
            width: 100%;
        }
        .detail_item3 {
            label {
                display: inline-block;
                width: 70px;
                text-align: right;
            }
            .btn {
                margin-left: 20px;
                vertical-align: top;
            }
        }
        .text_info {
            width: 628px;
            display: inline-block;
            vertical-align: top;
            height: 80px;
            border: 1px solid #dddddd;
            overflow-y: auto;
            line-height: 20px;
            padding: 10px 20px;
        }
        .handle_info {
            padding-left: 80px;
            color: #52C31A;
        }
        .ipt {
            width: 550px;
            vertical-align: top;
        }
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
    .bottom-data {
        color:#98A9BC;
        font-weight: normal;
    }
    .pagination {
        position: relative;
        .bottom-data {
            line-height: 36px;
            color:#98A9BC;
            font-weight: normal;
            margin-top: 20px;
        }
    }
}
</style>
<style lang='less'>
.certificateProvide {
    .el-upload-list--picture-card .el-upload-list__item {
        width: 104px;
        height: 104px;
    }
    .el-upload--picture-card {
        width: 104px;
        height: 104px;
        line-height: 104px;
    }
    .avatar-uploader{
        height: 100px;
        display: inline-block;
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 104px;
            width: 104px;
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
            width: 104px;
            height: 104px;
            line-height: 104px;
            text-align: center;
        }
    }
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
#certificateProvide {
    .el-table--enable-row-transition .el-table__body .el-table__row td:nth-child(1) {
        padding-left: 0!important;
    }
    .el-table__header .has-gutter th:nth-child(1) {
        padding-left: 0!important;
    }
}
</style>

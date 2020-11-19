<!-- 空白页面组件 -->
<template>
    <div class="wasteBind detailPage" style="position:initial;">
        <search :hasTitle="true" :hasBtn="false">
            <div slot="title">
                <span style="font-size:16px;" class="fwb">设备绑定</span>&nbsp;
            </div>
        </search>
        <div class="detail_content" v-if="!isSuccess">
            <el-tag type="success" class="wp100 mt20" v-if="isConnect">
                <i class="el-icon-success"></i>
                绑定设备链接正常 (RFID-ID: 03231354881)
                <span class="fr c9 pointer" @click="isConnect=false">变更>></span>
            </el-tag>
             <el-tag type="danger" class="wp100 mt20" v-if="!isConnect">
                <i class="el-icon-success"></i>
                绑定设备链接异常
                <span class="fr c9 pointer" @click="showAlert=true">链接设备>></span>
            </el-tag>
            <div class="centerIpt">
                <el-input placeholder="选择维修企业" v-model="input" class="input-with-select" style="width:450px;">
                    <el-select v-model="select1" slot="prepend" placeholder="选择城市" style="width:100px;">
                        <el-option label="深圳" value="1"></el-option>
                        <el-option label="肇庆" value="2"></el-option>
                        <el-option label="广州" value="3"></el-option>
                    </el-select>
                    <el-select v-model="select2" slot="append" placeholder="设备类型" style="width:100px;">
                        <el-option label="设备类型" value="1"></el-option>
                        <el-option label="设备类型" value="2"></el-option>
                        <el-option label="设备类型" value="3"></el-option>
                    </el-select>
                </el-input>
                &nbsp;&nbsp;
                <el-button type="primary" @click="isSuccess = true" :disabled="!isConnect">绑定</el-button>
            </div>
        </div>
        <div class="detail_content" v-if="isSuccess">
            <div class="centerBox">
                <i class="el-icon-success"></i>
                <h1>绑定成功</h1>
                <p>RFID: 013F551112344D</p>
                <p>设备类型：智慧垃圾袋</p>
                <p>绑定企业：南宁市光辉汽车维修中心</p>
                <div class="mt20">
                    <el-button type="primary" size="small" @click="isSuccess = false">再次绑定</el-button>
                    <el-button type="" size="small" @click="$router.push('/wasteManage')">返回列表</el-button>
                </div>
            </div>
        </div>
        <BreadFoot :breadArr="[{title:'业务管理',path:''},{title:'固废物智慧设备管理',path:''},{title:'设备绑定',path:''}]"
            icons="icon-business-normal">
            <el-button size="small" @click="$router.push('/wasteManage')">返回</el-button>
        </BreadFoot>
         <modal
            :title="'链接设备'"
            :width="460"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="alertInner" style="padding:10px 20px;">
                <el-form :model="form" ref="form"  label-width="80px" size="mini">
                    <el-form-item label="串口号：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-select placeholder="请选择" clearable v-model="form.a" style="width:100%">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="设备ID：" prop="enterpriseCertificateS" :rules="$validate({required:true,msg:'请输入'})">
                        <el-input
                            clearable
                            maxlength="12"
                            class=""
                            type="number"
                            v-model="form.enterpriseCertificateS"
                            placeholder="请输入">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="读卡器：" prop="enterpriseCertificateE" :rules="$validate({required:true,msg:'请输入'})">
                        <el-select placeholder="请选择" clearable v-model="form.a" style="width:100%">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </modal>
    </div>
</template>

<script>
import BreadFoot from '@/components/BreadFoot'
import Search from '@/components/search'
import Modal from '@/components/Modal'
export default {
    name: 'wasteBind',
    data () {
        return {
            showAlert: false,
            form: {},
            isConnect: true,
            isSuccess: false,
            input: '',
            select1: '',
            select2: ''
        }
    },
    components: {
        Search,
        Modal,
        BreadFoot
    },
    created () {
        if (Math.random() >= 0.5) {
            this.isConnect = true
        } else {
            this.isConnect = false
        }
    },
    computed: {
    },
    methods: {
        iin () {},
        alertConfirm () {
            this.$message({
                type: 'success',
                message: '链接成功'
            })
            this.isConnect = true
            this.alertCancel()
        },
        alertCancel () {
            this.showAlert = false
        },
        handleSizeChange () {},
        handleCurrentChange () {}
    }
}
</script>

<style lang='less' scoped>
.wasteBind {
    .centerIpt {
        width: 555px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .centerBox {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        i {
            font-size: 55px;
            color: #41C63B;
        }
        h1 {
            margin: 10px;
        }
        p {
            line-height: 20px;
            color: #999;
        }
    }
}
</style>

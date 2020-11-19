<!-- 运营通告详情 -->
<template>
    <div class="operateNoticeDetail detailPage">
        <div class="detail_header">
            <el-button type="primary" @click="toEdit" class="goBack btn" v-if="!edit && form.status === 0">编 辑</el-button>
            <el-button type="primary" @click="saveData" class="goBack btn" v-if="edit">保 存</el-button>
            <el-button class="btn" v-if="form.status === 0 && !edit" @click="noticeOver">审核发布</el-button>
            <el-button class="btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content" v-loading="loading">
            <div class="detail_model"  style="border:none;" v-show="!edit">
                <h4>通告信息</h4>
                <div class="clearfix">
                    <div class="detail_item" style="width:480px;">
                        <label>通告发布时间段：</label>
                        <span>{{form.startTime | filterTime('yyyy-mm-dd')}} ~ {{form.endTime | filterTime('yyyy-mm-dd')}}</span>
                    </div>
                    <img class="audit-icom" v-if="form.status === 1" src="@/assets/images/icon-audit.png">
                    <!-- <div class="detail_item">
                        <label>通告上线系统：</label>
                        <span>{{form.publishSystemName}}</span>
                    </div> -->
                    <div class="detail_item" style="width:100%;">
                        <label>通告接收端：</label>
                        <span>{{cityStr}}</span>
                    </div>
                    <div class="detail_item" style="width:900px;">
                        <label>通告标题：</label>
                        <span>{{form.noticeTitle}}</span>
                    </div>
                    <div class="detail_item text-content" style="width:900px;" v-html="form.content">
                    </div>
                </div>
            </div>
            <div class="edit_content" v-show="edit">
                <el-form :model="form" ref="form" class="form">
                    <div class="detail_model" style="border:none;">
                        <h4>通告信息</h4>
                        <div class="clearfix">
                            <div class="detail_item" style="width:300px;margin-right:250px;">
                                <label>通告发布时间段<span class="required">(必填)</span></label>
                                <el-form-item prop="time" :rules="$validate({required:true})">
                                    <el-date-picker
                                    class="w350"
                                    v-model="form.time"
                                    :unlink-panels="true"
                                    type="daterange"
                                    :picker-options="pickerOptions"
                                    value-format="timestamp"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <!-- <div class="detail_item" style="width:400px;">
                                <label>通告上线系统<span class="required">(必填)</span></label>
                                <el-form-item prop="publishSystem" :rules="$validate({required:true, type: 'array'})">
                                    <el-select v-model="form.publishSystem" multiple placeholder="请选择" class="w350">
                                        <el-option
                                        v-for="item in dataSource"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div> -->
                            <div class="detail_item" style="width:100%;margin-bottom:0;">
                                <label>通告接收端<span class="required">(必填)</span></label>
                                <el-form-item prop="publishSystem">
                                    <div></div>
                                    <el-checkbox class="checkBox_city tal" v-model="checked1">中车信息服务运营系统
                                        <!-- <el-select v-model="form.publishSystem" multiple placeholder="请选择" class="w270">
                                            <el-option
                                            v-for="item in dataSource"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select> -->
                                    </el-checkbox>
                                    <el-checkbox class="checkBox_city tar" v-model="checked2">超级骊&nbsp;
                                        <el-select v-model="selectCity1" clearable collapse-tags filterable multiple placeholder="请选择" class="w270 lh32">
                                            <el-option
                                            v-for="item in cityList"
                                            :key="item.regionId"
                                            :label="item.areaName"
                                            :value="item.regionId">
                                            </el-option>
                                        </el-select>
                                    </el-checkbox>
                                    <br>
                                    <el-checkbox class="checkBox_city tal" v-model="checked3">运输企业服务系统&nbsp;
                                        <el-select v-model="selectCity2" clearable collapse-tags filterable multiple placeholder="请选择" class="w270 lh32">
                                            <el-option
                                            v-for="item in cityList"
                                            :key="item.regionId"
                                            :label="item.areaName"
                                            :value="item.regionId">
                                            </el-option>
                                        </el-select>
                                    </el-checkbox>
                                    <el-checkbox class="checkBox_city tar" v-model="checked4">检测企业服务系统&nbsp;
                                        <el-select v-model="selectCity3" clearable collapse-tags filterable multiple placeholder="请选择" class="w270 lh32">
                                            <el-option
                                            v-for="item in cityList"
                                            :key="item.regionId"
                                            :label="item.areaName"
                                            :value="item.regionId">
                                            </el-option>
                                        </el-select>
                                    </el-checkbox>
                                </el-form-item>
                            </div>
                            <div class="detail_item" style="width:100%">
                                <label>通告标题<span class="required">(必填)</span></label>
                                <el-form-item prop="noticeTitle" :rules="$validate({required:true})">
                                    <el-input
                                        class="w900"
                                        maxlength="50"
                                        v-model.trim="form.noticeTitle"
                                        placeholder="请输入">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="fl" style="width:100%;margin-top: 10px;">
                                <el-form-item prop="content">
                                    <vue-ueditor-wrap class="ueditor"
                                    v-model="form.content" :config="myConfig"
                                    :destroy="false">
                                    </vue-ueditor-wrap>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
        <modal
            :title="'查看技术参数'"
            :width="1020"
            :alert="showAlert"
            @alertConfirm="alertConfirm"
            @alertCancel="alertCancel">
            <div class="detail_content">
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
    name: 'operateNoticeDetail',
    data () {
        return {
            cityStr: '',
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            selectCity1: [],
            selectCity2: [],
            selectCity3: [],
            cityList: [],
            form: {
                noticeTitle: '',
                time: [],
                content: '',
                systemId: [],
                publishSystem: [],
                publishSystemName: ''
            },
            myConfig: {
                // 如果需要上传功能,找后端小伙伴要服务器接口地址
                serverUrl: window.uploadURL + 'attachment/file/upload',
                // serverUrl: '/vmts/sys/ueditor/exec',
                // 你的UEditor资源存放的路径,相对于打包后的index.html
                UEDITOR_HOME_URL: '/UEditor/',
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: 350,
                // 初始容器宽度
                initialFrameWidth: '100%',
                // 关闭自动保存
                enableAutoSave: false,
                imageActionName: 'uploadimage',
                imageFieldName: 'file',
                imageAllowFiles: ['.png', '.jpg', '.jpeg'],
                imageUrlPrefix: '',
                imageMaxSize: 1024000,
                videoActionName: 'uploadvideo',
                videoFieldName: 'file',
                videoUrlPrefix: '',
                videoMaxSize: 8192000,
                videoAllowFiles: ['.mp4', '.avi', 'ogg', 'rmvb', 'rm', 'wav'],
                fileActionName: 'uploadfile',
                fileFieldName: 'file',
                fileUrlPrefix: '',
                fileMaxSize: 8192000,
                fileAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.flv', '.swf', '.mkv', '.avi', '.rm', '.rmvb', '.mpeg', '.mpg', '.ogg', '.ogv', '.mov', '.wmv', '.mp4', '.webm', '.mp3', '.wav', '.mid', '.rar', '.zip', '.tar', '.gz', '.7z', '.bz2', '.cab', '.iso', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt', '.md', '.xml']
            },
            noticeId: '',
            showAlert: false,
            edit: false,
            loading: false,
            pickerOptions: { // 日期范围时间限制
                disabledDate (time) {
                    return time.getTime() < Date.now() - 8.64e7
                }
            },
            dataSource: [
                {
                    value: '1',
                    label: '超级骊'
                },
                {
                    value: '2',
                    label: '中车信息运营服务系统'
                }
            ] // 数据来源
        }
    },
    components: {
        Modal,
        VueUeditorWrap
    },
    watch: {
        checked2 (val) {
            if (!val) {
                this.selectCity1 = []
            }
        },
        checked3 (val) {
            if (!val) {
                this.selectCity2 = []
            }
        },
        checked4 (val) {
            if (!val) {
                this.selectCity3 = []
            }
        }
    },
    created () {
        this.noticeId = this.$route.query.id
        this.getCityList()
    },
    methods: {
        cityFilter (str) {
            let arr = str.split(',')
            let res = ''
            arr.forEach(e => {
                this.cityList.forEach(m => {
                    if (m.regionId === e) {
                        res += `,${m.areaName}`
                    }
                })
            })
            if (res.indexOf(',') === 0) {
                res = res.slice(1)
            }
            return res
        },
        getCityList () {
            this.$post('workUser/city/allocateArea', {}).then(res => {
                let arr = []
                if (res.data && res.data.length) {
                    res.data.forEach(element => {
                        if (element.cityDto && element.cityDto.length) {
                            arr = arr.concat(element.cityDto)
                        }
                    })
                }
                console.log(arr)
                let result = []
                let obj = {}
                for (let i = 0; i < arr.length; i++) {
                    if (!obj[arr[i].regionId]) {
                        result.push(arr[i])
                        obj[arr[i].regionId] = true
                    }
                }
                this.cityList = result
                if (!this.noticeId) {
                    this.edit = true
                } else {
                    this.getData(this.noticeId)
                }
            })
        },
        // 获取详情数据
        getData (id) {
            this.loading = true
            this.$post('/notice/detail', {
                noticeId: id
            })
                .then(res => {
                    res.data.time = [new Date(res.data.startTime).getTime(), new Date(res.data.endTime).getTime()]
                    // if (res.data.publishSystem === '1') {
                    //     res.data.publishSystem = ['1']
                    //     res.data.publishSystemName = '超级骊'
                    // } else if (res.data.publishSystem === '2') {
                    //     res.data.publishSystem = ['2']
                    //     res.data.publishSystemName = '中车信息运营服务系统'
                    // } else if (res.data.publishSystem === '3') {
                    //     res.data.publishSystem = ['1', '2']
                    //     res.data.publishSystemName = '超级骊,中车信息运营服务系统'
                    // } else {
                    //     res.data.publishSystem = []
                    //     res.data.publishSystemName = ''
                    // }
                    this.cityStr = ''
                    if (res.data.noticeSystemDetailList) {
                        res.data.noticeSystemDetailList.forEach(e => {
                            if (e.noticeSystemDetailCode - 0 === 1) {
                                this.checked1 = true
                                this.cityStr += ';中车信息运营服务系统'
                            }
                            if (e.noticeSystemDetailCode - 0 === 2) {
                                this.checked2 = true
                                this.cityStr += ';超级骊'
                                console.log(this.cityFilter(e.cityCode))
                                this.cityStr += `(${this.cityFilter(e.cityCode)})`
                                if (e.cityCode) {
                                    this.selectCity1 = e.cityCode.split(',')
                                }
                            }
                            if (e.noticeSystemDetailCode - 0 === 3) {
                                this.checked3 = true
                                this.cityStr += ';运输企业服务系统'
                                this.cityStr += `(${this.cityFilter(e.cityCode)})`
                                if (e.cityCode) {
                                    this.selectCity2 = e.cityCode.split(',')
                                }
                            }
                            if (e.noticeSystemDetailCode - 0 === 4) {
                                this.checked4 = true
                                this.cityStr += ';检测企业服务系统'
                                this.cityStr += `(${this.cityFilter(e.cityCode)})`
                                if (e.cityCode) {
                                    console.log(e.cityCode)
                                    this.selectCity3 = e.cityCode.split(',')
                                }
                            }
                        })
                    }
                    if (this.cityStr.indexOf(';') === 0) {
                        this.cityStr = this.cityStr.slice(1)
                    }
                    this.form = res.data
                    this.loading = false
                })
                .catch(e => {
                    this.loading = false
                })
        },
        alertConfirm () {
            this.showAlert = false
        },
        alertCancel () {
            this.showAlert = false
        },
        toEdit () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('notice:edit')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.edit = true
        },
        saveData () {
            if (!this.checked1 && !this.checked2 && !this.checked3 && !this.checked4) {
                this.$alert('请选择通告接收端', '提示')
                return
            }
            if (this.checked2 && !this.selectCity1.length) {
                this.$alert('请选择发布到超级骊的城市', '提示')
                return
            }
            if (this.checked3 && !this.selectCity2.length) {
                this.$alert('请选择发布到运输企业服务系统的城市', '提示')
                return
            }
            if (this.checked4 && !this.selectCity3.length) {
                this.$alert('请选择发布到检测企业服务系统的城市', '提示')
                return
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (!this.form.content) {
                        this.$alert('通告内容不能为空', '提示')
                        return
                    }
                    let obj = JSON.parse(JSON.stringify(this.form))
                    obj.startTime = this.form.time[0]
                    obj.endTime = this.form.time[1]
                    obj.noticeId = this.noticeId
                    obj.noticeSystemDetailList = []
                    if (this.form.noticeSystemDetailList) {
                        this.form.noticeSystemDetailList.forEach(e => {
                            if (e.noticeSystemDetailCode - 0 === 1 && this.checked1) {
                                obj.noticeSystemDetailList.push(e)
                            }
                            if (e.noticeSystemDetailCode - 0 === 2 && this.checked2) {
                                obj.noticeSystemDetailList.push(e)
                            }
                            if (e.noticeSystemDetailCode - 0 === 3 && this.checked3) {
                                obj.noticeSystemDetailList.push(e)
                            }
                            if (e.noticeSystemDetailCode - 0 === 4 && this.checked4) {
                                obj.noticeSystemDetailList.push(e)
                            }
                        })
                    }
                    obj.noticeSystemDetailList.forEach(e => {
                        if (e.noticeSystemDetailCode - 0 === 2 && this.checked2) {
                            e.cityCode = this.selectCity1.join(',')
                        }
                        if (e.noticeSystemDetailCode - 0 === 3 && this.checked3) {
                            e.cityCode = this.selectCity2.join(',')
                        }
                        if (e.noticeSystemDetailCode - 0 === 4 && this.checked4) {
                            e.cityCode = this.selectCity3.join(',')
                        }
                    })
                    if (this.checked1 && !obj.noticeSystemDetailList.find((e) => { return e.noticeSystemDetailCode - 0 === 1 })) {
                        obj.noticeSystemDetailList.push({
                            noticeSystemDetailCode: 1
                        })
                    }
                    if (this.checked2 && !obj.noticeSystemDetailList.find((e) => { return e.noticeSystemDetailCode - 0 === 2 })) {
                        obj.noticeSystemDetailList.push({
                            noticeSystemDetailCode: 2,
                            cityCode: this.selectCity1.join(',')
                        })
                    }
                    if (this.checked3 && !obj.noticeSystemDetailList.find((e) => { return e.noticeSystemDetailCode - 0 === 3 })) {
                        obj.noticeSystemDetailList.push({
                            noticeSystemDetailCode: 3,
                            cityCode: this.selectCity2.join(',')
                        })
                    }
                    if (this.checked4 && !obj.noticeSystemDetailList.find((e) => { return e.noticeSystemDetailCode - 0 === 4 })) {
                        obj.noticeSystemDetailList.push({
                            noticeSystemDetailCode: 4,
                            cityCode: this.selectCity3.join(',')
                        })
                    }
                    // if (obj.publishSystem.length === 1) {
                    //     if (obj.publishSystem[0] === '1') {
                    //         obj.publishSystemName = '超级骊'
                    //         obj.publishSystem = '1'
                    //     }
                    //     if (obj.publishSystem[0] === '2') {
                    //         obj.publishSystemName = '中车信息运营服务系统'
                    //         obj.publishSystem = '2'
                    //     }
                    // }
                    // if (obj.publishSystem.length === 2) {
                    //     obj.publishSystemName = '全部'
                    //     obj.publishSystem = '3'
                    // }
                    let url = ''
                    let msg = ''
                    if (this.noticeId) {
                        url = '/notice/edit'
                        msg = '保存成功'
                    } else {
                        url = '/notice/add'
                        msg = '新建成功'
                    }
                    console.log(obj)
                    this.$post(url, obj).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: msg
                            })
                            if (this.noticeId) {
                                this.edit = false
                                this.getData(this.noticeId)
                            } else {
                                this.$store.dispatch('closePage', {
                                    nextPath: '/operateNotice'
                                })
                            }
                            this.$store.commit('setRefreshList', 'operateNotice')
                        }
                    })
                }
            })
        },
        noticeOver () {
            // 权限校验**********************************************************
            if (!this.$checkAuth('notice:release')) {
                this.$msg({
                    type: 'error',
                    message: '你没有该项权限'
                })
                return
            }
            this.$confirm('确认审核发布此通过吗？', '提示', {
                confirmButtonText: '确 定',
                cancelButtonText: '取 消',
                type: 'warning'
            }).then(() => {
                this.$get(`/notice/over?noticeId=${this.noticeId}&status=1`)
                    .then(res => {
                        this.$message({
                            type: 'success',
                            message: '审核成功'
                        })
                        this.$store.commit('setRefreshList', 'operateNotice')
                        this.form.status = status
                        this.edit = false
                        this.getData(this.noticeId)
                    })
            }).catch(action => {
            })
        },
        // 关闭页面
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/operateNotice'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.operateNoticeDetail {
    .checkBox_city {
        width: 435px;
        margin-bottom: 20px;
        // text-align: right;
    }
    .w900 {
        width: 900px;
    }
    .w350 {
        width: 350px;
    }
    .w270 {
        width: 270px;
    }
    .ueditor {
        width: 898px;
        line-height: 20px;
        height: 400px;
    }
    .text-content {
        min-height: 400px;
        padding: 4px 12px;
        border:1px solid #D9D9D9;
        border-radius: 4px;
        overflow: auto;
    }
    .detail_model {
        position:relative;
        .audit-icom{
            position:absolute;
            left: 330px;
            top: 58px;
        }
    }
}
</style>
<style lang="less">
.operateNoticeDetail {
    .lh32 {
        line-height: 32px;
        height: 32px;
        .el-input__inner {
            line-height: 32px;
            height: 32px!important;
        }
    }
}
</style>

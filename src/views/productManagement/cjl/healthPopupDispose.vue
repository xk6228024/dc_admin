<!-- 健康弹窗配置 -->
<template>
    <div class="healthPopupDispose detailPage">
        <div class="detail_header">
            <el-button type="primary" @click="saveData" class="goBack btn" :disabled="!$checkAuth('cjl:healthPopupConfig:edit')">保 存</el-button>
            <el-button class="btn" @click="close">关 闭</el-button>
        </div>
        <div class="detail_content">
            <el-form :model="form" ref="form" class="form">
                <div class="detail_model">
                    <h4>超级骊WEB弹窗配置</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>超级骊登录弹窗</label>
                            <el-form-item  :rules="$validate({required:true})">
                                <el-select class="edit_input" v-model="form.webIsDisplay" placeholder="请选择">
                                    <el-option
                                    v-for="item in config"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>弹窗间隔时间</label>
                            <el-form-item>
                                <el-select class="edit_input" disabled value="1" placeholder="请选择">
                                    <el-option
                                    v-for="item in [{value:'1',label:'2小时/次'}]"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>员工管理列表</label>
                            <el-form-item>
                                <el-select class="edit_input" disabled v-model="form.webIsDisplay" placeholder="请选择">
                                    <el-option
                                    v-for="item in config"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="line"></div>
                    <h4>超级骊APP弹窗配置</h4>
                    <div class="clearfix">
                        <div class="detail_item">
                            <label>超级骊APP登录弹窗</label>
                            <el-form-item>
                                <el-select class="edit_input" v-model="form.appIsDisplay" placeholder="请选择">
                                    <el-option
                                    v-for="item in config"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>弹窗间隔时间</label>
                            <el-form-item>
                                <el-select class="edit_input" disabled value="1" placeholder="请选择">
                                    <el-option
                                    v-for="item in [{value:'1',label:'2小时/次'}]"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="detail_item">
                            <label>员工管理列表</label>
                            <el-form-item>
                                <el-select class="edit_input" disabled v-model="form.appIsDisplay" placeholder="请选择">
                                    <el-option
                                    v-for="item in config"
                                    :key="item.value"
                                    :label="item.label"
                                    clearable
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'healthPopupDispose',
    data () {
        return {
            config: [
                { value: 0, label: '关闭' },
                { value: 1, label: '开通' }
            ],
            form: {
                webIsDisplay: 0,
                appIsDisplay: 0
            }
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData () {
            this.$post('healthPopupConfig/list').then(res => {
                if (res.code === 0) {
                    this.form = res.data
                }
            })
        },
        saveData () {
            if (!this.$checkAuth('cjl:healthPopupConfig:edit')) {
                this.$alert('您没有该权限')
                return
            }
            this.$refs.form.validate((valid, data) => {
                if (valid) {
                    this.$post('healthPopupConfig/edit', this.form).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                type: 'success',
                                message: '保存成功'
                            })
                        }
                    })
                }
            })
        },
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/home'
            })
        }
    }
}
</script>
<style scoped lang="less">
.line {
    clear: both;
    height: 1px;
    width: 100%;
    background: #E8E8E8;
    margin: 30px 0;
}
</style>

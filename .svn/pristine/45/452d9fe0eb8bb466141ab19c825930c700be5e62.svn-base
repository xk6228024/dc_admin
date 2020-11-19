<template>
    <div class="vehicleMaintenanceConfig">
        <breadcrumb>
            <label>车辆类型：</label>
            <el-select class="w120_input" size="mini" filterable clearable v-model="selCarType" placeholder="请选择">
                <el-option
                v-for="item in carType"
                :key="item.vehicle_type_id"
                :label="item.vehicle_type_name"
                :value="item.vehicle_type_id"
                clearable >
                </el-option>
            </el-select>
            <el-button class="search" size="mini" type="primary" @click="getTableData(1)">查 询</el-button>
            <el-button class="fr mt17" size="mini" @click="$router.push('/cityOpenDetail2')">返回</el-button>
            <!-- <el-button class="fr mt17" size="mini" @click="saveData">保存</el-button> -->
        </breadcrumb>
        <div class="table">
            <el-table
                border
                :data="tableData"
                v-loading="loading"
                class="computeHeight tableBorder"
                style="width: 100%;">
                <el-table-column
                prop="num"
                align="left"
                label="序号" />
                <el-table-column
                prop="vehicleTypeName"
                label="车辆类型" />
                <el-table-column
                prop="cityConfigPhotoNum"
                label="拍照张数" />
                <el-table-column
                prop="cityConfigPhotoInterval"
                label="拍照间隔时间" />
                <el-table-column
                prop="chargeTime"
                align="left"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleToChange(scope.row)" type="text" size="small"
                        :disabled="!$checkAuth('cityConfig:vtams:photo:edit')">修改</el-button>
                    </template>
                </el-table-column>
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
            </div>
        </div>
        <modal
            :title="'修改维护作业拍照间隔时间'"
            :width="600"
            :alert="alert"
            @alertConfirm="handleConfirmOk"
            @alertCancel="handleConfirmCancel">
            <div class="detail_box clearfix" style="padding-bottom:0;">
                <div class="clearfix">
                    <el-form :model="form" ref="form">
                        <el-form-item style="padding-bottom: 20px;" label="车辆类型: " label-width="180px" prop="vehicleTypeName">
                            <el-input type="text" style="width: 300px;"  size="mini" v-model="form.vehicleTypeName" placeholder="请输入" :disabled="true"/>
                        </el-form-item>
                        <el-form-item required="required" style="padding-bottom: 20px;" label="拍照张数: " label-width="180px" prop="cityConfigPhotoNum" :rules="$validate({required:true})">
                            <el-input type="number" style="width: 300px;"  size="mini" v-model="form.cityConfigPhotoNum" placeholder="请输入" />
                        </el-form-item>
                        <el-form-item required="required" style="padding-bottom: 20px;" label="拍照间隔时间: " label-width="180px" prop="cityConfigPhotoInterval" :rules="$validate({required:true})">
                            <el-input type="text" style="width: 300px;"  size="mini" v-model="form.cityConfigPhotoInterval" placeholder="请用逗号分隔 如5,10,15,20" />
                        </el-form-item>
                    </el-form>
                 </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Modal from '@/components/Modal'
export default {
    name: 'vehicleMaintenanceConfig',
    components: {
        Breadcrumb,
        Modal
    },
    data () {
        return {
            carType: [],
            selCarType: '', // 选中城市
            tableData: [1],
            loading: false,
            pageNum: 1,
            pageSize: 10,
            total: 0,
            alert: false,
            form: {
                cityConfigPhotoId: '',
                typeName: '',
                photoNum: '',
                photoTime: ''
            }
        }
    },
    created () {
        // this.$get('/comm/vehicle/types/vehicleType')
        this.getCarType()
        this.getTableData()
    },
    methods: {
        saveData () {},
        handleToChange (item) {
            this.alert = true
            this.form = {
                cityConfigPhotoId: item.cityConfigPhotoId,
                cityConfigCode: item.cityConfigCode,
                vehicleTypeId: item.vehicleTypeId,
                vehicleTypeName: item.vehicleTypeName,
                cityConfigPhotoNum: item.cityConfigPhotoNum,
                cityConfigPhotoInterval: item.cityConfigPhotoInterval
            }
            this.$refs['form'].resetFields()
        },
        handleConfirmOk () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$post('/sysCityConfigPhoto/edit', this.form).then(res => {
                        if (res.code === 0) {
                            this.handleConfirmCancel()
                            this.getTableData()
                            this.$message({
                                type: 'success',
                                message: '修改成功!'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: '修改失败!'
                            })
                        }
                    })
                }
            })
        },
        handleConfirmCancel () {
            this.alert = false
            this.form = {
                cityConfigPhotoId: '',
                carType: '',
                photoNum: '',
                photoTime: ''
            }
        },
        getCarType () {
            this.$get('comm/vehicle/types/1').then(res => {
                if (res.code === 0) {
                    this.carType = res.data
                }
            })
        },
        getTableData (clear) {
            if (clear) {
                this.pageNum = 1
            }
            this.loading = true
            this.$get('/sysCityConfigPhoto/list', {
                vehicleTypeId: this.selCarType || '',
                cityConfigCode: this.$route.query.id || '',
                page: this.pageNum,
                size: this.pageSize
            }).then(res => {
                if (res.code === 0) {
                    this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                    this.total = res.total
                }
                this.loading = false
            }).catch(e => {
                this.loading = false
            })
        },
        handleSizeChange (val) {
            this.pageSize = val
            this.getTableData(1)
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getTableData()
        }
    }
}
</script>

<style lang="less" scoped>
.vehicleMaintenanceConfig {
    .table {
        margin: 20px;
        margin-top: 0;
    }
}
</style>

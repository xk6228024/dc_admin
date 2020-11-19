<template>
    <el-dialog width="650px" :title="!dataForm.carModelId ? '新增车型' : '修改车型'" :close-on-click-modal="false" :visible.sync="visible">
        <el-form :model="dataForm"  ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
            <el-form-item label="所属车系" prop="parentId" :rules="$validate({required:true})">
                <el-cascader
                    :options="brandOptions"
                    :props="props" filterable clearable
                    v-model="dataForm.parentId"
                    style="width:100%">
                </el-cascader>
            </el-form-item>
            <el-form-item label="车型名称" prop="modelName" :rules="$validate({required:true,max:200})">
                <el-input v-model="dataForm.modelName" placeholder="车型名称"></el-input>
            </el-form-item>
            <el-form-item label="生产年份" prop="createYear">
                <el-input v-model="dataForm.createYear" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="排量" prop="displacement">
                <el-input v-model="dataForm.displacement" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="车型类别" prop="bodyType">
                <el-select v-model="dataForm.bodyType" placeholder="车型类别" style="width:100%">
                    <el-option v-for="item in bodyTypeOpts" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="排序" prop="sortOrder">
                <el-input-number v-model="dataForm.sortOrder" controls-position="right" :min="0" placeholder="排序"></el-input-number>
            </el-form-item>
            <!-- <el-form-item label="是否注销" prop="status">
        <el-switch v-model="dataForm.status" active-text="是" inactive-text="否" active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
      </el-form-item> -->
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取消</el-button>
            <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data () {
        return {
            props: {
                value: 'nodeId',
                label: 'nodeName',
                children: 'childList'
            },
            flagBol: false, // 防止重复提交
            brandValue: '',
            modelValue: '',
            visible: false,
            brandMaps: {},
            brandOptions: [],
            // selectedSeries: [],
            bodyTypeOpts: [
                { value: 1, label: '微型车' },
                { value: 2, label: '小型车' },
                { value: 3, label: '紧凑型车' },
                { value: 4, label: '中型车' },
                { value: 5, label: '中大型车' },
                { value: 6, label: '豪华车' },
                { value: 8, label: 'MPV' },
                { value: 9, label: '跑车' },
                { value: 10, label: '皮卡' },
                { value: 11, label: '面包' },
                { value: 12, label: '卡车' },
                { value: 13, label: '客车' },
                { value: 14, label: '轻卡' },
                { value: 15, label: '轻客' },
                { value: 16, label: '概念车' },
                { value: 17, label: '其它' },
                { value: 21, label: '小型SUV' },
                { value: 22, label: '紧凑型SUV' },
                { value: 23, label: '中型SUV' },
                { value: 24, label: '中大型SUV' },
                { value: 25, label: '全尺寸SUV' }
            ],
            dataForm: {
                parentId: [],
                carModelId: 0,
                carSeriesId: '',
                modelName: '',
                createYear: '',
                displacement: '',
                bodyType: 17,
                sortOrder: 0,
                selectedSeries: []
            },
            dataRule: {
                carSeriesId: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                modelName: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                selectedSeries: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            }
        }
    },

    methods: {
        async init () {
            this.flagBol = false
            this.visible = true
            // let le = ''
            await this.getBrandList()
            // console.log(this.brandOptions)
            // this.$nextTick(() => {
            //     this.$refs['dataForm'].resetFields()
            //     this.dataForm.selectedSeries = []
            //     if (this.dataForm.carModelId) {
            //         // this.getBrandList()
            //         this.getInfo()
            //     }
            // })
        },
        handleItemChange (val) {
            console.log(val)
            if (val[1]) {
                console.log(1)
            } else {
                this.$post('basVehicle/allBrand', {
                    vehicleBrandLevel: 2
                }).then(data => {
                    if (data.code === 0) {
                        this.brandOptions.forEach(e => {
                            if (e.vehicleBrandId === val[0]) {
                                e.children = data.data
                            }
                        })
                        // data.data.forEach(element => {
                        //     element.children = []
                        // })
                        // this.brandOptions = data.data
                    }
                })
            }
        },
        // 获取信息
        getInfo () {
            this.$post('basVehicle/modelInfo', {
                vehicleModelId: this.dataForm.carModelId
            }).then(res => {
                if (res.code === 0) {
                    this.dataForm.modelName = res.data.vehicleModelName
                    this.dataForm.createYear = res.data.vehicleModelYear
                    this.dataForm.displacement = res.data.vehicleModelDisplacement
                    this.dataForm.bodyType = res.data.vehicleModelBodyType
                    this.dataForm.sortOrder = res.data.vehicleModelOrder
                    // this.dataForm.status = data.entity.status === 1
                    // this.selectedSeries = [data.brandId + '', data.carSeriesId + '']
                    // this.dataForm.parentId.push(res.data.vehicleSeriesId)
                    // this.loadAndSelect(data.brandId + '', data.entity.carSeriesId + '')
                }
                // console.log(this.brandOptions)
                this.brandOptions.forEach(e => {
                    console.log(1)
                    e.childList.forEach(s => {
                        // console.log(s)
                        s.childList.forEach(m => {
                            if (m.nodeId === res.data.vehicleSeriesId) {
                                this.dataForm.parentId = [e.nodeId, s.nodeId, m.nodeId]
                            }
                        })
                    })
                })
                // this.dataForm.parentId = ['EC261A981DF64DCEAD51C392853E76A2', '57BC88811185495888B925268A8E2842', 'C34E9F557BF54143B8750D87B9B1F699']
                // console.log(this.dataForm)
            })
        },
        // 表单提交
        dataFormSubmit () {
            if (this.dataForm.selectedSeries && this.dataForm.selectedSeries.length > 1) {
                this.dataForm.carSeriesId = this.dataForm.selectedSeries[1]
            } else {
                this.dataForm.carSeriesId = ''
            }

            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    if (this.flagBol) return
                    this.flagBol = true
                    let url = ''
                    if (this.dataForm.carModelId) {
                        url = 'basVehicle/editModel'
                    } else {
                        url = 'basVehicle/saveModel'
                    }
                    this.$post(url,
                        {
                            data: {
                                vehicleModelId: this.dataForm.carModelId,
                                vehicleSeriesId: this.dataForm.parentId[2],
                                vehicleModelName: this.dataForm.modelName,
                                vehicleModelYear: this.dataForm.createYear,
                                vehicleModelDisplacement: this.dataForm.displacement,
                                vehicleModelBodyType: this.dataForm.bodyType,
                                vehicleModelOrder: this.dataForm.sortOrder,
                                vehicle_model_status: '',
                                vehicle_model_img: ''
                            }
                            // 'carModelId': this.dataForm.carModelId || undefined,
                            // 'carSeriesId': this.dataForm.parentId[2],
                            // 'modelName': this.dataForm.modelName,
                            // 'createYear': this.dataForm.createYear,
                            // 'displacement': this.dataForm.displacement,
                            // 'bodyType': this.dataForm.bodyType,
                            // 'sortOrder': this.dataForm.sortOrder
                            // 'status': this.dataForm.status ? 1 : 0
                        }
                    ).then(res => {
                        if (res.code === 0) {
                            this.$message({
                                message: '操作成功',
                                type: 'success',
                                duration: 1500,
                                onClose: () => {
                                    this.visible = false
                                    this.$emit('refreshDataList')
                                }
                            })
                        } else {
                            this.flagBol = false
                            this.$message.error(res.msg)
                        }
                    })
                }
            })
        },
        // 获取品牌/base/car-brand/list
        getBrandList () {
            this.$post('basVehicle/cars/3', {}).then(data => {
                if (data.code === 0) {
                    // data.data.forEach(element => {
                    //     element.children = []
                    // })
                    this.brandOptions = data.data
                    // return this.brandOptions.length
                    this.$refs['dataForm'].resetFields()
                    this.dataForm.selectedSeries = []
                    if (this.dataForm.carModelId) {
                        // this.getBrandList()
                        this.getInfo()
                    }
                }
            })
        }
    }
}
</script>
<style lang="less">
.el-input-number.is-controls-right .el-input-number__increase {
    margin-top: 1px;
}
.el-input-number.is-controls-right .el-input-number__decrease {
    bottom: 2px;
}
</style>

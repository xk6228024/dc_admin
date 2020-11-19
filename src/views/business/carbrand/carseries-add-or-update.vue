<template>
    <el-dialog width="650px" :title="!dataForm.carSeriesId ? '新增车系' : '修改车系'" :close-on-click-modal="false" :visible.sync="visible">
        <el-form :model="dataForm"  ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
            <el-form-item label="所属品牌" prop="parentId" :rules="$validate({required:true})">
                <!-- <el-select v-model="dataForm.carBrandId" filterable clearable placeholder="请选择">
                    <el-option-group v-for="group in brands" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.vehicleBrandId" :label="item.vehicleBrandName" :value="item.vehicleBrandId">
                        </el-option>
                    </el-option-group>
                </el-select> -->
                <el-cascader
                    :options="brands"
                    :props="props" filterable clearable
                    v-model="dataForm.parentId"
                    style="width:100%">
                </el-cascader>
            </el-form-item>
            <el-form-item label="车系名称" prop="carSeriesName" :rules="$validate({required:true,max:150})">
                <el-input v-model="dataForm.carSeriesName" placeholder="车系名称"></el-input>
            </el-form-item>
            <el-form-item label="是否热门" prop="isHot">
                <el-switch v-model="dataForm.isHot" active-text="是" inactive-text="否">
                </el-switch>
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
            visible: false,
            dataForm: {
                parentId: [],
                carSeriesId: 0,
                carBrandId: '',
                carSeriesName: '',
                isHot: false,
                sortOrder: ''
            },
            brands: [],
            dataRule: {
                carBrandId: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ],
                carSeriesName: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        init () {
            this.flagBol = false
            this.visible = true
            this.getBrands()
            // this.$refs['dataForm'].resetFields()
            // this.$nextTick(() => {
            //     this.$refs['dataForm'].resetFields()
            //     if (this.dataForm.carSeriesId) {
            //         this.getInfo()
            //     }
            // })
        },

        // 获取信息
        getInfo () {
            this.$post('basVehicle/seriesInfo', {
                vehicleSeriesId: this.dataForm.carSeriesId
            }).then(res => {
                if (res.code === 0) {
                    // this.dataForm.carBrandId = data.entity.carBrandId
                    this.dataForm.carSeriesName = res.data.vehicleSeriesName
                    this.dataForm.isHot = res.data.vehicleSeriesHot === 1
                    this.dataForm.sortOrder = res.data.vehicleSeriesOrder
                    // this.dataForm.status = data.entity.status === 1
                }
                this.brands.forEach(e => {
                    e.childList.forEach(m => {
                        if (m.nodeId === res.data.vehicleBrandId) {
                            this.dataForm.parentId = [e.nodeId, m.nodeId]
                        }
                    })
                })
                console.log(this.dataForm)
            })
        },
        getBrands () {
            // //base/car-brand
            this.$post('basVehicle/cars/2', {}).then(res => {
                if (res.code === 0) {
                    // var groupData = []
                    // var groupMap = {}
                    // for (let i = 0; i < res.data.length; i++) {
                    //     if (groupMap[res.data[i].initial]) {
                    //         groupMap[res.data[i].initial].options.push(res.data[i])
                    //     } else {
                    //         let groupItem = { label: res.data[i].initial, options: [res.data[i]] }
                    //         groupMap[res.data[i].initial] = groupItem
                    //         groupData.push(groupItem)
                    //     }
                    // }
                    // this.brands = groupData
                    this.brands = res.data
                    this.$refs['dataForm'].resetFields()
                    if (this.dataForm.carSeriesId) {
                        this.getInfo()
                    }
                }
            })
        },
        // 表单提交
        dataFormSubmit () {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    if (this.flagBol) return
                    this.flagBol = true
                    if (!this.dataForm.parentId[1]) return
                    let url = ''
                    if (this.dataForm.carSeriesId) {
                        url = 'basVehicle/editSeries'
                    } else {
                        url = 'basVehicle/saveSeries'
                    }
                    this.$post(url,
                        {
                            data: {
                                vehicleSeriesId: this.dataForm.carSeriesId,
                                // vehicleBrandId: this.dataForm.carSeriesId || undefined,
                                vehicleBrandId: this.dataForm.parentId[1],
                                vehicleSeriesName: this.dataForm.carSeriesName,
                                vehicleSeriesHot: this.dataForm.isHot ? 1 : 0,
                                vehicleSeriesImg: '',
                                vehicleSeriesOrder: this.dataForm.sortOrder,
                                vehicleSeriesStatus: ''
                            }
                            // 'carSeriesId': this.dataForm.carSeriesId || undefined,
                            // 'carBrandId': this.dataForm.carBrandId,
                            // 'carSeriesName': this.dataForm.carSeriesName,
                            // 'isHot': this.dataForm.isHot ? 1 : 0,
                            // 'sortOrder': this.dataForm.sortOrder
                            // // 'status': this.dataForm.status ? 1 : 0
                        }
                    ).then(data => {
                        if (data && data.code === 0) {
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
                            this.$message.error(data.msg)
                        }
                    })
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

<!-- 权限管理 -->
<template>
    <div class="performanceStatistics clearfix" id="performanceStatistics">
        <breadcrumb >
            <label for="">员工名称:</label>
            <el-input class="search-text" v-model="searchText" placeholder="请输入员工姓名"></el-input>
            <label for="">日期范围:</label>
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
            <label>统计方式：</label>
            <el-select v-model="countType" placeholder="请选择" style="width:100px;">
                <el-option
                v-for="item in [{label:'个人',value:'person'},{label:'团队',value:'team'}]"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button class="search" type="primary" @click="search">查 询</el-button>
            <el-button class="search" type="primary" @click="exportData">导 出</el-button>
            <!-- <el-button class="fr mt17" type="primary" icon="el-icon-plus" @click="showAlert = true">新 建</el-button> -->
        </breadcrumb>
        <div class="market" style="background:#fff;">
            <el-tree :data="menuList" :highlight-current="highlight" @node-click="nodeClick" ref="left_tree" :props="defaultProps" node-key="servicerId"></el-tree>
        </div>
        <!-- <div class="market" style="background:#fff;">
            <el-menu
                ref="ref_menu"
                active-text-color="#ffffff"
                class="el-menu-vertical-demo">
                <el-submenu :index="indexa+''" v-for="(item, indexa) in menuList" :key="item.id">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.bigArea}}</span>
                    </template>
                    <el-submenu :index="index+'-'+indexa" v-for="(item2, index) in item.city" :key="item2.id">
                        <template slot="title">{{item2.city}}</template>
                        <el-menu-item :index="index+'-'+index2+indexa" v-for="(item3, index2) in item2.user" :key="item3.id" @click="chooseTab(item3.areaUserId, index+'-'+index2+indexa)">{{item3.areaUserName}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div> -->
        <div class="table" style="background:#fff;">
            <el-table
                border
                :data="tableData"
                class="tableBorder"
                @sort-change="sortChange"
                v-loading="showLoading"
                style="width: 100%;min-height:550px;">
                <el-table-column
                prop="num"
                align="left"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="areaUserName"
                align="left"
                label="员工姓名">
                </el-table-column>
                <el-table-column
                prop="userGrade"
                align="left"
                label="人员级别">
                    <template slot-scope="scope">
                        <span v-if="scope.row.userGrade === 1">普通运营</span>
                        <span v-if="scope.row.userGrade === 2">运营主管</span>
                        <span v-if="scope.row.userGrade === 3">区域经理</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="allEntCount"
                align="left"
                sortable="custom"
                label="企业总数">
                </el-table-column>
                <el-table-column
                prop="newEntCount"
                align="left"
                sortable="custom"
                label="新增企业数量">
                </el-table-column>
                <el-table-column
                prop="allServerCount"
                align="left"
                sortable="custom"
                label="企业服务次数">
                </el-table-column>
                <el-table-column
                prop="visitCount"
                align="left"
                sortable="custom"
                label="拜访">
                </el-table-column>
                <el-table-column
                prop="firstTrainCount"
                align="left"
                sortable="custom"
                label="初装培训">
                </el-table-column>
                <el-table-column
                prop="againCount"
                align="left"
                sortable="custom"
                label="复训">
                </el-table-column>
                <el-table-column
                prop="fixUploadCount"
                align="left"
                sortable="custom"
                label="维修数据上传">
                </el-table-column>
                <!-- <el-table-column
                align="left"
                width="120"
                label="操作">
                    <template slot-scope="scope">
                        <el-button @click="eidtDetail(scope.row.areaUserId)" type="text" size="small">编辑</el-button>
                        <el-button @click="deleteUser(scope.row.areaUserId)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
// import Modal from '@/components/Modal'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'performanceStatistics',
    data () {
        return {
            sortBy: '',
            orderBy: '',
            selectId: '',
            countType: 'person',
            defaultProps: {
                children: 'sonServicers',
                label: 'servicerName'
            },
            highlight: true,
            showLoading: false,
            activeIndex: '',
            activeId: '',
            menuList: [],
            dateRegion: [],
            uploadURL: window.uploadURL,
            searchText: '',
            areaUserId: '',
            regionList: {}, // 大区和城市
            selectRegionId: '', // 已选择的城市ID
            workUserList: [],
            userGradeList: [
                {
                    value: 1,
                    label: '普通运营'
                },
                {
                    value: 2,
                    label: '运营主管'
                },
                {
                    value: 3,
                    label: '区域经理'
                }
            ],
            data: [],
            total: 0,
            showAlert: false,
            pageNum: 1,
            pageSize: 10,
            ruleForm: {
                workNo: '', // 工号
                areaUserName: '', // 员工姓名
                parentUserId: '', // 主管上级
                userGrade: '', // 人员级别
                areaUserPhone: '', // 手机号
                entryTime: '', // 入职时间
                city: '', // 城市
                remark: '', // 备注
                userAvatar: '' // 用户照片
            },
            tableData: []
        }
    },
    components: {
        Breadcrumb
    },
    created () {
        this.getTreeData()
        // this.getRegionList()
        // this.getAllRegionList()
        // this.getWorkUserList()
        // this.$post('services/performance/areaUser', {
        //     areaUserName: this.searchText,
        //     startTime: this.dateRegion && this.dateRegion[0],
        //     endTime: this.dateRegion && this.dateRegion[1]
        // }).then(res => {
        //     this.menuList = res.data || []
        //     this.menuList.unshift({
        //         servicerName: '全部',
        //         servicerId: ''
        //     })
        // })
        let year = new Date().getFullYear()
        let mon = new Date().getMonth() + 1
        mon = mon < 10 ? '0' + mon : mon
        let day = new Date().getDate()
        day = day < 10 ? '0' + day : day
        this.dateRegion = [`${year}-${mon}-01`, `${year}-${mon}-${day}`]
        this.getData()
    },
    methods: {
        sortChange ({ prop, order }) {
            if (order === 'ascending') this.sortBy = 'asc'
            if (order === 'descending') this.sortBy = 'desc'
            if (!order) this.sortBy = ''
            this.orderBy = prop
            this.getData()
        },
        // exportData () {
        //     let href = `${window.uploadURL}workUser/export?areaUserName=${this.searchText || ''}&city=${this.selectRegionId || ''}`
        //     window.open(href)
        // },
        getTreeData () {
            this.$post('services/performance/areaUser', {
                areaUserName: this.searchText,
                startTime: this.dateRegion && this.dateRegion[0],
                endTime: this.dateRegion && this.dateRegion[1],
                countType: this.countType
            }).then(res => {
                this.menuList = res.data || []
                this.menuList.unshift({
                    servicerName: '全部',
                    servicerId: ''
                })
                this.menuList.forEach(e => {
                    e.sonServicers && e.sonServicers.forEach(m => {
                        m.sonServicers = ''
                    })
                })
                this.$nextTick(() => {
                    this.$refs.left_tree.setCurrentKey(this.activeId)
                })
            })
        },
        nodeClick (node) {
            this.pageNum = 1
            this.activeId = node.servicerId
            this.activeGrade = node.servicerGrade
            this.getData()
            // console.log(this.$refs.left_tree) // f8684b18ab0fa98c517c24eff50c911b
            // this.$nextTick(() => {
            //     this.$refs.left_tree.setCurrentKey('6e06e84eef4278453ea7e01e0b0dde70')
            // })
        },
        search () {
            this.pageNum = 1
            this.pageSize = 10
            this.getTreeData()
            this.getData()
            // this.activeId = ''
        },
        chooseTab (index, activeIndex) {
            // console.log(this.$refs.ref_menu.activeIndex)
            // console.log(activeIndex)
            if (this.activeIndex === this.$refs.ref_menu.activeIndex) {
                this.activeIndex = ''
                this.$refs.ref_menu.activeIndex = ''
                this.activeId = ''
            } else {
                this.activeIndex = activeIndex
                this.activeId = index
            }
            this.pageNum = 1
            this.pageSize = 10
            this.getData()
        },
        exportData () {
            let href = `${window.uploadURL}services/performance/export?areaUserName=${this.searchText || ''}&userGrade=${this.activeGrade || ''}&countType=${this.countType || ''}&areaUserId=${this.activeId || ''}`
            if (this.dateRegion && this.dateRegion.length) {
                href = href + '&startTime=' + this.dateRegion[0]
                href = href + '&endTime=' + this.dateRegion[1]
            }
            window.open(href)
        },
        getData () {
            let startTime = ''
            let endTime = ''
            if (this.dateRegion && this.dateRegion.length) {
                startTime = this.dateRegion[0]
                endTime = this.dateRegion[1]
            }
            this.showLoading = true
            this.$post('/services/performance/performance?page=' + this.pageNum + '&size=' + this.pageSize, {
                areaUserName: this.searchText,
                startTime: startTime,
                endTime: endTime,
                userGrade: this.activeGrade,
                countType: this.countType,
                sortBy: this.sortBy,
                orderBy: this.orderBy,
                areaUserId: this.activeId
            }).then(res => {
                this.showLoading = false
                this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
                this.total = res.total
            })
        },
        // 获取城市列表
        // getAllRegionList (id) {
        //     this.$get('list/regionProvinceList').then(res => {
        //         if (res.code === 0) {
        //             // this.allCityList = res.data
        //             let arr = []
        //             let obj = {}
        //             res.data.forEach(e => {
        //                 if (e.regionType === 1) {
        //                     arr.push(e)
        //                 }
        //             })
        //             arr.forEach(i => {
        //                 i.children = []
        //                 res.data.forEach(e => {
        //                     if (i.regionId === e.parentId) {
        //                         i.children.push(e)
        //                     }
        //                 })
        //             })
        //             arr.forEach(item => {
        //                 obj[item.regionName] = item.children
        //             })
        //             this.regionList = obj
        //         }
        //     })
        // },
        // // 获取城市列表
        // getRegionList (id) {
        //     this.$post('/workUser/area').then(res => {
        //         if (res.code === 0) {
        //             this.data = res.data
        //         }
        //     })
        // },
        // // 获取人员列表
        // getWorkUserList (id) {
        //     this.$post('/workUser/boss', {
        //         parentUserId: ''
        //     }).then(res => {
        //         if (res.code === 0) {
        //             this.workUserList = res.data
        //             this.getList()
        //         }
        //     })
        // },
        // // 获取列表数据
        // getList (regionId) {
        //     this.$post('/workUser/workUserList?page=' + this.pageNum + '&size=' + this.pageSize, {
        //         areaUserName: this.searchText,
        //         city: this.selectRegionId
        //     })
        //         .then(res => {
        //             if (res.code === 0) {
        //                 this.workUserList.forEach(user => {
        //                     res.data.forEach(item => {
        //                         if (user.areaUserId === item.areaUserId) {
        //                             item.areaUserName = user.areaUserName
        //                         }
        //                     })
        //                 })
        //                 this.tableData = this.$setNum(res.data, this.pageNum, this.pageSize)
        //                 this.total = res.total
        //             }
        //         })
        // },
        // 详情编辑
        // eidtDetail (areaUserId) {
        //     this.areaUserId = areaUserId
        //     this.$post('/workUser/detail', {
        //         areaUserId
        //     })
        //         .then(res => {
        //             if (res.code === 0) {
        //                 this.ruleForm = res.data
        //             }
        //         })
        //     this.showAlert = true
        // },
        // 删除人员
        // deleteUser (areaUserId) {
        //     this.$confirm('确定删除该人员吗?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     }).then(() => {
        //         this.$get(`/workUser/delete?areaUserId=${areaUserId}`)
        //             .then(res => {
        //                 if (res.code === 0) {
        //                     this.$message({
        //                         type: 'success',
        //                         message: '删除成功'
        //                     })
        //                     this.getWorkUserList()
        //                 }
        //             })
        //     }).catch(() => {
        //     })
        // },
        handleSuccess (res, file, fileList) {
            if (res.data) {
                this.$set(this.ruleForm, 'userAvatar', res.data)
            } else {
                this.$alert('服务器错误，上传失败')
            }
        },
        beforeUpload (file) {
            const isJPG = /jpeg|png/.test(file.type)
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/JPEG/PNG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
        // 清除图片
        clearImage () {
            this.$set(this.ruleForm, 'userAvatar', '')
        },
        // nodeClick (node) {
        //     if (node.regionId) {
        //         this.selectRegionId = node.regionId
        //         this.getList()
        //     }
        // },
        handleSizeChange (val) {
            this.pageNum = 1
            this.pageSize = val
            this.getData()
        },
        handleCurrentChange (val) {
            this.pageNum = val
            this.getData()
        },
        alertConfirm () {
            this.$refs['addForm'].validate((valid) => {
                if (valid) {
                    let obj = JSON.parse(JSON.stringify(this.ruleForm))
                    obj.areaUserId = this.areaUserId || ''
                    this.$post('/workUser/addOrUpdate', obj)
                        .then(res => {
                            if (res.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: '操作成功'
                                })
                                this.alertCancel()
                                this.getWorkUserList()
                            }
                        })
                } else {
                    this.$alert('请填写正确的员工信息！')
                    return false
                }
            })
        },
        alertCancel () {
            this.areaUserId = ''
            this.$refs.addForm.resetFields()
            this.showAlert = false
        }
    },
    filters: {
        userGradeFilter (type) {
            if (type === 1) {
                return '普通运营'
            }
            if (type === 2) {
                return '运营主管'
            }
            if (type === 3) {
                return '区域经理'
            }
        }
    }
}
</script>

<style lang='less' scoped>
#performanceStatistics {
    min-height: 100%;
    position: relative;
    .table {
        margin-top: 0;
        border-top: 20px solid #f0f2f5;
        padding: 30px;
        margin-left: 260px;
        margin-right: 0;
    }
    .form {
        .upload_tips {
            position: absolute;
            color: #98A9BC;
            font-size: 14px;
            top: 3px;
            left: 120px;
        }
        .form_left {
            width: 50%;
            float: left;
        }
        .form_right {
            width: 50%;
            float: left;
        }
    }
    .market {
        width: 240px;
        padding: 30px 0;
        position: absolute;
        top: 70px;
        left:0;
        bottom: 0;
        border-top: 20px solid #F0F2F5;
        border-right: 20px solid #F0F2F5;
        overflow-y: auto;
    }
    .image-upload {
        width: 102px;
        height: 102px;
        border: 1px dashed #c0ccda;
        border-radius: 4px;
        line-height: 20px;
        background: #fbfdff;
        transition: all .2s;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        &:hover {
            border: 1px dashed #4D7CFE;
        }
        .el-icon-plus {
            font-size: 30px;
            color: #8c939d;
        }
    }
    .image-upload-tips {
        display: inline-block;
        color: #8C8C8C;
        font-size: 12px;
        margin: 16px;
        line-height: 20px;
    }
    .image-pic {
        padding: 8px;
        width: 92px;
        height: 92px;
        position: relative;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        display: inline-block;
        .pic {
            width: 100%;
            height: 100%;
        }
        .el-icon-error {
            position: absolute;
            top: 4px;
            left: 86px;
            font-size: 18px;
            cursor: pointer;
            display: none;
            background: #ececec;
            border-radius: 50%;
        }
        &:hover {
            .el-icon-error {
                display: block;
            }
        }
    }
    .image-upload, .image-pic {
        vertical-align: middle;
    }
}
.modal {
    .el-row {
        margin-bottom: 24px;
    }
}
</style>
<style lang='less'>
#performanceStatistics {
    .el-date-editor {
        .el-input__icon {
            line-height: 30px;
            height: 30px;
        }
    }
    .el-menu {
        border: none;
    }
    .el-menu-item {
        &.is-active {
            background: #4D7CFE;
        }
    }
    .small_input {
        margin-right: 10px;
        .el-input__inner {
            width: 100px;
        }
    }
    .w280_input {
        width: 280px;
    }
    .el-upload {
        width: 102px;
        height: 76px;
        padding-top: 26px;
    }
    .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
        background: #4D7CFE;
        color: #fff;
        .el-tree-node__expand-icon {
            color: #fff;
            &.is-leaf {
                color: transparent;
            }
        }
    }
    .el-tree-node__content {
        height: 50px;
        line-height: 50px;
        color: #262626;
    }
    .el-tree-node > .el-tree-node__children {
        margin-left: 10px;
    }
    .el-tree > .el-tree-node > .el-tree-node__content {
        padding-left: 18px !important;
    }
    .el-input__icon {
        resize: none;
    }
    .el-form .el-form-item__label {
        color: #262626;
    }
    .el-textarea__inner {
        resize: none;
    }
}
.el-scrollbar__view {
    height: 100%;
}
.el-select-group__title {
    padding-left: 8px !important;
}
</style>

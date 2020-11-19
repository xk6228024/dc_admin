<!-- 权限管理 -->
<template>
    <div class="authorityDetail detailPage">
        <div class="detail_header">
            <el-button type="primary" class="btn" @click="saveAction">保 存</el-button>
            <el-button class="goBack btn" @click="close">关 闭</el-button>
        </div>
        <div>
            <div style="margin:80px 40px;border-top:1px solid #d9d9d9;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;overflow:hidden;">
                <div class="asd clearfix" style="height:40px;line-height:40px;position:relative;border-bottom:1px solid #d9d9d9;background:rgba(250,250,250,1);font-weight:600;">
                    <div class="fl" style="width:139px;border-right:1px solid #d9d9d9;padding-left:10px;">一级功能模块</div>
                    <div class="fl" style="width:389px;border-right:1px solid #d9d9d9;padding-left:10px;">二级功能模块</div>
                    <div class="fl" style="position:absolute;left:550px;top:0;width:2000px;border-right:1px solid #d9d9d9;padding-left:10px;">三级功能点</div>
                </div>
                <div class="clearfix" v-for="(a) in authList" :key="a.id" style="position:relative;">
                    <div class="fl clearfix border2" style="width:150px;padding-left:10px;height:40px;line-height:40px;" :style="{'height': a.length*40+'px','line-height': a.length*40+'px'}">
                        <span @click.capture="checkChild2(a,1)">
                            <el-checkbox
                                :ref="a.sysMenuId"
                                @change="checkParent(null, a.children)"
                                :true-label="1"
                                :false-label="0"
                                :indeterminate="a.isSelect===2"
                                v-model="a.isSelect">
                                {{a.name}}
                            </el-checkbox>
                        </span>
                    </div>
                    <div class="fl clearfix line0" style="">
                        <div v-for="(b) in a.children" class="clearfix line1" style="position:;left:150px;right:0;" :key="b.id">
                            <div class="fl clearfix border2 line2" style="width:200px;padding-left:10px;display:flex;" :style="{'height': b.children.length*40+'px'}">
                                <span style="align-self:center;"  @click="checkChild2(b,2)">
                                    <el-checkbox
                                        :ref="b.sysMenuId"
                                        @change="checkParent(a, b.children)"
                                        :true-label="1"
                                        :false-label="0"
                                        :indeterminate="b.isSelect===2"
                                        v-model="b.isSelect">
                                        {{b.name}}
                                    </el-checkbox>
                                </span>
                            </div>
                            <div class="fl clearfix line3">
                                <div v-for="(c) in b.children" class="clearfix" :key="c.id" style="position:relative;">
                                    <div class="fl clearfix border2" style="padding-left:10px;width:200px;height:40px;line-height:40px;top:0;right:0;left:0px;">
                                        <span @click="checkChild2(c,3)">
                                            <el-checkbox
                                                v-show="c.name!=='--'"
                                                :ref="c.sysMenuId"
                                                @change="checkParent(b, c.children)"
                                                :true-label="1"
                                                :false-label="0"
                                                :indeterminate="c.isSelect===2"
                                                v-model="c.isSelect">
                                                {{c.name}}
                                            </el-checkbox>
                                        </span>
                                    </div>
                                    <div class="fl clearfix asd" v-if="c.children.length" style="padding-left:10px;width:;height:40px;line-height:40px;position:absolute;left:200px;width:2000px;border-bottom:1px solid #d9d9d9;box-sizing:border-box;">
                                        <span v-for="(d) in c.children" :key="d.id">
                                            <el-checkbox
                                                style="margin-right:5px;"
                                                v-model="d.isSelect"
                                                @change="checkParent(c);"
                                                :ref="d.sysMenuId"
                                                :true-label="1"
                                                :indeterminate="d.isSelect===2"
                                                :false-label="0">
                                                {{d.name}}
                                            </el-checkbox>
                                        </span>
                                    </div>
                                    <div class="border2" v-if="!c.children.length" style="height:40px;position:absolute;top:0;right:0;left:200px;width:2000px;"></div>
                                </div>
                                <!-- <div class="border2" v-if="!b.children.length" style="height:40px;position:absolute;top:0;right:0;left:550px;">1asdasd1</div> -->
                            </div>
                        </div>
                        <div class="border2 clearfix" v-if="!a.children.length" style="height:40px;position:absolute;top:0;right:0;left:150px;border-right:none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { setTimeout } from 'timers';
// import { constants } from 'crypto';
// import Breadcrumb from '@/components/Breadcrumb'
// import { setNum } from '@/utils/utils.js'
export default {
    name: 'authorityDetail',
    data () {
        return {
            forbidden: false,
            authList: [],
            tableData: []
        }
    },
    components: {
    },
    created () {
        this.$get('list/menuList?roleId=' + this.$route.query.id)
            .then(res => {
                this.tableData = res.data
                let arr = []
                res.data.forEach(e => {
                    // e.isSelect = e.isSelect ? 0 : 1
                    if (e.type === 0) {
                        e.children = []
                        arr.push(e)
                    }
                })
                // 产品管理
                arr.forEach(e => {
                    res.data.forEach(m => {
                        if (m.parentId === e.sysMenuId) {
                            if (!m.children) {
                                m.children = []
                            }
                            e.children.push(m)
                        }
                    })
                })
                // 超级丽
                arr.forEach(d => {
                    d.children.forEach(e => {
                        res.data.forEach(m => {
                            if (m.parentId === e.sysMenuId) {
                                // console.log(m.name)
                                // console.log(m)
                                if (!m.children) {
                                    m.children = []
                                }
                                e.children.push(m)
                            }
                        })
                    })
                })
                // 企业业务
                arr.forEach(f => {
                    f.children.forEach(d => {
                        d.children.forEach(e => {
                            res.data.forEach(m => {
                                if (m.parentId === e.sysMenuId) {
                                    // console.log(m.name)
                                    if (!m.children) {
                                        m.children = []
                                    }
                                    e.children.push(m)
                                }
                            })
                        })
                    })
                })
                // console.log(arr)
                arr.forEach(q => {
                    q.children.forEach(w => {
                        w.children.forEach(e => {
                            e.length = 1
                        })
                    })
                })
                arr.forEach(q => {
                    q.children.forEach(w => {
                        w.length = 0
                        w.children.forEach(e => {
                            w.length += e.length
                        })
                    })
                })
                arr.forEach(q => {
                    q.length = 0
                    q.children.forEach(w => {
                        q.length += w.length
                    })
                    if (!q.length) q.length = 1
                })
                console.log(arr)
                this.authList = arr
            })
    },
    methods: {
        saveAction () {
            // console.log(1)
            // this.tableData.forEach(e => {
            //     e.isSelect = e.isSelect ? 0 : 1
            // })
            this.$post('permission/bindpermission', {
                sysRoleId: this.$route.query.id,
                sysRoleMenus: this.tableData
            }).then(res => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '保存成功'
                    })
                    this.close()
                }
            })
        },
        checkChild2 (item, type) {
            // console.log(item)
            if (this.forbidden) {
                return
            }
            this.forbidden = true
            setTimeout(() => {
                this.forbidden = false
            }, 300)
            item.children.forEach(q => {
                this.$set(q, 'isSelect', item.isSelect === 1 ? 0 : 1)
                q.children.forEach(w => {
                    this.$set(w, 'isSelect', item.isSelect === 1 ? 0 : 1)
                    w.children.forEach(e => {
                        this.$set(e, 'isSelect', item.isSelect === 1 ? 0 : 1)
                    })
                })
            })
        },
        close () {
            this.$store.dispatch('closePage', {
                nextPath: '/authority'
            })
        },
        checkChild (item) {
            // console.log(item)
            // let allSelect = true
        },
        checkParent (item, next) {
            // console.log(item)
            if (!item) {
                return
            }
            let allSelect = true
            let hasTue = false
            let hasFalse = false
            let isHalf = false
            item.children.forEach(e => {
                if (e.isSelect === 0) {
                    allSelect = false
                }
                if (e.isSelect === 2) {
                    isHalf = true
                }
            })
            item.children.forEach(e => {
                if (e.isSelect === 1) {
                    hasTue = true
                }
            })
            item.children.forEach(e => {
                if (e.isSelect === 0) {
                    hasFalse = true
                }
            })
            if (hasTue && hasFalse) {
                isHalf = true
            }
            if (isHalf) {
                item.isSelect = 2
                this.$set(item, 'isSelect', 2)
                this.$refs[item.sysMenuId][0].handleChange({
                    target: this.$refs[item.sysMenuId][0].$el.children[0].children[1]
                })
            } else if (allSelect) {
                item.isSelect = 1
                this.$set(item, 'isSelect', 1)
                this.$refs[item.sysMenuId][0].handleChange({
                    target: this.$refs[item.sysMenuId][0].$el.children[0].children[1]
                })
            } else {
                item.isSelect = 0
                this.$set(item, 'isSelect', 0)
                this.$refs[item.sysMenuId][0].handleChange({
                    target: this.$refs[item.sysMenuId][0].$el.children[0].children[1]
                })
            }
            // console.log(this.tableData)
            // if (allSelect) {
            //     item.isSelect = 1
            //     this.$set(item, 'isSelect', 1)
            //     this.$refs[item.sysMenuId][0].handleChange({
            //         target: this.$refs[item.sysMenuId][0].$el.children[0].children[1]
            //     })
            // } else {
            //     item.isSelect = 0
            //     this.$set(item, 'isSelect', 0)
            //     this.$refs[item.sysMenuId][0].handleChange({
            //         target: this.$refs[item.sysMenuId][0].$el.children[0].children[1]
            //     })
            // }
        }
    }
}
</script>

<style lang='less' scoped>
.authorityDetail {
    .border2 {
        border-bottom: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        box-sizing: border-box;
    }
}
</style>
<style lang='less'>
</style>

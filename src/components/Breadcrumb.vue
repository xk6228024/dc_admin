<!-- 面包屑导航 -->
<template>
    <div class="breadcrumb">
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in breadList" :key="item">{{item}}</el-breadcrumb-item>
        </el-breadcrumb> -->
        <div class="btn">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'breadcrumb',
    data () {
        return {
        }
    },
    props: ['breadList'],
    components: {

    }
}
</script>

<style lang='less' scoped>
.breadcrumb {
    background: #fff;
    min-height: 70px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    // border-bottom: 1px solid #E8ECEF;
    justify-content: space-between;
    .btn {
        // display: flex;
        min-height: 70px;
        // line-height: 70px;
        width: 100%;
        align-items: center;
        // padding-bottom: 17px;
    }
    label {
        margin: 0 10px;
        margin-left: 20px;
        color: #252631;
        font-size: 14px;
        margin-top: 17px;
        line-height: 36px;
        display: inline-block;
    }
    .btn_ground {
        // display: inline-block;
        float: right;
    }
}
</style>
<style lang="less">
.breadcrumb {
    .el-button {
        // height: 32px;
        // padding: 8px 18px
    }
    .el-breadcrumb__item {
        .el-breadcrumb__inner {
            color: #98A9BC !important;
            font-size: 14px
        }
    }
    .el-breadcrumb__inner.is-link {
        color: #98A9BC;
        font-size: 14px;
        font-weight: normal;
    }
    .el-button + .el-button {
        margin-left: 20px;
    }
    .el-button {
        margin-left: 20px;
    }
    .search-text {
        width: 220px;
        // margin-right: 20px;
    }
    .el-input {
        margin-top: 17px;
    }
    .el-date-editor {
        position: relative;
        top: -1px;
        width: 240px!important;
    }
    .search {
        margin-left: 20px;
        margin-right: 10px;
        // margin-top: -2px;
    }
    .el-select {
        .el-input__inner {
            padding-left: 11px;
        }
    }
}
</style>

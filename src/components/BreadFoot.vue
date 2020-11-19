<template>
    <div class="breadFoot" :class="{'active': this.$store.state.sidebarFold}">
        <i class="fl icon-menu-s" :class="icons"></i>
        <!-- <a-icon type="home" class="fl icon-menu-s" @click="$router.push('/home')"/> -->
        <div class="left_bread_foot clearfix">
            <el-breadcrumb separator="/" ref="breadTip">
                <el-breadcrumb-item  v-for="(item, index) in breadArr" :key="index" :to="itemPath(item.path)">{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <slot name="center"></slot>
        <div ref="breadBar" class="right_bread_foot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            breadHide: true
        }
    },
    // watch: {
    // },
    mounted () {
        this.hideTips()
    },
    computed: {
    },
    props: ['icons', 'breadArr'],
    methods: {
        hideTips () {
            const bdWidth = document.body.scrollWidth - 40
            const breadTipWidth = this.$refs.breadTip.clientWidth
            const breadBarWidth = this.$refs.breadBar.clientWidth
            if (breadTipWidth + breadBarWidth > bdWidth - 40) {
                this.breadHide = false
            }
        },
        itemPath (path) {
            if (path) {
                return { 'path': path }
            } else {
                return ''
            }
        }
    }
}
</script>

<style lang='less' scoped>
.breadFoot {
    height: 66px;
    line-height: 66px;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    background-color: #EDF0F5;
    transition: all .6s;
    overflow: hidden;
    // @media screen and(max-width: 1400px) {
    //     left: 260px;
    // }
    &.active {
        left: 84px;
    }
    .left_bread_foot {
        float: left;
        font-size: 14px;
        color: #8A9CC2;
        padding: 24px 0;
    }
    .right_bread_foot {
        float: right;
    }
    .icon-menu-s {
        display: inline-block;
        height: 16px;
        width: 16px;
        margin-top: 22px;
        margin-bottom: 24px;
        margin-right: 10px;
        color: #999;
        font-size: 16px;
        cursor: pointer;
        &.icon-home-normal {
            background-size: 100% 100%;
            background-image: url('../assets/images/icon-home-normal.png');
        }
        &.icon-business-normal {
            background-size: 100% 100%;
            background-image: url('../assets/images/icon-business-normal.png');
        }
        &.icon-analy-normal {
            background-size: 100% 100%;
            background-image: url('../assets/images/icon-analy-normal.png');
        }
        &.icon-archives-normal {
            background-size: 100% 100%;
            background-image: url('../assets/images/icon-archives-normal.png');
        }
        &.icon-setting-normal {
            background-size: 100% 100%;
            background-image: url('../assets/images/icon-setting-normal.png');
        }
    }
}
</style>
<style lang="less">
.breadFoot {
    .el-select {
        .el-input__inner {
            height: 34px;
            width: 140px;
        }
    }
    .el-input__inner {
        height: 34px;
        width: 140px;
    }
    .w200 {
        .el-input__inner {
            width: 200px;
        }
    }
    img {
        margin-right: 8px;
    }
    .add_btn {
        padding: 0 10px;
        width: auto;
    }
    .add-icon, .add-name {
        vertical-align: middle;
    }
    .el-button {
        line-height: 1;
        min-width: 98px;
        .el-icon-tickets {
            margin-right: 8px;
        }
        .el-icon-tickets, span > span {
            vertical-align: middle;
        }
        & > span {
            span, img {
                vertical-align: middle;
            }
        }
        &.confirm {
            padding: 0;
            width: 98px;
        }
    }
    .import-btn {
        padding: 0;
        width: 80px;
        min-width: 80px;
        margin-left: 10px;
    }
    .el-button, .el-select, label, .el-input, & > button {
        vertical-align: middle;
    }
    .el-button [class*=el-icon-] + span {
        margin-left: 0 !important;
    }
}
</style>

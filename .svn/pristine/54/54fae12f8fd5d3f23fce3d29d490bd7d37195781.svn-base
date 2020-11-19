<!-- 详情信息块展示 -->
<template>
    <div class="info-item" :class="{ border }">
        <div class="info-title">
            {{ title }}
            <span class="sub-title" v-if="subTitle">{{ subTitle }}</span>
            <div class="btn fr">
                <slot name="btn"></slot>
            </div>
        </div>
        <div class="info-content">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: () => {
                return ''
            },
            required: true
        },
        border: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        subTitle: {
            type: String,
            default: () => {
                return ''
            }
        }
    },
    data () {
        return {
        }
    },
    components: {
    }
}
</script>

<style lang='less' scoped>
.info-item {
    background: #ffffff;
    &.border {
        border-bottom: 20px solid #ffffff;
    }
    .info-title {
        padding: 0 30px;
        height: 54px;
        line-height: 54px;
        text-align: left;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #E9E9E9;
        .sub-title {
            color: #999;
            margin-left: 6px;
            font-size: 12px;
            font-weight: normal;
        }
    }
    .info-content {
        padding: 24px 30px;
        font-size: 14px;
        text-align: left;
    }
    .el-row {
        margin-bottom: 20px;
    }
}
</style>

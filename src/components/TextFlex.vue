<template>
    <el-col :span="span">
        <div class="text-flex clearfix">
            <div class="name">{{ name }}</div>
            <div name="value">
                <div class="value" name="value">{{ value }}</div>
            </div>
        </div>
    </el-col>
</template>

<script>
export default {
    name: 'textFlex',
    props: {
        name: {
            type: String,
            default: () => {
                return ''
            },
            required: true
        },
        value: {
            type: String,
            default: () => {
                return ''
            }
        },
        span: {
            type: Number,
            default: () => {
                return 24
            }
        }
    }
}
</script>

<style lang="less" scoped>
.text-flex {
    .name {
        height: 100%;
        float: left;
        font-size: 14px;
        color:rgba(0,0,0,0.85);
    }
    .value {
        max-width: 60%;
        float: left;
        text-align: left;
        font-size: 14px;
        color:rgba(0,0,0,0.65);
    }
}
</style>

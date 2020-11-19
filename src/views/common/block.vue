<!-- 空白页面组件 -->
<template>
    <div class="block">
         <div class="box">
             <img src="../../assets/img/Clipped.svg" alt="">
             <p>正在建设中,敬请期待！</p>
         </div>
    </div>
</template>

<script>
export default {
    name: 'block',
    data () {
        return {
        }
    },
    components: {
    },
    created () {
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang='less' scoped>
.block {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -100px;
        p {
            margin-top: 20px;
            text-align: center;
        }
    }
    img {
        width: 200px;
        height: 200px;
    }
}
</style>

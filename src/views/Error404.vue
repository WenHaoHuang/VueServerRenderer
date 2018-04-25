<template>
    <div class="wrapper wrapper-404">
        <div class="error-title">404</div>
        <div class="error-desc">抱歉！您所访问的页面不存在，请重新加载！</div>
        <div class="error-btn pt30">
            <a href="/" class="btn btn-primary">返回首页</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Error404",
        title() {
            const route = this.$route;
            return route.meta.title
        },
    }
</script>

<style lang="scss">
    .wrapper-404{
        text-align:center;
        padding:250px 0;
        color:#78BAF6;
        .error-title{
            font-size:100px;
        }
        .error-desc{
            font-size:24px;
        }
    }
</style>

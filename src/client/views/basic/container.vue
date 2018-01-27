<template>
    <article class="page page-article page-wrap">
        <h2>Container 布局容器</h2>
        <div class="section-content">用于布局的容器框架。全站采用flex布局。#app属性为flex-direction:column，内部可包含header,main,footer</div>
        <h3>Header 顶部容器</h3>
        <div class="section-content">
            <p>顶部容器，组件headerBar，导航部分，高度为0.8rem</p>
            <p>由左侧back，中间title，右侧button-menu组成。右侧点击可弹出menu菜单。</p>
        </div>
        <h3>Main 主体内容</h3>
        <div class="section-content">
            <p>主体内容为router-view。</p>
            <p>默认class为page，样式为width:100%,flex:1,overflow-y:auto</p>
            <p>page-wrap，为page增加左右留白各0.3rem</p>
            <p>page-article，文章类page，底部留白0.8rem</p>
        </div>
        <h3>Footer 底部容器</h3>
        <div class="section-content">
            <p>底部容器，默认高度1rem。</p>
        </div>
        <h3>Menu 侧滑菜单</h3>
        <div class="section-content">
            <p>侧滑菜单，组件sideMenu。点击顶部导航按钮由页面左侧弹出。</p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "container"
    }
</script>

<style lang="scss">

</style>

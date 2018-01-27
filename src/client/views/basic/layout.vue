/**
* @author: wenhao.huang
* @date:   2017/12/24
*/
<template>
    <article class="page page-article page-wrap">
        <h2>Layout 布局</h2>
        <div class="section-content">全站采用flex布局，使用前确认目标浏览器是否兼容。</div>
        <h3>flexItem</h3>
        <div class="section-content">
            <p>默认</p>
            <flex-item>
                <div class="flex-hd">flex-hd</div>
                <div class="flex-bd">flex-bd</div>
                <div class="flex-ft">flex-ft</div>
            </flex-item>
            <p>direction:默认row,可选row,column</p>
            <flex-item direction="column">
                <div class="flex-hd">flex-hd</div>
                <div class="flex-bd">flex-bd</div>
                <div class="flex-ft">flex-ft</div>
            </flex-item>
            <p>justify:默认start,可选start,end,center,between,around</p>
            <flex-item justify="around">
                <div class="flex-hd">flex-hd</div>
                <div class="flex-ft">flex-ft</div>
                <div class="flex-hd">flex-hd</div>
            </flex-item>
            <p>align:默认start,可选start,end,center</p>
            <flex-item align="center">
                <div class="flex-hd">flex-hd</div>
                <div class="flex-bd">flex-bd</div>
                <div class="flex-ft">flex-ft</div>
            </flex-item>
        </div>
        <h3>margin 外留白</h3>
        <div class="section-content">
            <p>四个方向，分别为mt,mr,mb,ml.默认为0，10-100共10个档位，基础单位0.01rem。例如：mt20</p>
        </div>
        <h3>padding 内留白</h3>
        <div class="section-content">
            <p>四个方向，分别为pt,pr,pb,pl.默认为0，10-100共10个档位，基础单位0.01rem。例如：pt20</p>
        </div>
    </article>
</template>

<script>
    import flexItem from 'components/flexItem';

    export default {
        name: 'layout',
        components:{
            flexItem
        },
        data() {
            return {
                data: ''
            }
        }
    }
</script>

<style lang="scss">

</style>

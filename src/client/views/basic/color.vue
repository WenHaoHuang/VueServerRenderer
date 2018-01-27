/**
* @author: wenhao.huang
* @date:   2017/12/24
*/
<template>
    <article class="page page-article page-wrap">
        <h2>Color 色彩</h2>
        <div class="section-content">为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</div>
        <h3>主色</h3>
        <div class="section-content">
            <p>主色是鲜艳、友好的蓝色。</p>
            <div class="ibox-color bg-primary">Primary<br>#48FFF2</div>
        </div>
        <h3>辅助色</h3>
        <div class="section-content">
            <p>除了主色外的场景色，需要在不同的场景中使用。</p>
            <div class="flex flex-justify-between">
                <div class="ibox-color bg-success">Success<br>#67C23A</div>
                <div class="ibox-color bg-warning">Warning<br>#E6A23C</div>
                <div class="ibox-color bg-danger">Danger<br>#F56C6C</div>
                <div class="ibox-color bg-info">Info<br>#909399</div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'color',
        data() {
            return {}
        }
    }
</script>

<style lang="scss">

</style>

/**
* @author: wenhao.huang
* @date:   2017/12/23
*/
<template>
    <article class="page page-article page-wrap">
        <h2>Button 按钮</h2>
        <div class="section-content">
            <p>常用的按钮操作</p>
        </div>
        <h3>基础用法</h3>
        <div class="section-content">
            <p>基础的按钮用法。</p>
            <div class="cells-button">
                <i-button>默认按钮</i-button>
                <i-button plain>默认按钮</i-button>
                <i-button round>默认按钮</i-button>
                <i-button type="primary">主要按钮</i-button>
                <i-button type="primary" plain>主要按钮</i-button>
                <i-button type="primary" round>主要按钮</i-button>
                <i-button type="success">成功按钮</i-button>
                <i-button type="success" plain>成功按钮</i-button>
                <i-button type="success" round>成功按钮</i-button>
                <i-button type="info">信息按钮</i-button>
                <i-button type="info" plain>信息按钮</i-button>
                <i-button type="info" round>信息按钮</i-button>
                <i-button type="warning">警告按钮</i-button>
                <i-button type="warning" plain>警告按钮</i-button>
                <i-button type="warning" round>警告按钮</i-button>
                <i-button type="danger">危险按钮</i-button>
                <i-button type="danger" plain>危险按钮</i-button>
                <i-button type="danger" round>危险按钮</i-button>
            </div>
        </div>
        <h3>禁用状态</h3>
        <div class="section-content">
            <p>按钮不可用状态。</p>
            <div class="cells-button">
                <i-button disabled>默认按钮</i-button>
                <i-button type="primary" disabled>主要按钮</i-button>
                <i-button type="success" disabled>成功按钮</i-button>
                <i-button type="info" disabled>信息按钮</i-button>
                <i-button type="warning" disabled>警告按钮</i-button>
                <i-button type="danger" disabled>危险按钮</i-button>
                <i-button plain disabled>默认按钮</i-button>
                <i-button type="primary" plain disabled>主要按钮</i-button>
                <i-button type="success" plain disabled>成功按钮</i-button>
                <i-button type="info" plain disabled>信息按钮</i-button>
                <i-button type="warning" plain disabled>警告按钮</i-button>
                <i-button type="danger" plain disabled>危险按钮</i-button>
            </div>
        </div>
        <h3>按钮组</h3>
        <div class="section-content">
            <p>以按钮组的方式出现，常用于多项类似操作。</p>
            <div class="cells-button">
                <div class="button-group">
                    <i-button type="primary">主要按钮</i-button>
                    <i-button type="primary">主要按钮</i-button>
                    <i-button type="primary">主要按钮</i-button>
                </div>
            </div>
        </div>
        <h3>不同尺寸</h3>
        <div class="section-content">
            <p>Button 提供除了默认值以外的四种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
            <p>分别是lg,md,sm,xs。</p>
            <div class="cells-button">
                <i-button size="lg">大型按钮</i-button>
                <i-button>默认按钮</i-button>
                <i-button size="md">中等按钮</i-button>
                <i-button size="sm">小型按钮</i-button>
                <i-button size="xs">超小按钮</i-button>
            </div>
        </div>
    </article>
</template>

<script>
    import iButton from 'components/iButton';
    export default {
        name: 'buttonItem',
        components:{
            iButton
        },
        data(){
            return {}
        }
    }
</script>

<style lang="scss">

</style>

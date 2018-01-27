<!--
 * @author wh
 * @Date   2017/12/23
-->
<template>
    <header class="header flex flex-align-center text-center">
        <router-link :to="{name:'layout'}" class="header_back"></router-link>
        <div class="header_title flex-bd text-md">{{title}}</div>
        <aside class="header_menu" @click="showMenuFn"></aside>
    </header>
</template>

<script>

    export default {
        name: 'headerBar',
        data() {
            return {
                data: ''
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods:{
            showMenuFn(){
                this.$emit('onClick',true);
            }
        }
    }
</script>

<style lang="scss">
 @import "index";
</style>

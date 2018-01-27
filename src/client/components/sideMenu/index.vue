/**
* @author: wenhao.huang
* @date:   2017/12/23
*/
<template>
    <article id="menu">
        <transition name="fade">
            <section class="cover" v-show="isShow" @click="hideMenuFn"></section>
        </transition>
        <transition name="slide-left">
            <section class="menu_body" v-show="isShow">
                <div class="menu-list" v-for="route in $router.options.routes" :key="route.id" v-if="!route.meta.hidden">
                    <div class="item_hd">{{route.name}}</div>
                    <div class="item_bd">
                        <router-link :to="{name:item.name}" class="item" :class="{'current':$route.name == item.name}" v-for="item in route.children" :key="item.id">{{item.name}} {{item.meta.title}}</router-link>
                    </div>
                </div>
            </section>
        </transition>
    </article>
</template>

<script>
    export default {
        name: 'vue',
        data() {
            return {
                data: ''
            }
        },
        props:{
            isShow:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            hideMenuFn(){
                this.$emit('onClick',false);
            }
        }
    }
</script>

<style lang="scss">
@import "index";
</style>

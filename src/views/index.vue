<template>
    <div class="wrapper wrapper-index">
        <div class="container">
            <div class="list-item bg-white mb20" v-for="item in homeInfoData" :key="item.id">
                <router-link :to="{name:'detail',params:{id:item.id}}" class="article_title">【{{item.reply_count}}/{{item.visit_count}}】{{item.title}}</router-link>
                <!--<div class="article_content" v-html="item.content"></div>-->
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "index",
        asyncData({store}) {
            return store.dispatch('FETCH', {
                api: 'topics'
            })
        },
        data() {
            return {
            }
        },
        title() {
            const route = this.$route;
            return route.meta.title
        },
        computed: {
            homeInfoData() {
                const CATCH = this.$store.state.STATE
                return CATCH['topics'].data
            }
        }
    }
</script>

<style lang="scss">

</style>

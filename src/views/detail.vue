<template>
    <div class="wrapper wrapper-index">
        <div class="container">
            <div class="article bg-white">
                <div class="article_title">{{detailData.title}}</div>
                <div class="article_content" v-html="detailData.content"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "index",
        asyncData({store,route}) {
            return store.dispatch('DETAIL', {
                api: 'topic/' + route.params.id
            })
        },
        data() {
            return {
            }
        },
        title() {
            const route = this.$route;
            return this.detailData.title + '|' + route.meta.title
        },
        computed: {
            detailData() {
                const CATCH = this.$store.state.STATE
                return CATCH['detail'].data
            }
        }
    }
</script>

<style lang="scss">

</style>

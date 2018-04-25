<template>
    <div id="app">
        <Header></Header>
        <div id="main">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from 'components/HeaderBar'
    import Footer from 'components/FooterBar'
    export default {
        name: "app",
        components:{
            Header,
            Footer
        },
    }
</script>

<style lang="scss">
    @import "~assets/css/basic-pc.scss";
    @import "~assets/css/style.scss";
</style>

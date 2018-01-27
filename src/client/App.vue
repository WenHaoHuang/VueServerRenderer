<template>
    <div id="app">
        <header-bar :title="title" @onClick="showMenuFn"></header-bar>
        <side-menu :isShow="showMenu" @onClick="showMenuFn"></side-menu>
        <router-view/>
    </div>
</template>

<script>
    import headerBar from 'components/headerBar';
    import sideMenu from 'components/sideMenu';

    export default {
        name: 'app',
        components: {
            headerBar,
            sideMenu
        },
        data() {
            return {
                title: '',
                showMenu: false
            }
        },
        watch: {
            '$route'() {
                this.title = this.$route.meta.title;
                this.showMenu = false;
            }
        },
        created() {
            this.title = this.$route.meta.title;
            this.set();
            window.onresize = () => {
                this.set();
            }
        },
        methods: {
            set() {
                const width = document.documentElement.clientWidth;
                const discount = 750 / 100;
                const fontSize = width / discount;
                document.documentElement.style.fontSize = fontSize + 'px';
            },
            showMenuFn(val){
                this.showMenu = val;
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/css/style";
</style>

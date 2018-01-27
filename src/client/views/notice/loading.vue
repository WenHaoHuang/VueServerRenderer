
<template>
    <loading-item :status="loadingStatus"></loading-item>
</template>

<script>
    import loadingItem from 'components/loading';
    export default {
        name: "loading",
        components:{
            loadingItem
        },
        data(){
            return {
                loadingStatus:true
            }
        },
        mounted(){
            this.hideFn();
        },
        methods:{
            hideFn(){
                setTimeout(()=>{
                    this.loadingStatus = false;
                },3000);
            }
        }
    }
</script>

<style lang="scss">

</style>

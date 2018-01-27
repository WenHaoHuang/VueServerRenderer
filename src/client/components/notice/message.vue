<template>
    <transition name="fade">
        <div class="notify-wrapper" v-if="show">
            <div class="notify-mask" v-show="showBg"></div>
            <div class="notify-msg" :class="[type != ''?'skin-' + type : '']">
                <div class="icon" v-if="type != '' && type != 'default'"></div>
                <div class="tbody">{{text}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "notice",
        data(){
            return {}
        },
        props:{
            show:{
                type:Boolean,
                default:false
            },
            text:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:''
            },
            showBg:{
                type:Boolean,
                default:false
            },
            delay:{
                type:Number,
                default:1500
            },
            transition:{
                type:Boolean,
                default:true
            }
        }
    }
</script>

<style lang="scss">

</style>

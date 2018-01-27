/**
* @author : wenhao.huang
* @date   : 2018/1/11
*/

<template>
    <article class="page page-article page-wrap">
        <h2>Message 通知</h2>
        <div class="section-content">
            <p>Toast类信息。调用方法如下：</p>
        </div>
        <h3>默认调用</h3>
        <div class="section-content">
            <i-button @click.native="msgFn">默认黑色</i-button>
            <p>
                <code>
                    this.$alert("这里是消息内容");
                </code>
            </p>
        </div>
        <h3>白色背景无图标</h3>
        <div class="section-content">
            <i-button @click.native="msgFn1">默认白色</i-button>
            <p>
                <code>
                    this.$alert({
                        text:"这里是消息内容",
                        type:"default"
                    });
                </code>
            </p>
        </div>
        <h3 class="text-primary">success</h3>
        <div class="section-content">
            <i-button type="success" v-on:click.native="msgFn2">成功消息</i-button>
            <p>
                <code>
                    this.$alert({
                        text:"这里是消息内容",
                        type:"success",
                        delay:2000, // 关闭延时：Number,默认1500
                        showBg:true, // 是否显示背景：Boolean,默认false
                    });
                </code>
            </p>
        </div>
        <h3 class="text-primary">error</h3>
        <div class="section-content">
            <i-button type="danger" v-on:click.native="msgFn3">错误消息</i-button>
            <p>
                <code>
                    this.$alert({
                        text:"这里是消息内容",
                        type:"error"
                    });
                </code>
            </p>
        </div>
        <h3 class="text-primary">warning</h3>
        <div class="section-content">
            <i-button type="warning" v-on:click.native="msgFn4">警告消息</i-button>
            <p>
                <code>
                    this.$alert({
                        text:"这里是消息内容",
                        type:"warning"
                    });
                </code>
            </p>
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
        },
        methods:{
            msgFn(){
                this.$msg('温馨提示温馨提示温馨提示');
            },
            msgFn1(){
                this.$msg({
                    type:'default',
                    text:'温馨提示温馨提示温馨提示'
                });
            },
            msgFn2(){
                this.$msg({
                    type:'success',
                    text:'温馨提示温馨提示温馨提示',
                    showBg:true,
                    delay:2000
                });
            },
            msgFn3(){
                this.$msg({
                    type:'error',
                    text:'温馨提示温馨提示温馨提示',
                    showBg:true
                });
            },
            msgFn4(){
                this.$msg({
                    type:'warning',
                    text:'温馨提示温馨提示温馨提示',
                    showBg:true
                });
            }
        }
    }
</script>

<style lang="scss">

</style>

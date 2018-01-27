/**
* @author : wenhao.huang
* @date   : 2018/1/11
*/

<template>
    <article class="page page-article page-wrap">
        <h2>Confirm 确认</h2>
        <div class="section-content">
            <p>确认类notice。用法如下：</p>
        </div>
        <h3>Default</h3>
        <div class="section-content">
            <i-button @click.native="alertFn">Default</i-button>
            <p>
                <code>
                    this.$confirm("这里是消息内容");
                </code>
            </p>
        </div>
        <h3>回调</h3>
        <div class="section-content">
            <i-button @click.native="alertFn1">回调</i-button>
            <p>
                <code>
                    this.$confirm({
                        content:'温馨提示温馨提示温馨提示',
                        callBack:()=>{
                            console.log(this.message);
                        }
                    });
                </code>
            </p>
        </div>
        <h3>样式绑定</h3>
        <div class="section-content">
            <i-button @click.native="alertFn2">样式绑定</i-button>
            <p>
                <code>
                    this.$confirm({
                        content:'温馨提示温馨提示温馨提示',
                        className:'custom'
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
            return {
                message:'message回调'
            }
        },
        methods:{
            alertFn(){
                this.$confirm('温馨提示温馨提示温馨提示');
            },
            alertFn1(){
                this.$confirm({
                    content:'温馨提示温馨提示温馨提示',
                    callBack:()=>{
                        console.log(this.message);
                    }
                });
            },
            alertFn2(){
                this.$confirm({
                    content:'温馨提示温馨提示温馨提示',
                    className:'custom custom2'
                });
            }
        }
    }
</script>

<style lang="scss">

</style>

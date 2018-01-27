<template>
    <div class="flex" :class="[classDirection,classJustify,classAlign]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "flexItem",
        data(){
            return {
                classDirection:(this.direction) ? 'flex-' + this.direction : '',
                classJustify:(this.justify) ? 'flex-justify-' + this.justify : '',
                classAlign:(this.align) ? 'flex-align-' + this.align : ''
            }
        },
        props: {
            direction: {
                type: String,
                default: ''
            },
            justify: {
                type: String,
                default: ''
            },
            align: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">

</style>

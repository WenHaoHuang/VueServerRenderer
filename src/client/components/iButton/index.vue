<template>
    <button class="btn" :class="[classType,classPlain,classRound,classDisabled,classSize]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "iButton",
        data() {
            return {
                classType: '',
                classPlain: '',
                classRound: ''
            }
        },
        props: {
            type: {
                type: String,
                default: ''
            },
            plain: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: ''
            }
        },
        created() {
            this.classType = (this.type) ? 'btn-' + this.type : '';
            this.classPlain = (this.plain) ? 'is-plain' : '';
            this.classRound = (this.round) ? 'is-round' : '';
            this.classDisabled = (this.disabled) ? 'disabled' : '';
            this.classSize = (this.size) ? 'btn-' + this.size : '';
        }
    }
</script>

<style lang="scss">
</style>

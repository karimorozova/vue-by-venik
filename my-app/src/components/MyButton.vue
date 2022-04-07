<template>
    <button :type="type">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton',
        props: {
            type: {
                type: String,
                default: 'button',
                // required: true 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
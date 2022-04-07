<template>
    <!-- <button :type="type" class="btn">
        <slot></slot>
    </button> -->
      <!-- <button :type="type" :class="['btn', 'btn--outlined']">
        <slot></slot>
    </button> -->
     <button :type="type" :class="{'btn': true, 'btn--outlined': outlined}">
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
            },
            outlined: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    display: inline-flex;
    font-size: 18px;
    padding: 8px 12px;
    cursor: pointer;
    background-color: orange;
    color: white;
    min-width: 220px;
    border: 1px solid transparent;
    justify-content: center;

    &--outlined {
        background-color: transparent;
        color: orange;
        border: 1px solid orange;
    }
}
</style>
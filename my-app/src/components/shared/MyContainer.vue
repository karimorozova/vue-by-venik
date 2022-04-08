<template>
    <div class="container">
        <!-- Default slot -->
        <slot>default value</slot> 
    </div>
</template>

<script>
    export default {
        name: 'MyContainer'
    }
</script>

<style lang="scss" scoped>
.container {
    width: 1110px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}
</style>
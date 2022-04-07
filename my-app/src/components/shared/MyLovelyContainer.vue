<template>
    <div class="container">
        <slot></slot> 
    </div>
</template>

<script>
    export default {
        name: 'MyLovelyContainer'
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
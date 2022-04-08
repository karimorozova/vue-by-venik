<template>

    <header class="header">
        <MyContainer>
            <MyLogo />
        </MyContainer>
    </header>
    
</template>

<script>
import MyContainer from '@/components/shared/MyContainer.vue'
import MyLogo from '@/components/MyLogo.vue'
    export default {
        name: 'MyHeader',
        components: {
            MyContainer,
            MyLogo
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
    padding: 16px 0;
    background-color: $secondary-color;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>
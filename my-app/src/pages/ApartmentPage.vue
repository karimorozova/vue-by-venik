<template>
    <div>
        <MyContainer>
            <h1>Apartment page</h1>
        </MyContainer>

    </div>
</template>

<script>
  import MyContainer from '@/components/shared/MyContainer.vue'
    export default {
        name: 'ApartmentPage',
        components: {
            MyContainer,
        },
        mounted() {
            console.log(this.$route.query.name)
            console.log(this.$route.params.id)
        },
    }
</script>

<style lang="scss" scoped>

</style>
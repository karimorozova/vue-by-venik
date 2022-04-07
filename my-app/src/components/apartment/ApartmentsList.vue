<template>
<MyLovelyContainer>
    <div class="apartments-list">
        
        <ApartmentsItem
        v-for="{id, descr, price, rating, imgUrl} in items"
        :key="id"
        :description="descr"
        :price="price"
        :rating="rating"
        :imgSrc="imgUrl"
        />
      
    </div>
     </MyLovelyContainer>
</template>

<script>
import ApartmentsItem from '@/components/apartment/ApartmentsItem'
import MyLovelyContainer from '@/components/shared/MyLovelyContainer.vue'
    export default {
        name: 'ApartmentsList',
        components: {
            ApartmentsItem,
            MyLovelyContainer
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
} 
</style>
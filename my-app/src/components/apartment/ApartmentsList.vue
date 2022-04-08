<template>

    <!-- Named slot -->
    <slot name="title"></slot>
    <div class="apartments-list">
        <!-- Scoped slot -->
      <template v-for="apartment in items">
          <slot name="apartment"  :apartment="apartment">
              
          </slot>
      </template>
<!--         
        <ApartmentsItem
        v-for="{id, descr, price, rating, imgUrl} in items"
        :key="id"
        :description="descr"
        :price="price"
        :rating="rating"
        :imgSrc="imgUrl"
        class="apartments-list__item"
        /> -->

    </div>
     <!-- Named slot -->
    <slot name="description"></slot>
    
</template>

<script>
// import ApartmentsItem from '@/components/apartment/ApartmentsItem'
// import MyContainer from '@/components/shared/MyContainer.vue'
    export default {
        name: 'ApartmentsList',
        components: {
            // ApartmentsItem,
            // MyContainer
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
<template>
 <div :id="$style.app">
   <ApartmentsList :items="apartments">
     <template v-slot:title>My title</template>
     <template v-slot:apartment="{ apartment }">
       <ApartmentsItem
        :key="apartment.id"
        :description="apartment.descr"
        :price="apartment.price"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
        class="apartments-list__item"
        /> 
     </template>
     <!-- <template v-slot:description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem perferendis minima eos fugit error placeat, laboriosam odio dolores impedit labore tempora, facilis ab dignissimos temporibus veniam. In neque dicta recusandae.</template> -->
   </ApartmentsList>
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  
  <!-- <StarRating :rating="3.4"/> -->
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  <!-- <MyButton @click="incrementClicks" outlined>Click me</MyButton> -->
 </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue'

// import StarRating from '@/components/StarRating.vue'
import ApartmentsItem from '@/components/apartment/ApartmentsItem'
import ApartmentsList from '@/components/apartment/ApartmentsList.vue'
import apartments from '@/components/apartment/apartments.js'

export default {
  name: 'App',
  components: {
  //  StarRating,
   ApartmentsList,
   ApartmentsItem
  },
  data() {
    return {
      apartments
    }
  },
  computed: {

  },
  methods: {
  }
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

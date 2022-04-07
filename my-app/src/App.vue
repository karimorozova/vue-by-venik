<template>
 <div :id="$style.app">

  <ApartmentsItem
  :description="apartment.descr"
  :rating="apartment.rating" 
  :price="apartment.price"
  :imgSrc="apartment.imgSrc"
  />
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  
  <!-- <StarRating :rating="3.4"/> -->
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  <!-- <MyButton @click="incrementClicks" outlined>Click me</MyButton> -->
 </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue'

// import StarRating from '@/components/StarRating.vue'
import ApartmentsItem from '@/components/apartment/ApartmentsItem.vue'

export default {
  name: 'App',
  components: {
  //  StarRating,
   ApartmentsItem
  },
  data() {
    return {
      apartment: {
        id: 1,
        descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, aspernatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, aspernatur?',
        price: 3000,
        rating: 3.5,
        imgSrc: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg'

      }
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

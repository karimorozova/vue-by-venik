<template>
 <div :id="$style.app">
   <ApartmentsList :items="apartments"/>
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  
  <!-- <StarRating :rating="3.4"/> -->
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  <!-- <MyButton @click="incrementClicks" outlined>Click me</MyButton> -->
 </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue'

// import StarRating from '@/components/StarRating.vue'
import ApartmentsList from '@/components/apartment/ApartmentsList.vue'
import apartments from '@/components/apartment/apartments.js'

export default {
  name: 'App',
  components: {
  //  StarRating,
   ApartmentsList
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

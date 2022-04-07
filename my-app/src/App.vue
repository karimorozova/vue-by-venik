<template>
 <div :id="$style.app">
  
  <h2>{{ title  }}</h2>
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  
  <StarRating :rating="3.4"/>
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  <!-- <MyButton @click="incrementClicks" outlined>Click me</MyButton> -->
 </div>
</template>

<script>
// import MyButton from '@/components/MyButton.vue'

import StarRating from '@/components/StarRating.vue'

export default {
  name: 'App',
  components: {
   StarRating
  },
  data() {
    return {
      amountOfClicks: 0
      }
  },
  computed: {
    title() {
      return `Amount of clicks: ${this.amountOfClicks}`
    }
  },
  methods: {
    incrementClicks() {
      this.amountOfClicks += 1
    }
  }
}
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

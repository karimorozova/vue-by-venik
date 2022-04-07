<template>
 <div :id="$style.app">
  <MyTitle></MyTitle>
  <h2>{{ title  }}</h2>
  <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton>
  <!-- <MyButton @click="incrementClicks" :outlined="true">Click me</MyButton> -->
  <!-- <MyButton @click="incrementClicks" outlined>Click me</MyButton> -->
 </div>
</template>

<script>
import MyTitle from '@/components/MyTitle.vue'
import MyButton from '@/components/MyButton.vue'

export default {
  name: 'App',
  components: {
   MyTitle,
   MyButton
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

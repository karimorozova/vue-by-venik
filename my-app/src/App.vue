<template>
 <div id="app">
  <MyTitle></MyTitle>
  <MyButton>Click me</MyButton>
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

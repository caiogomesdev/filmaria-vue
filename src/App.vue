<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
  export default {
    name: "app",
    components: {
      Header
    }

  }
</script>

<style>
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex:1 ;
  }
</style>
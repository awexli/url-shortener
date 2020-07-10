<template>
  <div id="app">
    <NavBar />
    <GetStarted />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import GetStarted from './components/GetStarted.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    GetStarted,
  },
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px;
  margin: auto;
}
</style>

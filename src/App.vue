<template>
  <div id="app">
    <NavBar />
    <GetStarted />
    <StatsSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import GetStarted from './components/GetStarted.vue';
import StatsSection from './components/StatsSection.vue';

export default {
  name: 'App',
    components: {
    NavBar,
    GetStarted,
    StatsSection,
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

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

<style lang="scss">
@import './styles/style-guide.scss';

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px;
  margin: auto;
}

body,
button,
input,
select,
textarea {
  font-family: 'Poppins', sans-serif;
}

.subtitle {
  color: $gray-violet;
  padding: 1rem 1rem;
  font-size: 16px;

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    line-height: 1.7;
  }
}

.columns {
  margin: 0;
}
</style>

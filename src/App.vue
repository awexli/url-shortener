<template>
  <div id="app">
    <NavBar />
    <GetStarted />
    <StatsSection />
    <BoostLink />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/0_nav/NavBar';
import GetStarted from './components/1_get-started/GetStarted';
import StatsSection from './components/2_stats-section/StatsSection';
import BoostLink from './components/3_boost-section/BoostLink';
import FooterSection from './components/4_footer/FooterSection';

export default {
  name: 'App',
  components: {
    NavBar,
    GetStarted,
    StatsSection,
    BoostLink,
    FooterSection
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

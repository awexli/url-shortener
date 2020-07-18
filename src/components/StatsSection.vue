<template>
  <div class="stats">
    <LinkForm />
    <div class="stats__advanced container">
      <h2 class="title">Advanced Statistics</h2>
      <p class="subtitle">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
  </div>
</template>

<script>
import LinkForm from './LinkForm.vue';

export default {
  name: 'StatsSection',
  components: {
    LinkForm,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/style-guide.scss';
.stats {
  height: 300px;
  position: relative;

  &::before {
    content: '';
    background: $gray;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 22%;
    z-index: -1;

    @media screen and (min-width: 1024px) {
      top: 20%;
    }
  }
}
</style>

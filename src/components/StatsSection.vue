<template>
  <div class="stats">
    <LinkForm />
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
  }
}
</style>

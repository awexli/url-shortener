<template>
  <div class="stats">
    content
  </div>
</template>

<script>
export default {
  name: 'StatsSection',
};
</script>

<style lang="scss" scoped>
@import '../styles/style-guide.scss';
.stats {
  height: 100px;
  &::before {
    content: "";
    background: hsl(0, 0%, 75%);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: -1;
  }
}
</style>

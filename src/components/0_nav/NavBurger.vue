<template>
  <a
    role="button"
    v-bind:class="{ 'navbar-burger': true, 'is-active': isActive }"
    aria-label="menu"
    aria-expanded="false"
    @click="$emit('handle-burger-click')"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</template>

<script>
export default {
  name: 'NavBurger',
  props: {
    isActive: Boolean
  }
};
</script>

<style scoped lang="scss"></style>

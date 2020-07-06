<template>
  <div class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">
        <img alt="Vue logo" src="../assets/images/logo.svg" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  padding: 1em 1em;
}
</style>

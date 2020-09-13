<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- Logo -->
      <a class="navbar-item">
        <img alt="Vue logo" src="@/assets/images/logo.svg" />
      </a>
      <NavBurger :isActive="isActive" @handle-burger-click="handleBurgerClick" />
    </div>
    <NavBarMenu :isActive="isActive" />
  </nav>
</template>

<script>

import NavBurger from '@/components/0_nav/NavBurger';
import NavBarMenu from '@/components/0_nav/NavBarMenu';

export default {
  name: 'Navbar',
  components: {
    NavBurger,
    NavBarMenu
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleBurgerClick: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  padding: 1em 1em 0 1em;

  @media screen and (min-width: 768px) {
    margin: 0 10%;
    padding: 1em 0;
  }
}
</style>

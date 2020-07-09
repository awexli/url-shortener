<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- Logo -->
      <a href="#" class="navbar-item">
        <img alt="Vue logo" src="../assets/images/logo.svg" />
      </a>

      <!-- Burger -->
      <a
        role="button"
        v-bind:class="{'navbar-burger':true, 'is-active':isActive}"
        aria-label="menu"
        aria-expanded="false"
        v-on:click="handleBurgerClick"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Menu -->
    <div v-bind:class="{'navbar-menu':true, 'is-active':isActive}">
      <div class="navbar-start">
        <a href="#" class="navbar-item">Features</a>
        <a href="#" class="navbar-item">Pricing</a>
        <a href="#" class="navbar-item">Resources</a>
        <div class="navbar-divider"></div>
      </div>
      <div class="navbar-end">
        <a href="" class="navbar-item">Login</a>
        <a href="" class="navbar-item navbar-signup">Sign up</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    handleBurgerClick: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/style-guide.scss';
$item-percentage: 80%;

.navbar {
  padding: 1em 1em;
  //border: 1px solid red;

  &-item {
    @media screen and (max-width: 1023px) {
      color: white;
      font-weight: 600;
      margin: 1em 0;
    }
  }

  &-menu {
    @media screen and (max-width: 1023px) {
      background-color: $dark-violet;
      border-radius: 10px;
      width: 95%;
      margin: auto;
    }
  }

  &-divider {
    @media screen and (max-width: 1023px) {
      height: 1px;
      background-color: hsla(0, 0%, 66%, 0.225);
      display: block;
      width: $item-percentage;
      margin: 1em auto;
    }
  }

  &-signup {
    @media screen and (max-width: 1023px) {
      background-color: $cyan;
      width: $item-percentage;
      margin: auto;
      border-radius: 2em;
      margin-bottom: 2em;
    }
  }
}
</style>

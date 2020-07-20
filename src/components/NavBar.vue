<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- Logo -->
      <a class="navbar-item">
        <img alt="Vue logo" src="../assets/images/logo.svg" />
      </a>

      <!-- Burger -->
      <a
        role="button"
        v-bind:class="{ 'navbar-burger': true, 'is-active': isActive }"
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
    <div v-bind:class="{ 'navbar-menu': true, 'is-active': isActive }">
      <div class="navbar-start">
        <a class="navbar-item">Features</a>
        <a class="navbar-item">Pricing</a>
        <a class="navbar-item">Resources</a>
        <div class="navbar-divider"></div>
      </div>
      <div class="navbar-end">
        <a class="navbar-item">Login</a>
        <CyanButton class="navbar-item navbar-signup" :buttonText="'Sign up'" />
      </div>
    </div>
  </nav>
</template>

<script>
import CyanButton from './CyanButton.vue';

export default {
  name: 'Navbar',
  components: {
    CyanButton,
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
@import '../styles/style-guide.scss';

$item-percentage: 80%;

.navbar {
  padding: 1em 1em 0 1em;

  @media screen and (min-width: 768px) {
    margin: 0 10%;
    padding: 1em 0;
  }

  &-menu {
    @media screen and (max-width: 1023px) {
      background-color: $dark-violet;
      border-radius: 10px;
      width: 92%;
      margin: auto;
    }
  }

  &-menu.is-active {
    @media screen and (min-width: 375px) and (max-width: 1023px) {
      position: absolute;
      left: 0;
      right: 0;
    }
  }

  &-item {
    font-weight: 600;
    color: $gray-violet;
    transition: color ease 0.2s;
    
    &:hover {
      background-color: transparent;
      color: black;
    }

    &:focus {
      background-color: transparent;
      color: black;
    }

    @media screen and (max-width: 1023px) {
      color: white;
      margin: 1em 0;
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

  &-end {
    :first-child {
      margin-right: 1em;
    }
  }

  &-signup {
    margin: auto;

    @media screen and (max-width: 1023px) {
      width: $item-percentage;
      margin-bottom: 2em;
    }
  }
}
</style>

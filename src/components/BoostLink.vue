<template>
  <div class="boost">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="../assets/images/bg-boost-desktop.svg"
      />
      <img
        class="boost__background"
        src="../assets/images/bg-boost-mobile.svg"
        alt=""
      />
    </picture>
    <div class="boost__content-container">
      <p class="boost__title title">Boost your links today</p>
      <button class="boost__button button">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoostLink',
};
</script>

<style lang="scss" scoped>
@import '../styles/style-guide.scss';
.boost {
  padding: 5rem 0.75rem;
  background-color: $dark-violet;
  position: relative;

  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &__content-container {
    position: relative;
  }

  &__title {
    font-size: 1.7rem;
    color: white;
  }

  // resuable
  &__button {
    background-color: $cyan;
    border-radius: 2em;
    border-color: transparent;
    width: 9rem;
    color: white;
    transition: background-color ease 0.1s;
    -webkit-transition: background-color ease 0.1s;
    -ms-transition: background-color ease 0.1s;

    &:hover {
      background-color: $button-hover-color;
    }
  }
}
</style>

<template>
  <div class="boost">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="@/assets/images/bg-boost-desktop.svg"
      />
      <img
        class="boost__background"
        src="@/assets/images/bg-boost-mobile.svg"
        alt="background"
      />
    </picture>
    <div class="boost__content-container">
      <p class="boost__title title">Boost your links today</p>
      <CyanButton :buttonText="'Get Started'" />
    </div>
  </div>
</template>

<script>
import CyanButton from '@/components/_common/CyanButton.vue';

export default {
  name: 'BoostLink',
  components: {
    CyanButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/style-guide.scss';

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
}
</style>

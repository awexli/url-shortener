<template>
  <div class="get-started columns">
    <div class="get-started__right column">
      <img
        src="@/assets/images/illustration-working.svg"
        alt="Human working in front of a desk"
        class="get-started__image"
      />
    </div>
    <div class="get-started__left column">
      <p class="get-started__title title">
        <span>More than just </span><span>shorter links</span>
      </p>
      <p class="get-started__subtitle subtitle">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <CyanButton :buttonText="'Get Started'" />
    </div>
  </div>
</template>

<script>
import CyanButton from '@/components/_common/CyanButton.vue';

export default {
  name: 'GetStarted',
  components: {
    CyanButton,
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/style-guide.scss';

.get-started {
  display: grid;
  grid-template-areas: 'right' 'left';

  @media screen and (min-width: 768px) {
    grid-template-areas: 'left right';
    grid-template-columns: 1fr 1.3fr;
    margin: 0 0 0 10%;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 0 10%;
  }

  &__left {
    grid-area: left;
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      justify-content: center;
      align-items: flex-start;
      padding: 0.75rem 0;
    }
  }

  &__right {
    grid-area: right;
    overflow: hidden;
    padding: 0;
  }

  &__image {
    margin-left: 5em;
    margin-top: 2.5em;
    margin-bottom: 3.5em;
    transform: scale(1.3);

    @media screen and (min-width: 768px) {
      transform: scale(1.1);
      margin-left: 4em;
      margin-bottom: 1em;
    }
  }

  &__title {
    max-width: 550px;

    @media screen and (min-width: 375px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 768px) {
      text-align: start;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3.3rem;
    }

    @media screen and (min-width: 1440px) {
      font-size: 4.0rem;
    }
  }

  &__subtitle {
    @media screen and (min-width: 768px) {
      text-align: start;
      padding: 1rem 0;
    }

    @media screen and (min-width: 1024px) {
      max-width: 480px;
    }
  }
}
</style>

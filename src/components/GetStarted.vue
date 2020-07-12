<template>
  <div class="get-started columns">
    <div class="get-started__right column">
      <img
        src="../assets/images/illustration-working.svg"
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
      <a href="#" class="get-started__button button">Get Started</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStarted',
};
</script>

<style scoped lang="scss">
@import '../styles/style-guide.scss';

.get-started {
  display: grid;
  grid-template-areas: 'right' 'left';
  padding: 0 1.5em;

  @media screen and (min-width: 1024px) {
    grid-template-areas: 'left right';
    grid-template-columns: 1fr 1fr;
  }

  &__image {
    // margin-left: 5em;
    // margin-top: 2.5em;
    // margin-bottom: 2.5em;
    // transform: scale(1.3);
    padding-left: 10px;

    @media screen and (min-width: 1024px) {
      padding-left: 0;
    }
  }

  &__left {
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: left;

    @media screen and (min-width: 1024px) {
      justify-content: center;
      align-items: flex-start;
    }
  }

  &__right {
    grid-area: right;
  }

  &__title {
    max-width: 550px;

    @media screen and (min-width: 375px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3.3rem;
      text-align: start;
    }

    @media screen and (min-width: 1440px) {
      font-size: 4.0rem;
    }
  }

  &__subtitle {
    color: $gray-violet;
    padding: 1rem 1rem;
    font-size: 16px;

    @media screen and (min-width: 375px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1024px) {
      text-align: start;
      line-height: 1.7;
      padding: 1rem 0;
      max-width: 480px;
    }
  }

  &__button {
    background-color: $cyan;
    border-radius: 2em;
    width: 9rem;
    color: white;

    // resuable
    &:hover {
      background-color: $cyan;
      color: white;
      filter: opacity(45%);
    }
  }
}
</style>

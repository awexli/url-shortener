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
      <p class="get-started__title title">More than just shorter links</p>
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

  &__image {
    // margin-left: 5em;
    // margin-top: 2.5em;
    // margin-bottom: 2.5em;
    // transform: scale(1.3);
    padding-left: 10px;
  }

  &__left {
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    @media screen and (min-width: 375px) {
      font-size: 2.5rem;
    }
  }

  &__subtitle {
    color: $gray-violet;
    padding: 1rem 1rem;
    font-size: 16px;

    @media screen and (min-width: 375px) {
      font-size: 18px;
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

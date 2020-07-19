<template>
  <form class="link-form">
    <div class="link-form__field field">
      <div class="link-form__control control">
        <input
          class="link-form__input input"
          type="text"
          placeholder="Shorten a link here..."
        />
      </div>
    </div>
    <div class="link-form__field field">
      <div class="link-form__control control">
        <CyanButton class="link-form__button" :buttonText="'Shorten It!'" />
      </div>
    </div>
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="../assets/images/bg-shorten-desktop.svg"
      />
      <img
        class="link-form__background"
        src="../assets/images/bg-shorten-mobile.svg"
        alt=""
      />
    </picture>
  </form>
</template>

<script>
import CyanButton from './CyanButton.vue';

export default {
  name: 'LinkForm',
  components: {
    CyanButton,
  },
};
</script>

<style scoped lang="scss">
@import '../styles/style-guide.scss';

.link-form {
  margin: 3em 10%;
  padding: 1.3em;
  border-radius: 10px;
  background-color: $dark-violet;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-row: 1fr;
    grid-column-gap: 1em;
    padding: 2.5rem 3.3rem;
  }

  &__field {
    position: relative;
    z-index: 1;
  }

  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &__button {
    width: 100% !important;
    border-radius: 5px !important;
  }

  .field:not(:last-child) {
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  }
}
</style>

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
        <button class="link-form__button button">
          Shorten It!
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LinkForm',
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

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 1em;
    padding: 2.5rem 3.3rem;
  }

  &__button {
    width: 100%;
    background-color: $cyan;
    border-color: $cyan;
    color: white;
  }

  .field:not(:last-child) {
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  }
}
</style>

<template>
  <div class="link-form">
    <form action="" class="link-form__form">
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
            Shorten it!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LinkForm',
};
</script>

<style lang="scss">
@import '../styles/style-guide.scss';

.link-form {
  margin: 3em 2em;
  padding: 1.3em;
  border-radius: 10px;
  background-color: $dark-violet;
  position: relative;

  &__button {
    width: 100%;
    background-color: $cyan;
    border-color: $cyan;
  }
}
</style>

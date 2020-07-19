<template>
  <button class="cyan-button button">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'CyanButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/style-guide.scss';

.cyan-button {
  background-color: $cyan;
  border-radius: 2em;
  border-color: transparent;
  width: 9rem;
  color: white !important;
  transition: background-color ease 0.1s;
  -webkit-transition: background-color ease 0.1s;
  -ms-transition: background-color ease 0.1s;

  &:hover {
    background-color: $button-hover-color;
    color: white;
  }
}
</style>

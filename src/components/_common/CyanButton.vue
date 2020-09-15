<template>
  <button 
    class="cyan-button button"
    @click="$emit('handle-shorten-link')"
  >
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
@import '@/styles/style-guide.scss';

.cyan-button {
  background-color: $cyan;
  border-radius: 2em;
  border-color: transparent;
  width: 9rem;
  color: white !important;
  transition: background-color ease 0.1s !important;
  -webkit-transition: background-color ease 0.1s !important;
  -ms-transition: background-color ease 0.1s !important;

  &:hover {
    background-color: $button-hover-color !important;
  }
}
</style>

<template>
  <div class="link-card">
    <p class="link-card__original-link">{{ originalLink }}</p>
    <hr class="link-card__divider" />
    <div class="link-card__new-link-wrapper">
      <p class="link-card__new-link"><a :href="newLink" target="_blank">{{ newLink }}</a></p>
      <button 
        class="link-card__copy-button button"
        :class="isCopiedClass"
        v-clipboard:copy="newLink"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        <p v-if="!isCopied">Copy</p>
        <p v-else>Copied!</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkCard',
  props: {
    link: Object
  },
  data() {
    return {
      originalLink: this.link.input,
      newLink: this.link.relLink,
      isCopied: false,
    }
  },
  computed: {
    isCopiedClass() {
      return this.isCopied ? '--copied' : '';
    }
  },
  methods: {
    onCopy() {
      this.isCopied = true;
    },
    onError() {
      alert('Failed to copy texts')
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/style-guide.scss';

.link-card {
  margin: 1em 10%;
  background-color: white;
  padding: 1em;
  border-radius: 10px;
  text-align: start;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__original-link {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__divider {
    margin: 8px;
  }

  &__new-link-wrapper {
    :nth-child(1) {
      margin-bottom: 1em;
    }

    :nth-child(2) {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      :nth-child(1) {
        margin-bottom: 0;
        margin-right: 8px;
      }
    }
  }

  &__new-link {
    a {
      color: $cyan;
      font-weight: bold;
    }
  }

  &__copy-button {
    background-color: $cyan;
    border-radius: 5px;
    border-color: transparent;
    color: white;
    font-weight: bold;
    > * {
      margin: 0 !important;
    }
  }

  .--copied {
    background-color: $dark-violet;
  }
}
</style>

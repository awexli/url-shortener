<template>
  <div>
    <form class="link-form" @submit.prevent>
      <div class="link-form__field field">
        <div class="link-form__control control">
          <input
            class="link-form__input input"
            :class="noLinkClass"
            type="text"
            placeholder="Shorten a link here..."
            v-model="link.input"
          />
          <p v-show="hasNoLink" class="link-form__add-link">Please add a link</p>
        </div>
      </div>
      <div class="link-form__field field">
        <div v-if="isLoading" class="link-form__control control">
          <CyanButton
            class="link-form__button"
            :buttonText="'Loading...'"
            disabled
          />
        </div>
        <div v-else class="link-form__control control">
          <CyanButton
            class="link-form__button"
            :buttonText="'Shorten It!'"
            @handle-shorten-link="handleShortenLink"
          />
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-shorten-desktop.svg"
        />
        <img
          class="link-form__background"
          src="@/assets/images/bg-shorten-mobile.svg"
          alt=""
        />
      </picture>
    </form>
    <div v-for="(link, ndx) in links" :key="ndx" class="link-form__link-cards">
      <LinkCard :link="link" />
    </div>
  </div>
</template>

<script>
import CyanButton from '@/components/_common/CyanButton.vue';
import LinkCard from './LinkCard';
import axios from 'axios';

export default {
  name: 'LinkForm',
  components: {
    CyanButton,
    LinkCard,
  },
  data() {
    return {
      links: [],
      link: {
        input: '',
        relLink: '',
      },
      hasNoLink: false,
      isLoading: false,
    };
  },
  computed: {
    noLinkClass() {
      return this.hasNoLink ? '--no-link' : '';
    },
  },
  methods: {
    async handleShortenLink() {
      if (this.link.input === '') {
        this.hasNoLink = true;
        return;
      }

      this.hasNoLink = false;
      this.isLoading = true;
      try {
        const response = await axios.post('https://rel.ink/api/links/', {
          url: this.link.input,
        });
        this.link.relLink = 'https://rel.ink/' + response.data.hashid;
        this.links.push(this.link);
      } catch (error) {
        alert(error);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/style-guide.scss';

.link-form {
  margin: 3em 10%;
  padding: 1.3em;
  background-color: $dark-violet;
  border-radius: 10px;
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

  &__add-link {
    color: red;
    font-style: italic;
    text-align: start;
  }

  .field:not(:last-child) {
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  .--no-link {
    border: red 1px solid;
  }
}
</style>

<template>
  <div class="stats">
    <LinkForm />
    <div class="stats__advanced container">
      <h2 class="title">Advanced Statistics</h2>
      <p class="stats__card-subtitle subtitle">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>

    <div class="stats__cards-container">
      <div class="stats__card" v-for="card in cards" :key="card.id">
        <div class="stats__icon-container">
          <img :src="card.src" :alt="card.alt" class="stats__card-icon" />
        </div>
        <div class="stats__card-description">
          <h3 class="stats__card-title title">{{ card.title }}</h3>
          <p class="stats__card-subtitle subtitle">{{ card.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkForm from '@/components/5_link-form/LinkForm.vue';

export default {
  name: 'StatsSection',
  components: {
    LinkForm,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          src: require('@/assets/images/icon-brand-recognition.svg'),
          alt: 'Icon of a bar and line graph trending up',
          title: 'Brand Recognition',
          subtitle:
            'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
        },
        {
          id: 2,
          src: require('@/assets/images/icon-detailed-records.svg'),
          alt: 'Icon of a circular meter',
          title: 'Detailed Records',
          subtitle:
            'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        },
        {
          id: 3,
          src: require('@/assets/images/icon-fully-customizable.svg'),
          alt: 'Icon of a various drawing tools',
          title: 'Fully Customizable',
          subtitle:
            'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/style-guide.scss';
$card-padding: 1em;

.stats {
  position: relative;
  padding-bottom: 5rem;

  // gray background
  &::before {
    content: '';
    background: $gray;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 5%;
    z-index: -1;

    @media screen and (min-width: 1024px) {
      top: 4%;
    }

    @media screen and (min-width: 1440px) {
      top: 8%;
    }
  }

  &__advanced {
    max-width: 490px;
    margin-top: 2em;
  }

  &__cards-container {
    margin: 0 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;

    // cyan line that goes through cards
    &::before {
      content: '';
      background: $cyan;
      height: 90%;
      width: 8px;
      display: block;
      position: absolute;
      z-index: -1;

      // center line vertical
      margin-left: auto;
      margin-right: auto;
      top: 90px;
      left: 0;
      right: 0;
      text-align: center;
      // end center line

      // cyan line horizontal
      @media screen and (min-width: 1440px) {
        width: 90%;
        height: 8px;
        top: 40px;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
      }
    }

    @media screen and (min-width: 1440px) {
      margin: 0 10%;
      flex-direction: row;
      justify-content: space-between;

      :nth-child(1) {
        margin-top: 0;
      }

      :nth-child(3) {
        margin-top: 180px;
      }
    }
  }

  &__card {
    background-color: white;
    padding: $card-padding; // card main padding
    margin-top: 90px;
    position: relative;
    display: flex;
    justify-content: center;
    height: 265px;
    max-width: 350px;
    border-radius: $border-radius;

    @media screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  &__card-description {
    // space between icon and title
    margin-top: calc(#{$card-padding} + 45px);

    @media screen and (min-width: 1440px) {
      text-align: start;
    }
  }

  &__icon-container {
    background-color: $dark-violet;
    border-radius: 50%;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
    border-collapse: collapse;

    width: 90px;
    height: 90px;

    display: grid;
    place-items: center;

    position: absolute;
    top: -45px;

    transition: transform ease 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    @media screen and (min-width: 1440px) {
      left: calc(#{$card-padding} + 1rem);
    }
  }

  &__card-title {
    font-size: 1.3rem;
    padding: 0 1rem;
  }

  &__card-subtitle {
    font-size: 15px;
    line-height: 1.7;
  }
}
</style>

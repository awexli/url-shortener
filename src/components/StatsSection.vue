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
      <div class="stats__card">
        <div class="stats__icon-container">
          <img
            src="../assets/images/icon-brand-recognition.svg"
            alt=""
            class="stats__card-icon"
          />
        </div>
        <div class="stats__card-description">
          <h3 class="stats__card-title title">Brand Recognition</h3>
          <p class="stats__card-subtitle subtitle">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
      <div class="stats__card">
        <div class="stats__icon-container">
          <img
            src="../assets/images/icon-detailed-records.svg"
            alt=""
            class="stats__card-icon"
          />
        </div>
        <div class="stats__card-description">
          <h3 class="stats__card-title title">Detailed Records</h3>
          <p class="stats__card-subtitle subtitle">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>
      <div class="stats__card">
        <div class="stats__icon-container">
          <img
            src="../assets/images/icon-fully-customizable.svg"
            alt=""
            class="stats__card-icon"
          />
        </div>
        <div class="stats__card-description">
          <h3 class="stats__card-title title">Fully Customizable</h3>
          <p class="stats__card-subtitle subtitle">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkForm from './LinkForm.vue';

export default {
  name: 'StatsSection',
  components: {
    LinkForm,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/style-guide.scss';
$card-padding: 1em;

.stats {
  position: relative;

  // gray background
  &::before {
    content: '';
    background: $gray;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    //top: 22%;
    z-index: -1;

    @media screen and (min-width: 1024px) {
      //top: 20%;
    }
  }

  &__advanced {
    max-width: 490px;
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

      // center line vertical
      margin-left: auto;
      margin-right: auto;
      top: 90px;
      left: 0;
      right: 0;
      text-align: center;
      // end center line

      z-index: -1;

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
    width: 90px;
    height: 90px;
    display: grid;
    place-items: center;
    position: absolute;
    top: -45px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.3);
    border-collapse: collapse;
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

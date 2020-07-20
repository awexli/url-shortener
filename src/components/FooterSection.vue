<template>
  <footer class="footer">
    <div class="footer__branding-container">
      <img src="../assets/images/logo-white.svg" alt="Shortly Logo" />
    </div>
    <div class="footer__link-container">
      <ul class="footer__link-list">
        <li class="footer__link-title">Features</li>
        <li class="footer__link-item"><a>Link Shortening</a></li>
        <li class="footer__link-item"><a>Branded Links</a></li>
        <li class="footer__link-item"><a>Analytics</a></li>
      </ul>
      <ul class="footer__link-list">
        <li class="footer__link-title">Resources</li>
        <li class="footer__link-item"><a>Blog</a></li>
        <li class="footer__link-item"><a>Developers</a></li>
        <li class="footer__link-item"><a>Support</a></li>
      </ul>
      <ul class="footer__link-list">
        <li class="footer__link-title">Company</li>
        <li class="footer__link-item"><a>About</a></li>
        <li class="footer__link-item"><a>Our Team</a></li>
        <li class="footer__link-item"><a>Careers</a></li>
        <li class="footer__link-item"><a>Contact</a></li>
      </ul>
    </div>
    <div class="footer__social-container">
      <ul class="footer__icon-list">
        <li class="footer__icon">
          <a>
            <img
              src="../assets/images/icon-facebook.svg"
              alt="facebook icon"
              class="footer__facebook"
            />
          </a>
        </li>
        <li class="footer__icon">
          <a>
            <img
              src="../assets/images/icon-twitter.svg"
              alt="twitter icon"
              class="footer__twitter"
            />
          </a>
        </li>
        <li class="footer__icon">
          <a>
            <img
              src="../assets/images/icon-pinterest.svg"
              alt="pinterest icon"
              class="footer__pinterest"
            />
          </a>
        </li>
        <li class="footer__icon">
          <a>
            <img
              src="../assets/images/icon-instagram.svg"
              alt="instagram icon"
              class="footer__instagram"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
@import '../styles/style-guide.scss';

.footer {
  display: flex;
  flex-direction: column;
  background-color: $very-dark-violet;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  &__branding-container {
    display: grid;
    place-content: center;

    @media screen and (min-width: 1024px) {
      place-content: unset;
    }
  }

  &__link-container {
    //background-color: red;
    padding: 3em 0;

    :nth-child(1) {
      .footer__link-title {
        padding-top: 0;
      }
    }

    @media screen and (min-width: 1024px) {
      padding: unset;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      width: 500px;
    }

    @media screen and (min-width: 1280px) {
      width: 650px;
    }
  }

  &__social-container {
    display: flex;
    justify-content: center;
  }

  &__link-list {
    //background-color: violet;

    :last-of-type {
      padding-bottom: 0;
    }

    @media screen and (min-width: 1024px) {
      margin-left: 5rem;
      text-align: start;
    }
  }

  &__link-title {
    font-weight: 700;
    padding: 1.5em 0;
    color: white;

    @media screen and (min-width: 1024px) {
      padding: 0 0 1.5em 0;
    }
  }

  &__link-item {
    padding: 5px 0;

    a {
      color: $gray-violet;
      transition: color ease 0.2s;

      &:hover {
        color: $cyan;
      }
    }

    @media screen and (min-width: 1024px) {
      padding: 8px 0;
    }
  }

  &__icon-list {
    display: flex;
  }

  &__icon {
    padding: 0 10px;
    margin: 0 2px;
    transition: filter ease 0.2s;
    height: 24px;

    a {
      display: flex;
    }

    &:hover {
      filter: invert(74%) sepia(83%) saturate(456%) hue-rotate(122deg)
        brightness(200%) contrast(82%);
    }
  }
}
</style>

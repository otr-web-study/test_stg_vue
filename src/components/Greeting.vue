<template>
  <section class='greeting'>
    <Container class='greeting__container'>
      <h1 class='greeting__header'>
        Find all your favorite character
      </h1>
      <p class='greeting__text'>
        You can find out all the information about your favorite characters
      </p>
      <RouterLink :to='{name: "characters"}' class='greeting__link'>See more...</RouterLink>
      <img 
        :src='require("@/assets/banner.png")' 
        class='greeting__image'
        alt='yoda' />
    </Container>
  </section>
</template>

<script>
  import Container from '@/components/Container';

  export default {
    components: {Container}  
  }
</script>

<style scoped>
.greeting {
  box-sizing: border-box;
  display: flex;
  background: linear-gradient(180deg, #1F2A63 0%, #17002F 100%);
  min-height: calc(100% - 90px);
  padding-top: 128px;
}

.greeting__container {
  display: grid;
  grid-template-areas: 
  "header image"
  "text   image"
  "link   image";
  grid-template-columns: 45% 55%;
  grid-template-rows: max-content max-content max-content;
}

.greeting__info {
  max-width: 45%;
}

.greeting__header {
  color: white;
  font-size: 72px;
  line-height: 84px;
  font-weight: 700;
  letter-spacing: 4px;
  margin: 0;
  grid-area: header;
}

.greeting__text {
  color: white;
  font-size: 32px;
  line-height: 37px;
  margin: 64px 0 0;
  grid-area: text;
}

.greeting__link {
  box-sizing: border-box;
  display: inline-block;
  color: #212121;
  font-size: 23px;
  line-height: 27px;
  font-weight: 700;
  border-radius: 11px;
  margin-top: 64px;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  background-color: #FFC107;
  width: 231px;
  height: 66px;
  padding: 17px 0;
  text-decoration: none;
  text-align: center;
  transition: .2s;
  grid-area: link;
}

.greeting__link:hover {
  opacity: .8;
}

.greeting__image {
  width: 110%;
  object-fit: contain;
  grid-area: image;
}

@media screen and (max-width: 1400px) {
  .greeting__image {
    width: 100%;
  }

  .greeting__header {
    font-size: 60px;
    line-height: 67px;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 1280px) {
  .greeting {
    min-height: calc(100% - 80px);
    padding-top: 90px;
  }

  .greeting__image {
    object-position: top;
  }

  .greeting__header {
    font-size: 55px;
    line-height: 61px;
    letter-spacing: 3px;
  }

  .greeting__text {
    font-size: 24px;
    line-height: 28px;
  }
}

@media screen and (max-width: 768px) {
  .greeting {
    min-height: calc(100% - 70px);
    padding-top: 40px;
  }

  .greeting__container {
    display: grid;
    grid-template-areas: 
    "header"
    "image"
    "text"
    "link";
    grid-template-columns: 1fr;
  }

  .greeting__image {
    max-width: 330px;
    margin: 20px auto;
  }

  .greeting__header {
    font-size: 40px;
    line-height: 45px;
    letter-spacing: 1px;
    text-align: center;
    max-width: 420px;
    margin: 0 auto;
  }

  .greeting__text {
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 20px auto 0;
    max-width: 420px;
  }

  .greeting__link {
    max-width: 300px;
    margin: 70px auto 0;
    height: 50px;
    padding: 8px 0;

  }

}
</style>
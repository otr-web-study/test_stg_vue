<template>
  <section class='not-found'>
    <div class='not-found__container'>
      <my-button 
        class='not-found__btn-return'
        @click='$router.go(-1)'>Return</my-button>
    </div>
  </section>
</template>

<script>
  import MyButton from '@/components/UI/MyButton';

  export default {
    components: {MyButton}
  }
</script>

<style scoped>
.not-found {
  background-color: #17002F;
  height: 100vh;
}

.not-found__container {
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 98px 82px;
  background-image: url(@/assets/404.png);
  background-repeat: no-repeat;
  background-size: 80%;
  background-position-x: center;
  background-position-y: 25%;
}

.not-found__btn-return {
  background: #73D677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
}

@media screen and (max-width: 768px) {
  .not-found__container {
    background-position-y: 40%;
  }
}
</style>
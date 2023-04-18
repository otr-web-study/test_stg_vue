<template>
  <RouterLink :to="{name: 'home'}" class="logo"></RouterLink>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.logo {
  background-image: url(@/assets/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 100%;
}

@media screen and (max-width: 1280px) {
  .logo {
    width: 120px;
  }
}

@media screen and (max-width: 768) {
  .logo {
    width: 90px;
  }
}
</style>
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 157px;
  box-sizing: border-box;
}

@media screen and (max-width: 1280px) {
  .container {
    padding: 0 60px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
}
</style>
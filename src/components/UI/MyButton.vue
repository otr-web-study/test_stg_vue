<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.button {
  color: #212121;
  font-size: 23px;
  line-height: 27px;
  font-weight: 700;
  border-radius: 11px;
  width: 231px;
  height: 66px;
  cursor: pointer;
  transition: .2s;
  border: none;
}

.button:hover {
  opacity: .8;
}
</style>
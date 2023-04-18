<template>
  <div class="error-indicator">
    <img :src="require('@/assets/death-star.png')" alt="error icon"/>
    <span class="boom">BOOM!</span>
    <span>
      something has gone terribly wrong
    </span>
    <span>
      (but we already sent droids to fix it)
    </span>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.error-indicator {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c78f22;
  padding: 1rem 0;
}

.error-indicator img {
  margin-bottom: 1rem;
}

.error-indicator .boom {
  font-size: 1.7rem;
}
</style>
<template>
  <my-button 
      class='button btn-more'
      @click="onMoreClick">More...</my-button>
</template>

<script>
import { useNextPage } from '@/store/controls/hooks/useNextPage';
import MyButton from '@/components/UI/MyButton';

export default {
  name: 'MoreCharacters',
  components: {MyButton},
  setup() {
    const { handleClick: onMoreClick } = useNextPage();

    return { onMoreClick };
  }
}
</script>

<style scoped>
.btn-more {
  height: 50px;
  width: 300px;
  background-color: #F0F0F0; 
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  font-size: 18px;
  line-height: 21px;
}

@media screen and (max-width: 600px) {
  .btn-more {
    width: 100%;
    max-width: 355px;
  }
}
</style>
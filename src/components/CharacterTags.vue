<template>
  <div class='tags'>
    <span
      v-for="[tag, color] in tags"
      :key="tag"
      class="tags__tag"
      :class="`tags__tag_color_${color}`"
    >
        {{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    'tags': {type: Array, required: true}
  }
}
</script>

<style scoped>
.tags {
  display: flex;
  gap: 13px;
  padding: 10px 0;
  box-sizing: border-box;
}

.tags__tag {
  font-family: 'Roboto', 'Karla';
  font-size: 12px;
  line-height: 14px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 2px 9px;
}

.tags__tag_color_blue {
  background: #07D6F2;
}

.tags__tag_color_green {
  background: #73D677;
}

.tags__tag_color_yellow {
  background: #F5DB13;
}

.tags__tag_color_violet {
  background: #C956FF;
}
</style>
<template>
  <div 
    class='attribute'
    :class="{
      'attribute_type_detail': detail,
    }"
  >
    <p class='attribute__text'>
      {{ value }}
    </p>
    <p class='attribute__label'>
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CharacterAttribute',
  props: {
    value: {type: String, required: true},
    label: {type: String, required: true},
    detail: {type: Boolean, default: false},
  }
}
</script>

<style scoped>
.attribute {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.attribute_type_detail {
  background-color: #FDFDFD;
  min-width: 82px;
  border-radius: 8px;
  height: 70px;
}

.attribute__text {
  box-sizing: border-box;
  margin: 6px 0 0; 
  height: 36px;
  width: 36px;
  font-size: 15px;
  line-height: 17px;
  color: #212121;
  border: 3px solid #212121;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.attribute__label {
  margin: 8px 0 4px;
  font-size: 12px;
  line-height: 14px;
  color: #4B4B4B;
  text-align: center;
}
</style>
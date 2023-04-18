<template>
  <div>
    <Multiselect
      :model-value="filter"
      :options="options"
      :searchable="false"
      :allow-empty="false"
      :hide-selected="true"
      :showLabels="false"
      @update:model-value="handleSelect"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { useFilter } from '@/store/controls/hooks/useFilter';

export default {
  name: 'CustomSelect',
  components: {Multiselect},
  setup() {
    const { filter, options, handleSelect } = useFilter();

    return { filter, options, handleSelect };
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">

</style>

<style>
.multiselect {
  width: 135px;
  min-height: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #F2F2F2;
  border: none;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
}

.multiselect__tags {
  text-align: center;
  font-family: Source Sans Pro;
  font-size: 16px;
  line-height: 20px;
  display: block;
  min-height: 24px;
  padding: 1px 40px 1px 0;
  background-color: #F2F2F2;
}

.multiselect__select {
  height: 24px;
  width: 30px;
}

.multiselect__select::before {
  border-width: 4px 4px 0 4px;
}

.multiselect__single {
  margin: 0;
  padding: 0;
  background-color: #F2F2F2;
}

.multiselect__content {
  background-color: #F2F2F2;
}

.multiselect__content-wrapper {
  margin-top: 6px;
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
}
</style>
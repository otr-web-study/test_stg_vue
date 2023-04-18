import { useStore } from 'vuex';
import { computed } from 'vue';

export const useFilter = () => {
  const store = useStore();
  const filter = computed(() => store.state.controls.filter);
  const options = computed(() => store.state.characters.filter);

  const handleSelect = (item) => {
    store.commit('controls/setFilter', item);
  }

  return {
    filter,
    options,
    handleSelect,
  }
}
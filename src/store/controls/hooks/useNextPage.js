import { useStore } from 'vuex';
import { computed } from 'vue';

export const useNextPage = () => {
  const store = useStore();
  const page = computed(() => store.state.controls.page);

  const handleClick = () => {
    store.commit('controls/setPage', parseInt(page.value) + 1);
  }

  return { handleClick };
}
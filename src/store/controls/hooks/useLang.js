import { useStore } from 'vuex';
import { computed } from 'vue';

export const useLang = () => {
  const store = useStore();
  let lang = computed(() => store.state.controls.lang);

  const handleClickLang = () => {
    store.commit('controls/setLang', lang.value === 'en' ? 'wo' : 'en');
  }

  return {
    lang,
    handleClickLang
  };
}
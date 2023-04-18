import { useStore } from 'vuex';
import { computed, ref, onMounted, watch } from 'vue';

export const useCharacters = () => {
  const store = useStore();
  const selectedCard = ref(null);
  const charactersInfo = computed(() => store.getters['characters/selectCharactersInfo']);
  const controls = computed(() => store.getters['controls/selectControls']);
  let lang = computed(() => store.state.controls.lang);
  const charactersData = computed(() => store.getters['characters/selectVisibleCharacters'](controls.value));
  const characters = computed(() => charactersData.value.characters);
  const more = computed(() => charactersData.value.more);

  onMounted(() => {
    if (!charactersInfo.value.qty) {
      store.dispatch('characters/loadCharacters', lang.value);
    }
  });

  const handleSelectCard = (card) => {
    selectedCard.value = card;
  };

  const handleDetailClose = () => {
    selectedCard.value = null;
  }

  watch(lang, () => {
    store.commit('controls/setPage', 1);
    store.commit('characters/clearCharacters');
    store.dispatch('characters/loadCharacters', lang.value);
  })

  return {
    characters,
    selectedCard,
    more,
    handleSelectCard,
    handleDetailClose
  }
};
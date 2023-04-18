<template>
  <li class='card' @click="$emit('card-click', card)">
    <h2 class='card__title'>
      {{ card.name }}
    </h2>
    <div class='card__attributes'>
      <character-attribute 
        :value="card.height"
        :label="getFieldName(lang, 'height')" />
      <character-attribute 
        :value="card.mass"
        :label="getFieldName(lang, 'mass')" />
    </div>
    <CharacterTags :tags="card.tags" />
  </li>
</template>

<script>
import { useTranslateHelpers } from '@/store/characters/hooks/useTranslateHelpers';
import { mapState } from 'vuex';
import CharacterAttribute from '@/components/CharacterAttribute';
import CharacterTags from '@/components/CharacterTags';

export default {
   components: {CharacterAttribute, CharacterTags},
  props: {
    card: {type: Object, required: true}
  },
  emits: {
    'card-click': value => typeof value === 'object',
  },
  computed: {
    ...mapState({
      lang: state => state.controls.lang,
    }),
  },
  setup() {
    const { getFieldName } = useTranslateHelpers();

    return { getFieldName };
  }
}
</script>

<style scoped>
.card {
  background: #F0F0F0;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  width: 100%;
  height: 100%;
  max-width: 355px;
  box-sizing: border-box;
  padding: 5px 26px 12px;
  cursor: pointer;
  transition: .2s;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.card:hover {
  filter: drop-shadow(5px 5px 4px rgba(33, 33, 33, 0.1));
  transform: translate(2px, -2px);
}

.card__title {
  color: #212121;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  margin: 0;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  flex-grow: 1;
}

.card__attributes {
  display: flex;
  padding-top: 12px;
  gap: 10px
}
</style>
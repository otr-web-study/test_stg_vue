<template>
  <div className='characters-list'>
    <ul className='characters-list__list'>
      <character-card 
        v-for="item in characters"
        :key="item.id"
        :card="item"
        @card-click="handleSelectCard"
      />
    </ul>
    <more-characters v-if="more" />
    <character-details 
      v-if="selectedCard"
      :card="selectedCard"
      @close="handleDetailClose"
    />
  </div>
</template>

<script>
import { useCharacters } from '@/store/characters/hooks/useCharacters';
import CharacterCard from '@/components/CharacterCard';
import CharacterDetails from '@/components/CharacterDetails';
import MoreCharacters from '@/components/MoreCharacters';

export default {
  components: {CharacterCard, CharacterDetails, MoreCharacters},
  setup() {
    const {
      characters,
      selectedCard,
      more,
      handleSelectCard,
      handleDetailClose
    } = useCharacters();

    return {
      characters,
      selectedCard,
      more,
      handleSelectCard,
      handleDetailClose
    }
  }
}
</script>

<style scoped>
.characters-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.characters-list__list {
  box-sizing: border-box;
  margin: 0;
  padding: 30px 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 35px;
  row-gap: 45px;
  align-self: stretch;
}

@media screen and (max-width: 1100px) {
  .characters-list__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .characters-list__list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
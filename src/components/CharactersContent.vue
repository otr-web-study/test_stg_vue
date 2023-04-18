<template>
  <Spinner v-if="charactersInfo.status === 'loading'" />
  <section v-else class='characters-content'>
    <Container class='characters-content__container'>
      <div class='characters-content__content'>
        <p class='characters-content__lang'>
          language: {{ lang }}
        </p>
        <h2 class='characters-content__header'>
          {{ charactersInfo.qty }} Peoples for you to choose your favorite
        </h2>
        <div class='characters-content__select-container'>
          <span class='characters-content__select-label'>
            {{ eye_color }}
          </span>
          <custom-select />
        </div>
        <CharactersList />
      </div>
      <div class='characters-content__footer'>
        <my-button 
          class='characters-content__btn-lang'
          @click="onLangClick" />
      </div>
    </Container>
  </section>
</template>

<script>
  import Container from '@/components/Container'
  import Spinner from '@/components/UI/Spinner';
  import MyButton from '@/components/UI/MyButton'
  import CharactersList from '@/components/CharactersList';
  import CustomSelect from '@/components/CustomSelect';
  import { computed } from '@vue/reactivity';
  import { useStore } from 'vuex';
  import { useLang } from '@/store/controls/hooks/useLang';
  import { getFieldName } from '@/utils/apiHelpers';

  export default {
    components: {Spinner, Container, MyButton, CharactersList, CustomSelect},
    setup() {
      const store = useStore();
      const { lang, handleClickLang: onLangClick } = useLang();
      const eye_color = computed(() => getFieldName(lang.value, 'eye_color'))

      return {
        charactersInfo: computed(() => store.getters['characters/selectCharactersInfo']),
        lang,
        onLangClick,
        eye_color,
      }
    }
  }
</script>

<style scoped>
.characters-content {
  min-height: calc(100% - 90px);
}

.characters-content__container {
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.characters-content__lang {
  margin: 0;
  padding: 28px 0;
  text-align: end;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Source Sans Pro';
}

.characters-content__header {
  text-align: center;
  margin: 0;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.characters-content__select-container {
  margin-top: 28px;
  display: flex;
  align-items: center;
}

.characters-content__select-label {
  font-family: 'Source Sans Pro';
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  margin-right: 18px;
}

.characters-content__footer {
  margin: 40px 0;
  height: 60px;
  display: flex;
  justify-content: flex-end;
}

.characters-content__btn-lang {
  position: relative;
  top: -40px;
  right: -60px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #F28F16;
  background-image: url(@/assets/lang.png);
  background-position: center;
  background-size: 70px;
  background-repeat: no-repeat;
}

@media screen and (max-width: 1280px) {
  .characters-content {
    min-height: calc(100% - 80px);
  }

  .characters-content__container {
    min-height: calc(100vh - 80px);
  }

  .characters-content__btn-lang {
    right: -30px;
  }
}

@media screen and (max-width: 768px) {
  .characters-content {
    min-height: calc(100% - 700px);
  }

  .characters-content__container {
    min-height: calc(100vh - 70px);
  }

  .characters-content__btn-lang {
    right: 0;
    top: -10px;
  }
}
</style>
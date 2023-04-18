<template>
  <div class='details'>
    <div class='details__container'>
      <div 
        class="details__avatar-container"
        :class="getGenderClass(lang, card.gender)"
      >
        <CharacterTags :tags="card.tags" />
      </div>
      <div class='details__info-container'>
        <h2 class='details__title'>
          {{ card.name }}
        </h2>
        <div class='details__info'>
          <p class='details__info-text'>
            {{ getFieldName(lang, 'hair_color') }}: {{ card.hair_color }}
          </p>
          <p class='details__info-text'>
            {{ getFieldName(lang, 'skin_color') }}: {{ card.skin_color }}
          </p>
          <p class='details__info-text'>
            {{ getFieldName(lang, 'eye_color') }}: {{ card.eye_color }}
          </p>
        </div>
        <div class='details__attributes'>
          <CharacterAttribute 
            :value="card.height"
            :label="getFieldName(lang, 'height')"
            detail />
          <CharacterAttribute 
            :value="card.mass"
            :label="getFieldName(lang, 'mass')"
            detail />
        </div>
      </div>
      <button class='details__btn-close' @click="$emit('close')"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { useTranslateHelpers } from '@/store/characters/hooks/useTranslateHelpers';
import CharacterAttribute from '@/components/CharacterAttribute';
import CharacterTags from './CharacterTags';

export default {
  name: 'CharacterDetails',
  components: {CharacterAttribute, CharacterTags},
  props: {
    card: {type: Object, required: true},
  },
  emits: {
    'close': null,
  },
  computed: {
    ...mapState({
      lang: state => state.controls.lang,
    }),
  },
  setup() {
    const { getFieldName, getGender } = useTranslateHelpers();

    const getGenderClass = (lang, gender) => {
      const genderClasses = {
        male: 'details__avatar-container_type_male',
        female: 'details__avatar-container_type_female',
        hermaphrodite: 'details__avatar-container_type_hermaphrodite',
        'n/a': 'details__avatar-container_type_hermaphrodite'
      }

      return genderClasses[getGender(lang, gender)];
    }

    return { getFieldName, getGenderClass };
  }
}
</script>

<style scoped>
.details {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(33,33,33,.5);
}

.details__container {
  background: linear-gradient(180deg, #17002F 42.19%, #1F2A63 100%);
  border-radius: 16px;
  max-width: 796px;
  width: 100%;
  margin: 0 10px;
  display: flex;
  position: relative;
}

.details__avatar-container {
  width: 45%;
  background-color: #1F2A63;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 14px 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
  border-radius: 16px;
}

.details__avatar-container_type_hermaphrodite {
  background-image: url(../assets/alien_avatar.png);
}

.details__avatar-container_type_female {
  background-image: url(../assets/female_avatar.png);
}

.details__avatar-container_type_male {
  background-image: url(../assets/male_avatar.png);
}

.details__info-container {
  width: 55%;
  box-sizing: border-box;
  padding: 30px 14px 25px;
}

.details__title {
  color: #FDFDFD;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  margin: 0;
}

.details__info {
  margin-top: 27px;
  border-radius: 8px;
  background-color: #FDFDFD;
  box-sizing: border-box;
  padding: 16px 23px;
  width: 70%;
}

.details__info-text {
  margin: 0;
  font-size: 16px;
  line-height: 19px;
}

.details__attributes {
  margin-top: 77px;
  display: flex;
  gap: 23px;
}

.details__btn-close {
  width: 32px;
  height: 32px;
  position: absolute;
  top: -49px;
  right: 0;
  background-color: transparent;
  border: none;
  outline: none;
  transition: .2s;
}

.details__btn-close:hover {
  opacity: .8;
}

.details__btn-close:before {
  position: absolute;
  content: '';
  height: 32px;
  border: 3px solid #212121;
  top: 0;
  transform: rotate(45deg);
  border-radius: 3px;
}

.details__btn-close:after {
  position: absolute;
  content: '';
  height: 32px;
  border: 3px solid #212121;
  top: 0;
  transform: rotate(-45deg);
  border-radius: 3px;
}

@media screen and (max-width: 768px) {
  .details__container {
    flex-direction: column;
    max-width: 400px;
  }

  .details__avatar-container {
    width: 100%;
    min-height: 300px;
  }

  .details__info-container {
    width: 100%;
  }
}
</style>
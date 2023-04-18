import * as api from '@/config';
import { getServiceFieldName, transformCharacter } from '@/utils/apiHelpers';

export const loadCharacters = async ({commit}, lang) => {
  const url = lang === 'en' ? api.ALL_PEOPLE : api.ALL_PEOPLE_WOOKIEE_LANG;

  let res = [];
  let page = 1;
  commit('setCharactersPending');
  while (page) {
    //handle error on api side, next pages respond with error: 4, 6, 7
    //let's omit it
    if (lang !== 'en' && [4, 6, 7].includes(page)) {
      page++;
      continue;
    }

    try {
      const response = await fetch(`${url}page=${page}`);

      if (! response.ok) {
        commit('setCharactersRejected',`Couldn't fetch ${url}, received ${response.status}`);
        return;
      }
      const text = await response.text();
      const data = JSON.parse(text.replaceAll(getServiceFieldName(lang, 'null'), 'null'));

      res = [
        ...res, 
        ...data[getServiceFieldName(lang, 'results')].map(item => transformCharacter(lang, item)),
      ];
      page++;
      
      if (!data[getServiceFieldName(lang, 'next')]) {
        page = 0;
      }
    } catch (error) {
      commit('setCharactersRejected', error.message);
      return;
    }
    // page = 0;
  }
  const filter = Array.from(new Set(res.map(item => item.filterField)));
  commit('setCharactersFulfilled', [res, filter]);
}
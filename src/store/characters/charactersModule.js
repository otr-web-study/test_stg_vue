import { loadCharacters } from './charactersActions';

export const charactersModule = {
  namespaced: true,
  state: () => ({
    filter: ['All'],
    status: 'idle',
    error: null,
    characters: [],
  }),
  mutations: {
    clearCharacters: (state) => {
      state.filter = [];
      state.status = 'idle';
      state.error = null;
      state.characters = [];
    },
    setCharactersPending: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    setCharactersRejected: (state, payload) => {
      state.status = 'rejected';
      state.error = payload || 'Can\'t load data';
    },
    setCharactersFulfilled: (state, [characters, filter]) => {
      state.status = 'fulfilled';
      state.filter = ['All', ...filter];
      state.characters = characters;
    }
  },
  getters: {
    selectById: (state) => (id) => state.characters.find(item => item.id === id),
    selectCharactersInfo: (state) => ({
      status: state.status,
      error: state.error,
      qty: state.characters.length,
    }),
    selectVisibleCharacters: (state) => ({ filter = 'All', page = 1, countPerPage = 9 }) => {
      const filtered = state.characters.filter(
        character => (filter === 'All' || character.filterField === filter)
      );
    
      return {
        characters: filtered.slice(0, page * countPerPage),
        more: filtered.length > page * countPerPage,
      }
    },
  },
  actions: { loadCharacters },
}
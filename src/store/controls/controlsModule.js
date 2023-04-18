export const controlsModule = {
  namespaced: true,
  state: () => ({
    filter: 'All',
    page: '1',
    lang: 'en',
    countPerPage: 9,
  }),
  getters: {
    selectControls: (state) => ({
      filter: state.filter,
      page: state.page,
      lang: state.lang,
      countPerPage: state.countPerPage,
    }),
  },
  mutations: {
    setFilter: (state, payload) => {
      state.filter = payload;
    },
    setPage: (state, payload) => {
      state.page = payload;
    },
    setLang: (state, payload) => {
      state.lang = payload;
    }
  },
  actions: {

  },
}
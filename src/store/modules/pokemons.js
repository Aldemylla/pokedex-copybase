import axios from 'axios';

const mutations = {
  SET_POKEMONS: 'SET_POKEMONS',
  SET_REQUEST_PAGES: 'SET_REQUEST_PAGES',
  SET_ERROR: 'SET_ERROR'
};
const { SET_POKEMONS, SET_REQUEST_PAGES, SET_ERROR } = mutations;
const initialState = {
  search: '',
  filteredPokemon: null,
  pokemons: {
    count: 0,
    results: null
  },
  request: {
    pages: {
      next: '',
      previous: ''
    },
    limit: 8,
    isError: false
  }
};

async function getPokemons(url, commit) {
  await axios
    .get(url)
    .then((response) => {
      const { data } = response;
      const { count, results, next, previous } = data;

      const treatedPokemons = {
        count: count,
        results: results
      };

      const treatedRequestPages = {
        next: next,
        previous: previous
      };

      commit(SET_POKEMONS, treatedPokemons);
      commit(SET_REQUEST_PAGES, treatedRequestPages);
      commit(SET_ERROR, false);
    })
    .catch(() => {
      commit(SET_ERROR, true);
    });
}

export default {
  state: initialState,

  getters: {
    getFilteredPokemon(state) {
      return state.filteredPokemon;
    },

    getPokemons(state) {
      return state.pokemons;
    },

    getRequestPages(state) {
      return state.request.pages;
    },

    getError(state) {
      return state.request.isError;
    }
  },

  mutations: {
    [SET_POKEMONS](state, value) {
      state.pokemons = value;
    },
    [SET_REQUEST_PAGES](state, value) {
      state.request.pages = value;
    },
    [SET_ERROR](state, value) {
      state.request.isError = value;
    }
  },

  actions: {
    getAllPokemons({ commit, state }) {
      const URI = 'https://pokeapi.co/api/v2/pokemon';

      getPokemons(`${URI}?offset=0&limit=${state.request.limit}`, commit);
    },

    getNextPokemons({ commit, state }) {
      getPokemons(state.request.pages.next, commit);
    },

    getPreviousPokemons({ commit, state }) {
      getPokemons(state.request.pages.previous, commit);
    }
  }
};

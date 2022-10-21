import axios from 'axios';

const mutations = {
  SET_POKEMONS: 'SET_POKEMONS',
  SET_POKEMONS_COUNT: 'SET_POKEMONS_COUNT',
  SET_REQUEST_PAGES: 'SET_REQUEST_PAGES',
  SET_ERROR: 'SET_ERROR'
};
const { SET_POKEMONS, SET_POKEMONS_COUNT, SET_REQUEST_PAGES, SET_ERROR } =
  mutations;
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
  let pokemonEndpoints = [];
  let pokemons = [];

  await axios
    .get(url)
    .then((response) => {
      const { data } = response;
      const { count, results, next, previous } = data;

      const treatedRequestPages = {
        next: next,
        previous: previous
      };

      results.forEach((pokemon) => {
        pokemonEndpoints.push(pokemon.url);
      });

      commit(SET_POKEMONS_COUNT, count);
      commit(SET_REQUEST_PAGES, treatedRequestPages);
      commit(SET_ERROR, false);
    })
    .catch(() => {
      commit(SET_ERROR, true);
    });

  await axios
    /*
    
      "axios.all" will be used because the (previous) request from the pokemon 
      list doesn't return sprites or ids, only the name;

      I don't believe this is a good practice, but I did it because of API limitations.

    */
    .all(pokemonEndpoints.map((endpoint) => axios.get(endpoint)))
    .then((allResponses) => {
      allResponses.forEach((response) => pokemons.push(response.data));

      commit(SET_POKEMONS, pokemons);
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

    getPokemonsCount(state) {
      return state.pokemons.count;
    },

    getPokemons(state) {
      return state.pokemons.results;
    },

    getRequestPages(state) {
      return state.request.pages;
    },

    getError(state) {
      return state.request.isError;
    }
  },

  mutations: {
    [SET_POKEMONS_COUNT](state, value) {
      state.pokemons.count = value;
    },
    [SET_POKEMONS](state, value) {
      state.pokemons.results = value;
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

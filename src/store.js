import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const state = {
  token: null,

  selected1: null,
  selected2: null,
  lastChanged: null,

  move1: null,
  move2: null,
  lastMoveChanged: null
};

const mutations = {
  ajouterPerso(state, nom) {
    if (state.selected1 == null) {
      state.selected1 = nom;
      state.lastChanged = 1;
    } else {
      if (state.lastChanged === 1) {
        state.selected2 = nom;
        state.lastChanged = 2;
      } else {
        state.selected1 = nom;
        state.lastChanged = 1;
      }
    }
  },

  ajouterMove(state, nom) {
    if (state.move1 == null) {
      state.move1 = nom;
      state.lastMoveChanged = 1;
    } else {
      if (state.lastMoveChanged === 1) {
        state.move2 = nom;
        state.lastMoveChanged = 2;
      } else {
        state.move1 = nom;
        state.lastMoveChanged = 1;
      }
    }
  },

  setToken(state, token) {
    state.token = token;
  }
};

const actions = {
  async fetchPersonnage(context, nom) {
    let response = await axios.get(
      "https://nodeonlinerepo-d2fbjmbtp-denoxm.vercel.app/getProduit/" + nom
    );
    context.commit("ajouterPerso", response.data[0]);
  },
  async fetchMove(context, nom) {
    context.commit("ajouterMove", nom);
  }
};

const getters = {
  getSelected1(state) {
    return state.selected1;
  },
  getSelected2(state) {
    return state.selected2;
  },
  getMove1(state) {
    return state.move1;
  },
  getMove2(state) {
    return state.move2;
  },
  isLogged(state) {
    return !!state.token;
  },
  getToken(state) {
    return state.token;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

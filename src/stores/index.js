import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {};
const getters = {};
const mutations = {};
const actions = {};
const stores = {};

const modules = Object.entries(stores).reduce((_modules, [name, store]) => {
  const modulesTmp = _modules;

  modulesTmp[name] = {
    namespaced: true,
    ...store,
  };
  return modulesTmp;
}, {});

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production',
});

export default store;

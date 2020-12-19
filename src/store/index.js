import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: null,
    movie: null,
  },
  getters: {
    keyword: (state) => state.keyword,
    allMovies: (state) => state.movies,
    movie: (state) => state.movie,
  },
  //vuexの中の値を変更するときはmutaionsを使う
  mutations: {
    updateKeyword(state, newKeyword) {
      state.keyword = newKeyword;
    },
    updateMovie(state, newMovie) {
      state.movie = newMovie;
    },
  },
  // 非同期の処理はactionで書く
  actions: {
    updateKeyword({ commit }, newKeyword) {
      commit("updateKeyword", newKeyword);
    },
    updateMovie({ commit }, newMovie) {
      commit("updateMovie", newMovie);
    },
  },
});

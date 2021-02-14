import { createStore } from "vuex";
import data from "../assets/data.json";

export default createStore({
  state: {
    hindiMovie: [],
    englishMovie: [],
  },
  mutations: {
    updateHindiMovie: (state, data) => {
      console.log("data ", data);
      state.hindiMovie = data;
    },
    updateEnglishMovie: (state, data) => {
      state.englishMovie = data;
    },
    addHindiMovie: (state, data) => {
      state.hindiMovie.push(data);
    },
    addEnglishMovie: (state, data) => {
      state.englishMovie.push(data);
    },
  },
  getters: {
    hindiMovie: (state) => state.hindiMovie,
    englishMovie: (state) => state.englishMovie,
  },
  actions: {
    getHindiMovie: async ({ commit }, param) => {
      console.log("called");
      commit("updateHindiMovie", []);
      setTimeout(() => {
        let movies = data.hindi;
        console.log(movies);
        commit("updateHindiMovie", movies);
      }, 1000);
    },
    getEnglishMovie: async ({ commit }, param) => {
      commit("updateEnglishMovie", []);
      setTimeout(() => {
        let movies = data.english;
        commit("updateEnglishMovie", movies);
      }, 1000);
    },
  },
  modules: {},
});

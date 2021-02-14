<template>
  <div class="home">
    <movies-root :msg="getText" :movies="allMovies" />
  </div>
</template>

<script>
// @ is an alias to /src
import MoviesRoot from "@/components/MoviesRoot.vue";
import store from "../store";
import router from "../router";

export default {
  name: "Home",
  components: {
    MoviesRoot,
  },
  data() {
    return {
      path: "",
    };
  },
  async mounted() {
    this.path = this.$route.path;
    if (Object.keys(store.getters.hindiMovie).length === 0) {
      await store.dispatch("getHindiMovie", {});
    }
  },
  computed: {
    allMovies() {
      return [...store.getters.hindiMovie];
    },
    getText() {
      if (this.path === "/all") {
        return "All Movies";
      } else if (this.path === "/hindi") {
        return "Hindi Movies";
      } else {
        return "English Movies";
      }
    },
  },
};
</script>

<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <div class="movie-container">
      <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import Movie from "../views/Movie";

export default {
  name: "MoviesRoot",
  props: {
    msg: String,
    movies: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Movie,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
}

.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

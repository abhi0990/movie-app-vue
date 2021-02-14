<template>
  <div class="container">
    <img :src="movie.img" alt="Pulpit rock" class="img-width" height="500" />
    <div class="desc-container">
      <label><span class="bold">Name - </span> {{ movie.name }} </label>
      <label><span class="bold"> Rating - </span>{{ movie.rating }}/5 </label>
    </div>
  </div>
</template>
<script>
import store from "../store";
import router from "../router";
export default {
  mounted() {
    let allMovie = [...store.getters.hindiMovie, ...store.getters.englishMovie];
    let id = this.$route.params.id;
    this.movie = allMovie.filter((ele) => ele.id == id)[0];
  },
  data() {
    return {
      movie: {},
    };
  },
};
</script>

<style scoped>
.container {
  transition: box-shadow 0.3s;
  width: 95%;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  margin: 10px;
  box-shadow: 5px 5px 5px rgba(94, 197, 180, 0.37);
  display: flex;
}
.desc-container {
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: flex-start;
}

.bold {
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
}
</style>

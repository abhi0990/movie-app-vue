<template>
  <div class="container" @click="movieDetails(movie.id)">
    <img :src="movie.img" alt="Pulpit rock" class="img-width" height="213" />
    <div class="desc-container">
      <label><span class="bold">Name - </span> {{ movie.name }} </label>
      <label><span class="bold"> Rating - </span>{{ movie.rating }}/5 </label>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    movieDetails(id) {
      router.push({
        name: "details",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
<style scoped>
.container {
  transition: box-shadow 0.3s;
  width: 15%;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  margin: 10px;
  box-shadow: 5px 5px 5px rgba(94, 197, 180, 0.37);
}
.container:hover {
  box-shadow: 10px 10px 5px rgba(94, 197, 180, 0.37);
}

.desc-container {
  display: flex;
  flex-direction: column;
}

.img-width {
  min-width: -webkit-fill-available;
}
.bold {
  font-weight: bold;
}
</style>

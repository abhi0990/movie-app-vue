<template>
  <h1>Add New Movie</h1>
  <div class="container">
    <form class="form-container" v-on:submit.prevent="search">
      <div class="row">
        <span class="label"> Name - </span>
        <input type="text" v-model="form.name" />
      </div>
      <div class="row">
        <span class="label"> Rating - </span>

        <input type="text" v-model="form.rating" />
      </div>
      <div class="row">
        <span class="label"> Image - </span>

        <input type="text" v-model="form.img" />
      </div>
      <div class="row">
        <span class="label"> Movie Type - </span>

        <select style="width: 50%" v-model="form.type">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div class="row">
        <span class="label"> Description - </span>

        <input type="text" v-model="form.desc" />
      </div>
      <div class="row">
        <button class="btn" @click="addMovie">Add</button>
        <button class="btn" @click="reset">Reset</button>
      </div>
    </form>
  </div>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      form: {
        name: "",
        rating: "",
        img: "",
        desc: "",
        type: "",
      },
    };
  },
  async mounted() {
    this.path = this.$route.path;
    if (Object.keys(store.getters.hindiMovie).length === 0) {
      await store.dispatch("getHindiMovie", {});
      await store.dispatch("getEnglishMovie", {});
    }
  },
  methods: {
    addMovie() {
      let data = {
        name: this.form.name,
        img: this.form.img,
        rating: this.form.rating,
      };
      if (this.form.type === "english") {
        data.id =
          store.getters.englishMovie[store.getters.englishMovie.length - 1].id +
          1;
        store.commit("addEnglishMovie", data);
      } else {
        data.id =
          store.getters.hindiMovie[store.getters.hindiMovie.length - 1].id + 1;
        store.commit("addHindiMovie", data);
      }
      alert("Movie Added Successfully !!!");
      this.reset();
    },
    reset() {
      this.form = {
        name: "",
        rating: "",
        img: "",
        desc: "",
        type: "",
      };
    },
  },
};
</script>
<style scoped>
.container {
  transition: box-shadow 0.3s;
  width: 50%;

  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  margin: 10px;
  box-shadow: 5px 5px 5px rgba(94, 197, 180, 0.37);
  justify-content: center;
  margin: auto;
}
.form-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  width: 50%;
}
.label {
  font-weight: bold;
  padding-right: 50px;
}

.btn {
  width: 100px;

  border-radius: 2px;
  border: 1px solid transparent;
  color: #2c3e50;
  font-size: 13px;
  font-weight: bold;
  padding: 8px 16px;
  text-transform: uppercase;
  text-decoration: none;
}
.btn:hover {
  background-color: #42b983;
}
</style>

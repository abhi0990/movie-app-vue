<template>
  <h1>Movie App</h1>
  <div id="nav">
    <router-link to="/all">Home</router-link> |
    <router-link to="/create">Create</router-link>
  </div>
  <div class="dasboard-container">
    <div class="side-nav-container">
      <ul>
        <li>
          <router-link to="/all">ALL</router-link>
        </li>
        <li><router-link to="/english">English</router-link></li>
        <li><router-link to="/hindi">Hindi</router-link></li>
      </ul>
    </div>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: rgb(189, 241, 224);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.dasboard-container {
  display: flex;
}

.side-nav-container {
  width: 10%;
  background-color: rgb(107, 168, 148);
  font-weight: bold;
  color: #2c3e50;
}
.side-nav-container a {
  color: #2c3e50;
}

.side-nav-container a.router-link-exact-active {
  color: #046439;
}
li {
  list-style: none;
  text-align: left;
  padding: 12px;
}

.main-container {
  width: 90%;
}
</style>

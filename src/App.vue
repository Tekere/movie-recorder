<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <a href="/">MOVIE RECORDER</a>
      </el-header>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      posts: [
        { id: 1, title: "test1", body: "body1" },
        { id: 2, title: "test2", body: "body2" },
        { id: 3, title: "test3", body: "body3" },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-family: "Noto Sans JP", sans-serif;
  color: #2c3e50;
  font-size: 16px;
  margin: -8px;
}
.header {
  background-color: #414141;
  font-size: 2rem;
  padding: 10px;
}
.header a {
  text-decoration: none;
  color: white;
}
</style>

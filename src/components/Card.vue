<template>
  <el-col class="card" :span="6">
    <router-link :to="'/movie/' + Number(mv.id)" class="box">
      <div class="card-image">
        <figure class="image">
          <img
            v-bind:src="
              'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +
                mv.poster_path
            "
            alt="Image"
          />
        </figure>
      </div>
      <div class="card-content content">
        <h6>{{ mv.title }}</h6>
      </div>
    </router-link>
  </el-col>
</template>

<script>
export default {
  name: "card",
  props: ["mv"],
};
</script>
<style scoped>
.el-col {
  padding: 10px;
}
.box {
  display: block;
  text-decoration: none;
  border-radius: 5px;
  padding: 5px;
  height: 300px;
  background-color: #414141;
  overflow: hidden;
  color: white;
}
.box .card-image img {
  display: block;
  margin: 0 auto;
  width: 100%;
}
.box .card-content h6 {
  margin: 5px 0;
  text-align: center;
}
</style>

<template>
  <el-main>
    <div class="search-box">
      <el-input
        type="text"
        v-model="keyword"
        @input="onClick"
        placeholder="気になる映画を検索してみよう"
        class="input-with-select"
      >
        <el-button
          @click="onClick"
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
    </div>
    <div v-show="keyword">
      <el-row :gutter="20">
        <card class="grid-content" v-for="mv in result" :key="mv.id" :mv="mv" />
      </el-row>
    </div>
    <img
      v-show="!keyword"
      src="../../public/images/undraw_movie_night_fldd.png"
      alt=""
    />
  </el-main>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      result: [],
    };
  },
  computed: {
    keyword: {
      get() {
        return this.$store.getters.keyword;
      },
      set(value) {
        this.$store.dispatch("updateKeyword", value);
      },
    },
    ...mapGetters(["movie"]),
  },
  methods: {
    onClick: function() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: this.keyword,
            page: 1,
            language: "ja-JA",
            api_key: "373b2c20017957396f1bf56eddb7a000",
          },
        })
        .then((response) => {
          let data = response.data.results;
          this.result = data;
          console.log(data);
          return;
        })
        .catch((err) => {
          console.log("err:", err);
          return;
        });
    },
  },
};
</script>

<style scoped>
.el-main {
  padding: 20px 40px;
}
.search-box {
  margin: 0 auto;
  margin-top: 15px;
  width: 60%;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}
.el-row {
  margin: 20px 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

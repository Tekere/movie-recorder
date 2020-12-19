<template>
  <el-main>
    <div v-for="mv in result" :key="mv.id">
      <div class="head">
        <h1>{{ mv.title }}</h1>
        <el-button
          @click="createFavorite"
          type="warning"
          icon="el-icon-star-off"
          round
          >お気に入り</el-button
        >
      </div>
      <img
        :src="
          'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + mv.poster_path
        "
        alt="image"
      />
      <h2>のあらすじ</h2>
      <div class="description">
        {{ mv.overview }}
      </div>
      <h2>{{ mv.title }}の公開年</h2>
      <div>{{ mv.release_date }}</div>
    </div>
  </el-main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      result: [],
    };
  },
  watch: {
    $route() {
      this.display();
    },
  },

  props: ["id"],
  created() {
    this.display();
  },
  methods: {
    createFavorite() {
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/vue-http-75712/databases/(default)/documents/favorites",
          {
            fields: {
              id: {
                stringValue: String(this.result[0].id),
              },
              title: {
                stringValue: this.result[0].title,
              },
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    display() {
      this.result = [];
      axios
        .get("https://api.themoviedb.org/3/movie/" + this.id, {
          params: {
            language: "ja-JA",
            api_key: "373b2c20017957396f1bf56eddb7a000",
          },
        })
        .then((response) => {
          let data = response.data;
          this.result.push(data);
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
.head {
  position: relative;
}
h1 {
  font-size: 32px;
}
.el-button {
  position: absolute;
  top: 0;
  right: 0;
}
img {
  display: block;
  margin: 0 auto;
}
.description {
  word-break: break-all;
  white-space: pre-wrap;
}
</style>

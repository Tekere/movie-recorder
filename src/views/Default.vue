<template>
  <el-container>
    <el-aside style="width:200px">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">お気に入り</template>
          <el-menu-item-group>
            <el-menu-item
              v-for="mv in favorites"
              :key="mv.fields.id.stringValue"
              ><router-link
                :to="{
                  name: 'movie-detail',
                  params: { id: Number(mv.fields.id.stringValue) },
                }"
              >
                {{ mv.fields.title.stringValue }}
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <router-view />
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      favorites: [],
    };
  },
  computed: {
    //
  },
  created() {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/vue-http-75712/databases/(default)/documents/favorites"
      )
      .then((response) => {
        console.log(response.data.documents);
        this.favorites = response.data.documents;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #1f6ed4;
}

.el-menu-item {
  padding: 0 !important;
}
.el-menu-item a {
  display: block;
  padding: 0 40px;
}
.el-button {
  margin: 10px 0 0 20px;
}
</style>

<template>
  <div id="firebase">
    <nav class="navbar navbar-dark bg-primary">
      <a href="/" class="navbar-brand">Vuejs Firebase Database - Nutrisoft</a>
    </nav>

    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <h3>Add a new WebSite</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addWebSite">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newWebSite.name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newWebSite.author"
                    placeholder="Author"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="newWebSite.url"
                    placeholder="URL"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-8 text-center">
          <img alt="Vue logo" src="../assets/logo.png" />
          <div class="card">
            <div class="card-header">
              <h3>Websites List</h3>
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <!-- <th>Operations</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="w in websites" :key="w.url">
                    <td>
                      <a :href="w.url" target="_blank">{{ w.name }}</a>
                    </td>
                    <td>
                      {{ w.author }}
                    </td>
                    <!-- <td>
                      <button class="btn btn-danger">Delete</button>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";
// let db = firebase.database();
// console.log({ db });
// let websitesRef = db.ref("websites");
// console.log(websitesRef.toJSON());
// Sigue en Minuto 31 del video
let db = firebase.firestore();
export default {
  name: "FireBase",
  data() {
    return {
      newWebSite: {
        name: "",
        author: "",
        url: "",
      },
      websites: [],
    };
  },
  firestore() {
    return {
      websites: db.collection("websites").orderBy("name"),
    };
  },
  methods: {
    addWebSite() {
      console.log(this.newWebSite);
      this.newWebSite.url = "http://" + this.newWebSite.url;
      db.collection("websites").add(this.newWebSite);
      this.newWebSite.name = "";
      this.newWebSite.author = "";
      this.newWebSite.url = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>

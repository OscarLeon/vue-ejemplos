<template>
  <div id="tombola-study">
    <div class="container">
      <div class="row mt-4 jumbotron">
        <div class="mb-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h1 class="text-center">Tombola del Estudio 🤓</h1>
        </div>
        <div
          class="mb-2 text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        >
          <button type="button" @click="pickUpLanguage" class="mw-100">
            Clickeame para empezar tu desafio diario
          </button>
        </div>
        <div class="text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h3>{{ languageDefault }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import langList from "../mocks/languages";
export default {
  name: "TombolaStudy",
  data() {
    return {
      languageDefault: "Esperando una nueva fortuna",
      languagesList: langList,
    };
  },
  methods: {
    randomLanguage() {
      return this.languagesList[
        Math.floor(Math.random() * this.languagesList.length)
      ].name;
    },
    pickUpLanguage() {
      setTimeout(() => {
        this.languageDefault = this.randomLanguage();
      }, 1000);
    },
  },
};
</script>

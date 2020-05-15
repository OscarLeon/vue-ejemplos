<template>
  <div id="app">
    <div id="nav">
      <router-link class="go-home" to="/">Inicio</router-link> |
      <router-link class="go-todo-list" to="/todo-list"
        >Lista de Tareas</router-link
      >
      |
      <router-link class="go-tombola-study" to="/tombola-study"
        >Tombola del Estudio</router-link
      >
      |
      <router-link class="go-nutrisoft" to="/nutrisoft">NutriSoft</router-link>
      |
      <router-link class="go-firebase" to="/firebase">Firebase</router-link>
      |
      <router-link class="go-about" to="/about">Acerca de</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>

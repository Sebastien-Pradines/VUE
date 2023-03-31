<template>
  <div id="app">
    <v-app-bar class="nav">
      <v-toolbar-title>LeSite</v-toolbar-title>
      <router-link to="/">
        <v-btn id="nav-button">Home</v-btn>
      </router-link>
      <router-link to="/personnages">
        <v-btn id="nav-button">Personnages</v-btn>
      </router-link>
      <router-link v-if="isLogged" to="/modification">
        <v-btn id="nav-button">Modification</v-btn>
      </router-link>
      <router-link v-if="!isLogged" to="/connexion">
        <v-btn id="nav-button">Connexion</v-btn>
      </router-link>
      <router-link v-if="!isLogged" to="/inscription">
        <v-btn id="nav-button">Inscription</v-btn>
      </router-link>
      <v-btn v-if="isLogged" @click="deconnexion()" id="nav-button"
        >Deconnexion</v-btn
      >
    </v-app-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>


<style lang="scss" rel="stylesheet/scss">
#nav-button {
  margin-left: 5px;
  background-color: #547d77;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

body {
  background-color: #8cd0c6;
}

.v-toolbar__content {
  background-color: #62928b;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      deconnexion() {
        this.$store.commit("setToken", null);
      },
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
};
</script>  
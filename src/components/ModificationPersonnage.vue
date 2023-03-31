<template>
  <div id="main">
    <div id="liste">
      <PersonnageDeletable
        v-for="personnage in this.personnages"
        :nom="personnage.nom"
        :img="personnage.img"
        :moves="personnage.moves"
        :key="personnage.nom"
      />
      <v-tooltip v-if="isLogged" bottom>
        <template v-slot:activator="{ on, attrs }">
          <div id="perso">
            <router-link to="/nouveau">
              <v-img
                src="https://www.pngmart.com/files/21/Add-Button-PNG-Isolated-HD.png"
                v-bind="attrs"
                v-on="on"
                contain
                height="100px"
                width="100px"
              />
            </router-link>
          </div>
        </template>

        <span> Ajouter </span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import PersonnageDeletable from "./PersonnageDeletable";

import axios from "axios";

export default {
  components: {
    PersonnageDeletable,
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  data() {
    return {
      personnages: {},
    };
  },
  async mounted() {
    let response = await axios.get(
      "https://nodeonlinerepo-denoxm.vercel.app/lstProduit"
    );
    this.personnages = Object.values(response.data);
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#main {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
}

#liste {
  display: flex;
  overflow-x: auto;
  scrollbar-color: #0A4C95 #C2D2E4;
}

#perso {
  margin-top: 25px;
}
</style>
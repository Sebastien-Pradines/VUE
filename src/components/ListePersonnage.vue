<template>
  <div id="main">
    <div id="liste">
      <Personnage
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
    <SelectionPersonnage id="selection" />
    <div>
      <ListeMove />
    </div>
  </div>
</template>

<script>
import Personnage from "./Personnage";
import ListeMove from "./ListeMove";
import SelectionPersonnage from "./SelectionPersonnage";

import axios from "axios";

export default {
  components: {
    Personnage,
    SelectionPersonnage,
    ListeMove,
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
  margin: 15px;
}

#liste {
  display: flex;
  overflow-x: auto;
  scrollbar-color: #0A4C95 #C2D2E4;
  background-color: #70a69e;
  border-top-left-radius: 6px;
  border-tooltip-right-radius: 6px;
}

#perso {
  margin-top: 10px;
}

#selection {
  background-color: #70a69e;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
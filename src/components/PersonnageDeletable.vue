<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <div id="perso" @click="selectPerso">
          <v-img
            :src="img"
            v-bind="attrs"
            v-on="on"
            contain
            height="100px"
            width="100px"
          />
        </div>
      </template>
      <span>{{ nom }}</span>
    </v-tooltip>
    <v-btn @click="supprimer()">Supprimer</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["nom", "img"],
  data() {
    return {
      supprimer() {
        var data = JSON.stringify({
          nom: this.nom,
        });
        const jwt = `Bearer ${this.$store.getters.getToken}`;
        let config = {
          method: "delete",
          url: "https://nodeonlinerepo-denoxm.vercel.app/delProduit",
          headers: {
            Authorization: jwt,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        this.$el.parentNode.removeChild(this.$el);
      },
    };
  },
  methods: {
    selectPerso() {
      this.$store.dispatch("fetchPersonnage", this.nom);
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#perso {
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  cursor: pointer;
}
img {
  height: 100px;
  width: 100px;
}
</style>

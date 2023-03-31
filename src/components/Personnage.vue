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
  </div>
</template>

<script>
export default {
  props: ["nom", "img"],
  methods: {
    selectPerso() {
      this.$store.dispatch("fetchPersonnage", this.nom);
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#perso {
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

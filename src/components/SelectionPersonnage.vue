<template>
  <div id="versus">
    <v-container id="selection">
      <img :src="nomPerso1.img" height="100px" width="100px" />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png"
        height="100px"
        width="100px"
      />
      <img :src="nomPerso2.img" width="100px" height="100px" />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultPerso: {
        nom: "Pas selectionné",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
      },
    };
  },
  computed: {
    nomPerso1() {
      return this.$store.getters.getSelected1 === null
        ? this.defaultPerso
        : this.$store.getters.getSelected1;
    },
    nomPerso2() {
      return this.$store.getters.getSelected2 === null
        ? this.defaultPerso
        : this.$store.getters.getSelected2;
    },
  },
  created() {
    this.data = {
      perso1: this.nomPerso1,
      perso2: this.nomPerso2,
    };
  },
  async mounted() {},
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#selection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
}

#versus {
  background-color: #38534f;
}
</style>
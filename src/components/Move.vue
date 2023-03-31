<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <div id="perso" @click="selectMove">
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
</template>

<script>
export default {
  props: [
    "nom",
    "input",
    "img",
    "damage",
    "guard",
    "startup",
    "active",
    "recovery",
    "hit",
    "block",
    "level",
    "counter",
    "scaling",
    "riscgain",
    "invincibility",
  ],
  methods: {
    selectMove() {
      this.$store.dispatch("fetchMove", this);
    },
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
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#perso {
  display: flex;
  flex-direction: column;
  width: 120px;
  border: 1px solid #38534f;
  border-radius: 4px;
  height: 130px;
}
</style>
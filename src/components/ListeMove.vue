<template>
  <div id="liste-move">
    <div v-if="perso1" id="moves">
      <Move
        v-for="move in perso1.moves"
        :nom="move.name"
        :input="move.input"
        :img="move.move_img"
        :damage="move.damage"
        :guard="move.guard"
        :startup="move.startup"
        :active="move.active"
        :recovery="move.recovery"
        :hit="move.hit"
        :block="move.block"
        :level="move.level"
        :counter="move.counter"
        :scaling="move.scaling"
        :riscgain="move.riscgain"
        :invincibility="move.invincibility"
        :key="move.input"
      />
    </div>
    <SelectionMove />
    <div v-if="perso2" id="moves">
      <Move
        v-for="move in perso2.moves"
        :nom="move.name"
        :input="move.input"
        :img="move.move_img"
        :damage="move.damage"
        :guard="move.guard"
        :startup="move.startup"
        :active="move.active"
        :recovery="move.recovery"
        :hit="move.hit"
        :block="move.block"
        :level="move.level"
        :counter="move.counter"
        :scaling="move.scaling"
        :riscgain="move.riscgain"
        :invincibility="move.invincibility"
        :key="move.input"
      />
    </div>
  </div>
</template>

<script>
import Move from "./Move";
import SelectionMove from "./SelectionMove";

export default {
  components: {
    Move,
    SelectionMove,
  },
  computed: {
    perso1() {
      return this.$store.getters.getSelected1 === null
        ? this.defaultPerso
        : this.$store.getters.getSelected1;
    },
    perso2() {
      return this.$store.getters.getSelected2 === null
        ? this.defaultPerso
        : this.$store.getters.getSelected2;
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#liste-move {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
#moves {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
  background-color: #70a69e;
  border-bottom-left-radius: 6px;
}
</style>
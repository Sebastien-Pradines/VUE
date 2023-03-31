<template>
  <div>
    <v-container id="selection">
      <div v-if="move1" id="infoMove">
        <v-img :src="move1.img" width="100px" height="100px" contain />
        <span>Input: {{ move1.input }}</span>
        <span>Damage: {{ move1.damage }}</span>
        <span>Guard: {{ move1.guard }}</span>
        <span>Startup: {{ move1.startup }}</span>
        <span>Active: {{ move1.active }}</span>
        <span>Recovery: {{ move1.recovery }}</span>
        <span>Hit: {{ move1.hit }}</span>
        <span>Block: {{ move1.block }}</span>
        <span>Level: {{ move1.level }}</span>
        <span>Counter: {{ move1.counter }}</span>
        <span>Scaling: {{ move1.scaling }}</span>
        <span>Riscgain: {{ move1.riscgain }}</span>
        <span>Invincibility: {{ move1.invincibility }}</span>
      </div>

      <div v-if="move2" id="infoMove" class="compare">
        <h2>Comparaison</h2>
        <span>-</span>
        <span>{{ damageDiff }}</span>
        <span>-</span>
        <span>{{ startupDiff }}</span>
        <span>{{ activeDiff }}</span>
        <span>{{ recoveryDiff }}</span>
        <span>-</span>
        <span>-</span>
        <span>{{ levelDiff }}</span>
        <span>-</span>
        <span>-</span>
        <span>{{ riscgainDiff }}</span>
        <span>-</span>
      </div>

      <div v-if="move2" id="infoMove">
        <v-img :src="move2.img" width="100px" height="100px" contain />
        <span>Input: {{ move2.input }}</span>
        <span>Damage: {{ move2.damage }}</span>
        <span>Guard: {{ move2.guard }}</span>
        <span>Startup: {{ move2.startup }}</span>
        <span>Active: {{ move2.active }}</span>
        <span>Recovery: {{ move2.recovery }}</span>
        <span>Hit: {{ move2.hit }}</span>
        <span>Block: {{ move2.block }}</span>
        <span>Level: {{ move2.level }}</span>
        <span>Counter: {{ move2.counter }}</span>
        <span>Scaling: {{ move2.scaling }}</span>
        <span>Riscgain: {{ move2.riscgain }}</span>
        <span>Invincibility: {{ move2.invincibility }}</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultMove: {
        nom: "Pas selectionné",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
      },
    };
  },
  computed: {
    move1() {
      return this.$store.getters.getMove1 === null
        ? this.defaultPerso
        : this.$store.getters.getMove1;
    },
    move2() {
      return this.$store.getters.getMove2 === null
        ? this.defaultPerso
        : this.$store.getters.getMove2;
    },
    damageDiff() {
      if (this.$store.getters.getMove2) {
        return this.move1.damage - this.move2.damage;
      } else {
        return 0;
      }
    },
    startupDiff() {
      if (this.$store.getters.getMove2) {
        return this.move1.startup - this.move2.startup;
      } else {
        return 0;
      }
    },
    activeDiff() {
      if (this.$store.getters.getMove2) {
        return this.move1.active - this.move2.active;
      } else {
        return 0;
      }
    },
    recoveryDiff() {
      if (this.$store.getters.getMove2) {
        return this.move1.recovery - this.move2.recovery;
      } else {
        return 0;
      }
    },
    levelDiff() {
      if (this.$store.getters.getMove2) {
        return this.move1.level - this.move2.level;
      } else {
        return 0;
      }
    },
    riscgainDiff() {
      if (this.$store.getters.getMove2) {
        return this.move1.riscgain - this.move2.riscgain;
      } else {
        return 0;
      }
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

#infoMove {
  display: flex;
  flex-direction: column;
}

.compare {
  margin-top: 100px;
  align-items: center;
}
</style>
<template>
  <div id="main">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="nom" label="Nom"></v-text-field>

        <v-text-field v-model="img" label="Image"></v-text-field>

        <v-btn type="submit" @click="send()" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nom: "",
      img: "",
      async send() {
        var data = JSON.stringify({
          nom: this.nom,
          img: this.img,
        });
        const jwt = `Bearer ${this.$store.getters.getToken}`;
        let config = {
          method: "post",
          url: "https://nodeonlinerepo-denoxm.vercel.app/alterProduit",
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
        this.$router.go(-1);
      },
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#main {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
</style>

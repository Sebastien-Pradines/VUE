<template>
  <div id="main">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :rules="passwordRules"
          required
        ></v-text-field>

        <v-btn type="submit" @click="login()" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Connexion",
  data() {
    return {
      email: "",
      password: "",
      passwordRules: [
        (value) => !!value || "Please Type your Password.",
        (value) => (value && value.length >= 6) || "minimum 6 characters",
      ],
      emailRules: [
        (value) => !!value || "Please enter your email",
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          return emailRegex.test(value) || "Please enter a valid email";
        },
      ],
      async login() {
        var data = JSON.stringify({
          email: this.email,
          password: this.password,
        });

        var config = {
          method: "post",
          url: "https://nodeonlinerepo-denoxm.vercel.app/login",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        var jwt;

        await axios(config)
          .then(function (response) {
            jwt = response.data.jwt;
          })
          .catch(function (error) {
            console.log(error);
          });

        this.$store.commit("setToken", jwt);
        this.$router.go(-1);
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#main {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
</style>
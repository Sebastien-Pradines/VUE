import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import ListePersonnage from "../components/ListePersonnage";
import ListeMove from "../components/ListeMove";
import NouveauPersonnage from "../components/NouveauPersonnage";
import ModificationPersonnage from "../components/ModificationPersonnage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },

    {
      path: "/personnages",
      name: "ListePersonnage",
      component: ListePersonnage
    },

    {
      path: "/moves/:nom",
      name: "ListeMove",
      component: ListeMove,
      props: true
    },

    {
      path: "/connexion",
      name: "Connexion",
      component: Connexion
    },

    {
      path: "/inscription",
      name: "Inscription",
      component: Inscription
    },

    {
      path: "/nouveau",
      name: "Nouveau",
      component: NouveauPersonnage
    },

    {
      path: "/modification",
      name: "modification",
      component: ModificationPersonnage
    }
  ]
});

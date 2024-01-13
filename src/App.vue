<script>
// importo axios
import axios from 'axios';
//importo i figli
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
//importo lo store
import { store } from './store';


export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },

  methods: {
    // funzione per che mi inserisce nell' array i film
    getItems() {

      //creo una flag per la searchbar
      let myURLFilm = store.filmURL
      let myURLTVSeries = store.serieTvURL

      //se utente ha fatto una ricerca
      if(store.searchText !== ""){
        myURLFilm += `&query=${store.searchText}`;
        myURLTVSeries += `&query=${store.searchText}`
      }

      axios
        .get(myURLFilm)
        .then((res => {
          store.filmList = res.data.results;
        }))
        .catch((err) => {
          console.log("Errori", err);
        });

        axios
        .get(myURLTVSeries)
        .then((res => {
          store.serieTvList = res.data.results;
        }))
        .catch((err) => {
          console.log("Errori", err);
        });
    }
  },

  created() {
    this.getItems();

  },
}
</script>

<template>

  <header>
    <AppHeader  @click.prevent="getItems"/>
  </header>

  <main>
    <AppMain />
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>

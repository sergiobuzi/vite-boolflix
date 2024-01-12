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
    getFilms() {

      //creo una flag per la searchbar
      let myURL = store.filmURL

      //se utente ha fatto una ricerca
      if(store.searchText !== ""){
        myURL += `&query=${store.searchText}`;
      }

      axios
        .get(myURL)
        .then((res => {
          store.filmList = res.data.results;
        }))
        .catch((err) => {
          console.log("Errori", err);
        });
    }
  },

  created() {
    this.getFilms();

  },
}
</script>

<template>

  <header>
    <AppHeader  @click.prevent="getFilms"/>
  </header>

  <main>
    <AppMain />
  </main>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>

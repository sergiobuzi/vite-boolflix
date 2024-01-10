<script>
// importo axios
import axios from 'axios';
//importo i figli
import AppHeader from './components/AppHeader.vue';
//importo lo store
import { store } from './store';


export default {
  components: {
    AppHeader,
    
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>

  <header>
    <AppHeader />
  </header>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>

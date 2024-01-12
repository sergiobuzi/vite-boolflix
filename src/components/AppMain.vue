<script>
import { store } from '../store';


export default {
    name: 'AppMain',

    data() {
        return {
            store
        }
    },

    methods: {
        getPosters(poster) {
            return `https://image.tmdb.org/t/p/w342/${poster}`
        }
    },

    created() {
        this.getPosters();
    },
}
</script>

<template>
    <div id="container">
        <div id="row">
            <div class="card" v-for="(item, i) in store.filmList" :key="i">
                <img :src="getPosters(item.poster_path)" alt="" class="card-thumb">
                <h4 class="card_item">Titolo: {{ item.title }}</h4>
                <h4 class="card_item">Titolo Originale: {{ item.original_title }}</h4>
                <div class="card_item">Voto: {{ item.vote_average }}</div>
                <div class="card_item">Lingua: {{ item.original_language }} <img src="../assets/italian-flag" alt="" class="flag"></div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#container {
    width: 95%;
    margin: auto;
    height: 100vh;

    #row {
        width: 100%;
        min-height: 400px;
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        width: calc(100% / 6);
        height: 100%;
        margin-bottom: 20px;
        word-wrap: break-word;

        .card-thumb {
            width: 100%;
            height: 350px;
        }

        .card-item {
            word-wrap: break-word;

            .flag{
                background-image: url(/public/italian-flag.png) ;
                height: 10px;
                width: 20px;
            }
        }
    }
}
</style>
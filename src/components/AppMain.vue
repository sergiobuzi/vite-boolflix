<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/220px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_(1-2).svg/1920px-Flag_of_the_United_Kingdom_(1-2).svg.png',
                ja: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
                es: 'data:image/png;base64,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',
                us: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg/280px-Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png',
                else: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZS_KSuA-wuAlkNwVV0vMGPki5ACML4Z32fw&usqp=CAU',
            },
        };
    },
    methods: {
        //funzione per prendere aggiungere la parte di link mancante dei poster
        getPosters(poster) {
            return `https://image.tmdb.org/t/p/w342${poster}`;
        },

        //funzione che mi ritonra i numeri inseriti arrotondati per eccesso
        voteStars(numero) {
            return Math.ceil(numero);
        }
    },
    created() {
        this.getPosters();
        this.voteStars();
    },
    components: {}
}
</script>

<template>
    <div id="container">

        <!-- Film -->
        <h2>Film</h2>

        <div id="row">

            <div class="flip-card card" v-for="(item, i) in store.filmList" :key="i">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="getPosters(item.poster_path)" alt="Avatar" class="card-thumb">
                    </div>
                    <ul class="flip-card-back card-item">
                        <li class="card_item"><span class="card-title">Titolo:</span> {{ item.title }}</li>
                        <li class="card_item"><span class="card-title">Titolo Originale:</span> {{ item.original_title }}
                        </li>
                        <li class="card_item">
                            <i v-for="index in voteStars(item.vote_average / 2)" :key="index" class="fas fa-star"></i>
                            <i v-for="index in (5 - voteStars(item.vote_average / 2))" :key="index" class="far fa-star"></i>
                        </li>
                        <li class="card-item">
                            <img class="flag" v-if="flags[item.original_language]" :src="flags[item.original_language]">
                            <img class="flag" v-else="flags[item.original_language]" :src="flags.else">
                        </li>
                        <li class="card-item" style="font-size:12px;"><span class="card-title">Descrizione:</span>{{ item.overview }}</li>
                    </ul>
                </div>
            </div>

        </div>



        <!-- SERIE TV -->
        <h2 style="margin-top: 20px;">Serie Tv</h2>

        <div id="row">

            <div class="flip-card card" v-for="(item, i) in store.serieTvList" :key="i">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="getPosters(item.poster_path)" alt="Avatar" class="card-thumb">
                    </div>
                    <ul class="flip-card-back card-item">
                        <li class="card_item"><span class="card-title">Titolo:</span> {{ item.name }}</li>
                        <li class="card_item"><span class="card-title">Titolo: Originale:</span> {{ item.original_name }}
                        </li>
                        <li class="card_item">
                            <i v-for="index in voteStars(item.vote_average / 2)" :key="index" class="fas fa-star"></i>
                            <i v-for="index in (5 - voteStars(item.vote_average / 2))" :key="index" class="far fa-star"></i>
                        </li>
                        <li class="card-item">
                            <img class="flag" v-if="flags[item.original_language]" :src="flags[item.original_language]">
                            <img class="flag" v-else="flags[item.original_language]" :src="flags.else">
                        </li>
                        <li class="card-item" style="font-size:15px;"><span class="card-title">Descrizione:</span>{{ item.overview }}</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>



<style lang="scss" scoped>
#container {
    width: 95%;
    margin: auto;
    height: 100vh ;

    #row {
        width: 100%;
        min-height: 400px;
        display: flex;
        flex-wrap: wrap;

        // stili delle flip-cards
        .flip-card {
            background-color: transparent;
            perspective: 1000px;
        }

        .flip-card-inner {
            // position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-color: black;
        }

        .flip-card-back {
            background-color: black;
            color: white;
            transform: rotateY(180deg);
        }
    }

    .card {
        width: calc(100% / 6);
        height: 400px;
        margin-bottom: 20px;
        word-wrap: break-word;

        .card-thumb {
            width: 100%;
            height: 400px;
        }

        .card-item {
            word-wrap: break-word;
            display: flex;
            flex-direction: column;
            gap: 10px;
            list-style: none;

            .card-title {
                font-weight: 600;
            }
        }

        .flag {
            background-size: cover;
            background-position: center;
            height: 20px;
            width: 30px;
        }

    }

/************************************************
    SOLUZIONE RESPONSIVE
************************************************/

 /*tablet view*/
    @media all and (max-width: 1350px){

        .card {
            width: calc(100% / 4);
        }
    };

    /*Mobile view*/
    @media all and (max-width: 950px){

        .card {
            width: calc(100% / 3);
        }
    };
    /*little mobile view*/ 
    @media all and (max-width: 650px){

        .card {
            width: calc(100% / 2);
        }
    };
}


// stili delle flip-cards
.flip-card {
    background-color: transparent;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
}

</style>
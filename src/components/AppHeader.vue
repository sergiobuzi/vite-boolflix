<script>
//importo lo store 
import { store } from '../store';
export default {
    name: 'AppHeader',

    data() {
        return {
            store, 
        }
    }
}
</script>

<template>

    <div id="container">

        <div id="box">
            <h1>BOOLFLIX</h1>
            <div>
                <input type="type" placeholder="Cerca un film" id="searchbar" v-model.trim="store.searchText">
                <button type="submit" id="searchbar-button" @click.prevent="$emit('search')">Cerca</button>
            </div>
        </div>

    </div>

</template>


<style lang="scss" scoped>
#container {
    height: 70px;
    width: 100%;
    background-color: #1a1a1b;
   

    #box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 95%;
        margin: auto;




        h1 {
            color: red;
        }

        #searchbar {
            height: 30px;
            width: 200px;
            border-radius: 3px;
            border: none;
        }

        #searchbar-button {
            margin-left: 10px;
            height: 30px;
            width: 50px;
            background-color: red;
            border: none;
            border-radius: 3px;
            color: white;
            cursor: pointer;
        }
    }
}
</style>
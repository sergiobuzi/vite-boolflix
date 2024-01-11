<script>
export default {
    name: 'AppHeader',

    data() {
            return {
            
            }
        }
}
</script>

<template>

    <div id="container">
        <h1>BOOLFLIX</h1>

        <div>
            <input type="type" placeholder="Cerca un film" id="searchbar">
            <button id="searchbar-button">Cerca</button>
        </div>
    </div>

</template>


<style lang="scss" scoped>
#container{
    height: 70px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        margin-left: 10px;
        color: red;
    }

    #searchbar{
        margin-right: 10px;
        height: 30px;
        width: 200px;
        border-radius: 3px;
        border: none;
    }

    #searchbar-button{
        margin-right: 10px;
        height: 30px;
        width: 50px;
        background-color: red;
        border: none;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }
}
</style>
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
        <input type="type" placeholder="Cerca un film">
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
}
</style>
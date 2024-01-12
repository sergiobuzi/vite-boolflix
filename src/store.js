import { reactive } from "vue"

export const store = reactive({
    //array che contiene la lista dei film
    filmList: [],
    filmURL: "https://api.themoviedb.org/3/search/movie?api_key=a18d43f8548d9db5237e978d594c8ab8&query=movie",
    //creo una variabile per la searchbar
    searchText: "",
    nameTitle: "title",
});
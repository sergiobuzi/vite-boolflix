import { reactive } from "vue"

export const store = reactive({
    //array che contiene la lista dei film
    filmList: [],
    filmURL: "https://api.themoviedb.org/3/search/movie?api_key=a18d43f8548d9db5237e978d594c8ab8",
    //creo una variabile per la searchbar
    searchText: "",
    //array che contiene la lista delle serie tv
    serieTvList: [],
    serieTvURL: "https://api.themoviedb.org/3/search/tv?api_key=a18d43f8548d9db5237e978d594c8ab8",
});
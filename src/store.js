import { reactive } from "vue";
export const store = reactive({
    urlAPI: 'https://api.themoviedb.org/3/search/',
    movieEndPoint: 'movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    seriesEndPoint: 'tv?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    loading: false,
    searchContent: '',
    movieArray: [],
    seriesArray: [],
    ThumbURL: 'https://image.tmdb.org/t/p/original',
})
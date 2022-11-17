import { reactive } from "vue";
export const store = reactive({
    urlAPI: 'https://api.themoviedb.org/3/search/',
    movieEndPoint: 'movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    seriesEndPoint: 'tv?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    showH2: false,
    showTrend: true,
    searchContent: '',
    movieArray: [],
    seriesArray: [],
    ThumbURL: 'https://image.tmdb.org/t/p/original',
    flagpath: '-flag.png',
    navList: [{
        link: 'Home',
        url: '#',
    },
    {
        link: 'Films',
        url: '#films',
    },
    {
        link: 'Serie TV',
        url: '#serieTV',
    },
    {
        link: 'Account',
        url: '#',
    },
    {
        link: 'Top Rated',
        url: '#',
    }],
    trendURL: 'https://api.themoviedb.org/3/trending/all/day?api_key=e99307154c6dfb0b4750f6603256716d',
    trendArray: []
})
<template>
  <HeaderComponent
    @filterContent="
      callMovies();
      callSeries();
    "
  />
  <main>
    <ListComponent
      :Lists="store.trendArray"
      mainTitle="Top Rated"
      v-if="store.showTrend"
    />
    <ListComponent :Lists="store.movieArray" mainTitle="Films" />
    <ListComponent :Lists="store.seriesArray" mainTitle="Serie TV" />
  </main>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import { store } from "./store";

export default {
  components: { HeaderComponent, ListComponent },
  data() {
    return {
      store,
    };
  },
  methods: {
    callTrend() {
      axios.get(store.trendURL).then((res) => {
        store.trendArray = [...res.data.results];
      });
    },
    callMovies() {
      let moviequery = store.searchContent;
      axios.get(store.urlAPI + store.movieEndPoint + moviequery).then((res) => {
        store.movieArray = [...res.data.results];
        store.showH2 = true;
        store.showTrend = false;
      });
    },
    callSeries() {
      let seriesquary = store.searchContent;
      axios.get(store.urlAPI + store.seriesEndPoint + seriesquary).then((res) => {
        store.seriesArray = [...res.data.results];
        store.showH2 = true;
        store.ismovie = false;
      });
    },
  },
  created() {
    this.callTrend();
  },
};
</script>

<style lang="scss" scoped></style>

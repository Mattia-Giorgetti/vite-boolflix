<template>
  <HeaderComponent
    @filterContent="
      callMovies();
      callSeries();
      callTrend();
    "
  />
  <main>
    <HomeComponent v-if="!store.showH2" />
    <section id="filmsSection">
      <ListComponent :Lists="store.movieArray" mainTitle="Films" />
    </section>
    <section id="tvSection">
      <ListComponent :Lists="store.seriesArray" mainTitle="Serie TV" />
    </section>
    <section id="topratedSection" class="mb-5">
      <ListComponent :Lists="store.trendArray" mainTitle="Week's Top Rated" />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import HomeComponent from "./components/HomeComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import { store } from "./store";

export default {
  components: { HeaderComponent, ListComponent, HomeComponent },
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
  created() {},
};
</script>

<style lang="scss" scoped></style>

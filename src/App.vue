<template>
  <HeaderComponent
    @filterContent="
      callMovies();
      callSeries();
    "
  />
  <main>
    <ListComponent />
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
    callMovies() {
      store.loading = true;
      let moviequery = store.searchContent;
      axios.get(store.urlAPI + store.movieEndPoint + moviequery).then((res) => {
        store.movieArray = [...res.data.results];
        console.log(store.movieArray);
        store.loading = false;
      });
    },
    callSeries() {
      let seriesquary = store.searchContent;
      axios.get(store.urlAPI + store.seriesEndPoint + seriesquary).then((res) => {
        store.seriesArray = [...res.data.results];
        console.log(store.seriesArray);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

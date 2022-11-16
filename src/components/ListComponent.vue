<template>
  <div class="container-lg">
    <div class="row">
      <h2 class="text-white">Films</h2>
      <div
        class="col-lg-3 col-md-3 p-4"
        v-for="(movie, index) in store.movieArray"
        :key="movie.id"
      >
        <CardComponent :movie="movie" />
      </div>
    </div>
    <div class="row mt-5">
      <h2 class="text-white">Serie TV</h2>
      <div
        class="col-lg-3 col-md-3 p-4"
        v-for="(serie, index) in store.seriesArray"
        :key="serie.id"
      >
        <SeriesCard :serie="serie" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
import SeriesCard from "./SeriesCard.vue";
export default {
  name: "ListComponent",
  components: { CardComponent, SeriesCard },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-lg {
  margin-top: 8rem;
}
</style>

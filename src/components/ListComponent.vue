<template>
  <div class="container-lg">
    <div class="row">
      <h2 class="text-white">Films</h2>
      <div
        class="col-lg-3 col-md-3 p-4"
        v-for="(movie, index) in store.movieArray"
        :key="movie.id"
      >
        <!-- CARD PER FILM  -->
        <CardComponent
          :image="store.ThumbURL + movie.poster_path"
          :titolo="movie.title"
          :titolo-originale="movie.original_title"
          :lingua="movie.original_language"
          :voto="movie.vote_average"
        />
      </div>
    </div>
    <div class="row mt-5">
      <h2 class="text-white">Serie TV</h2>
      <div
        class="col-lg-3 col-md-3 p-4"
        v-for="(serie, index) in store.seriesArray"
        :key="serie.id"
      >
        <!-- CARD PER SERIE TV  -->
        <CardComponent
          :image="store.ThumbURL + serie.poster_path"
          :titolo="serie.name"
          :titolo-originale="serie.original_name"
          :lingua="serie.original_language"
          :voto="serie.vote_average"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
export default {
  name: "ListComponent",
  components: { CardComponent },
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

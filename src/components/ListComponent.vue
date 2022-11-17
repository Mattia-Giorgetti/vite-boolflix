<template>
  <div class="container-lg">
    <div class="row" id="films" v-if="store.showTrend">
      <h2 class="text-white">Most Populars</h2>
      <div
        class="col-lg-3 col-md-3 p-4"
        v-for="(movie, index) in store.trendArray"
        :key="movie.id"
      >
        <!-- CARD PER trend  -->
        <CardComponent
          :previewIMG="store.ThumbURL + movie.backdrop_path"
          :image="store.ThumbURL + movie.poster_path"
          :titolo="movie.title"
          :titolo-originale="movie.original_title"
          :lingua="movie.original_language"
          :voto="movie.vote_average"
          :flagimage="movie.original_language + store.flagpath"
          :trama="movie.overview"
        />
      </div>
    </div>

    <h2 class="text-white" v-if="store.showH2">Films</h2>
    <div class="row" id="films">
      <div
        class="col-lg-3 col-md-3 p-4"
        v-for="(movie, index) in store.movieArray"
        :key="movie.id"
      >
        <!-- CARD PER FILM  -->
        <CardComponent
          :previewIMG="store.ThumbURL + movie.backdrop_path"
          :image="store.ThumbURL + movie.poster_path"
          :titolo="movie.title"
          :titolo-originale="movie.original_title"
          :lingua="movie.original_language"
          :voto="movie.vote_average"
          :flagimage="movie.original_language + store.flagpath"
          :trama="movie.overview"
        />
      </div>
    </div>

    <h2 class="text-white mt-5" v-if="store.showH2">Serie TV</h2>
    <div class="row" id="serieTV">
      <div
        class="col-lg-3 col-md-4 col-sm-6 p-4"
        v-for="(serie, index) in store.seriesArray"
        :key="serie.id"
      >
        <!-- CARD PER SERIE TV  -->
        <CardComponent
          :previewIMG="store.ThumbURL + serie.backdrop_path"
          :image="store.ThumbURL + serie.poster_path"
          :titolo="serie.name"
          :titolo-originale="serie.original_name"
          :lingua="serie.original_language"
          :voto="serie.vote_average"
          :flagimage="serie.original_language + store.flagpath"
          :trama="serie.overview"
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

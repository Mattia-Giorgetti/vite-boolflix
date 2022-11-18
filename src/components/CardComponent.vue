<template>
  <div class="card-wrap position-relative">
    <!-- FRONTE CARD  -->
    <div class="card_img p-1">
      <img
        class="img-fluid"
        :src="
          item.poster_path
            ? store.ThumbURL + item.poster_path
            : 'https://via.placeholder.com/400x600/000000/FFFFFF/?text= Poster Unavailable'
        "
      />
    </div>
    <!-- CARD HOVER  -->
    <div class="my_card p-1">
      <div class="thumbPreview">
        <img
          :src="
            item.backdrop_path
              ? store.ThumbURL + item.backdrop_path
              : 'https://via.placeholder.com/300x100/000000/FFFFFF/?text= Thumb Unavailable'
          "
        />
      </div>
      <div class="overflow-auto">
        <h3>{{ item.title }}</h3>
        <h3 v-if="!store.ismovie">{{ item.name }}</h3>
        <h4>{{ item.original_title }}</h4>
        <h4 v-if="!store.ismovie">{{ item.original_name }}</h4>
        <img
          :src="'/' + item.original_language + store.flagpath"
          :alt="item.original_language"
          v-if="this.flagsArray.includes(item.original_language)"
        />
        <div v-else>{{ item.original_language }}</div>
        <div class="rating pt-1">
          <span
            v-for="n in 5"
            class="fa-star"
            :class="n <= starRating ? 'fa-solid' : 'fa-regular'"
          ></span>
        </div>
        <p class="p-3">{{ item.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
  props: {
    item: Object,
  },
  data() {
    return {
      store,
      flagsArray: ["es", "fr", "ja", "en", "it", "de"],
    };
  },
  computed: {
    starRating() {
      return Math.ceil(this.item.vote_average / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.my_card {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.6rem;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0;
  transition: all 0.4s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    cursor: pointer;
  }
  .thumbPreview {
    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }
  img {
    width: 20px;
  }
}
</style>

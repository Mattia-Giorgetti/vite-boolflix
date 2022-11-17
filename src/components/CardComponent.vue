<template>
  <div class="card-wrap position-relative">
    <!-- FRONTE CARD  -->
    <div class="card_img p-1">
      <img class="img-fluid" :src="image" :alt="titolo" />
    </div>

    <!-- CARD HOVER  -->
    <div class="my_card p-1">
      <div class="thumbPreview">
        <img :src="previewIMG" :alt="titolo" />
      </div>
      <div class="overflow-auto">
        <h3>{{ titolo }}</h3>
        <h4>{{ titoloOriginale }}</h4>
        <img
          :src="'/' + flagimage"
          :alt="lingua"
          v-if="this.flagsArray.includes(lingua)"
        />
        <div v-else>{{ lingua }}</div>
        <div class="rating pt-1">
          <span
            v-for="n in 5"
            class="fa-star"
            :class="n <= starRating ? 'fa-solid' : 'fa-regular'"
          ></span>
        </div>
        <p class="p-3">{{ trama }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
  props: {
    titolo: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
    image: String,
    flagimage: String,
    previewIMG: String,
    trama: String,
  },
  data() {
    return {
      store,
      flagsArray: ["es", "fr", "ja", "en", "it", "de"],
    };
  },
  computed: {
    starRating() {
      return Math.ceil(this.voto / 2);
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

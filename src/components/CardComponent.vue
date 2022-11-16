<template>
  <div class="card-wrap position-relative">
    <div class="card_img p-1">
      <img class="img-fluid" :src="image" :alt="titolo" />
    </div>
    <div class="my_card p-1">
      <h3>{{ titolo }}</h3>
      <h4>{{ titoloOriginale }}</h4>
      <p>{{ lingua }}</p>
      <span>{{ voto }}</span>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
  props: {
    // movie: Object,
    titolo: String,
    titoloOriginale: String,
    lingua: String,
    voto: Number,
    image: String,
  },
  data() {
    return {
      store,
    };
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
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: all 0.4s ease;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }
}
</style>

<template>
  <div class="container-lg">
    <h2 class="text-white" v-if="store.showH2">{{ mainTitle }}</h2>
    <div class="row" :id="mainTitle">
      <div class="col-lg-3 col-md-3 p-4" v-for="(item, index) in Lists" :key="item.id">
        <CardComponent :item="item" />
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
  props: {
    Lists: Array,
    mainTitle: String,
  },
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

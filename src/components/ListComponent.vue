<template>
  <div class="container-lg position-relative">
    <h2 class="text-white" v-if="store.showH2">{{ mainTitle }}</h2>
    <div class="row flex-nowrap overflow-hidden" id="content" ref="content">
      <TransitionGroup name="list">
        <div class="col-lg-3 col-md-3 p-4" v-for="(item, index) in Lists" :key="item.id">
          <CardComponent :item="item" />
        </div>
      </TransitionGroup>
    </div>
    <button
      class="btn-left position-absolute start-0"
      @click="swipeLeft"
      v-if="store.showH2"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button
      class="btn-right position-absolute end-0"
      @click="swipeRight"
      v-if="store.showH2"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
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
  methods: {
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)
        )
      ) {
        const startTime =
          "now" in window.performance ? performance.now() : new Date().getTime();

        function scroll(timestamp) {
          const timeElapsed = timestamp - startTime;

          const progress = Math.min(timeElapsed / duration, 1);

          element.scrollLeft = scrollPos + scrollPixels * progress;

          if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }

        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -600, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 600, 800);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.container-lg {
  margin-top: 6.5rem;

  button {
    position: absolute;
    top: calc(50%);
    border: none;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    color: $darkgray;
    border-radius: 50%;
    z-index: 100;
    background-color: rgba(240, 240, 240, 0.4);
    transition: all 0.2s linear;
    &:hover {
      background-color: rgba(240, 240, 240, 0.7);
      transform: scale(1.2);
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

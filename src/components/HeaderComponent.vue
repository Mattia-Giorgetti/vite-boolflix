<template>
  <header
    class="p-3 bg-black text-danger d-flex justify-content-around align-items-center"
  >
    <h1>Boolflix</h1>
    <nav>
      <ul>
        <li v-for="(item, index) in store.navList" :key="index">
          <a :href="item.url">{{ item.link }}</a>
        </li>
      </ul>
    </nav>
    <div>
      <input
        type="text"
        placeholder="inserisci film o serie"
        v-model.trim="store.searchContent"
      />
      <button
        class="ms-2 bg-danger"
        @click="
          SearchMovie();
          SearchSerie();
        "
      >
        Cerca
      </button>
    </div>
  </header>
</template>

<script>
import { store } from "../store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    SearchMovie() {
      this.$emit("filterContent");
    },
    SearchSerie() {
      this.$emit("filterContent");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  button {
    border: none;
    color: white;
    padding: 0.2rem 1.3rem;
    transition: all 0.3s linear;

    &:hover {
      opacity: 0.9;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    list-style: none;
    margin-bottom: 0;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        color: red;
      }
    }
  }
}
</style>

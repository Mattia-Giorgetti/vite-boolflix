<template>
  <div class="container-lg d-flex justify-content-center align-items-center flex-column">
    <h1 class="text-danger text-uppercase">boolflix</h1>
    <h2 class="text-danger">Benvenuto</h2>
    <h3 class="text-white">Usa la Searchbar per iniziare</h3>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style lang="scss" scoped>
.container-lg {
  margin-top: 6.5rem;
  height: 80vh;

  h1 {
    font-weight: bold;
    font-size: 5rem;
    margin: 3rem;
  }
  h3 {
    margin: 0.8rem;
    font-size: 2rem;
  }
}
</style>

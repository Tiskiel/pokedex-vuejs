<script>
    export default {
        data() {
            return {
                search: ''
            }
        },
        methods: {
            searchPokemon() {
                console.log("Searching for pokemon: ", this.search);
            }
        }
    }
</script>

<template>
  <div class="home-search">
    <input
      type="text"
      placeholder="Search for a pokemon"
      class="search"
      v-model="search"
      @input="searchPokemon"
    />
  </div>
</template>

<style>
.home-search {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

    .search {
        padding: 0.6rem 1rem;
        border: 1px solid green;
        border-radius: 8px;
        width: 100%;
        max-width: 400px;
    }
}
</style>

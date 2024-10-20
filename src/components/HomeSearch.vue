<script lang="ts">
import { defineComponent, ref } from 'vue';
import DisplayPokemons from './DisplayPokemons.vue';

export default defineComponent({
  components: {
    DisplayPokemons,
  },
  setup() {
    const search = ref('');
    const searchTerm = ref('');

    const searchPokemon = () => {
      const trimmedSearch = search.value.trim().toLowerCase();
      if (trimmedSearch) {
        searchTerm.value = trimmedSearch;
      } else {
        console.warn('Search input is empty.');
      }
    };

    return {
      search,
      searchTerm,
      searchPokemon,
    };
  },
});
</script>

<template>
  <div class="home-search">
    <div>
      <input
        type="text"
        placeholder="Search for a Pokémon"
        class="search"
        v-model="search"
      />
      <button @click="searchPokemon">Search</button>
    </div>

    <DisplayPokemons v-if="searchTerm" :pokemon="{ nameOrId: searchTerm }" />
  </div>
</template>


<style scoped>
.home-search {
  display: flex;
  flex-direction: column;
}

.search {
  padding: 0.6rem 1rem;
  border: 1px solid green;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin-right: 8px;
}

button {
  padding: 0.6rem 1rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}
</style>

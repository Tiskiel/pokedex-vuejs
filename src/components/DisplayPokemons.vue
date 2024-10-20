<script lang="ts">
import { fetchPokemonName as fetchPokemon } from '@/services/pokemonService';
import type { PokemonDTO } from '@/types/PokemonDTO';
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
    props: {
        pokemon: {
            type: Object as () => { nameOrId: string },
            required: true,
        },
    },
    setup(props) {
        const searchedPokemon = ref<PokemonDTO | null>(null);
        const isLoading = ref(false);
        const fetchPokemonData = async (nameOrId: string) => {
            searchedPokemon.value = null;
            isLoading.value = true;

            try {
                searchedPokemon.value = await fetchPokemon(nameOrId);
            } catch (error) {
                console.error('Failed to fetch Pokémon:', error);
                searchedPokemon.value = null;
            } finally {
                isLoading.value = false;
            }
        };

        onMounted(async () => {
            await fetchPokemonData(props.pokemon.nameOrId);
        });

        watch(
            () => props.pokemon.nameOrId,
            async (newNameOrId) => {
                await fetchPokemonData(newNameOrId);
            },
        );

        return {
            searchedPokemon,
            isLoading,
        };
    },
});
</script>

<template>
    <div class="pokemon-display" v-if="!isLoading">
        <h2>{{ searchedPokemon?.species?.name }}</h2>
        <img class="sprite" :src="searchedPokemon?.sprites?.front_default" alt="Pokemon" />
    </div>
    <div v-else class="loading">Loading...</div>
</template>

<style scoped>
.loading {
    font-size: 1.6rem;
    font-weight: 500;
    color: green;
}
.pokemon-display {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .sprite {
        width: 100px;
        height: 100px;
    }
}

h2 {
    font-size: 1.6rem;
    font-weight: 500;
    color: red;
}
</style>

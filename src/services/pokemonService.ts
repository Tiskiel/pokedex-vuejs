import { getPokemonByName } from "@/api/pokemonApi";

export const fetchPokemonName = async (name: string) => {
    try {
        const response = await getPokemonByName(name);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { RemotePokemonRepository } from "../repository/remotePokemonRepository";

const pokemonRepo = new RemotePokemonRepository();

export function usePokemonData() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => pokemonRepo.getPokemonSymbol(),
  });

  useEffect(() => {
    if (data) setAllPokemon((current) => [...current, ...data]);
  }, [data]);

  return { allPokemon, isLoading, error };
}

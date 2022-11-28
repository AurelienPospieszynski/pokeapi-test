import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { RemotePokemonRepository } from "../repository/remotePokemonRepository";

const pokemonRepo = new RemotePokemonRepository();

export function usePokemonData() {
  const [allPokemon, setAllPokemon] = useState([]);

  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["repoData"],
      queryFn: () => pokemonRepo.getPokemonSymbol(),
    },
    { queryKey: ["repo2Data"], queryFn: () => pokemonRepo.getNext20Pokemon() }
  );

  useEffect(() => {
    if (data) setAllPokemon((current) => [...current, ...data]);
  }, [data]);

  return { allPokemon, isLoading, error };
}

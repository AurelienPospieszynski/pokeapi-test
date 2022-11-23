import Pokemon from "./components/Pokemon";
import { usePokemonData } from "./hooks/usePokemonData";

export const App = () => {
  const { allPokemon, isLoading, error } = usePokemonData();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(allPokemon);
  /*
   */
  return (
    <div className="m-auto flex h-[100vh] flex-col justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <p className=" text-center text-3xl "> Pokedex</p>
      <div className="flex flex-col items-center gap-3">
        <ul>
          {allPokemon.map((pokemon, index) => (
            <Pokemon key={index} id={pokemon.id} name={pokemon.name} />
          ))}
        </ul>

        <button
          type="button"
          className="rounded bg-gradient-to-r from-green-400 to-blue-500 p-3 hover:from-pink-500 hover:to-yellow-500"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default App;

import Pokemon from "./components/Pokemon";
import { usePokemonData } from "./hooks/usePokemonData";
import Logo from "./assets/poke-logo.png";

export const App = () => {
  const { allPokemon, isLoading, error } = usePokemonData();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="m-auto flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3">
      <div className="flex flex-row items-center justify-center">
        <img src={Logo} alt="pokemonLogo" className="h-10 w-16" />
        <p className=" text-center text-3xl "> POKEDEX </p>
        <img src={Logo} alt="pokemonLogo" className="h-10 w-16" />
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <ul className="grid grid-cols-5 ">
          {allPokemon.map((pokemon, index) => (
            <Pokemon
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

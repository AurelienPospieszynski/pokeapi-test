export class RemotePokemonRepository {
  constructor() {
    this.baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
  }

  async getListPokemon() {
    const datas = await fetch(this.baseUrl);
    const jsonDatas = await datas.json();
    return jsonDatas.results;
  }

  async getNext20Pokemon() {
    const pokemonList = await this.getListPokemon();
    return Promise.all(
      pokemonList.map(
        async (poke) =>
          await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`).then(
            (r) => r.json()
          )
      )
    );
  }

  async getPokemonSymbol() {
    const pokemonList = await this.getListPokemon();
    return Promise.all(
      pokemonList.map((pokemon) => fetch(pokemon.url).then((r) => r.json()))
    );
  }
}

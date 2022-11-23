export class RemotePokemonRepository {
  constructor() {
    this.baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";
  }

  async getListPokemon() {
    const datas = await fetch(this.baseUrl);
    const jsonDatas = await datas.json();

    return jsonDatas.results;
  }

  async getPokemonSymbol() {
    const pokemonList = await this.getListPokemon();
    return Promise.all(
      pokemonList.map((pokemon) => fetch(pokemon.url).then((r) => r.json()))
    );
  }
}

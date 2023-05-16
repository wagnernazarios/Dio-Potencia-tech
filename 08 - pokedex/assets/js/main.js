function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
        <span class="pokemon-number">#001</span>
        <span class="pokemon-name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">Glass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
        </li>
    `;
}

const pokemonsList = document.getElementById("pokemonList");

pokeApi.getPokemon().then((pokemons = []) => {
  pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});

function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
        <span class="pokemon-number">${pokemon.order}</span>
        <span class="pokemon-name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join("")}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
        </div>
        </li>
    `;
}

const pokemonsList = document.getElementById("pokemonList");

pokeApi.getPokemon().then((pokemons = []) => {
  pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});

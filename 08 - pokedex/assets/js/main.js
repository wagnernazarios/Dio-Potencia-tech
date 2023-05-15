const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
        <span class="pokemon-number">#001</span>
        <span class="pokemon-name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type"${pokemon.type}</li>
                <li class="type">${pokemon.type}</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
        </li>
    `;
}

const pokemonsList = document.getElementById("pokemonList");

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonlist) => {
    for (let i = 0; i < pokemonlist.length; i++) {
      const pokemon = pokemonlist[i];
      pokemonsList.innerHTML += convertPokemonToLi(pokemon);
    }
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Requisição completa!"));

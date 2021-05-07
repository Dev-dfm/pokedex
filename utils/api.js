export async function getCharacters(name) {
  const promise = fetch(`https://pokeapi.co/api/v2/pokemon/?name=${name}`);
  const response = await promise;
  // if input not found, give an empty array instead of an error 404
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.results;
}

// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"

// `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200/?name=${name}`

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

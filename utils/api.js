export async function getCharacters(name) {
  const pokemonNumber = 100;
  const promise = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}/?name=${name}`
  );
  const response = await promise;
  // if input not found, give an empty array instead of an error 404
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

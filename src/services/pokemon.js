export function getPokemon({ url }) 
{
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export async function getAllPokemon(url) {
    return new Promise((resolve) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}


// export async function searchAboutPokemon(pokemon) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => res.json());
//   }
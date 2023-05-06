const pokemon_result = document.getElementById(pokemon_result);
const pokemon_button = document.getElementById(pokemon_button);

pokemon_button.addEventListener('click', getPokemon);

function getPokemon() {
    fetch('https://randomfox.ca/floof/')
       .then(res => res.json())
       .then(data => {
           pokemon_result.innerHTML = <img src= {data.image}/>
    })
}
const pokemon_result = document.getElementById(pokemon_result);
const pokemon_btn = document.getElementById(pokemon_btn);

pokemon_button.addEventListener('click', getRandomDog);

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				pokemon_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}

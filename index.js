// The "little-big" API project 27.10.2022 23:47

/* In this assignment i want you to create an API driven website with these requirements:

1. Get data with a basic Api request from the pokemon API.
2. Display the Api data on the webpage
3. Add some basic interaction events. (example: click a button to display more data.)

I tried to keep the requirements at minimum so that you can focus on writing good, clean and maintainable code (rather than aesthetics or details).
It is of course a big plus if you can add features, but you should only do so after you've made a solid basic foundation.

The attached github-repo link contains a basic html & css template (same we used in class).

And useful links with examples of both bad and good practices we went through during class:
https://codesandbox.io/s/pokedex-27-10-22-m4kvpy
https://codesandbox.io/s/pokedex-mockapi-11s8dg?file=/src/index.js   */

//
//

console.log("Hello World"); // check if linked

//
//

// Test to see if I could grab the html elements and display them in js, ended up not using these in the final version of the code. But they work fine both showing in console and on display.

// grabbing the div from html
// const main = document.getElementById("main");
// console.log(main);
// main.textContent = "Hi! I'm a pokemon website";

// grabbing the nav from html
// const navBar = document.getElementById("navBar");
// console.log(navBar);
// navBar.textContent = "Hi! I'm a nav bar";

//
//

// Note to self: async = makes the function return a awaited promise, await = pauses the execution and waits for resolved promise, (promise = is the completion or failure of an asyncfunction and returns a value), fetch() = is the fetching of the data from a server and returns the promise, request = converts a callback to a return a promise , json() = jason is a storing and transporting format, and .json() is what turns json into js.

// Using a function with an url as an parameter
// Choosing Snorlax as my displayed pokemon because he is obliviously the best pokemon
async function getPokemonData(url = "https://pokeapi.co/api/v2/pokemon/143") {
	const request = await fetch(url);
	console.log(request);
	// Fetching the url from parameter
	const myPokemon = await request.json().then((pokemonData) => {
		// Await the fetched request, and using .json() to take the readable stream from the api and name the object pokemonData.
		document.getElementById("main").innerHTML = `
		   <div class="card">
		   <h3>${pokemonData.name}</h3>
		   <img src=${pokemonData.sprites.front_default} />
		   </div>
		   `;
		// Using ${} as a variable declaration, and adding the .name and .sprites.front_default as those are the values I want to display.
		// Getting the pokemonData displayed on the page using getElementById to grab the "main" and using innerHTML to display the content of template string.
		console.log(pokemonData);
	});
	return myPokemon;
}
getPokemonData();

// // Conclusion: A merge between what I made work with my async function, and .then to display innerHTML. I was in the correct line of thinking a few times, just missed a couple of steps on every try to make it fully functional. Unsure if the return myPokemon does anything, but it read unread so I placed a return on it so it would not show unread.
// Go to notes.txt to see other attempts for cleaner code on this side.

//
//
//

// Part 3 of the task: I want a interaction to be that when I click the card, the big version will show up. Looking trough the codesandbox code it's hard to find what is what with everything coming back to connecting to getApi and localStorage.. But I have an idea on what I want to make, I just think I have made it too complicated for myself.. I have also everything in one function, which is not good and is most likely the problem.
// Ideally I think I should had made three functions. One for getting the api, one for small card and one for big card. Then it would be easier to read and easier to understand what is happening. I think I could have written it similarly to what I have done under here now, but something is clearly not working, so some things would have to change.

// This works a little.. The tought is there, but the execution don't work correctly.. But the card frame shows..
// document.getElementById("main").innerHTML // Should not target the whole side, but only card. But with anything else then document it breaks?
// <img src="${pokemonData.sprites}" /> // should also contain .front_default, but the whole big card breaks with it there
// <h3 class="height">${pokemonData.height / 10}m</h3> // This somehow works even if nothing else does..

// async function getPokemonData(url = "https://pokeapi.co/api/v2/pokemon/143") {
// 	const request = await fetch(url);
// 	console.log(request);

// 	const smallPokemonCard = await request.json().then((pokemonData) => {
// 		document.getElementById("main").innerHTML = `
// 		   <div class="card">
// 		   <h3>${pokemonData.name}</h3>
// 		   <img src=${pokemonData.sprites.front_default} />
// 		   </div>
// 		   `;
// 	});

// 	const bigPokemonCard = document.addEventListener("click", (pokemonData) => {
// 		document.getElementById("main").innerHTML = `
//             <div class="card-big">
//                <h2>${pokemonData.name}</h2>
// 		         <img src="${pokemonData.sprites}" />

//                <div class="card-stats">
//                   <div class="info">
//                      <h3 class="height">${pokemonData.height / 10}m</h3>
//                      <h3 class="weight">${pokemonData.weight / 10}kg</h3>
//                      <h3 class="xp">${pokemonData.base_experience}xp</h3>
//                   </div>
//                </div>
//             </div>`;
// 	});
// }
// getPokemonData();

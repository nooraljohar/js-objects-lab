const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  //Exercise 1
  console.dir(pokemon, { maxArrayLength: null })




  //Exercise 2  
  console.log(game)

  //Exercise 3
  game.difficulty =["easy","med","hard"];

  //Exercise 4
  game.party.push(pokemon[6])
  console.log(game.party)

  //Exercise 5
  game.party.push(pokemon[8])
  game.party.push(pokemon[78])
  game.party.push(pokemon[112])
  console.log(game.party)

  //Exercise 6
  game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
      gym.completed = true;
    }
  })
  console.log(game.gyms)

  //Exercise 7
  game.party.splice(0,1,pokemon[7])
  console.log(game.party)

  //Exercise 8
  game.party.forEach(party => {
    console.log(party.name)
  })
  
  //Exercise 9

  pokemon.forEach(poke => {
    if(poke.starter = true){
       console.log(poke.name) //to print all the information about starter pokemon
       console.log(poke.name) //to print only the name of the starter pokemon 
    }
  })

  //Exercise 10
  
  game.catchPokemon = catchPokemon (pokemonObj) => {
    party.push(pokemonObj);  // Add the pokemon to the party array
  }

  game.catchPokemon(pokemon[0]); 
  console.log(game.party);
  ///////////////////
 ////Iron Man
//////////////////


const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
       console.log('At your service, sir')
    }
}


// // Log Iron Man's third ability
// // console.log(ironMan.abilities[2]);

// // Log all of Iron Man's abilities by looping through the array
// for(ability of ironMan.abilities) {
//     console.log(ability);
// }

// // Log whether or not Iron Man appeared in spiderManHomecoming
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

// // Wait, that's not right -- he did appear in that movie! Change the value to true without editing the object itself and log it again to verify it changed
// ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);

// // Check if jarvis is there by calling on the jarvisAreYouThere function
// ironMan.jarvisAreYouThere();




  ////////////////////////////
 ////Assembling other Avengers
//////////////////////////////

const createCaptain = () => {
    return {
        aliases: {
            superheroName: "Captain America"
        },
        abilities: ["", "", "peak human strength"],
        sayPhrase: () => {
            return "I can do this all day"
        }
    }
};

// //The following code logs Captain America
// console.log(createCaptain().aliases.superheroName);
// //The following code logs peak human strength
// console.log(createCaptain().abilities[2]);
// //The following code logs i can do this all day
// console.log(createCaptain().sayPhrase());



// Create a data structure for blackWidow such that...
const blackWidow = {
    aliases: {
        realName: "Natalia Alianovna Romanova",
        otherNotableAliases: ["", "Natalie Rushman"]
    }
}

// // The following code logs Natalia Alianovna Romanova
// console.log(blackWidow.aliases.realName)
// // The following code logs Natalie Rushman
// console.log(blackWidow.aliases.otherNotableAliases[1])




  ////////////////////////////
 ////Avengers Nested
//////////////////////////////

const theAvengers = [
    { name: 'Tony Stark', superheroName: 'Iron Man'},
    { name: 'Steve Rogers', superheroName: 'Captain America' },
    { name: 'Bruce Banner', superheroName: 'The Hulk'},
    { name: 'Thor' },
    { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
    { name: 'Clint Barton', superheroName: 'Hawkeye' }
  ]

//Given the array above, loop through it and log just their name.

//   for(object of theAvengers) {
//       console.log(object.name);
//   }

// MCU Movies
// Given the following array of arrays, use two loops to loop over each inner array and list all the mcu movies.

const mcuMovies = [
    ['ant-man', 'ant-man and the wasp'],
    ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
    ['black panther'],
    ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
    ['doctor strange'],
    ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
    ['the hulk'],
    ['iron man', 'iron man 2', 'iron man 3'],
    ['spiderman: homecoming'],
    ['thor', 'thor: the dark world', 'thor: ragnarok']
  ]

//   for(row of mcuMovies) {
//       for(element of row) {
//           console.log(element);
//       }
//   }



  ////////////////////////////
 ////Other Objects - Instruments
//////////////////////////////

// Switching gears, let's look at some instrument data!

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}
// Given the above object...
// Log all of the following:

// telecaster
// console.log(instruments.guitar.electric[1]);
// santa cruz
// console.log(instruments.guitar.acoustic[2]);
// washburn
// console.log(instruments.banjo[2]);
// weber
// console.log(instruments.mandolin[1]);
// Loop through all the electric guitars and log them
// for(let electricGuitar of instruments.guitar.electric) {
//     console.log(electricGuitar);
// }
// Add a vocals property to the object that includes a list of your favorite singers

// instruments.vocals = ["Eric Clapton", "Robert Plant", "Mic Jagger"];
// console.log(instruments);


  ////////////////////////////
 ////Other Objects - Garmonbozia
//////////////////////////////

// In early 2017, digital archaeologists discovered a strangest, nonsensical combined data structure. Like in Raiders of the Lost Ark, they refused to look at it directly for fear of melting their faces off.

// They called it "Garmonbozia" after the Twin Peaks substance that represents suffering. That substance is creamed corn.

// Your mission is to console.log 'creamed corn' from deep within the bizarre structure:

const garmonbozia = {
  meltedFace: true,
  wobblyArms: true,
  mysteryMeats: [
    'Schlimmbinooks',
    'blangs',
    { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
    { type: 'Yuck-tops', deliverables: [
      'Nevermind',
      { zone: 'safety-zone' },
      { zone: false, true: true },
      () => {
        return () => {
          return () => {
            return () => {
              return () => {
                return { website: 'Gossipcop.com', what: {
                  offering: 'creamed corn', location: 'dark'
                }
                }
              }
            }
          }
        }
      }
     ]
    }
  ]
}


console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering);
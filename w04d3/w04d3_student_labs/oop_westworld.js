console.log("it's working")

// const host = {
//     name: "Roget",
//     occupation: "creator of Roget's Thesaurus",
//     saySpecs: () => {
//         console.log(`My name is ${host.name}. My occupation is ${host.occupation}.`);
//     }
// }

// host.saySpecs();


class BasicHost {
    constructor(name, occupation, personalityTraits) {
        this.name = name;
        this.occupation = occupation;
        this.personalityTraits = personalityTraits;
    }
    saySpecs () {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation}.`);
    }
}

let host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
console.log(host1)
let host2 = new BasicHost("Henry", "Sheriff");
console.log(host2);

host1.saySpecs();
host2.saySpecs();


const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

const personalityTraits = ["Empathy", "Loyalty", "Aggression", "Curiosity", "Bulk Apperception", "Fear"]

const hostArray = [];

for (let i = 0; i < 100; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    let randomTrait = Math.floor(Math.random() * personalityTraits.length);
    hostArray.push(new BasicHost(randomName,randomOccupation,personalityTraits[randomTrait]));
}

console.log(hostArray);
hostArray[1].saySpecs();


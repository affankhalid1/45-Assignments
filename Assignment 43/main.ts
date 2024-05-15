// Assignment 43

let magician_names: string[] = [
  "Merlin Shadowcaster",
  "Celestia Mystique",
  "Darius Blackwood",
  "Seraphina Spellweaver",
  "Orion Starlight",
];

// Declare a function to Loop through the array of magician names to modify it in a phrase
function make_great() {
  // The phrase
  let Phrase: string = "The Great to ";

  // Declare a new array
  let new_Magician: string[] = [];

  for (let i = 0; i < magician_names.length; i++) {
    new_Magician.push(Phrase + magician_names[i]);
  }
  return new_Magician;
}

// Declare a new variable to store a make_great() function
let new_Magicians: string[] = make_great();

// Declare a function to run through the Loop of Magician names
function show_magicians(magician_names: string[]) {
  for (let magician of magician_names) {
    console.log(magician);
  }
}


// Original names
show_magicians(magician_names);

console.log('\n')

// After modifying
show_magicians(new_Magicians);

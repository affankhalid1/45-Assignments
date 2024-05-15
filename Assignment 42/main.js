"use strict";
// Assignment 42
let magician_names = ["Merlin Shadowcaster", "Celestia Mystique", "Darius Blackwood", "Seraphina Spellweaver", "Orion Starlight"];
let Phrase = "The Great to ";
function make_great() {
    for (let i = 0; i < magician_names.length; i++) {
        magician_names[i] = Phrase + magician_names[i];
    }
}
make_great();
function show_magicians() {
    magician_names.forEach(magic => {
        console.log(magic);
    });
}
show_magicians();

"use strict";
// Assignment 44
function make_Sandwich(...Sandwich_ingredient) {
    console.log("\nMaking a Sandwich with following items");
    for (let i = 0; i < Sandwich_ingredient.length; i++) {
        console.log(". " + Sandwich_ingredient[i]);
    }
}
make_Sandwich("Mayonnaise", "Cucumber", "Chilli Sauce", "Boiled Egg", "Ketchup");
make_Sandwich("Ham", "Cheese", "Lettuce");
make_Sandwich("Peanut Butter", "Jelly");

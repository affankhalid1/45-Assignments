"use strict";
// Assignment 34
let favorite_pizza = ["Chicken Fajita ", "Fajita Scacilian ", "Malai Tikka ", "Chicken Afghani ", "Chicken Tandoori "];
console.log("\n");
for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(`${favorite_pizza[i]} is my Favourite Pizza Flavour.`);
}
console.log("\nI like these kinds of Pizza\n");
favorite_pizza.forEach(pizza => {
    console.log(pizza);
});
console.log("\nI really love Pizza");

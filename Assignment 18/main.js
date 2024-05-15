"use strict";
// Assignment 18
// Make an array which is not in Alphabetical order
let places_like_visit = ["New York", "Malaysia", "America", "Germany", "Turkey"];
// Print in its original order
console.log("Print it in its original order : ", places_like_visit);
// Print array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order : ", places_like_visit.slice().sort());
// Show that array is still in its original order by printing it.
console.log("Print it in its original order : ", places_like_visit);
// Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order : ", places_like_visit.slice().sort().reverse());
// Show that  array is still in its original order by printing it again.
console.log("Print it in its original order : ", places_like_visit);
// Reverse the order of  list. Print the array to show that its order has changed.
console.log("Order has changed : ", places_like_visit.reverse());
// Reverse the order of  list again. Print the list to show it’s back to its original order.
console.log("Back to its original order : ", places_like_visit.reverse());
// Sort array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has changed : ", places_like_visit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Order has changed : ", places_like_visit.sort().reverse());

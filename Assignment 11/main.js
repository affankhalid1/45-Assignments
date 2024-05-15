// Assignment 11
// Array
// Defines an array of names
let names = ["Abdul Rahman", "Ali", "Ebad", "Zeeshan", "Irfan"];
// for loop
// for each 
// for-of loop
// For Loop
console.log("\n Printing names with For Loop Method\n");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// For each 
console.log("\n Printing names with for each Loop method\n");
names.forEach(friends => {
    console.log(friends);
});
// For of Loop
console.log("\n Printing names with For of Loop method\n");
for (let friend of names) {
    console.log(friend);
}
export {};

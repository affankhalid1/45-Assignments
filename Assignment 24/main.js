// Assignment 24
// Have at least one True and one False result for each of the following:
// Point 1 • Tests for equality and inequality with strings:
let Name = "Affan";
let Name2 = "Khalid";
// false statement
console.log("Is Name === Name2 ? I Predict False.");
console.log(Name === Name2);
// true statement
console.log("Is Name !== Name2 ? I Predict True.");
console.log(Name !== Name2);
//Point 2 • Tests using the lower case function:
let Uppercase = "AFFAN";
let lowercase = "affan";
// true statement
console.log("Is Uppercase.tolowercase() == lowercase? I Predict True.");
console.log(Uppercase.toLowerCase() == lowercase);
// false statement
console.log("Is Uppercase.tolowercase() == 'Affan'? I Predict False.");
console.log(Uppercase.toLowerCase() == "Affan");
/* Point 3 • Numerical tests involving equality and inequality, greater than and less than,
   greater than or equal to, and less than or equal to*/
let Myage = 18;
// Numerical tests involving equality and inequality
//false statement
console.log("Is Myage !== 18? I Predict False.");
console.log(Myage !== 18);
// true statement 
console.log("Is Myage === 18? I Predict True.");
console.log(Myage === 18);
// Numerical Test involving greater than and less than
// false staement
console.log("Is Myage < 16? I Predict False.");
console.log(Myage < 16);
// true statement
console.log("Is Myage > 17? I Predict True.");
console.log(Myage > 17);
// Numerical test greater than or equal to, and less than or equal to
// true statement
console.log("Is Myage >= 16? I Predict True.");
console.log(Myage >= 16);
// False statement
console.log("Is Myage <= 16? I Predict False.");
console.log(Myage <= 16);
// Point 4 • Tests using "and" and "or" operators
let myCar = "BMW";
let myPhone = "SAMSUNG";
// "and" operator
// True statemeent 
console.log("Is myCar == 'BMW' and myPhone == 'SAMSUNG'? I predict True");
console.log(myCar == 'BMW' && myPhone == 'SAMSUNG');
// False Statement
console.log("Is myCar == 'BMW' and myPhone == 'REDMI'? I predict False");
console.log(myCar == 'BMW' && myPhone == 'REDMI');
// "or" operator
// False Statement
console.log("Is myCar == 'Toyota' or  myPhone == 'REDMI'? I predict False");
console.log(myCar == 'Toyota' || myPhone == 'REDMI');
// True Statement
console.log("Is myCar == 'BMW' or myPhone == 'REDMI'? I predict False");
console.log(myCar == 'BMW' || myPhone == 'REDMI');
// Point 5 • Test whether an item is in a array
let List = [1, 2, 3, 4, 5, 6];
let list2 = 6;
console.log(List.indexOf(list2) === -1); //true
// • Test whether an item is not in a array
console.log(List.indexOf(list2) !== -1); //false
export {};

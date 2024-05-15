// Assignment 2

import { log } from "console";

// store a person name in a variable 
let personname : string = "khalid ali";

//Declare the variable for performing the lowercase function with personname
let Lowercasename = personname.toLowerCase();

//Declare the variable for performing the uppercase function with personname
let uppercasename = personname.toUpperCase();


//Declare the variable for performing the titlecase function with personname
// step 1
let sentence : string[] = personname.split(" ")
// step 2
let titlecasename : string = "";
// step 3
for (let i = 0; i < sentence.length; i++)
{
    titlecasename += sentence[i].charAt(0).toUpperCase()
    +sentence[i].slice(1).toLowerCase() + " "
}


console.log(`Lowercase :  "${Lowercasename}"`);
console.log(`Uppercase :  "${uppercasename}"`);
console.log(`Titlecasename : "${titlecasename}"`);

"use strict";
// Assignment 13
let transportation_mode = ["car", "motorcycle", "bicycle", "bus"];
// for loop
for (let i = 0; i < transportation_mode.length; i++) {
    console.log(`I would like to own a ${transportation_mode[i]} `);
}
transportation_mode.forEach(transport => {
    console.log(`I would like to own a ${transport} `);
});

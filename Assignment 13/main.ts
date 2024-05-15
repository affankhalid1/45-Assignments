// Assignment 13

let transportation_mode : string[] = ["car","motorcycle","bicycle","bus"]

// for loop
for (let i = 0; i < transportation_mode.length; i++) {
console.log(`I would like to own a ${transportation_mode[i]} `)    
}

// for each loop
transportation_mode.forEach(transport => {
    console.log(`I would like to own a ${transport} `)
});
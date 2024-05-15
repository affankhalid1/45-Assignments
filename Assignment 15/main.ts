// // Assignment 15
let Guest_List : string[] = ["Shayan","Ebad","Aman","Laiba","Maheen"]

// Print the name who cant make dinner
let unableAttend : string | undefined = Guest_List.splice(2,1)[0]
console.log(`${unableAttend} is not invited for dinner .`)

// push
Guest_List.push("Shehzad");

// print a message
Guest_List.forEach(guest => {
    console.log(`Dear ${guest}, You are Cordially invited for dinner .`)
});
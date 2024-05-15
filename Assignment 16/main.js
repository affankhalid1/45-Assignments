// Assignment 16
let Guest_List = ["Shayan", "Ebad", "Shehzad", "Laiba", "Maheen"];
console.log("Great News! We found a bigger table .");
// unshift()
// Unshift is used for adding anything in in a start of an array
Guest_List.unshift("Sania");
// splice()
// At this place we use splice method for adding in a middle of an array
Guest_List.splice(Math.floor(Guest_List.length / 2), 0, "Areeba");
// push
// Push is used for add anything in last in array
Guest_List.push("Umaima");
Guest_List.forEach(guest => {
    console.log(`\nDear ${guest}, You all are Cordially invited for dinner .`);
});
export {};

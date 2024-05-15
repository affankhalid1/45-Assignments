// Assignment 17
let Guest_List = ["Shayan", "Ebad", "Shehzad", "Laiba", "Maheen"];
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Unfortunately! A table is not arranged so that we can only invite 2 Guests for dinner");
// Remove Guest from list until two remain
while (Guest_List.length > 2) {
    let Removedguest = Guest_List.pop();
    if (Removedguest !== undefined) {
        console.log(`Sorry, ${Removedguest} we cant invite you`);
    }
}
Guest_List.forEach(guests => {
    console.log(`Dear ${guests}, you both invited for dinner`);
});
// Remove the last two names and make the list empty
Guest_List.splice(0, Guest_List.length);
// Print the updated list 
console.log(`Updated List of Guests : ${Guest_List}`);
export {};

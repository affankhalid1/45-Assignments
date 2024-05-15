// Assignment 14

let Guest_List : string[] = ["Shayan","Ebad","Aman","Laiba","Maheen"]

for (let i = 0; i < Guest_List.length; i++) {
       console.log(`Dear ${Guest_List[i]}, you are cordially invited to dinner .`)    
}

let invitation : string[] = Guest_List.map(guest => `Dear ${guest}, you are cordially invited to dinner .`)
console.log(invitation)

invitation.forEach( guests => {
       console.log(guests)
});
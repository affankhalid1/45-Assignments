// Assignment 32

// • Make a list of five or more usernames called current_users.
let current_Users: string[] = ["Laiba", "Roman", "Malaika", "Sania", "Misbah", "Uqba", "Affan", "Sufiyan", "Yashal", "Ahsan"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_Users: string[] = ["Shaista", "Laiba", "Rabia", "Roman", "Nadia", "Uqba", "Malaika"];

for (let new_User of new_Users) {
    if (current_Users.some(user => user === new_User))
     {
        console.log(`Sorry, ${new_User} is already taken. Enter a new Username.`)
     }
        else
        {
            console.log(`${new_User} is available.`)
        }
}

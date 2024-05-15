// Assignment 30

let Usernames : string[] = ["ali123","admin","ilyas","elonmuski","nidoO13"];
 Usernames.sort()

for (let i = 0; i < Usernames.length; i++) {
if(Usernames[i] == "admin")
    {
        console.log("Hello admin, Would you like to see a status report?")
    } 
    else
    {
        console.log("Hello " + Usernames[i] + ", thank you for logging in again.")
    }   
}



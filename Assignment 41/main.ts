// Assignment 41

let magician_names : string[] = ["Merlin Shadowcaster","Celestia Mystique","Darius Blackwood","Seraphina Spellweaver","Orion Starlight"];


function magician_name (magician:string[])
{
    magician_names.forEach(magician => {
        console.log(magician)
    });
}

magician_name(magician_names)
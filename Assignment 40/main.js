"use strict";
// Assignment 40 
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    // Add number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different lbums
let album1 = make_album("Adele", "21");
let album2 = make_album("Ed Sheeran", "Divide", 26);
let album3 = make_album("Taylor Swift", "1989", 235);
console.log(album1);
console.log(album2);
console.log(album3);

"use strict";
// Assignment 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Jeddah", "Saudi Arabia");
describe_city("Kabul", "Afghanistan");
describe_city("Delhi", "India");

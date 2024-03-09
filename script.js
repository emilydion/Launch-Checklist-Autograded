// Write your JavaScript code here!
const scriptHelper = require("./scriptHelper.js");

window.addEventListener("load", function() {
    let document = window; 
    let form = document.querySelector("form"); 
    form.addEventListener("submit", function(event) {
        alert("submit clicked"); 
        let list = document.getElementById("faultyItems");
        let h2 = document.getElementById("launchStatus");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        scriptHelper.formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
    });
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });
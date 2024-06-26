// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   const missionTarget = document.getElementById("missionTarget"); 
   missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
   `;
 }
 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number"; 
    }
    if (!isNaN(testInput)) {
        return "Is a Number"; 
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let pilotValidation, copilotValidation, fuelLevelValidation, cargoMassValidation; 
    pilotValidation = validateInput(pilot);
    copilotValidation = validateInput(copilot); 
    fuelLevelValidation = validateInput(fuelLevel); 
    cargoMassValidation = validateInput(cargoMass); 

    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoMassValidation === "Empty") {
        alert("All fields must be filled!"); 
    } else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number") {
        alert("Pilot and Copilot fields must be valid strings!"); 
    } else if (fuelLevelValidation === "Not a Number" || cargoMassValidation === "Not a Number") {
        alert("Fuel Level and Cargo Mass fields must be valid numbers!");
    } else {
        const pilotStatus = document.getElementById("pilotStatus"); 
        const copilotStatus = document.getElementById("copilotStatus");
        const launchStatus = document.getElementById("launchStatus"); 
        const fuelStatus = document.getElementById("fuelStatus"); 
        const cargoStatus = document.getElementById("cargoStatus"); 

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        list.style.visibility = "visible"; 

        //both are ready
        if (fuelLevel >= 10000 && cargoMass <= 10000) {
            launchStatus.style.color = "green"; 
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
        }

        //fuel too low 
        if (fuelLevel < 10000 && cargoMass < 10000) {
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
        }
        
        //cargo too heavy
        if (cargoMass > 10000 && fuelLevel >= 10000) {
            launchStatus.style.color = "red"; 
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
        }

        //fuel and cargo too heavy
        if (fuelLevel < 10000 && cargoMass > 10000) {
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
        }
    }  
 }
 
 async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     return planetsReturned.json();
 }
 
 function pickPlanet(planets) {
    let selection = Math.floor(Math.random() * planets.length); 
    return planets[selection]; 
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
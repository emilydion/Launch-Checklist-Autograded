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
    let strings = [pilot.value, copilot.value];
    let numbers = [Number(fuelLevel.value), Number(cargoMass.value)];

    //need the actual values of these elements - I'm redefining the 
    //original variables but this can be done differently
    pilot = pilot.value
    copilot = copilot.value
    fuelLevel = Number(fuelLevel.value)
    cargoMass = Number(cargoMass.value)

    for (const string in strings) {
        let result = validateInput(strings[string]);
        if (result === "Is a Number" || result === "") {
            console.log("Must enter a string, try again");
        }
    }

    for (const number in numbers) {
        let result = validateInput(numbers[number]); 
        if (result === "Not a Number" || result === "") {
            console.log("Must enter a number, try again");
        }
    }

    const faultyItems = document.getElementById("faultyItems");
    const pilotStatus = document.getElementById("pilotStatus"); 
    const copilotStatus = document.getElementById("copilotStatus");
    const launchStatus = document.getElementById("launchStatus"); 
    const fuelStatus = document.getElementById("fuelStatus"); 
    const cargoStatus = document.getElementById("cargoStatus"); 

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    //make faultyItems list visible whether shuttle is available to launch or not
    list.style.visibility = "visible";
    
    if (cargoMass > 10000) {
        //faultyItems.style.visibility = "visible"; 
        launchStatus.style.color = "red"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
    } 

    if (fuelLevel < 10000) {
        //faultyItems.style.visibility = "visible"; 
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }

    if (fuelStatus >= 10000 && cargoMass <= 10000 ) {
        launchStatus.innerHTML = "Shuttle Is Ready for Launch";
        launchStatus.style.color = "green"; 
    }
 }
 
 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
        });
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

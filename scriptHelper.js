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
    let strings = [pilot.value, copilot.value];
    let numbers = [Number(fuelLevel.value), Number(cargoMass.value)];

    // pilot = pilot.value
    // copilot = copilot.value
    //fuelLevel = Number(fuelLevel.value)
    //cargoMass = Number(cargoMass.value)

    for (const string in strings) {
        let result = validateInput(strings[string]);
        if (result === "Empty") {
            //alert("All fields must be filled!");
            console.log("All fields must be filled!");
        }
        if (result === "Is a Number") {
            //alert("Must enter a valid string, try again!");
            console.log("Must enter a valid string, try again!");
        }
    }

    for (const number in numbers) {
        let result = validateInput(numbers[number]); 
        if (result === "Empty") {
            //alert("All fields must be filled!");
            console.log("All fields must be filled!");
        }
        if (result === "Not a Number") {
            //alert("Must enter a valid number, try again");
            console.log("Must enter a valid number, try again!"); 
        }
    }

    //const faultyItems = document.getElementById("faultyItems");
    const pilotStatus = document.getElementById("pilotStatus"); 
    const copilotStatus = document.getElementById("copilotStatus");
    const launchStatus = document.getElementById("launchStatus"); 
    const fuelStatus = document.getElementById("fuelStatus"); 
    const cargoStatus = document.getElementById("cargoStatus"); 

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    list.style.visibility = "visible"; 

    if ((Number(fuelLevel.value) >= 10000 || fuelLevel >= 10000) && (Number(cargoMass.value) <= 10000 || cargoMass <= 10000)) {
        launchStatus.style.color = "green"; 
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
    }
    
    if ((Number(cargoMass.value) > 10000 || cargoMass > 10000) && (Number(fuelLevel.value) > 10000 || fuelLevel > 10000)) {
        launchStatus.style.color = "red"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
    }

    if ((Number(fuelLevel.value) < 10000 || fuelLevel < 10000) && (Number(cargoMass.value) < 10000 || cargoMass < 10000)) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
    }

    if ((Number(fuelLevel.value) < 10000 || fuelLevel < 10000) && (Number(cargoMass.value) > 10000 || cargoMass > 10000)) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
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
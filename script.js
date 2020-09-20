// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} Ready`;
       document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} Ready`;
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
            alert("All fields required!");
            event.preventDefault();
       }
       if (typeof pilotNameInput.value !== "string" || typeof copilotNameInput.value !== "string"){
           alert("Pilot and CoPilot input must be a string");
           event.preventDefault();
       }
       if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true){
           alert("Fuel Level and Cargo Mass inputs must be numbers");
           event.preventDefault();
       }
       if (fuelLevelInput.value < 10000){
        let faultyItems = document.querySelector("#faultyItems");
        faultyItems.style.visibility = "visible";
        document.getElementById("fuelStatus").style.color ="red";
        document.getElementById("fuelStatus").innerHTML = "Shuttle not ready for launch";
        event.preventDefault();
       }
       event.preventDefault();
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

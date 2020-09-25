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
       }else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true || isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false) {
           alert("Valid inputs are required");
           event.preventDefault();
       }
       let faultyItems = document.querySelector("#faultyItems");
       let fuelStatus = document.getElementById("fuelStatus");
       let launchStatus = document.getElementById("launchStatus");
       let cargoMassStatus =document.getElementById("cargoStatus");
       if (fuelLevelInput.value < 10000){
           faultyItems.style.visibility = "visible";
           launchStatus.style.color = "red";
           launchStatus.innerHTML = "Shuttle not ready for launch";
           fuelStatus.innerHTML = "Not enough fuel for launch"
           event.preventDefault();
       }
       else if (cargoMassInput.value > 10000){
           faultyItems.style.visibility = "visible";
           launchStatus.style.color = "red";
           launchStatus.innerHTML = "Shuttle not ready for launch";
           cargoMassStatus.innerHTML = "Too much cargo mass for launch";
           event.preventDefault();
       }
       else if (fuelLevelInput.value >= 10000 & cargoMassStatus.value <= 10000){
        faultyItems.style.visibility = "visible";
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        event.preventDefault();
   }
       event.preventDefault();
   });
});
window.addEventListener("load",function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       response.json().then(function(json){
           const div = document.getElementById("missionTarget");
           div.innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[2].name}</li>
                    <li>Diameter: ${json[2].diameter}</li>
                    <li>Star: ${json[2].star}</li>
                    <li>Distance from Earth: ${json[2].distance}</li>
                    <li>Number of Moons: ${json[2].moons}</li>
                </ol>
                <img src="${json[2].image}">
            `;
       });
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

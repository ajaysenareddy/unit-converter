/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterFeetEl = document.getElementById("meter-feet");
const literGallonEl = document.getElementById("liter-gallon");
const kiloPoundEl = document.getElementById("kilo-pound");
const buttonEl = document.getElementById("convert-btn");


buttonEl.addEventListener("click", function() {
    const userInputEl = document.getElementById("user-input").value;
    const number = parseFloat(userInputEl);


    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }


    const metersToFeet = (number * 3.28084).toFixed(3);
    const feetToMeters = (number / 3.28084).toFixed(3);
    const litersToGallons = (number * 0.264172).toFixed(3);
    const gallonsToLiters = (number / 0.264172).toFixed(3);
    const kilogramsToPounds = (number * 2.20462).toFixed(3);
    const poundsToKilograms = (number / 2.20462).toFixed(3);


    meterFeetEl.innerText = `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`;
    literGallonEl.innerText = `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters`;
    kiloPoundEl.innerText = `${number} kilograms = ${kilogramsToPounds} pounds | ${number} pounds = ${poundsToKilograms} kilograms`;
});
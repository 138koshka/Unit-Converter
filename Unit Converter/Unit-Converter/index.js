/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("number-box")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-box")
const volumeEl = document.getElementById("volume-box")
const massEl = document.getElementById("mass-box")

//Button Event Listener//

convertBtn.addEventListener ("click", function() {
  const value = Number(inputEl.value)
  inputEl.value = ""
  convertLength(value)
  convertVolume(value)
  convertMass(value)
});



//Functions to Convert//

function convertLength(input, length){
    const feet = 3.281
    let feetNumber = input * feet
    let meterNumber = input / feet
    lengthEl.textContent = `${input} meters = ${feetNumber.toFixed(3)} feet ||
        ${input} feet = ${meterNumber.toFixed(3)} meters`
    
}

function convertVolume(input, volume){
    const gallons = 0.264
    let gallonNumber = input * gallons
    let literNumber = input / gallons
    volumeEl.textContent = `${input} liters = ${gallonNumber.toFixed(3)} gallons || 
        ${input} gallons = ${literNumber.toFixed(3)} liters`
}

function convertMass(input, mass){
    const pounds = 2.204
    let poundNumber = input * pounds
    let kilogramNumber = input / pounds
    massEl.textContent = `${input} kilograms = ${poundNumber.toFixed(3)} pounds ||
    ${input} pounds = ${kilogramNumber.toFixed(3)} kilograms`
}


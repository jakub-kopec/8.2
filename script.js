'use strict';
// *C -> F
var output = document.getElementById('greeter-output');

var buttonCelc = document.getElementById('celsius-button');

var tempCelc;

buttonCelc.addEventListener('click', function() {
    tempCelc = window.prompt('Please input temperature in *C');
    console.log(tempCelc);
    if (!isNaN(tempCelc)){
        output.innerHTML += 'Temperature in Celsius degrees is '+ tempCelc + '*C' + '<br><br>';
        output.innerHTML += 'Temperature in Fahrenheit degrees is '+ (tempCelc*1.8 + 32) + 'F' + '<br><br>';
        if (tempCelc < 0) {
            output.innerHTML += 'Water should become ice in this temp' + '<br><br>';
            if (tempCelc < -273) {
                output.innerHTML += 'The is no alive creature that would survive this temp' + '<br><br>';
            } else {
                output.innerHTML += 'There is a creature that would survive in this temp' + '<br><br>';
            }
        } else if (tempCelc > 0 && tempCelc < 100) {
            output.innerHTML += 'Water should be liquid in this temp!' + '<br><br>';
            if (tempCelc < 40 && tempCelc > 15) {
                output.innerHTML += 'You should wear ligth clothes' + '<br><br>';
            } else if (tempCelc > 40) {
                output.innerHTML += 'Don\'t go out!' + '<br><br>';
            } else {
                output.innerHTML += 'Take some warm clothes' + '<br><br>';
            }
        } else {
            output.innerHTML += 'Water should be steam in this temp!' + '<br><br>';
        }
    } else {
        output.innerHTML += 'Please give a number!' + '<br><br>';
    }
});

//F -> *C

var buttonFahr = document.getElementById('fahrenheit-button');

var tempFahr;

buttonFahr.addEventListener('click', function() {
    tempFahr = window.prompt('Please input temperature in *C');
    if (!isNaN(tempFahr)){
        output.innerHTML += 'Temperature in Celsius degrees is '+ tempFahr + 'F' + '<br><br>';
        output.innerHTML += 'Temperature in Fahrenheit degrees is '+ (tempFahr - 32)*5/9 + '*C' + '<br><br>';
        if (tempFahr < 0) {
            output.innerHTML += 'Water should become ice in this temp' + '<br><br>';
            if (tempFahr < -273) {
                output.innerHTML += 'The is no alive creature that would survive this temp' + '<br><br>';
            } else {
                output.innerHTML += 'There is a creature that would survive in this temp' + '<br><br>';
            }
        } else if (tempFahr > 0 && tempFahr < 100) {
            output.innerHTML += 'Water should be liquid in this temp!' + '<br><br>';
            if (tempFahr < 40 && tempFahr > 15) {
                output.innerHTML += 'You should wear ligth clothes' + '<br><br>';
            } else if (tempFahr > 40) {
                output.innerHTML += 'Don\'t go out!' + '<br><br>';
            } else {
                output.innerHTML += 'Take some warm clothes' + '<br><br>';
            }
        } else {
            output.innerHTML += 'Water should be steam in this temp!' + '<br><br>';
        }
    } else {
        output.innerHTML += 'Please give a number!' + '<br><br>';
    }
});
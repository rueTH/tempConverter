
var output = document.getElementById("convertedTemp");
var userTemp = document.getElementById("tempField").value;
var button = document.getElementById("convert");
var tempInput = document.getElementById("tempField");


button.addEventListener("click", whichConversion);


tempInput.addEventListener("keypress", pressed);
function pressed(e) {
console.log("event", e);	
if (e.keyCode === 13) { 
	whichConversion(e);
	}
}


 
function whichConversion(clickEvent) {
	var userTemp = document.getElementById("tempField").value

	if (document.getElementById('C').checked) {
		toCelsius(userTemp);
	} else if (document.getElementById('F').checked) {
		toFahrenheit(userTemp);
	} else {
		alert("Celsius or Fahrenheit? I'm a simplistic webapp, not a mind reader.");
	}
} 
function toCelsius (userTemp) {
	finalTemp =	Math.ceil(((userTemp * 9) / 5) + 32);

	if (finalTemp <= 0) {
		output.innerHTML = `<p style="color:blue">${finalTemp}</p>`;
	} else if (finalTemp >= 32) {
		output.innerHTML = `<p style="color:red">${finalTemp}</p>`;
	} else {
		output.innerHTML = `<p style="color:green">${finalTemp}</p>`;
	}
}

function toFahrenheit (userTemp) {
	finalTemp = Math.ceil(((userTemp - 32) * 5) / 9);

	if (finalTemp <= 32) {
			output.innerHTML = `<p style="color:blue">${finalTemp}</p>`;
	} else if (finalTemp >= 90) {
		output.innerHTML = `<p style="color:red">${finalTemp}</p>`;
	} else {
		output.innerHTML = `<p style="color:green">${finalTemp}</p>`;
	}
}







var clearText = document.getElementById("clear").addEventListener("click", function (event) {
	tempField.value = "";
	output.innerHTML = "";
	document.getElementById('C').checked = false;
	document.getElementById('F').checked = false;
});



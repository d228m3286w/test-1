console.log('world'); 



// function join() {
// 		var counter = 0
// 		counter += 1;
// 		console.log("counter is now " + counter);
// } 
var lightsaber = new Audio('Lightsaber.wav');
var dark = new Audio('Gun.wav');


var forceJoin = function(counter){
	this.counter = counter;

	this.darkSide = function() {
		this.counter++;
		console.log("counter is now " + this.counter);
		dark.play();
		document.getElementById("bad").innerHTML = this.counter;

	}

}
var forceGood = function(counter){
	this.counter = counter;

	this.lightSide = function() {
		this.counter++;
		console.log("counter is now " + this.counter);
		document.getElementById("good").innerHTML = this.counter;
		lightsaber.play();

	}

}



	





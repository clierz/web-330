/*
============================================
; Title:  Assignment 1.4
; Author: Professor Krasso 
; Date:   02 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates Duck typing
;===========================================
*/ 



var header = require('../header.js');
console.log(header.display("Caren", "Lierz", "Exercise 1.4"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model) {
    this.model = model;
}

Car.prototype.start = function(){
    console.log("Car added to the racetrack");
}

function Truck(model, year) {
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    console.log("Truck added to the racetrack");
}

function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack");

}

var racetrack = [];

function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

var honda = new Car("Honda");
var tahoe = new Truck("Chevy", "2018");
var wrangler = new Jeep("Wrangler", "1995", "Green");

console.log("");

driveIt(honda);
driveIt(tahoe);
driveIt(wrangler);

console.log('\n--The following vehicles have been added to the racetrack --');

for (var x = 0; x< racetrack.length; x++) {
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
    }



// end program



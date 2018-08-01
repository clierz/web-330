/*
============================================
; Title:  Assignment 1.3
; Author: Professor Krasso 
; Date:   31 July 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates functions in code
;===========================================
*/ 



var header = require('../header.js');
console.log(header.display("Caren", "Lierz", "Exercise 1.3"));


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

// Using functions, create a cell phone object with the specified properties / methods

function cellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;


this.getPrice = function() {
    return this.price;
}

this.getModel = function() {
    return this.model;
}


this.getDetails = function() {
    return "Manufacturer: " + this.manufacturer +
        "\nModel: " + this.getModel() +
        "\nColor: " + this.color +
        "\nPrice: " + this.getPrice();
    }

}

var carenPhone = new cellPhone("Apple", "ATT", "White", "$100.00");
console.log("\n-- DISPLAYING CELL PHONE DETAILS --")
console.log(carenPhone.getDetails());


// end program
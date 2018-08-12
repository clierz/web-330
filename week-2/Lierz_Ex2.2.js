/*
============================================
; Title:  Assignment 2.2
; Author: Professor Krasso 
; Date:   12 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates prototypes
;===========================================
*/ 

var header = require('../header.js');
console.log(header.display("Caren", "Lierz", "Exercise 2.2"));
console.log (" ");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//create a person variable

var person = 
{
    getAge: function()
    {
        return this.age;
    }
};

// build a person object

var Caren = Object.create(person, {
    "age":
    {
        "value": "39"
    },
    "fullname":
    {
        "value": "Caren Lierz"
    }
});

Caren.getAge();

// log out the full name of your new person object as well as their age
console.log("The person's full name is: '%s'", Caren.fullname);
console.log("The person's age is '%s'", Caren.age);






// end program
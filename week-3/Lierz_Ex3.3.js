/*
============================================
; Title:  Assignment 3.3
; Author: Professor Krasso 
; Date:   19 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates the singleton pattern
;===========================================
*/ 

var header = require('../header.js');
console.log(header.display("Caren", "Lierz", "Exercise 3.2"));
console.log (" ");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

// create a new function and name it databaseSingletonTest()


var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
 }
 return {
    getInstance: function() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }
    }
})();

function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}

databaseSingletonTest();


// end program
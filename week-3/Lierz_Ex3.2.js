/*
============================================
; Title:  Assignment 3.2
; Author: Professor Krasso 
; Date:   19 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates the factory pattern.  Factory patter can be used to build workflows in an application. 
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

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// add two additional function classes, one for oracle and one for informix.  Assign some default values to the properties. 

function Oracle (properties) {
    this.username = properties.username || 'admin';
    this .password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g';
}

function Informix(properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}


 // update the factory create database method with our 2 new functions (informix and oracle)

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    }

    if (properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === 'Informix') {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// add two additional database factory objects 

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "clierz",
    password: "1979"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "informix",
    username: "bklierz",
    password: "asdf123"
});

// use the console.log function and pass in each of the new objects

console.log(oracle);
console.log(informix);





// end program



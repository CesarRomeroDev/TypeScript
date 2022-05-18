"use strict";
var x; //* Explicitly declares x as a number type
var y = 1; //* Implicitly declares y as a number type
var z; //* Declares z without initializing it
x = 1;
/**
 * esto genera el error El tipo 'cadena' no se puede asignar
 * al tipo 'número' porque la verificación de tipo estático no
 * permite stringque se asigne a la variable.
 */
x = 'one';
y = 'one';
/**
 * Ingrese el nombre de la variable yseguido de un punto y notará
 * una cosa más. Aunque no especificó explícitamente un tipo para
 * la variable y, Intellisense proporciona métodos que solo se aplican a un numbertipo.
 */
// y.
/**
 * TypeScript ha inferido z que es de tipo any porque no asignó un tipo ni lo inicializó cuando se declaró
 */
z = 'one';
z = 1;
/**
 * Tipo Booleano
 */
var flag;
var yes = true;
var no = false;
/**
 * Tipo Numerico
 */
var xx;
var yy = 0;
var zz = 123.456;
var big = 100n;
/**
 * Tipo Cadena
 */
var s;
var empty = "";
var abc = 'abc';
/**
 * Cadena de Plantillas
 */
var firstName = "Mateo";
var sentence = "My name is " + firstName + ". I am new to TypeScript.";
console.log(sentence);

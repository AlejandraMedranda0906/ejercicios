//Separar por palabras y mostrar cuantas palabras tiene la siguiente frase:
//let phrase = 'La programación web es fundamental para el progres

`use strict`

let phrase = 'La programación web es fundamental para el progreso'

let palabras = phrase.split(" ");
let cantidadPalabras = palabras.length;
alert("La frase tiene " + cantidadPalabras + " palabras.");
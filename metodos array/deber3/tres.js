// En base al resultado del ejercicio anterior agrupar
//en un array únicamente las palabras que tengan mas de 3 letras

`use strict`

let phrase = 'La programación web es fundamental para el progreso';
let palabras = phrase.split(" ");
let tresLetras = palabras.filter(palabra => palabra.length > 3);
alert(tresLetras);
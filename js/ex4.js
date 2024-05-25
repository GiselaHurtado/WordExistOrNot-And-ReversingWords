function reverseWords(str) {
    // Recortar espacios innecesarios y dividir la cadena en palabras
    let words = str.trim().split(' ');

    // Invertir el arreglo de palabras y unirlo en una cadena
    let reversedStr = words.reverse().join(' ');

    return reversedStr;
}

// Ejemplos de uso
let inputString1 = "Hello World";
let inputString2 = "Hi There.";

console.log(reverseWords(inputString1)); // Debería imprimir "World Hello"
console.log(reverseWords(inputString2)); // Debería imprimir "There. Hi"


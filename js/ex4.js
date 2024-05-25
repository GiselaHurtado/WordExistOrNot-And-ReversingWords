function reverseWords(str) {
    
    let words = str.trim().split(' ');

    let reversedStr = words.reverse().join(' ');

    return reversedStr;
}

let inputString1 = "Hello World";
let inputString2 = "Hi There.";

console.log(reverseWords(inputString1)); 
console.log(reverseWords(inputString2)); 

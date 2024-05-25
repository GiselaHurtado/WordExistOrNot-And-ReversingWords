function containsWord(str, word) {
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseWord = word.toLowerCase();


    const containsWord = lowerCaseStr.includes(lowerCaseWord);

    return containsWord;
}


//const result = containsWord('abcdEnglishdgfdsgs', 'English'); // true
//console.log(result);

const result = containsWord('abcdEglishdgfdsgs', 'English'); // false
console.log(result);

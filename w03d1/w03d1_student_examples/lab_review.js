  //////////////////////////
 /// LAB REVIEW FORM W02D3
///////////////////////////


// const printLongestWord = (wordList) => {
//     //console logging the wordList array
//     // console.log(wordList);
//     //console logging the length of the word[0]
//     // console.log(wordList[0].length);
//     // Classic for loop: for (let i = 0; i < wordList.length; i++){}
//     let longestWord = "";
//     for (word of wordList) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
    
// };


// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));



//////////////////////////////
///#8 PROJECT EULER PROBLEM 2
/////////////////////////////

const generateFibSequence = (maxNumber) => {

    let fibNumbers = [1,2];
    let nextNumberInSequence = 0;

    while (nextNumberInSequence < maxNumber) {
    // gives you last number in array
        let lastNumber = fibNumbers[fibNumbers.length - 1];
        // gives you second to last number in array
        let secondToLastNumber = fibNumbers[fibNumbers.length - 2];

        nextNumberInSequence = lastNumber + secondToLastNumber;
        if (nextNumberInSequence < maxNumber) {
        fibNumbers.push(nextNumberInSequence);
        }
    }
    return fibNumbers;
}
console.log(generateFibSequence(999999));



// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

// const projectEuler = (num) => {

// }

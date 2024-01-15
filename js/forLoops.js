// 1. Using a for loop, print even numbers from 2 to 20.
function printEven(){
    for (let i = 2; i <=20; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

// 2. Using a while loop, print odd numbers from 1 to 15.
function oddNums(){
    let i = 1;
    while (i <= 15) {
        console.log(i);
        i += 2;
    }
}

// 3. Using a for loop, print the numbers from 1 to 100, but only if they are divisible by 7.
function divisibleNums(){
    for (let i = 1; i <= 100; i++){
        if (i % 7 === 0){
            console.log(i)
        }
    }
}

// 4. Using a for loop, find the sum of numbers from 1 to 100, but exclude numbers divisible by both 3 and 5.
function findNum(){
    let sum = 0;
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            sum += i;
        }
    }
    console.log(sum);
}

// 5. Using a for loop, print a pattern of stars in reverse:
// *****
// ****
// ***
// **
// *

function printStarts(){
    for(let i = 5; i > 0; i--){
        console.log('*'.repeat(i));
    }
}

// 6. Using a for loop, print a pattern of numbers in a pyramid shape:
//    1
//   123
//  12345

function numbersPyramid(){
    const lines = 3;
    for (let i = 1; i <= lines; i++) {
        let fullLine = '';
        for (let j = 1; j <= lines - i; j++) {
            fullLine += ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            fullLine += k;
        }
        console.log(fullLine);
    }
}

// 7. Using a for loop, calculate the factorial of 10.
function calcFactorial(num){
    let count = 1;
    for (let i = 1; i <= num; i++){
        count *= i;
    }
    console.log(count);
}

// 8. Using a while loop, print the numbers from 10 to 1 in reverse order.
function reverseNums(){
    let i = 10;
    while (i != 0) {
        console.log(i);
        i -= 1;
    }
}

// 9. Using a do-while loop, print the numbers from 5 to 1 in reverse order.
function reverseNumsDoWhile(){
    let i = 5;
    do {
        console.log(i);
        i--;
    } while (i != 0);
}

// 10. Using a for loop, print a pattern of alternating letters and numbers:
// A1
// B2
// C3
// D4
// E5

const alphabet = ['A', 'B', 'C', 'D', 'E'];
function alphNums(){
    for (let i = 0; i < alphabet.length; i++) {
        console.log(alphabet[i]+(i+1));
    }
}

// 11. Using a for loop, print the numbers from 50 to 1, but only if they are divisible by 5.
function reverseNumsDiv5(){
    let i = 50;
    while (i != 0) {
        if(i % 5 === 0){
            console.log(i);
        }
        i -= 1;
    }
}

// 12. Using a for loop, print numbers from 1 to 100, but replace multiples of 3 with "Three" and multiples of 7 with "Seven".
function printNums(){
    for(let i = 1; i <= 100; i++){
        if (i % 21 === 0) {
            console.log('Three and seven');
        } else if (i % 7 === 0){
            console.log('Seven');
        } else if (i % 3 === 0){
            console.log('Three');
        } else {
            console.log(i);
        }
    }
}

// 13. Using a for loop, print a pattern of stars:
//     *
//    ***
//   *****
//  *******
// *********

function startsPyramid(){
    const lines = 5;
    for (let i = 1; i <= lines; i++) {
        let fullLine = '';
        for (let j = 1; j <= lines - i; j++) {
            fullLine += ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            fullLine += '*';
        }
        console.log(fullLine);
    }
}

// 14. Using a for loop, print a pattern of numbers:
// 12345
//  1234
//   123
//    12
//     1

function numsPattern(){
    const lines = 5;
    for (let i = 1; i <= lines; i++) {
        let fullLine = '';

        for (let k = 0; k < i -1 ; k++) {
            fullLine += ' ';
        }

        for (let j = 1; j <= lines + 1 - i; j++) {
            fullLine += j;
        }

        console.log(fullLine);
    }
}

// 15. Using a for loop, print a pattern of letters:
// ABCDE
//  ABCD
//   ABC
//    AB
//     A
function alphPattern(){
    const lines = alphabet.length; //5
    for (let i = 1; i <= lines; i++) {
        let fullLine = '';

        for (let k = 0; k < i -1 ; k++) {
            fullLine += ' ';
        }

        for (let j = 1; j <= lines + 1 - i; j++) {
            fullLine += alphabet[j-1];
        }

        console.log(fullLine);
    }
}

// 16. Using a for loop, calculate the sum of the first 10 cube numbers.
function caclCubeNums(){
    let sum = 0;
    for (let i = 1; i < 11; i++){
        sum += Math.pow(i, 3);
    }
    console.log(sum);
}

// 17. Using a while loop, print numbers from 1 to 15, but skip numbers that are multiples of 3.
function skipNums(){
    let i = 0;
    while (i < 15) {
        i += 1;
        if (i % 3 === 0) {
            continue;
        }
        console.log(i);
    }
}

// 18. Using a do-while loop, print the first 10 natural numbers.
function naturalNums(){
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i < 11);
}

// 19. Using a for loop, find the product of numbers from 1 to 10, but exclude 7.
function prodNums(){
    let sum = 1;
    for (let i = 1; i < 11; i++){
        if (i == 7){
            continue;
        }
        sum *= i;
    }
    console.log(sum);
}

// 20. Using a for loop, print numbers from 1 to 25, but replace multiples of 4 with "four".
function skipFour(){
    for (let i = 0; i < 26; i++){
        if (i % 4 === 0){
            console.log('Four');
        } else{
            console.log(i);
        }
        
    }
}

// 21. Using a for loop, print numbers from 1 to 100, but replace multiples of 3 with "Fizz" and multiples of 5 with "Buzz". If a number is both a multiple of 3 and 5, print "FizzBuzz".
function fizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 22. Using a for loop, find and print the sum of all prime numbers between 1 and 50.
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeSum(){
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if(isPrime(i)){
            sum += i;
        }
    }
    console.log(sum);
}

// 23. Using nested for loops, print a pattern of stars in a diamond shape.
function printDiamondPattern(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }

    for (let i = height - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}




// 1. Calculates the area of a rectangle.

function rectangleArea(width, length){
    return `Rectangle area: ${width * length}`;
}

// console.log(rectangleArea(2,10));

// 2. Greets a person with a custom message.

function greetPerson(message, personName){
    let name = personName ? personName : 'Guest';
    let greet = message ? message : 'Welcome';
    return `${greet}, ${name}!`
}

// console.log(greetPerson('Labuuuuutis', 'Santa'));
// console.log(greetPerson());


// 3. Sums up a variable number of parameters.

function numbersSum(...nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

// console.log(numbersSum(1,2,3,4));

// 4. Demonstrates array destructuring by assigning values from the array to variables.

function numbersArray(arr){
    let [a, b, c] = arr;
    return [a, b, c];
}
// console.log(numbersArray([1, 2, 3, 4, 5, 6, 7]));

// 5. Combines two arrays using the spread operator.

function spreadArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

// console.log(spreadArrays(['Labas', 'as', 'krabas'], [1, 'ledai', 69]));

// 6. Concatenates two arrays using the concat method.

function conactArrays(arr1, arr2){
    return arr1.concat(arr2);
    // array1.concat
}

// console.log(conactArrays([1,2], ['Santa', 'Ieva', 51]));

// 7. Adds an element to the end of an array.

function addToArray(arr, ...element){
    arr.push(...element);
    return arr;
}

// console.log(addToArray(['Santa', 'Nala', 69], 'Bananas'));

// 8. Removes the last element from an array using the pop method.
/**
* Removes the last element from an array using the pop method.
* @param {string[]} arr - The array from which the last element will be removed.
* @returns {string} The removed element. before example: ["apple", "banana", "cherry"] after example: ["apple", "banana"]
*/

function removeLast(arr){
    arr.pop();
    return arr;
}

// console.log(removeLast([1, 2, 3, 5, 6]));

// 9. Adds an element to the beginning of an array.
/**
* Adds an element to the beginning of an array.
* @param {string[]} arr - The array to which the element will be added.
* @param {string} element - The element to add to the array.
* @returns {number} The new length of the array. before example: ["apple", "banana", "cherry"] after example: ["orange", "apple", "banana", "cherry"] 
*/

function addToBeginningArray(arr, ...element){
    arr.unshift(...element);
    return arr;
}

// console.log(addToBeginningArray([20,21,22], 'Kaciukas', 222));

// 10. Removes the first element from an array using the shift method.

function removeFirstElement(arr){
    arr.shift();
    return arr;
}

// console.log(removeFirstElement(['Santa', 1, 'Ieva', 2]));

// 11. Uses the splice method to remove elements from the middle of an array.

function spliceMethod(arr, start, deleteCount){
    arr.splice(start, deleteCount);
    return arr;
}

// console.log(spliceMethod([1, 2, 3, 4, 5], 1, 3));

// 12. Logs each element of an array to the console using forEach method.

function forEachArray(numbers){
    numbers.forEach((i)=> {
        console.log(i)
    })
}

// forEachArray([1, 2, 3]);

// 13. Doubles each element of an array using the map method.

function doubleElement(arr){
    return arr.map(i => i * 2);
}

// console.log(doubleElement([1, 2, 3]));

// 14. Logs a message to the console after a specified delay using setTimeout.

function delayMessage(message, delay){
    setTimeout(()=>{
        console.log(message);
    }, delay)
}

// delayMessage('Hello, World!', 1000);

// 15. Prints numbers from 1 to 5 with a 1-second delay between each number using setTimeout.

function printWithDelay() {
    for (let i = 1; i <= 5; i++) {
        setTimeout((i) => {
            console.log(i);
        }, i * 1000, i);
    }
}

// printWithDelay();

// 16. Squares each number in the array using map() method.

function squareElement(arr){
    return arr.map(i => Math.pow(i, 2));
}

// console.log(squareElement([1, 2, 3]));

// 17. Calculate the sum of an array of numbers using a callback function.

function calculateArraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// console.log(calculateArraySum([1, 2, 3]));

// 18. Greets a friend with their name.

function greetFriend(name){
    return `Hello, ${name}! How are you?`
}

// console.log(greetFriend('Santa'));

// 19. Multiplies two numbers

function multipieNums(num1, num2){
    return num1 * num2;
}

// console.log(multipieNums(3,5));

// 20. Task
/**
 * Finds the maximum number from a list of numbers.
 *
 * @param {...number} numbers - The numbers to find the maximum from.
 * @returns {number} The maximum number from the provided list of numbers.
 *
 * @example
 * // Find the maximum from the numbers 5, 8, and 3
 * const maxNumber = findMaximum(5, 8, 3);
 * console.log(maxNumber); // Output: 8
 */

// let arr = [22,99,100,55]

// console.log(Math.max(...arr));

// 21. Task
/**
 * Find the length of a string.
 *
 * @param {string} inputString - The string for which to determine the length.
 * @returns {number} The length of the input string.
 *
 * @example
 * // Find the length of the string "Hello, World!"
 * const stringLength = findStringLength("Hello, World!");
 * console.log(stringLength); // Output: 13
 */

// 22. Task
/**
 * Concatenates two arrays using the spread operator.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The concatenated array.
 *
 * @example
 * // Concatenate arrays [1, 2, 3] and [4, 5, 6]
 * const concatenatedArray = concatenateArrays([1, 2, 3], [4, 5, 6]);
 * console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
 */

// 23. Task
/**
/**
 * Check if a number is even.
 *
 * @param {number} num - The number to check for evenness.
 * @returns {boolean} true if the number is even, false if it's odd.
 *
 * @example
 * // Check if the number 6 is even
 * const isEven = checkIfEven(6);
 * console.log(isEven); // Output: true
 */

// 24. Task
/**
 * Generate a random whole number between 1 and 100.
 *
 * @returns {number} A random whole number between 1 and 100.
 *
 * @example
 * // Generate a random whole number between 1 and 100
 * const randomNumber = generateRandomNumberInRange();
 * console.log(randomNumber);
 */

// 25. Task
/**
 * Converts an array of strings to uppercase.
 *
 * @param {string[]} array - The array of strings to convert.
 * @returns {string[]} The converted array of uppercase strings.
 *
 * @example
 * // Convert an array of strings to uppercase
 * const originalArray = ["apple", "banana", "cherry"];
 * const uppercaseArray = convertArrayToUppercase(originalArray);
 * console.log(uppercaseArray); // Output: ["APPLE", "BANANA", "CHERRY"]
 */

// Intermediate

// 1 Task
/**
 * Removes specified elements from an array and replaces them with new elements.
 * @param {string[]} arr - The array to modify.
 * @param {number} start - The index at which to start changing the array.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {string[]} elementsToAdd - The elements to add in place of the removed elements.
 * @returns {string[]} The modified array. before example: ["apple", "banana", "cherry"] after example: ["apple", "kiwi", "orange", "cherry"]
*/
// Hints to help solve the task:
// 1. Use the splice method to remove elements from the array.
// 2. The splice method takes parameters for the start index, delete count, and elements to add.
// 3. Replace the specified elements with the new elements.
// 4. Return the modified array.



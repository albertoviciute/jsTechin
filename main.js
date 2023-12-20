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
/**
 * Calculate the sum of an array of numbers using a callback function.
 *
 * @param {number[]} numbers - An array of numbers to sum.
 * @param {function} callback - A callback function to process the sum.
 * @returns {number} The result of the callback function.
 *
 * @example
 * // Define a callback function to calculate the square of the sum
 * function squareSum(sum) {
 *   return sum * sum;
 * }
 *
 * // Calculate the sum of [1, 2, 3] and then square the result
 * const result = calculateArraySum([1, 2, 3], squareSum);
 * console.log(result); // Output: 36
 */


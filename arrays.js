// Classwork

const cartItems = [
    { id: 1, name: 'A', price: 30, quantinty: 2 },
    { id: 2, name: 'B', price: 10, quantinty: 3 },
    { id: 3, name: 'C', price: 50, quantinty: 1 }
]

// const itemDetails = cartItems.map((item) => (item))
const itemDetails = cartItems.map((i) => {
    return i.price * i.quantinty
});

let sum = 0;
const price = itemDetails.forEach(i => {
    sum += i;
});


// console.log(itemDetails, sum);

// Task 1: Calculate the sum of an array of numbers using the reduce method.

function calculateArrayValues(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// console.log(calculateArrayValues([1, 2, 3]));

// Task 2: Find the maximum value in an array using the reduce method.

function maxArrayNum(arr) {
    return arr.reduce((max, val) => Math.max(max, val));
}

// console.log(maxArrayNum([1, 2, 3]));

// Task 3: Combine an array of strings into a single string using the reduce method.

function concatStrings(arr){
    return arr.reduce((conc, val) => conc + val);
}

// console.log(concatStrings(['Hello', ', ', 'world', '!']));

// Task 4: Count the occurrences of each element in an array using the reduce method.

function countOcc(arr) {
    return arr.reduce((obj, val) => {
        obj[val] = (obj[val] || 0) + 1;
        return obj;
    }, [{}]);
}

// console.log(countOcc(['a', 'b', 'a', 'c', 'b']));

/**
 * Task 5: Reverse a string using the reduce method.
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 * Example: 'hello' => 'olleh'
 */

/**
 * Task 6: Calculate the average of an array of numbers using the reduce method.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} - The average of the array elements.
 * Example: [1, 2, 3] => 2
 */

/**
* Task 7: Filter out odd numbers from an array using the reduce method.
* @param {number[]} numbers - An array of numbers.
* @returns {number[]} - An array containing only even numbers.
* Example: [1, 2, 3, 4, 5] => [2, 4]
*/

/**
 * Task 8: Group an array of strings by their length using the reduce method.
 * @param {string[]} strings - An array of strings.
 * @returns {Object} - An object where keys are string lengths and values are arrays of strings of that length.
 * Example: { 3: ['foo', 'bar'], 5: ['hello', 'world'] }
 */

function countOccurrences(array) {
    const result = array.reduce(function (count, element) {
      count[element] = (count[element] || 0) + 1;
      return count;  
    }, {})
    return result
  }
   
  // {Element: 1, Element: 2, Element: 1}
   
  console.log(countOccurrences(['a', 'b', 'a', 'c', 'b']));




// 1. Calculates the area of a rectangle.
function rectangleArea(width, length){
    return `Rectangle area: ${width * length}`;
}

// 2. Greets a person with a custom message.
function greetPerson(message, personName){
    let name = personName ? personName : 'Guest';
    let greet = message ? message : 'Welcome';
    return `${greet}, ${name}!`
}

// 3. Sums up a variable number of parameters.
function numbersSum(...nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

// 4. Demonstrates array destructuring by assigning values from the array to variables.
function numbersArray(arr){
    let [a, b, c] = arr;
    return [a, b, c];
}

// 5. Combines two arrays using the spread operator.
function spreadArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

// 6. Concatenates two arrays using the concat method.
function conactArrays(arr1, arr2){
    return arr1.concat(arr2);
    // array1.concat
}

// 7. Adds an element to the end of an array.
function addToArray(arr, ...element){
    arr.push(...element);
    return arr;
}

// 8. Removes the last element from an array using the pop method.
function removeLast(arr){
    arr.pop();
    return arr;
}

// 9. Adds an element to the beginning of an array.
function addToBeginningArray(arr, ...element){
    arr.unshift(...element);
    return arr;
}

// 10. Removes the first element from an array using the shift method.
function removeFirstElement(arr){
    arr.shift();
    return arr;
}

// 11. Uses the splice method to remove elements from the middle of an array.
function spliceMethod(arr, start, deleteCount){
    arr.splice(start, deleteCount);
    return arr;
}

// 12. Logs each element of an array to the console using forEach method.
function forEachArray(numbers){
    numbers.forEach((i)=> {
        console.log(i)
    })
}

// 13. Doubles each element of an array using the map method.
function doubleElement(arr){
    return arr.map(i => i * 2);
}

// 14. Logs a message to the console after a specified delay using setTimeout.
function delayMessage(message, delay){
    setTimeout(()=>{
        console.log(message);
    }, delay)
}

// 15. Prints numbers from 1 to 5 with a 1-second delay between each number using setTimeout.
function printWithDelay() {
    for (let i = 1; i <= 5; i++) {
        setTimeout((i) => {
            console.log(i);
        }, i * 1000, i);
    }
}

// 16. Squares each number in the array using map() method.
function squareElement(arr){
    return arr.map(i => Math.pow(i, 2));
}

// 17. Calculate the sum of an array of numbers using a callback function.
function calculateArraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// 18. Greets a friend with their name.
function greetFriend(name){
    return `Hello, ${name}! How are you?`
}

// 19. Multiplies two numbers
function multipieNums(num1, num2){
    return num1 * num2;
}

// 20. Task
function maxValue(arr){
    return Math.max(...arr);
}

// 21. Task
function stringLength(str){
    return str.length;
}

// 22. Task
function concateArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

// 23. Task
function isEven(num){
    return num % 2 === 0 ? true : false;
 }


// 24. Task
function randomNumberGenerator(){
    return Math.floor(Math.random() * 100) + 1;
}

// 25. Task
function arrayToUpperCase(arr){
    return arr.map((x) => x.toUpperCase());
}

// Intermediate

// 1 Task
function replaceArrayInfo(arr, start, deleteCount, ...elementsToAdd){
    arr.splice(start, deleteCount, ...elementsToAdd);
    return arr;
}


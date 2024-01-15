// Classwork
const cartItems = [
    { id: 1, name: 'A', price: 30, quantinty: 2 },
    { id: 2, name: 'B', price: 10, quantinty: 3 },
    { id: 3, name: 'C', price: 50, quantinty: 1 }
]

const itemDetails = cartItems.map((i) => {
    return i.price * i.quantinty
});

let sum = 0;
const price = itemDetails.forEach(i => {
    sum += i;
});


// Task 1: Calculate the sum of an array of numbers using the reduce method.
function calculateArrayValues(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Task 2: Find the maximum value in an array using the reduce method.
function maxArrayNum(arr) {
    return arr.reduce((max, val) => Math.max(max, val));
}

// Task 3: Combine an array of strings into a single string using the reduce method.
function concatStrings(arr){
    return arr.reduce((conc, val) => conc + val);
}

// Task 4: Count the occurrences of each element in an array using the reduce method.
function countOcc(arr) {
    return arr.reduce((obj, val) => {
        obj[val] = (obj[val] || 0) + 1;
        return obj;
    }, [{}]);
}

// Task 5: Reverse a string using the reduce method.
function reversedString(str){
    return str.split('').reduce((rev, i) => i + rev, '');
}

// Task 6: Calculate the average of an array of numbers using the reduce method.
function arrayAverage(arr){
    return arr.reduce((aver, sum) => aver + sum, 0)/arr.length;
}

// Task 7: Filter out odd numbers from an array using the reduce method.
function oddNums(arr){
    return arr.reduce((odd, num) => {
        if (num % 2 === 0){
            odd.push(num)
        }
        return odd;
    }, []);
}

// Task 8: Group an array of strings by their length using the reduce method.
function countOccurrences(array) {
    const result = array.reduce(function (count, element) {
      count[element] = (count[element] || 0) + 1;
      return count;  
    }, {})
    return result
  }




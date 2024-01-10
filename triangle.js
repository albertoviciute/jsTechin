// Trikampio kraštinės (atskirai) surašytos į masyvą.
// Turime 5 trikmapius.
let borderOne = [5, 6, 8, 7, 9]; 
let borderTwo = [8, 6, 5, -7, 4]; 
let borderThree = [10, -2, 5, 4, 7]

function calcTriangleArea(borderOne, borderTwo, borderThree){
    let p = (borderOne + borderTwo + borderThree)/2;
    return Math.sqrt(p * (p - borderOne) * (p - borderTwo) * (p - borderThree));
}

let area;

for (let i = 0; i < borderOne.length; i++) {
    let isPossible = isTrue(borderOne[i], borderTwo[i], borderThree[i]);
    if (isPossible){
        area = calcTriangleArea(borderOne[i], borderTwo[i], borderThree[i]);
        console.log(`Triangle ${i + 1}: Area = ${area}`);
    } else {
        console.log('Impossible to create a triangle.');
    }
}

function isTrue(a,b,c){
    return (b + c > a && a + c > b && a + b > c);
}

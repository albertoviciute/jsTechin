let person = {
    name: "Santa",
    surname: "Albertovičiūtė",
    age: 25,
    education : {
        bachelors:{
            institution: "VIKO",
            profession: "Dietitian",
            graduationYears: 2021
        }, 
        courses: {
            institution: "Code Academy",
            profession: "Python developer",
            graduationYears: 2022
        }
    },
    drivingLicense: true,
    pets: ["Kate", "Tuna", "Nala"]
}

// Krepšininkų uždavinys
let krepsininkai = [
    {
        krepsininkas: 23,
        ugis: 211,
        dvitaskiai: 15,
        tritaskiai: 2
    },
    {
        krepsininkas: 9,
        ugis: 195,
        dvitaskiai: 20,
        tritaskiai: 5
    },
    {
        krepsininkas: 11,
        ugis: 199,
        dvitaskiai: 98,
        tritaskiai: 6
    },
    {
        krepsininkas: 57,
        ugis: 215,
        dvitaskiai: 14,
        tritaskiai: 1
    },
    {
        krepsininkas: 69,
        ugis: 191,
        dvitaskiai: 48,
        tritaskiai: 2
    }
];
// Rasti:
// Raskite vidutinį krepšininkų ūgį? ATS.: 202.2
let averageHeight = 0;
const heights = krepsininkai.forEach(i => {
    averageHeight += i.ugis;
});
const result = averageHeight/krepsininkai.length;

// Raskite kiek krepšininkų yra didesnių už vidutinį krepšininkų ūgį? ATS.: 2
const biggerThanAverage = krepsininkai.filter(val => val.ugis > result).length;

// Raskite aukščiausio krepšininko dvitaškių skaičių? ATS.: 14
let tallest = krepsininkai[0];
for (let i = 1; i < krepsininkai.length; i++) {
    if (krepsininkai[i].ugis > tallest.ugis) {
        tallest = krepsininkai[i];
    }
}
let tallestCount = tallest.dvitaskiai;

console.log(tallestCount)

// Raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr.? ATS.: 2 ir 69
let smallest = krepsininkai[0];
for (let i = 1; i < krepsininkai.length; i++) {
    if (smallest.ugis > krepsininkai[i].ugis) {
        smallest = krepsininkai[i];
    }
}
let smallestCount = smallest.tritaskiai;
let smallestNum = smallest.krepsininkas;

console.log(smallestCount, smallestNum);

// Task 1
function volumeOfBox(sizes){
    let sum = 1;
    for (var key in sizes) {
        console.log(sizes[key]);
        sum *= sizes[key];
    }
    return sum;
}

//console.log(volumeOfBox({width: 2, lenght: 5, height: 1}));

// Task 2
function isInRange(num,range){
    return num >= range.min && num <= range.max;
}

// console.log(isInRange(4, {min: 0, max: 5}));
// console.log(isInRange(5, {min: 5, max: 5}));

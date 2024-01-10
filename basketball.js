let players = [23, 9, 11, 57, 69];
let playersHeight = [211, 195, 199, 215, 191];
let twoPoints = [15, 20, 98, 14, 48];
let threePoints = [2, 5, 6, 1, 2];

// Raskite vidutinį krepšininkų ūgį? ATS.: 202.2
let averageHeight = 0;
const heights = playersHeight.forEach(i => {
    averageHeight += i;
});
const result = averageHeight/playersHeight.length;

// Raskite kiek krepšininkų yra didesnių už vidutinį krepšininkų ūgį? ATS.: 2
const biggerThanAverage = playersHeight.filter(val => val > result).length;

// Raskite aukščiausio krepšininko dvitaškių skaičių? ATS.: 14
let tallest = Math.max(...playersHeight);
const tallestCount = twoPoints[playersHeight.indexOf(tallest)];

// Raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr.? ATS.: 2 ir 69
let smallest = Math.min(...playersHeight);
const smallestCount = threePoints[playersHeight.indexOf(smallest)];
const smallestNum = players[playersHeight.indexOf(smallest)];
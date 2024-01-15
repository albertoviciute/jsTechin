function calcCylinderArea(r, h) {
    const piValue = Math.PI;
    return 2 * piValue * Math.pow(r, 2) + 2 * piValue * r * h;
}

function isPossible(r,h){
    return r > 0 && h > 0;
}

function printCylinderInfo(r,h,s) {
    console.log(`Cilindro, kurio cilindro pagrindo spindulys r = ${r} ir ritinio aukštinė h = ${h} , ${typeof s === 'number' ? 'paviršiaus plotas yra:' + s : 'neegzistuoja'}`);
}

let r = [5, -6, 8, 7, 9]; 
let h = [8, 6, 5, -7, 4];
let area;

for (let i = 0; i < r.length; i++) {
    let isTrue = isPossible(r[i], h[i]);
    if (isTrue){
        area = calcCylinderArea(r[i], h[i]);
        printCylinderInfo(r[i], h[i], area);
    } else {
        printCylinderInfo(r[i], h[i]);
    }
}
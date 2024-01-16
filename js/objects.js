// 1. Sukurti tuščią objektą pavadinimu sandėlis. Pridėti tokius raktus ir reikšmes: staliniai kompiuteriai - 30, nešiojami kompiuteriai - 35, išorinės duomenų laikmenos - 125. Sukurti kitą objektą (pvz. sandėlioArchyvas), kuris saugotų objekto sandėlis kopiją. Pakeisti objekto sandėlis rakto, nešiojami kompiuteriai, reikšmę į 33. Pašalinti objekto sandėlis staliniai kompiuteriai raktą ir reikšmę. Atspausdinti objektą sandėlis ir objektą sandėlioArchyvas. Ar jie lygūs? Kodėl?




// 2. Sukurti objektą, kuris saugo informaciją apie knygą. Pvz.:
// Autorius: Abigal Dean
// Leidėjas: Alma littera
// Metai: 2021
// Puslapiai: 384
// Kalba: Lietuvių
// Įvertinimas: 4.5/5

let knyga = {
    autorius: "Abigal Dean",
    leidejas: "Alma littera",
    metai: 2021,
    puslapiai: 384,
    kalba: "Lietuvių",
    ivertinimas: "4.5/5"

}
// Atspausdinti visas objekto reikšmes. Naudoti ciklą for..in.
// 2. 1. Sukurti funkciją printInfo(obj), kuri atspausdina informaciją apie knygą.
function printObjValues(obj) {
    for (var key in obj) {
        console.log(obj[key]);
    }
}

// 2. 2. Sukurti kelis knygų objektus, sudėti juos į masyvą ir atspausdinti, panaudojant prieš tai sukurtą funkciją printInfo(obj).
let knyga2 = {
    autorius: "Petras Petraitis",
    leidejas: "Alma littera",
    metai: 2001,
    puslapiai: 874,
    kalba: "Lietuvių",
    ivertinimas: "2/5"

};
let knyga3 = {
    autorius: "Ponas Pomidoras",
    leidejas: "Alma littera",
    metai: 1998,
    puslapiai: 1935,
    kalba: "Anglų",
    ivertinimas: "5/5"

}
let knygos = [knyga, knyga2, knyga3];

function printObjValues2(arr) {
    for (let i = 0; i < knygos.length; i++) {
        for (var key in arr[i]) {
            console.log(arr[i][key]);
        }
    }

}

// 3. Sukurti objektą algos, kuriame išsaugoti šias reikšmes: Jonas - 300, Petras - 400, Rasa - 500. Apskaičiuoti ir atspausdinti visų darbuotojų algų bendrą sumą.
let algos = {
    jonas: 300,
    petras: 400,
    rasa: 500
}

// 3. 1. Sukurti funkciją, kuri apskaičiuoja visų darbuotojų algų bendrą sumą.
function totalSalary(obj) {
    let sum = 0;
    for (var key in obj) {
        sum += obj[key];
    }
    return sum;
}

// 3. 2. Sukurti kelių įmonių darbuotojų algų sąrašus-objektus. Darbuotojų skaičius turi būti skirtingas. Sudėti visus įmonių darbuotojų sąrašus į masyvą. Atspausdinti kiekvienos įmonės darbuotojų algų bendrą sumą.
let employeesSalaries = [
    {
        jonas: 300,
        petras: 400,
        rasa: 500
    },
    {
        tomas: 1000,
        ieva: 300,
        gabija: 150,
        liepa: 800
    },
    {
        saule: 780,
        jonas: 1300,
        vytautas: 2000
    }
]

function totalSalary(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (var key in arr[i]) {
            sum += arr[i][key];
        }
        console.log(`Company nr. ${i} employees total salary ${sum}`);
    }
}

// 3. 3. Apskaičiuoti kiek iš viso įmonės skirs algoms.

function totalSalaryAll(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            sum += arr[i][key];
        }
    }
    console.log(sum);
}

// 4. Sukurti funkciją, kuri suformatuotų ir atspausdintų objekto reikšmes. Pvz. Objektas turi šias reikšmių poras: name: “John”, age: 33. Funkcijos rezultatas turėtų būti: “John is 33 years old.”
// Funkcija - printInfo(obj);

function printInfo(obj) {
    return `${obj.name} is ${obj.age} years old.`
}

// console.log(printInfo({name: 'John', age: 33}));

// 5. Sukurti masyvą, kuris saugotų tris objektus. Objektas turi dvi reikšmių poras. Pvz.: name: “John”, age: 33. Pridėti dar kelis objektus į masyvą. Objekto reikšmes įvesti iš klaviatūros.



// Sukurti funkciją, kuri spausdina visas objekto reikšmes: printInfo(arr);
// Sukurti tuščią masyvą. Iš klaviatūros n kartų įvesti prekės pavadinimą ir kainą (visos prekės skirtingos). Šią prekės informaciją išsaugoti objekte ir pridėti į masyvą. Sukurti atitinkamas funkcijas ir atspausdinti rezultatus:
//         1. Visų prekių sąrašą: prekės pavadinimas: printCart(arr), pvz.: Pienas - 0.69 Eur.
//         2. Atspausdinti prekių kiekį: get…(arr);
//         3. Atspausdinti prekių sumą: get…(arr);
//         4. Atspausdinti prekę, kurios kaina yra didžiausia, get…(arr), pvz.: Kumpis - 7.99 Eur.
//         5. Atspausdinti prekę, kurios kaina yra mažiausia, get…(arr), pvz.: Trintukas - 0.29 Eur.
//         6. Atspausdinti vidutinę prekių kainą: get…(arr);
// Papildomai:


// ***Sukurti funkciją isEmpty(obj), kuri grąžina true, jeigu objektas neturi nei vieno rakto ir reikšmės, kitu atveju - false.

// Pavyzdys:
// let prekes = {};
// alert( isEmpty(prekes) ); // true

// prekes["obuoliai"] = 1.99;

// alert( isEmpty(prekes) ); // false


// Complete the function getPassingTests such that it returns all the test results that have a passing grade (10 and above).

// Pavyzdys:
// const data = [{

//     id: 1,

//     grade: 10

// }, {

//     id: 2,

//     grade: 4

// }, {

//     id: 3,

//     grade: 18

// }]

// console.log(getPassingTests(data)); // [{"id":1,"grade":10}, {"id":3,"grade":18}]
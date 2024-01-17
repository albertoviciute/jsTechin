let books = [
    {
        pavadinimas: "Smarkuolė Gilė Hopkins",
        puslapiai: 60
    },
    {
        pavadinimas: "Alisa Stebuklų šalyje",
        puslapiai: 192
    },
    {
        pavadinimas: "Jurgelis miškauja",
        puslapiai: 112
    },
    {
        pavadinimas: "Paslaptingas drakonas",
        puslapiai: 102
    },
    {
        pavadinimas: "Penktoji šlepetė plius",
        puslapiai: 200
    }
]

// Sukurti funkcijas:
// 1. printBook(book) - atspausdina vienos knygos duomenis;
function printBook(book) {
    console.log(`Knygos pavadinimas: ${book.pavadinimas}, puslapių kiekis: ${book.puslapiai}.`);
}

// 2. printAllBooks(arr) - atspausdina visas knygas;
function printAllBooks(arr) {
    for (let i = 0; i < arr.length; i++) {
        printBook(arr[i]);
    }
}

// 3. getBooksCount(arr) - grąžina perskaitytų knygų skaičių;

function getBooksCount(arr){
    return arr.length;
}

// 4. getTotalNumberOfPages(arr) - grąžina perskaitytų knygų puslapių skaičių;
function getTotalNumberOfPages(arr){
    return arr.reduce((count, book) => count + book.puslapiai, 0);
}

// 5. getMaxPages(arr) - grąžina knygą, kuri turi daugiausiai puslapių;
function getMaxPages(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].puslapiai > max.puslapiai) {
            max = arr[i];
        }
    }
   return max.pavadinimas;
}

// 6. getAvgNumberOfPages(arr) - grąžina perskaitytų knygų puslapių vidurkį.

function getAvgNumberOfPages(arr){
    let pages = getTotalNumberOfPages(arr);
    return pages / arr.length;
}
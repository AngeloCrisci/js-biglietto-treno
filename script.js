console.log('JS OK')

// 
/* 
Bonus- (0) Recuperiamo l'elemento d'interesse dal DOM.
1. Chiediamo Il numero di kilometri all'utente.
2. Chiediamo l'età del passegero.
3. Calcoliamo il prezzo in base ai kilometri (0.21 € per km).
4. Applichiamo il 20 % per i < di 18 anni.
5. Applichiamo il 40% per i > di 65 anni.
6. Stampiamo in pagina.
Bonus Mostriamo in pagina.
*/

// Recupero l'elemento in pagina-Bonus


// 1
const kmNumber = parseInt(prompt('Quanti kilometri devi percorrere?', 50));
console.log(kmNumber);

// 2

const ageNumber = parseInt(prompt('Quanti anni ha il passeggero?', 20));
console.log(ageNumber);

// 3

const generatedPrice = kmNumber + ageNumber * 0.21;
console.log(generatedPrice);

// 4

const discountMinor = 20;
const discountMajor = 40;
let calculatedPerc;
const discountedPrice = generatedPrice - calculatedPerc;

if ( ageNumber < 18){
    calculatedPerc = generatedPrice * discountMinor / 100;
}
else if (ageNumber > 65){
    calculatedPerc = generatedPrice * discountMajor / 100;
}

console.log(calculatedPerc);
console.log(discountedPrice);

//Bonus 

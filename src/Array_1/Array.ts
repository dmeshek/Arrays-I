// ARRAY LEVEL 1_1
const bucketList: string[] = ["Kosovo", "Albanien", "Deutschland"];
const favoriteNumbers: number[] = [1, 2, 313];
const favoritePeople: string[] = ["saw", "mama", "papa"];

console.log(bucketList);
console.log(favoriteNumbers);
console.log(favoritePeople);

// ARRAY LEVEL 1_2

console.log(bucketList[0]);
console.log(favoriteNumbers[2]);
console.log(favoritePeople[0]);

// ARRAY LEVEL 1_3 (length)

console.log(bucketList.length);
console.log(favoriteNumbers.length);
console.log(favoritePeople.length);

// ARRAY LEVEL 1_4 (push)

let kassenBon: string = ["Wasser", "Chips", "Cola"];

kassenBon.push("Fanta", "Kokosnuss");
console.log(kassenBon);

// ARRAY LEVEL 1_5 (pop)
let kassenBonZwei: string = ["Wasser", "Chips", "Cola", "Fanta", "Kokosnuss"];
kassenBonZwei.pop(); // entfernt das letzte Element
console.log(kassenBonZwei); // clg zeigt die Werte in der Konsole an


// ARRAY LEVEL 1_6 (shift)
let kassenBonDrei: string = ["Wasser", "Chips", "Cola"];
kassenBonDrei.shift();
// shift entfernt das erste Array-Element und schiebt alle anderen Elemente nach vorne
console.log(kassenBonDrei);



// ARRAY LEVEL 1_7 (unshift)
let printCitites: string = ["Kiel", "Düsseldorf", "Köln"];
printCitites.unshift("HAMBURG"); //fügt ein Array Element am Anfang hinzu
console.log(printCitites);

// ARRAY LEVEL 1_8 (slice)
const favReiseZiel: string[] = ["China", "Japan", "Albanien", "Kroatien"];
console.log("vor slice:", favReiseZiel);
const citieSlice = favReiseZiel.slice(1,3);
console.log("nach Slice:", citieSlice);


// ARRAY LEVEL 1_9 (push/ pop / unshift)
const numerArray: number[] = [23, 54, 75];
numerArray.push(11, 32, 42, 5, 71);
numerArray.unshift(1, 3, 7, 8, 14);
numerArray.pop();
numerArray.pop();
numerArray.shift();
numerArray.shift();
console.log(numerArray);

// ARRAY LEVEL 1_10 (split)
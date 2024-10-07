// array_learning.js

const array = ["first", "second", "third"];
console.log(array);

// První prvek array + výpis do konzole
console.log(array[0]);

// procyklení for
for (let i = 0; i < array.length; i++) {
  console.log("Cyklím array index prvku: " + i + " hodnota prvku: " + array[i]);
}

// procyklení foreach
array.forEach((element, index) => {
  console.log("Hodnota prvku: " + element + " Index: " + index);
});

// ! Název arraye: množné číslo, název prvku ve forEach: jednotné číslo
const passwords = ["p1", "p2"];
passwords.forEach((password) => {});

/*
Vytvořte ve složce: javascript-learning/exercises soubor: foreach_exercise.js
Vytvořte array: usernames
Tuto array naplňte alespoň pěti string hodnotami.
Vytvořte forEach, který postupně vypíše hodnoty z array usernames
*/

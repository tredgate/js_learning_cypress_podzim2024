const actualAge = -5;
const drinkingAgeLimit = 18;
const fullName = "Jirka Novák";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // stejné jako: fullname + " už může pít alkohol."
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.log("Neplatný věk!");
}

/*
Vytvořte jednoduchý program pro výpočet známky studentům.

Vytvořte soubor: students_grading.js
Ve složce: javascript-learning/exercises

Vstupy: 
Počet bodů studenta (max 100 bodů).
Jméno studenta.

Hodnocení:
Známka A: 90 - 100 bodů
Známka B: 85 - 89 bodů
Známka C: 75 - 84 bodů
Známka D: 70 - 74 bodů
Známka E: 60 - 69 bodů
Známka F: méně než 60 bodů

Výsledek zaloguj srozumitelně do konzole s jménem.
TIP: začni podmínku od 90 bodů, ať se ti správně vyhodnotí podmínky níže.

*/

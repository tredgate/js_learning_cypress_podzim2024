const points = 60;
const studentName = "Marie Dlouhá";
let grade;

if (points >= 90) {
  grade = "A";
} else if (points >= 85) {
  grade = "B";
} else if (points >= 75) {
  grade = "C";
} else if (points >= 70) {
  grade = "D";
} else if (points >= 60) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`Student/ka: ${studentName} dosáhl/a známky: ${grade}`);

/*
Změny pushni do Github (add, commit, push) - nezapomeň na to, že je branch nová a u push musíme zadávat -u
Vytvoř Pull Request do mainu.
Schval a zmerguj Pull Request do mainu.
*/

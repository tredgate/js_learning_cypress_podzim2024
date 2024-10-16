import { EntryHall } from "./entry_hall.mjs";

export class Bathroom {
  constructor() {
    console.log("Uživatel vstoupil na toaletu");
  }

  washHands() {
    console.log("Uživatel si umyl ruce");
    return this;
  }

  goBackToEntryHall() {
    console.log("Uživatel odchází z toalety do vstupní haly");
    return new EntryHall();
  }
}

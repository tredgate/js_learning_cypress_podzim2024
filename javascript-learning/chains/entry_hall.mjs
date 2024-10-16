import { Bathroom } from "./bathroom.mjs";

//bathroom.mjs
export class EntryHall {
  constructor() {
    console.log("Uživatel vstoupil do vstupní haly");
  }

  askReceptionistQuestion(question) {
    console.log("Uživatel se zeptal recepční na otázku: " + question);
    console.log("Recepční mlčí");
    return this;
  }

  entryBathroom() {
    console.log("Uživatel odchází na toaletu");
    return new Bathroom();
  }
}

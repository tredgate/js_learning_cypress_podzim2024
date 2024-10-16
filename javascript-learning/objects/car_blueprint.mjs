//car_blueprint.js
export class CarBlueprint {
  constructor(color, motor, fuel) {
    this.color = color; // ? this.color - property (proměnná třídy), color (parametr konstruktoru)
    // 2 proměnné: this.color, color <- existuje jenom v constructoru.
    this.motor = motor;
    this.fuel = fuel;
    this.wheels = 4;
    console.log(
      `Auto bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
  }

  logCarProperties() {
    console.log(
      `Informace o autě: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
  }

  // ? Vytáhne property this.color a vrátí ji jako hodnotu do řídícího programu
  getColor() {
    return this.color;
    // ! Za return se už nic neprovede. Return ukončuje metodu
  }

  repaint(newColor) {
    console.log(`Přebarvuji auto z ${this.color} na ${newColor}`);
    this.color = newColor;
  }
}

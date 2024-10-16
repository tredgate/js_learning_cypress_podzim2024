// new ClassName() -> většinou budeme ukládat do konstanty
import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("Red", "1.4TDI", "Diesel");
dieselCar.logCarProperties();
const petrolCar = new CarBlueprint("Blue", "2.0TSI", "Petrol");
petrolCar.logCarProperties();
dieselCar.logCarProperties();
const electricCar = new CarBlueprint("Gray", "EV 160kW", "Elektřina");
electricCar.logCarProperties();

// Získání barvy z electricCar
console.log(electricCar.color);
console.log(electricCar.logCarProperties()); // metoda nic nevrací, výsledek: undefined
console.log(electricCar.getColor()); // getColor vrátí aktuální hodnotu barvy auta a zapíše do konzole
electricCar.repaint("Žlutá");
electricCar.logCarProperties();

const newDieselCar = dieselCar;
newDieselCar.repaint("Modrá");
dieselCar.logCarProperties(); // ? Jakou mi vrátí barvu?
/*
V souboru cars.mjs na konec souboru vytvořte nový objekt z CarBlueprint
Barva: šedá
Motor: EV 160kW
Fuel: elekřina
Vytvořte volání metody logCarProperties na novém objektu.
*/

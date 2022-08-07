import CadastradorBolsa from "./gerenciador/CadastradorBolsa";
import Observer from "./observer/Observer";

const empresa1 = new Observer(100.0, "Amazon");
const empresa2 = new Observer(500.0, "Tencent");
const empresa3 = new Observer(300.0, "Google");

const bolsabr = new CadastradorBolsa();
console.log("--------------------------------------------------------------------------------------------------------");
bolsabr.subscribe(empresa1, 5.00);
bolsabr.subscribe(empresa2, 4.60);
console.log("--------------------------------------------------------------------------------------------------------");
bolsabr.notify(5.70);
console.log("--------------------------------------------------------------------------------------------------------");
bolsabr.unsubscribe(empresa2);
console.log("--------------------------------------------------------------------------------------------------------");
bolsabr.notify(5.00);
console.log("--------------------------------------------------------------------------------------------------------");
bolsabr.subscribe(empresa3, 6.00);
console.log("--------------------------------------------------------------------------------------------------------");
bolsabr.notify(5.80);

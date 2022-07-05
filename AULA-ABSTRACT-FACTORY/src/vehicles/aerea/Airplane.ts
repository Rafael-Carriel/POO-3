import IAircraft from "./interface/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCarga();
        console.log("Avião: Avião Decolando...");
    }
    getCarga(): void {
        console.log("Avião: Passageiros Embarcados!");
    }
    checkWind(): void {
        console.log("Avião: Ventos OK!");
    }
}
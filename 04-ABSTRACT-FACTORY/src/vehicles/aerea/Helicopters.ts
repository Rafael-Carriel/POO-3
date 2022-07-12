import IAircraft from "./interface/IAircraft";

export default class Helicopters implements IAircraft{

    startRoute(): void {
        this.checkWind();
        this.getCarga();
        console.log("Helicoptero: Helicoptero Decolando...");
    }
    getCarga(): void {
        console.log("Helicoptero: Passageiros Embarcados!");
    }
    checkWind(): void {
        console.log("Helicoptero: Ventos OK!");
    }
}

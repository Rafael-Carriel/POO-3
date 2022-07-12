import IAircraft from "./interface/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCarga();
        console.log("Drone: Decolando...");
    }
    getCarga(): void {
        console.log("Drone: Carga embarcada!");
    }
    checkWind(): void {
        console.log("Drone: Vento OK!");
    }
}
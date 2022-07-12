import ILand from "./interface/Iland";

export default class Motorcycle implements ILand{
    startRoute(): void {
        this.getCarga();
        console.log("Moto: Moto iniciando trajeto!")
    }
    getCarga(): void {
        console.log("Moto: Carga embarcada!")
    }
}
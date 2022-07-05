import ILand from "./interface/Iland";

export default class Scooter implements ILand{
    startRoute(): void {
        this.getCarga();
        console.log("Patinete: Iniciando Rota!")
    }
    getCarga(): void {
        console.log("Patinete: Carga Embarcada!")
    }
}
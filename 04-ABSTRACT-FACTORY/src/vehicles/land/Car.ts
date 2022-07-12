import ILand from "./interface/Iland";

export default class Car implements ILand{
    startRoute(): void {
        this.getCarga();
        console.log("Carro: Carro iniciando trajeto!")
    }
    getCarga(): void {
        console.log("Carro: Passageiros Embarcados!");
    }

}
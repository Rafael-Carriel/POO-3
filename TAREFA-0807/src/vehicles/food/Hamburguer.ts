import IFood from "./interface/IFood";

export default class Hamburguer implements IFood{

    startRoute(): void {
        this.getCarga();
        console.log("Hamburguer: Lanche saiu para entrega!");
    }
    getCarga(): void {
        console.log("Hamburguer: Preparando lanche!");
    }
}

import IFood from "./interface/IFood";

export default class HotDog implements IFood{
    startRoute(): void {
        this.getCarga();
        console.log("HotDog: Lanche saiu para entrega!");
    }
    getCarga(): void {
        console.log("HotDog: Preparando lanche!");
    }

}
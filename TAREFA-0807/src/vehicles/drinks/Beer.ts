import IDrinks from "./interface/IDrinks";

export default class Beer implements IDrinks{
    startRoute(): void {
        this.getCarga();
        console.log("Beer: Saiu para entrega!");
    }
    getCarga(): void {
        console.log("Beer: Bebida sendo preparada!");
    }
}
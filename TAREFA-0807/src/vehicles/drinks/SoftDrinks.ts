import IDrinks from "./interface/IDrinks";

export default class SoftDrink implements IDrinks{
    startRoute(): void {
        this.getCarga();
        console.log("SoftDrinks: Bebida saindo!")
    }
    getCarga(): void {
        console.log("SoftDrinks: Bebida sendo preparada!");
    }

}
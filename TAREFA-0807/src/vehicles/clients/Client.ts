import IDrinks from "../drinks/interface/IDrinks";
import IDeliveryFactory from "../factorys/interface/IDeliveryFactory";
import IFood from "../food/interface/IFood";

export default class Client{
    private food : IFood;
    private drink : IDrinks;

    constructor(factory : IDeliveryFactory){
        this.food = factory.createDeliveryfood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery(): void{
        this.drink.startRoute();
        this.food.startRoute();
        
    }
}
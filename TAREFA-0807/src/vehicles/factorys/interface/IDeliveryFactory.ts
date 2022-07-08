import IDrinks from "../../drinks/interface/IDrinks";
import IFood from "../../food/interface/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrinks;
    createDeliveryfood() : IFood;
}
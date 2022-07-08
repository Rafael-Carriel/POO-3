import IDrinks from "../drinks/interface/IDrinks";
import SoftDrink from "../drinks/SoftDrinks";
import HotDog from "../food/HotDog";
import IFood from "../food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";


export default class IFoodDeliivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new SoftDrink();
    }
    createDeliveryfood(): IFood {
        return new HotDog();
    }

}
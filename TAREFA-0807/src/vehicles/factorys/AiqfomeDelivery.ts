import Beer from "../drinks/Beer";
import IDrinks from "../drinks/interface/IDrinks";
import Hamburguer from "../food/Hamburguer";
import IFood from "../food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";


export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new Beer();
    }
    createDeliveryfood(): IFood {
        return new Hamburguer();
    }

}
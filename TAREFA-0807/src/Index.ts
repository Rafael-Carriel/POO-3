import Client from "./vehicles/clients/Client";
import Company from "./vehicles/const/Company";
import AiqfomeDelivery from "./vehicles/factorys/AiqfomeDelivery";
import IFoodDeliivery from "./vehicles/factorys/IFoodDelivery";
import IDeliveryFactory from "./vehicles/factorys/interface/IDeliveryFactory";


const currentCompany = Company.IFoodDelivery
let factory : IDeliveryFactory;

switch(currentCompany){
    case Company.IFoodDelivery :
        factory = new IFoodDeliivery();
        break;
    case Company.IAiqfomeDelivery :
        factory = new AiqfomeDelivery();
        break;
    default :
        console.log("Companhia não definida!");
}

const cliente = new Client(factory!);
cliente.startDelivery();


import Company from "./vehicles/const/Company";
import ITransportFactory from "./vehicles/factorys/interface/ITransportFactory";
import UberTransport from "../src/vehicles/factorys/UberTransport";
import NineNineTransport from "../src/vehicles/factorys/NineNineTransport";
import Client from "./vehicles/clients/Client";
import LimeTransport from "./vehicles/factorys/LimeTransport";

const currentCompany = Company.Lime;
let factory : ITransportFactory;

switch(currentCompany){
    case Company.Uber :
        factory = new UberTransport();
        break;
    case Company.NineNine :
        factory = new NineNineTransport();
        break;
    case Company.Lime :
        factory = new LimeTransport();
        break;
    default :
        console.log("Companhia não definida!");
}

const cliente = new Client(factory!);
cliente.startRout();


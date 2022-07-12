import IAircraft from "../aerea/interface/IAircraft";
import Iland from "../land/interface/Iland";
import ITransportFactory from "./interface/ITransportFactory";
import Car from "../land/Car";
import Airplane from "../aerea/Airplane";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): Iland {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }

}
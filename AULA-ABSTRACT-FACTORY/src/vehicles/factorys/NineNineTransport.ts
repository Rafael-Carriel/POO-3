import IAircraft from "../aerea/interface/IAircraft";
import Iland from "../land/interface/Iland";
import ITransportFactory from "./interface/ITransportFactory";
import Motorcycle from "../land/Motorcycle";
import Helicopter from "../aerea/Helicopters";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): Iland {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
}
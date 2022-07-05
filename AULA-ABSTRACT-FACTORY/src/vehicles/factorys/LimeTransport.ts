import Drone from "../aerea/Drone";
import IAircraft from "../aerea/interface/IAircraft";
import Iland from "../land/interface/Iland";
import Scooter from "../land/Scooter";
import ITransportFactory from "./interface/ITransportFactory";

export default class LimeTransport implements ITransportFactory{
    createTransportVehicle(): Iland {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }

}
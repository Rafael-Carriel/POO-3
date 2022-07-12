import IAircraft from "../aerea/interface/IAircraft";
import ITransportFactory from "../factorys/interface/ITransportFactory";
import ILand from "../land/interface/Iland";

export default class Client{
    private vehicle : ILand;
    private aircraft : IAircraft;

    constructor(factory : ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRout(): void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}
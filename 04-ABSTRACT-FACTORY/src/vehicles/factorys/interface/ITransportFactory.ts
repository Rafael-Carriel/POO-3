import ILand from "../../land/interface/Iland";
import IAircraft from "../../aerea/interface/IAircraft"

export default interface ITransportFactory{
    createTransportVehicle() : ILand
    createTransportAircraft() : IAircraft
}
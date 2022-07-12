import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{
    private _vehicle = new Vehicle();
    reset(): void {
        this._vehicle = new Vehicle();
    }
    getVehicle(): Vehicle {
        return this._vehicle;
    }
    addWheel(wheel: Wheel): void {
        this._vehicle.addWheel(wheel);
    }
    setVehicleType(value: VehicleType): void {
        this._vehicle.vehicleType = value;
    }
    setSeats(seats: number): void {
        this._vehicle.seats = seats;
    }
    setEngine(engine: Engine): void {
        this._vehicle.engine = engine;
    }
    setTransmission(transmission: Transmission): void {
        this._vehicle.transmission = transmission;
    }
}
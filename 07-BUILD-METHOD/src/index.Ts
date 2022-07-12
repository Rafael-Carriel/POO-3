import VehicleBuilder from "./builders/VehicleBuilder";
import VehicleType from "./components/VehicleType";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
let sedan : Vehicle = builder.getVehicle();
console.log("Criando veículo do tipo: " + VehicleType.SEDAN);
console.log("Asentos : " + sedan.seats);
console.log("Rodas: " + sedan.wheelsTotal);
builder.reset();

director.constructPickup();
let pickup : Vehicle = builder.getVehicle();
console.log("Criando veículo do tipo: " + VehicleType.PICKUPTRUCK);
console.log("Asentos : " + pickup.seats);
console.log("Rodas: " + pickup.wheelsTotal);

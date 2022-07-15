import SanduicheBuilder from "./builders/SanduicheBuilder";
import SanduicheType from "./compenents/SanduicheType";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructorHotDog();
let HotDog : Sanduiche = builder.getSanduiche();
console.log("Criando sanduiche do tipo: " + SanduicheType.sSalsicha);
console.log("Trigo usado no pão : " + HotDog.bread);
console.log("Total de Molhos: " + HotDog.saucesTotal);
builder.reset();

director.constructorXSalada();
let xSalada : Sanduiche = builder.getSanduiche();
console.log("Criando sanduiche do tipo: " + SanduicheType.sSalada);
console.log("Trigo usado no pão : " + xSalada.bread);
console.log("Total de Molhos: " + xSalada.saucesTotal);
builder.reset();

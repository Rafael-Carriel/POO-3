import Bread from "../compenents/Bread";
import Protein from "../compenents/Protein";
import Salad from "../compenents/Salad";
import SanduicheType from "../compenents/SanduicheType";
import Sauce from "../compenents/Sauce";


export default interface IBuilder{
    reset() : void;
    getSanduiche() : void;
    setSanduicheType(sanduicheType : SanduicheType) : void;
    setBread(bread : Bread) : void;
    setProtein(protein : Protein) : void;
    setSalad(salad : Salad) : void;
    addSouce(sauce : Sauce) : void;
}
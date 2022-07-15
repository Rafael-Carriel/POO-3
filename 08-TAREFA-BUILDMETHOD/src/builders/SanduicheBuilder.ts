import Bread from "../compenents/Bread";
import Protein from "../compenents/Protein";
import Salad from "../compenents/Salad";
import SanduicheType from "../compenents/SanduicheType";
import Sauce from "../compenents/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private _sanduiche = new Sanduiche();
    reset(): void {
        this._sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        return this._sanduiche;
    }
    setSanduicheType(value: SanduicheType): void {
        this._sanduiche.sanduicheType = value;
    }
    setBread(value: Bread): void {
        this._sanduiche.bread = value;
    }
    setProtein(value: Protein): void {
        this._sanduiche.protein = value;
    }
    setSalad(value: Salad) : void{
        this._sanduiche.salad = value;
    }
    addSouce(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }

}
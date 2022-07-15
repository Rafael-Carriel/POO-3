import Bread from "../compenents/Bread";
import Protein from "../compenents/Protein";
import Salad from "../compenents/Salad";
import SanduicheType from "../compenents/SanduicheType";
import Sauce from "../compenents/Sauce";

export default class Sanduiche{
    private _sanduicheType : SanduicheType;
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauces : Sauce[] = [];


    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }
    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value
    }
    get bread() : Bread{
        return this._bread;
    }
    set bread(value : Bread){
        this._bread = value;
    }
    get protein() : Protein{
        return this._protein;
    }
    set protein(value : Protein){
        this._protein = value;
    }
    get salad() : Salad{
        return this._salad;
    }
    set salad(value : Salad){
        this._salad = value;
    }
    addSauce(sauce : Sauce){
        this._sauces.push(sauce);
    }
    get sauces() : Sauce[]{
        return this._sauces
    }

    get saucesTotal() : number{
        return this._sauces.length;
    }
}
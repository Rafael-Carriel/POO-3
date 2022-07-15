import IBuilder from "../builders/IBuilder";
import Bread from "../compenents/Bread";
import Protein from "../compenents/Protein";
import Salad from "../compenents/Salad";
import SanduicheType from "../compenents/SanduicheType";
import Sauce from "../compenents/Sauce";

export default class Director{
    constructor(private _builder : IBuilder){}

    constructorHotDog(){
        this._builder.setSanduicheType(SanduicheType.sSalsicha)
        this._builder.setBread(Bread.COMUM);
        this._builder.setProtein(Protein.salsicha);
        this._builder.setSalad(Salad.REPOLHO);
        this._builder.addSouce(new Sauce("Vinagrete"));
        this._builder.addSouce(new Sauce("Mostarda"));
    }

    constructorXSalada(){
        this._builder.setSanduicheType(SanduicheType.sSalada)
        this._builder.setBread(Bread.INTEGRAL);
        this._builder.setProtein(Protein.hamburguer);
        this._builder.setSalad(Salad.ALFACE);
        this._builder.addSouce(new Sauce("ketChup"));
        this._builder.addSouce(new Sauce("Mostarda"));
        this._builder.addSouce(new Sauce("Vinagrete"));
    }
}
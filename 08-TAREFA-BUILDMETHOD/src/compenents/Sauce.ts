export default class Sauce{
    constructor(private _type : String){}

    get tipo() :    String{
        return this._type;
    }
    set tipo(value : String){
        this._type = value;
    }
}
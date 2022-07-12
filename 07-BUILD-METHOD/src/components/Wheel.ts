export default class Wheel{
    constructor(private _rim: number){}

    get rim() : number{
        return this.rim;
    }

    set rim(value : number){
        this._rim = value;
    }
}
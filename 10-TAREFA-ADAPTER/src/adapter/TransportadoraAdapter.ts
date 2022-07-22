import ICorreio from "../correio/ICorreio";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreio{

    constructor(private _transportadora : Transportadora){
        console.log("Adaptando Transportadora para Correios");
    }
    sendCorreios(): void {
        this._transportadora.send();
    }
    receiveCorreios(): void {
        this._transportadora.receive();
    }

}
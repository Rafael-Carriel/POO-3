import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Transportadora: Enviando encomenda");
    }
    receive(): void {
        console.log("Transportadora: Recebendo encomenda");
    }

}
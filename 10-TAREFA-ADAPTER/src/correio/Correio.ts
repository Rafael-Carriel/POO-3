import ICorreio from "./ICorreio";

export default class Correio implements ICorreio{
    sendCorreios(): void {
        console.log("Correio: enviando encomenda!");
    }
    receiveCorreios(): void {
        console.log("Correio: recebendo encomenda!");
    }

}
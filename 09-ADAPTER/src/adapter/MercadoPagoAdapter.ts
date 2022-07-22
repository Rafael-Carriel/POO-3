import MercadoPago from "../mercadoPago/MercadoPago";
import Payoneer from "../payonner/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    private _token : Token;
    constructor(private _mercadoPago : MercadoPago){
        console.log("Adaptando MercadoPago em Paypal");
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._mercadoPago.enviandoPagamento();
    }
    paypalReceive(): void {
        this._mercadoPago.recebendoPagamento();
    }

}
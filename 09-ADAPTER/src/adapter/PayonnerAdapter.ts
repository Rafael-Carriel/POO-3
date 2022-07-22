import Payoneer from "../payonner/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment{
    private _token : Token;
    constructor(private _payoner : Payoneer){
        console.log("Adaptando Payonner em Paypal");
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._payoner.sendPayment();
    }
    paypalReceive(): void {
        this._payoner.receivePayment();
    }

}
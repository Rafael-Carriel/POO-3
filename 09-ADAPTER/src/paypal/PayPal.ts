import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private _token : Token;
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("realizando pgto com Paypal");
    }
    paypalReceive(): void {
        console.log("Recebendo pgto com Paypal");
    }

}
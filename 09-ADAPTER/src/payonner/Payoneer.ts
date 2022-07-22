import Token from "../utils/Token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
    private _token : Token;
    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("realizando pgto com Payonner");
    }
    receivePayment(): void {
        console.log("Recebendo pgto com Payonner");
    }
    
    
}
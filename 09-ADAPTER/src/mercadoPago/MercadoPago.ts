import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago{
    private _token : Token;
    authToken(): Token {
        return new Token();
    }
    enviandoPagamento(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("realizando pgto com MercadoPago");
    }
    recebendoPagamento(): void {
        console.log("Recebendo pgto com MercadoPago");
    }

}
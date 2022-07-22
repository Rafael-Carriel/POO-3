import Token from "../utils/Token";

export default interface IMercadoPago{
    authToken() : Token;
    enviandoPagamento() : void;
    recebendoPagamento() : void;
}
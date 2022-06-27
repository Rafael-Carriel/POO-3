import Endereco from "./Endereco";

export default class Pessoa{
    private _nome : string;
    private _cpf : number;
    private _rg : number;
    private _sexo : string;
    private _endereco : Endereco;

    constructor(nome : string, cpf : number, rg : number, sexo : string, endereco : Endereco){
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._sexo = sexo;
        this._endereco = endereco;   
    }
}
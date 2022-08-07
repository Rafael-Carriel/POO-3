
import Observer from "../observer/Observer";
import ICadastrador from "./ICadastrador";

export default class CadastradorBolsa implements ICadastrador{
    private _empresas : Observer [] = [];
    subscribe(empresa : Observer, dolar : number): void {
        console.log("Empresa " + empresa.name + " cadastrada no Bolsa!! Valor do Dolar: " + dolar + ", Valor da ação: R$ " + dolar * empresa.valorEmp);
        this._empresas.push(empresa);
    }
    unsubscribe(empresa : Observer): void {
        console.log(empresa.name + " foi retirada da bolsa!!");
        this._empresas = this._empresas.filter((element) =>{
            return empresa.name !== element.name });
    }
    notify(dolar : number): void {
        this._empresas.forEach(empresa =>{
            empresa.update(dolar);
        })
    }

}
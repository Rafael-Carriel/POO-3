
export default class Observer {
    valorEmp : number = 0;
    name : string;

    constructor(valorEmp: number, name : string, ){
        this.valorEmp = valorEmp;
        this.name = name;
 
        console.log("O Valor da  " + name + " : US$ " + valorEmp);
    }

    update(valordolar : number): void {
        console.log("Dolar teve alteração!!! O valor da  " + this.name + " é R$ " + this.valorEmp * valordolar);
    }

}
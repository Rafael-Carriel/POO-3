import IConsole from "../console/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{

    constructor(private _console : IConsole){}
    
    playing(): void {
        console.log("Iniciando Jogo!")
    }
    result(): void {
        console.log("Jogo Inicializado com Sucesso!")
    }

}
import IConsole from "../console/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{

    constructor(private console : IConsole){
        super(console);
    }
    challenge() : void{
        console.log("Iniciando Competição!");
    }

}
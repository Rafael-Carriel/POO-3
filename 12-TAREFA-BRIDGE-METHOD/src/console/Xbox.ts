import IConsole from "./IConsole";

export default class Xbox implements IConsole{

    constructor(){
        console.log("Xbox: Iniciando Console");
        this.configureGame();
    }
    configureGame(): void {
        this.token();
        console.log("Xbox: Bem vindo ao seu Console");
    }
    token(): void {
        console.log("Xbox: Fazendo Login");
    }

}
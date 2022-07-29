import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        console.log("PlayStation: Iniciando Console");
        this.configureGame();
    }
    configureGame(): void {
        this.token();
        console.log("PlayStation: Bem vindo ao seu Console");
    }
    token(): void {
        console.log("PlayStation: Fazendo Login");
    }

}
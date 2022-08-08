import DataBase from "../servers/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        console.log("Verificando usuário!")
        if(email.indexOf("@") === -1){
            console.error("E-mail Inválido!");
            return false;
        }
        if(!DataBase.filter(item => item.email === email && item.password === password).length){
            console.error("Usuário não Encontrado1");
            return false;
        }
        return this.checkNext(email, password);
    }

}
import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        console.log("Verificando Permissão!");
        const user = DataBase.filter(item => item.email === email);
        if(!user.length){
            console.error("Usuário não cadasrado");
            return false;
        }
        if(user[0].permission === PermissionType.ADMIN){
            console.log("Seja bem vindo administrador");
        }else{
            console.log("Seja bem vindo usuário");
        }
        return this.checkNext(email,password);
    }

}
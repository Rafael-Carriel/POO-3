import Middleware from "../middleware/Middleware";

export default class Servers{
    private _middleware : Middleware;

    public setMiddleware(middleware : Middleware) : void{
        this._middleware = middleware;
    }
    public logIn(email : string, password : string) : boolean{
        if(this._middleware.check(email,password)){
            console.log("Usuário logado");
            return true;
        }
        return false;
    }
}
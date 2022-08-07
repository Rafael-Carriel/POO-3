import IObserver from "../observer/IObserver";

export default interface ICadastrador{
    subscribe(observer : IObserver, dolar : number) : void;
    unsubscribe(observer : IObserver) : void;
    notify(dolar : number) : void;
}
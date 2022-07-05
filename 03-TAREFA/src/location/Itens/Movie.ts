import IItem from "../Interface/IItem";

export default class Movie implements IItem{
    Start(): void {
        throw new Error("Filme: Filme locado");
    }
    GetDescription(): void {
        throw new Error("Filme: Hobbit");
    }


}
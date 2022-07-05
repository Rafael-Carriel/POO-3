import IItem from "../Interface/IItem";

export default class Game implements IItem{
    Start(): void {
        this.GetDescription();
        console.log("Game: Locado");
    }
    GetDescription(): void {
        console.log("Game: Efootball 2022");
    }

}
import IItem from "./Interface/IItem";
import Game from "./Itens/Game";
import Movie from "./Itens/Movie";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem() : IItem{
        return new Game();
    }
} 
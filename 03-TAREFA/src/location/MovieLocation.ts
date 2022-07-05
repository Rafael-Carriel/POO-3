import IItem from "./Interface/IItem";
import Movie from "./Itens/Movie";
import Location from "./Location";

export default class MovieLocation extends Location{
    protected createItem() : IItem{
        return new Movie();
    }
} 
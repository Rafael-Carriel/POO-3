import IItem from "./Interface/IItem";

export default abstract class Location{
    StartItem() : void{
        const item = this.createItem();
        item.Start();
    }
    protected abstract createItem() : IItem;
}
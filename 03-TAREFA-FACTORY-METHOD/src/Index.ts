import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";


declare var process;

let loc : Location;

if(process.argv.includes("filme")){
    loc = new MovieLocation();
}else if(process.argv.includes("game")){
    loc = new GameLocation();
}else{
    console.error("Selecione um tipo de locavel");
}
if(loc!){
    loc.StartItem();
}
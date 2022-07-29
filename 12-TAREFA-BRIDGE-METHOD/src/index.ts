import IConsole from "./console/IConsole";
import PlayStation from "./console/PlayStation";
import Xbox from "./console/Xbox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";


function StartConsole(con : IConsole){
    console.log("Aguarde");
    const play = new Play(con);
    play.playing();
    play.result();
}

function StartAdvancedPlay(con : IConsole){
    console.log("aguarde");
    const play = new AdvancedPlay(con);
    play.playing();
    play.result();
    play.challenge
}

StartConsole(new PlayStation());
StartAdvancedPlay(new Xbox());
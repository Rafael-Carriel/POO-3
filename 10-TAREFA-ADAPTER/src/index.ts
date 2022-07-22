import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import ICorreio from "./correio/ICorreio";
import Transportadora from "./transportadora/Transportadora";


const met : ICorreio = new TransportadoraAdapter(new Transportadora());

met.receiveCorreios();
met.sendCorreios();
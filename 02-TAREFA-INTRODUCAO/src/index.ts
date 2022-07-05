import Endereco from "./Endereco";
import Pessoa from "./Pessoa";
import { Sexo } from "./utils/enum";


var end1 : Endereco = new Endereco("bananal", 42, 3252355, "Santa Cruz", "Guarapuava");
var end2 : Endereco = new Endereco("amazona", 564, 123125123, "Boqueirão", "Guarapuava");
var p1 : Pessoa = new Pessoa("José Fernando", 34385868, 214235, Sexo.Masculino, end1);
var p2 : Pessoa = new Pessoa("Ana Carolina", 899843529, 124564, Sexo.Feminino, end2);
console.log(p1);
console.log(p2);
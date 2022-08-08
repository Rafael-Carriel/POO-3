import * as readline from "readline"; 
import CheckPermissionMiddleware from "./middleware/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middleware/CheckUserMiddleware";
import Servers from "./servers/Server";

declare var process;
const server = new Servers();

function setPromptQuestions(){
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });
    rl.question("Digite seu e-mail: ", email => {
        rl.question("Digite sua senha:", password => {
            server.logIn(email, password);
            rl.close();
        });
    });
    rl.on("close", ()=> setPromptQuestions());
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);
setPromptQuestions();
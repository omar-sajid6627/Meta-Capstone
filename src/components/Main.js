import Jumbotron from "./jumbotron";
import Specials from "./Specials";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Main=()=>{
    return(
        <main className="mb-3" >
            <Jumbotron/>
            <Specials/>
        </main>
    );
}
export default Main;
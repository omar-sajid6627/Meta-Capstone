import Jumbotron from "./jumbotron";
import Specials from "./Specials";
import Testimonials from "./testimonials";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Main=()=>{
    return(
        <main className="mb-3" >
            <Jumbotron/>
            <Specials/>
            <Testimonials/>
        </main>
    );
}
export default Main;
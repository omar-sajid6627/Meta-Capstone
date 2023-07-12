import "bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./jumbotronstyle.scss";
import myImage from './icons_assets/restauranfood.jpg';
const Jumbotron=()=>{
return(
    <section id="hero">
        <div className="container-fluid py-xl-4 py-lg-4 py-md-4 py-2 " id="hero-section">
          <div className="row" id="jumbotron-row  ">
            <div className="col-7  ">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button type="button" class="btn btn-warning btn-lg">Reserve a table</button>
            </div>
            <div className="col-5">
               <img src={myImage} alt="restaruant image"></img>
            </div>
          </div>
        </div>
    </section>
);

}
export default Jumbotron
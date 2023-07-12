import "bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./jumbotronstyle.scss";
import myImage from './icons_assets/restauranfood.jpg';
const Jumbotron=()=>{
return(
    <section>
        <div className="container-fluid py-5 px-xl-5 px-lg-5 px-md-5" id="hero-section">
          <div className="row" id="jumbotron-row  ">
            <div className="col-7 ps-xl-5 ps-lg-5 ps-md-5 ">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button type="button" class="btn btn-warning">Warning</button>
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
import "./SpecialStyles.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import greekSalad from "./icons_assets/greek salad.jpg"
import bruschetta from './icons_assets/bruschetta.jpg'
import lemonDessert from "./icons_assets/lemon dessert.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const dishes = [
    {
      name: 'Greek Salad',
      image: greekSalad,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschetta,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessert,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];


const Specials =()=>{
  const navigate=useNavigate();

    return(
        <section id="specials">
            <div className="container-fluid " id="specials-section">
                <div className="d-flex align-items-center justify-content-between mb-3 ">
                    <h1>This Weeks Specials</h1>
                   <Link to={'/order'}> <button type="button" className="btn btn-warning btn-lg">Order Online</button></Link>
                </div>
                <div className="row" id="specials-row">
                    {
                        dishes.map((dish,index)=>
                        
                      <div className="col-xl-4 col-lg-4 col-md-8 col-12 mb-xl-0 mb-lg-0 mb-md-4 mb-5 " key={index}>
                        <article>
                    <div className="card ">
                            <img src={dish.image} className="card-img-top mb-2" alt={dish.name}/>
                            <div className="card-body d-flex flex-column  justify-content-between">
                              <div className="d-flex align-items-center justify-content-between mb-2">
                              <h3 className="card-title">{dish.name}</h3>
                              <h3 className="card-title price" >{dish.price}</h3>
                              </div>
                             
                              <h5 className="card-text mb-3">{dish.description}</h5>
                              <a href="#" className="btn btn-warning" onClick={()=>navigate('/order')}>Order for Delivery</a>
                             
                            </div>
                          </div>
                          </article>

                    </div>
                  

                        )
                    }

                    
                </div>
            </div>


        </section>
    );

};

export default Specials;
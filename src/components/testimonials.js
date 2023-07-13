import "./testimonialStyles.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
    faStar,
    faStarHalfStroke
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cust1 from './icons_assets/customer1.jpg';
import cust2 from './icons_assets/customer2.jpg'
import cust3 from './icons_assets/customer3.jpg'
import cust4 from './icons_assets/customer4.jpg';


const level = { '0.5': faStarHalfStroke, '1': faStar, };

  const customers = [
    {
      fullName: 'Maria Sanchez',
      image: cust1,
      rating: [1, 1, 1, 1, 1],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Antony Clifton',
      image: cust2,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Tamika Jackson',
      image: cust3,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Brandon Ming',
      image: cust4,
      rating: [1, 1, 1, 1,0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];


const Testimonials =()=>{

    return(
        <section id="testimonials" className="py-5">
            <div className="container-fluid " id="testimonials-section">
            <div className="d-flex align-items-center justify-content-start mb-3 ">
                    <h1>Our Reviews</h1>
                  
                </div>
                <div className="row" id="testimonials-row">
                    {
                        customers.map((person,index)=>
                        
                      <div className="col-xl-3 col-lg-3 col-md-8 col-12 mb-xl-0 mb-lg-0 mb-md-4 mb-5 " key={index}>
                        <article>
                    <div className="card d-flex align-items-center justify-content-center py-3">
                            <img src={person.image} className="mb-2" alt={person.fullName}/>
                            <div className="card-body d-flex flex-column  justify-content-between">
                              <div className=" mb-2 d-flex align-items-center justify-content-center">
                              <h3 className="card-title">{person.fullName}</h3>
                            
                              </div>
                             <span>
                                {
                                    person.rating.map((point,index)=>
                                     <FontAwesomeIcon
                                     key={index}
                                      icon={level[point]}
                                      size="xs" 
                                     />
                                    )
                                }
                             </span>
                              <p className="card-text mb-3">{person.says}</p>
                             
                              
                             
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

export default Testimonials;
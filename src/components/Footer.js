import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faLocationDot,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footerstyles.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import icon from './icons_assets/logo-white.png'
import { Link } from 'react-router-dom';


const contacts = [
    { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: faPhone, info: '(312) 593-2744', },
    { icon: faEnvelope, info: 'customer@littlelemon.com', },
  ];
  
  const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
  ];

const Footer=()=>{
    return(
        <footer id="footer">
            <div className='container-fluid py-2' id='footer-container'>
                <div className='row'>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6 d-flex flex-column align-items-center'>
                        <img src={icon} alt='logo'></img>
                    </div>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6 d-flex flex-column align-items-start'>
                     <h4>
                        Quick Links
                     </h4>
                     <ul>
                     <Link to={"/"}><li>Home</li> </Link>
                     <Link to={'/about'}><li>About</li></Link>
                     <Link to={'/menu'}><li>Menu</li></Link>
                     <Link to={'/reservation'}><li>Reservations</li></Link>
                     <Link to={'/order'}><li>Order Online</li></Link>
                     <Link to={'/login'}><li>Login</li></Link>

                     </ul>
                     




                    </div>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6 d-flex flex-column align-items-start'>
                        <h4>
                            Contact Us
                        </h4>
                        <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
                    </div>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6 d-flex flex-column align-md-items-start alig-items-center'>
                    <h4>Connect with us</h4>
                    <div className='d-flex align-items-start justify-content-between'>
          {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
              className='me-2'
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
          </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}
export default Footer;
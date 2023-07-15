import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap"
import { Link,useLocation } from "react-router-dom";
import { useState,useEffect } from "react"

import './navstyle.scss';
const Nav=()=>{
  const location =useLocation();
  const [booleanState, setBooleanState] = useState({
    Home: true,
    About: false,
    Menu: false,
    Reservation: false,
    Order: false,
    Login: false,
  });

  const activity = {
    true: 'active',
    false: '',
  };

  useEffect(() => {
    const { pathname } = location;

    setBooleanState((prevState) => ({
      ...prevState,
      Home: pathname === '/',
      About: pathname === '/about',
      Menu: pathname === '/menu',
      Reservation: pathname === '/reservation',
      Order: pathname === '/order',
      Login: pathname === '/login',
    }));
  }, [location]);
    return(
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
        <img src="logo.svg" alt="logo"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            
            <ul class="nav nav-pills navbar-nav mb-3 mt-1" id="myTab" role="tablist">
  
  <Link to={'/'}><li class="nav-item" role="presentation">
    <button class={`nav-link ${activity[booleanState.Home]}`}  id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li></Link>


  <Link to={'/about'}><li class="nav-item" role="presentation">
    <button class={`nav-link ${activity[booleanState.About]}`} id="pills-About-tab" data-bs-toggle="pill" data-bs-target="#pills-About" type="button" role="tab" aria-controls="pills-About" aria-selected="false">About</button>
  </li></Link>


  <Link to={'/menu'}><li class="nav-item" role="presentation">
    <button class={`nav-link ${activity[booleanState.Menu]}`} id="pills-Menu-tab" data-bs-toggle="pill" data-bs-target="#pills-Menu" type="button" role="tab" aria-controls="pills-Menu" aria-selected="false">Menu</button>
  </li></Link>


 <Link to={'/reservation'}> <li class="nav-item" role="presentation">
    <button class={`nav-link ${activity[booleanState.Reservation]}`} id="pills-Reservations-tab" data-bs-toggle="pill" data-bs-target="#pills-Reservations" type="button" role="tab" aria-controls="pills-Reservations" aria-selected="false">Reservations</button>
  </li></Link>

  <Link to={'/order'}><li class="nav-item" role="presentation">
    <button class={`nav-link ${activity[booleanState.Order]}`} id="pills-OrderOnline-tab" data-bs-toggle="pill" data-bs-target="#pills-OrderOnline" type="button" role="tab" aria-controls="pills-OrderOnline" aria-selected="false">Order Online</button>
  </li></Link>

  <Link to={'/login'}><li class="nav-item" role="presentation">
    <button class={`nav-link ${activity[booleanState.Login]}`} id="pills-Login-tab" data-bs-toggle="pill" data-bs-target="#pills-Login" type="button" role="tab" aria-controls="pills-Login" aria-selected="false">Login</button>
  </li></Link>
</ul>

          </div>
        </div>
      </nav>
    );
}
export default Nav;

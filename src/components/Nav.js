import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap"
import './navstyle.scss';
const Nav=()=>{
    return(
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
        <img src="./icons_assets/logo .svg" alt="logo"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            
            <ul class="nav nav-pills navbar-nav mb-3 mt-1" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-About-tab" data-bs-toggle="pill" data-bs-target="#pills-About" type="button" role="tab" aria-controls="pills-About" aria-selected="false">About</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-Menu-tab" data-bs-toggle="pill" data-bs-target="#pills-Menu" type="button" role="tab" aria-controls="pills-Menu" aria-selected="false">Menu</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-Reservations-tab" data-bs-toggle="pill" data-bs-target="#pills-Reservations" type="button" role="tab" aria-controls="pills-Reservations" aria-selected="false">Reservations</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-OrderOnline-tab" data-bs-toggle="pill" data-bs-target="#pills-OrderOnline" type="button" role="tab" aria-controls="pills-OrderOnline" aria-selected="false">Order Online</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-Login-tab" data-bs-toggle="pill" data-bs-target="#pills-Login" type="button" role="tab" aria-controls="pills-Login" aria-selected="false">Login</button>
  </li>
</ul>

          </div>
        </div>
      </nav>
    );
}
export default Nav;

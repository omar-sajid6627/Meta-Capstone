
import Header from './components/header';

import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Menu from './pages/menu';
import Order from './pages/oprderonline';
import Reservations from './pages/reservations';
import ScrollToTop from './scroll';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
   <Routes>
   
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/order' element={<Order/>}/>
  <Route path='/reservation' element={<Reservations/>}/>
  
   
   </Routes>
   <Footer/>
   </Router>
  );
}

export default App;

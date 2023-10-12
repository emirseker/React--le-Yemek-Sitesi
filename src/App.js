import './App.css';
import { Route, Routes } from 'react-router-dom';
import  { Home }  from './components/Home';
import { Menu } from './components/Menu';
import { About } from './components/About';
import {Contact} from './components/Contact'
import { Navbar }  from './components/Navbar';
import { Footer } from './components/Footer';
import  Basket  from './components/Basket';
import { useEffect } from 'react';
import { calculateTotal } from './control/cartSlice';
import { useSelector, useDispatch } from 'react-redux';






function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Menu' exact element={<Menu/>} />
      <Route path='/About' exact element={<About/>} />
      <Route path='/Contact' exact element={<Contact/>} />
      <Route path='/Basket' exact element={<Basket/>} />
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;

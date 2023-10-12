import React from 'react';
import { Link } from 'react-router-dom';
import burgerımage from "../İMG/burgers-chicago.jpg";
import "../styles/Home.css";
import { RiTakeawayFill } from 'react-icons/ri';
import helalimg from '../İMG/297_helal.png';
import yerli from '../İMG/indir.png';
import { BiChevronsDown }from 'react-icons/bi';

export const Home = () => {
  const scroolToFooter = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
};
  return (
    <div className='burgerımage' style={{backgroundImage: `url(${burgerımage})`}}>
      <div className='kapsayıcı'> 
        <div className='açıklama'>
        <span>Hafızada</span>
        <span>İz</span>
        <span>Bırakan</span>
        <span>Lezzet!</span>
        </div>
       <div className='logo'>
            <img className='helalimg' src={helalimg} alt=''/>
        <img className='yerlimg' src={yerli} alt=''/>
      </div>
      </div>
      
       
        {/* <div className='helaldiv'> 
       
        </div> 
       */}
     <div className='order'>
        <Link to="/Basket">
         <button>Sipariş Ver <RiTakeawayFill/> </button>
        </Link>
        <div className="scroll-wrapper" onClick={scroolToFooter}>
                    <div className="scroll-text">Bizi Takip Edin</div>
                    <div className="scroll-icon"><BiChevronsDown/></div>
                </div>
        </div>
     
    </div>
  )
}
export default Home;

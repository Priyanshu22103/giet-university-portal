import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './OnlinePayment.css';
import hdfcImg from '../../assets/hdfc.jpg';
import sbiImg from '../../assets/sbi.jpg';

const OnlinePayment = () => {
   useEffect(() => {
        document.title = 'Online Payment - GIET University | Odisha | Gunupur'
      }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
         ONLINE PAYMENT
        <span className="underline"></span>
        </h2>
      </div>
       <div className="payment-wrapper">
      <div className="payment-card">
        <img src={hdfcImg} alt="HDFC Bank" />
        <Link to="/hdfc-form" className="proceed-link">
          Click to Proceed &rarr;
        </Link>
      </div>
      <div className="payment-card">
        <img src={sbiImg} alt="SBI Bank" />
        <a href="https://www.onlinesbi.sbi" target="_blank" rel="noopener noreferrer" className="proceed-link">
          Click to Proceed &rarr;
        </a>
      </div>
    </div>
    </>
   
  );
};

export default OnlinePayment;

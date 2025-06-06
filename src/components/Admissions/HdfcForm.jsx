import React,{useEffect} from 'react';
import './HdfcForm.css';

const HdfcForm = () => {
  useEffect(() => {
      document.title = 'HDFC FORM - GIET University | Odisha | Gunupur'
    }, []);
  return (
    <div className="hdfc-container">
      <hr className="form-divider" />
      <div className="form-wrapper">
        <div className="form-header">
          <h3 className="form-title">Fill Your Details</h3>
        </div>
        <form className="hdfc-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Father's Name *</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Role No. (Existing Student)</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Programme</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Id *</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Mobile *</label>
              <input type="tel" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>State *</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Pincode *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Country *</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Amount *</label>
              <input type="number" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Address *</label>
              <textarea required></textarea>
            </div>
          </div>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default HdfcForm;


import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [amount, setAmount] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [duration, setDuration] = useState('');

  const paymentMethods = [
    { id: 'razorpay', name: 'Razorpay', icon: '💳', color: '#0c4a6e' },
    { id: 'stripe', name: 'Stripe', icon: '🏦', color: '#635bff' },
    { id: 'upi', name: 'UPI Payment', icon: '📱', color: '#ff6600' },
    { id: 'credit', name: 'Credit Card', icon: '💳', color: '#1e40af' },
    { id: 'debit', name: 'Debit Card', icon: '💳', color: '#059669' },
    { id: 'cash', name: 'Cash Payment', icon: '💵', color: '#dc2626' }
  ];

  const handlePayment = () => {
    if (!selectedPayment || !amount || !vehicleNumber) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Processing payment:', {
      method: selectedPayment,
      amount,
      vehicleNumber,
      duration
    });
    
    alert(`Processing ${selectedPayment} payment of ₹${amount} for vehicle ${vehicleNumber}`);
  };

  return (
    <div className="payment-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <img 
              src="https://www.ewaysservices.com/images/eways.jpg" 
              alt="Eways Services" 
              className="logo"
            />
            <h1>At Parkkin</h1>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Smart Parking Payment</h1>
              <p className="hero-subtitle">
                Secure, fast, and convenient payment solutions for your parking needs
              </p>
            </div>
            <div className="phone-mockup">
              <div className="phone">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">Parkkin App</div>
                    <div className="parking-slot">P-1A</div>
                    <div className="timer">02:30:45</div>
                    <div className="amount">₹50.00</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Form */}
          <section className="payment-section">
            <div className="payment-card">
              <h2 className="section-title">Complete Your Payment</h2>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>Vehicle Number</label>
                  <input
                    type="text"
                    placeholder="Enter vehicle number"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Parking Duration</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select duration</option>
                    <option value="1">1 Hour - ₹25</option>
                    <option value="2">2 Hours - ₹50</option>
                    <option value="4">4 Hours - ₹90</option>
                    <option value="8">8 Hours - ₹150</option>
                    <option value="24">Full Day - ₹200</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="payment-methods">
                <h3>Choose Payment Method</h3>
                <div className="payment-grid">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`payment-option ${selectedPayment === method.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPayment(method.id)}
                      style={{ '--accent-color': method.color }}
                    >
                      <div className="payment-icon">{method.icon}</div>
                      <div className="payment-name">{method.name}</div>
                      <div className="payment-check">
                        {selectedPayment === method.id && '✓'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Button */}
              <button 
                className="pay-button"
                onClick={handlePayment}
                disabled={!selectedPayment || !amount || !vehicleNumber}
              >
                <span>Pay ₹{amount || '0'}</span>
                <div className="button-bg"></div>
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="features">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure Payments</h3>
                <p>Bank-grade security with encrypted transactions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Instant Processing</h3>
                <p>Lightning fast payment processing in seconds</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Multiple Options</h3>
                <p>Support for all major payment methods</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>At Parkkin</h4>
            <p>Smart parking solutions for modern cities</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>support@parkkin.com</p>
            <p>+91 98765 43210</p>
          </div>
          <div className="footer-section">
            <h4>Powered by</h4>
            <p>Eways Services Private Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;

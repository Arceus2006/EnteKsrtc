import React, { useState, useEffect } from 'react';
import { 
  Bus, 
  ArrowRightLeft, 
  Calendar, 
  MapPin, 
  User, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CalendarDays,
  Menu,
  X,
  Quote
} from 'lucide-react';

const TopRoutes = [
  { from: 'Trivandrum', to: 'Kanyakumari', img: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Palakkad', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Palani', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Bangalore', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Coimbatore', img: 'https://images.unsplash.com/photo-1621217734151-51203794bfa2?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Kannur', img: 'https://images.unsplash.com/photo-1634055979927-46328a6f3bdf?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Munnar', img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop' },
  { from: 'Trivandrum', to: 'Mangalore', img: 'https://images.unsplash.com/photo-1555530752-6bf6a524a10e?q=80&w=600&auto=format&fit=crop' },
];

const Destinations = [
  { name: 'Munnar', img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Alleppey', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop' },
  { name: 'Kochi', img: 'https://images.unsplash.com/photo-1555530752-6bf6a524a10e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Kovalam', img: 'https://images.unsplash.com/photo-1574044566347-1dd7788be4a3?q=80&w=800&auto=format&fit=crop' }
];

const Testimonials = [
  { name: 'Sreya from Kochi', text: 'KSRTC is the worst transportation service in Kerala. i like city life and uber.' },
  { name: 'Mukesh Kumar', text: 'A great Kerala Government Bus Booking App, for those in Kerala and those in other states who can easily book bus tickets online.' },
  { name: 'Krishna Kumar', text: 'I Liked: Punctuality, Staff behavior, Cleanliness, Seat comfort. Nice experience with KSRTC Buses.' },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tripType, setTripType] = useState('one-way');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-screen">
        <div className="loader-container">
          <Bus size={64} className="bus-loader" color="var(--primary)" />
          <div className="loading-text">Loading Ente KSRTC...</div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            <Bus size={28} />
            <span>Ente KSRTC</span>
          </div>
          
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-links">
              <a href="#">Contact Us</a>
              <a href="#">Cancellation</a>
              <a href="#">Feedback</a>
              <a href="#">Manage Booking</a>
              <a href="#">Gallery</a>
            </div>
            <div className="nav-actions">
              <div className="social-icons">
                <Facebook size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
                <Youtube size={20} />
              </div>
              <button className="login-btn">Login / Signup</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          
          <div className="booking-widget">
            <div className="widget-tabs">
              <button className="widget-tab active">
                <Bus size={20} />
                Book Bus Ticket
              </button>
              <button className="widget-tab" style={{color: 'var(--gray)'}}>
                Link Ticket Booking
              </button>
            </div>

            <div className="trip-type">
              <button 
                className={`badge-btn ${tripType === 'one-way' ? 'active' : ''}`}
                onClick={() => setTripType('one-way')}
              >
                ONE WAY
              </button>
              <button 
                className={`badge-btn ${tripType === 'round' ? 'active' : ''}`}
                onClick={() => setTripType('round')}
              >
                ROUND TRIP
              </button>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label>Travelling From</label>
                <input type="text" className="input-field" placeholder="Origin City" defaultValue="Bangalore" />
                <MapPin className="input-icon" size={20} />
              </div>

              <button className="swap-btn">
                <ArrowRightLeft size={18} />
              </button>

              <div className="input-group">
                <label>Going To</label>
                <input type="text" className="input-field" placeholder="Destination City" defaultValue="Tirunelveli" />
                <MapPin className="input-icon" size={20} />
              </div>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label>Journey Date</label>
                <input type="text" className="input-field" defaultValue="Tue, 28-Jul-2026" />
                <Calendar className="input-icon" size={20} />
              </div>
              <div className="input-group">
                <label>Return Date (Optional)</label>
                <input type="text" className="input-field" placeholder="Choose Date" disabled={tripType === 'one-way'} />
                <Calendar className="input-icon" size={20} />
              </div>
            </div>

            <button className="btn-primary">SEARCH BUSES</button>
          </div>

        </div>
      </header>

      {/* Top Routes Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-subtitle">Routes</div>
          <h2 className="section-title">Top Routes</h2>
          
          <div className="routes-grid">
            {TopRoutes.map((route, idx) => (
              <div key={idx} className="route-card">
                <img src={route.img} alt={`${route.from} to ${route.to}`} className="route-img" loading="lazy" decoding="async" />
                <div className="route-info">
                  <div className="route-points">
                    <div className="point">
                      <div className="point-dot start"></div>
                      {route.from}
                    </div>
                    <div className="point">
                      <div className="point-dot end"></div>
                      {route.to}
                    </div>
                  </div>
                  <a href="#" className="book-now-link">
                    <CalendarDays size={16} /> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section">
        <div className="container">
          <div className="section-subtitle">Destinations</div>
          <h2 className="section-title">Popular Destinations from <span style={{color: 'var(--secondary)'}}>Trivandrum</span></h2>
          
          <div className="destinations-grid">
            {Destinations.map((dest, idx) => (
              <div key={idx} className="dest-card">
                <img src={dest.img} alt={dest.name} className="dest-img" loading="lazy" decoding="async" />
                <div className="dest-overlay"></div>
                <div className="dest-name">{dest.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-bg">
        <div className="container">
          <div className="section-subtitle">Testimonial</div>
          <h2 className="section-title">Client Feedback</h2>
          
          <div className="testimonials-grid">
            {Testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <Quote className="quote-mark" size={32} />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <User size={28} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>Traveller</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px'}}>
            <Bus size={32} />
            <span style={{fontSize: '1.5rem', fontWeight: 800}}>Ente KSRTC</span>
          </div>
          <p style={{color: 'var(--gray)'}}>&copy; 2026 Ente KSRTC. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App;
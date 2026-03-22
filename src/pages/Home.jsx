function Home() {
  return (
    <div>
      <div className="home-navbar">
        <div className="home-navbar-left">
          <div className="logo">Wander With Wild</div>
          
          <div className="navbar-items">
            <span className="navbar-items-item">Explore</span>
            <span className="navbar-items-item">Archive</span>
            <span className="navbar-items-item">Community</span>
          </div>
        </div>
        
        <div className="home-navbar-right">
          <input placeholder="Search..."></input>
          <div className="user-profile"></div>
        </div>
      </div>

      <div className="home-main-image">
        <span className="home-main-image-badge">New Season Open</span>

        <span className="home-main-image-title">
          <h2>Adventure awaits in the great WILD</h2>
        </span>

        <span className="home-main-image-description">
          <p>Discover your next unforgettable experience with us. Explore the world, one adventure at a time.</p>
        </span>

        <button className="home-main-image-button">View Featured Treks</button>
      </div>

      <div className="home-trek-cards">
        <div className="home-trek-cards-header">
          <span className="trek-card-heading">Upcoming Expeditions</span>
          
          <div className="home-trek-cards-badges">
            <span className="home-trek-cards-header-dropdown">Filter by:</span>
            <span className="home-trek-cards-header-badge">Extreme</span>
            <span className="home-trek-cards-header-badge">Hard</span>
            <span className="home-trek-cards-header-badge">Moderate</span>
          </div>
        </div>
        
        <div className="home-trek-cards-container">
           <div className="home-trek-card">
            <div className="home-trek-card-image">
              <div className="home-trek-card-image-badge">Extreme</div>
              <div className="home-trek-card-image-badge">4 Days Left</div>
            </div>

            <div className="home-trek-card-info">
              <div>
                <div className="home-trek-card-info-date">28 October 2026</div>
                <div className="home-trek-card-info-title">Everest Base Camp Trek</div>
                <div className="home-trek-card-info-description">
                  <p>A high altitude trek through the Himalayas to the base camp of Mount Everest.</p>
                </div>
              </div>

              <div>
               <span className="home-trek-card-info-price">Rs. 3,500/- each</span>
               <button className="home-trek-card-info-button">Book Now</button>
              </div>
            </div>
           </div>
         
           <div className="home-trek-card">
            <div className="home-trek-card-image">
              <div className="home-trek-card-image-badge">Extreme</div>
              <div className="home-trek-card-image-badge">4 Days Left</div>
            </div>

            <div className="home-trek-card-info">
              <div>
                <div className="home-trek-card-info-date">12 October 2026</div>
                <div className="home-trek-card-info-title">Everest Base Camp Trek</div>
                <div className="home-trek-card-info-description">
                  <p>A high altitude trek through the Himalayas to the base camp of Mount Everest.</p>
                </div>
              </div>

              <div>
               <span className="home-trek-card-info-price">Rs. 3,500/- each</span>
               <button className="home-trek-card-info-button">Book Now</button>
              </div>
            </div>
           </div>

           <div className="home-trek-card">
            <div className="home-trek-card-image">
              <div className="home-trek-card-image-badge">Extreme</div>
              <div className="home-trek-card-image-badge">4 Days Left</div>
            </div>

            <div className="home-trek-card-info">
              <div>
                <div className="home-trek-card-info-date">14 November 2026</div>
                <div className="home-trek-card-info-title">Everest Base Camp Trek</div>
                <div className="home-trek-card-info-description">
                  <p>A high altitude trek through the Himalayas to the base camp of Mount Everest.</p>
                </div>
              </div>

              <div>
               <span className="home-trek-card-info-price">Rs. 3,500/- each</span>
               <button className="home-trek-card-info-button">Book Now</button>
              </div>
            </div>
           </div>
           
        </div>
      </div>

      <div className="home-community">
        <div className="home-community-left">
          <span className="home-community-left-profiles"></span>

          <span className="home-community-left-info">
           <span>Join our community of adventurers</span>
           <p>Connect with fellow travelers, share your experiences, and get inspired for your next adventure.</p>
          </span>
        </div>
       
        <div className="home-community-right">
          <button className="home-community-right-button">Join Now</button>
        </div>
      </div>

      <div className="home-footer">
        <div className="home-footer-logo">Wander With Wild</div>

        <div className="home-footer-links">
          <span className="home-footer-links-items">Privacy Policy</span>
          <span className="home-footer-links-items">Terms of Service</span>
          <span className="home-footer-links-items">Safety Guidelines</span>
        </div>

        <div className="home-footer-trademark">© 2026 Wander With Wild. All rights reserved.</div>
      </div>

    </div>
  )
}

export default Home

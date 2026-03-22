import { Mountain, Search } from "lucide-react"

function Home() {
  return (
    <div className="flex flex-col gap-5 px-10 py-5">
      <div className="home-navbar flex justify-between items-center">
        <div className="home-navbar-left flex gap-5 items-center">
          <Mountain size={15} fill='#ffffff' stroke='#ffffff'/>
          <span className="text-white text-lg">Wander With Wild</span>
          
          <div className="navbar-items flex gap-5 items-center text-sm">
            <span className="navbar-items-item">Explore</span>
            <span className="navbar-items-item">Archive</span>
            <span className="navbar-items-item">Community</span>
          </div>
        </div>
        
       <div className="relative flex items-center">
        <Search size={14} className="absolute left-2 z-10 text-white pointer-events-none" />
        <input type="text" placeholder="Find your next adventure..." className="input input-sm pl-7 w-60" />
      </div>
      </div>

      <div className="home-main-image w-full h-125 flex bg-cover bg-center bg-no-repeat rounded-xl"
        style={{ backgroundImage: "url('/src/assets/img-1.jpg')" }}>
        
        <div className="bg-black/40 h-full w-full flex flex-col justify-center items-start gap-5 px-10 py-8">
          <span className="home-main-image-badge bg-[#d56113]/20 text-[#f06f33] border-2 border-[#ac4006] text-sm rounded-full px-2 py-1 ">NEW SEASON OPEN</span>

          <span className="home-main-image-title text-white font-bold text-5xl">
            <h2>Adventure Awaits In <br /> The Great WILD</h2>
          </span>

          <span className="home-main-image-description text-xl text-white">
            <p>Discover your next unforgettable experience with us. Explore the world, one adventure at a time.</p>
          </span>

          <button className="btn bg-[#FF9900] text-black border-[#e17d00]">View Featured Treks</button>
        </div>
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

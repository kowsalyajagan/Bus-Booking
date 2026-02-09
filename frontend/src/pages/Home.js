import bus1 from "../assets/bus1.jpg";
import bus3 from "../assets/bus3.jpg";
import bus4 from "../assets/bus4.jpg";
import jkbus from "../assets/jkbus.png"
import assure from "../assets/assure.jpg";
import travel3 from "../assets/travel3.jpg"

export default function Home() {
  return (
    <div className="container">
       <div className="card shadow-sm p-4">
        <h2 className="mb-3">Welcome to Bus Booking System</h2>
        <p style={{ fontSize: "18px",padding:"10px" }}>
        India's Fastest Bus booking Platform
          Welcome to our Bus Booking Platform, your trusted destination for fast and easy travel planning. We provide a smooth and user-friendly experience where you can explore trips, check seat availability, and book your journey in just a few clicks. Designed for comfort, speed, and convenience, our platform ensures every traveler enjoys a safe and effortless booking experience. Start your journey with us today!
        </p>

<div id="mainCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={bus1} className="d-block w-100" style={{ height: "350px", objectFit: "cover",objectPosition:"center" }} />
    </div>

    <div className="carousel-item">
      <img src={jkbus} className="d-block w-100" style={{ height: "350px", objectFit: "cover",objectPosition:"center" }} />
    </div>

    <div className="carousel-item ">
      <img src={bus1} className="d-block w-100" style={{ height: "350px", objectFit: "cover" ,objectPosition:"center"}} />
    </div>

    <div className="carousel-item">
      <img src={bus4} className="d-block w-100" style={{ height: "350px", objectFit: "cover",objectPosition:"center" }} />
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
<br />

  </div>
          <h2>Why Choose JK TRAVELS for Bus Ticket Booking?</h2>
        JK TRAVELS is India's fastest growing online ticket booking platform. JK TRAVELS is the official ticketing partner of several State Road Transport Corporation (SRTC) operators and over 6200+ private bus partners covering more than 6,50,000 bus routes
Welcome to our Smart Bus Booking System — a modern, reliable, and streamlined platform designed to make your travel planning effortless. Explore well-organized trip details, real-time seat availability, and transparent fares, all in one place. Whether you're booking a quick ride or planning a long journey, our system ensures a fast, secure, and hassle-free experience. With a smooth user interface and powerful features for both users and admins, this platform brings convenience, speed, and trust to every booking you make. Travel smarter, travel easier — your journey starts here.
Choose our Bus Booking Platform for a travel experience that is smart, simple, and stress-free. We provide fast booking, transparent pricing, and real-time seat updates so you can plan your trip without confusion. Our platform is built to be secure, reliable, and easy for anyone to use. With trusted routes, dedicated support, and customer-first service, we ensure every journey is safe, comfortable, and convenient. When you choose us, you choose quality, speed, and a smoother way to travel.
<br />

<br />
<div
      style={{
        width: "100%",
        marginTop: "30px",
        background: "#0074d9",
        borderRadius: "20px",
        color: "white",
        display: "flex",
        padding: "20px",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          width: "35%",
          padding: "30px",
          borderRadius: "20px"
        }}
      >
        <div style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}>
          ✓ Assured
        </div>

        <div style={{ marginBottom: "15px", fontSize: "18px" }}>
          🚌 Bus cancelled? <br /> 150% Refund
        </div>

        <div style={{ marginBottom: "15px", fontSize: "18px" }}>
          😞 Bad service quality? <br /> Upto 100% refund
        </div>

        <div style={{ marginBottom: "15px", fontSize: "18px" }}>
          ⏳ Bus delayed? <br /> Upto 100% refund
        </div>

        <div style={{ marginBottom: "15px", fontSize: "18px" }}>
          🔄 Changed your plans? <br /> 100% refund
        </div>

        <a
          href="#"
          style={{
            color: "#ffcccb",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
          Read More →
        </a>
      </div>
      

      <div style={{ width: "65%", textAlign: "right" }}>
        <img
          src={assure}
          alt="secure"
          style={{
            width: "90%",
            borderRadius: "20px"
          }}
        />
        
      </div>
      
    </div>

    <div style={{marginTop:"40px"}}>
          <h4>Offers,Discount,Safety</h4>
    <p>Enjoy exciting offers and exclusive discounts on every trip you book through our platform. We provide seasonal deals, festival specials, and user-friendly pricing to make your travel more affordable. Along with savings, your safety is our top priority. Every trip follows strict safety standards, trusted routes, and secure booking methods to ensure a comfortable and worry-free journey. Travel smart, save more, and stay safe with every booking you make with us.</p>

    </div>
     <div style={{display:"flex", padding:"10px",marginLeft:"5px",gap:"10px",textAlign:"center",marginTop:"40px"}}>
 
       <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
            <img src={travel3} className="card-img-top" alt="travel" />
            <div className="card-body">
              <p className="card-text">
                  <a href="#" class="card-link">10%Offer</a>
              </p>
            </div>
            </div>
           

           
            <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
            <img src={travel3} className="card-img-top" alt="travel" />
            <div className="card-body">
              <p className="card-text">
                  <a href="#" class="card-link">10%Offer</a>
              </p>
            </div>
            </div>
           
            <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
            <img src={travel3} className="card-img-top" alt="travel" />
            <div className="card-body">
              <p className="card-text">
                  <a href="#" class="card-link">10%Offer</a>
              </p>
            </div>
            </div>
        
            <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
            <img src={travel3} className="card-img-top" alt="travel" />
            <div className="card-body">
              <p className="card-text">
                  <a href="#" class="card-link">10%Offer</a>
              </p>
            </div>
            </div>
             <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
            <img src={travel3} className="card-img-top" alt="travel" />
            <div className="card-body">
              <p className="card-text">
                  <a href="#" class="card-link">10%Offer</a>
              </p>
            </div>
            </div>
            </div>
      </div>
    
    </div>
    
  );
}

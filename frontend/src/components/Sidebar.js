import { Link } from "react-router-dom";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.jpg";
import travel3 from "../assets/travel3.jpg";
import travel4 from "../assets/travel4.jpg";
// import jklogo from 'jklogo.png'


export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "white",
        borderRight: "1px solid #ddd",
        padding: "20px",
        overflowY: "auto"
      }}
    >
      <h3 className="mb-4">JK Travels</h3>
      {/* <img src={{jklogo}} alt="" /> */}

      <div className="card" style={{ width: "12rem" }}>
        <img src={travel1} className="card-img-top" alt="travel" />

        <div className="card-body">
          <p className="card-text">
            “Choose JK Travels for safe, comfortable and on-time journeys.”
          </p>

        </div>
      </div>
      <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
        <img src={travel2} className="card-img-top" alt="travel" />
        <div className="card-body">
          <p className="card-text">
       “Fast booking, smooth travel.”
          </p>
        </div>
      </div>
            <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
        <img src={travel3} className="card-img-top" alt="travel" />
        <div className="card-body">
          <p className="card-text">
       “Trusted service for every trip.”
          </p>
        </div>
      </div>
       <div className="card" style={{ width: "12rem",padding:"10px",marginTop:"10px" }}>
        <img src={travel4} className="card-img-top" alt="travel" />
        <div className="card-body">
          <p className="card-text">
       “Trusted service for every trip.”
          </p>
        </div>
      </div>
      

    </div>
  );
}

  import { Link } from "react-router-dom";

  export default function Header() {
    return (
      <header
        style={{
          background: "#0d6efd",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "right"
        }}
      >
        <ul className="nav">
          <li><Link to="/" className="nav-link px-3 text-white hover-link">Home</Link></li>
          <li><Link to="/login" className="nav-link px-3 text-white hover-link">Login</Link></li>
          <li><Link to="/register" className="nav-link px-3 text-white hover-link">Register</Link></li>
          <li><Link to="/trips" className="nav-link px-3 text-white hover-link">Trips</Link></li>
          <li><Link to="/book" className="nav-link px-3 text-white hover-link">Booking</Link></li>
          <li><Link to="/contact" className="nav-link px-3 text-white hover-link">Contact</Link></li>
        </ul>
      </header>
    );
  }

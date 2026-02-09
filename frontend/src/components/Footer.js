import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div style={{ marginTop: "40px", background: "#f1f2f4" }}>
      <div style={{ padding: "30px 50px", borderBottom: "1px solid #d9d9d9" }}>
        
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            gap: "30px",
            padding: 0,
            margin: 0,
            fontSize: "16px",
          }}
        >
          <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></li>
          <li><Link to="#" style={{ textDecoration: "none" }}>Offer</Link></li>
          <li><Link to="#" style={{ textDecoration: "none" }}>About</Link></li>
          <li><Link to="#" style={{ textDecoration: "none" }}>Terms</Link></li>
          <li><Link to="#" style={{ textDecoration: "none" }}>Privacy</Link></li>
          <li><Link to="#" style={{ textDecoration: "none" }}>Operators</Link></li>
          <li><Link to="#" style={{ textDecoration: "none" }}>Routes</Link></li>
        </ul>

        <p style={{ textAlign: "center", marginTop: "25px", fontSize: "14px" }}>
          © 2025 JK Travels India Pvt Ltd - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

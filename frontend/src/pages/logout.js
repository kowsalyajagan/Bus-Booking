import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userid");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="p-3">
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

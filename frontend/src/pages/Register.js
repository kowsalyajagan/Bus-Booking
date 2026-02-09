import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "",phoneno:"" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function registerUser() {
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Registration successful. Redirecting to login...");
        setTimeout(() => navigate("/login"), 900);
      } else {
        setMsg(data.message || "Registration failed");
      }
    } catch (err) {
      setMsg("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container w-50">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Register</h3>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          /> 
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phoneno</label>
          <input
            type="number"
            className="form-control"
            value={form.phoneno}
            onChange={(e) => setForm({ ...form, phoneno: e.target.value })}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={registerUser}
          disabled={loading}
          
        >
          {loading ? "Please wait..." : "Register"}
        </button>
        <br />
        {loading && (
  <div style={{ textAlign: "center", marginTop: "10px" }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}

        <p className="mt-3 text-center">{msg}</p>
      </div>
    </div>
  );
}

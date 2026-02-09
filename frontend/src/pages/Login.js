import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function loginUser() {
    setMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.user) {
        localStorage.setItem("userId", data.user._id);
        navigate("/trips");
      } else {
        setMsg(data.message || "Login failed");
      }
    } catch (err) {
      setMsg("Network error");
    }
  }

  return (
    <div className="container w-50">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Login</h3>

        <div className="mb-3">
          <input className="form-control" placeholder="Email"
            value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
        </div>

        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password"
            value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
        </div>

        <button className="btn btn-success w-100" onClick={loginUser}>Login</button>
        
        <p className="mt-3 text-center">{msg}</p>
      </div>
    </div>
  );
}

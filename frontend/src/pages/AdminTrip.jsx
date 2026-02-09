import React, { useState } from "react";
import axios from "axios";

const priceTable = {
  "Chennai-Coimbatore": 500,
  "Chennai-Madurai": 450,
  "Chennai-Bangalore": 600,
  "Chennai-Erode": 400,
  "Coimbatore-Chennai": 500,
  "Coimbatore-Madurai": 350,
  "Coimbatore-Bangalore": 450,
  "Coimbatore-Erode": 200,
  "Madurai-Chennai": 450,
  "Madurai-Coimbatore": 350,
  "Madurai-Bangalore": 550,
  "Madurai-Erode": 300,
  "Bangalore-Chennai": 600,
  "Bangalore-Coimbatore": 450,
  "Bangalore-Madurai": 550,
  "Bangalore-Erode": 500,
  "Erode-Chennai": 400,
  "Erode-Coimbatore": 200,
  "Erode-Madurai": 300,
  "Erode-Bangalore": 500
};

function AdminTrip() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    price: "",
    seats: ""
  });

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    const key = `${updated.from}-${updated.to}`;
    updated.price = priceTable[key] || "";
    setForm(updated);
  };

  const addTrip = async () => {
    try {
      await axios.post("http://localhost:5000/api/trips", {
        ...form,
        availableSeats: form.seats
      });
      alert("Trip Added Successfully");
      setForm({ from: "", to: "", date: "", price: "", seats: "" });
    } catch {
      alert("Error Adding Trip");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Trip</h2>

      <select
        name="from"
        className="form-control mt-2"
        value={form.from}
        onChange={handleChange}
      >
        <option value="">Select From</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Madurai">Madurai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Erode">Erode</option>
      </select>
      <select
        name="to"
        className="form-control mt-2"
        value={form.to}
        onChange={handleChange}
      >
        <option value="">Select To</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Madurai">Madurai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Erode">Erode</option>
      </select>

      <input
        type="date"
        name="date"
        className="form-control mt-2"
        value={form.date}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price Per Seat"
        className="form-control mt-2"
        value={form.price}
        readOnly
      />
      <input
        type="number"
        name="seats"
        placeholder="Seats"
        className="form-control mt-2"
        value={form.seats}
        onChange={handleChange}
      />

      <button className="btn btn-primary mt-3" onClick={addTrip}>
        Add Trip
      </button>
    </div>
  );
}
export default AdminTrip;

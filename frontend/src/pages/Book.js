import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then((res) => res.json())
      .then((data) => setTrip(data.find((t) => t._id === tripId)));
  }, [tripId]);

  const totalAmount = trip ? trip.price * seats : 0;

  async function confirmBooking() {
    const userId = localStorage.getItem("userId");

    const body = {
      userId,
      tripId,
      name,
      seatsBooked: seats,
      totalAmount
    };

    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    setMsg(data.message);
  }

  return (
    <div className="container w-75">
      <div className="card shadow p-4">
        <h3 className="mb-3">Book Ticket</h3>

        {trip && (
          <>
            <h5>{trip.from} → {trip.to}</h5>
            <p>Date: {trip.date}</p>
            <p>Price Per Seat: ₹{trip.price}</p>
          </>
        )}

        <div className="mb-3">
          <label className="form-label">Passenger Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Seats</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>

        <h5 className="mt-3">Total Amount: ₹{totalAmount}</h5>

        <button className="btn btn-success w-100 mt-3" onClick={confirmBooking}>
          Confirm Booking
        </button>

        <p className="text-success mt-3">{msg}</p>
      </div>
    </div>
  );
}

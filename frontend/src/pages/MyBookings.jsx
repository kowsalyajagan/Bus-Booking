import { useEffect, useState } from "react";

export default function MyBookings() {
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:5000/api/bookings/${userId}`)
      .then(res => res.json())
      .then(setData);
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2>My Booking History</h2>

      {data.length === 0 && <p>No bookings yet</p>}

      {data.map(b => (
        <div className="card p-3 mt-3" key={b._id}>
          <h5>{b.trip.from} → {b.trip.to}</h5>
          <p>Date: {b.trip.date}</p>
          <p>Seats Booked: {b.seatsBooked}</p>
          <p>Total Paid: ₹{b.trip.price * b.seatsBooked}</p>
        </div>
      ))}
    </div>
  );
}

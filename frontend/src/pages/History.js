import { useEffect, useState } from "react";

export default function History() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:5000/api/bookings/${userId}`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  async function cancelBooking(id) {
    const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    alert(data.message);
    setList(list.filter((b) => b._id !== id));
  }

  return (
    <div className="container">
      <h3 className="mb-4">My Booking History</h3>

      {list.length === 0 && <p className="text-muted">No bookings yet</p>}

      <div className="list-group">
        {list.map((b) => (
          <div
            key={b._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{b.trip.from} → {b.trip.to}</h5>
              <p className="mb-0">Date: {b.trip.date}</p>
              <p className="mb-0">Price: ₹{b.trip.price}</p>
              <p className="mb-0">Passenger: {b.name}</p>
              <p className="mb-0">Seats: {b.seatsBooked}</p>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => cancelBooking(b._id)}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

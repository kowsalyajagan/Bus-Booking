import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Trips() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch(() => setTrips([]));
  }, []);
  return (
    <div className="container">
      <h3 className="mb-4">Available Trips</h3>
      <div className="row">
        {trips.map((trip) => (
          <div className="col-md-6 mb-3" key={trip._id}>
            <div className="card shadow-sm">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5>{trip.from} → {trip.to}</h5>
                  <p className="mb-1">Date: {trip.date}</p>
                  <p className="mb-1">Price: ₹{trip.price}</p>
                  <p className="mb-0">Seats: {trip.seats}</p>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/book/${trip._id}`)}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
        {trips.length === 0 && (
          <p className="text-muted text-center mt-4">No trips available</p>
        )}
      </div>
    </div>
  );
}

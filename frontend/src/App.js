import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import Book from "./pages/Book";
import History from "./pages/History";
import Contact from "./pages/Contact";
// import Email from "./pages/Email";
import AdminTrip from "./pages/AdminTrip";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

       <Header />
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          width: "calc(100% - 250px)",
          minHeight: "100vh",
          background: "#f8f9fa",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/book/:tripId" element={<Book />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin" element={<AdminTrip />} />
            <Route path="/contact" element={<Contact/>}/>
            {/* <Route path="/Email" element={<Email/>}/> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

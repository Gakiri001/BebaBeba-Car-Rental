import "./assets/global.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Listing from "./Pages/Listing/Listing";
import Reservation from "./Pages/Reservation/Reservation";
import Contact from "./Pages/Contacts/Contact";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Pay from "./Pages/Pay/Pay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Pay" element={<Pay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

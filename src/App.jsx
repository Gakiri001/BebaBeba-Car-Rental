import "./assets/global.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Listing from "./Pages/Listing/Listing";
import Reservation from "./Pages/Reservation/Reservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Reservation" element={<Reservation />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

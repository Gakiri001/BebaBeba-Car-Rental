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
import Admin from "./Pages/Admin/Admin";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/Listing" element={<ProtectedRoute><Listing /></ProtectedRoute>} />
            <Route path="/Reservation" element={<ProtectedRoute><Reservation /></ProtectedRoute>} />
            <Route path="/Contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Pay" element={<ProtectedRoute><Pay /></ProtectedRoute>} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

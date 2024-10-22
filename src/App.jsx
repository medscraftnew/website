// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./utils/ProtectedRoute";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from './pages/auth/Login'
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import LabTest from "./pages/labtest/LabTest";
import ABHA from "./pages/ABHA/ABHA";
import About from "./pages/About/About";
import OurServices from "./pages/OurServices/OurServices";
import ContactUs from "./pages/ContactUs/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FloatingCallIcon from "./components/FloatingCallIcon";
import PageNotFound from "./pages/PageNotFound/PageNotFound";



function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<LandingPage />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/OurServices" element={<OurServices />} />
            <Route path="/LabTest" element={<LabTest />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/CreateAbha" element={<ABHA />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/login" element={<Login />} />

          {/* 🔐 Protected Routes 🔐 */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* <Route    ==================== example of another protected route =======================
            path="/landingpage"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}

          {/* 🔐 Protected Routes 🔐*/}

        </Routes>
        <FloatingCallIcon />
      </Router>
    </AuthProvider>
  );  
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import ServicePage from "./pages/ServicePage";
import ServicesPage from "./pages/ServicesPage";
import RegisterNewServicePage from "./pages/RegisterNewServicePage";
import ProfilePage from "./pages/ProfilePage.js";
import CheckMyServicesPage from "./pages/CheckMyServicesPage";
import CheckEmail from "./pages/CheckEmail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/services" element={<RegisterNewServicePage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
          <Route path="/users" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/myservices" element={<CheckMyServicesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/checkemail" element={<CheckEmail />} />
        </Routes>
      </main>
      <ToastContainer position="bottom-center" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

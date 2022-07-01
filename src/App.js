import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import RegisterNewServicePage from "./pages/RegisterNewServicePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/services" element={<RegisterNewServicePage />} />
          <Route path="/users" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ToastContainer position="bottom-center" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

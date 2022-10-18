import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return (
    <div className="bg-sky-800 w-full h-[100%]">
    <Header />
    <Routes>
        <Route path="/"  element={ <Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    <ToastContainer />
    </div>
  );
}

export default App;

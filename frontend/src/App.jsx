import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login";
import { Register } from "./pages/Register";
import { EmailVerify } from "./pages/EmailVerify";
import { DashBoard } from "./pages/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/verify/:token" element={<EmailVerify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

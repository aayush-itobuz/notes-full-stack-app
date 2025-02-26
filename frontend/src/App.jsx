import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login";
import { Register } from "./pages/Register";
import { EmailVerify } from "./pages/EmailVerify";
import { DashBoard } from "./pages/DashBoard";
import {EditNote} from "./pages/EditNote";

function App() {
  return (
    <>
     <div className="container mx-auto p-2 h-full">
     <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/verify/:token" element={<EmailVerify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/edit" element={<EditNote />} />
      </Routes>
     </div>
    </>
  );
}

export default App;

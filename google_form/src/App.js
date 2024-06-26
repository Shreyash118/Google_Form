import "./App.css";
import CreateNewForm from "./components/CreateForm/CreateNewForm";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NotFound from "./pages/Not Found/NotFound";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/Landing Page/HomePage";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/Login" />} />
          <Route path="/form/:id" element={<CreateNewForm />}></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

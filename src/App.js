import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import { Profile } from "./components/Profile";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default App;

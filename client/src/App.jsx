import "./App.css";
import StoresSection from "./components/storesSection/StoresSection";
import Landing from "./views/landing/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/stores" element={<StoresSection />} />
    </Routes>
  );
}

export default App;

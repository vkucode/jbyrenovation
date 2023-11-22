import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Navbar from "./components/elements/Navbar";
import Contact from "./components/Contact";
import "./index.css";
import Legales from "./components/Legales";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions_legales" element={<Legales />} />
      </Routes>
    </>
  );
}

export default App;

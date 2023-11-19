import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Navbar from "./components/elements/Navbar";
import Contact from "./components/Contact";
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
      </Routes>
    </>
  );
}

export default App;

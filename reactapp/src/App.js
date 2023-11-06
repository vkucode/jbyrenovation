import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/accueil" element={<Accueil />} />
    </Routes>
  );
}

export default App;

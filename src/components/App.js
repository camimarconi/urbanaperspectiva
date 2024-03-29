import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import NavbarModel from "./NavbarModel";
import Footer from "./Footer";
import Serviços from "../pages/Serviços";
import Consultoria from "../pages/Consultoria";
import Pesquisa from "../pages/Pesquisa";
import Treinamento from "../pages/Treinamento";
import Colaboração from "../pages/Colaboração";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Publicações from "../pages/Publicações";
import ScrollToTop from "./ScrollToTop.js";
// import ServiçosUnico from "../pages/ServiçosÚnico";

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavbarModel />
      <div className="cover-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/serviços" element={<Serviços />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/treinamento" element={<Treinamento />} />
          <Route path="/colaboração" element={<Colaboração />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/publicações" element={<Publicações />} />
          {/* <Route path="/serviços2" element={<ServiçosUnico />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

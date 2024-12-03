// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Doacao from "./components/Doacao"; // Certifique-se de que o arquivo Doacao.jsx está correto.
import DoacaoFinalizada from "./components/DoacaoFinalizada"; // Importando o componente DoacaoFinalizada
import './App.css'; // Importando estilos globais


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Doacao />} /> {/* Rota para o componente Doacao */}
        <Route path="/doacao-finalizada" element={<DoacaoFinalizada />} /> {/* Rota para DoacaoFinalizada */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirecionamento para a página inicial */}
      </Routes>
    </Router>
  );
};

export default App; // Não esqueça de exportar o componente App

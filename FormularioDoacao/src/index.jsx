import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Componente principal
import FormularioDoacao from './components/Doacao'; // Componente do formulário de doacao
import DoacaoFinalizada from './components/DoacaoFinalizada'; // Componente de doacao finalizada

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/formulario-doacao" element={<FormularioDoacao />} />
      <Route path="/doacao-finalizada" element={<DoacaoFinalizada />} />
    </Routes>
  </Router>
);
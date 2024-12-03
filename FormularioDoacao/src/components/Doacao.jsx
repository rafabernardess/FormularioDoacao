import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação
import '../css/Doacao.css';
 // Ajuste o caminho para refletir a nova estrutura

const Doacao = () => {
  // Estados para armazenar informações do formulário
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [valor, setValor] = useState('');
  const [metodo, setMetodo] = useState('');
  const [mensal, setMensal] = useState(false);
  const [lgpd, setLgpd] = useState(false);
  const [receberInfo, setReceberInfo] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  // Estado para a mensagem de erro

  const navigate = useNavigate(); // Hook de navegação

  // Função para selecionar o método de pagamento
  const selecionarMetodo = (metodoSelecionado) => {
    setMetodo(metodoSelecionado);
  };

  // Formata o valor para o formato monetário
  const formatarValor = (valor) => {
    let numero = valor.replace(/\D/g, '');
    numero = (numero / 100).toFixed(2) + '';
    numero = numero.replace('.', ',');
    numero = numero.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    setValor(numero);
  };

  // Função para finalizar a doação e redirecionar
  const finalizarDoacao = () => {
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!nome || !cpf || !email || !telefone || !valor) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;  // Não prossegue com o envio
    }

    // Se tudo estiver preenchido, limpa a mensagem de erro e prossegue
    setErrorMessage('');
    navigate('/doacao-finalizada'); 
  };

  return (
    <div className="container">
      {/* Logo Noolar */}
      <div className="header">
        <img src="/img/logo.png" alt="Logo" className="logo" />
      </div>
      
      {/* Seção de Dados Pessoais */}
      <div className="sectionDados">
        <h3>1. Dados Pessoais</h3>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="input-field" placeholder='Insira seu Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" className="input-field" placeholder='xxx.xxx.xxx - xx' value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="input-field" placeholder='exemplo@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" className="input-field" placeholder='(xx) xxxx - xxxx' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
      </div>

      {/* Seção de Métodos de Contribuição */}
      <div className="sectionPagamento">
        <h3>2. Forma de Contribuição</h3>
        <div className="contribution-methods">
          <div className="method-container">
            <div
              className={`contribution-method ${metodo === 'Cartão de crédito' ? 'selected' : ''}`}
              onClick={() => selecionarMetodo('Cartão de crédito')}
            >
              <img src="/img/cartao.png" alt="Cartão de crédito" className="method-icon" />
            </div>
            <p className="method-text">Cartão de crédito</p>
          </div>

          <div className="method-container">
            <div
              className={`contribution-method ${metodo === 'Pix' ? 'selected' : ''}`}
              onClick={() => selecionarMetodo('Pix')}
            >
              <img src="/img/pix.png" alt="Pix" className="method-icon" />
            </div>
            <p className="method-text">Pix</p>
          </div>

          <div className="method-container">
            <div
              className={`contribution-method ${metodo === 'Boleto Bancário' ? 'selected' : ''}`}
              onClick={() => selecionarMetodo('Boleto Bancário')}
            >
              <img src="/img/boleto.png" alt="Boleto Bancário" className="method-icon" />
            </div>
            <p className="method-text">Boleto Bancário</p>
          </div>
        </div>

        {/* Opções de Doação e LGPD */}
        <div className="checkbox-group">
          <input type="checkbox" id="mensal" checked={mensal} onChange={() => setMensal(!mensal)} />
          <label htmlFor="mensal">Desejo doar mensalmente</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="lgpd" checked={lgpd} onChange={() => setLgpd(!lgpd)} />
          <label htmlFor="lgpd">Concordo em ceder meus dados de acordo com as políticas LGPD.</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="receberInfo" checked={receberInfo} onChange={() => setReceberInfo(!receberInfo)} />
          <label htmlFor="receberInfo">Concordo em receber informações do trabalho da Noolar.</label>
        </div>
      </div>

      {/* Exibir mensagem de erro */}
      {errorMessage && <div className="error-message"><p>{errorMessage}</p></div>}

      <div className="valores">
        <h2>Selecione o valor</h2>
        <input 
          type="text" 
          placeholder="Ex: R$ 20,00" 
          className="input-value" 
          value={valor} 
          onChange={(e) => formatarValor(e.target.value)}
        />
      </div>
      <div>
        <button className="button" onClick={finalizarDoacao}>FINALIZAR</button>
      </div>      
    </div>
  );
};

export default Doacao;

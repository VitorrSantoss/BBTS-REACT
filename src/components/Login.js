import React, { useState } from 'react';

// 1. IMPORTAÇÕES UNIFICADAS
// Importa o CSS (apenas uma vez)
import '../../src/styles/'; 
// Importa o logo (vou usar o caminho correto que definimos antes)
import logo from '../../src/arquivos/images/logo.png'; 

// 2. DEFINIÇÃO DO PRIMEIRO COMPONENTE (PAINEL DE LOGIN)
// (Note que não precisamos de 'export' aqui)
function PanelLogin() {
  return (
    <div className="panel panel-login">
      <div className="panel-content">
        <img 
          style={{ width: '140px', height: '139px', marginBottom: '30px' }} 
          src={logo} 
          alt="Logo"
        /> 
        <h2>Bem-vindo!</h2>
        <p>Para permanecer conectado, faça seu login.</p>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}

// 3. DEFINIÇÃO DO SEGUNDO COMPONENTE (PAINEL DE SIGNUP)
// (Também sem 'export')
function PanelSignup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // No futuro, você pode chamar uma API de login/cadastro aqui
    console.log({ nome, email, senha });
  };

  return (
    <div className="panel panel-signup">
      <div className="panel-content">
        <h2>CRIE SUA CONTA</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <i className="fas fa-user"></i>
          </div>
          
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="fas fa-envelope"></i>
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <i className="fas fa-lock"></i>
          </div>
          
          <button type="submit" className="btn btn-primary">Criar</button>
        </form>
      </div>
    </div>
  );
}

// 4. COMPONENTE PRINCIPAL DA PÁGINA (LOGIN)
// Este é o componente que o seu roteador vai renderizar
function Login() {
  return (
    <div className="container">
      <PanelLogin />
      <PanelSignup />
    </div>
  );
}

// 5. EXPORTA APENAS O COMPONENTE DA PÁGINA
export default Login;


import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../arquivos/images/logo.png'; 

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

function PanelSignup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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

function Login() {
  return (
    <div className="container">
      <PanelLogin />
      <PanelSignup />
    </div>
  );
}

export default Login;
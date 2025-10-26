import React from 'react';
import PanelLogin from '../components/PanelLogin';
import PanelSignup from '../components/PanelSignup';
import '../styles/Login.css'; // Importa o CSS

function Login() {
  return (
    <div className="container">
      <PanelLogin />
      <PanelSignup />
    </div>
  );
}

export default Login;
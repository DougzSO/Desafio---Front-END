// Login.js
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Login = ({ onNext, onStepCompletion, values }) => {
  const [email, setEmail] = useState(values.email || '');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState(false);

  const validarEmail = (email) => {
    // Expressão regular para validar o formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Conferir se a etapa foi preenchida corretamente e passar para o formulario a informação
    if (validarEmail(email) && senha.trim() && senha === confirmSenha) {
      setError(false);
      onNext();
      onStepCompletion(true, { email, senha });
    } else {
      setError(true);
      onStepCompletion(false);
    }
  };

  return (
    <div style={{ border: `5px solid ${(validarEmail(email) && senha.trim() && confirmSenha.trim() ? 'green' : 'red')}`, padding: '1px', marginTop: '5px', width: '606px' }}>
      <Form color="green" onSubmit={handleSubmit}>
        <h1 className="ui centered">Login</h1>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Confirmação de senha</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" style={{marginLeft: "500px", marginTop: "20px"}}>Avançar</Button>
      </Form>
    </div>
  );
};

export default Login;

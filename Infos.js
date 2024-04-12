import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Infos = ({ onNext, onPrev, onStepCompletion, values }) => {
  const [nome, setNome] = useState(values.nome || '');
  const [sobrenome, setSobrenome] = useState(values.sobrenome || '');
  const [date, setDate] = useState(values.date || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Conferir se a etapa foi preenchida corretamente e passar para o formulario a informação
    if (nome.trim() && sobrenome.trim() && date.trim()) {
      onStepCompletion(true, { nome, sobrenome, date });
      onNext();
    } else {
      onStepCompletion(false);
    }
  };

  return (
    <div style={{ border: `5px solid ${(nome.trim() && !(/\d/.test(nome)) && sobrenome.trim() && !(/\d/.test(sobrenome)) && date.trim() ? 'green' : 'red')}`, padding: '1px', marginTop: '5px', width: '606px' }}>
      <Form color="blue" onSubmit={handleSubmit}>
        <h1 className="ui centered">Dados Pessoais</h1>
        <Form.Field>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Sobrenome</label>
          <input
            type="text"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Data de Nascimento</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" style={{marginLeft: "500px", marginTop: "20px"}}>Avançar</Button>
      </Form>
    </div>
  );
};

export default Infos;

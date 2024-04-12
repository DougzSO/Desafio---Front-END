// Address.js
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Address = ({ onPrev, onStepCompletion, values }) => {
  const [endereco, setEndereco] = useState(values.endereco || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Conferir se a etapa foi preenchida corretamente e passar para o formulario a informação
    if (endereco.trim()) {
      onStepCompletion(true, { endereco });
    } else {
      onStepCompletion(false);
    }
  };

  return (
    <div style={{ border: `5px solid ${(endereco.trim() ? 'green' : 'red')}`, padding: '1px', marginTop: '5px', width: '606px' }}>
      <Form color="green" onSubmit={handleSubmit}>
        <h1 className="ui centered">Endereço</h1>
        <Form.Field>
          <label>Endereço Completo</label>
          <input
            type="text"
            placeholder="Endereço Completo"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" style={{marginLeft: "500px", marginTop: "20px"}}>Avançar</Button>      </Form>
    </div>
  );
};

export default Address;

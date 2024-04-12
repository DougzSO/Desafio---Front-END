import React, { useState } from 'react';
import Login from './Login';
import Info from './Infos';
import Address from './Address';
import { Form, Button } from 'semantic-ui-react';

//Manipulação do formulário a partir dos dados recebidos
const Formulario = () => {
  const [step, setStep] = useState(1);
  const [formularioConcluido, setFormularioConcluido] = useState(false);
  const [formData, setFormData] = useState({
    1: {},
    2: {},
    3: {}
  });

  const handleStepCompletion = (isValid, data, currentStep) => {
    setFormData(prevState => ({
      ...prevState,
      [currentStep]: data
    }));

    // Verificar se todos os campos das abas estão preenchidos
    const allStepsFilled = Object.values(formData).every(stepData => Object.keys(stepData).length > 0);
    
    setFormularioConcluido(allStepsFilled && isValid);
  };
  //Avançar e salvar os dados
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  //Voltar ao passo anterior
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <div style={{ marginTop: '60px' }}>
        <Button onClick={() => setStep(1)} style={{ fontWeight: step === 1 ? 'bold' : 'normal' }}>Etapa 1</Button>
        <Button onClick={() => setStep(2)} style={{ fontWeight: step === 2 ? 'bold' : 'normal' }}>Etapa 2</Button>
        <Button onClick={() => setStep(3)} style={{ fontWeight: step === 3 ? 'bold' : 'normal' }}>Etapa 3</Button>
      </div>
      {/*Validação de cada etapa*/}
      {step === 1 && (
        <Login
          onNext={handleNext}
          onStepCompletion={(isValid, data) => handleStepCompletion(isValid, data, 1)}
          values={formData[1]}
        />
      )}
      {step === 2 && (
        <Info
          onNext={handleNext}
          onPrev={handlePrev}
          onStepCompletion={(isValid, data) => handleStepCompletion(isValid, data, 2)}
          values={formData[2]}
        />
      )}
      {step === 3 && (
        <Address
          onStepCompletion={(isValid, data) => handleStepCompletion(isValid, data, 3)}
          values={formData[3]}
        />
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '510px', marginTop: '-1px'}}>
        <Button disabled={!formularioConcluido} onClick={() => alert('Formulário enviado com sucesso!')} >Enviar</Button>
      </div>
    </div>
  );
};

export default Formulario;

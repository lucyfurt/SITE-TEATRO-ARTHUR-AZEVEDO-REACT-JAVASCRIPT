import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'; // Import the CSS file for styling

function ContactForm() {
  const [state, handleSubmit] = useForm("moqoaddy");
  if (state.succeeded) {
    return <p>Formulário enviado com sucesso!</p>;
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input id="nome" type="text" name="nome" />
        <ValidationError prefix="Nome" field="nome" errors={state.errors} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-group">
        <label htmlFor="data">Data início:</label>
        <input id="data" type="date" name="data_inicio" />
        <ValidationError
          prefix="Data início"
          field="data_inicio"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="data">Data fim:</label>
        <input id="data" type="date" name="data_fim" />
        <ValidationError
          prefix="Data fim"
          field="data_fim"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="evento">Nome do evento:</label>
        <input id="evento" type="text" name="nome_evento" />
        <ValidationError
          prefix="Nome do evento"
          field="nome_evento"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ficha">Ficha técnica e sinopse:</label>
        <textarea id="ficha" name="ficha_sinopse" />
        <ValidationError
          prefix="Ficha técnica e sinopse"
          field="ficha_sinopse"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="empresa">Empresa/Produtora:</label>
        <input id="empresa" type="text" name="empresa" />
        <ValidationError prefix="Empresa" field="empresa" errors={state.errors} />
      </div>
      <div className="form-group">
        <label htmlFor="celular">Celular com DDD:</label>
        <input id="celular" type="text" name="celular" />
        <ValidationError
          prefix="Celular com DDD"
          field="celular"
          errors={state.errors}
        />
      </div>
      <button className="submit-button" type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqoaddy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
        Nome: 
      </label>
      <input
        id="nome"
        type='text' 
        name="nome"
      />
      <ValidationError 
     
        field="nome"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <label htmlFor="data">
        Data início:
      </label>
      <input
        id="data"
        type='date' 
        name="data inicio"
      />
      <ValidationError 
     
        field="email"
        errors={state.errors}
      />
      <label htmlFor="data">
        Data fim:
      </label>
      <input
        id="data"
        type='date' 
        name="data fim"
      />
      <ValidationError 
     
        field="email"
        errors={state.errors}
      />
      <label htmlFor="evento">
        Nome do evento:
      </label>
      <input
        id="evento"
        type='text' 
        name="nome do evento"
      />
      <ValidationError 
     
        field="evento"
        errors={state.errors}
      />
      <label htmlFor="data">
        Ficha técnica e sinopse:
      </label>     
      <textarea
        id="ficha"
        name="ficha tecnica e sinopse"
      />
      <ValidationError 
         
        field="ficha"
        errors={state.errors}
      />
      <label htmlFor="empresa">
        Empresa/Produtora:
      </label>
      <input
        id="empresa"
        type='text' 
        name="empresa"
      />
      <ValidationError 
     
        field="empresa"
        errors={state.errors}
      />
      <label htmlFor="celular">
        Celular com DDD:
      </label>
      <input
        id="celular"
        type='number' 
        name="celular"
      />
      <ValidationError 
     
        field="celular"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

     export default ContactForm
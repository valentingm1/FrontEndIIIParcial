import React, { useState } from "react";
import styles from "./styles/Form.module.css";

function Form({ setContenido, setTitulo, setFooter }) {
  const [errorTitulo, setErrorTitulo] = useState(false);
  const [errorContenido, setErrorContenido] = useState(false);
  const [errorFooter, setErrorFooter] = useState(false);

  const [tituloTemporal, setTituloTemporal] = useState('');
  const [contenidoTemporal, setContenidoTemporal] = useState('');
  const [footerTemporal, setFooterTemporal] = useState('');

  const handleTitulo = (e) => {
    if (e.length < 3) {
      setErrorTitulo(true);
    } else {
      setErrorTitulo(false);
      setTituloTemporal(e)
    }
  };

  const handleFooter = (e) => {
    if (e.length < 6) {
      setErrorFooter(true);
    } else {
      setErrorFooter(false);
      setFooterTemporal(e);
    }
  };

  const handleContenido = (e) => {
    if (e.length > 100) {
      setErrorContenido(true);
    } else {
      setErrorContenido(false);
      setContenidoTemporal(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!errorContenido && !errorTitulo && !errorFooter){
      setTitulo(tituloTemporal)
      setFooter(footerTemporal)
      setContenido(contenidoTemporal)
    }

  };

  return (
    <div className={styles.formContainer}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Titulo de la tarjeta"
          onChange={(e) => handleTitulo(e.target.value)}
        />
        {errorTitulo ? (
          <small>
            Por favor chequea que la información sea correcta. Titulo debe tener
            más de 3 caracteres.
          </small>
        ) : (
          ""
        )}
        <textarea
          className={styles.textareaField}
          placeholder="Contenido de la tarjeta"
          onChange={(e) => handleContenido(e.target.value)}
        ></textarea>
        {errorContenido ? (
          <small>
            Por favor chequea que la información sea correcta. El contenido no
            puede tener mas de 100 caracteres
          </small>
        ) : (
          ""
        )}
        <input
          type="text"
          className={styles.inputField}
          placeholder="Pie de la tarjeta"
          onChange={(e) => handleFooter(e.target.value)}
        />
        {errorFooter ? (
          <small>
            Por favor chequea que la información sea correcta. Footer debe tener
            más de 6 caracteres.
          </small>
        ) : (
          ""
        )}
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;

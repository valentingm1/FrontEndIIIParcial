import React from "react";
import styles from "./styles/Card.module.css";

function Card({ titulo, contenido, footer }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        {titulo ? (
          <h2>{titulo}</h2>
        ) : (
          <h2>Aquí iría el título de la Tarjeta</h2>
        )}
      </div>
      <div className={styles.card_body}>
        {contenido ? <p>{contenido}</p> : <p>Contenido de la tarjeta aquí.</p>}
      </div>
      <div className={styles.card_footer}>
        {footer ? <p>{footer}</p> : <p>Pie de página de la tarjeta</p>}
      </div>
    </div>
  );
}

export default Card;

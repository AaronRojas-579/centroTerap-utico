import React from "react";
import "../src/styles/styles.css";
export const Contacto = () => {
  return (
    <>
      <div className="containerContacto">
        <h3>Terrada 579 CABA, 1406CP</h3>
        <div className="contactoUbicacion">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62497.84030564264!2d-58.41674741008672!3d-34.58802223424795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98cf19f7fb7%3A0x2c0ad04ceb0e5aaa!2sTerrada%20579%2C%20C1406AHI%20CABA!5e0!3m2!1spt-BR!2sar!4v1700342865388!5m2!1spt-BR!2sar"
          >
          </iframe>
        </div>
      </div>
    </>
  );
};

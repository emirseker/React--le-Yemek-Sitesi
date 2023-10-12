import React from "react";
import BurgerImage5 from "../İMG/TBC_RAISFOTO_2755.jpg";
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BurgerImage5})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime geçin</h1>
        <form>
          <label>Adınız Soyadınız</label>
        <input
          type="text"
          name="name"
          placeholder="Lütfen Adınızı Soyadınızı girin"
        />
        <label>Emailiniz</label>
        <input
          type="email"
          name="email"
          placeholder="Lütfen Emailinizi girin"
        />
        <label>Düşünceleriniz</label>
        <textarea
          rows={6}
          name="message"
          placeholder="Lütfen Mesajınızı girin"
        ></textarea>
        </form>
        <button className="button">Gönder</button>
        
      </div>
    </div>
  );
};

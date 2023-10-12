import React from "react";
import imageabout from "../İMG/makd-hero.jpg";
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${imageabout})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Efsane Şeker Burgerlerini yedikten sonr başka burger yemeyceksiniz.
          etine dolgun sevenlerinin tercihi olan Şeker Burger %100 dana eti
          kullanmakta olup helal sertifikasına sahiptir.
        </p>
      </div>
    </div>
  );
};

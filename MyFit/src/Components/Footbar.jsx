import React from "react";
import { UilFacebookF, UilInstagram } from "@iconscout/react-unicons";
import "../CSS/footbar.scss";

export default function Footbar() {
  return (
    <div className="footbar">
      <div className="footbar-top">
        <div className="footbar-top-container">
          <img
            src="https://seeklogo.com/images/T/the-lift-logo-8742A89B73-seeklogo.com.png"
            alt=""
          />
          <div className="footer-top-container-item">
            <ul>
              <h2>Su di noi!</h2>
              <li>Su MyFit</li>
              <li>Privacy Policy</li>
              <li>Contattaci</li>
            </ul>
          </div>
          <div className="footer-top-container-item">
            <ul>
              <h2>Servizi e Prezzi</h2>
              <li>Servizi disponibili</li>
              <li>Prezzi</li>
              <li>ToS</li>
            </ul>
          </div>

          <div className="footer-top-container-item">
            <ul>
              <h2>Contattaci</h2>
              <li id="no">
                Email: <span>email@email.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-top-container-item">
            <div className="social">
              <h2>Social</h2>
              <div className="social-icon">
                <UilFacebookF color={"#fff"} />
                <UilInstagram color={"#fff"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr size="1" />
      <div className="footbar-bottom">© 2023 MyFit | All Rights Reserved</div>
    </div>
  );
}

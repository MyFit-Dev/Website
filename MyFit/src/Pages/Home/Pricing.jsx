import React, { useState, useEffect } from "react";
import Card from "../../Components/Pricing/Card";
import Axios from "axios";
import $ from "jquery";
import "../../CSS/HomeCSS/pricing.scss";
import { json } from "react-router-dom";

export default function Pricing() {
  const [pricingService, setPricingService] = useState([]);
  const colors = ["#E4E4E7", "#F59E0B", "#10B981", "#AA0BF5"]; //Palette colori card

  //Fetch piani
  useEffect(() => {
    Axios.get("https://localhost:7169/api/Plan/getAll")
      .then((response) => {
        setPricingService(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pricing-container">
      <div className="title-container">
        <h2>Ti abbiamo convinto?</h2>
        <h3>Scegli il piano che rispecchia al meglio le tue esigienze!</h3>
      </div>
      <div className="switch-container"></div>

      {pricingService.length > 0 && (
        <div className="card-container">
          {pricingService.map((ps) => (
            <Card
              title={ps.name}
              type={ps.name}
              price={ps.price}
              benefit={ps.description.split(",")}
              color={colors[ps.id - 1]}
            />
          ))}
          <Card
            title={"Advance"}
            type={"Best for enterprise"}
            price={200}
            benefit={["0", "1", "2", "3", "4", "5"]}
            color={"#AA0BF5"}
          />
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Card from "../../Components/Pricing/Card";
import Axios from "axios";
import "../../CSS/HomeCSS/pricing.scss";

export default function Pricing() {
  const [pricingService, setPricingService] = useState([]);

  useEffect(() => {
    Axios.get("https://localhost:7169/api/Plan/getAll").then((response) => {
      setPricingService(response.data);
    });
  }, []);

  console.log(pricingService);

  return (
    <div className="pricing-container">
      <div className="title-container">
        <h2>Ti abbiamo convinto?</h2>
        <h3>Scegli il piano che rispecchia al meglio le tue esigienze!</h3>
      </div>
      <div className="switch-container"></div>

      <div className="card-container">
        <Card
          title={"Free"}
          type={"Best for personal use"}
          price={0}
          benefit={["0", "1", "2", "3", "4", "5"]}
          color={"#A1A1AA"}
        />
        <Card
          title={"Basic"}
          type={"Best for personal use"}
          price={8}
          benefit={["0", "1", "2", "3", "4", "5"]}
          color={"#F59E0B"}
        />
        <Card
          title={"Premium"}
          type={"Best for personal use"}
          price={16}
          benefit={["0", "1", "2", "3", "4", "5"]}
          color={"#10B981"}
        />
        <Card
          title={"Advance"}
          type={"Best for enterprise"}
          price={200}
          benefit={["0", "1", "2", "3", "4", "5"]}
          color={"#AA0BF5"}
        />
      </div>
    </div>
  );
}

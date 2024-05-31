import React, { useEffect, useState } from "react";
import "./MarketCap.css"; // Importe seu arquivo de estilo CSS aqui

export type MarketCapProps = {
  price: number;
  dailyVariation: number;
};

const MarketCap: React.FC<MarketCapProps> = ({ price, dailyVariation }) => {
  // Lógica para determinar a cor do texto com base na variação diária
  const textColor = dailyVariation >= 0 ? "green" : "red";

  return (
    <div className="market-cap">
      <div>
        <span className="label">Preço:</span>
        <span className="price">{price}</span>
      </div>
      <div>
        <span className="label">Variação Diária:</span>
        <span className={`variation ${textColor}`}>
          {dailyVariation > 0 ? "+" : ""}
          {dailyVariation}%
        </span>
      </div>
    </div>
  );
};

export default MarketCap;

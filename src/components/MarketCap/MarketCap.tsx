import React from "react";
import "./MarketCap.css";

export type MarketCapProps = {
  totalCost: number;
  totalSales: number;
  dailyVariation: number;
};

const MarketCap: React.FC<MarketCapProps> = ({
  totalCost,
  totalSales,
  dailyVariation,
}) => {
  // Cálculo do lucro
  const profit = totalSales - totalCost;

  // Lógica para determinar a cor do texto com base na variação diária
  const textColor = dailyVariation >= 0 ? "green" : "red";

  return (
    <div className="market-cap">
      <div className="budget-container">
        <div>
          <strong>Custo Total:</strong> ${totalCost}
        </div>
        <div>
          <strong>Vendas Totais:</strong> ${totalSales}
        </div>
        <div>
          <strong>Lucro:</strong> ${profit}
        </div>
        <span className={`variation ${textColor}`}>
          {dailyVariation > 0 ? "+" : ""}
          {dailyVariation}%
        </span>
      </div>
    </div>
  );
};

export default MarketCap;

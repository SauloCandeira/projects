import React from "react";
import "./MarketCap.css";

export type MarketCapProps = {
  price: number;
  dailyVariation: number;
  totalCost: number;
  totalSales: number;
  costPrice: number;
  salePrice: number;
};

const MarketCap: React.FC<MarketCapProps> = ({
  price,
  dailyVariation,
  totalCost,
  totalSales,
  costPrice,
  salePrice,
}) => {
  // Cálculo do lucro
  const profit = salePrice - costPrice;

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

        <strong>Lucro:</strong> ${profit}
        <span className={`variation ${textColor}`}>
          {dailyVariation > 0 ? "+" : ""}
          {dailyVariation}%
        </span>
      </div>

    </div>
  );
};

export default MarketCap;

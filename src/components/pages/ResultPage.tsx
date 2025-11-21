import React from "react";
import DyneResults from "../organisms/DyneResults"; 
import products from "../../data/dyner.json";
import type { Dyne } from "../../data/types";

type ResultPageProps = {
  productId: string;
};

const ResultPage: React.FC<ResultPageProps> = ({ productId }) => {
  const dyne: Dyne | undefined = products.find((p) => p.id === productId);

  if (!dyne) return <p>Fejl: Dynen kunne ikke findes</p>;

  return <DyneResults result={dyne} />; 
};

export default ResultPage;

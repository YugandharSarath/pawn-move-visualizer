import React, { useState } from "react";
import "./styles.css"; 
import PawnBoard from "./PawnBoard"; 

export default function App() {

  const [hovered, setHovered] = useState(null);

  return (

    <PawnBoard hovered={hovered} setHovered={setHovered} />
  );
}
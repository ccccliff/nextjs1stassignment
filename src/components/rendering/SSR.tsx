// src>components>rendering>SSR.tsx
import React from "react";
const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const { fact } = await response.json();
  return (
    <div className="border-4 solid border-indigo-500 m-4">
      <p>{fact}</p>
    </div>
  );
};

export default SSR;

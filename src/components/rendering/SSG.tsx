import React from "react";

// SSG TEST : 아무것도 하지 않으면 SSG!
const SSG = async () => {
  // (1) 첫 번째 방법 : 아무 옵션도 부여 x
  const response = await fetch(`https://catfact.ninja/fact`);
  const { fact } = await response.json();
  return (
    <div className="border-4 solid border-indigo-500 m-4">
      <p>{fact}</p>
    </div>
  );
};

export default SSG;

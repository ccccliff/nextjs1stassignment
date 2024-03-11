import React from "react";

const ISR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const { fact } = await response.json();
  return (
    <div className="border-4 solid border-indigo-500 m-4">
      <p>{fact}</p>
    </div>
  );
};

export default ISR;

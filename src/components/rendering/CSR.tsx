"use client";

import React, { useEffect, useState } from "react";

const SSG = () => {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const { fact } = await response.json();
      setFact(fact);
    };

    fetchUser();
  }, []);

  if (!fact) {
    return <div>로딩중...</div>;
  }
  return (
    <div className="border-4 solid border-indigo-500 m-4">
      <p>{fact}</p>
    </div>
  );
};

export default SSG;

"use client";

import { useState } from "react";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("sharma");
  return (
    <>
      <div>ClientComponentOne</div>
      {children}
    </>
  );
};

export default ClientComponentOne;

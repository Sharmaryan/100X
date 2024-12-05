import React from "react";
import ClientComponentOne from "../../components/client-component-one";
import ServerComponentOne from "../../components/server-component-one";

const InterLeavingPage = () => {
  return (
    <>
      <div> InterLeavingPage</div>
      <ClientComponentOne >
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
};

export default InterLeavingPage;

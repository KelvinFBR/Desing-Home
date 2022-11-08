import React from "react";
import { Clients } from "./Clients";
import { Contact } from "./Contact";
import { Services } from "./Services";

export const Body = () => {
  return (
    <main>
      <Services />
      <Clients />
      <Contact />
    </main>
  );
};

import React from "react";
import { Card } from "./Card";

export const Services = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold text-[#001c41]">
        Services
      </h2>

      <section className="flex justify-center flex-wrap gap-10 my-20 px-10">
        <Card title="Decoration" imgURL="https://i.imgur.com/sMlMe4U.jpg" />
        <Card title="Food" imgURL="https://i.imgur.com/b8BDVwZ.jpg" />
        <Card title="Party" imgURL="https://i.imgur.com/B9AjmcT.jpg" />
      </section>
    </>
  );
};

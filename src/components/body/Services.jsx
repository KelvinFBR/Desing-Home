import { Card } from "./Card";

export const Services = () => {
  return (
    <section id="services" className="pt-20">
      <h2 className="text-center text-3xl font-bold text-[#001c41]">
        Services
      </h2>

      <section className="flex justify-center flex-wrap gap-10 my-20 px-10">
        <Card
          title="Decoration"
          imgURLs={[
            "https://i.imgur.com/sMlMe4U.jpg",
            "https://i.imgur.com/VgOd2ww.jpg",
            "https://i.imgur.com/N0yMptK.jpg",
          ]}
        />
        <Card
          title="Food"
          imgURLs={[
            "https://i.imgur.com/b8BDVwZ.jpg",
            "https://i.imgur.com/N2TFeJc.jpg",
          ]}
        />
        <Card
          title="Party"
          imgURLs={[
            "https://i.imgur.com/B9AjmcT.jpg",
            "https://i.imgur.com/mZeOLFX.jpg",
          ]}
        />
      </section>
    </section>
  );
};

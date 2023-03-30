import React from "react";
import styles, { layout } from "../styles";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal
        <br className="hidden sm:block" />
        in few easy steps.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Looking for a better card deal? Look no further than Hoobank! Our
        easy-to-use system makes it simple to find the best deals for you. With
        just a few easy steps, you can find the perfect card deal that fits your
        needs.
      </p>

      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="h-full w-full" />
    </div>
  </section>
);

export default CardDeal;

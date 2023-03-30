import React from "react";
import styles from "../styles";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Gradient */}
    <div className="absolute z-0 h-3/5 w-3/5 rounded-full -right-[50%] blue__gradient" />

    <div className="w-full flex justify-between items-center flex-col relative z-[1] mb-6 sm:mb-16 md:flex-row">
      <h1 className={`${styles.heading2}`}>
        What people are
        <br className="hidden sm:block" />
        saying about us
      </h1>
      <div className="w-full mt-6 md:mt-0">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div
      className={`flex flex-wrap justify-center w-full relative z-[1] sm:justify-start feedback-container`}
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;

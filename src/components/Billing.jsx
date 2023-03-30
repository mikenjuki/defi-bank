import React from "react";
import styles, { layout } from "../styles";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="billing images"
        className="w-full h-full relative z-[5]"
      />

      <div className="absolute w-[50%] h-[50%] z-[3] rounded-full top-0 -left-1/2 white__gradient" />

      <div className="absolute w-[50%] h-[50%] z-[0] rounded-full bottom-0 -left-1/2 pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your
        <br className="hidden sm:block" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Thank you for choosing Hoobank! Our billing and invoicing system is
        designed to make your life easier. With our system, you can easily
        control your billing and invoicing needs. We understand that managing
        finances can be a hassle, but with us, you can rest assured that your
        finances are in good hands.
      </p>

      <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
        <img
          src={apple}
          alt="Apple Store"
          className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
        />
        <img
          src={apple}
          alt="Google play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;

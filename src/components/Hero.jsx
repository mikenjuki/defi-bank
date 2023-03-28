import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 flex-col ${styles.flexStart} px-6 sm:px-16 xl:px-0`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-lg mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`ml-2 ${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="flex-1 font-main font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px] ">
          The Next <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>

        <div className="hidden mr-0 ss:flex md:mr-4 ">
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

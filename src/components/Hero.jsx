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
          <span className="text-gradient">Generation</span>
        </h1>

        <div className="hidden mr-0 ss:flex md:mr-4 ">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-main font-semibold text-[52px] ss:text-[68px] text-white leading-[75px] ss:leading-[100px] w-full">
        Payment Method.
      </h1>

      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`${styles.flexCenter} flex flex-1 relative my-10 md:my-0`}>
      <img
        src={robot}
        alt="robot arm"
        className=" z-[5] relative w-full h-full"
      />

      <div className="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient" />
      <div className="absolute z-1 w-4/5 h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-0 w-2/4 h-2/4 right-20 bottom-20 blue__gradient" />
    </div>

    <div className={` ${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;

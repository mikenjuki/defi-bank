import React from "react";
import styles from "../styles";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex flex-row flex-wrap mb-6 sm:mb-20`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-row flex-1 justify-start items-center m-3`}
      >
        <h4 className="font-main font-semibold text-white text-[30px] leading-[44px] xs:text-[40px] xs:leading-[54px] ">
          {stat.value}
        </h4>
        <p className="font-main font-normal text-gradient ml-3 uppercase text-[15px] leading-[21px] xs:text-[20px] xs:leading-[26px] ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;

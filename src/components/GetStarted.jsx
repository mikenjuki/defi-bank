import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} flex flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-main font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          className="object-contain h-[23px] w-[23px]"
          alt="arrow icon"
        />
      </div>

      <p className="font-main font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;

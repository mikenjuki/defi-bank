import React from "react";
import { features } from "../constants";
import styles from "../styles";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]
    ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img
        src={icon}
        alt="feature icon"
        className="object-contain h-2/4 w-2/4"
      />
    </div>

    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-main font-semibold text-[18px] text-white leading-[23px]">
        {title}
      </h4>
      <p className="font-main font-normal text-[16px] text-dimWhite leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;

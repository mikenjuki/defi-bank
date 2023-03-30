import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 my-5 sm:mr-5 md:mr-10 feedback-card">
    <img
      src={quotes}
      alt="quote image"
      className="w-[42px] h-[27px] object-contain"
    />

    <p className="font-main font-normal text-white my-10 text-[18px] leading-[32px]">
      {content}
    </p>

    <div className="flex flex-row">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] object-contain rounded-full"
      />

      <div className="flex flex-col ml-4">
        <h4 className="font-main font-semibold text-white text-[20px] leading-[32px]">
          {name}
        </h4>
        <p className="font-main font-normal text-dimWhite text-[16px] leading-[24px]">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;

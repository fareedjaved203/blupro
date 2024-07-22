import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

const SummaryCard = ({
  title,
  percentage,
  description,
  chart,
  arrow,
  number,
  color,
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex justify-between space-x-10 mb-4">
        <div>
          <Dropdown />
        </div>
        <div className={`flex text-[${color}] space-x-1`}>
          {arrow}
          <div className="text-xs">{percentage}%</div>
        </div>
      </div>
      <div className="flex justify-between space-x-6">
        <div>
          <div className="text-[#042124] text-md">{title}</div>
          <div className="text-2xl">{number}</div>
          <div className="text-[#616161] text-xs">{description}</div>
        </div>
        <div>
          <Image
            src={`/${chart}.svg`}
            width={120}
            height={120}
            alt="blue-chart"
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

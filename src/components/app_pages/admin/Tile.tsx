import React from "react";

const Tile = ({ number, text }: { number: any; text: string }) => (
  <div className="bg-primaryLight p-4 flex flex-col text-center rounded-xl dark:bg-secondary">
    <span className="font-sans font-bold text-[3rem] text-secondary leading-none dark:text-primaryLight">
      {number}
    </span>
    <span className="font-sans text-sm font-medium text-secondary dark:text-primaryLight">{text}</span>
  </div>
);

export default Tile
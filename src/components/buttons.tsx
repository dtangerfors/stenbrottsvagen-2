import React from "react";

const TaskButton = ({ onClick, actionText, icon }: any) => {
  const iconClassName = `ri-${icon}-fill`;

  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center ml-2 text-sm uppercase text-gray-400 font-medium leading-none rounded-[3rem] py-3 pl-4 pr-3 hover:bg-gray-100 transition-all ease-in-out duration-200"
    >
      <span className="mr-2">{actionText}</span>{" "}
      <i className={iconClassName}></i>
    </button>
  );
};

const PrimaryButton = ({ onClick, actionText, text }: any) => {
  
    return (
      <button
        onClick={onClick}
        className="appearance-none bg-primary text-white text-headline uppercase tracking-widest py-6 px-16 leading-none rounded-full font-medium hover:bg-secondary transition-all ease-in-out duration-200"
      >
        <span className="sr-only">{actionText}</span>{" "}
        {text}
      </button>
    );
  };

export { TaskButton, PrimaryButton };
